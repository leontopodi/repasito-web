import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import { DEFAULT_LOCALE, LOCALES } from '../src/i18n/locales';

const ENGLISH_POLICY_URL = 'https://repasito.app/privacy/';
const dir = fileURLToPath(new URL('../src/content/privacy', import.meta.url));

/** What a translation must share with the English policy: its version date, its sections and its links. */
function outline(html: string) {
  return {
    effective: [...html.matchAll(/<time datetime="([^"]+)"/g)].map((m) => m[1]),
    paragraphsPerSection: html
      .split('<section')
      .slice(1)
      .map((section) => (section.match(/<p>/g) ?? []).length),
    links: [...html.matchAll(/href="([^"]+)"/g)].map((m) => m[1]).filter((href) => href !== ENGLISH_POLICY_URL),
  };
}

const read = (slug: string) => readFileSync(`${dir}/${slug}.html`, 'utf8');
const english = outline(read(DEFAULT_LOCALE));
const translations = LOCALES.filter((locale) => locale.slug !== DEFAULT_LOCALE).map((locale) => locale.slug);

describe('privacy policy', () => {
  it('has an effective date', () => {
    expect(english.effective).toHaveLength(1);
  });

  it.each(LOCALES.map((locale) => locale.slug))('%s has a policy file', (slug) => {
    expect(existsSync(`${dir}/${slug}.html`)).toBe(true);
  });

  // A failure here means the English policy changed: update the translation and its date to match.
  it.each(translations)('%s matches the English policy in date, sections and links', (slug) => {
    expect(outline(read(slug))).toEqual(english);
  });

  it.each(translations)('%s says it is a translation and links to the English policy', (slug) => {
    expect(read(slug)).toContain(`<p class="note">`);
    expect(read(slug)).toContain(`href="${ENGLISH_POLICY_URL}"`);
  });
});
