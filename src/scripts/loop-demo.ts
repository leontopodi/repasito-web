import { advancePlayhead, COUNTS, COUNT_SECONDS } from './choreography';
import { dancePose, drawDancer } from './launch-dancer';

const MIN = 1;
const MAX = COUNTS.length;
/** Ignore frame gaps longer than this (tab switches, debugger pauses). */
const MAX_FRAME_SECONDS = 0.1;

type Edge = 'start' | 'end';

/**
 * Hero demo: the launch-screen dancer grooves through an eight-count phrase that loops
 * between two draggable handles. Mirrors what the app does: loop a section, change speed,
 * mirror the reference.
 */
export class LoopDemo {
  private start: number;
  private end: number;
  /** Playhead in counts since the start of count 1 (count n spans [n-1, n)). */
  private position: number;
  private speed = 1;
  private mirrored = false;
  private playing = false;
  private visible = true;
  private frame: number | undefined;
  private lastTime: number | undefined;
  private renderedCount = 0;

  private readonly cells: HTMLElement[];
  private readonly canvas: HTMLCanvasElement;
  private readonly ctx: CanvasRenderingContext2D;
  private readonly track: HTMLElement;
  private readonly handles: Record<Edge, HTMLElement>;
  private readonly playButton: HTMLButtonElement;
  private readonly playLabel: HTMLElement;
  private readonly mirrorButton: HTMLButtonElement;

  constructor(private readonly root: HTMLElement) {
    this.start = Number(root.dataset.start) || MIN;
    this.end = Number(root.dataset.end) || MAX;
    this.position = this.start - 1;
    this.cells = [...root.querySelectorAll<HTMLElement>('[data-count]')];
    this.canvas = this.query<HTMLCanvasElement>('[data-dancer]');
    const ctx = this.canvas.getContext('2d');
    if (!ctx) throw new Error('LoopDemo: canvas 2D is unavailable');
    this.ctx = ctx;
    this.track = this.query('[data-track]');
    this.handles = { start: this.query('[data-handle="start"]'), end: this.query('[data-handle="end"]') };
    this.playButton = this.query<HTMLButtonElement>('[data-play]');
    this.playLabel = this.query('[data-play-label]');
    this.mirrorButton = this.query<HTMLButtonElement>('[data-mirror]');
  }

  mount(): void {
    this.sizeCanvas();
    this.renderRange();
    this.renderFrame();
    this.bindTrack();
    this.bindHandles();
    this.bindControls();
    this.observeVisibility();
    new ResizeObserver(() => {
      this.sizeCanvas();
      this.renderFrame();
    }).observe(this.canvas);

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.setPlaying(!reducedMotion);
  }

  private query<T extends HTMLElement = HTMLElement>(selector: string): T {
    const el = this.root.querySelector<T>(selector);
    if (!el) throw new Error(`LoopDemo: missing ${selector}`);
    return el;
  }

  // Playback --------------------------------------------------------------

  private setPlaying(playing: boolean): void {
    this.playing = playing;
    this.playButton.setAttribute('aria-pressed', String(playing));
    this.playLabel.textContent = (playing ? this.playButton.dataset.labelPause : this.playButton.dataset.labelPlay) ?? '';
    this.updateLoop();
  }

  /** Runs the animation loop only while playing, on screen and in a visible tab. */
  private updateLoop(): void {
    const shouldRun = this.playing && this.visible && !document.hidden;
    if (shouldRun && this.frame === undefined) {
      this.lastTime = undefined;
      this.frame = requestAnimationFrame(this.tick);
    } else if (!shouldRun && this.frame !== undefined) {
      cancelAnimationFrame(this.frame);
      this.frame = undefined;
    }
  }

  private readonly tick = (now: number): void => {
    const seconds = this.lastTime === undefined ? 0 : Math.min((now - this.lastTime) / 1000, MAX_FRAME_SECONDS);
    this.lastTime = now;
    this.position = advancePlayhead(this.position, seconds, this.speed, this.start, this.end);
    this.renderFrame();
    this.frame = requestAnimationFrame(this.tick);
  };

  // Loop range ------------------------------------------------------------

  private setRange(start: number, end: number): void {
    this.start = clamp(Math.min(start, end), MIN, MAX);
    this.end = clamp(Math.max(start, end), MIN, MAX);
    if (this.position < this.start - 1 || this.position >= this.end) this.position = this.start - 1;
    this.renderRange();
    this.renderFrame();
  }

