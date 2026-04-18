import { notFound } from "next/navigation";
import { getDictionary, hasLocale, type Locale } from "./dictionaries";
import { HeroSection } from "@/components/home/hero-section";
import { MarqueeStrip } from "@/components/home/marquee-strip";
import { NovakSection } from "@/components/home/novak-section";
import { ProblemSection } from "@/components/home/problem-section";
import { SolutionSection } from "@/components/home/solution-section";
import { SportSection } from "@/components/home/sport-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import { HowPolarisWorksSection } from "@/components/home/how-polaris-works-section";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang as Locale);

  return (
    <>
      <HeroSection dict={dict.hero} lang={lang} />
      <MarqueeStrip words={dict.strip} />
      <NovakSection dict={dict.novak} />
      <ProblemSection dict={dict.problem} />
      <SolutionSection dict={dict.solution} lang={lang} />
      <SportSection dict={dict.sport} lang={lang} />
      <HowPolarisWorksSection lang={lang} />
      <TestimonialsSection dict={dict.testimonials} />
      <FinalCtaSection dict={dict.finalCta} lang={lang} />
    </>
  );
}
