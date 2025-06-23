"use client";

import { useEffect, useState } from "react";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { saveFeaturesToIndexedDB } from "@/lib/indexeddb";

interface Feature {
  id: string;
  title: string;
  text: string;
  icon: string; // ← "package" | "file" | "truck" のようにしてもOK
}

interface EditableFeatureProps {
  id: string;
  icon: React.ReactNode; // ← ここは固定なので ReactNode のまま
  title: string;
  text: string;
  editable?: boolean; // ログイン状態で true に
  setFeatures: React.Dispatch<React.SetStateAction<Feature[]>>;
}

export default function EditableFeature({
  id,
  icon,
  title,
  text,
  editable = false,
  setFeatures,
}: EditableFeatureProps) {
  const [editing, setEditing] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(title);
  const [currentText, setCurrentText] = useState(text);

  // 🔽 編集モードに入るたびに props を再反映
  useEffect(() => {
    if (editing) {
      setCurrentTitle(title);
      setCurrentText(text);
    }
  }, [editing, title, text]);

  const handleSave = async () => {
    try {
      const ref = doc(db, "features", id);
      const snap = await getDoc(ref);

      if (snap.exists()) {
        await updateDoc(ref, {
          title: currentTitle,
          text: currentText,
        });
      } else {
        await setDoc(ref, {
          title: currentTitle,
          text: currentText,
          icon: "", // 初期値など必要に応じて
        });
      }

      // 🔽 親コンポーネントとIndexedDBの両方を更新
      setFeatures((prev) => {
        const updated = prev.map((f) =>
          f.id === id ? { ...f, title: currentTitle, text: currentText } : f
        );
        saveFeaturesToIndexedDB(updated);
        return updated;
      });

      setEditing(false);
    } catch (e) {
      alert("保存に失敗しました");
      console.error(e);
    }
  };

  if (editing && editable) {
    return (
      <div className="text-center p-4 bg-white rounded shadow space-y-2">
        {icon}
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
        <div className="flex gap-2 justify-center">
          <Button onClick={handleSave}>保存</Button>
          <Button variant="outline" onClick={() => setEditing(false)}>
            キャンセル
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div
      onDoubleClick={() => editable && setEditing(true)}
      className={`text-center p-4 bg-white rounded shadow transition cursor-${
        editable ? "pointer" : "default"
      } hover:shadow-md`}
    >
      {icon}
      <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}
