/**
 * Converts the App Store screenshot originals into the WebP files the home pages use:
 * public/screens/<set>/<panel>-<width>.webp
 *
 *   npm run screenshots -- "<path to the 'RePasito App Store screenshots' folder>"
 *
 * Run it after the store screenshots change. The output is committed, so CI does not run this.
 */
import { existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { SCREENSHOT_PANELS, SCREENSHOT_WIDTHS, screenshotHeight, screenshotPath } from '../src/config/screenshots.ts';
import type { ScreenshotSet } from '../src/i18n/locales.ts';

/** Where each set's originals live inside the screenshots folder. */
const SOURCES: Record<ScreenshotSet, string> = {
  en: '6.3-inch',
  es: 'localized/6.3-inch/es',
  'pt-br': 'localized/6.3-inch/pt-BR',
  fr: 'localized/6.3-inch/fr',
  it: 'localized/6.3-inch/it',
  de: 'localized/6.3-inch/de',
  pl: 'localized/6.3-inch/pl',
  ru: 'localized/6.3-inch/ru',
  ja: '6.9-inch/ja',
  ko: 'localized/6.3-inch/ko',
  'zh-hans': 'localized/6.3-inch/zh-Hans',
};

const WEBP_QUALITY = 74;

const sourceRoot = process.argv[2];
if (!sourceRoot || !existsSync(sourceRoot)) {
  throw new Error('Usage: npm run screenshots -- "<path to the App Store screenshots folder>"');
}

const publicDir = fileURLToPath(new URL('../public', import.meta.url));

for (const [set, folder] of Object.entries(SOURCES)) {
  mkdirSync(join(publicDir, 'screens', set), { recursive: true });

  for (const [index, panel] of SCREENSHOT_PANELS.entries()) {
    const original = join(sourceRoot, folder, `${index + 1}-${panel}.png`);
    if (!existsSync(original)) throw new Error(`Missing screenshot: ${original}`);

    for (const width of SCREENSHOT_WIDTHS) {
      // `cover` trims the fraction of a pixel by which the 6.9-inch format differs in proportion.
      await sharp(original)
        .resize(width, screenshotHeight(width), { fit: 'cover' })
        .webp({ quality: WEBP_QUALITY, effort: 6 })
        .toFile(join(publicDir, screenshotPath(set, panel, width)));
    }
  }
  console.log(`${set}: ${SCREENSHOT_PANELS.length * SCREENSHOT_WIDTHS.length} files`);
}
