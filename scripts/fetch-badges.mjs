/**
 * Downloads the official localized App Store and Google Play badges into public/badges/.
 * Run before `astro build` (CI does). Failures are non-fatal: the site falls back to text buttons
 * for any badge that could not be fetched.
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const OUT = join(process.cwd(), 'public', 'badges');

const APPLE = ['en-us', 'es-mx', 'es-es', 'pt-br', 'fr-fr', 'it-it', 'de-de', 'pl-pl', 'ru-ru', 'ja-jp', 'ko-kr', 'zh-cn'];
const PLAY = ['en', 'es-419', 'es', 'pt-br', 'fr', 'it', 'de', 'pl', 'ru', 'ja', 'ko', 'zh-cn'];

const jobs = [
  ...APPLE.map((code) => ({
    file: `app-store-${code}.svg`,
    url: `https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/${code}`,
    type: 'svg',
  })),
  ...PLAY.map((code) => ({
    file: `google-play-${code}.png`,
    url: `https://play.google.com/intl/en_us/badges/static/images/badges/${code}_badge_web_generic.png`,
    type: 'image/png',
  })),
];

async function fetchBadge({ file, url, type }) {
  const res = await fetch(url, { signal: AbortSignal.timeout(15_000) });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const contentType = res.headers.get('content-type') ?? '';
  if (!contentType.includes(type)) throw new Error(`unexpected content type ${contentType}`);
  await writeFile(join(OUT, file), Buffer.from(await res.arrayBuffer()));
}

await mkdir(OUT, { recursive: true });
const results = await Promise.allSettled(jobs.map(fetchBadge));
let failed = 0;
results.forEach((result, i) => {
  if (result.status === 'rejected') {
    failed += 1;
    console.warn(`badge ${jobs[i].file}: ${result.reason.message}`);
  }
});
console.log(`badges: ${jobs.length - failed}/${jobs.length} downloaded`);
