import { describe, expect, it } from 'vitest';
import { detectPlatform } from '../src/scripts/platform';
import { advancePlayhead, COUNT_SECONDS } from '../src/scripts/choreography';

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

describe('advancePlayhead', () => {
  it('moves one count per COUNT_SECONDS at 1×', () => {
    expect(advancePlayhead(2, COUNT_SECONDS, 1, 3, 6)).toBeCloseTo(3);
  });

  it('wraps from the end of the loop back to its start', () => {
    expect(advancePlayhead(5.9, COUNT_SECONDS * 0.2, 1, 3, 6)).toBeCloseTo(2.1);
  });

  it('moves into a loop that no longer contains the playhead', () => {
    expect(advancePlayhead(7.5, 0.01, 1, 2, 4)).toBeGreaterThanOrEqual(1);
    expect(advancePlayhead(7.5, 0.01, 1, 2, 4)).toBeLessThan(4);
  });

  it('slows down with speed', () => {
    expect(advancePlayhead(2, COUNT_SECONDS, 0.5, 3, 6)).toBeCloseTo(2.5);
  });
});
