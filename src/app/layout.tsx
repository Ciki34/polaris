import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

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
    locale: "en_US",
    url: "https://polaris.com",
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
    { media: "(prefers-color-scheme: light)", color: "#faf9f7" },
    { media: "(prefers-color-scheme: dark)", color: "#0e0f18" },
  ],
  width: "device-width",
  initialScale: 1,
};

/* ─── Root Layout ────────────────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
