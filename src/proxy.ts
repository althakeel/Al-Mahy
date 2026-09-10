import { NextRequest, NextResponse } from "next/server";
import { getLocaleFromPathname } from "@/lib/utils";

const LOCALES = ["en", "ar"] as const;
const DEFAULT_LOCALE = "en";

function detectLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get("accept-language") || "";
  const preferred = acceptLanguage
    .split(",")
    .map((part) => {
      const [lang, q] = part.trim().split(";q=");
      return { lang: lang.toLowerCase(), q: q ? parseFloat(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { lang } of preferred) {
    const base = lang.split("-")[0];
    if (base === "ar") return "ar";
    if (base === "en") return "en";
  }

  return DEFAULT_LOCALE;
}

function applyLocaleHeaders(request: NextRequest, pathname: string) {
  const locale = getLocaleFromPathname(pathname) ?? DEFAULT_LOCALE;
  const dir = locale === "ar" ? "rtl" : "ltr";

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", locale);
  requestHeaders.set("x-dir", dir);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });

  response.headers.set("x-locale", locale);
  response.headers.set("x-dir", dir);

  return response;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (hasLocale) {
    return applyLocaleHeaders(request, pathname);
  }

  if (pathname === "/") {
    const locale = detectLocale(request);
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}`;
    const redirect = NextResponse.redirect(url);
    redirect.headers.set("x-locale", locale);
    redirect.headers.set("x-dir", locale === "ar" ? "rtl" : "ltr");
    return redirect;
  }

  return applyLocaleHeaders(request, pathname);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|assets|.*\\..*).*)"],
};
