import type { Metadata } from "next";
import ErrorContent from "@/components/ErrorContent";

export const metadata: Metadata = { title: "エラー", robots: { index: false } };

export default function NotFound() {
  return <ErrorContent />;
}
