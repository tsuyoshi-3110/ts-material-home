export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white">
      <section className="max-w-3xl mx-auto py-20 px-4 text-black">
        <h1 className="text-3xl font-bold mb-6">プライバシーポリシー</h1>

        <p className="mb-6">
          「TS
          Matelix」は、ユーザーのプライバシーを尊重し、以下の方針に基づいて情報を管理します。
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">1. 収集する情報</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>連絡先情報（自動入力補助のため）</li>
          <li>ファイル（PDFアップロード機能）</li>
          <li>デバイス情報（安定性分析のため）</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">2. 利用目的</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>アプリ機能提供（ファイル送信、音声再生など）</li>
          <li>不具合解析・品質改善</li>
          <li>ユーザーサポート対応</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">3. 第三者提供</h2>
        <p className="mb-4">
          当アプリは、法令に基づく場合を除き、利用者の事前同意なく第三者に情報を提供しません。
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">4. お問い合わせ先</h2>
        <p className="mb-4">
          <a
            href="mailto:tsMatelixstore@gmail.com"
            className="text-teal-600 underline"
          >
            tsMatelixstore@gmail.com
          </a>
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">5. 改定について</h2>
        <p className="mb-4">
          本ポリシーは必要に応じて変更される場合があります。
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          6. アカウントおよびデータの削除について
        </h2>
        <p>
          TS
          Matelixのアカウント削除をご希望の場合は、登録されたメールアドレスから「アカウント削除希望」と明記のうえ、
          <br />
          <a
            href="mailto:tsMatelixstore@gmail.com"
            className="text-teal-600 underline"
          >
            tsMatelixstore@gmail.com
          </a>{" "}
          までご連絡ください。確認後、速やかに対応いたします。
        </p>
      </section>
    </main>
  );
}
