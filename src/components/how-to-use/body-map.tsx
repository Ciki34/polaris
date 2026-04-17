"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const CHAKRA_IMAGES: Record<number, string> = {
  1: "/upotreba/chakra-1.jpg",
  2: "/upotreba/chakra-2.jpg",
  3: "/upotreba/chakra-3.jpg",
  4: "/upotreba/chakra-4.jpg",
  5: "/upotreba/chakra-5.jpg",
  6: "/upotreba/chakra-6.jpg",
  7: "/upotreba/chakra-7.jpg",
};

/* ─── Types ───────────────────────────────────────────────────────────────── */
export interface ChakraPoint {
  id: number;
  name: string;
  title: string;
  benefits: string;
  duration: string;
  position: string;
  warning: boolean;
  indications?: string[];
  note?: string;
}

interface MapSectionDict {
  eyebrow: string;
  title: string;
  subtitle: string;
  mobileHint: string;
  durationLabel: string;
  positionLabel: string;
  indicationsLabel?: string;
  noteLabel?: string;
  warningNote: string;
  localDurationNote?: string;
}

interface BodyMapProps {
  points: ChakraPoint[];
  mapSection: MapSectionDict;
}

/* ─── Chakra metadata ─────────────────────────────────────────────────────── */
const CHAKRA_META = [
  { id: 1, cx: 100, cy: 318, color: "oklch(0.52 0.15 22)",  bgColor: "oklch(0.52 0.15 22 / 0.10)"  },
  { id: 2, cx: 100, cy: 278, color: "oklch(0.66 0.14 48)",  bgColor: "oklch(0.66 0.14 48 / 0.10)"  },
  { id: 3, cx: 100, cy: 222, color: "oklch(0.78 0.12 88)",  bgColor: "oklch(0.78 0.12 88 / 0.10)"  },
  { id: 4, cx: 100, cy: 172, color: "oklch(0.58 0.11 150)", bgColor: "oklch(0.58 0.11 150 / 0.10)" },
  { id: 5, cx: 100, cy: 104, color: "oklch(0.58 0.11 218)", bgColor: "oklch(0.58 0.11 218 / 0.10)" },
  { id: 6, cx: 100, cy:  55, color: "oklch(0.52 0.13 265)", bgColor: "oklch(0.52 0.13 265 / 0.10)" },
  { id: 7, cx: 100, cy:  22, color: "oklch(0.62 0.10 308)", bgColor: "oklch(0.62 0.10 308 / 0.10)" },
];

