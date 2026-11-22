// @ts-check
import { defineConfig } from 'astro/config';
import { execSync } from 'node:child_process';
import sitemap from '@astrojs/sitemap';

/**
 * The public origin and base path are deployment settings, not code:
 * - SITE_URL   e.g. https://repasito.app (default) or https://<user>.github.io
 * - BASE_PATH  e.g. / (default) or /repasito-web when served from a project-pages path
 * The GitHub Pages workflow fills both from the Pages configuration.
 */
// Pages may report http:// before its certificate is issued; the public site is always HTTPS.
const site = (process.env.SITE_URL || 'https://repasito.app').replace(/^http:\/\//, 'https://');
const base = process.env.BASE_PATH || '/';

/** Sitemap lastmod: the date of the commit being built. */
function lastCommitDate() {
  try {
    return new Date(execSync('git log -1 --format=%cI', { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim());
  } catch {
    return new Date();
  }
}

const sitemapLocales = {
  en: 'en',
  es: 'es',
  'es-es': 'es-ES',
  'pt-br': 'pt-BR',
  fr: 'fr',
  it: 'it',
  de: 'de',
  pl: 'pl',
  ru: 'ru',
  ja: 'ja',
  ko: 'ko',
  'zh-hans': 'zh-Hans',
};

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  compressHTML: true,
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: sitemapLocales },
      filter: (page) => !/\/(get|404)\/?$/.test(new URL(page).pathname),
      lastmod: lastCommitDate(),
    }),
  ],
});
