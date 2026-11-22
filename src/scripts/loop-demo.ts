import { BEAT_MS, COUNTS, stepFor } from './choreography';

const MIN = 1;
const MAX = COUNTS.length;

/**
 * Hero demo: an eight-count phrase that loops between two draggable handles.
 * Mirrors what the app does — loop a section, change speed, mirror the reference.
 */
export class LoopDemo {
  private start: number;
  private end: number;
  private current: number;
  private speed = 1;
  private mirrored = false;
  private playing = false;
  private visible = true;
  private timer: number | undefined;

  private readonly cells: HTMLElement[];
  private readonly poses: Map<string, HTMLElement>;
  private readonly dancer: HTMLElement;
  private readonly numeral: HTMLElement;
  private readonly track: HTMLElement;
  private readonly handles: Record<'start' | 'end', HTMLElement>;
  private readonly playButton: HTMLButtonElement;
  private readonly playLabel: HTMLElement;
  private readonly mirrorButton: HTMLButtonElement;

  constructor(private readonly root: HTMLElement) {
    this.start = Number(root.dataset.start) || MIN;
    this.end = Number(root.dataset.end) || MAX;
    this.current = this.start;
    this.cells = [...root.querySelectorAll<HTMLElement>('[data-count]')];
    this.poses = new Map([...root.querySelectorAll<HTMLElement>('[data-pose]')].map((el) => [el.dataset.pose!, el]));
    this.dancer = this.query('[data-dancer]');
    this.numeral = this.query('[data-numeral]');
    this.track = this.query('[data-track]');
    this.handles = { start: this.query('[data-handle="start"]'), end: this.query('[data-handle="end"]') };
    this.playButton = this.query<HTMLButtonElement>('[data-play]');
    this.playLabel = this.query('[data-play-label]');
    this.mirrorButton = this.query<HTMLButtonElement>('[data-mirror]');
  }

  mount(): void {
    this.render();
    this.bindTrack();
    this.bindHandles();
    this.bindControls();
    this.observeVisibility();

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reducedMotion) this.setPlaying(true);
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
    this.schedule();
  }

  private schedule(): void {
    window.clearTimeout(this.timer);
    this.timer = undefined;
    if (!this.playing || !this.visible || document.hidden) return;
    this.timer = window.setTimeout(() => {
      this.advance();
      this.schedule();
    }, BEAT_MS / this.speed);
  }

  private advance(): void {
    this.current = this.current >= this.end || this.current < this.start ? this.start : this.current + 1;
    this.render();
  }

  // Loop range ------------------------------------------------------------

  private setRange(start: number, end: number): void {
    this.start = clamp(Math.min(start, end), MIN, MAX);
    this.end = clamp(Math.max(start, end), MIN, MAX);
    if (this.current < this.start || this.current > this.end) this.current = this.start;
    this.render();
  }

  private countAt(clientX: number): number {
    const rect = this.track.getBoundingClientRect();
    const ratio = (clientX - rect.left) / rect.width;
    return clamp(Math.floor(ratio * MAX) + 1, MIN, MAX);
  }

  private bindTrack(): void {
    let edge: 'start' | 'end' | null = null;

    this.track.addEventListener('pointerdown', (event) => {
      const count = this.countAt(event.clientX);
      const handle = (event.target as HTMLElement).dataset.handle as 'start' | 'end' | undefined;
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

  private moveEdge(edge: 'start' | 'end', count: number): void {
    if (edge === 'start') this.setRange(Math.min(count, this.end), this.end);
    else this.setRange(this.start, Math.max(count, this.start));
  }

  private bindHandles(): void {
    (['start', 'end'] as const).forEach((edge) => {
      this.handles[edge].addEventListener('keydown', (event) => {
        const value = edge === 'start' ? this.start : this.end;
        const next = keyValue(event.key, value);
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
      this.render();
    });

    this.root.querySelectorAll<HTMLInputElement>('[data-speed]').forEach((input) => {
      input.addEventListener('change', () => {
        this.speed = Number(input.value) || 1;
        this.schedule();
      });
    });

    document.addEventListener('visibilitychange', () => this.schedule());
  }

  private observeVisibility(): void {
    if (!('IntersectionObserver' in window)) return;
    new IntersectionObserver(([entry]) => {
      this.visible = entry?.isIntersecting ?? true;
      this.schedule();
    }).observe(this.root);
  }

  // Rendering -------------------------------------------------------------

  private render(): void {
    this.root.style.setProperty('--start', String(this.start));
    this.root.style.setProperty('--end', String(this.end));
    this.handles.start.setAttribute('aria-valuenow', String(this.start));
    this.handles.end.setAttribute('aria-valuenow', String(this.end));

    this.cells.forEach((cell, i) => {
      const count = i + 1;
      cell.classList.toggle('is-in-loop', count >= this.start && count <= this.end);
      cell.classList.toggle('is-current', count === this.current);
    });

    const { pose, flipped } = stepFor(this.current);
    this.poses.forEach((el, key) => el.classList.toggle('is-active', key === pose));
    this.dancer.classList.toggle('is-flipped', flipped !== this.mirrored);
    this.numeral.textContent = String(this.current);
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
