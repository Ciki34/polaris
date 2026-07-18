"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "./scroll-reveal";

interface SolutionDict {
  eyebrow: string;
  title: string;
  titleItalic: string;
  body: string;
  cta: string;
}

export function SolutionSection({ dict, lang }: { dict: SolutionDict; lang: string }) {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0 });

  return (
    <section ref={sectionRef} className="section-padding bg-secondary/20 border-y border-border/40 overflow-hidden relative">
      {/* Background peach glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 85% 50%, oklch(0.82 0.052 33 / 0.10) 0%, transparent 65%)",
        }}
      />

      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — Polaris disc visualisation */}
          <ScrollReveal delay={0.05} className="flex justify-center order-2 lg:order-1">
            <div className="relative isolate w-full max-w-md lg:max-w-lg aspect-square">
              <Image
                src="/polaris-disk3.png"
                alt="Polaris disk"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />

              {/* Floating label */}
              <motion.div
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-background border border-border rounded-full px-5 py-2 shadow-sm whitespace-nowrap"
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: 0.9 }}
              >
                <p className="text-xs tracking-widest uppercase font-light text-muted-foreground">
                  9 prstenova · Zlatni presek
                </p>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Right — copy */}
          <div className="order-1 lg:order-2">
            <ScrollReveal delay={0.05}>
              <p className="text-xs tracking-[0.22em] uppercase text-muted-foreground font-light mb-5">
                {dict.eyebrow}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.13}>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-[3.2rem] tracking-tight leading-[1.1] mb-8">
                {dict.title}
                <br />
                <span className="italic text-polaris-peach">{dict.titleItalic}</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.21}>
              <p className="text-base text-muted-foreground font-light leading-relaxed mb-10">
                {dict.body}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.29}>
              <Link
                href={`/${lang}/about`}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "rounded-full px-10 h-12 text-sm tracking-widest uppercase font-light border-foreground/20 hover:border-foreground/50"
                )}
              >
                {dict.cta}
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
