"use client";
import { useState } from "react";
import { SupportChat } from "@pushprotocol/uiweb";
import { ethers } from "ethers";
import { useConnectWallet, useWallets } from "@web3-onboard/react";
export default function PushSupport() {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
  const [address, setAddress] = useState();
  const connectedWallets = useWallets();
  const supportaddress =
    process.env.pushaddress || "0x283A6f1D0974e10c20047480dA08FB2874911504";
  const env = process.env.pushenv || "staging";
  const signer = { ethers };
  const theme = {
    bgColorPrimary: "#242b29",
    bgColorSecondary: "#242bff",
    textColorPrimary: "white",
    textColorSecondary: "black",
    btnColorPrimary: "#00bda1",
    btnColorSecondary: "#00ffdd",
    border: "1px solid #00bda1",
    borderRadius: "40px",
    moduleColor: "#242b29",
  };
  return (
    <SupportChat
      supportAddress="0x283A6f1D0974e10c20047480dA08FB2874911504"
      account={connectedWallets.address}
      env="dev"
      signer={signer}
      theme={theme}
      modalTitle="WEB3 MESSAGING"
      greetingMsg="CONNECT WITH US"
    />
  );
}
