"use client";
import React, { useEffect, useState } from "react";
import * as PushAPI from "@pushprotocol/restapi";
import { IUser } from "@pushprotocol/restapi";

export default function Push() {
  const librarySigner = library.getSigner();
  const [pvtKey, setPvtKey] = useState();
  useEffect(() => {
    async () => {
      const user = await PushAPI.user.get({ account: account, env });
      const pvtkey = null;
      if (user?.encryptedPrivateKey) {
        const response = await PushAPI.chat.decryptPGPKey({
          encryptedPGPPrivateKey: user.encryptedPrivateKey,
          account: account,
          signer: librarySigner,
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
    <div>
      <div className="py-2">
        <ChatWidget
          chatId="0x39660eEC3FBf0982ae11A1A0D4e69F4Aa79FCC31"
          decryptedPgpPvtKey={pvtKey}
          welcomeComponent="Welcome"
        />
      </div>
      <div className="py-2">
        <ChatView
          chatId="0x39660eEC3FBf0982ae11A1A0D4e69F4Aa79FCC31" //"b8e068e02fe12d7136bc2f24408835573f30c6fbf0b65ea26ab4c7055a2c85f1"
          decryptedPgpPvtKey={pvtKey}
          limit={10}
          isConnected={true}
          // verificationFailModalPosition={MODAL_POSITION_TYPE.RELATIVE}
        />
      </div>
    </div>
  );
}
