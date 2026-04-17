"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollReveal, RevealChild } from "@/components/home/scroll-reveal";

const PERSON_IMAGES: Record<string, string> = {
  "Nikola Tesla":     "/nikola-tesla.jpeg",
  "Georges Lakhovsky": "/georges-lakhovsky.jpg",
};

/* ─── Types ───────────────────────────────────────────────────────────────── */
interface Stat { value: string; label: string }
interface Person { name: string; years: string; role: string; contribution: string; quote: string }

interface AboutDict {
  science: {
    eyebrow: string; title: string; body: string;
    stat1: Stat; stat2: Stat; stat3: Stat;
  };
  mechanism: {
    eyebrow: string; title: string; titleItalic: string; body: string;
    detail1: { label: string; body: string };
    detail2: { label: string; body: string };
    detail3: { label: string; body: string };
  };
  heritage: {
    eyebrow: string; title: string; titleItalic: string;
    intro: string; conceptTitle: string; conceptBody: string;
    people: Person[];
  };
  expert: {
    eyebrow: string; name: string; role: string; title: string;
    body: string; body2: string; quote: string; credentials: string[];
  };
}

/* ─── Shared helpers ──────────────────────────────────────────────────────── */
const RING_RADII = [82, 70, 59, 49, 40, 32, 24, 17, 11];

function PolarisRings({ size = 280, animated = false }: { size?: number; animated?: boolean }) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} aria-hidden>
      <defs>
        <radialGradient id="ringGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="oklch(0.82 0.052 33 / 0.15)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="96" fill="url(#ringGlow)" />
      {RING_RADII.map((r, i) => (
        <motion.circle
          key={i}
          cx="100" cy="100" r={r}
          fill="none"
          stroke="oklch(0.17 0.040 185)"
          strokeWidth={i === 0 ? 0.9 : 0.65}
          strokeOpacity={0.12 + (RING_RADII.length - i) * 0.038}
          initial={animated ? { scale: 0, opacity: 0 } : undefined}
          whileInView={animated ? { scale: 1, opacity: 1 } : undefined}
          viewport={{ once: true }}
          transition={{ delay: i * 0.07, duration: 0.55, ease: "easeOut" }}
          style={animated ? { transformOrigin: "100px 100px" } : undefined}
        />
      ))}
      <circle cx="100" cy="100" r="3" fill="oklch(0.17 0.040 185)" fillOpacity="0.5" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SECTION 1 — SCIENCE
   ═══════════════════════════════════════════════════════════════════════════ */
export function ScienceSection({ dict }: { dict: AboutDict["science"] }) {
  const stats = [dict.stat1, dict.stat2, dict.stat3];

  return (
    <section className="section-padding border-b border-border/40 overflow-hidden relative">
      {/* Ambient glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "radial-gradient(ellipse 60% 55% at 20% 50%, oklch(0.82 0.052 33 / 0.07) 0%, transparent 65%)" }} />

      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — copy */}
          <div>
            <ScrollReveal delay={0.05}>
              <p className="text-xs tracking-[0.22em] uppercase text-muted-foreground font-light mb-5">{dict.eyebrow}</p>
            </ScrollReveal>
            <ScrollReveal delay={0.13}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.8rem] tracking-tight leading-[1.12] text-balance mb-7">
                {dict.title}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.21}>
              <p className="text-base text-muted-foreground font-light leading-relaxed mb-10">{dict.body}</p>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal stagger className="grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <RevealChild key={s.value}>
                  <div className="flex flex-col gap-1 p-4 rounded-2xl bg-muted/40 border border-border/40">
                    <span className="font-heading text-lg md:text-xl tracking-tight text-foreground">{s.value}</span>
                    <span className="text-[10px] text-muted-foreground font-light leading-snug">{s.label}</span>
                  </div>
                </RevealChild>
              ))}
            </ScrollReveal>
          </div>

          {/* Right — electromagnetic cell visualization */}
          <ScrollReveal delay={0.1} className="flex justify-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              <svg viewBox="0 0 300 300" className="w-full h-full" aria-hidden>
                <defs>
                  <radialGradient id="cellGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="oklch(0.82 0.052 33 / 0.18)" />
                    <stop offset="100%" stopColor="transparent" />
                  </radialGradient>
                </defs>
                <circle cx="150" cy="150" r="140" fill="url(#cellGlow)" />

                {/* Electromagnetic wave rings */}
                {[120, 95, 70, 48, 28].map((r, i) => (
                  <motion.circle key={i} cx="150" cy="150" r={r}
                    fill="none" stroke="oklch(0.17 0.040 185)" strokeWidth="0.7"
                    strokeOpacity={0.06 + i * 0.04} strokeDasharray={i % 2 === 0 ? "4 3" : "none"}
                    initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
                    style={{ transformOrigin: "150px 150px" }}
                  />
                ))}

                {/* Central cell nucleus */}
                <motion.circle cx="150" cy="150" r="20"
                  fill="oklch(0.82 0.052 33 / 0.25)" stroke="oklch(0.82 0.052 33 / 0.5)" strokeWidth="1"
                  initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  style={{ transformOrigin: "150px 150px" }}
                />

                {/* Satellite nodes — represent communicating cells */}
                {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                  const rad = (angle * Math.PI) / 180;
                  const r = 80;
                  const x = 150 + r * Math.cos(rad);
                  const y = 150 + r * Math.sin(rad);
                  return (
                    <motion.g key={i}
                      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.08 }}
                    >
                      <line x1="150" y1="150" x2={x} y2={y}
                        stroke="oklch(0.17 0.040 185)" strokeWidth="0.5" strokeOpacity="0.12" />
                      <circle cx={x} cy={y} r="7"
                        fill="oklch(0.96 0.008 62)" stroke="oklch(0.17 0.040 185 / 0.25)" strokeWidth="0.8" />
                      <circle cx={x} cy={y} r="3"
                        fill="oklch(0.82 0.052 33 / 0.6)" />
                    </motion.g>
                  );
                })}
              </svg>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SECTION 2 — MECHANISM
   ═══════════════════════════════════════════════════════════════════════════ */
