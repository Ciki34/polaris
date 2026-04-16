"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

/* ─── Types ───────────────────────────────────────────────────────────────── */
type Category = "sve" | "bol" | "stit" | "spavanje" | "varenje" | "deca";

interface TextItem {
  id: string;
  type: "text";
  category: string;
  hook?: string;
  quote: string;
  author: string;
  location: string;
  profession?: string;
  verified: boolean;
  duration?: string;
}

export type TestimonialItem = TextItem;

interface FiltersDict {
  sve: string;
  bol: string;
  stit: string;
  spavanje: string;
  varenje: string;
  deca: string;
}

interface FilterableGridProps {
  items: TestimonialItem[];
  filters: FiltersDict;
}

/* ─── Category colours ────────────────────────────────────────────────────── */
const CATEGORY_COLORS: Record<string, string> = {
  bol:      "oklch(0.52 0.15 22)",
  stit:     "oklch(0.38 0.07 185)",
  spavanje: "oklch(0.52 0.13 265)",
  varenje:  "oklch(0.55 0.11 150)",
  deca:     "oklch(0.58 0.10 308)",
};

const CATEGORY_BG: Record<string, string> = {
  bol:      "oklch(0.52 0.15 22 / 0.10)",
  stit:     "oklch(0.38 0.07 185 / 0.10)",
  spavanje: "oklch(0.52 0.13 265 / 0.10)",
  varenje:  "oklch(0.55 0.11 150 / 0.10)",
  deca:     "oklch(0.58 0.10 308 / 0.10)",
};

const TRUNCATE_AT = 280;

/* ─── Stars ───────────────────────────────────────────────────────────────── */
function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} viewBox="0 0 12 12" fill="oklch(0.78 0.12 88)" className="w-3 h-3">
          <path d="M6 1l1.2 3.6H11L8.1 6.9l1.2 3.6L6 8.2 2.7 10.5l1.2-3.6L1 4.6h3.8z" />
        </svg>
      ))}
    </div>
  );
}

/* ─── Testimonial Card ────────────────────────────────────────────────────── */
function TextCard({
  item,
  categoryLabel,
}: {
  item: TextItem;
  categoryLabel: string;
}) {
  const [expanded, setExpanded] = useState(false);

  const color = CATEGORY_COLORS[item.category] ?? "oklch(0.52 0.040 185)";
  const bg    = CATEGORY_BG[item.category]     ?? "oklch(0.17 0.040 185 / 0.06)";
  const needsExpand = item.quote.length > TRUNCATE_AT;
  const displayText =
    !expanded && needsExpand
      ? item.quote.slice(0, TRUNCATE_AT).trimEnd() + "…"
      : item.quote;

  return (
    <motion.article
      layout
      className="flex flex-col rounded-2xl bg-card border border-border/50 p-7 hover:border-border hover:shadow-lg hover:shadow-foreground/5 transition-all duration-300"
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 280, damping: 24 }}
    >
      {/* Top row: category badge + stars */}
      <div className="flex items-center justify-between mb-5">
        <span
          className="text-[10px] tracking-widest uppercase font-medium px-3 py-1 rounded-full"
          style={{ background: bg, color }}
        >
          {categoryLabel}
        </span>
        {item.verified && <Stars />}
      </div>

      {/* Hook — short conclusion title */}
      {item.hook && (
        <h3 className="font-heading text-base md:text-[1.05rem] leading-snug text-foreground mb-4">
          {item.hook}
        </h3>
      )}

      {/* Decorative opening quote glyph */}
      <span
        className="font-heading text-4xl leading-none mb-1 select-none"
        style={{ color, opacity: 0.28 }}
        aria-hidden
      >
        &ldquo;
      </span>

      {/* Quote body */}
      <p className="text-sm text-muted-foreground font-light leading-relaxed flex-1 mb-2">
        {displayText}
      </p>

      {/* Read more / less toggle */}
      {needsExpand && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="text-xs font-medium tracking-wide mt-2 mb-5 self-start transition-opacity hover:opacity-70"
          style={{ color }}
        >
          {expanded ? "Prikaži manje ↑" : "Prikaži više ↓"}
        </button>
      )}

      {/* Author row */}
      <div className="flex items-center gap-3 pt-4 border-t border-border/40 mt-auto">
        {/* Avatar initial */}
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold text-white flex-shrink-0"
          style={{ background: color }}
        >
          {item.author.charAt(0)}
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium tracking-wide">{item.author}</p>
          <div className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5">
            {item.profession && (
              <>
                <span className="text-xs font-medium" style={{ color }}>
                  {item.profession}
                </span>
                <span className="text-xs text-muted-foreground/30" aria-hidden>·</span>
              </>
            )}
            <span className="text-xs text-muted-foreground font-light">
              {item.location}
            </span>
            {item.duration && (
              <>
                <span className="text-xs text-muted-foreground/30" aria-hidden>·</span>
                <span className="text-xs text-muted-foreground font-light">
                  {item.duration}
                </span>
              </>
            )}
          </div>
        </div>

        {item.verified && (
          <div className="ml-auto flex items-center gap-1 flex-shrink-0">
            <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 text-primary/50">
              <path
                d="M6 8l2 2 4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
        )}
      </div>
    </motion.article>
  );
}

