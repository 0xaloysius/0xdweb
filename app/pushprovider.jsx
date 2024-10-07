"use client";
import { useEffect, useState } from "react";
import { ChatUIProvider, ChatWidget, darkChatTheme } from "@pushprotocol/uiweb";
import { ethers } from "ethers";
import { useConnectWallet, useWallets } from "@web3-onboard/react";

import { PushAPI, CONSTANTS } from "@pushprotocol/restapi";
//import PushWidget from "components/pushwidget";
//import PushProfile from "components/pushprofile";
//import PushSupport from "components/pushsupport";

export function PushProvider({ children }) {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
  const [address, setAddress] = useState();
  const connectedWallets = useWallets();
  const [walletstatus, setWalletStatus] = useState();
  const pushchatid =
    //process.env.pushchatid ||
    "0x283A6f1D0974e10c20047480dA08FB2874911504";

  const env = process.env.pushenv;
  const account = CONSTANTS.ENV.STAGING;

  const [pvtKey, setPvtKey] = useState(null);
  const signer = { ethers };

  useEffect(() => {
    async () => {
      const user = await PushAPI.user.get({ account: account, env });
      // Initialize wallet user
      //const user0x =  PushAPI.initialize(signer, {env: process.env.pushenv,});
      // Initialize Stream
      const stream = await user.initStream([
        CONSTANTS.STREAM.CHAT, // Listen for chat messages
        CONSTANTS.STREAM.NOTIF, // Listen for notifications
        CONSTANTS.STREAM.CONNECT, // Listen for connection events
        CONSTANTS.STREAM.DISCONNECT, // Listen for disconnection events
      ]);
      // Configure stream listen events and what to do
      stream.on(CONSTANTS.STREAM.CHAT, (message) => {
        console.log(message);
      });

      // Connect Stream
      await stream.connect();
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
        setWalletStatus(disconnect);
      }
    };
  }, [account, env]);
  const onClose = () => {
    console.log("in here widget");
  };
  return (
    <ChatUIProvider
      theme={darkChatTheme}
      signer={signer}
      account={account}
      env={env}
      pgpPrivatekey={setPvtKey}
    >
      {children}
      <ChatWidget
        chatId={pushchatid}
        modalTitle="Powered By Push Protocol"
        welcomeComponent="WEB3 Messaging"
      />
    </ChatUIProvider>
  );
}
