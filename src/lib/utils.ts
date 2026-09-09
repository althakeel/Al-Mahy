import { Locale } from './translations';

export function isValidLocale(locale: string): locale is Locale {
  return locale === 'en' || locale === 'ar';
}

export function getLocaleFromPathname(pathname: string | null | undefined): Locale | null {
  if (!pathname) return null;
  const segment = pathname.split('/').filter(Boolean)[0];
  return isValidLocale(segment) ? segment : null;
}

export function resolveLocale(pathname: string | null | undefined, fallback: string): Locale {
  const fromPath = getLocaleFromPathname(pathname);
  if (fromPath) return fromPath;
  return isValidLocale(fallback) ? fallback : 'en';
}

export function getLocaleDirection(locale: Locale): 'ltr' | 'rtl' {
  return locale === 'ar' ? 'rtl' : 'ltr';
}

export function getLocalizedPathname(pathname: string, newLocale: Locale): string {
  const segments = pathname.split('/').filter(Boolean);

  if (segments.length > 0 && isValidLocale(segments[0])) {
    segments[0] = newLocale;
    return `/${segments.join('/')}`;
  }

  if (!pathname || pathname === '/') {
    return `/${newLocale}`;
  }

  return `/${newLocale}${pathname.startsWith('/') ? pathname : `/${pathname}`}`;
}
