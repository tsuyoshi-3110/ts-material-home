"use client";

import { useEffect, useState } from "react";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db, storage } from "@/lib/firebase";
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { saveFeaturesToIndexedDB } from "@/lib/indexeddb";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Feature {
  id: string;
  title: string;
  text: string;
  icon: string;
  iconUrl?: string;
}

interface EditableFeatureProps {
  id: string;
  iconUrl?: string;
  title: string;
  text: string;
  editable?: boolean;
  setFeatures: React.Dispatch<React.SetStateAction<Feature[]>>;
  index: number;
}

export default function EditableFeature({
  id,
  iconUrl,
  title,
  text,
  editable = false,
  setFeatures,
  index,
}: EditableFeatureProps) {
  const [editing, setEditing] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(title);
  const [currentText, setCurrentText] = useState(text);

  // 画像アップロード用 state
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>(
    iconUrl || `/images/default-icons/${id}.png`
  );
  const [uploading, setUploading] = useState(false);

  const router = useRouter();

  // props 変更を編集フォームに反映
  useEffect(() => {
    if (editing) {
      setCurrentTitle(title);
      setCurrentText(text);
      setPreviewUrl(iconUrl || `/images/default-icons/${id}.png`);
    }
  }, [editing, title, text, iconUrl, id]);

  // ファイル選択ハンドラ
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file)); // 即時プレビュー
    }
  };

  // 保存処理
  const handleSave = async () => {
    setUploading(true);
    try {
      let uploadedUrl = iconUrl ?? "";

      // 画像が選択されていれば Storage へアップロード
      if (selectedFile) {
        const imgRef = storageRef(storage, `features/${id}.png`);
        await uploadBytes(imgRef, selectedFile);
        uploadedUrl = await getDownloadURL(imgRef);
      }

      // Firestore ドキュメント更新
      const ref = doc(db, "features", id);
      const snap = await getDoc(ref);

      const payload = {
        title: currentTitle,
        text: currentText,
        iconUrl: uploadedUrl,
      };

      if (snap.exists()) {
        await updateDoc(ref, payload);
      } else {
        await setDoc(ref, { icon: "", ...payload });
      }

      // 親 state & IndexedDB を更新
      setFeatures((prev) => {
        const updated = prev.map((f) =>
          f.id === id ? { ...f, ...payload } : f
        );
        saveFeaturesToIndexedDB(updated);
        return updated;
      });

      setEditing(false);
    } catch (e) {
      alert("保存に失敗しました");
      console.error(e);
    } finally {
      setUploading(false);
    }
  };

  const handleClick = () => {
    switch (index) {
      case 0:
        router.push("/guide/admin");
        break;
      case 1:
        router.push("/guide/deli");
        break;
      case 2:
        router.push("/guide/matelix");
        break;
      default:
        console.warn("遷移先未定義 index:", index);
    }
  };

  /* ---------------- JSX ---------------- */

  if (editing && editable) {
    return (
      <div className="text-center p-4 bg-white rounded shadow space-y-2">
        {/* プレビュー */}
        <Image
          src={previewUrl}
          alt={currentTitle}
          width={64}
          height={64}
          className="mx-auto object-contain rounded"
        />

        {/* 画像選択 */}
        <label className="block w-full cursor-pointer text-teal-600 underline">
          画像を選択
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>

        {/* タイトル・テキスト */}
        <Input
          value={currentTitle}
          onChange={(e) => setCurrentTitle(e.target.value)}
          className="text-xl font-semibold"
        />
        <Textarea
          value={currentText}
          onChange={(e) => setCurrentText(e.target.value)}
          className="text-gray-600"
        />

        {/* ボタン */}
        <div className="flex gap-2 justify-center">
          <Button onClick={handleSave} disabled={uploading}>
            {uploading ? "アップロード中…" : "保存"}
          </Button>
          <Button variant="outline" onClick={() => setEditing(false)}>
            キャンセル
          </Button>
        </div>
      </div>
    );
  }

  // 通常表示モード
  const displayImageUrl =
    iconUrl && iconUrl.length > 0 ? iconUrl : `/images/default-icons/${id}.png`;

  return (
    <div
      onClick={handleClick}
      onDoubleClick={() => editable && setEditing(true)}
      className={`relative text-center p-4 bg-white rounded shadow transition cursor-pointer hover:shadow-md`}
    >
      {/* ✅ 右上編集ボタン */}
      {editable && (
        <button
          onClick={(e) => {
            e.stopPropagation(); // ← クリックが親に伝播しないように防ぐ
            setEditing(true);
          }}
          className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 text-sm px-2 py-1 rounded shadow"
        >
          ✎ 編集
        </button>
      )}

      {/* ✅ 通常コンテンツ */}
      <Image
        src={displayImageUrl}
        alt={title}
        className="
        w-28 h-28
        sm:w-36 sm:h-36
        md:w-44 md:h-44
        mx-auto object-contain
      "
        width={0}
        height={0}
        sizes="100vw"
      />
      <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}
