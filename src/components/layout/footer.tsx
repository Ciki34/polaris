import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import type { Locale } from "@/app/[lang]/dictionaries";

/* ─── Tagline & copyright ─────────────────────────────────────────────────── */
const tagline: Record<Locale, string> = {
  en: "Guided by the stars. Grounded in intention.",
  sr: "Vođeni zvezdama. Utemeljeni u nameri.",
  es: "Guiados por las estrellas. Anclados en la intención.",
  pt: "Guiados pelas estrelas. Enraizados na intenção.",
  it: "Guidati dalle stelle. Radicati nell'intenzione.",
  fr: "Guidés par les étoiles. Ancrés dans l'intention.",
};

const copyright: Record<Locale, string> = {
  en: "All rights reserved.",
  sr: "Sva prava zadržana.",
  es: "Todos los derechos reservados.",
  pt: "Todos os direitos reservados.",
  it: "Tutti i diritti riservati.",
  fr: "Tous droits réservés.",
};

/* ─── Footer link sections ────────────────────────────────────────────────── */
type FooterSection = { label: string; links: { href: string; label: string }[] };

function getFooterSections(lang: Locale): FooterSection[] {
  const t = {
    en: {
      discover: "Discover",
      about: "What is Polaris?", howToUse: "How to Use", testimonials: "Testimonials",
      buy: "Buy",
      shop: "Shop", shipping: "Shipping Info",
      support: "Support",
      contact: "Contact & FAQ", terms: "Terms of Use", privacy: "Privacy Policy",
    },
    sr: {
      discover: "Otkrijte",
      about: "Šta je Polaris?", howToUse: "Kako se koristi", testimonials: "Iskustva korisnika",
      buy: "Kupovina",
      shop: "Prodavnica", shipping: "Informacije o dostavi",
      support: "Podrška",
      contact: "Kontakt i FAQ", terms: "Uslovi korišćenja", privacy: "Politika privatnosti",
    },
    es: {
      discover: "Descubrir",
      about: "¿Qué es Polaris?", howToUse: "Cómo usar", testimonials: "Testimonios",
      buy: "Comprar",
      shop: "Tienda", shipping: "Info de envío",
      support: "Soporte",
      contact: "Contacto y FAQ", terms: "Términos de uso", privacy: "Política de privacidad",
    },
    pt: {
      discover: "Descobrir",
      about: "O que é Polaris?", howToUse: "Como usar", testimonials: "Depoimentos",
      buy: "Comprar",
      shop: "Loja", shipping: "Info de envio",
      support: "Suporte",
      contact: "Contato e FAQ", terms: "Termos de uso", privacy: "Política de privacidade",
    },
    it: {
      discover: "Scopri",
      about: "Cos'è Polaris?", howToUse: "Come usare", testimonials: "Testimonianze",
      buy: "Acquistare",
      shop: "Negozio", shipping: "Info spedizione",
      support: "Supporto",
      contact: "Contatti e FAQ", terms: "Termini di utilizzo", privacy: "Informativa privacy",
    },
    fr: {
      discover: "Découvrir",
      about: "Qu'est-ce que Polaris ?", howToUse: "Comment utiliser", testimonials: "Témoignages",
      buy: "Acheter",
      shop: "Boutique", shipping: "Infos livraison",
      support: "Support",
      contact: "Contact et FAQ", terms: "Conditions d'utilisation", privacy: "Politique de confidentialité",
    },
  }[lang];

  return [
    {
      label: t.discover,
      links: [
        { href: `/${lang}/about`,        label: t.about        },
        { href: `/${lang}/how-to-use`,   label: t.howToUse     },
        { href: `/${lang}/testimonials`, label: t.testimonials },
      ],
    },
    {
      label: t.buy,
      links: [
        { href: `/${lang}/shop`,     label: t.shop     },
        { href: `/${lang}/contact`,  label: t.shipping },
      ],
    },
    {
      label: t.support,
      links: [
        { href: `/${lang}/contact`, label: t.contact },
        { href: `/${lang}/terms`,   label: t.terms   },
        { href: `/${lang}/privacy`, label: t.privacy },
      ],
    },
  ];
}

/* ─── Legal labels ────────────────────────────────────────────────────────── */
const legalLabels: Record<Locale, { privacy: string; terms: string; cookies: string }> = {
  en: { privacy: "Privacy", terms: "Terms of Use",          cookies: "Cookies"           },
  sr: { privacy: "Privatnost", terms: "Uslovi korišćenja",  cookies: "Kolačići"          },
  es: { privacy: "Privacidad", terms: "Términos de uso",    cookies: "Cookies"           },
  pt: { privacy: "Privacidade", terms: "Termos de uso",     cookies: "Cookies"           },
  it: { privacy: "Privacy",  terms: "Termini di utilizzo",  cookies: "Cookie"            },
  fr: { privacy: "Confidentialité", terms: "Conditions",    cookies: "Cookies"           },
};

/* ─── Social icon SVGs ────────────────────────────────────────────────────── */
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
      <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  );
}

const socialLabel: Record<Locale, string> = {
  sr: "Pratite nas",
  en: "Follow us",
  es: "Síguenos",
  pt: "Siga-nos",
  it: "Seguici",
  fr: "Suivez-nous",
};

/* ─── Footer ──────────────────────────────────────────────────────────────── */
export function Footer({ lang }: { lang: Locale }) {
  const sections = getFooterSections(lang);
  const legal = legalLabels[lang];

  return (
    <footer className="bg-secondary/40 border-t border-border/60">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">

        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">

          {/* Brand + social */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href={`/${lang}`}
              className="font-heading text-xl tracking-[0.18em] uppercase block mb-4"
            >
              Polaris
            </Link>
            <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-xs mb-6">
              {tagline[lang]}
            </p>

            {/* Social icons */}
            <div>
              <p className="text-[10px] tracking-widest uppercase text-muted-foreground/60 font-light mb-3">
                {socialLabel[lang]}
              </p>
              <div className="flex items-center gap-3">
                {[
                  { href: "https://instagram.com/polaris.rs", label: "Instagram", Icon: InstagramIcon },
                  { href: "https://facebook.com/polaris.rs",  label: "Facebook",  Icon: FacebookIcon  },
                  { href: "https://youtube.com/@polaris.rs",  label: "YouTube",   Icon: YouTubeIcon   },
                ].map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors duration-200"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Link columns */}
          {sections.map(({ label, links }) => (
            <div key={label}>
              <h4 className="text-xs font-medium tracking-widest uppercase text-foreground mb-5">
                {label}
              </h4>
              <ul className="space-y-3">
                {links.map(({ href, label: linkLabel }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light"
                    >
                      {linkLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="mb-8 opacity-50" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-muted-foreground font-light tracking-wide">
          <span>© {new Date().getFullYear()} Polaris. {copyright[lang]}</span>
          <div className="flex gap-6">
            <Link href={`/${lang}/privacy`} className="hover:text-foreground transition-colors">{legal.privacy}</Link>
            <Link href={`/${lang}/terms`}   className="hover:text-foreground transition-colors">{legal.terms}</Link>
            <Link href={`/${lang}/cookies`} className="hover:text-foreground transition-colors">{legal.cookies}</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
