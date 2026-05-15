import es from "./locales/es.json";
import en from "./locales/en.json";

export const dictionaries = {
  es,
  en,
};

export type Locale = keyof typeof dictionaries;

export const getDictionary = (locale: string) => {
  return dictionaries[locale as Locale] ?? dictionaries.es;
};
