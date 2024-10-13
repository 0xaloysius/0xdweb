"use client";
import web3Onboard from "../context/web3onboard";
import { Web3OnboardProvider } from "@web3-onboard/react";
//import { ThemeProvider } from "next-themes";
//import { PushProvider } from "./providerspush";

export function ProvidersOnboard({ children }) {
  return (
    <Web3OnboardProvider web3Onboard={web3Onboard}>
      {children}
    </Web3OnboardProvider>
  );
}
