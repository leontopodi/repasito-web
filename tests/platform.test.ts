import { describe, expect, it } from 'vitest';
import { detectPlatform } from '../src/scripts/platform';
import { stepFor } from '../src/scripts/choreography';

describe('detectPlatform', () => {
  it.each([
    ['Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X)', 0, 'ios'],
    ['Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)', 5, 'ios'],
    ['Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)', 0, 'other'],
    ['Mozilla/5.0 (Linux; Android 15; Pixel 9)', 5, 'android'],
    ['Mozilla/5.0 (Windows NT 10.0; Win64; x64)', 0, 'other'],
  ])('%s → %s', (ua, touch, expected) => {
    expect(detectPlatform(ua, touch)).toBe(expected);
  });
});

describe('stepFor', () => {
  it('dances counts 5–8 as a mirror of 1–4', () => {
    expect(stepFor(1)).toEqual({ pose: 'raised-hand', flipped: false });
    expect(stepFor(5)).toEqual({ pose: 'raised-hand', flipped: true });
    expect(stepFor(8)).toEqual({ pose: 'hands-on-head', flipped: true });
  });
});
