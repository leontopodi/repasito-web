/** Timing of the hero demo's eight-count phrase. Shared by markup and behavior. */
import { GROOVE_SECONDS } from './launch-dancer';

/** Gesture poses shown in the gesture-control section. */
export const POSES = ['raised-hand', 't-pose', 'arms-overhead', 'hands-on-head'] as const;

export const COUNTS = [1, 2, 3, 4, 5, 6, 7, 8] as const;

export const SPEEDS = [0.5, 0.75, 1] as const;

/** One eight-count phrase spans two launch-dance grooves: one hip bounce per count. */
export const COUNT_SECONDS = (2 * GROOVE_SECONDS) / COUNTS.length;

export const DEFAULT_LOOP: readonly [number, number] = [3, 6];

/**
 * Advances the playhead (in counts from the start of count 1) by `seconds` at `speed`,
 * wrapping inside the loop of counts `start`…`end` (inclusive).
 */
export function advancePlayhead(position: number, seconds: number, speed: number, start: number, end: number): number {
  const loopStart = start - 1;
  const loopLength = end - start + 1;
  const next = position + (seconds * speed) / COUNT_SECONDS;
  if (next < loopStart || next >= loopStart + loopLength) {
    return loopStart + ((((next - loopStart) % loopLength) + loopLength) % loopLength);
  }
  return next;
}
