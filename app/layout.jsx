import { Noto_Sans_Mono } from "next/font/google";
import "/styles/globals.css";
import { Providers } from "./providers";

import Header from "components/header";
import Footer from "components/footer";

const nsm = Noto_Sans_Mono({
  weight: ["400", "600"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata = {
  title: "0XDWEB",
  description: "Decentralized Web & Apps",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={nsm.className}>
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
