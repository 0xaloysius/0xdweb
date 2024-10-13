import Image from "next/image";
import Link from "next/link";
//import PushWidget from "components/pushwidget";
export default function Home() {
  return (
    <div
      className="hero min-h-screen bg-gradient-to-r from-info to-base-200"
      //style={{backgroundImage:"url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",}}
    >
      <div className="hero-content text-center align-middle">
        <div className="max-w-lg">
          <h1 className="text-6xl text-base-100 font-bold">0x DWEB</h1>
          <h2 className="py-4 text-4xl text-secondary uppercase">
            Decentralized apps & communications.
          </h2>
          <p className="py-4 text-sm text-white">
            WEB3 Onboard With The 0xDWEB Community.
          </p>
        </div>
      </div>
    </div>
  );
}
