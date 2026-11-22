import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import { SCREENSHOT_PANELS, SCREENSHOT_WIDTHS, screenshotHeight, screenshotPath } from '../src/config/screenshots';
import { LOCALES } from '../src/i18n/locales';

const publicDir = fileURLToPath(new URL('../public', import.meta.url));

describe('screenshots', () => {
  it('keeps the App Store proportions', () => {
    expect(screenshotHeight(1206)).toBe(2622);
    expect(screenshotHeight(720)).toBe(1565);
  });

  it.each(LOCALES.map((locale) => [locale.slug, locale.screens]))('%s has every panel of set "%s" in every width', (_slug, set) => {
    const missing = SCREENSHOT_PANELS.flatMap((panel) => SCREENSHOT_WIDTHS.map((width) => screenshotPath(set, panel, width))).filter(
      (path) => !existsSync(`${publicDir}${path}`),
    );
    expect(missing).toEqual([]);
  });
});
