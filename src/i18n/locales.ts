/**
 * Supported site locales. Mirrors RePasito's App Store listings.
 *
 * `slug` is the URL segment (the default locale lives at the site root),
 * `htmlLang` / `hreflang` follow BCP 47, the store fields map to the locale codes each
 * store's badge and listing URLs expect, and `screens` is the folder in public/screens
 * with this language's App Store screenshots.
 */
export interface LocaleDef {
  readonly slug: string;
  readonly htmlLang: string;
  readonly ogLocale: string;
  readonly nativeName: string;
  readonly appleBadge: string;
  readonly playBadge: string;
  readonly playHl: string;
  readonly screens: string;
}

export const LOCALES = [
  { slug: 'en', htmlLang: 'en', ogLocale: 'en_US', nativeName: 'English', appleBadge: 'en-us', playBadge: 'en', playHl: 'en', screens: 'en' },
  // Generic Spanish serves Latin America; Spain has its own page, as on the App Store.
  { slug: 'es', htmlLang: 'es', ogLocale: 'es_LA', nativeName: 'Español (Latinoamérica)', appleBadge: 'es-mx', playBadge: 'es-419', playHl: 'es-419', screens: 'es' },
  { slug: 'es-es', htmlLang: 'es-ES', ogLocale: 'es_ES', nativeName: 'Español (España)', appleBadge: 'es-es', playBadge: 'es', playHl: 'es', screens: 'es' },
  { slug: 'pt-br', htmlLang: 'pt-BR', ogLocale: 'pt_BR', nativeName: 'Português (Brasil)', appleBadge: 'pt-br', playBadge: 'pt-br', playHl: 'pt-BR', screens: 'pt-br' },
  { slug: 'fr', htmlLang: 'fr', ogLocale: 'fr_FR', nativeName: 'Français', appleBadge: 'fr-fr', playBadge: 'fr', playHl: 'fr', screens: 'fr' },
  { slug: 'it', htmlLang: 'it', ogLocale: 'it_IT', nativeName: 'Italiano', appleBadge: 'it-it', playBadge: 'it', playHl: 'it', screens: 'it' },
  { slug: 'de', htmlLang: 'de', ogLocale: 'de_DE', nativeName: 'Deutsch', appleBadge: 'de-de', playBadge: 'de', playHl: 'de', screens: 'de' },
  { slug: 'pl', htmlLang: 'pl', ogLocale: 'pl_PL', nativeName: 'Polski', appleBadge: 'pl-pl', playBadge: 'pl', playHl: 'pl', screens: 'pl' },
  { slug: 'ru', htmlLang: 'ru', ogLocale: 'ru_RU', nativeName: 'Русский', appleBadge: 'ru-ru', playBadge: 'ru', playHl: 'ru', screens: 'ru' },
  { slug: 'ja', htmlLang: 'ja', ogLocale: 'ja_JP', nativeName: '日本語', appleBadge: 'ja-jp', playBadge: 'ja', playHl: 'ja', screens: 'ja' },
  { slug: 'ko', htmlLang: 'ko', ogLocale: 'ko_KR', nativeName: '한국어', appleBadge: 'ko-kr', playBadge: 'ko', playHl: 'ko', screens: 'ko' },
  { slug: 'zh-hans', htmlLang: 'zh-Hans', ogLocale: 'zh_CN', nativeName: '简体中文', appleBadge: 'zh-cn', playBadge: 'zh-cn', playHl: 'zh-CN', screens: 'zh-hans' },
] as const satisfies readonly LocaleDef[];

export type LocaleSlug = (typeof LOCALES)[number]['slug'];

export type ScreenshotSet = (typeof LOCALES)[number]['screens'];

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
