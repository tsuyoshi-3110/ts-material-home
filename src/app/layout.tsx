// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui/Header";

export const metadata: Metadata = {
  title: "TS Matelix | 建築材料の次世代オーダーシステム",
  description:
    "TS Matelixは、工事の仕様と平米数で必要材料を自動計算する次世代アプリです。",
  icons: {
    icon: "/favicon.ico", // ← ここで指定
  },
  keywords: [
    "TS Matelix",
    "材料計算",
    "防水工事",
    "シーリング",
    "建材アプリ",
    "材料自動計算",
    "建築業DX",
    "ts Matelix",
  ],
  openGraph: {
    title: "TS Matelix",
    description:
      "工事の仕様と面積を入力するだけで材料を自動算出。今すぐ試してみよう。",
    url: "https://ts-matelix-home.vercel.app",
    siteName: "TS Matelix",
    locale: "ja_JP",
    type: "website",
  },
  other: {
    "google-site-verification": "UcH7-5B4bwpJxxSjIpBskahFhBRTSLRJUZ8A3LAnnFE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      {/* body はちょうど100dvh。スクロールは main に限定する */}
      <meta
        name="google-site-verification"
        content="4vAV9NvmjW-eGSFRYqZ_AzeX92uuaJYGWja9NqlGctw"
      />
      <body className="bg-white text-black font-sans antialiased">
        <Header className="fixed inset-x-0 top-0 z-50 h-16 [--h:4rem] shrink-0" />
        <main className="pt-[var(--h)] min-h-screen overflow-y-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
