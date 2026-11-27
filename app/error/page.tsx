import type { Metadata } from "next";
import ErrorContent from "@/components/ErrorContent";

// Kept for backward compatibility with the old `/error.html` URL.
export const metadata: Metadata = { title: "エラー", robots: { index: false } };

export default function ErrorPage() {
  return <ErrorContent />;
}
