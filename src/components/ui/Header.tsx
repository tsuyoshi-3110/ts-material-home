// src/components/Header.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react"; // lucide-react の標準 import 例[3]:contentReference[oaicite:2]{index=2}
import clsx from "clsx"; // npm i clsx していない場合は追加

type HeaderProps = {
  /** 外部から追加したい Tailwind クラス */
  className?: string;
};

export default function Header({ className = "" }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header
      /* 基本スタイル + 外から渡されたクラスをマージ */
      className={clsx(
        "flex items-center justify-between p-4 bg-black text-white",
        className
      )}
    >
      {/* 左ロゴ */}
      <Link href="/" className="text-xl font-bold">
        TSMaterial
      </Link>

      {/* デスクトップ用ナビ */}
      <nav className="hidden space-x-4 md:flex">
        <Link href="/guide">説明</Link>
        <Link href="/privacy">プライバシー</Link>
      </nav>

      {/* モバイルメニュー */}
      <div className="md:hidden">
        <button onClick={() => setOpen(!open)} aria-label="メニューを開く">
          <Menu />
        </button>

        {open && (
          <div className="absolute right-4 top-16 space-y-2 rounded bg-white p-2 text-black shadow">
            <Link
              href="/guide"
              className="block rounded px-2 py-1 hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              説明
            </Link>
            <Link
              href="/privacy"
              className="block rounded px-2 py-1 hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              プライバシー
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
