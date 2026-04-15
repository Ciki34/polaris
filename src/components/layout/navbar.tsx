"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

const navLinks = [
  { href: "/about",    label: "About"    },
  { href: "/products", label: "Products" },
  { href: "/journal",  label: "Journal"  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/60 shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <Link
          href="/"
          className="font-heading text-xl tracking-[0.18em] uppercase text-foreground hover:opacity-70 transition-opacity"
        >
          Polaris
        </Link>

        {/* Center links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm font-light tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="hidden md:block text-sm font-light tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Sign in
          </Link>
          <Link
            href="/products"
            className={cn(
              buttonVariants({ size: "sm" }),
              "rounded-full px-6 text-xs tracking-widest uppercase font-medium h-9"
            )}
          >
            Get Started
          </Link>
        </div>
      </nav>
      {scrolled && <Separator className="opacity-0" />}
    </header>
  );
}
