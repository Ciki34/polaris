"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import type { Locale } from "@/app/[lang]/dictionaries";

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
  cs: { about: "O nás",      "how-to-use": "Jak používat",    testimonials: "Zkušenosti",    contact: "Kontakt",  shop: "Obchod"          },
  hu: { about: "Rólunk",     "how-to-use": "Használat",       testimonials: "Vélemények",    contact: "Kapcsolat",shop: "Bolt"            },
  sk: { about: "O nás",      "how-to-use": "Ako používať",    testimonials: "Skúsenosti",    contact: "Kontakt",  shop: "Obchod"          },
};

const shopLabel: Record<Locale, string> = {
  sr: "Naruči",  en: "Order",    es: "Pedir",
  pt: "Pedir",   it: "Ordina",   fr: "Commander",
  cs: "Objednat", hu: "Rendelés", sk: "Objednať",
};

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
