"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ScrollReveal, RevealChild } from "./scroll-reveal";

export function HowPolarisWorksSection({ lang }: { lang: string }) {
  return (
    <section className="section-padding bg-secondary/20 border-y border-border/40 overflow-hidden">
      <div className="container-tight">

        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <p className="text-xs tracking-[0.22em] uppercase text-muted-foreground font-light mb-5">
              Mehanizam dejstva
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[3.2rem] tracking-tight text-balance leading-[1.1]">
              Kako Polaris{" "}
              <span className="italic text-polaris-peach">funkcioniše</span>
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
                  src="/polaris-chakre.png"
                  alt="Polaris i 7 chakri"
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
                  Kosmička energija
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  <span className="font-medium text-foreground">Operation POLARIS</span> collects
                  cosmic (life) energy (prana) and directs it into cells, encouraging them to
                  regenerate and establish their normal functioning. It equally affects all forms
                  of life — people, animals and plants.
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
                  src="/aura.png"
                  alt="Aura — before and after Polaris"
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
                  Zaštitno polje
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  POLARIS harmonizes all 7 energy centers (chakras), establishing perfect
                  balance in your electromagnetic field (aura). A strong aura shields you from
                  microorganisms, harmful radiation, and negative external energies —
                  making it an impenetrable protective wall.
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
            Upotreba
          </Link>
        </ScrollReveal>

      </div>
    </section>
  );
}
