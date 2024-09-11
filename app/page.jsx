import Image from "next/image";
import Link from "next/link";
import Contact from "components/contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16 font-bold uppercase text-center">
      <h1 className="text-6xl">0x dweb&nbsp;</h1>
      <h2 className="text-4xl">decentralized eCommerce dapps</h2>
    </main>
  );
}
