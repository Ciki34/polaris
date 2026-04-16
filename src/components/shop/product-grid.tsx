"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CheckoutModal, type CartItem } from "./checkout-modal";
import { ScrollReveal, RevealChild } from "@/components/home/scroll-reveal";

/* ─── Types ───────────────────────────────────────────────────────────────── */
interface Product {
  id: string;
  name: string;
  badge: string;
  price: number;
  priceLabel: string;
  description: string;
  features: string[];
}

interface ShopDict {
  eyebrow: string;
  title: string;
  titleItalic: string;
  subtitle: string;
  currency: string;
  currencySymbol: string;
  shippingCost: number;
  products: Product[];
  addToCart: string;
  qty: string;
  orderButton: string;
  emptyCart: string;
  checkout: {
    title: string;
    steps: string[];
    step1Title: string;
    step2Title: string;
    step3Title: string;
    fields: Record<string, string>;
    placeholders: Record<string, string>;
    required: string;
    subtotal: string;
    shipping: string;
    total: string;
    codNote: string;
    back: string;
    next: string;
    confirm: string;
    processing: string;
    success: { title: string; body: string; cta: string };
    error: string;
  };
}

/* ─── Helpers ─────────────────────────────────────────────────────────────── */
function formatPrice(amount: number, currency: string): string {
  if (currency === "EUR") return `€${amount}`;
  return `${amount.toLocaleString("sr-RS")} RSD`;
}

/* ─── Quantity Selector ───────────────────────────────────────────────────── */
function QtySelector({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="flex items-center gap-0 border border-border rounded-full overflow-hidden h-9">
      <button
        onClick={() => onChange(Math.max(0, value - 1))}
        className="w-9 h-9 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
        aria-label="Smanji"
      >
        <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
          <path d="M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
      <span className="w-8 text-center text-sm font-medium tabular-nums select-none">
        {value}
      </span>
      <button
        onClick={() => onChange(value + 1)}
        className="w-9 h-9 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
        aria-label="Povećaj"
      >
        <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
          <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}

/* ─── Product Card ────────────────────────────────────────────────────────── */
function ProductCard({
  product,
  qty,
  onQtyChange,
  currency,
  addToCart,
  isFeatured,
}: {
  product: Product;
  qty: number;
  onQtyChange: (v: number) => void;
  currency: string;
  addToCart: string;
  isFeatured: boolean;
}) {
  return (
    <motion.article
      className={cn(
        "relative flex flex-col rounded-3xl border overflow-hidden transition-all duration-300",
        isFeatured
          ? "border-primary/20 shadow-lg shadow-primary/8"
          : "border-border/50 hover:border-border hover:shadow-md hover:shadow-foreground/4"
      )}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      {/* Top gradient band */}
      <div
        className="h-1 w-full"
        style={{
          background: isFeatured
            ? "linear-gradient(90deg, oklch(0.17 0.040 185), oklch(0.35 0.055 185))"
            : "linear-gradient(90deg, oklch(0.82 0.052 33 / 0.5), oklch(0.82 0.052 33 / 0.2))",
        }}
      />

      <div className="flex flex-col flex-1 p-8">
        {/* Badge + name */}
        <div className="flex items-start justify-between mb-5">
          <div>
            <span
              className={cn(
                "inline-block text-[10px] tracking-widest uppercase font-medium px-3 py-1 rounded-full mb-3",
                isFeatured
                  ? "bg-primary text-primary-foreground"
                  : "bg-accent/30 text-foreground/70"
              )}
            >
              {product.badge}
            </span>
            <h2 className="font-heading text-2xl md:text-3xl tracking-tight">
              {product.name}
            </h2>
          </div>
        </div>

        {/* Price */}
        <div className="mb-6">
          <p
            className="font-heading text-4xl tracking-tight"
            style={isFeatured ? {} : { opacity: 0.85 }}
          >
            {product.priceLabel}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
          {product.description}
        </p>

        {/* Features */}
        <ul className="flex flex-col gap-2.5 mb-8">
          {product.features.map((feat) => (
            <li key={feat} className="flex items-start gap-2.5">
              <svg
                viewBox="0 0 16 16"
                fill="none"
                className="w-4 h-4 flex-shrink-0 mt-0.5"
                style={{ color: isFeatured ? "oklch(0.17 0.040 185)" : "oklch(0.60 0.08 150)" }}
              >
                <path
                  d="M3 8l3 3 7-7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm font-light text-foreground/80">{feat}</span>
            </li>
          ))}
        </ul>

        {/* Quantity + add */}
        <div className="mt-auto flex items-center gap-3">
          <QtySelector value={qty} onChange={onQtyChange} />
          <motion.button
            onClick={() => onQtyChange(Math.max(1, qty === 0 ? 1 : qty))}
            className={cn(
              "flex-1 h-9 rounded-full text-xs font-medium tracking-widest uppercase transition-all",
              qty > 0
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
            )}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            {qty > 0
              ? formatPrice(product.price * qty, currency)
              : addToCart}
          </motion.button>
        </div>
      </div>

      {/* "Selected" glow overlay */}
      {qty > 0 && (
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            boxShadow: isFeatured
              ? "inset 0 0 0 1.5px oklch(0.17 0.040 185 / 0.3)"
              : "inset 0 0 0 1.5px oklch(0.82 0.052 33 / 0.4)",
          }}
        />
      )}
    </motion.article>
  );
}

