import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[100svh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Subtle radial glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 40%, oklch(0.88 0.065 85 / 0.18) 0%, transparent 70%)",
          }}
        />

        <Badge
          variant="secondary"
          className="mb-8 rounded-full px-5 py-1.5 text-xs tracking-widest uppercase font-normal border border-border/80"
        >
          New Collection — Spring 2025
        </Badge>

        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl tracking-tight text-balance max-w-4xl leading-[1.08] mb-8">
          Find Your{" "}
          <span className="italic polaris-gold-text">North Star</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-xl mb-12 text-balance">
          Polaris is a premium wellness brand designed for those who seek
          clarity, stillness, and intentional living in a distracted world.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/products"
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-full px-10 h-12 text-sm tracking-widest uppercase font-medium"
            )}
          >
            Explore Collection
          </Link>
          <Link
            href="/about"
            className={cn(
              buttonVariants({ variant: "ghost", size: "lg" }),
              "rounded-full px-10 h-12 text-sm tracking-widest uppercase font-light text-muted-foreground hover:text-foreground"
            )}
          >
            Our Story
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs tracking-widest uppercase font-light">Scroll</span>
          <div className="w-px h-12 bg-foreground/30" />
        </div>
      </section>

      {/* ── Marquee / Feature strip ───────────────────────────────────────── */}
      <Separator />
      <section className="py-6 overflow-hidden bg-secondary/30">
        <div className="flex items-center gap-16 px-10">
          {["Clarity", "Balance", "Intention", "Ritual", "Stillness", "Purpose", "Renewal", "Presence"].map(
            (word) => (
              <span
                key={word}
                className="text-xs tracking-[0.3em] uppercase text-muted-foreground whitespace-nowrap font-light"
              >
                {word}
              </span>
            )
          )}
        </div>
      </section>
      <Separator />

      {/* ── Values / Three pillars ────────────────────────────────────────── */}
      <section className="section-padding container-tight">
        <div className="text-center mb-20">
          <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4 font-light">
            The Polaris Way
          </p>
          <h2 className="font-heading text-4xl md:text-5xl tracking-tight text-balance">
            Rooted in intention,<br />
            <span className="italic">guided by nature</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {[
            {
              number: "01",
              title: "Formulated with precision",
              body: "Every product is crafted with the most bioavailable, ethically sourced ingredients — nothing unnecessary, nothing missing.",
            },
            {
              number: "02",
              title: "Rituals that endure",
              body: "We design for the long arc of wellness, not quick fixes. Our routines are built to become a natural part of your day.",
            },
            {
              number: "03",
              title: "Transparent always",
              body: "Full ingredient disclosure, third-party testing, and honest communication. We believe trust is the foundation of wellbeing.",
            },
          ].map(({ number, title, body }) => (
            <article key={number} className="group">
              <span className="font-mono text-xs text-muted-foreground/50 tracking-widest block mb-6">
                {number}
              </span>
              <Separator className="mb-6 group-hover:bg-accent transition-colors duration-300" />
              <h3 className="font-heading text-2xl mb-4 tracking-tight">{title}</h3>
              <p className="text-muted-foreground font-light leading-relaxed text-sm">
                {body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────────────── */}
      <section className="mx-6 md:mx-10 lg:mx-16 mb-24 rounded-2xl polaris-gradient overflow-hidden">
        <div className="px-10 py-20 md:py-28 text-center">
          <h2 className="font-heading text-4xl md:text-6xl text-white tracking-tight mb-6 text-balance">
            Begin your journey<br />
            <span className="italic opacity-80">toward clarity</span>
          </h2>
          <p className="text-white/60 font-light mb-10 max-w-md mx-auto leading-relaxed">
            Join thousands who have found their north star with Polaris.
          </p>
          <Link
            href="/products"
            className={cn(
              buttonVariants({ variant: "secondary", size: "lg" }),
              "rounded-full px-12 h-12 text-sm tracking-widest uppercase font-medium"
            )}
          >
            Shop Now
          </Link>
        </div>
      </section>
    </>
  );
}
