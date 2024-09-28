import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
      <div className="hero-content text-center align-middle">
        <div className="max-w-lg">
          <h1 className="text-6xl">0x dweb</h1>
          <h2 className="py-4 text-4xl text-secondary">decentralized dapps</h2>
          <p className="py-4 text-sm text-info">
            WEB3 Onboarding With The 0xdweb Community.
          </p>
        </div>
      </div>
    </div>
  );
}
