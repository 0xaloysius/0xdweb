"use client";
import web3Onboard from "../context/web3onboard";
import { Web3OnboardProvider } from "@web3-onboard/react";
import { ThemeProvider } from "next-themes";
import { PushProvider } from "./pushprovider";
export function Providers({ children }) {
  return (
    <Web3OnboardProvider web3Onboard={web3Onboard}>
      <PushProvider>
        <ThemeProvider defaultTheme="dweb">{children}</ThemeProvider>
      </PushProvider>
    </Web3OnboardProvider>
  );
}
