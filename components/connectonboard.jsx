"use client";
import React, { useEffect, useState } from "react";

import { useConnectWallet, useWallets } from "@web3-onboard/react";
import { ethers } from "ethers";

export default function ConnectOnBoard() {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
  const [address, setAddress] = useState();
  const connectedWallets = useWallets();

  return (
    <div className="container">
      <button
        className="btn btn-primary font-bold"
        onClick={() => (wallet ? disconnect(wallet) : connect())}
      >
        {connecting ? "CONNECTING" : wallet ? "DISCONNECT" : "CONNECT"}
      </button>
    </div>
  );
}
