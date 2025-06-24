"use client";

import Image from "next/image";
import logo from "@/assets/TSMatelixImage.png";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white text-center px-4">
      <Image
        src={logo}
        alt="TSMatelix ロゴ"
        className="mb-12 rounded-xl shadow-md w-40 sm:w-64 md:w-80 lg:w-[28rem] xl:w-[32rem] h-auto"
      />
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
        TS Matelix
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-400">
        建設現場の材料発注を、よりスムーズに。次世代の統合型アプリ「TS Matelix」
      </p>
    </main>
  );
}
