"use client";

import { useRef } from "react";
import Link from "next/link";
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

const rings = [56, 48, 40, 32, 24, 16, 9, 4, 1];

export function SolutionSection({ dict, lang }: { dict: SolutionDict; lang: string }) {
  const svgRef = useRef<HTMLDivElement>(null);
  const inView = useInView(svgRef, { once: true, amount: 0 });

  return (
    <section className="section-padding bg-secondary/20 border-y border-border/40 overflow-hidden relative">
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
            <div ref={svgRef} className="relative isolate w-72 h-72 md:w-80 md:h-80">
              {/* Animated rings */}
              <svg viewBox="0 0 200 200" className="w-full h-full">
                {rings.map((r, i) => (
                  <motion.circle
                    key={i}
                    cx="100"
                    cy="100"
                    r={r}
                    fill="none"
                    stroke="oklch(0.17 0.040 185)"
                    strokeWidth={i === 0 ? 0.8 : 0.6}
                    strokeOpacity={0.15 + (rings.length - i) * 0.04}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ delay: i * 0.07, duration: 0.5, ease: "easeOut" }}
                    style={{ transformOrigin: "100px 100px" }}
                  />
                ))}
                {/* Center dot */}
                <motion.circle
                  cx="100"
                  cy="100"
                  r="3.5"
                  fill="oklch(0.17 0.040 185)"
                  fillOpacity="0.55"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 0.7, duration: 0.4 }}
                  style={{ transformOrigin: "100px 100px" }}
                />
                {/* Phi label */}
                <text
                  x="100"
                  y="107"
                  textAnchor="middle"
                  fontSize="8"
                  fontFamily="Georgia, serif"
                  fontStyle="italic"
                  fill="oklch(0.17 0.040 185)"
                  fillOpacity="0.35"
                >
                  φ = 1.618
                </text>
              </svg>

              {/* Outer glow blob */}
              <div
                aria-hidden
                className="absolute inset-0 -z-10 rounded-full opacity-25"
                style={{
                  background:
                    "radial-gradient(circle, oklch(0.82 0.052 33 / 0.4) 0%, transparent 70%)",
                }}
              />

              {/* Floating label */}
              <motion.div
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-background border border-border rounded-full px-5 py-2 shadow-sm whitespace-nowrap"
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
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
