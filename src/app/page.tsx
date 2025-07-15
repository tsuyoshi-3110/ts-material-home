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

      <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-4">
        建設現場の材料発注を、よりスムーズに。
        <br className="hidden sm:inline" />
        次世代の統合型アプリ「TS Matelix」
      </p>

      <div className="max-w-2xl text-left text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed space-y-4">
        <p>
          <strong>TSMatelix 材料計算発注アプリ</strong>は、
          <strong>防水工事</strong>・<strong>シーリング工事</strong>・
          <strong>外壁改修</strong>などに携わる
          <strong>建設業の現場担当者</strong>のために開発された、
          <strong>次世代型の業務効率化ツール</strong>です。
        </p>

        <p>
          工事の仕様や面積を入力するだけで、
          <strong>必要な材料の種類と数量を自動計算</strong>。
          <br />
          見積の作成から、実際の発注、履歴の確認、再注文まで、
          <strong>すべてをスマートフォン1台で完結</strong>できます。
        </p>

        <p>
          従来の<strong>エクセル手計算</strong>や<strong>FAX発注</strong>
          に頼ることなく、 正確かつ迅速な発注が可能になり、
          <strong>現場のミスやタイムロスを大幅に削減</strong>します。
        </p>

        <p>
          材料発注をもっと正確に、もっとスマートに。
          <br />
          建設現場の未来を変えるアプリ、それが「TSMatelix」です。
        </p>
      </div>
    </main>
  );
}