/* ─── Cart Summary Bar ────────────────────────────────────────────────────── */
function CartBar({
  cartItems,
  shippingCost,
  currency,
  orderButton,
  emptyCart,
  onOrder,
}: {
  cartItems: CartItem[];
  shippingCost: number;
  currency: string;
  orderButton: string;
  emptyCart: string;
  onOrder: () => void;
}) {
  const itemsTotal = cartItems.reduce((s, i) => s + i.unitPrice * i.quantity, 0);
  const grandTotal = itemsTotal + shippingCost;
  const hasItems = cartItems.some((i) => i.quantity > 0);

  return (
    <motion.div
      className="sticky bottom-6 z-30 mt-10"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      <div
        className={cn(
          "max-w-xl mx-auto rounded-2xl border px-6 py-4 flex items-center justify-between gap-4 transition-all duration-300",
          hasItems
            ? "bg-primary text-primary-foreground border-primary shadow-xl shadow-primary/25"
            : "bg-background/80 backdrop-blur-md border-border/60 text-muted-foreground"
        )}
      >
        <div>
          {hasItems ? (
            <>
              <p className="text-xs font-light tracking-widest uppercase opacity-70 mb-0.5">
                {cartItems.filter(i => i.quantity > 0).map(i => `${i.quantity}× ${i.name.split(" ").pop()}`).join(" + ")}
              </p>
              <p className="font-heading text-xl tracking-tight">
                {formatPrice(grandTotal, currency)}
              </p>
            </>
          ) : (
            <p className="text-xs font-light">{emptyCart}</p>
          )}
        </div>

        <motion.button
          onClick={onOrder}
          disabled={!hasItems}
          className={cn(
            "rounded-full px-8 h-10 text-xs font-medium tracking-widest uppercase transition-all flex-shrink-0",
            hasItems
              ? "bg-primary-foreground text-primary hover:opacity-90"
              : "bg-muted text-muted-foreground cursor-not-allowed"
          )}
          whileHover={hasItems ? { scale: 1.03 } : undefined}
          whileTap={hasItems ? { scale: 0.97 } : undefined}
        >
          {orderButton} →
        </motion.button>
      </div>
    </motion.div>
  );
}

/* ─── Main Export ─────────────────────────────────────────────────────────── */
export function ProductGrid({ dict, lang }: { dict: ShopDict; lang: string }) {
  const [quantities, setQuantities] = useState<Record<string, number>>(
    Object.fromEntries(dict.products.map((p) => [p.id, 0]))
  );
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  function setQty(id: string, v: number) {
    setQuantities((prev) => ({ ...prev, [id]: v }));
  }

  const cartItems: CartItem[] = dict.products
    .map((p) => ({
      productId: p.id,
      name: p.name,
      quantity: quantities[p.id] ?? 0,
      unitPrice: p.price,
      priceLabel: p.priceLabel,
      currency: dict.currency,
    }))
    .filter((item) => item.quantity > 0);

  return (
    <div>
      {/* Product grid */}
      <ScrollReveal stagger className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {dict.products.map((product, i) => (
          <RevealChild key={product.id}>
            <ProductCard
              product={product}
              qty={quantities[product.id] ?? 0}
              onQtyChange={(v) => setQty(product.id, v)}
              currency={dict.currency}
              addToCart={dict.addToCart}
              isFeatured={i === 1} /* Sport = featured */
            />
          </RevealChild>
        ))}
      </ScrollReveal>

      {/* Sticky cart bar */}
      <CartBar
        cartItems={cartItems}
        shippingCost={dict.shippingCost}
        currency={dict.currency}
        orderButton={dict.orderButton}
        emptyCart={dict.emptyCart}
        onOrder={() => setCheckoutOpen(true)}
      />

      {/* Checkout modal */}
      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        cartItems={cartItems}
        shippingCost={dict.shippingCost}
        currency={dict.currency}
        dict={dict.checkout}
        lang={lang}
      />
    </div>
  );
}
