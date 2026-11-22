import { loadDefaultJapaneseParser, loadDefaultSimplifiedChineseParser, type HTMLProcessingParser } from 'budoux';
import type { LocaleSlug } from '../i18n/locales';

/**
 * Japanese and Chinese are written without spaces, so browsers wrap headings mid-word.
 * Splitting them into phrases lets a heading wrap only at natural points (see Phrased.astro).
 */
const PARSERS: Partial<Record<LocaleSlug, HTMLProcessingParser>> = {
  ja: loadDefaultJapaneseParser(),
  'zh-hans': loadDefaultSimplifiedChineseParser(),
};

export function phrases(text: string, locale: LocaleSlug): string[] {
  return PARSERS[locale]?.parse(text) ?? [text];
}
