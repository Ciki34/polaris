"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroDict {
  badge: string;
  title: string;
  titleItalic: string;
  subtitle: string;
  cta: string;
  scroll: string;
}

interface HeroSectionProps {
  dict: HeroDict;
  lang: string;
}

export function HeroSection({ dict, lang }: HeroSectionProps) {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-background">
      {/* Ambient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 30% 50%, oklch(0.82 0.052 33 / 0.10) 0%, transparent 65%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 55% 55% at 80% 30%, oklch(0.72 0.06 148 / 0.07) 0%, transparent 60%)",
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-28">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — copy */}
          <div className="flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="inline-flex items-center gap-2 mb-8 text-xs tracking-[0.22em] uppercase text-muted-foreground font-light border border-border/70 rounded-full px-5 py-2">
                <span className="w-1 h-1 rounded-full bg-polaris-peach inline-block" />
                {dict.badge}
              </span>
            </motion.div>

            <motion.h1
              className="font-heading text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] tracking-tight text-balance leading-[1.07] mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {dict.title}{" "}
              <span className="italic text-polaris-peach">{dict.titleItalic}</span>
            </motion.h1>

            <motion.p
              className="text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-lg mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            >
              {dict.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.38, ease: "easeOut" }}
            >
              <Link
                href={`/${lang}/products`}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-full px-10 h-13 text-sm tracking-widest uppercase font-medium shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-shadow"
                )}
              >
                {dict.cta}
              </Link>
            </motion.div>
          </div>

          {/* Right — photo placeholder */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Blob container */}
            <div
              className="relative w-full max-w-sm md:max-w-md aspect-[3/4]"
              style={{
                borderRadius: "62% 38% 55% 45% / 48% 52% 48% 52%",
                overflow: "hidden",
              }}
            >
              <Image
                src="/IMG_0829.jpg"
                alt="Dr. Dina Tomić"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Floating accent — Phi symbol */}
            <motion.div
              className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-background border border-border flex items-center justify-center shadow-sm"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="font-heading italic text-xl text-polaris-peach">φ</span>
            </motion.div>

            {/* Floating stats card */}
            <motion.div
              className="absolute -bottom-2 -left-4 md:-left-8 bg-background/90 backdrop-blur-sm border border-border rounded-2xl px-5 py-4 shadow-md"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
            >
              <p className="text-xs text-muted-foreground font-light tracking-wide uppercase mb-1">Korisnika</p>
              <p className="font-heading text-2xl tracking-tight">10 000+</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-[10px] tracking-[0.25em] uppercase font-light">{dict.scroll}</span>
        <motion.div
          className="w-px h-10 bg-foreground/40 origin-top"
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
}
