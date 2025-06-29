// app/admin-intro/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const features = [
  {
    title: "誰でも簡単に、正確な材料計算を。",
    description:
      "TSMatelix 材料計算販売アプリは、工事現場の「仕様」と「面積」を入力するだけで、必要な建材とその数量を即座に自動算出します。材料ごとの「単価・数量・金額」まで自動計算されるため、これまで手間のかかっていたエクセル作業や手計算は一切不要。施工仕様ごとに最適な材料リストが瞬時に表示され、そのままワンタップで発注や見積書作成へ進めます。さらに、管理ウェブとリアルタイム連携しているので、「最新の価格改定」や「現場ごとの割引率」も即時反映。仮単価でも試算できるため、概算見積りにも最適です。",
    image: "/images/quantityIInput.jpeg",
  },
  {
    title: "単品購入も、必要数量を自動計算",
    description:
      "TSMatelix 材料計算販売アプリでは、たとえば「シーリング材」や「アンカー」などの単品購入時でも、施工数量・目地幅・深さ・ロス率などを入力するだけで、必要な箱数や本数を瞬時に自動算出できます。これにより、現場で「どれくらい買えばいいのか？」という悩みもゼロに。過不足のない正確な数量を、誰でも簡単に算出できるため、無駄な仕入れや追加注文のリスクも大幅削減できます。見積段階でも、実発注時でも、現場でも、いつでも正確な材料数量が算出できるプロフェッショナルツールです。",
    image: "/images/singleCalc.jpeg",
  },
  {
    title: "見積もりから、ワンタップでそのまま注文",
    description:
      "TSMatelix 材料計算販売アプリでは、作成した見積もりデータから「一式まとめて注文」も、必要な品目だけ単品注文」も、自由に選択可能。あらかじめ組んだ「セット商品」での発注もできます。さらに、過去の購入履歴からも即再注文が可能。数量調整も簡単で、現場ごとの追加発注もスムーズです。これまで「見積→発注→履歴管理」とバラバラだった作業が、このアプリひとつで一気通貫に管理できます。",
    image: "/images/estimate.jpeg",
  },
  {
    title: "注文履歴から、位置確認も再注文もワンタップ",
    description:
      "過去の注文履歴から、現在の配送ドライバーの位置情報をリアルタイムで確認可能。「置き配指定」も簡単設定で対応。さらに、履歴一覧から欲しい商品を選んでそのまま再注文も可能です。納品済み案件も未納品案件も一目で把握でき、現場担当者がスマホだけでいつでも状況確認・追加発注できる、業界特化型の履歴連動注文システムです。",
    image: "/images/orderHistory.jpeg",
  },
  {
    title: "現場別・月別で 購入履歴もワンタップ確認",
    description:
      "現場ごと、月ごとの購入履歴を瞬時に一覧表示。材料ごとの集計金額や使用量もひと目で把握でき、原価管理や予算管理がスムーズに。さらに、一覧表のセルをタップするだけで、そのまま再注文も可能。過去データが「そのまま次の発注書」になる、現場管理の強力なアシスト機能です。",
    image: "/images/purchaseByMouth.jpeg",
  },
  {
    title: "数量調整も自由自在",
    description:
      "自動算出された材料数量は、個別に数値入力で調整できるのはもちろん、全体に対して「一式〇〇％」という一括割合調整も可能。現場の実情に合わせた柔軟な発注設定が、ワンタップで完了します。",
    image: "/images/purchaseByMouth.jpeg",
  },
  {
    title: "事前登録で注文がもっとスムーズに",
    description:
      "現場名・納品場所・担当者名・電話番号などは、あらかじめアプリ内で登録しておけば注文時にワンタップで素早く選択可能。毎回の入力作業を省略でき、ミス防止とスピードアップを両立します。",
    image: "/images/purchaseByMouth.jpeg",
  },
];

export default function TSCalcAppPage() {
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
          TSMatelix 材料注文発注アプリ機能
        </h1>
      </div>

      <div className="mb-8 text-left">
        <h2 className="text-xl font-semibold text-gray-800">
          「現場での材料発注、その手間とミスをゼロに」
        </h2>
        <p className="text-gray-600 mt-2 text-left">
          TSMatelix 材料計算発注アプリは、
          <strong>「工事のプロフェッショナル」</strong>
          が抱える
          <strong>“材料発注の面倒・ミス・時間ロス”</strong>
          を完全解決するために開発された、
          <strong>スマホ一台で完結するクラウド型資材手配ツール</strong>です。
          <br />
          <br />
          これまで、現場での発注は「手計算」「エクセル」「FAX」「電話」が当たり前でした。
          その結果…
          <ul className="list-disc pl-6 mt-2">
            <li>
              「どこまで拾った？」と何度も確認…
              <strong>拾い忘れ・数量間違い</strong>が絶えない
            </li>
            <li>
              「あれ、数量違った…」
              <strong>計算ミスによる二度手間・誤発注</strong>
            </li>
            <li>
              <strong>FAX・電話・手書き注文書</strong>で発注にかかる
              <strong>かかる非効率</strong>
            </li>
          </ul>
          そんな非効率を、TSMatelixはゼロにします。
          <br />
          <br />
          現場で<strong>「仕様」「面積」「立上り」</strong>
          などを入力するだけで、必要な材料と数量を
          <strong>瞬時に自動計算</strong>。
          <br />
          <br />
          <strong>そのままワンタップで見積作成・PDF出力・即注文</strong>
          まで完了。 単品、セット、一式、どの発注パターンでも対応可能です。
          <br />
          <br />
          「もっと少なく」「一式の倍率を変えたい」そんな現場特有の調整も、
          <strong>「数量調整画面」で一発修正</strong>。
          <br />
          <br />
          過去の<strong>注文履歴から再発注</strong>も、
          <strong>現場別・月別の購入履歴確認</strong>も、
          <strong>全てアプリから数秒で操作可能</strong>です。
          <br />
          <br />
          さらに、現場で意外と面倒な
          <strong>「面積拾い出し用 図形計算機能」</strong>、
          <strong>「ドレン雨量計算ツール」</strong>なども標準搭載。
          <br />
          <strong>もう現場で電卓も、分厚い施工資料も不要</strong>です。
          <br />
          <br />
          もちろん、材料屋側の
          <strong>管理ウェブとも完全リアルタイム連携</strong>。
          <strong>価格改定・配送不可日・受注状況</strong>は即時同期。
          <br />
          <br />
          今までの「電話」「紙」「FAX」によるミスやタイムロスをなくし、
          <strong>最短・正確・スマートな材料手配</strong>を、
          このアプリ一つで実現します。
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
