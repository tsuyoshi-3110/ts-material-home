"use client";

import { onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth, db, storage } from "@/lib/firebase";
import EditableFeature from "@/components/EditableFeature";
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

import {
  getAllFeaturesFromIndexedDB,
  saveFeaturesToIndexedDB,
} from "@/lib/indexeddb";

const DEFAULT_FEATURES = [
  {
    id: "TSDeliLogo",
    title: "配送アプリ",
    text: "QRコードや写真による納品確認が可能。",
    icon: "truck",
    iconUrl: "",
  },
  {
    id: "TSAdmin",
    title: "管理ウェブシステム",
    text: "顧客管理、帳票出力、履歴管理が可能。",
    icon: "file",
    iconUrl: "",
  },
  {
    id: "TSMatelixImage",
    title: "材料計算アプリ",
    text: "仕様と面積を入力するだけで材料と数量を自動算出。",
    icon: "package",
    iconUrl: "",
  },
];

interface Feature {
  id: string;
  title: string;
  text: string;
  icon: string;
  iconUrl?: string;
}

export default function GuidePage() {
  const [features, setFeatures] = useState<Feature[]>(DEFAULT_FEATURES);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const uploadImageAndGetUrl = async (id: string): Promise<string> => {
    const response = await fetch(`/images/default-icons/${id}.png`);
    const blob = await response.blob();
    const imageRef = storageRef(storage, `features/${id}.png`);
    await uploadBytes(imageRef, blob);
    return await getDownloadURL(imageRef);
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    let unsubscribe: (() => void) | null = null;

    const initAndSubscribe = async () => {
      try {
        const cached = await getAllFeaturesFromIndexedDB();
        if (cached && cached.length > 0) {
          setFeatures(cached);
        }

        const colRef = collection(db, "features");
        const firstSnap = await getDocs(colRef);

        if (firstSnap.empty) {
          await Promise.all(
            DEFAULT_FEATURES.map(async (f) => {
              const iconUrl = await uploadImageAndGetUrl(f.id);
              await setDoc(doc(db, "features", f.id), {
                ...f,
                iconUrl,
              });
            })
          );
        }

        unsubscribe = onSnapshot(colRef, async (snap) => {
          const fetched: Feature[] = snap.docs
            .map((d) => {
              const data = d.data();
              return {
                id: d.id,
                title: data.title,
                text: data.text,
                icon: data.icon || "package",
                iconUrl: data.iconUrl || "",
              };
            })
            .sort((a, b) => a.id.localeCompare(b.id));

          setFeatures(fetched);
          await saveFeaturesToIndexedDB(fetched);
          setIsLoading(false);
        });
      } catch (err) {
        console.error("初期化／同期処理に失敗しました", err);
        setIsLoading(false);
      }
    };

    initAndSubscribe();

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
        <h2 className="text-3xl font-bold text-center mb-12">
          TSMatelixが実現する「3つの革新」
        </h2>
        {isLoading ? (
          <p className="text-center text-gray-500">読み込み中...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <EditableFeature
                key={feature.id}
                id={feature.id}
                title={feature.title}
                text={feature.text}
                iconUrl={feature.iconUrl}
                editable={!!currentUser}
                setFeatures={setFeatures}
                index={index}
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
