// app/admin-intro/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const features = [
  {
    title: "月別・現場別での購入履歴表示",
    description:
      "仕入れ履歴を「月別」「現場別」で瞬時に絞り込み。材料ごとの使用量や支出状況がすぐに把握できます。",
    image: "/images/salesByMonth.png",
  },
  {
    title: "現場ごとの材料使用量を自動集計",
    description:
      "各現場で使用された材料を品目別に自動で集計。原価管理・予算管理がスムーズに進められます。",
    image: "/images/salesByMonth.png",
  },

  {
    title: "見積もりも簡単",
    description:
      "現場の「仕様」と「面積」を入力するだけで、必要材料と数量が自動でパッと算出！さらに、商品名からのかんたん検索機能で材料の追加や差し替えもワンクリック。現場ごとの割引率設定も可能なので、法人ごとの特価対応や特別割引も自由自在です。これまで時間のかかっていた「手計算＋エクセル作業」から完全脱却。現場から事務所まで、スムーズな見積もり作成を実現します。",
    image: "/images/estimate.png",
  },
  {
    title: "配送不可日設定もワンタップで反映",
    description:
      "管理画面のカレンダーで配送不可日をタップするだけで、「材料アプリ」「配送アプリ」「管理ウェブ」すべてにリアルタイム反映。システム全体で配送スケジュールを一元管理できます。",
    image: "/images/nonDeliSet.png",
  },
  {
    title: "価格改定も一瞬で全アプリに反映",
    description:
      "管理ウェブで価格を変更すれば、「材料アプリ」「見積もり機能」「配送アプリ」など全ての関連システムに即時反映。面倒な二重管理や反映ミスをゼロに。",
    image: "/images/priceSet.png",
  },
  {
    title: "請求書、納品書、見積書、注文書は自動PDF化＆メール送信",
    description:
      "月締めや現場別での請求書PDFを自動生成。指定メールアドレス宛に自動送信され、事務作業がゼロに。請求書はエクセル化も可能。",
    image: "/images/estimatePDF.png",
  },
];

export default function AdminIntroPage() {
  return (
    <main className="max-w-5xl mx-auto py-10 px-4 mt-7">
      <div>
        {/* 戻るボタン（左上固定・絶対配置） */}
        <Link
          href="/guide"
          className="absolute top-20 left-4 bg-black text-white hover:text-gray-500 p-2 rounded-full hover:bg-gray-950 transition flex items-center justify-center shadow-md"
        >
          <ArrowLeft size={20} />
        </Link>

        {/* タイトル */}
        <h1 className="text-3xl font-bold text-center mt-10 mb-10">
          TSMatelix 管理ウェブ機能
        </h1>
      </div>

      <div className="space-y-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start md:items-center gap-6"
          >
            <div className="w-full md:w-1/2">
              <Image
                src={feature.image}
                alt={feature.title}
                width={600}
                height={300}
                className="rounded shadow"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-semibold mb-2">{feature.title}</h2>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
