// app/page.tsx（または app/home/page.tsx など）

import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TS Matelix | 建築材料の次世代オーダーシステム",
  description:
    "建設現場の材料発注をよりスムーズに。次世代の統合型アプリ『TS Matelix』で効率化を実現。",
  openGraph: {
    title: "TS Matelix",
    description:
      "工事の仕様と面積を入力するだけで材料を自動算出。建築業界のDXを推進します。",
    url: "https://tsmatelix.shop",
    siteName: "TS Matelix",
    images: [
      {
        url: "/ogp-home.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white text-center px-4">
      <Image
        src="/images/default-icons/TSMatelixImage.png"
        alt="TS Matelix ロゴ"
        width={320}
        height={160}
        priority
        className="mb-12 rounded-xl shadow-md w-auto h-auto"
      />
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
        TS Matelix
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-4">
        建設現場の材料発注を、よりスムーズに。次世代の統合型アプリ「TS Matelix」
      </p>
    </main>
  );
}
