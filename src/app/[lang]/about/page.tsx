import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getDictionary, hasLocale, type Locale } from "../dictionaries";
import { ScienceSection, MechanismSection, HeritageSection, ExpertSection } from "@/components/about/about-sections";
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
    title: dict.aboutPage.pageHero.title + " " + dict.aboutPage.pageHero.titleItalic,
    description: dict.aboutPage.science.body.slice(0, 155),
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang as Locale);
  const d = dict.aboutPage;

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
            <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
              {d.pageHero.subtitle}
            </p>
          </ScrollReveal>
        </div>

        {/* Scroll line */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-25">
          <div className="w-px h-10 bg-foreground/40" />
        </div>
      </section>

      {/* ── Four content sections ──────────────────────────────────────── */}
      <ScienceSection dict={d.science} />
      <MechanismSection dict={d.mechanism} />
      <HeritageSection dict={d.heritage} />
      <ExpertSection dict={d.expert} />

      {/* ── Final CTA ─────────────────────────────────────────────────── */}
      <section className="section-padding text-center border-t border-border/30">
        <ScrollReveal>
          <p className="text-xs tracking-[0.22em] uppercase text-muted-foreground font-light mb-5">
            Polaris
          </p>
          <h2 className="font-heading text-4xl md:text-5xl tracking-tight text-balance leading-[1.1] mb-4">
            Spremi za iskustvo?
          </h2>
          <p className="text-muted-foreground font-light mb-10 max-w-sm mx-auto text-sm leading-relaxed">
            Vaš Polaris čeka. Dostava u roku od 24h.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`/${lang}/shop`}
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-full px-12 h-12 text-sm tracking-widest uppercase font-medium shadow-md shadow-primary/15"
              )}
            >
              Naruči Polaris
            </Link>
            <Link
              href={`/${lang}/how-to-use`}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "rounded-full px-10 h-12 text-sm tracking-widest uppercase font-light border-foreground/20"
              )}
            >
              Kako se koristi →
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
