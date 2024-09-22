"use client";
//import web3Onboard from "../context/web3-onboard";
//import { Web3OnboardProvider, init } from "@web3-onboard/react";
import { ChatUIProvider, darkChatTheme } from "@pushprotocol/uiweb";
import { ethers } from "ethers";
import { ThemeProvider } from "next-themes";

export function Providers({ children }) {
  const account = "0x39660eEC3FBf0982ae11A1A0D4e69F4Aa79FCC31"; //process.env.DomainAccount;
  const env = "staging";
  return (
    //    <Web3OnboardProvider web3Onboard={web3Onboard}>
    <ChatUIProvider
      theme={darkChatTheme}
      signer={ethers}
      account={account}
      env={env}
    >
      <ThemeProvider defaultTheme="dweb">{children}</ThemeProvider>
    </ChatUIProvider>
    //  </Web3OnboardProvider>
  );
}
