/** The eight-count phrase the hero demo dances. Shared by markup and behavior. */

export const POSES = ['raised-hand', 't-pose', 'arms-overhead', 'hands-on-head'] as const;
export type Pose = (typeof POSES)[number];

export const COUNTS = [1, 2, 3, 4, 5, 6, 7, 8] as const;

/** Counts 5–8 repeat 1–4 on the other side, as most choreography does. */
export function stepFor(count: number): { pose: Pose; flipped: boolean } {
  const index = (count - 1) % POSES.length;
  return { pose: POSES[index]!, flipped: count > POSES.length };
}

export const SPEEDS = [0.5, 0.75, 1] as const;

/** Milliseconds per count at 1× (about 128 BPM, a typical bachata tempo). */
export const BEAT_MS = 470;

export const DEFAULT_LOOP: readonly [number, number] = [3, 6];
