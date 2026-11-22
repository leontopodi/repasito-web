/**
 * App Store screenshots shown on the home pages.
 *
 * `npm run screenshots -- <folder>` converts the store originals into
 * public/screens/<set>/<panel>-<width>.webp. A set is one language's screenshots;
 * each locale names its set in src/i18n/locales.ts.
 */

/** Panels in store listing order. The originals are named `<position>-<panel>.png`. */
export const SCREENSHOT_PANELS = ['loop', 'speed', 'section', 'music', 'record'] as const;

export type ScreenshotPanel = (typeof SCREENSHOT_PANELS)[number];

/** Generated widths in pixels: one panel of the desktop row at 2×, and one phone-width panel at 3×. */
export const SCREENSHOT_WIDTHS = [440, 720] as const;

export const LARGEST_SCREENSHOT_WIDTH = Math.max(...SCREENSHOT_WIDTHS);

/** Every generated file has the proportions of the 6.3-inch App Store format. */
const ASPECT = { width: 1206, height: 2622 } as const;

export function screenshotHeight(width: number): number {
  return Math.round((width * ASPECT.height) / ASPECT.width);
}

/** Site-internal path (without base) of one generated file. */
export function screenshotPath(set: string, panel: ScreenshotPanel, width: number): string {
  return `/screens/${set}/${panel}-${width}.webp`;
}
