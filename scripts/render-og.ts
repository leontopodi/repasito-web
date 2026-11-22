/**
 * Renders one 1200×630 share image per language into public/og/<locale>.jpg, with the
 * localized headline. Run after changing a hero title:
 *
 *   npm run og
 *
 * Needs Chrome (set CHROME_PATH if it is not found) and fonts for Cyrillic and CJK text
 * (Inter, Noto Sans CJK). The images are committed, so CI does not run this.
 */
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { loadDefaultJapaneseParser, loadDefaultSimplifiedChineseParser } from 'budoux';
import sharp from 'sharp';
import { LOCALES } from '../src/i18n/locales.ts';

const root = fileURLToPath(new URL('..', import.meta.url));
const outDir = join(root, 'public', 'og');
const font = pathToFileURL(join(root, 'node_modules/@fontsource-variable/archivo/files/archivo-latin-wdth-normal.woff2'));
const fontExt = pathToFileURL(join(root, 'node_modules/@fontsource-variable/archivo/files/archivo-latin-ext-wdth-normal.woff2'));
const logo = pathToFileURL(join(root, 'scripts/og/logo.png'));

const CHROME = [process.env.CHROME_PATH, '/usr/bin/google-chrome', '/usr/bin/chromium', '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'].find(
  (path): path is string => !!path && existsSync(path),
);
if (!CHROME) throw new Error('Chrome not found. Set CHROME_PATH.');

/** Fallback families for scripts Archivo does not cover. */
const FALLBACK: Record<string, string> = {
  ru: "'Inter Display', 'Inter'",
  ja: "'Noto Sans CJK JP', 'Hiragino Sans'",
  ko: "'Noto Sans CJK KR', 'Apple SD Gothic Neo'",
  'zh-Hans': "'Noto Sans CJK SC', 'PingFang SC'",
};

const PHRASES = { ja: loadDefaultJapaneseParser(), 'zh-Hans': loadDefaultSimplifiedChineseParser() } as const;

const escapeHtml = (text: string) => text.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

function headlineHtml(title: string, lang: string): string {
  const parser = PHRASES[lang as keyof typeof PHRASES];
  return parser ? parser.parse(title).map(escapeHtml).join('<wbr>') : escapeHtml(title);
}

function headlineSize(title: string, lang: string): number {
  if (lang in FALLBACK && lang !== 'ru') return title.length > 18 ? 62 : 70;
  if (title.length > 48) return 56;
  if (title.length > 40) return 62;
  return 70;
}

function page(title: string, storeName: string, lang: string): string {
  const fallback = FALLBACK[lang] ? `${FALLBACK[lang]}, ` : '';
  return `<!doctype html>
<html lang="${lang}">
<meta charset="utf-8">
<style>
  @font-face { font-family: Archivo; src: url("${font}") format("woff2-variations"); font-weight: 100 900; font-stretch: 62% 125%; unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }
  @font-face { font-family: Archivo; src: url("${fontExt}") format("woff2-variations"); font-weight: 100 900; font-stretch: 62% 125%; unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF; }
  * { box-sizing: border-box; margin: 0; }
  html, body { width: 1200px; height: 630px; }
  body {
    display: grid; grid-template-columns: 1fr 470px; align-items: center;
    padding: 0 0 0 72px;
    background: radial-gradient(ellipse 420px 520px at 965px 330px, #123f33 0%, #0b211c 46%, #060708 100%), #060708;
    color: #f2f4f3;
    font-family: Archivo, ${fallback}sans-serif;
  }
  .copy { display: grid; gap: 34px; }
  .brand { display: flex; align-items: center; gap: 18px; font-size: 34px; font-weight: 800; font-stretch: 112%; letter-spacing: -0.01em; }
  .brand span { width: 14px; height: 14px; border-radius: 50%; background: #2bd9a0; }
  h1 {
    font-size: ${headlineSize(title, lang)}px; font-weight: 850; font-stretch: 122%;
    line-height: ${lang in FALLBACK && lang !== 'ru' ? 1.22 : 1.02}; letter-spacing: ${lang in FALLBACK ? 0 : '-0.025em'};
    text-wrap: balance; word-break: ${lang in FALLBACK && lang !== 'ru' ? 'keep-all' : 'normal'}; overflow-wrap: anywhere;
  }
  p { display: grid; gap: 8px; font-size: 28px; font-weight: 600; }
  small { font-size: 22px; font-weight: 500; color: #9ba7a2; }
  img { width: 470px; height: 470px; mix-blend-mode: lighten; }
</style>
<body>
  <div class="copy">
    <div class="brand"><span></span>RePasito</div>
    <h1>${headlineHtml(title, lang)}</h1>
    <p>${escapeHtml(storeName.replace(/^RePasito\s*[:：]\s*/, ''))}<small>iPhone &amp; Android</small></p>
  </div>
  <img src="${logo}" alt="">
</body>
</html>`;
}

mkdirSync(outDir, { recursive: true });
const work = mkdtempSync(join(tmpdir(), 'repasito-og-'));

for (const locale of LOCALES) {
  const module = await import(`../src/i18n/locales/${locale.slug}.ts`);
  const dict = Object.values(module)[0] as { meta: { storeName: string }; hero: { title: string } };
  const html = join(work, `${locale.slug}.html`);
  const png = join(work, `${locale.slug}.png`);
  writeFileSync(html, page(dict.hero.title, dict.meta.storeName, locale.htmlLang));
  execFileSync(
    CHROME,
    [
      '--headless=new',
      '--no-sandbox',
      '--hide-scrollbars',
      '--force-device-scale-factor=1',
      '--window-size=1200,630',
      '--virtual-time-budget=3000',
      `--screenshot=${png}`,
      pathToFileURL(html).href,
    ],
    { stdio: 'ignore' },
  );
  // JPEG keeps each image well under the size limits of chat-app link previews.
  await sharp(png).jpeg({ quality: 88, mozjpeg: true }).toFile(join(outDir, `${locale.slug}.jpg`));
  console.log(`og/${locale.slug}.jpg`);
}

rmSync(work, { recursive: true, force: true });
