"use client";

import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white text-center px-4">
      <Image
        src="/images/default-icons/TSMatelixImage.png"
        alt="TSMatelix ロゴ"
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
