import { GeistMono } from 'geist/font/mono'
import "./globals.css";
import { Providers } from "./providers";

import Header from "components/header";
import Footer from "components/footer";

export const metadata = {
  title: "0XDWEB",
  description: "Decentralized Web & Apps",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={GeistMono.className}>
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
