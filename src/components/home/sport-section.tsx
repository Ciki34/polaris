"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "./scroll-reveal";

interface SportDict {
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  badge: string;
}

const features = [
  { label: "Brži oporavak tkiva" },
  { label: "Drenaža toksina" },
  { label: "Smanjenje upala" },
  { label: "Elastičnost mišića" },
];

export function SportSection({ dict, lang }: { dict: SportDict; lang: string }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="mx-4 md:mx-6 lg:mx-10 xl:mx-16 my-24 rounded-3xl overflow-hidden relative">
      {/* Dark emerald background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #062C2B 0%, oklch(0.22 0.048 185) 60%, oklch(0.15 0.030 185) 100%)",
        }}
      />

      {/* Ambient circles */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] -z-0 opacity-20"
        style={{
          background:
            "radial-gradient(circle, oklch(0.82 0.052 33 / 0.3) 0%, transparent 65%)",
          transform: "translate(25%, -25%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] -z-0 opacity-10"
        style={{
          background:
            "radial-gradient(circle, oklch(0.72 0.06 148 / 0.4) 0%, transparent 65%)",
          transform: "translate(-30%, 30%)",
        }}
      />

      <div className="relative z-10 px-8 md:px-14 lg:px-20 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — copy */}
          <div>
            <ScrollReveal delay={0.05}>
              <div className="flex items-center gap-3 mb-6">
                <p className="text-xs tracking-[0.22em] uppercase text-white/40 font-light">
                  {dict.eyebrow}
                </p>
                <span className="text-[10px] tracking-widest uppercase bg-accent text-foreground font-medium px-3 py-1 rounded-full">
                  {dict.badge}
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.13}>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-[3.2rem] text-white tracking-tight leading-[1.1] mb-8 text-balance">
                {dict.title}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.21}>
              <p className="text-base text-white/55 font-light leading-relaxed mb-10">
                {dict.body}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.29}>
              <Link
                href={`/${lang}/products`}
                className={cn(
                  buttonVariants({ variant: "secondary", size: "lg" }),
                  "rounded-full px-10 h-12 text-sm tracking-widest uppercase font-medium bg-accent text-foreground hover:bg-accent/90"
                )}
              >
                {dict.cta}
              </Link>
            </ScrollReveal>
          </div>

          {/* Right — features + disc */}
          <div className="flex flex-col items-center lg:items-end gap-8">
            {/* Sport disc visual */}
            <ScrollReveal delay={0.1} className="relative">
              <div className="relative isolate w-52 h-52 md:w-64 md:h-64">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  {[88, 76, 64, 52, 40, 28, 18, 10, 4].map((r, i) => (
                    <motion.circle
                      key={i}
                      cx="100"
                      cy="100"
                      r={r}
                      fill="none"
                      stroke="white"
                      strokeWidth={i === 0 ? 1 : 0.7}
                      strokeOpacity={0.08 + (9 - i) * 0.045}
                      initial={mounted ? { scale: 0, opacity: 0 } : false}
                      whileInView={mounted ? { scale: 1, opacity: 1 } : undefined}
                      viewport={mounted ? { once: true, amount: 0.1 } : undefined}
                      transition={{ delay: i * 0.06, duration: 0.5 }}
                      style={{ transformOrigin: "100px 100px" }}
                    />
                  ))}
                  <circle cx="100" cy="100" r="4" fill="white" fillOpacity="0.5" />
                </svg>
                {/* Glow */}
                <motion.div
                  className="absolute inset-0 rounded-full -z-10"
                  style={{
                    background:
                      "radial-gradient(circle, oklch(0.82 0.052 33 / 0.25) 0%, transparent 60%)",
                  }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </ScrollReveal>

            {/* Feature pills */}
            <ScrollReveal stagger className="grid grid-cols-2 gap-3 w-full max-w-xs">
              {features.map((f) => (
                <motion.div
                  key={f.label}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                  className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-xs text-white/70 font-light leading-snug">{f.label}</span>
                </motion.div>
              ))}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
