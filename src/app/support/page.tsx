"use client";

import React, { useState } from "react";

export default function SupportPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return; // 二重送信防止
    setIsSubmitting(true);
    setStatus("送信中...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("送信が完了しました。ありがとうございました。");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("送信に失敗しました。もう一度お試しください。");
    }
    setIsSubmitting(false);
  };

  return (
    <main className="max-w-3xl mx-auto p-6 bg-white shadow-md border-2 rounded-lg mt-20 ">
      <h1 className="text-2xl font-bold mb-6">サポートページ - TSMatelix</h1>

      {/* お問い合わせフォーム */}
      <section className="mb-8 ">
        <h2 className="text-xl font-semibold mb-4">お問い合わせフォーム</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-medium">
              お名前
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium">
              メールアドレス
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded"
            />
          </div>
          <div>
            <label htmlFor="message" className="block font-medium">
              お問い合わせ内容
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "送信中..." : "送信する"}
          </button>
        </form>
        {status && <p className="text-sm text-gray-500 mt-2">{status}</p>}
        <p className="text-sm text-gray-500 mt-2">
          ※お送りいただいた内容には1〜2営業日以内にご返信いたします。
        </p>
      </section>

      {/* 連絡先情報 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">直接のご連絡先</h2>
        <ul className="space-y-1">
          <li>
            <strong>メール：</strong> tsmatelix@gmail.com
          </li>
          <li>
            <strong>電話：</strong> 090-6151-3328（平日10:00〜17:00）
          </li>
          <li>
            <strong>運営会社：</strong> 株式会社TS Reform
          </li>
          <li>
            <strong>所在地：</strong> 大阪府豊中市小曽根3丁目6-13
          </li>
        </ul>
      </section>
    </main>
  );
}