  private moveEdge(edge: Edge, count: number): void {
    if (edge === 'start') this.setRange(Math.min(count, this.end), this.end);
    else this.setRange(this.start, Math.max(count, this.start));
  }

  private countAt(clientX: number): number {
    const rect = this.track.getBoundingClientRect();
    return clamp(Math.floor(((clientX - rect.left) / rect.width) * MAX) + 1, MIN, MAX);
  }

  private bindTrack(): void {
    let edge: Edge | null = null;

    this.track.addEventListener('pointerdown', (event) => {
      const count = this.countAt(event.clientX);
      const handle = (event.target as HTMLElement).dataset.handle as Edge | undefined;
      // Grab the explicit handle, otherwise whichever edge is closer to the pointer.
      edge = handle ?? (Math.abs(count - this.start) <= Math.abs(count - this.end) ? 'start' : 'end');
      this.track.setPointerCapture(event.pointerId);
      this.moveEdge(edge, count);
      this.handles[edge].focus({ preventScroll: true });
    });

    this.track.addEventListener('pointermove', (event) => {
      if (edge) this.moveEdge(edge, this.countAt(event.clientX));
    });

    const release = () => {
      edge = null;
    };
    this.track.addEventListener('pointerup', release);
    this.track.addEventListener('pointercancel', release);
  }

  private bindHandles(): void {
    (['start', 'end'] as const).forEach((edge) => {
      this.handles[edge].addEventListener('keydown', (event) => {
        const next = keyValue(event.key, edge === 'start' ? this.start : this.end);
        if (next === undefined) return;
        event.preventDefault();
        this.moveEdge(edge, next);
      });
    });
  }

  private bindControls(): void {
    this.playButton.addEventListener('click', () => this.setPlaying(!this.playing));

    this.mirrorButton.addEventListener('click', () => {
      this.mirrored = !this.mirrored;
      this.mirrorButton.setAttribute('aria-pressed', String(this.mirrored));
      this.canvas.classList.toggle('is-flipped', this.mirrored);
    });

    this.root.querySelectorAll<HTMLInputElement>('[data-speed]').forEach((input) => {
      input.addEventListener('change', () => {
        this.speed = Number(input.value) || 1;
      });
    });

    document.addEventListener('visibilitychange', () => this.updateLoop());
  }

  private observeVisibility(): void {
    new IntersectionObserver(([entry]) => {
      this.visible = entry?.isIntersecting ?? true;
      this.updateLoop();
    }).observe(this.root);
  }

  // Rendering -------------------------------------------------------------

  private sizeCanvas(): void {
    const size = Math.round(this.canvas.clientWidth * Math.min(window.devicePixelRatio || 1, 3));
    if (size > 0 && this.canvas.width !== size) {
      this.canvas.width = size;
      this.canvas.height = size;
    }
  }

  private renderRange(): void {
    this.root.style.setProperty('--start', String(this.start));
    this.root.style.setProperty('--end', String(this.end));
    this.handles.start.setAttribute('aria-valuenow', String(this.start));
    this.handles.end.setAttribute('aria-valuenow', String(this.end));
    this.cells.forEach((cell, i) => {
      const count = i + 1;
      cell.classList.toggle('is-in-loop', count >= this.start && count <= this.end);
    });
    this.renderedCount = 0;
  }

  private renderFrame(): void {
    const count = Math.floor(this.position) + 1;
    if (count !== this.renderedCount) {
      this.cells.forEach((cell, i) => cell.classList.toggle('is-current', i + 1 === count));
      this.renderedCount = count;
    }

    const { ctx, canvas } = this;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const scale = canvas.width / 1024;
    ctx.setTransform(scale, 0, 0, scale, 0, 0);
    drawDancer(ctx, dancePose(this.position * COUNT_SECONDS));
  }
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function keyValue(key: string, value: number): number | undefined {
  switch (key) {
    case 'ArrowLeft':
    case 'ArrowDown':
      return value - 1;
    case 'ArrowRight':
    case 'ArrowUp':
      return value + 1;
    case 'Home':
      return MIN;
    case 'End':
      return MAX;
    default:
      return undefined;
  }
}
