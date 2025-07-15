import Image from "next/image";
import Link from "next/link";

export default function QRSection() {
  return (
    <div>
       <section className="text-center py-12">
      <h2 className="text-2xl font-bold mb-4">
        Android版アプリはこちらから
      </h2>

      <div className="flex flex-col items-center gap-4">
        <Image
          src="/tsmatelix_qr_googleplay.png"
          alt="TSMatelix アプリQRコード（Google Play）"
          width={160}
          height={160}
        />
        <Link
            href="https://play.google.com/store/apps/details?id=com.tsuyoshisaito.mywatermelonapp"
            className="inline-block bg-black text-white py-3 px-6 rounded hover:bg-gray-800 transition"
          >
            google playで開く
          </Link>
      </div>
    </section>

     <section className="text-center py-12">
      <h2 className="text-2xl font-bold mb-4">
        ios版アプリはこちらから
      </h2>

      <div className="flex flex-col items-center gap-4">
       <label>現在準備中...</label>
        {/* <Image
          src="/tsmatelix_qr_googleplay.png"
          alt="TSMatelix アプリQRコード（Google Play）"
          width={160}
          height={160}
        />
        <Link
            href="https://play.google.com/store/apps/details?id=com.tsuyoshisaito.mywatermelonapp"
            className="inline-block bg-black text-white py-3 px-6 rounded hover:bg-gray-800 transition"
          >
            google playで開く
          </Link> */}
      </div>
    </section>
    </div>

  );
}
