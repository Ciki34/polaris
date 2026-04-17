"use client";

import { useState, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { createOrder, type OrderItem } from "@/app/actions/create-order";

/* ─── Types ───────────────────────────────────────────────────────────────── */
interface CheckoutDict {
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
}

export interface CartItem {
  productId: string;
  name: string;
  quantity: number;
  unitPrice: number;
  priceLabel: string;
  currency: string;
}

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  shippingCost: number;
  currency: string;
  dict: CheckoutDict;
  lang: string;
}

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  address: string;
  postcode: string;
};

/* ─── Helpers ─────────────────────────────────────────────────────────────── */
function formatPrice(amount: number, currency: string): string {
  if (currency === "EUR") return `€${amount}`;
  return `${amount.toLocaleString("sr-RS")} RSD`;
}

function inputClass(hasError: boolean) {
  return cn(
    "w-full h-11 px-4 bg-background border rounded-xl text-sm font-light",
    "placeholder:text-muted-foreground/40 focus:outline-none focus:ring-1",
    "transition-all duration-150",
    hasError
      ? "border-destructive/60 focus:ring-destructive/40"
      : "border-border focus:ring-ring/50 hover:border-border/80"
  );
}

/* ─── Step Indicator ──────────────────────────────────────────────────────── */
function StepIndicator({
  steps,
  current,
}: {
  steps: string[];
  current: number;
}) {
  return (
    <div className="flex items-center gap-0 mb-8">
      {steps.map((label, i) => {
        const idx = i + 1;
        const done = idx < current;
        const active = idx === current;
        return (
          <div key={label} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={cn(
                  "w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-semibold transition-all duration-300",
                  active && "bg-primary text-primary-foreground scale-110 shadow-sm",
                  done && "bg-primary/20 text-primary",
                  !active && !done && "bg-muted text-muted-foreground"
                )}
              >
                {done ? (
                  <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
                    <path
                      d="M3 8l3.5 3.5L13 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                ) : (
                  idx
                )}
              </div>
              <span
                className={cn(
                  "text-[9px] tracking-widest uppercase font-light whitespace-nowrap",
                  active ? "text-foreground" : "text-muted-foreground/60"
                )}
              >
                {label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div
                className={cn(
                  "flex-1 h-px mx-2 mb-5 transition-colors duration-300",
                  done ? "bg-primary/30" : "bg-border"
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ─── Success Screen ──────────────────────────────────────────────────────── */
function SuccessScreen({
  dict,
  lang,
  onClose,
}: {
  dict: CheckoutDict["success"];
  lang: string;
  onClose: () => void;
}) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center py-8 text-center"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Animated checkmark */}
      <div className="relative mb-8">
        <motion.div
          className="w-20 h-20 rounded-full bg-primary/8 flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 16 }}
        >
          <svg viewBox="0 0 52 52" fill="none" className="w-10 h-10">
            <motion.circle
              cx="26"
              cy="26"
              r="24"
              stroke="oklch(0.17 0.040 185)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            />
            <motion.path
              d="M14 26l8.5 8.5 16-16"
              stroke="oklch(0.17 0.040 185)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.5, duration: 0.45, ease: "easeOut" }}
            />
          </svg>
        </motion.div>

        {/* Radiating rings */}
        {[1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full border border-primary/20"
            initial={{ scale: 1, opacity: 0.6 }}
            animate={{ scale: 1.8 + i * 0.4, opacity: 0 }}
            transition={{
              delay: 0.6 + i * 0.15,
              duration: 0.8,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      <h3 className="font-heading text-2xl md:text-3xl tracking-tight mb-3">
        {dict.title}
      </h3>
      <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-xs mb-8">
        {dict.body}
      </p>
      <Link
        href={`/${lang}`}
        onClick={onClose}
        className="text-sm font-light tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
      >
        {dict.cta} →
      </Link>
    </motion.div>
  );
}

/* ─── Field ───────────────────────────────────────────────────────────────── */
function Field({
  fieldKey,
  type = "text",
  autoComplete,
  form,
  errors,
  fields,
  placeholders,
  onChange,
}: {
  fieldKey: keyof FormState;
  type?: string;
  autoComplete?: string;
  form: FormState;
  errors: Partial<FormState>;
  fields: Record<string, string>;
  placeholders: Record<string, string>;
  onChange: (key: keyof FormState, value: string) => void;
}) {
  const err = errors[fieldKey];
  return (
    <div>
      <label className="block text-xs tracking-widest uppercase text-muted-foreground font-light mb-2">
        {fields[fieldKey]}
      </label>
      <input
        type={type}
        autoComplete={autoComplete}
        value={form[fieldKey]}
        onChange={(e) => onChange(fieldKey, e.target.value)}
        placeholder={placeholders[fieldKey]}
        className={inputClass(!!err)}
      />
      {err && (
        <p className="text-[11px] text-destructive mt-1.5 font-light">{err}</p>
      )}
    </div>
  );
}

/* ─── Main Component ──────────────────────────────────────────────────────── */
export function CheckoutModal({
  isOpen,
  onClose,
  cartItems,
  shippingCost,
  currency,
  dict,
  lang,
}: CheckoutModalProps) {
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState("");
  const [isPending, startTransition] = useTransition();

  const [form, setForm] = useState<FormState>({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    address: "",
    postcode: "",
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const itemsTotal = cartItems.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity,
    0
  );
  const grandTotal = itemsTotal + shippingCost;

  /* Validate per step */
  function validate(currentStep: number): boolean {
    const errs: Partial<FormState> = {};
    if (currentStep === 1) {
      if (!form.fullName.trim()) errs.fullName = dict.required;
      if (!form.email.trim() || !form.email.includes("@"))
        errs.email = dict.required;
      if (!form.phone.trim()) errs.phone = dict.required;
    }
    if (currentStep === 2) {
      if (!form.city.trim()) errs.city = dict.required;
      if (!form.address.trim()) errs.address = dict.required;
      if (!form.postcode.trim()) errs.postcode = dict.required;
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function handleNext() {
    if (validate(step)) setStep((s) => s + 1);
  }

  function handleBack() {
    setErrors({});
    setStep((s) => s - 1);
  }

  function handleField(key: keyof FormState, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function handleConfirm() {
    setServerError("");
    const orderItems: OrderItem[] = cartItems.map((item) => ({
      productId: item.productId,
      name: item.name,
      quantity: item.quantity,
      unitPrice: item.unitPrice,
      currency: item.currency,
    }));

    startTransition(async () => {
      const result = await createOrder({
        fullName: form.fullName,
        email: form.email,
        phone: form.phone,
        city: form.city,
        address: form.address,
        postcode: form.postcode,
        items: orderItems,
        totalPrice: grandTotal,
        currency,
      });
      if (result.success) {
        setIsSuccess(true);
      } else {
        setServerError(dict.error);
      }
    });
  }

  function handleClose() {
    onClose();
    // Reset after exit animation
    setTimeout(() => {
      setStep(1);
      setIsSuccess(false);
      setServerError("");
      setErrors({});
    }, 300);
  }

  const fieldProps = { form, errors, fields: dict.fields, placeholders: dict.placeholders, onChange: handleField };

  const stepContent = {
    1: (
      <div className="flex flex-col gap-5">
        <Field fieldKey="fullName" autoComplete="name" {...fieldProps} />
        <Field fieldKey="email" type="email" autoComplete="email" {...fieldProps} />
        <Field fieldKey="phone" type="tel" autoComplete="tel" {...fieldProps} />
      </div>
    ),
    2: (
      <div className="flex flex-col gap-5">
        <Field fieldKey="city" autoComplete="address-level2" {...fieldProps} />
        <Field fieldKey="address" autoComplete="street-address" {...fieldProps} />
        <Field fieldKey="postcode" autoComplete="postal-code" {...fieldProps} />
      </div>
    ),
    3: (
      <div className="flex flex-col gap-4">
        {/* Items */}
        <div className="rounded-xl border border-border/50 bg-muted/30 divide-y divide-border/40 overflow-hidden">
          {cartItems.map((item) => (
            <div
              key={item.productId}
              className="flex items-center justify-between px-5 py-3.5"
            >
              <div>
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-muted-foreground font-light mt-0.5">
                  {item.quantity} × {item.priceLabel}
                </p>
              </div>
              <p className="text-sm font-medium tabular-nums">
                {formatPrice(item.unitPrice * item.quantity, currency)}
              </p>
            </div>
          ))}
        </div>

        {/* Totals */}
        <div className="flex flex-col gap-2 pt-1">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground font-light">{dict.subtotal}</span>
            <span className="tabular-nums">{formatPrice(itemsTotal, currency)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground font-light">{dict.shipping}</span>
            <span className="tabular-nums">{formatPrice(shippingCost, currency)}</span>
          </div>
          <div className="flex justify-between text-sm font-semibold pt-2 border-t border-border/50">
            <span>{dict.total}</span>
            <span className="tabular-nums">{formatPrice(grandTotal, currency)}</span>
          </div>
        </div>

        {/* COD note */}
        <div className="flex items-center gap-2 bg-primary/5 rounded-xl px-4 py-3">
          <svg
            className="w-4 h-4 text-primary/60 flex-shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <rect x="2" y="5" width="20" height="14" rx="2" />
            <path d="M2 10h20" />
          </svg>
          <p className="text-xs text-muted-foreground font-light">{dict.codNote}</p>
        </div>

        {/* Server error */}
        {serverError && (
          <p className="text-xs text-destructive font-light">{serverError}</p>
        )}
      </div>
    ),
  };

  const stepTitles = [dict.step1Title, dict.step2Title, dict.step3Title];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-foreground/12 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-md bg-background rounded-3xl shadow-2xl shadow-foreground/10 pointer-events-auto overflow-hidden flex flex-col max-h-[90svh]"
              initial={{ scale: 0.93, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.93, y: 16, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-7 pt-7 pb-1 flex-shrink-0">
                <h2 className="font-heading text-xl tracking-tight">
                  {isSuccess ? dict.success.title : dict.title}
                </h2>
                <button
                  onClick={handleClose}
                  className="w-8 h-8 flex items-center justify-center rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  aria-label="Zatvori"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                    <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto px-7 py-5">
                {isSuccess ? (
                  <SuccessScreen
                    dict={dict.success}
                    lang={lang}
                    onClose={handleClose}
                  />
                ) : (
                  <>
                    <StepIndicator steps={dict.steps} current={step} />

                    {/* Step title */}
                    <p className="text-xs tracking-widest uppercase text-muted-foreground font-light mb-5">
                      {stepTitles[step - 1]}
                    </p>

                    {/* Step content */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={step}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      >
                        {stepContent[step as 1 | 2 | 3]}
                      </motion.div>
                    </AnimatePresence>
                  </>
                )}
              </div>

              {/* Footer — navigation */}
              {!isSuccess && (
                <div className="flex items-center gap-3 px-7 pb-7 pt-4 flex-shrink-0 border-t border-border/40">
                  {step > 1 && (
                    <button
                      onClick={handleBack}
                      className="flex-1 h-11 rounded-full border border-border text-sm font-light tracking-widest uppercase hover:bg-muted transition-colors"
                    >
                      {dict.back}
                    </button>
                  )}
                  {step < 3 ? (
                    <button
                      onClick={handleNext}
                      className="flex-[2] h-11 rounded-full bg-primary text-primary-foreground text-sm font-medium tracking-widest uppercase hover:bg-primary/90 transition-colors"
                    >
                      {dict.next}
                    </button>
                  ) : (
                    <button
                      onClick={handleConfirm}
                      disabled={isPending}
                      className="flex-[2] h-11 rounded-full bg-primary text-primary-foreground text-sm font-medium tracking-widest uppercase hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed transition-all"
                    >
                      {isPending ? dict.processing : dict.confirm}
                    </button>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
