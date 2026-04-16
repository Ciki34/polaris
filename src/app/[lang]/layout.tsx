import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { hasLocale, locales, type Locale } from "./dictionaries";

/* ─── Fonts ──────────────────────────────────────────────────────────────── */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/* ─── Static Params ──────────────────────────────────────────────────────── */
export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

/* ─── Metadata ───────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: {
    default: "Polaris — Find Your North",
    template: "%s | Polaris",
  },
  description:
    "Polaris guides you toward clarity, balance, and intentional living. Premium wellness for the modern mind.",
  keywords: ["wellness", "mindfulness", "premium", "polaris", "balance"],
  authors: [{ name: "Polaris" }],
  creator: "Polaris",
  openGraph: {
    type: "website",
    siteName: "Polaris",
    title: "Polaris — Find Your North",
    description:
      "Polaris guides you toward clarity, balance, and intentional living.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Polaris — Find Your North",
    description: "Premium wellness for the modern mind.",
    creator: "@polariswellness",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FDF8F6" },
    { media: "(prefers-color-scheme: dark)", color: "#062C2B" },
  ],
  width: "device-width",
  initialScale: 1,
};

/* ─── Layout ─────────────────────────────────────────────────────────────── */
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const locale = lang as Locale;

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased">
        <Navbar lang={locale} />
        <main className="flex-1">{children}</main>
        <Footer lang={locale} />
      </body>
    </html>
  );
}
