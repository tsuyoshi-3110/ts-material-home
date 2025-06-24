"use client";

import { onAuthStateChanged, User } from "firebase/auth";
import { JSX, useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import EditableFeature from "@/components/EditableFeature";
import { FileText, Package, Truck } from "lucide-react";
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  setDoc,
} from "firebase/firestore";

import {
  getAllFeaturesFromIndexedDB,
  saveFeaturesToIndexedDB,
} from "@/lib/indexeddb";

const DEFAULT_FEATURES = [
  {
    id: "delivery",
    title: "配送アプリ",
    text: "QRコードや写真による納品確認が可能。",
    icon: "truck",
  },
  {
    id: "management",
    title: "管理ウェブシステム",
    text: "顧客管理、帳票出力、履歴管理が可能。",
    icon: "file",
  },

  {
    id: "Matelix",
    title: "材料計算アプリ",
    text: "仕様と面積を入力するだけで材料と数量を自動算出。",
    icon: "package",
  },
];

export default function GuidePage() {
  // IDに対応するアイコンマップを作成
  const iconMap: Record<string, JSX.Element> = {
    package: <Package size={48} className="text-teal-500 mx-auto" />,
    file: <FileText size={48} className="text-teal-500 mx-auto" />,
    truck: <Truck size={48} className="text-teal-500 mx-auto" />,
  };

  interface Feature {
    id: string;
    title: string;
    text: string;
    icon: string; // ← "package" | "file" | "truck" のようにしてもOK
  }

  const [features, setFeatures] = useState<Feature[]>(DEFAULT_FEATURES);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true); // ← 追加

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    let unsubscribe: (() => void) | null = null; // onSnapshot の解除用

    const initAndSubscribe = async () => {
      try {
        /* ---------- ① IndexedDB を即時読み込み（超高速表示） ---------- */
        const cached = await getAllFeaturesFromIndexedDB();
        if (cached && cached.length > 0) {
          setFeatures(cached); // 画面に先に描画
        }

        /* ---------- ② Firestore に初期データが無ければ投入 ---------- */
        const colRef = collection(db, "features");
        const firstSnap = await getDocs(colRef);

        if (firstSnap.empty) {
          // コレクションごと空 ⇒ DEFAULT_FEATURES を一括追加
          await Promise.all(
            DEFAULT_FEATURES.map((f) => setDoc(doc(db, "features", f.id), f))
          );
        }

        /* ---------- ③ Firestore を onSnapshot でリアルタイム購読 ---------- */
        unsubscribe = onSnapshot(colRef, async (snap) => {
          const fetched: Feature[] = snap.docs
            .map((d) => {
              const data = d.data();
              return {
                id: d.id,
                title: data.title,
                text: data.text,
                icon: data.icon || "package",
              };
            })
            .sort((a, b) => a.id.localeCompare(b.id)); // id順で安定表示

          setFeatures(fetched); // 画面更新
          await saveFeaturesToIndexedDB(fetched); // IndexedDB も同期
          setIsLoading(false); // 初期ロード完了
        });
      } catch (err) {
        console.error("初期化／同期処理に失敗しました", err);
        setIsLoading(false);
      }
    };

    initAndSubscribe();

    /* ---------- クリーンアップ：画面離脱時に購読解除 ---------- */
    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);

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
        <h2 className="text-3xl font-bold text-center mb-12">主な機能</h2>
        {isLoading ? (
          <p className="text-center text-gray-500">読み込み中...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <EditableFeature
                key={feature.id}
                id={feature.id}
                title={feature.title}
                text={feature.text}
                icon={iconMap[feature.icon] ?? iconMap["package"]}
                editable={!!currentUser}
                setFeatures={setFeatures}
              />
            ))}
          </div>
        )}
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
    </main>
  );
}
