import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Phone, Mail, Clock } from "lucide-react";
import { getDictionary, hasLocale, type Locale } from "../dictionaries";
import { FaqAccordion } from "@/components/contact/faq-accordion";
import { ContactForm } from "@/components/contact/contact-form";
import { ScrollReveal } from "@/components/home/scroll-reveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang as Locale);
  const d = dict.contactPage;
  return {
    title: d.pageHero.title + " " + d.pageHero.titleItalic,
    description: d.pageHero.subtitle,
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang as Locale);
  const d = dict.contactPage;

  return (
    <>
      {/* ── Page Hero ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-28 pb-20 px-6 md:px-10 lg:px-16 text-center">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 0%, oklch(0.62 0.11 185 / 0.08) 0%, transparent 65%)",
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
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-25">
          <div className="w-px h-10 bg-foreground/40" />
        </div>
      </section>

      {/* ── Support Info Cards ─────────────────────────────────────────── */}
      <section className="px-6 md:px-10 lg:px-16 pb-16">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal delay={0.05}>
            <p className="text-xs tracking-[0.22em] uppercase text-muted-foreground font-light mb-4 text-center">
              {d.support.eyebrow}
            </p>
            <h2 className="font-heading text-2xl md:text-3xl tracking-tight text-center mb-10">
              {d.support.title}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Phone */}
            <ScrollReveal delay={0.08}>
              <div className="flex flex-col items-center gap-3 rounded-2xl border border-border/50 bg-card p-7 text-center hover:border-border hover:shadow-lg hover:shadow-foreground/5 transition-all duration-300">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center"
                  style={{ background: "oklch(0.22 0.035 185 / 0.12)" }}
                >
                  <Phone
                    className="w-5 h-5"
                    style={{ color: "oklch(0.62 0.11 185)" }}
                  />
                </div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground font-light">
                  {d.support.phoneLabel}
                </p>
                <p className="text-sm font-medium tracking-wide">{d.support.phoneValue}</p>
              </div>
            </ScrollReveal>

            {/* Email */}
            <ScrollReveal delay={0.14}>
              <div className="flex flex-col items-center gap-3 rounded-2xl border border-border/50 bg-card p-7 text-center hover:border-border hover:shadow-lg hover:shadow-foreground/5 transition-all duration-300">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center"
                  style={{ background: "oklch(0.82 0.052 33 / 0.10)" }}
                >
                  <Mail
                    className="w-5 h-5"
                    style={{ color: "oklch(0.62 0.13 33)" }}
                  />
                </div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground font-light">
                  {d.support.emailLabel}
                </p>
                <p className="text-sm font-medium tracking-wide">{d.support.emailValue}</p>
              </div>
            </ScrollReveal>

            {/* Hours */}
            <ScrollReveal delay={0.20}>
              <div className="flex flex-col items-center gap-3 rounded-2xl border border-border/50 bg-card p-7 text-center hover:border-border hover:shadow-lg hover:shadow-foreground/5 transition-all duration-300">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center"
                  style={{ background: "oklch(0.78 0.12 88 / 0.10)" }}
                >
                  <Clock
                    className="w-5 h-5"
                    style={{ color: "oklch(0.58 0.10 88)" }}
                  />
                </div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground font-light">
                  {d.support.hoursLabel}
                </p>
                <p className="text-sm font-medium tracking-wide">{d.support.hoursValue}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── FAQ + Form ─────────────────────────────────────────────────── */}
      <section className="section-padding border-t border-border/30">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* FAQ */}
            <FaqAccordion dict={d.faq} />

            {/* Vertical divider (desktop) */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border/30 pointer-events-none" aria-hidden />

            {/* Contact Form */}
            <ScrollReveal delay={0.1}>
              <ContactForm dict={d.contactForm} />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
