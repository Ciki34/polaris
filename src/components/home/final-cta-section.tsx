"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "./scroll-reveal";

interface FinalCtaDict {
  eyebrow: string;
  title: string;
  titleItalic: string;
  subtitle: string;
  cta: string;
}

export function FinalCtaSection({ dict, lang }: { dict: FinalCtaDict; lang: string }) {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Full-width gradient background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, oklch(0.82 0.052 33 / 0.12) 0%, transparent 70%)",
        }}
      />

      {/* Decorative blob shapes */}
      <motion.div
        aria-hidden
        className="absolute -z-10 w-64 h-64 rounded-full opacity-20"
        style={{
          top: "10%",
          left: "-5%",
          background: "oklch(0.72 0.06 148 / 0.3)",
          borderRadius: "67% 33% 52% 48% / 44% 56% 44% 56%",
          filter: "blur(40px)",
        }}
        animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -z-10 w-80 h-80 rounded-full opacity-15"
        style={{
          bottom: "5%",
          right: "-8%",
          background: "oklch(0.82 0.052 33 / 0.4)",
          borderRadius: "40% 60% 55% 45% / 58% 42% 58% 42%",
          filter: "blur(50px)",
        }}
        animate={{ scale: [1, 1.08, 1], rotate: [0, -5, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="container-tight text-center">
        <ScrollReveal delay={0.05}>
          <p className="text-xs tracking-[0.22em] uppercase text-muted-foreground font-light mb-6">
            {dict.eyebrow}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.13}>
          <h2 className="font-heading text-4xl md:text-6xl lg:text-[4rem] tracking-tight text-balance leading-[1.08] mb-6">
            {dict.title}
            <br />
            <span className="italic text-polaris-peach">{dict.titleItalic}</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.21}>
          <p className="text-base text-muted-foreground font-light leading-relaxed max-w-md mx-auto mb-12">
            {dict.subtitle}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.29}>
          <Link
            href={`/${lang}/products`}
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-full px-14 h-14 text-sm tracking-widest uppercase font-medium shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-shadow"
            )}
          >
            {dict.cta}
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
