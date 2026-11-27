import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL, SOCIAL_TITLE, TWITTER_ACCOUNT } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | システム開発・ウェブ製作`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: ["IT", "computer", "system", "program", "web"],
  authors: [{ name: SITE_NAME }],
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    title: SOCIAL_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/img/logo.png"],
    siteName: SITE_NAME,
    locale: "ja_JP",
  },
  twitter: {
    card: "summary",
    site: `@${TWITTER_ACCOUNT}`,
    title: SOCIAL_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/img/logo.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
