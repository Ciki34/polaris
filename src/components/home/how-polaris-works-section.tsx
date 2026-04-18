"use client";

import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "./scroll-reveal";

export function HowPolarisWorksSection({ lang }: { lang: string }) {
  return (
    <section className="overflow-hidden relative py-24 md:py-32">
      {/* ── Header ──────────────────────────────────────────────────── */}
      <div className="container-tight text-center mb-16">
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

      {/* ── Block 1 — dark emerald rounded box ──────────────────────── */}
      <div className="mx-4 md:mx-6 lg:mx-10 xl:mx-16 mb-6 rounded-3xl overflow-hidden relative">
        {/* Background */}
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
          className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] opacity-20"
          style={{
            background:
              "radial-gradient(circle, oklch(0.82 0.052 33 / 0.3) 0%, transparent 65%)",
            transform: "translate(25%, -25%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-0 w-[360px] h-[360px] opacity-10"
          style={{
            background:
              "radial-gradient(circle, oklch(0.72 0.06 148 / 0.4) 0%, transparent 65%)",
            transform: "translate(-30%, 30%)",
          }}
        />

        <div className="relative z-10 px-8 md:px-14 lg:px-20 py-20 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left — copy */}
            <div>
              <ScrollReveal delay={0.05}>
                <span
                  aria-hidden
                  className="font-heading text-8xl font-bold text-white/10 select-none leading-none block mb-6"
                >
                  01
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.13}>
                <p className="text-base text-white/60 font-light leading-relaxed">
                  <span className="font-semibold text-white">Operation POLARIS</span>{" "}
                  collects cosmic (life) energy (prana) and directs it into cells,
                  encouraging them to regenerate and establish their normal functioning.
                  It equally affects all forms of life — people, animals and plants.
                </p>
              </ScrollReveal>
            </div>

            {/* Right — chakre illustration, full natural size */}
            <ScrollReveal delay={0.18} className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md">
                <Image
                  src="/polaris-chakre2.png"
                  alt="Polaris i 7 chakri"
                  width={0}
                  height={0}
                  sizes="(max-width: 1024px) 100vw, 448px"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* ── Block 2 — light, open, aura full-width ───────────────────── */}
      <div className="container-tight pt-20">
        {/* Step number + text — centered */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <ScrollReveal delay={0.05}>
            <span
              aria-hidden
              className="font-heading text-8xl font-bold text-muted/20 select-none leading-none block mb-6"
            >
              02
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.13}>
            <p className="text-base text-muted-foreground font-light leading-relaxed">
              POLARIS harmonizes all 7 energy centers (chakras), establishing perfect
              balance in your electromagnetic field (aura) — which at the physical level
              results in complete health. A strong aura shields you from microorganisms,
              harmful radiation, and negative external energies, making it an
              impenetrable protective wall.
            </p>
          </ScrollReveal>
        </div>

        {/* Aura image — full container width */}
        <ScrollReveal delay={0.18}>
          <div className="w-full max-w-3xl mx-auto mb-12">
            <Image
              src="/aura2.png"
              alt="Aura — before and after Polaris"
              width={0}
              height={0}
              sizes="(max-width: 1280px) 100vw, 896px"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={0.24} className="flex justify-center">
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
