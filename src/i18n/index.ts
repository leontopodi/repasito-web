import type { LocaleSlug } from './locales';
import type { Dict } from './types';
import { en } from './locales/en';
import { es } from './locales/es';
import { esEs } from './locales/es-es';
import { ptBr } from './locales/pt-br';
import { fr } from './locales/fr';
import { it } from './locales/it';
import { de } from './locales/de';
import { pl } from './locales/pl';
import { ru } from './locales/ru';
import { ja } from './locales/ja';
import { ko } from './locales/ko';
import { zhHans } from './locales/zh-hans';

const DICTIONARIES: Record<LocaleSlug, Dict> = {
  en,
  es,
  'es-es': esEs,
  'pt-br': ptBr,
  fr,
  it,
  de,
  pl,
  ru,
  ja,
  ko,
  'zh-hans': zhHans,
};

export function t(locale: LocaleSlug): Dict {
  return DICTIONARIES[locale];
}

export type { Dict } from './types';
export * from './locales';
