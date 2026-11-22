/**
 * Supported site locales. Mirrors the languages RePasito ships in on the App Store.
 *
 * `slug` is the URL segment (the default locale lives at the site root),
 * `htmlLang` / `hreflang` follow BCP 47, and the store fields map to the
 * locale codes each store's badge and listing URLs expect.
 */
export interface LocaleDef {
  readonly slug: string;
  readonly htmlLang: string;
  readonly ogLocale: string;
  readonly nativeName: string;
  readonly appleBadge: string;
  readonly playBadge: string;
  readonly playHl: string;
}

export const LOCALES = [
  { slug: 'en', htmlLang: 'en', ogLocale: 'en_US', nativeName: 'English', appleBadge: 'en-us', playBadge: 'en', playHl: 'en' },
  { slug: 'es', htmlLang: 'es', ogLocale: 'es_ES', nativeName: 'Español', appleBadge: 'es-es', playBadge: 'es', playHl: 'es' },
  { slug: 'pt-br', htmlLang: 'pt-BR', ogLocale: 'pt_BR', nativeName: 'Português (Brasil)', appleBadge: 'pt-br', playBadge: 'pt-br', playHl: 'pt-BR' },
  { slug: 'fr', htmlLang: 'fr', ogLocale: 'fr_FR', nativeName: 'Français', appleBadge: 'fr-fr', playBadge: 'fr', playHl: 'fr' },
  { slug: 'it', htmlLang: 'it', ogLocale: 'it_IT', nativeName: 'Italiano', appleBadge: 'it-it', playBadge: 'it', playHl: 'it' },
  { slug: 'de', htmlLang: 'de', ogLocale: 'de_DE', nativeName: 'Deutsch', appleBadge: 'de-de', playBadge: 'de', playHl: 'de' },
  { slug: 'pl', htmlLang: 'pl', ogLocale: 'pl_PL', nativeName: 'Polski', appleBadge: 'pl-pl', playBadge: 'pl', playHl: 'pl' },
  { slug: 'ru', htmlLang: 'ru', ogLocale: 'ru_RU', nativeName: 'Русский', appleBadge: 'ru-ru', playBadge: 'ru', playHl: 'ru' },
  { slug: 'ja', htmlLang: 'ja', ogLocale: 'ja_JP', nativeName: '日本語', appleBadge: 'ja-jp', playBadge: 'ja', playHl: 'ja' },
  { slug: 'ko', htmlLang: 'ko', ogLocale: 'ko_KR', nativeName: '한국어', appleBadge: 'ko-kr', playBadge: 'ko', playHl: 'ko' },
  { slug: 'zh-hans', htmlLang: 'zh-Hans', ogLocale: 'zh_CN', nativeName: '简体中文', appleBadge: 'zh-cn', playBadge: 'zh-cn', playHl: 'zh-CN' },
] as const satisfies readonly LocaleDef[];

export type LocaleSlug = (typeof LOCALES)[number]['slug'];

export const DEFAULT_LOCALE: LocaleSlug = 'en';

export function getLocale(slug: string): LocaleDef {
  const locale = LOCALES.find((l) => l.slug === slug);
  if (!locale) throw new Error(`Unknown locale: ${slug}`);
  return locale;
}

/** Path of a page within the site (without base), e.g. `/` or `/es/`. */
export function localePath(slug: LocaleSlug, page = ''): string {
  const prefix = slug === DEFAULT_LOCALE ? '' : `/${slug}`;
  const suffix = page.replace(/^\/+|\/+$/g, '');
  return `${prefix}/${suffix ? `${suffix}/` : ''}`;
}