/* ─── Filter Bar ──────────────────────────────────────────────────────────── */
function FilterBar({
  filters,
  active,
  onSelect,
  counts,
}: {
  filters: FiltersDict;
  active: Category;
  onSelect: (c: Category) => void;
  counts: Record<Category, number>;
}) {
  const options: { key: Category; label: string }[] = [
    { key: "sve",      label: filters.sve      },
    { key: "bol",      label: filters.bol      },
    { key: "stit",     label: filters.stit     },
    { key: "spavanje", label: filters.spavanje },
    { key: "varenje",  label: filters.varenje  },
    { key: "deca",     label: filters.deca     },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
      {options.map(({ key, label }) => {
        const isActive = key === active;
        const color = key !== "sve" ? CATEGORY_COLORS[key] : undefined;
        return (
          <button
            key={key}
            onClick={() => onSelect(key)}
            className={cn(
              "relative isolate flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-light tracking-wide transition-all duration-200",
              isActive
                ? "text-white shadow-md"
                : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
            style={
              isActive
                ? { background: key === "sve" ? "oklch(0.17 0.040 185)" : color }
                : undefined
            }
          >
            {label}
            <span
              className={cn(
                "text-[10px] tabular-nums rounded-full px-1.5 py-0.5 min-w-[20px] text-center",
                isActive ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"
              )}
            >
              {counts[key]}
            </span>
            {isActive && (
              <motion.div
                layoutId="filter-pill"
                className="absolute inset-0 rounded-full -z-10"
                style={{
                  background: key === "sve" ? "oklch(0.17 0.040 185)" : color,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}

/* ─── Main Export ─────────────────────────────────────────────────────────── */
export function FilterableGrid({ items, filters }: FilterableGridProps) {
  const [active, setActive] = useState<Category>("sve");

  const filtered =
    active === "sve" ? items : items.filter((i) => i.category === active);

  const counts: Record<Category, number> = {
    sve:      items.length,
    bol:      items.filter((i) => i.category === "bol").length,
    stit:     items.filter((i) => i.category === "stit").length,
    spavanje: items.filter((i) => i.category === "spavanje").length,
    varenje:  items.filter((i) => i.category === "varenje").length,
    deca:     items.filter((i) => i.category === "deca").length,
  };

  const labelLookup: Record<string, string> = {
    bol:      filters.bol,
    stit:     filters.stit,
    spavanje: filters.spavanje,
    varenje:  filters.varenje,
    deca:     filters.deca,
  };

  return (
    <div>
      <FilterBar
        filters={filters}
        active={active}
        onSelect={setActive}
        counts={counts}
      />

      <motion.div
        layout
        className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              className="break-inside-avoid"
            >
              <TextCard
                item={item}
                categoryLabel={labelLookup[item.category] ?? item.category}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <div className="py-20 text-center text-muted-foreground font-light">
          Nema svedočenja u ovoj kategoriji.
        </div>
      )}
    </div>
  );
}
