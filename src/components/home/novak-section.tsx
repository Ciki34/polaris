"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "./scroll-reveal";

interface NovakDict {
  eyebrow: string;
  title: string;
  body: string;
  quote: string;
  attribution: string;
  videoLabel: string;
}

export function NovakSection({ dict }: { dict: NovakDict }) {
  return (
    <section className="section-padding bg-secondary/20 border-y border-border/50 overflow-hidden relative">
      {/* Subtle emerald glow top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 -z-10 w-96 h-96 rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, oklch(0.17 0.040 185 / 0.12) 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />

      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — video placeholder */}
          <ScrollReveal delay={0.05}>
            <div className="relative isolate">
              <div
                className="relative w-full aspect-video rounded-2xl overflow-hidden bg-muted cursor-pointer group"
                style={{
                  boxShadow:
                    "0 32px 64px -16px oklch(0.17 0.040 185 / 0.18), 0 8px 24px -8px oklch(0.17 0.040 185 / 0.10)",
                }}
              >
                {/* Thumbnail placeholder */}
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.17 0.040 185) 0%, oklch(0.24 0.048 185) 100%)",
                  }}
                >
                  {/* Play button */}
                  <motion.div
                    className="w-18 h-18 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <svg
                      className="w-7 h-7 text-white translate-x-0.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </motion.div>

                  {/* Novak name overlay */}
                  <div className="absolute bottom-5 left-5">
                    <p className="text-white/50 text-[10px] tracking-widest uppercase font-light">
                      {dict.videoLabel}
                    </p>
                    <p className="text-white font-heading text-lg italic mt-0.5">
                      Novak Đoković
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative ring */}
              <div
                aria-hidden
                className="absolute -inset-3 -z-10 rounded-3xl opacity-30"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.82 0.052 33 / 0.3), transparent 60%)",
                }}
              />
            </div>
          </ScrollReveal>

          {/* Right — copy */}
          <div className="flex flex-col">
            <ScrollReveal delay={0.1}>
              <p className="text-xs tracking-[0.22em] uppercase text-muted-foreground font-light mb-5">
                {dict.eyebrow}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.18}>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-[3rem] tracking-tight text-balance leading-[1.1] mb-7">
                {dict.title}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.26}>
              <p className="text-base text-muted-foreground font-light leading-relaxed mb-10">
                {dict.body}
              </p>
            </ScrollReveal>

            {/* Quote block */}
            <ScrollReveal delay={0.34}>
              <blockquote
                className="relative border-l-2 border-accent pl-6 py-1"
              >
                <p className="font-heading text-xl md:text-2xl italic text-foreground leading-snug mb-4">
                  &ldquo;{dict.quote}&rdquo;
                </p>
                <footer className="flex items-center gap-3">
                  {/* Avatar placeholder */}
                  <div
                    className="w-9 h-9 rounded-full flex-shrink-0"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.17 0.040 185), oklch(0.35 0.055 185))",
                    }}
                  />
                  <div>
                    <p className="text-sm font-medium tracking-wide">{dict.attribution}</p>
                    <p className="text-xs text-muted-foreground font-light tracking-wide">
                      No. 1 ATP • 24× Grand Slam
                    </p>
                  </div>
                </footer>
              </blockquote>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
