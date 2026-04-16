"use client";

import { motion } from "framer-motion";
import { ScrollReveal, RevealChild } from "./scroll-reveal";

interface ProblemCard {
  number: string;
  title: string;
  body: string;
}

interface ProblemDict {
  eyebrow: string;
  title: string;
  titleItalic: string;
  cards: ProblemCard[];
}

const cardIcons = [
  // Battery low
  <svg key="energy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
    <rect x="2" y="7" width="18" height="10" rx="2" />
    <path d="M20 11h2v2h-2" />
    <path d="M6 11h4" />
  </svg>,
  // Body/spine
  <svg key="pain" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
    <path d="M12 2v20M9 5l3-3 3 3M9 19l3 3 3-3M8 9h8M8 15h8" />
  </svg>,
  // Waves
  <svg key="stress" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
    <path d="M2 12c2-4 4-4 6 0s4 4 6 0 4-4 6 0" />
    <path d="M2 17c2-3 4-3 6 0s4 3 6 0 4-3 6 0" />
    <path d="M2 7c2-3 4-3 6 0s4 3 6 0 4-3 6 0" />
  </svg>,
];

export function ProblemSection({ dict }: { dict: ProblemDict }) {
  return (
    <section className="section-padding overflow-hidden">
      <div className="container-tight">
        {/* Header */}
        <div className="text-center mb-20">
          <ScrollReveal>
            <p className="text-xs tracking-[0.22em] uppercase text-muted-foreground font-light mb-5">
              {dict.eyebrow}
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[3.2rem] tracking-tight text-balance leading-[1.1]">
              {dict.title}{" "}
              <span className="italic">{dict.titleItalic}</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Cards */}
        <ScrollReveal stagger className="grid md:grid-cols-3 gap-6 md:gap-8">
          {dict.cards.map((card, i) => (
            <RevealChild key={card.number}>
              <motion.article
                className="group relative flex flex-col p-8 rounded-2xl border border-border/60 bg-card hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 cursor-default overflow-hidden"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
              >
                {/* Background number */}
                <span
                  aria-hidden
                  className="absolute top-5 right-6 font-heading text-7xl font-bold text-muted/40 group-hover:text-muted/60 transition-colors select-none leading-none"
                >
                  {card.number}
                </span>

                {/* Icon */}
                <div className="mb-6 w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center text-foreground/70 group-hover:bg-accent/25 transition-colors">
                  {cardIcons[i]}
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl md:text-2xl tracking-tight mb-4">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {card.body}
                </p>

                {/* Bottom line accent */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
              </motion.article>
            </RevealChild>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
