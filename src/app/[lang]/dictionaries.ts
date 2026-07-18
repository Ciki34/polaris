import "server-only";

const dictionaries = {
  sr: () => import("./dictionaries/sr.json").then((m) => m.default),
  en: () => import("./dictionaries/en.json").then((m) => m.default),
  es: () => import("./dictionaries/es.json").then((m) => m.default),
  pt: () => import("./dictionaries/pt.json").then((m) => m.default),
  it: () => import("./dictionaries/it.json").then((m) => m.default),
  fr: () => import("./dictionaries/fr.json").then((m) => m.default),
  cs: () => import("./dictionaries/cs.json").then((m) => m.default),
  hu: () => import("./dictionaries/hu.json").then((m) => m.default),
  sk: () => import("./dictionaries/sk.json").then((m) => m.default),
};

export type Locale = keyof typeof dictionaries;

/*
 * Only Serbian is offered on the live site right now. The other dictionaries
 * stay in place (untouched, importable) in case the site goes multilingual
 * again — this just narrows what's routable and statically generated.
 */
export const locales: Locale[] = ["sr"];

export const defaultLocale: Locale = "sr";

export const hasLocale = (locale: string): locale is Locale =>
  locale === defaultLocale;

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]();
