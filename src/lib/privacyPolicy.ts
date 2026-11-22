import type { LocaleSlug } from '../i18n';

/**
 * The privacy policy, one HTML file per language in src/content/privacy/.
 * English is the authoritative text; every other file is a translation of it and says so in its note.
 */
const POLICIES = import.meta.glob<string>('../content/privacy/*.html', { query: '?raw', import: 'default', eager: true });

export function privacyPolicy(locale: LocaleSlug): string {
  const html = POLICIES[`../content/privacy/${locale}.html`];
  if (!html) throw new Error(`Missing privacy policy: src/content/privacy/${locale}.html`);
  return html;
}
