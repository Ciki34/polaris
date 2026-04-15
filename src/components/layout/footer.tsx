import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  Company: [
    { href: "/about",   label: "About"   },
    { href: "/journal", label: "Journal" },
    { href: "/careers", label: "Careers" },
  ],
  Products: [
    { href: "/products",    label: "All Products" },
    { href: "/collections", label: "Collections"  },
    { href: "/gift-sets",   label: "Gift Sets"    },
  ],
  Support: [
    { href: "/faq",      label: "FAQ"      },
    { href: "/contact",  label: "Contact"  },
    { href: "/shipping", label: "Shipping" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-secondary/40 border-t border-border/60">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="font-heading text-xl tracking-[0.18em] uppercase block mb-4"
            >
              Polaris
            </Link>
            <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-xs">
              Guided by the stars. Grounded in intention.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-medium tracking-widest uppercase text-foreground mb-5">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light"
                    >
                      {label}
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
          <span>© {new Date().getFullYear()} Polaris. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="/terms"   className="hover:text-foreground transition-colors">Terms</Link>
            <Link href="/cookies" className="hover:text-foreground transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
