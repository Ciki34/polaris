import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getDictionary, hasLocale, type Locale } from "../dictionaries";
import { BodyMap } from "@/components/how-to-use/body-map";
import { UsageExtras } from "@/components/how-to-use/usage-extras";
import { ScrollReveal } from "@/components/home/scroll-reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang as Locale);
  return {
    title: dict.howToUse.pageHero.title + " " + dict.howToUse.pageHero.titleItalic,
  };
}

export default async function HowToUsePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang as Locale);
  const d = dict.howToUse;

  return (
    <>
      {/* ── Page Hero ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-28 pb-20 px-6 md:px-10 lg:px-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 0%, oklch(0.82 0.052 33 / 0.09) 0%, transparent 65%)",
          }}
        />

        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal delay={0.05}>
            <p className="text-xs tracking-[0.22em] uppercase text-muted-foreground font-light mb-6">
              {d.pageHero.eyebrow}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.13}>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl tracking-tight text-balance leading-[1.07] mb-7">
              {d.pageHero.title}{" "}
              <span className="italic text-polaris-peach">{d.pageHero.titleItalic}</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.21}>
            <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-xl mx-auto">
              {d.pageHero.subtitle}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Alert Box ─────────────────────────────────────────────────── */}
      {d.alert && (
        <section className="px-6 md:px-10 lg:px-16 pb-10">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal delay={0.05}>
              <div
                className="relative flex items-start gap-4 rounded-2xl border px-6 py-5 overflow-hidden"
                style={{
                  background: "oklch(0.82 0.052 33 / 0.07)",
                  borderColor: "oklch(0.82 0.052 33 / 0.35)",
                }}
              >
                {/* Left accent bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                  style={{ background: "oklch(0.82 0.052 33)" }}
                />

                {/* Icon */}
                <div
                  className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center mt-0.5"
                  style={{ background: "oklch(0.82 0.052 33 / 0.20)" }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="oklch(0.55 0.09 33)"
                    strokeWidth="2"
                    className="w-4.5 h-4.5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </div>

                {/* Text */}
                <div>
                  <p
                    className="text-xs font-semibold tracking-widest uppercase mb-1"
                    style={{ color: "oklch(0.50 0.09 33)" }}
                  >
                    {d.alert.title}
                  </p>
                  <p className="text-sm font-light leading-relaxed text-foreground/80">
                    {d.alert.body}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ── Interactive Body Map ───────────────────────────────────────── */}
      <section className="px-6 md:px-10 lg:px-16 pb-24">
        <div className="max-w-6xl mx-auto">
          <BodyMap points={d.points} mapSection={d.mapSection} />
        </div>
      </section>

      {/* ── Usage Extras ──────────────────────────────────────────────── */}
      <UsageExtras dict={d.extras} />

      {/* ── Final CTA ─────────────────────────────────────────────────── */}
      <section className="section-padding text-center border-t border-border/30">
        <ScrollReveal>
          <p className="text-xs tracking-[0.22em] uppercase text-muted-foreground font-light mb-5">
            Polaris
          </p>
          <h2 className="font-heading text-4xl md:text-5xl tracking-tight text-balance leading-[1.1] mb-6">
            Spremni da počnete?
          </h2>
          <p className="text-muted-foreground font-light mb-10 max-w-sm mx-auto text-sm leading-relaxed">
            Naručite Polaris danas i za 24h je na vašim vratima.
          </p>
          <Link
            href={`/${lang}/products`}
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-full px-12 h-12 text-sm tracking-widest uppercase font-medium shadow-lg shadow-primary/15"
            )}
          >
            Naruči Polaris
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