export function MechanismSection({ dict }: { dict: AboutDict["mechanism"] }) {
  const details = [dict.detail1, dict.detail2, dict.detail3];

  return (
    <section className="section-padding overflow-hidden relative">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "radial-gradient(ellipse 50% 60% at 80% 50%, oklch(0.72 0.06 148 / 0.05) 0%, transparent 65%)" }} />

      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — animated rings */}
          <ScrollReveal delay={0.05} className="flex flex-col items-center order-2 lg:order-1">
            <div className="relative">
              <PolarisRings size={300} animated />

              {/* Phi label */}
              <motion.div
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-background border border-border rounded-full px-5 py-2 shadow-sm"
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: 0.8 }}
              >
                <p className="text-xs tracking-widest uppercase font-light text-muted-foreground">
                  9 prstenova · Φ = 1.618
                </p>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Right — copy */}
          <div className="order-1 lg:order-2">
            <ScrollReveal delay={0.05}>
              <p className="text-xs tracking-[0.22em] uppercase text-muted-foreground font-light mb-5">{dict.eyebrow}</p>
            </ScrollReveal>
            <ScrollReveal delay={0.13}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.8rem] tracking-tight leading-[1.12] mb-7">
                {dict.title}<br />
                <span className="italic text-polaris-peach">{dict.titleItalic}</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.21}>
              <p className="text-base text-muted-foreground font-light leading-relaxed mb-10">{dict.body}</p>
            </ScrollReveal>

            {/* Detail cards */}
            <ScrollReveal stagger className="flex flex-col gap-4">
              {details.map((d, i) => (
                <RevealChild key={i}>
                  <div className="flex gap-4 p-5 rounded-2xl bg-card border border-border/50 hover:border-border transition-colors">
                    <div className="w-8 h-8 rounded-full bg-primary/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="font-heading text-sm">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium tracking-wide mb-1">{d.label}</p>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">{d.body}</p>
                    </div>
                  </div>
                </RevealChild>
              ))}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SECTION 3 — HERITAGE (Tesla + Lakhovsky)
   ═══════════════════════════════════════════════════════════════════════════ */
