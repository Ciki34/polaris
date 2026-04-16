"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { ScrollReveal } from "@/components/home/scroll-reveal";
import { cn } from "@/lib/utils";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface FaqDict {
  eyebrow: string;
  title: string;
  items: FaqItem[];
}

export function FaqAccordion({ dict }: { dict: FaqDict }) {
  const [open, setOpen] = useState<string | null>(dict.items[0]?.id ?? null);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <ScrollReveal delay={0.05}>
        <p className="text-xs tracking-[0.22em] uppercase text-muted-foreground font-light mb-4">
          {dict.eyebrow}
        </p>
        <h2 className="font-heading text-3xl md:text-4xl tracking-tight leading-tight mb-10">
          {dict.title}
        </h2>
      </ScrollReveal>

      <div className="divide-y divide-border/50">
        {dict.items.map((item, i) => {
          const isOpen = open === item.id;
          return (
            <ScrollReveal key={item.id} delay={0.05 + i * 0.06}>
              <div>
                <button
                  onClick={() => setOpen(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  className={cn(
                    "w-full flex items-center justify-between gap-4 py-5 text-left transition-colors duration-200",
                    isOpen ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <span className="text-sm md:text-base font-medium leading-snug">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 24 }}
                    className={cn(
                      "flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-200",
                      isOpen
                        ? "bg-foreground text-background"
                        : "bg-muted text-muted-foreground"
                    )}
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm text-muted-foreground font-light leading-relaxed pr-10">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
}
