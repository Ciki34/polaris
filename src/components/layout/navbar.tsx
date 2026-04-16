"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import type { Locale } from "@/app/[lang]/dictionaries";

/* ─── Locale metadata ─────────────────────────────────────────────────────── */
const localeMeta: Record<Locale, { label: string; currency: string; flag: string }> = {
  sr: { label: "SR", currency: "RSD", flag: "🇷🇸" },
  en: { label: "EN", currency: "EUR", flag: "🇬🇧" },
  es: { label: "ES", currency: "EUR", flag: "🇪🇸" },
  pt: { label: "PT", currency: "EUR", flag: "🇵🇹" },
  it: { label: "IT", currency: "EUR", flag: "🇮🇹" },
  fr: { label: "FR", currency: "EUR", flag: "🇫🇷" },
};

/* ─── Nav labels ──────────────────────────────────────────────────────────── */
const navKeys = ["about", "how-to-use", "testimonials", "contact", "shop"] as const;
type NavKey = (typeof navKeys)[number];

const navLabels: Record<Locale, Record<NavKey, string>> = {
  sr: { about: "O nama",     "how-to-use": "Upotreba",        testimonials: "Iskustva",      contact: "Kontakt",  shop: "Prodavnica"      },
  en: { about: "About",      "how-to-use": "How to Use",      testimonials: "Testimonials",  contact: "Contact",  shop: "Shop"            },
  es: { about: "Nosotros",   "how-to-use": "Cómo usar",       testimonials: "Testimonios",   contact: "Contacto", shop: "Tienda"          },
  pt: { about: "Sobre",      "how-to-use": "Como usar",       testimonials: "Depoimentos",   contact: "Contato",  shop: "Loja"            },
  it: { about: "Chi siamo",  "how-to-use": "Come usare",      testimonials: "Testimonianze", contact: "Contatti", shop: "Negozio"         },
  fr: { about: "À propos",   "how-to-use": "Comment utiliser",testimonials: "Témoignages",   contact: "Contact",  shop: "Boutique"        },
};

const shopLabel: Record<Locale, string> = {
  sr: "Naruči",  en: "Order",  es: "Pedir",
  pt: "Pedir",   it: "Ordina", fr: "Commander",
};

/* ─── Language Dropdown ───────────────────────────────────────────────────── */
function LocaleSwitcher({
  lang,
  scrolled,
}: {
  lang: Locale;
  scrolled: boolean;
}) {
  const [open, setOpen] = useState(false);
  const current = localeMeta[lang];

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = () => setOpen(false);
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [open]);

  return (
    <div className="relative hidden md:block" onClick={(e) => e.stopPropagation()}>
      <button
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "flex items-center gap-1.5 rounded-full px-3 h-8 text-[11px] font-medium tracking-widest uppercase transition-all duration-200",
          open || scrolled
            ? "bg-muted text-foreground"
            : "text-muted-foreground hover:text-foreground"
        )}
        aria-label="Switch language"
        aria-expanded={open}
      >
        <span>{current.label}</span>
        <span className="text-muted-foreground/50 font-light">·</span>
        <span className="text-muted-foreground/70 font-light">{current.currency}</span>
        <svg
          viewBox="0 0 16 16"
          fill="none"
          className={cn("w-3 h-3 transition-transform duration-200 text-muted-foreground/50", open && "rotate-180")}
        >
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 top-full mt-2 w-44 rounded-2xl border border-border/60 bg-background/95 backdrop-blur-md shadow-lg shadow-foreground/8 overflow-hidden z-50">
          {(Object.entries(localeMeta) as [Locale, typeof localeMeta[Locale]][]).map(
            ([locale, meta]) => (
              <Link
                key={locale}
                href={`/${locale}`}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center justify-between px-4 py-2.5 text-sm transition-colors duration-150",
                  locale === lang
                    ? "bg-primary/6 text-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <div className="flex items-center gap-2.5">
                  <span>{meta.flag}</span>
                  <span className="font-medium tracking-wide">{meta.label}</span>
                </div>
                <span className="text-[11px] text-muted-foreground/60 font-light tracking-widest">
                  {meta.currency}
                </span>
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
}

/* ─── Mobile Menu ─────────────────────────────────────────────────────────── */
function MobileMenu({
  lang,
  isOpen,
  onClose,
}: {
  lang: Locale;
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;
  const labels = navLabels[lang];
  return (
    <div className="md:hidden bg-background/97 backdrop-blur-md border-t border-border/40">
      <nav className="px-6 py-5 flex flex-col gap-1">
        {navKeys.map((key) => (
          <Link
            key={key}
            href={`/${lang}/${key}`}
            onClick={onClose}
            className="py-2.5 text-sm font-light tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            {labels[key]}
          </Link>
        ))}
        <div className="pt-4 border-t border-border/40 flex flex-wrap gap-2 mt-2">
          {(Object.entries(localeMeta) as [Locale, typeof localeMeta[Locale]][]).map(
            ([locale, meta]) => (
              <Link
                key={locale}
                href={`/${locale}`}
                onClick={onClose}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium tracking-widest uppercase transition-colors",
                  locale === lang
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                <span>{meta.flag}</span>
                <span>{meta.label}</span>
                <span className="opacity-60">{meta.currency}</span>
              </Link>
            )
          )}
        </div>
      </nav>
    </div>
  );
}

/* ─── Main Navbar ─────────────────────────────────────────────────────────── */
export function Navbar({ lang }: { lang: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const labels = navLabels[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Desktop center nav — omit shop (it's the CTA button on right)
  const primaryNav: NavKey[] = ["about", "how-to-use", "testimonials", "contact"];

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/92 backdrop-blur-md border-b border-border/60 shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <Link
          href={`/${lang}`}
          className="font-heading text-xl tracking-[0.18em] uppercase text-foreground hover:opacity-70 transition-opacity flex-shrink-0"
        >
          Polaris
        </Link>

        {/* Center links — desktop */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {primaryNav.map((key) => (
            <li key={key}>
              <Link
                href={`/${lang}/${key}`}
                className="text-xs font-light tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {labels[key]}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Language + currency switcher */}
          <LocaleSwitcher lang={lang} scrolled={scrolled} />

          {/* CTA — Shop */}
          <Link
            href={`/${lang}/shop`}
            className={cn(
              buttonVariants({ size: "sm" }),
              "rounded-full px-6 text-xs tracking-widest uppercase font-medium h-9 hidden md:flex items-center"
            )}
          >
            {shopLabel[lang]}
          </Link>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full hover:bg-muted transition-colors"
            aria-label="Menu"
            aria-expanded={mobileOpen}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <MobileMenu
        lang={lang}
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />

      {scrolled && <Separator className="opacity-0" />}
    </header>
  );
}
