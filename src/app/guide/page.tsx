"use client";

import { FileText, Package, Truck } from "lucide-react";

export default function GuidePage() {
  return (
    <main className="bg-gray-50 text-gray-900 ">
      {/* Hero セクション */}
      <section className="bg-gray-950 text-white py-24 text-center h-64">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          TSMaterial アプリ
        </h1>
        <p className="text-xl mb-6">
          材料の計算・発注・配送・管理までをワンストップで提供する建設業界向け統合システム
        </p>
      </section>

      {/* 主な機能 */}
      <section className="max-w-6xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">主な機能</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Feature
            icon={<Package size={48} className="text-teal-500 mx-auto" />}
            title="材料計算アプリ"
            text="仕様と面積を入力するだけで材料と数量を自動算出。単品材料の自動計算も可能。"
          />
          <Feature
            icon={<FileText size={48} className="text-teal-500 mx-auto" />}
            title="管理ウェブシステム"
            text="顧客管理、帳票出力、履歴管理が可能。PDFで見積書や納品書も出力可能。"
          />
          <Feature
            icon={<Truck size={48} className="text-teal-500 mx-auto" />}
            title="配送アプリ"
            text="QRコードや写真による納品確認、ドライバー位置のリアルタイム確認が可能。"
          />
        </div>
      </section>

      {/* 特許・独自性 */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">特許取得済の独自性</h2>
          <p className="text-gray-700">
            建設現場の「仕様＋面積」から必要材料と数量を自動計算し、発注まで一括処理できる仕組みに関して特許を取得済。建設業の現場経験とITを融合した革新的な仕組みです。
          </p>
        </div>
      </section>

      {/* サポート募集 */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">すべてを、シームレスに。</h2>
          <p className="text-gray-800 leading-relaxed">
            現場・材料販売・配送のプロフェッショナルをひとつにつなぎ、業務を完全ペーパーレスで統合。
            会計処理から帳票の自動作成・送信まで、すべてをスマートに自動化します。
          </p>
        </div>
      </section>
    </main>
  );
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="text-center p-4 bg-white rounded shadow hover:shadow-md transition">
      {icon}
      <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}
