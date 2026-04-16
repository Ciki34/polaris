import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDictionary, hasLocale, type Locale } from "../dictionaries";
import { FilterableGrid, type TestimonialItem } from "@/components/testimonials/filterable-grid";
import { ScrollReveal } from "@/components/home/scroll-reveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang as Locale);
  const d = dict.testimonialsPage;
  return {
    title: d.pageHero.title + " " + d.pageHero.titleItalic,
    description: d.pageHero.subtitle,
  };
}

export default async function TestimonialsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang as Locale);
  const d = dict.testimonialsPage;

  return (
    <>
      {/* ── Page Hero ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-28 pb-20 px-6 md:px-10 lg:px-16 text-center">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 0%, oklch(0.82 0.052 33 / 0.09) 0%, transparent 65%)",
          }}
        />

        <div className="max-w-3xl mx-auto">
          <ScrollReveal delay={0.05}>
            <p className="text-xs tracking-[0.22em] uppercase text-muted-foreground font-light mb-6">
              {d.pageHero.eyebrow}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.13}>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl tracking-tight text-balance leading-[1.07] mb-6">
              {d.pageHero.title}{" "}
              <span className="italic polaris-peach-text">{d.pageHero.titleItalic}</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.21}>
            <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-xl mx-auto">
              {d.pageHero.subtitle}
            </p>
          </ScrollReveal>
        </div>

        {/* Scroll line */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-25">
          <div className="w-px h-10 bg-foreground/40" />
        </div>
      </section>

      {/* ── Filterable Grid ────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
          <FilterableGrid items={d.items as unknown as TestimonialItem[]} filters={d.filters} />
        </div>
      </section>
    </>
  );
}
