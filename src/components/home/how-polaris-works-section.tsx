"use client";

import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "./scroll-reveal";

export function HowPolarisWorksSection({ lang }: { lang: string }) {
  return (
    <section className="section-padding bg-secondary/20 border-y border-border/40 overflow-hidden relative">
      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 50%, oklch(0.82 0.052 33 / 0.07) 0%, transparent 70%)",
        }}
      />

      <div className="container-tight">
        {/* Section eyebrow */}
        <ScrollReveal delay={0.05}>
          <p className="text-xs tracking-[0.22em] uppercase text-muted-foreground font-light mb-5 text-center">
            Mehanizam dejstva
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.10}>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[3.2rem] tracking-tight leading-[1.1] mb-16 text-center text-balance">
            Kako Polaris funkcioniše
          </h2>
        </ScrollReveal>

        {/* Block 1 — energy / chakra */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          {/* Copy */}
          <div>
            <ScrollReveal delay={0.13}>
              <p className="text-base text-muted-foreground font-light leading-relaxed">
                <span className="font-semibold text-foreground">Operation POLARIS</span>{" "}
                collects cosmic (life) energy (prana) and directs it into cells, encouraging
                them to regenerate and establish their normal functioning. It equally affects
                all forms of life including: people, animals and plants.
              </p>
            </ScrollReveal>
          </div>

          {/* Image */}
          <ScrollReveal delay={0.18} className="flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-border/40 shadow-md">
              <Image
                src="/polaris-chakre.png"
                alt="Polaris i chakre"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 288px, 320px"
              />
            </div>
          </ScrollReveal>
        </div>

        {/* Block 2 — aura */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image — left on desktop */}
          <ScrollReveal delay={0.13} className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-border/40 shadow-md">
              <Image
                src="/aura.png"
                alt="Aura zaštitno polje"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 288px, 320px"
              />
            </div>
          </ScrollReveal>

          {/* Copy — right on desktop */}
          <div className="order-1 lg:order-2">
            <ScrollReveal delay={0.18}>
              <p className="text-base text-muted-foreground font-light leading-relaxed mb-10">
                POLARIS is absolutely compatible with all energy centers (chakras) of the human
                body, establishing the perfect harmony in the energy field (aura), which at the
                physical level results in perfect physical health. When your electromagnetic
                field (aura) is in good condition, you will be protected from external harmful
                effects, be it microorganisms, harmful radiation, or negative energy sent by
                other people. POLARIS will make a real protective wall from your aura.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.26}>
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
        </div>
      </div>
    </section>
  );
}
