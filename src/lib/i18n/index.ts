import { es } from "./dictionaries/es";
import { en } from "./dictionaries/en";
import { pt } from "./dictionaries/pt";
import type { Dictionary, Locale } from "./types";

export { LOCALES, DEFAULT_LOCALE, LOCALE_COOKIE } from "./types";
export type { Locale, Dictionary } from "./types";
export { getLocale } from "./locale";

const DICTIONARIES: Record<Locale, Dictionary> = { es, en, pt };

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}
