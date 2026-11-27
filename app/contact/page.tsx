import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = { title: "お問い合わせ" };

export default function ContactPage() {
  return (
    <>
      <PageHeader>お問い合わせ</PageHeader>
      <p>以下のメールアドレスよりお問い合わせください。</p>
      <blockquote>info [-at-] janom.co.jp</blockquote>
      <p>（[-at-] をアットマークに置き換えてください）</p>
    </>
  );
}
