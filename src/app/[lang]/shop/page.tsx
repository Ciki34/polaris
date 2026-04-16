import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDictionary, hasLocale, type Locale } from "../dictionaries";
import { ProductGrid } from "@/components/shop/product-grid";
import { ScrollReveal } from "@/components/home/scroll-reveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang as Locale);
  return { title: dict.shop.title + " " + dict.shop.titleItalic };
}

export default async function ShopPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang as Locale);
  const d = dict.shop;

  return (
    <>
      {/* ── Page Hero ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-28 pb-16 px-6 md:px-10 lg:px-16 text-center">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 65% 55% at 50% 0%, oklch(0.82 0.052 33 / 0.09) 0%, transparent 65%)",
          }}
        />

        <ScrollReveal delay={0.05}>
          <p className="text-xs tracking-[0.22em] uppercase text-muted-foreground font-light mb-5">
            {d.eyebrow}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.13}>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl tracking-tight text-balance leading-[1.07] mb-6">
            {d.title}{" "}
            <span className="italic text-polaris-peach">{d.titleItalic}</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.21}>
          <p className="text-base text-muted-foreground font-light leading-relaxed max-w-md mx-auto">
            {d.subtitle}
          </p>
        </ScrollReveal>
      </section>

      {/* ── Product Grid + Checkout ────────────────────────────────────── */}
      <section className="px-6 md:px-10 lg:px-16 pb-32">
        <div className="max-w-4xl mx-auto">
          <ProductGrid dict={d} lang={lang} />
        </div>
      </section>
    </>
  );
}
