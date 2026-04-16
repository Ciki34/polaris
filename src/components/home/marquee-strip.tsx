"use client";

import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

export function MarqueeStrip({ words }: { words: string[] }) {
  const doubled = [...words, ...words];

  return (
    <>
      <Separator />
      <section className="py-5 overflow-hidden bg-secondary/25 select-none" aria-hidden>
        <motion.div
          className="flex items-center gap-12 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {doubled.map((word, i) => (
            <span
              key={i}
              className="flex items-center gap-12 text-[10px] tracking-[0.28em] uppercase text-muted-foreground whitespace-nowrap font-light"
            >
              {word}
              <span className="w-1 h-1 rounded-full bg-accent/60 flex-shrink-0" />
            </span>
          ))}
        </motion.div>
      </section>
      <Separator />
    </>
  );
}
