"use client";

import React, { useEffect, useState } from "react";

import { useConnectWallet, useWallets } from "@web3-onboard/react";
import { ethers } from "ethers";
//import PushProfile from "./pushprofile"; //<PushProfile />
import PushWidget from "./pushwidget"; //<PushWidget />

export default function HeaderLogin() {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
  const [address, setAddress] = useState();
  const connectedWallets = useWallets();

  const [signer, setSigner] = useState(null);

  const connectWallet = async () => {
    const signer = { ethers };
    connect();
    // store signer
    setSigner(signer);
  };

  const disconnectWallet = async () => {
    setSigner(null);
  };

  return (
    <>
      {signer ? <PushWidget /> : <></>}
      <div
        className="btn btn-primary btn-wide font-bold"
        disabled={connecting}
        onClick={signer ? disconnectWallet : connectWallet}
      >
        {signer ? "Disconnect" : "Connect To Chat"}
      </div>
    </>
  );
}

{
  /*    <div
className="btn btn-primary btn-wide font-bold"
disabled={connecting}
onClick={signer ? disconnectWallet : connectWallet}
>
{signer ? "Disconnect wallet" : "Connect Wallet"}
</div>
*/
}
