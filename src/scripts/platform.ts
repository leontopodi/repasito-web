export type Platform = 'ios' | 'android' | 'other';

/** Best-effort platform detection for routing a visitor to the right store. */
export function detectPlatform(userAgent: string, maxTouchPoints = 0): Platform {
  if (/android/i.test(userAgent)) return 'android';
  if (/iphone|ipad|ipod/i.test(userAgent)) return 'ios';
  // iPadOS reports a desktop Mac user agent; touch support tells them apart.
  if (/macintosh/i.test(userAgent) && maxTouchPoints > 1) return 'ios';
  return 'other';
}
