// app/guide/page.tsx (Server Component)

import EditableFeature from "@/components/EditableFeature";

const DEFAULT_FEATURES = [

  {
    id: "TSAdmin",
    title: "管理ウェブシステム",
    text: "顧客管理、帳票出力、履歴管理が可能。",
    icon: "file",
    iconUrl: "/images/default-icons/TSAdmin.png",
  },
   {
    id: "TSDeliLogo",
    title: "配送アプリ",
    text: "QRコードや写真による納品確認が可能。",
    icon: "truck",
    iconUrl: "/images/default-icons/TSDeliLogo.png",
  },
  {
    id: "TSMatelixImage",
    title: "材料計算アプリ",
    text: "仕様と面積を入力するだけで材料と数量を自動算出。",
    icon: "package",
    iconUrl: "/images/default-icons/TSMatelixImage.png",
  },
];

export const metadata = {
  title: "TS Matelix アプリ｜建設業界向け統合型管理システム",
  description:
    "材料計算・発注・配送・管理を一括で行える建設業DXの最前線。TS Matelixが提供する3つの革新をご紹介します。",
  openGraph: {
    title: "TS Matelix アプリ",
    description:
      "材料計算・配送・管理をワンストップで提供。建設業の業務効率を革新する次世代統合型アプリ。",
    url: "https://tsmatelix.shop/guide",
    siteName: "TS Matelix",
    images: [
      {
        url: "/ogp-guide.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
};

export default function GuidePage() {
  return (
    <main className="bg-gray-50 text-gray-900">
      <section className="bg-gray-950 text-white py-24 text-center h-64">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          TSMatelix アプリ
        </h1>
        <p className="text-xl mb-6">
          材料の計算・発注・配送・管理までをワンストップで提供する建設業界向け統合システム
        </p>
      </section>

      <section className="max-w-6xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          TSMatelixが実現する「3つの革新」
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DEFAULT_FEATURES.map((feature, index) => (
            <EditableFeature
              key={feature.id}
              id={feature.id}
              title={feature.title}
              text={feature.text}
              iconUrl={feature.iconUrl}
              editable={false} // Server Component では編集不可
              index={index}
            />
          ))}
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">特許取得済の独自性</h2>
          <p className="text-gray-700">
            建設現場の「仕様＋面積」から必要材料と数量を自動計算し、発注まで一括処理できる仕組みに関して特許を取得済。建設業の現場経験とITを融合した革新的な仕組みです。
          </p>
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">すべてを、シームレスに。</h2>
          <p className="text-gray-800 leading-relaxed">
            現場・材料販売・配送のプロフェッショナルをひとつにつなぎ、業務を完全ペーパーレスで統合。
            会計処理から帳票の自動作成・送信まで、すべてをスマートに自動化します。
          </p>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">
            対応工事種別と今後の拡張予定
          </h2>
          <p className="text-gray-800 leading-relaxed">
            現在、TS Matelixは<strong>防水工事全般</strong>
            に完全対応しています。
            <br />
            今後は<strong>塗装工事</strong>や<strong>外装リフォーム全般</strong>
            への対応拡張も計画中。
            お客様の業種や工事内容に合わせ、さらに柔軟で強力な業務支援を目指します。
          </p>
        </div>
      </section>
    </main>
  );
}