/* ─── Body Silhouette SVG ─────────────────────────────────────────────────── */
function BodySilhouette({
  activeId,
  onSelect,
}: {
  activeId: number;
  onSelect: (id: number) => void;
}) {
  return (
    <svg viewBox="0 0 200 500" className="w-full h-full" aria-label="Mapa tela sa čakrama">
      <defs>
        <linearGradient id="bodyGrad" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="oklch(0.96 0.008 62)" />
          <stop offset="100%" stopColor="oklch(0.90 0.012 185)" />
        </linearGradient>
        <filter id="bodyShadow" x="-20%" y="-5%" width="140%" height="115%">
          <feDropShadow dx="0" dy="4" stdDeviation="6"
            floodColor="oklch(0.17 0.040 185)" floodOpacity="0.10" />
        </filter>
        <filter id="dotGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Body silhouette */}
      <g fill="url(#bodyGrad)" filter="url(#bodyShadow)" stroke="none">
        <circle cx="100" cy="52" r="33" />
        <rect x="88" y="81" width="24" height="32" rx="10" />
        <ellipse cx="100" cy="122" rx="62" ry="18" />
        <ellipse cx="100" cy="218" rx="50" ry="94" />
        <ellipse cx="100" cy="304" rx="60" ry="28" />
        <rect x="48" y="298" width="36" height="190" rx="16" />
        <rect x="116" y="298" width="36" height="190" rx="16" />
        <ellipse cx="66" cy="487" rx="20" ry="10" />
        <ellipse cx="134" cy="487" rx="20" ry="10" />
        <rect x="32" y="120" width="22" height="142" rx="11" transform="rotate(-10 43 120)" />
        <rect x="146" y="120" width="22" height="142" rx="11" transform="rotate(10 157 120)" />
      </g>

      {/* Body outline */}
      <g fill="none" stroke="oklch(0.17 0.040 185 / 0.08)" strokeWidth="0.8">
        <circle cx="100" cy="52" r="33" />
        <ellipse cx="100" cy="122" rx="62" ry="18" />
        <ellipse cx="100" cy="218" rx="50" ry="94" />
        <ellipse cx="100" cy="304" rx="60" ry="28" />
      </g>

      {/* Chakra points */}
      {CHAKRA_META.map((meta) => {
        const isActive = meta.id === activeId;
        return (
          <g key={meta.id} onClick={() => onSelect(meta.id)}
            style={{ cursor: "pointer" }} role="button" aria-label={`Čakra ${meta.id}`}>
            {isActive && (
              <motion.circle cx={meta.cx} cy={meta.cy} r={18}
                fill={meta.color} fillOpacity={0} stroke={meta.color} strokeWidth={1.5}
                initial={{ r: 10, opacity: 0.6 }}
                animate={{ r: [10, 20, 10], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              />
            )}
            {isActive && (
              <circle cx={meta.cx} cy={meta.cy} r={11}
                fill={meta.color} fillOpacity={0.22} />
            )}
            <motion.circle cx={meta.cx} cy={meta.cy}
              fill={isActive ? meta.color : "white"}
              stroke={meta.color} strokeWidth={isActive ? 0 : 1.8}
              filter={isActive ? "url(#dotGlow)" : undefined}
              animate={{ r: isActive ? 8 : 6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            />
            <text x={meta.cx} y={meta.cy + 0.6} textAnchor="middle"
              dominantBaseline="middle" fontSize="5.5" fontWeight="600"
              fontFamily="Inter, system-ui, sans-serif"
              fill={isActive ? "white" : meta.color}
              style={{ pointerEvents: "none", userSelect: "none" }}>
              {meta.id}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* ─── Detail Panel ────────────────────────────────────────────────────────── */
function ChakraPanel({
  point,
  mapSection,
}: {
  point: ChakraPoint;
  mapSection: MapSectionDict;
}) {
  const meta = CHAKRA_META.find((m) => m.id === point.id)!;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={point.id}
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -18 }}
        transition={{ duration: 0.42, ease: [0.25, 0.1, 0.25, 1] }}
        className="flex flex-col h-full"
      >
        {/* Colored top accent */}
        <div className="h-0.5 w-16 rounded-full mb-8" style={{ background: meta.color }} />

        {/* Point number + name */}
        <div className="flex items-center gap-3 mb-5">
          <span
            className="flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold text-white flex-shrink-0"
            style={{ background: meta.color }}
          >
            {point.id}
          </span>
          <p className="text-xs tracking-[0.18em] uppercase text-muted-foreground font-light">
            {point.name}
          </p>
        </div>

        {/* Title */}
        <h3 className="font-heading text-2xl md:text-3xl tracking-tight leading-snug mb-5 text-balance">
          {point.title}
        </h3>

        {/* Benefits */}
        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
          {point.benefits}
        </p>

        {/* Indications */}
        {point.indications && point.indications.length > 0 && (
          <div className="mb-6">
            {mapSection.indicationsLabel && (
              <p className="text-[10px] tracking-widest uppercase text-muted-foreground font-light mb-3">
                {mapSection.indicationsLabel}
              </p>
            )}
            <div className="flex flex-wrap gap-1.5">
              {point.indications.map((ind) => (
                <span
                  key={ind}
                  className="text-xs font-light px-3 py-1 rounded-full border"
                  style={{
                    borderColor: `${meta.color}50`,
                    color: meta.color,
                    background: meta.bgColor,
                  }}
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Special note (e.g. point 5 thyroid) */}
        {point.note && (
          <div
            className="flex items-start gap-3 rounded-xl px-4 py-3 mb-6"
            style={{
              background: meta.bgColor,
              borderLeft: `2px solid ${meta.color}`,
            }}
          >
            {mapSection.noteLabel && (
              <span
                className="text-[10px] tracking-widest uppercase font-semibold mt-0.5 flex-shrink-0"
                style={{ color: meta.color }}
              >
                {mapSection.noteLabel}
              </span>
            )}
            <p className="text-xs font-light leading-relaxed text-foreground/80 italic">
              {point.note}
            </p>
          </div>
        )}

        {/* Duration + position meta */}
        <div className="flex flex-col gap-3 mb-6">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: meta.color }} />
            <div>
              <p className="text-[10px] tracking-widest uppercase text-muted-foreground font-light mb-0.5">
                {mapSection.durationLabel}
              </p>
              <p className={cn("text-sm font-medium", point.warning && "text-amber-600 dark:text-amber-400")}>
                {point.duration}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: meta.color }} />
            <div>
              <p className="text-[10px] tracking-widest uppercase text-muted-foreground font-light mb-0.5">
                {mapSection.positionLabel}
              </p>
              <p className="text-sm font-light text-foreground">{point.position}</p>
            </div>
          </div>
        </div>

        {/* Warning badge */}
        {point.warning && (
          <div className="flex items-center gap-2 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 rounded-xl px-4 py-3 mb-6">
            <svg className="w-4 h-4 text-amber-600 flex-shrink-0" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <p className="text-xs text-amber-700 dark:text-amber-300 font-light">
              {mapSection.warningNote}
            </p>
          </div>
        )}

        {/* Local duration note */}
        {mapSection.localDurationNote && (
          <p className="text-[10px] tracking-wide text-muted-foreground/60 font-light border-t border-border/40 pt-4 mb-8">
            {mapSection.localDurationNote}
          </p>
        )}

        {/* Chakra photo blob */}
        <div className="mt-auto flex justify-center pt-2">
          <div
            className="relative w-full max-w-[340px] aspect-[4/3] overflow-hidden"
            style={{
              borderRadius: "58% 42% 48% 52% / 44% 56% 44% 56%",
              boxShadow: `0 8px 32px -8px ${meta.color}40`,
            }}
          >
            <Image
              src={CHAKRA_IMAGES[point.id]}
              alt={point.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 340px"
            />
            {/* Subtle color overlay */}
            <div
              className="absolute inset-0"
              style={{ background: `${meta.color}12` }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ─── Mobile point selector ───────────────────────────────────────────────── */
function PointSelector({
  activeId,
  onSelect,
  points,
}: {
  activeId: number;
  onSelect: (id: number) => void;
  points: ChakraPoint[];
}) {
  return (
    <div className="flex items-center justify-center gap-1.5 flex-wrap lg:hidden mt-8">
      {points.map((p) => {
        const meta = CHAKRA_META.find((m) => m.id === p.id)!;
        const isActive = p.id === activeId;
        return (
          <button
            key={p.id}
            onClick={() => onSelect(p.id)}
            aria-label={p.name}
            className={cn(
              "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-light transition-all duration-200",
              isActive
                ? "text-white shadow-sm"
                : "bg-muted/50 text-muted-foreground hover:bg-muted"
            )}
            style={isActive ? { background: meta.color } : undefined}
          >
            <span className="font-medium">{p.id}</span>
            <span className="hidden sm:inline truncate max-w-[80px]">
              {p.name.split(" / ")[0]}
            </span>
          </button>
        );
      })}
    </div>
  );
}

/* ─── Main export ─────────────────────────────────────────────────────────── */
export function BodyMap({ points, mapSection }: BodyMapProps) {
  const [activeId, setActiveId] = useState<number>(1);
  const activePoint = points.find((p) => p.id === activeId)!;

  return (
    <div className="w-full">
      {/* Section header */}
      <div className="text-center mb-14">
        <p className="text-xs tracking-[0.22em] uppercase text-muted-foreground font-light mb-4">
          {mapSection.eyebrow}
        </p>
        <h2 className="font-heading text-3xl md:text-4xl tracking-tight mb-4">
          {mapSection.title}
        </h2>
        <p className="text-sm text-muted-foreground font-light max-w-md mx-auto leading-relaxed">
          {mapSection.subtitle}
        </p>
      </div>

      {/* Interactive layout */}
      <div className="grid lg:grid-cols-[280px_1fr] xl:grid-cols-[320px_1fr] gap-10 lg:gap-16 items-start">

        {/* Left — SVG body */}
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-[220px] sm:max-w-[260px] lg:max-w-none mx-auto">
            <BodySilhouette activeId={activeId} onSelect={setActiveId} />
          </div>
          <p className="hidden lg:block text-center text-[10px] text-muted-foreground font-light tracking-widest uppercase mt-5">
            {mapSection.mobileHint}
          </p>
        </div>

        {/* Right — Detail panel */}
        <div
          className="rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm p-8 md:p-10 min-h-[580px] flex flex-col"
          style={{ boxShadow: "0 4px 32px -8px oklch(0.17 0.040 185 / 0.06)" }}
        >
          <ChakraPanel point={activePoint} mapSection={mapSection} />
        </div>
      </div>

      {/* Mobile selector */}
      <PointSelector activeId={activeId} onSelect={setActiveId} points={points} />
    </div>
  );
}
