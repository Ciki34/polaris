"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const staggerContainerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.13 },
  },
};

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** If true, renders as a stagger container — children should use <RevealChild> */
  stagger?: boolean;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  stagger = false,
}: ScrollRevealProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const reduced = useReducedMotion();
  const variants = stagger ? staggerContainerVariants : defaultVariants;

  if (!mounted) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={reduced ? undefined : variants}
      initial={reduced ? false : "hidden"}
      whileInView={reduced ? undefined : "show"}
      animate={reduced ? "show" : undefined}
      viewport={{ once: true, amount: 0.1 }}
      transition={!stagger && !reduced ? { delay } : undefined}
    >
      {children}
    </motion.div>
  );
}

export function RevealChild({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={defaultVariants}
    >
      {children}
    </motion.div>
  );
}
