// Root layout — minimal shell required by Next.js App Router.
// All locale routes use app/[lang]/layout.tsx which owns <html> and <body>.
// This file only handles root-level redirects (handled in proxy.ts).
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
