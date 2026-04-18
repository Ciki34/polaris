"use client";

import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "./scroll-reveal";

export function HowPolarisWorksSection({ lang }: { lang: string }) {
  return (
    <section className="section-padding overflow-hidden relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 40%, oklch(0.82 0.052 33 / 0.08) 0%, transparent 68%)",
        }}
      />

      <div className="container-tight">
        {/* Header */}
        <div className="text-center mb-20">
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

        {/* Step 1 */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-28">
          {/* Copy */}
          <div>
            <ScrollReveal delay={0.05}>
              <span
                aria-hidden
                className="font-heading text-8xl font-bold text-muted/20 select-none leading-none block mb-6"
              >
                01
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.13}>
              <p className="text-base text-muted-foreground font-light leading-relaxed">
                <span className="font-semibold text-foreground">Operation POLARIS</span>{" "}
                collects cosmic (life) energy (prana) and directs it into cells, encouraging
                them to regenerate and establish their normal functioning. It equally affects
                all forms of life including: people, animals and plants.
              </p>
            </ScrollReveal>
          </div>

          {/* Image — full natural aspect ratio, no crop */}
          <ScrollReveal delay={0.18} className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm">
              <Image
                src="/polaris-chakre.png"
                alt="Polaris i chakre"
                width={0}
                height={0}
                sizes="(max-width: 1024px) 100vw, 384px"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </ScrollReveal>
        </div>

        {/* Divider */}
        <ScrollReveal delay={0.05}>
          <div className="w-px h-16 bg-border/40 mx-auto mb-28" />
        </ScrollReveal>

        {/* Step 2 */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image left — full natural aspect ratio, no crop */}
          <ScrollReveal delay={0.1} className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="w-full max-w-xs">
              <Image
                src="/aura.png"
                alt="Aura zaštitno polje"
                width={0}
                height={0}
                sizes="(max-width: 1024px) 100vw, 320px"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </ScrollReveal>

          {/* Copy right */}
          <div className="order-1 lg:order-2">
            <ScrollReveal delay={0.05}>
              <span
                aria-hidden
                className="font-heading text-8xl font-bold text-muted/20 select-none leading-none block mb-6"
              >
                02
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.13}>
              <p className="text-base text-muted-foreground font-light leading-relaxed mb-10">
                POLARIS is absolutely compatible with all energy centers (chakras) of the
                human body, establishing the perfect harmony in the energy field (aura),
                which at the physical level results in perfect physical health. When your
                electromagnetic field (aura) is in good condition, you will be protected
                from external harmful effects, be it microorganisms, harmful radiation, or
                negative energy sent by other people. POLARIS will make a real protective
                wall from your aura.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.21}>
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
