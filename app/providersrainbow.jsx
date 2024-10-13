"use client";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultConfig,
  RainbowKitProvider,
  connectorsForWallets,
} from "@rainbow-me/rainbowkit";
import {
  //braveWallet,
  metaMaskWallet,
  rainbowWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { WagmiProvider } from "wagmi";
import { mainnet, polygon, base } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Link from "next/link";

const queryClient = new QueryClient();

const connectors = connectorsForWallets(
  [
    {
      groupName: "Recommended",
      wallets: [metaMaskWallet, rainbowWallet, walletConnectWallet],
    },
  ],
  {
    appName: "0xDWEB",
    projectId: process.env.NEXT_PUBLIC_projectID,
  }
);

const config = getDefaultConfig({
  appName: "0xDWEB",
  connectors,
  projectId: process.env.NEXT_PUBLIC_projectID,
  chains: [mainnet, polygon, base],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

const disclaimer = ({ Text, Link }) => (
  <Text>
    <Link href="https://0xdweb.com/terms">Terms of Service</Link> and{" "}
    <Link href="https://0xdweb.com/privacy">Privacy</Link>
  </Text>
);
const customTheme = {
  blurs: {
    modalOverlay: "medium",
  },
  colors: {
    accentColor: "#00bda1",
    accentColorForeground: "#e5e7eb",
    actionButtonBorder: "",
    actionButtonBorderMobile: "",
    actionButtonSecondaryBackground: "",
    closeButton: "#00bda1",
    closeButtonBackground: "",
    connectButtonBackground: "#00bda1",
    connectButtonBackgroundError: "#ff004d",
    connectButtonInnerBackground: "#00bda1",
    connectButtonText: "#e5e7eb",
    connectButtonTextError: "#ff004d",
    connectionIndicator: "",
    downloadBottomCardBackground: "#00bda1",
    downloadTopCardBackground: "#00bda1",
    error: "#ff004d",
    generalBorder: "",
    generalBorderDim: "",
    menuItemBackground: "",
    modalBackdrop: "",
    modalBackdrop: "oklch(var(--b2))",
    modalBackground: "oklch(var(--b1))",
    modalBorder: "",
    modalText: "#e5e7eb",
    modalTextDim: "#e5e7eb",
    modalTextSecondary: "#e5e7eb",
    profileAction: "",
    profileActionHover: "",
    profileForeground: "",
    selectedOptionBorder: "",
    standby: "",
  },
  radii: {
    actionButton: "2px",
    connectButton: "2px",
    menuButton: "2px",
    modal: "2px",
    modalMobile: "2px",
  },
};

export function Providers({ children }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={customTheme}
          appInfo={{
            disclaimer: disclaimer,
          }}
          coolMode
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