export function HeritageSection({ dict }: { dict: AboutDict["heritage"] }) {
  return (
    <section className="section-padding bg-secondary/20 border-y border-border/40 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <p className="text-xs tracking-[0.22em] uppercase text-muted-foreground font-light mb-4">{dict.eyebrow}</p>
            <h2 className="font-heading text-4xl md:text-5xl tracking-tight leading-[1.1] text-balance mb-6">
              {dict.title} <span className="italic">{dict.titleItalic}</span>
            </h2>
            <p className="text-base text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">{dict.intro}</p>
          </ScrollReveal>
        </div>

        {/* Person cards */}
        <ScrollReveal stagger className="grid md:grid-cols-2 gap-8 mb-16">
          {dict.people.map((person, i) => (
            <RevealChild key={person.name}>
              <motion.article
                className="group flex flex-col rounded-3xl bg-card border border-border/50 overflow-hidden hover:border-border hover:shadow-md transition-all duration-300"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
              >
                {/* Top: blob with photo */}
                <div className="relative h-52 bg-gradient-to-br from-secondary to-muted overflow-hidden flex items-end">
                  {/* Blob portrait */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="relative w-32 h-36 overflow-hidden flex-shrink-0"
                      style={{ borderRadius: "60% 40% 55% 45% / 48% 52% 48% 52%" }}
                    >
                      {PERSON_IMAGES[person.name] ? (
                        <Image
                          src={PERSON_IMAGES[person.name]}
                          alt={person.name}
                          fill
                          className="object-cover object-top"
                          sizes="128px"
                        />
                      ) : (
                        <div className="w-full h-full bg-foreground/10" />
                      )}
                    </div>
                  </div>
                  {/* Decorative rings */}
                  <div aria-hidden className="absolute top-4 right-4 opacity-20">
                    <PolarisRings size={80} />
                  </div>
                  {/* Name overlay */}
                  <div className="relative z-10 p-6 w-full bg-gradient-to-t from-card/80 to-transparent">
                    <p className="text-[10px] tracking-widest uppercase text-muted-foreground font-light mb-1">{person.years}</p>
                    <h3 className="font-heading text-2xl tracking-tight">{person.name}</h3>
                    <p className="text-xs text-muted-foreground font-light mt-1">{person.role}</p>
                  </div>
                </div>

                {/* Body */}
                <div className="p-7 flex flex-col flex-1">
                  <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">{person.contribution}</p>
                  <blockquote className="mt-auto border-l-2 border-accent pl-5">
                    <p className="font-heading text-base italic leading-snug text-foreground/80">
                      &ldquo;{person.quote}&rdquo;
                    </p>
                  </blockquote>
                </div>
              </motion.article>
            </RevealChild>
          ))}
        </ScrollReveal>

        {/* Oscillating circuits concept box */}
        <ScrollReveal delay={0.1}>
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 polaris-gradient opacity-95" />
            <div className="relative z-10 px-8 md:px-14 py-12 md:py-16 grid lg:grid-cols-[1fr_1.5fr] gap-10 items-center">
              {/* Left: concept title + mini disc */}
              <div className="flex flex-col items-start gap-6">
                <div className="opacity-50">
                  <PolarisRings size={120} />
                </div>
                <h3 className="font-heading text-2xl md:text-3xl text-white tracking-tight leading-snug">
                  {dict.conceptTitle}
                </h3>
              </div>
              {/* Right: explanation */}
              <p className="text-white/65 font-light leading-relaxed text-base">{dict.conceptBody}</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SECTION 4 — DR. TOMIĆ (Expert)
   ═══════════════════════════════════════════════════════════════════════════ */
export function ExpertSection({ dict }: { dict: AboutDict["expert"] }) {
  return (
    <section className="section-padding overflow-hidden relative">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "radial-gradient(ellipse 55% 60% at 90% 50%, oklch(0.82 0.052 33 / 0.07) 0%, transparent 65%)" }} />

      <div className="container-tight">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24 items-center">

          {/* Left — photo placeholder */}
          <ScrollReveal delay={0.05} className="flex justify-center">
            <div className="relative">
              {/* Main blob photo */}
              <motion.div
                className="relative w-64 h-80 md:w-72 md:h-[360px] overflow-hidden flex items-end"
                style={{
                  borderRadius: "62% 38% 55% 45% / 52% 48% 52% 48%",
                  background: "linear-gradient(155deg, oklch(0.93 0.015 62) 0%, oklch(0.86 0.030 40) 55%, oklch(0.78 0.042 30) 100%)",
                }}
                initial={{ scale: 0.94, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 px-8">
                  <div className="text-center opacity-40">
                    <PolarisRings size={72} />
                    <p className="text-[9px] tracking-widest uppercase font-light text-foreground/60 mt-3">Dr. Dino Tomić</p>
                  </div>
                </div>
              </motion.div>

              {/* Credentials pill */}
              <motion.div
                className="absolute -bottom-4 -right-4 bg-background border border-border rounded-2xl px-4 py-3 shadow-sm"
                initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: 0.6 }}
              >
                <p className="text-[10px] tracking-widest uppercase text-muted-foreground font-light mb-1">Iskustvo</p>
                <p className="font-heading text-xl tracking-tight">20+ god.</p>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Right — copy */}
          <div>
            <ScrollReveal delay={0.05}>
              <p className="text-xs tracking-[0.22em] uppercase text-muted-foreground font-light mb-5">{dict.eyebrow}</p>
            </ScrollReveal>
            <ScrollReveal delay={0.13}>
              <div className="mb-3">
                <h2 className="font-heading text-3xl md:text-4xl tracking-tight leading-[1.12] mb-2">{dict.name}</h2>
                <p className="text-xs text-muted-foreground font-light tracking-widest">{dict.role}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.19}>
              <h3 className="font-heading text-xl md:text-2xl tracking-tight leading-snug mb-6 text-foreground/85 italic">
                {dict.title}
              </h3>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">{dict.body}</p>
              <p className="text-sm text-muted-foreground font-light leading-relaxed mb-8">{dict.body2}</p>
            </ScrollReveal>

            {/* Quote */}
            <ScrollReveal delay={0.32}>
              <blockquote className="border-l-2 border-accent pl-6 mb-8">
                <p className="font-heading text-lg md:text-xl italic leading-snug text-foreground">
                  &ldquo;{dict.quote}&rdquo;
                </p>
              </blockquote>
            </ScrollReveal>

            {/* Credentials */}
            <ScrollReveal stagger className="flex flex-wrap gap-2">
              {dict.credentials.map((c) => (
                <RevealChild key={c}>
                  <span className="inline-flex items-center gap-1.5 text-xs bg-muted border border-border/50 rounded-full px-4 py-2 font-light text-foreground/70">
                    <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                    {c}
                  </span>
                </RevealChild>
              ))}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
