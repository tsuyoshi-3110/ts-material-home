// app/admin-intro/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const features = [
  {
    title: " 配送アプリ ログイン連携機能",
    description:
      "配送アプリにログインするだけで、管理ウェブ・材料計算アプリとも自動でデータ連携。ドライバーの位置情報もリアルタイムに反映され、現場側も管理側も「今どこにいるか」「配送状況はどうか」 を即座に把握可能。面倒な設定不要、ワンタップで業務全体がつながります。",
    image: "/images/tsDeliLogin.jpeg",
  },
  {
    title: "ドライバー業務をワンタップで効率化",
    description:
      "「本日の配送先」が一覧表示され、ワンタップでGoogleマップ起動、荷受け担当者への電話発信も即実行。納品時は「写真撮影で置き配記録」または「QRスキャンで対面受領」。位置情報、時刻、ドライバーID、荷受け人IDまですべて自動で記録され、管理側もリアルタイムで進捗確認可能。もう手書き管理や電話確認は不要。配送と管理が、完全にシームレスに連動します。",
    image: "/images/tsDeliHome.jpeg",
  },
];

export default function TSDeliPage() {
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
        <h1 className="text-3xl font-bold text-center mt-15 mb-10">
          TS Matelix 配送アプリ機能
        </h1>
      </div>

      <div className="mb-8 text-left">
        <h2 className="text-xl font-semibold text-gray-800">
          「スマホ一つで配送管理が完結」
        </h2>
        <p className="text-gray-600 mt-2 text-left">
          TS Matelix 配送アプリは、
          <strong>「TS Matelixの配送ドライバー」</strong>
          向けに開発された、<strong>現場密着型のクラウド配送管理アプリ</strong>
          です。
          <br />
          <br />
          本日の配送先リストはアプリを開けば即表示。
          <br />
          各現場へのナビはワンタップでGoogleマップ連携、
          <br />
          荷受人への電話もワンタッチ発信可能。
          <br />
          <br />
          また、「置き配時の納品写真撮影」や、「荷受けサイン代わりのQRスキャン記録」にも対応。
          <br />
          撮影やスキャンと同時に、
          <strong>「位置情報」「納品時刻」「ドライバーID」「荷受人ID」</strong>
          が 自動で記録され、<strong>管理ウェブとリアルタイム同期</strong>
          されます。
          <br />
          <br />
          配送不可日、管理ウェブからの設定変更がアプリに即反映。
          <br />
          ドライバーは「指示書」「紙管理」から完全解放され、
          <strong>ミスゼロ＆スピード納品</strong>を実現します。
        </p>
      </div>

      <div className="space-y-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start md:items-center gap-6"
          >
            {/* 画像部分 */}
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src={feature.image}
                alt={feature.title}
                width={200}
                height={100}
                className="rounded shadow"
              />
            </div>

            {/* テキスト部分 */}
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
