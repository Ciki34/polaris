"use client";

import { useState, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { createContact } from "@/app/actions/create-contact";
import { cn } from "@/lib/utils";

interface ContactFormDict {
  eyebrow: string;
  title: string;
  subtitle: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  submitLabel: string;
  submittingLabel: string;
  successTitle: string;
  successBody: string;
  errorLabel: string;
}

export function ContactForm({ dict }: { dict: ContactFormDict }) {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [fields, setFields] = useState({ fullName: "", email: "", message: "" });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    startTransition(async () => {
      const result = await createContact(fields);
      setStatus(result.success ? "success" : "error");
    });
  }

  return (
    <div className="w-full">
      <p className="text-xs tracking-[0.22em] uppercase text-muted-foreground font-light mb-4">
        {dict.eyebrow}
      </p>
      <h2 className="font-heading text-3xl md:text-4xl tracking-tight leading-tight mb-2">
        {dict.title}
      </h2>
      <p className="text-sm text-muted-foreground font-light mb-8">
        {dict.subtitle}
      </p>

      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center gap-4 py-16"
          >
            {/* Animated checkmark */}
            <div className="relative">
              <motion.div
                className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <CheckCircle2 className="w-8 h-8 text-emerald-600" />
              </motion.div>
              {[1, 2].map((ring) => (
                <motion.div
                  key={ring}
                  className="absolute inset-0 rounded-full border border-emerald-500/20"
                  initial={{ scale: 1, opacity: 0.6 }}
                  animate={{ scale: 1 + ring * 0.5, opacity: 0 }}
                  transition={{ duration: 1.2, delay: ring * 0.2, repeat: Infinity }}
                />
              ))}
            </div>
            <p className="font-heading text-xl tracking-tight">{dict.successTitle}</p>
            <p className="text-sm text-muted-foreground font-light max-w-xs">{dict.successBody}</p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <input
                name="fullName"
                type="text"
                required
                value={fields.fullName}
                onChange={handleChange}
                placeholder={dict.namePlaceholder}
                className={cn(
                  "w-full rounded-xl border border-border/60 bg-card px-4 py-3 text-sm font-light",
                  "placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-foreground/20",
                  "transition-colors duration-200"
                )}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <input
                name="email"
                type="email"
                required
                value={fields.email}
                onChange={handleChange}
                placeholder={dict.emailPlaceholder}
                className={cn(
                  "w-full rounded-xl border border-border/60 bg-card px-4 py-3 text-sm font-light",
                  "placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-foreground/20",
                  "transition-colors duration-200"
                )}
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <textarea
                name="message"
                required
                rows={5}
                value={fields.message}
                onChange={handleChange}
                placeholder={dict.messagePlaceholder}
                className={cn(
                  "w-full rounded-xl border border-border/60 bg-card px-4 py-3 text-sm font-light resize-none",
                  "placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-foreground/20",
                  "transition-colors duration-200"
                )}
              />
            </div>

            {/* Error */}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-xs text-red-500"
              >
                <AlertCircle className="w-3.5 h-3.5" />
                {dict.errorLabel}
              </motion.div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isPending}
              className={cn(
                "mt-2 w-full flex items-center justify-center gap-2.5 rounded-full h-12 text-sm tracking-widest uppercase font-medium",
                "bg-foreground text-background shadow-md transition-all duration-200",
                "hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
              )}
            >
              {isPending ? (
                <>
                  <motion.div
                    className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
                  />
                  {dict.submittingLabel}
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  {dict.submitLabel}
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
