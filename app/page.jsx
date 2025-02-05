import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://doodleipsum.com/700/outline?i=f04b406cfb99d08a441a1fbb4257cde2)",
      }}
    >
      <div className="hero-content text-right align-right">
        <div className="max-w-md">
          <h1 className="text-6xl">0x dweb</h1>
          <h2 className="py-4 text-4xl text-secondary">decentralized dapps</h2>
          <p className="py-4 text-sm text-info">
            Building WEB3 eCommerce Marketplace With 0x Communities.
          </p>
        </div>
      </div>
    </div>
  );
}
