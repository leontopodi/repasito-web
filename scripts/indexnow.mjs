/**
 * Tells IndexNow search engines (Bing, Yandex, Naver, Seznam, Yep) that the site changed.
 *
 *   node scripts/indexnow.mjs https://repasito.app/
 *
 * Runs after each deploy. The key is the name of the 32-character .txt file in public/,
 * which is served at the site root as IndexNow requires.
 */
import { readdirSync } from 'node:fs';

const origin = (process.argv[2] ?? 'https://repasito.app/').replace(/^http:/, 'https:').replace(/\/*$/, '/');
const keyFile = readdirSync(new URL('../public/', import.meta.url)).find((name) => /^[a-f0-9]{32}\.txt$/.test(name));
if (!keyFile) throw new Error('No IndexNow key file in public/');
const key = keyFile.replace('.txt', '');

const sitemap = await fetch(`${origin}sitemap-0.xml`, { signal: AbortSignal.timeout(15_000) }).then((res) => {
  if (!res.ok) throw new Error(`sitemap: HTTP ${res.status}`);
  return res.text();
});
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
if (urlList.length === 0) throw new Error('sitemap has no URLs');

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: new URL(origin).host, key, keyLocation: `${origin}${keyFile}`, urlList }),
  signal: AbortSignal.timeout(15_000),
});
console.log(`IndexNow: ${urlList.length} URLs submitted, HTTP ${res.status}`);
if (!res.ok) process.exitCode = 1;
