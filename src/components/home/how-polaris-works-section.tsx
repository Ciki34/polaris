"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ScrollReveal, RevealChild } from "./scroll-reveal";

interface HowPolarisWorksDict {
  eyebrow: string;
  title: string;
  titleItalic: string;
  card1Title: string;
  card1Body: string;
  card1ImageAlt: string;
  card2Title: string;
  card2Body: string;
  card2ImageAlt: string;
  cta: string;
}

export function HowPolarisWorksSection({ lang, dict }: { lang: string; dict: HowPolarisWorksDict }) {
  return (
    <section className="section-padding bg-secondary/20 border-y border-border/40 overflow-hidden">
      <div className="container-tight">

        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <p className="text-xs tracking-[0.22em] uppercase text-muted-foreground font-light mb-5">
              {dict.eyebrow}
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[3.2rem] tracking-tight text-balance leading-[1.1]">
              {dict.title}{" "}
              <span className="italic text-polaris-peach">{dict.titleItalic}</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Cards */}
        <ScrollReveal stagger className="grid md:grid-cols-2 gap-8 mb-12">

          {/* Card 1 — Energy / Prana */}
          <RevealChild>
            <motion.article
              className="group flex flex-col rounded-3xl bg-card border border-border/50 overflow-hidden hover:border-border hover:shadow-md transition-all duration-300 h-full"
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              {/* Image top */}
              <div className="relative h-64 bg-gradient-to-br from-secondary to-muted/60 overflow-hidden">
                <Image
                  src="/polaris-chakre2.png"
                  alt={dict.card1ImageAlt}
                  fill
                  className="object-contain p-6"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <span
                  aria-hidden
                  className="absolute top-5 right-6 font-heading text-7xl font-bold text-foreground/[0.05] select-none leading-none"
                >
                  01
                </span>
              </div>

              {/* Body */}
              <div className="p-7 flex flex-col flex-1">
                <h3 className="font-heading text-xl md:text-2xl tracking-tight mb-4">
                  {dict.card1Title}
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {dict.card1Body}
                </p>
              </div>
            </motion.article>
          </RevealChild>

          {/* Card 2 — Aura */}
          <RevealChild>
            <motion.article
              className="group flex flex-col rounded-3xl bg-card border border-border/50 overflow-hidden hover:border-border hover:shadow-md transition-all duration-300 h-full"
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              {/* Image top */}
              <div className="relative h-64 bg-gradient-to-br from-secondary/80 to-muted/40 overflow-hidden">
                <Image
                  src="/aura2.png"
                  alt={dict.card2ImageAlt}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <span
                  aria-hidden
                  className="absolute top-5 right-6 font-heading text-7xl font-bold text-foreground/[0.05] select-none leading-none"
                >
                  02
                </span>
              </div>

              {/* Body */}
              <div className="p-7 flex flex-col flex-1">
                <h3 className="font-heading text-xl md:text-2xl tracking-tight mb-4">
                  {dict.card2Title}
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {dict.card2Body}
                </p>
              </div>
            </motion.article>
          </RevealChild>

        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={0.2} className="flex justify-center">
          <Link
            href={`/${lang}/how-to-use`}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "rounded-full px-10 h-12 text-sm tracking-widest uppercase font-light border-foreground/20 hover:border-foreground/50"
            )}
          >
            {dict.cta}
          </Link>
        </ScrollReveal>

      </div>
    </section>
  );
}
