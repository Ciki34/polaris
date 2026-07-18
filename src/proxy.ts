import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

/* ─── i18n Config ────────────────────────────────────────────────────────── */
// Only Serbian is served right now. The other locale prefixes are kept here
// so old bookmarked/indexed links (e.g. /en/about) redirect to their Serbian
// equivalent instead of 404ing.
const activeLocale = "sr";
const allLocales = ["sr", "en", "es", "pt", "it", "fr", "cs", "hu", "sk"] as const;

/* ─── Proxy (Middleware) ─────────────────────────────────────────────────── */
export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ── Locale redirect ──────────────────────────────────────────────────────
  const matchedLocale = allLocales.find(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (!matchedLocale) {
    const url = request.nextUrl.clone();
    url.pathname = `/${activeLocale}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(url);
  }

  if (matchedLocale !== activeLocale) {
    const rest = pathname.slice(`/${matchedLocale}`.length);
    const url = request.nextUrl.clone();
    url.pathname = `/${activeLocale}${rest}`;
    return NextResponse.redirect(url);
  }

  // ── Supabase session refresh ─────────────────────────────────────────────
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // Refresh the session to prevent expiry
  await supabase.auth.getUser();

  return supabaseResponse;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
