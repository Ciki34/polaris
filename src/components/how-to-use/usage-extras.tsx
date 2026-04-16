"use client";

import { motion } from "framer-motion";
import { ScrollReveal, RevealChild } from "@/components/home/scroll-reveal";

interface ExtraItem {
  id: string;
  title: string;
  body: string;
  stat: string;
}

interface ExtrasDict {
  eyebrow: string;
  title: string;
  titleItalic: string;
  items: ExtraItem[];
}

const EXTRA_ICONS: Record<string, React.ReactNode> = {
  water: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M12 2C6 9 4 13 4 16a8 8 0 0016 0c0-3-2-7-8-14z" />
      <path d="M9 17a3 3 0 006 0" strokeLinecap="round" />
    </svg>
  ),
  plants: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M12 22V12" />
      <path d="M12 12C12 7 8 4 4 5c0 5 3.5 8 8 7z" />
      <path d="M12 12c0-5 4-8 8-7c0 5-3.5 8-8 7z" />
    </svg>
  ),
  space: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M9 9h6M9 12h6M9 15h4" strokeLinecap="round" />
      <circle cx="17" cy="7" r="2" />
    </svg>
  ),
  /* ── New icons ── */
  obesity: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M12 2a5 5 0 015 5c0 5-5 11-5 11S7 12 7 7a5 5 0 015-5z" />
      <path d="M9 7h6M12 5v4" strokeLinecap="round" />
    </svg>
  ),
  circulation: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M12 21C7 21 4 17 4 14c0-2 1-4 2-5" strokeLinecap="round" />
      <path d="M12 21c5 0 8-4 8-7 0-2-1-4-2-5" strokeLinecap="round" />
      <path d="M8 4l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 3v5" strokeLinecap="round" />
    </svg>
  ),
  stress: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M6 9c0-3.3 2.7-6 6-6s6 2.7 6 6c0 2-1 3.8-2.5 4.9L15 18H9l-.5-4.1C7 12.8 6 11 6 9z" />
      <path d="M9 21h6" strokeLinecap="round" />
      <path d="M12 18v3" strokeLinecap="round" />
    </svg>
  ),
};

export function UsageExtras({ dict }: { dict: ExtrasDict }) {
  return (
    <section className="section-padding border-t border-border/40 bg-secondary/15">
      <div className="container-tight">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <p className="text-xs tracking-[0.22em] uppercase text-muted-foreground font-light mb-4">
              {dict.eyebrow}
            </p>
            <h2 className="font-heading text-4xl md:text-5xl tracking-tight text-balance leading-[1.1]">
              {dict.title}{" "}
              <span className="italic">{dict.titleItalic}</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Cards */}
        <ScrollReveal stagger className="grid md:grid-cols-3 gap-6">
          {dict.items.map((item) => (
            <RevealChild key={item.id}>
              <motion.article
                className="group relative flex flex-col p-8 rounded-2xl bg-card border border-border/50 hover:border-accent/40 transition-all duration-300 hover:shadow-md hover:shadow-accent/5 overflow-hidden"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
              >
                {/* Stat badge — top right */}
                <div className="absolute top-5 right-5">
                  <span className="text-[10px] tracking-widest uppercase bg-accent/20 text-foreground/60 rounded-full px-3 py-1 font-medium">
                    {item.stat}
                  </span>
                </div>

                {/* Icon */}
                <div className="mb-6 w-12 h-12 rounded-xl bg-primary/6 flex items-center justify-center text-foreground/60 group-hover:bg-accent/20 transition-colors">
                  {EXTRA_ICONS[item.id]}
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl md:text-2xl tracking-tight mb-4 text-balance">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {item.body}
                </p>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.article>
            </RevealChild>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
