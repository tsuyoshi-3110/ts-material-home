// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui/Header";

export const metadata: Metadata = {
  title: "TSMaterial 説明書",
  description: "次世代の材料発注アプリ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      {/* body はちょうど100dvh。スクロールは main に限定する */}
      <body className="overflow-hidden bg-white text-black font-sans antialiased h-dvh">
        {/* ★ ヘッダーを fixed にして高さを CSS 変数 --h に保存 */}
        <Header className="fixed inset-x-0 top-0 z-50 h-16 [--h:4rem] shrink-0" />

        {/* ★ ヘッダー分を差し引いた高さで縦スクロール */}
        <main className="pt-[var(--h)] h-[calc(100dvh-var(--h))] overflow-y-auto scrollbar-gutter:stable both-edges">
          {children}
        </main>
      </body>
    </html>
  );
}
