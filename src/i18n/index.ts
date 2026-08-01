import { en } from './en';
import { ta } from './ta';

export type Locale = 'en' | 'ta';
export type Dict = typeof en;

export const dictionaries: Record<Locale, Dict> = {
  en,
  ta: ta as unknown as Dict,
};

export function getDict(locale: Locale): Dict {
  return dictionaries[locale] ?? en;
}

/** Map current path to the equivalent path in the other locale */
export function swapLocalePath(pathname: string, target: Locale): string {
  const dict = getDict(target);
  const clean = pathname.replace(/\/$/, '') || '/';

  const map: Record<string, keyof Dict['paths']> = {
    '/en': 'home',
    '/ta': 'home',
    '/en/services': 'services',
    '/ta/sevai': 'services',
    '/en/about': 'about',
    '/ta/about': 'about',
    '/en/book': 'book',
    '/ta/book': 'book',
    '/en/contact': 'contact',
    '/ta/contact': 'contact',
    '/en/share': 'share',
    '/ta/share': 'share',
    '/en/privacy': 'privacy',
    '/ta/privacy': 'privacy',
    '/en/terms': 'terms',
    '/ta/terms': 'terms',
  };

  const key = map[clean];
  if (key) return dict.paths[key];
  return dict.paths.home;
}
