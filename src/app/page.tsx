// Root "/" is handled by proxy.ts which redirects to the detected locale (e.g. /en).
// This file satisfies Next.js App Router's page requirement but is never rendered.
import { redirect } from "next/navigation";

export default function RootPage() {
  redirect("/sr");
}
