"use client";
import web3Onboard from "../context/web3onboard";
import { Web3OnboardProvider } from "@web3-onboard/react";
import { ChatUIProvider, darkChatTheme } from "@pushprotocol/uiweb";
import { ethers } from "ethers";
import { ThemeProvider } from "next-themes";

import { useEffect, useState } from "react";
import * as PushAPI from "@pushprotocol/restapi";
//import PushWidget from "components/pushwidget";   <PushWidget />
//import PushProfile from "components/pushprofile";
//import PushSupport from "components/pushsupport";

export function Providers({ children }) {
  const env = process.env.pushenv;
  const account = process.env.pushaccount;

  const [pvtKey, setPvtKey] = useState(null);
  const signer = { ethers };

  useEffect(() => {
    async () => {
      const user = await PushAPI.user.get({ account: account, env });
      //const pvtkey = null;
      if (user?.encryptedPrivateKey) {
        const response = await PushAPI.chat.decryptPGPKey({
          encryptedPGPPrivateKey: user.encryptedPrivateKey,
          account: { account },
          signer: { signer },
          env,
          toUpgrade: true,
        });
        setPvtKey(response);
      }
    };
  }, [account, env]);
  const onClose = () => {
    console.log("in here widget");
  };
  return (
    <Web3OnboardProvider web3Onboard={web3Onboard}>
      <ChatUIProvider
        theme={darkChatTheme}
        signer={signer}
        account={account}
        env={env}
        pgpPrivatekey={setPvtKey}
      >
        <ThemeProvider defaultTheme="dweb">{children}</ThemeProvider>
      </ChatUIProvider>
    </Web3OnboardProvider>
  );
}
