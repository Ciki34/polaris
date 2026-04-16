"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "./scroll-reveal";

interface TestimonialItem {
  quote: string;
  author: string;
  location: string;
}

interface TestimonialsDict {
  eyebrow: string;
  title: string;
  titleItalic: string;
  items: TestimonialItem[];
}

export function TestimonialsSection({ dict }: { dict: TestimonialsDict }) {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > active ? 1 : -1);
      setActive(index);
    },
    [active]
  );

  const next = useCallback(() => {
    const nextIdx = (active + 1) % dict.items.length;
    setDirection(1);
    setActive(nextIdx);
  }, [active, dict.items.length]);

  // Auto-advance every 5s
  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 40 : -40 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -40 : 40 }),
  };

  return (
    <section className="section-padding overflow-hidden">
      <div className="container-tight">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <p className="text-xs tracking-[0.22em] uppercase text-muted-foreground font-light mb-5">
              {dict.eyebrow}
            </p>
            <h2 className="font-heading text-4xl md:text-5xl tracking-tight text-balance leading-[1.1]">
              {dict.title}{" "}
              <span className="italic">{dict.titleItalic}</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Carousel */}
        <ScrollReveal delay={0.1}>
          <div className="relative max-w-2xl mx-auto">
            {/* Quote card */}
            <div
              className="relative rounded-3xl border border-border/50 bg-card px-8 md:px-14 py-12 md:py-16 overflow-hidden min-h-[260px] flex flex-col items-center justify-center"
              style={{
                boxShadow: "0 4px 32px -8px oklch(0.17 0.040 185 / 0.06)",
              }}
            >
              {/* Background quotation mark */}
              <span
                aria-hidden
                className="absolute top-5 left-8 font-heading text-9xl text-muted/20 leading-none select-none pointer-events-none"
              >
                "
              </span>

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={active}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                  className="text-center"
                >
                  <p className="font-heading text-xl md:text-2xl italic text-foreground leading-snug mb-8">
                    &ldquo;{dict.items[active].quote}&rdquo;
                  </p>
                  <div className="flex flex-col items-center gap-1">
                    <p className="text-sm font-medium tracking-wide">
                      {dict.items[active].author}
                    </p>
                    <p className="text-xs text-muted-foreground font-light tracking-widest uppercase">
                      {dict.items[active].location}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {dict.items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  className="group relative h-1.5 rounded-full overflow-hidden transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  style={{ width: i === active ? "2rem" : "0.4rem" }}
                >
                  <span
                    className="absolute inset-0 rounded-full transition-colors duration-200"
                    style={{
                      background:
                        i === active
                          ? "oklch(0.17 0.040 185)"
                          : "oklch(0.17 0.040 185 / 0.18)",
                    }}
                  />
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
