import React, { useEffect, useState } from "react";

import { useConnectWallet, useWallets } from "@web3-onboard/react";
import { ethers } from "ethers";

import Resolution from "@unstoppabledomains/resolution";

const resolution = new Resolution({
  sourceConfig: {
    uns: {
      locations: {
        Layer1: {
          url: "https://mainnet.infura.io/v3/{process.env.NEXT_PUBLIC_infuraID}",
          network: "mainnet",
        },
        Layer2: {
          url: "https://polygon-mainnet.infura.io/v3/{process.env.NEXT_PUBLIC_infuraID}",
          network: "polygon-mainnet",
        },
      },
    },
    zns: {
      url: "https://api.zilliqa.com",
      network: "mainnet",
    },
  },
});
export default function OnBoard() {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
  const [address, setAddress] = useState();
  const connectedWallets = useWallets();
  const [domain, setDomain] = useState();

  useEffect(() => {
    const Domain = async () => {
      const getdomain = await resolution.reverse(address);
      //setDomain(getDomain);
    };

    Domain();
  }, []);

  return (
    <div className="container">
      {wallet ? (
        <>
          {address}
          {domain}
        </>
      ) : (
        <>
          <button
            className="btn btn-primary font-bold"
            onClick={() => (wallet ? disconnect(wallet) : connect())}
          >
            {connecting ? "CONNECTING" : wallet ? "DISCONNECT" : "CONNECT"}
          </button>
        </>
      )}
    </div>
  );
}
