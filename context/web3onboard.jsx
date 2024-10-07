import injectedModule from "@web3-onboard/injected-wallets";
//import coinbaseModule from "@web3-onboard/coinbase";
import walletConnectModule from "@web3-onboard/walletconnect";
import uauthModule from "@web3-onboard/uauth";
import { init } from "@web3-onboard/react";
import unstoppableResolution from "@web3-onboard/unstoppable-resolution";
import Logo from "@/components/logo";
//import Resolution from '@unstoppabledomains/resolution';

// Example key • Replace with your infura key
const INFURA_KEY = process.env.NEXT_PUBLIC_infura_key;
const uauthOptions = {
  //const uauth = uauthModule({
  clientID: process.env.NEXT_PUBLIC_clientID,
  redirectUri: process.env.NEXT_PUBLIC_redirectUri,
  scope: "openid wallet messaging:notifications:optional",
  walletConnectProjectId: process.env.NEXT_PUBLIC_projectID,
};

const uauth = uauthModule(uauthOptions);

const injected = injectedModule({
  custom: [
    // include custom injected wallet modules here
  ],
  filter: {
    // mapping of wallet labels to filter here
  },
});

//const coinbase = coinbaseModule();

const wcInitOptions = {
  /**
   * Project ID associated with [WalletConnect account](https://cloud.walletconnect.com)
   */
  projectId: process.env.NEXT_PUBLIC_projectID,
  /**
   * Chains required to be supported by all wallets connecting to your DApp
   */
  requiredChains: [1],
  /**
   * Chains required to be supported by all wallets connecting to your DApp
   */
  optionalChains: [42161, 8453, 10, 137, 56],
  /**
   * Defaults to `appMetadata.explore` that is supplied to the web3-onboard init
   * Strongly recommended to provide atleast one URL as it is required by some wallets (i.e. MetaMask)
   * To connect with WalletConnect
   */
  dappUrl: "https://0xdweb.com",
};

const walletConnect = walletConnectModule(wcInitOptions);

const theme = {
  "--w3o-background-color": "#071417",
  "--w3o-foreground-color": "#242b29",
  "--w3o-text-color": "#e4cdcd",
  "--w3o-border-color": "#00bda1",
  "--w3o-action-color": "#00a3ed",
};

export default init({
  theme: theme,
  // An array of wallet modules that you would like to be presented to the user to select from when connecting a wallet.
  wallets: [uauth, injected, walletConnect],
  // An array of Chains that your app supports
  chains: [
    {
      // hex encoded string, eg '0x1' for Ethereum Mainnet
      id: "0x1",
      // string indicating chain namespace. Defaults to 'evm' but will allow other chain namespaces in the future
      namespace: "evm",
      // the native token symbol, eg ETH, BNB, MATIC
      token: "ETH",
      // used for display, eg Ethereum Mainnet
      label: "Ethereum Mainnet",
      // used for network requests
      rpcUrl: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
    },
    {
      id: "0x89",
      token: "MATIC",
      label: "Matic Mainnet",
      rpcUrl: "https://matic-mainnet.chainstacklabs.com",
    },
  ],
  unstoppableResolution,
  accountCenter: {
    desktop: {
      position: "topRight",
      enabled: true,
      minimal: true,
    },
    mobile: {
      position: "topRight",
      enabled: true,
      minimal: true,
    },
  },
  appMetadata: {
    // The name of your dApp
    name: "0xdweb",

    // SVG icon string, with height or width (whichever is larger) set to 100% or a valid image URL
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 174.7068132122973" ><g transform="matrix(8.113589761446026,0,0,8.113589761446026,-16.227171785169883,-42.67748400225941)" fill="#00a55F"><path d="M11 14.76 c0 1.38 -0.4 2.58 -1.1 3.48 l-0.76 -0.68 c0.56 -0.7 0.86 -1.66 0.86 -2.8 l0 -4.5 c0 -0.5 -0.06 -0.96 -0.14 -1.36 l-4.12 7.76 l-1.28 0.2 l4.88 -9.06 l-0.14 -0.24 c-0.66 -0.86 -1.56 -1.32 -2.7 -1.32 c-2.1 0 -3.5 1.62 -3.5 4.02 l0 4.5 c0 0.48 0.04 0.94 0.14 1.34 l0.2 -0.34 l3.9 -7.42 l1.26 -0.18 l-4.9 9 l0.14 0.24 c0.6 0.84 1.56 1.36 2.76 1.36 c0.9 0 1.7 -0.3 2.3 -0.86 l0.7 0.7 c-0.76 0.76 -1.8 1.14 -3 1.14 c-2.7 0 -4.5 -1.98 -4.5 -4.98 l0 -4.5 c0 -3 1.8 -5 4.5 -5 s4.5 2 4.5 5 l0 4.5 z M7.1 7.859999999999999 c-0.2 -0.06 -0.4 -0.12 -0.6 -0.12 c-0.54 0 -1 0.22 -1.3 0.56 l-0.74 -0.7 c0.48 -0.54 1.2 -0.84 2.04 -0.84 c0.8 0 1.56 0.3 2.04 0.84 z M4.84 8.7 c-0.2 0.4 -0.34 0.96 -0.34 1.56 l0 2.28 l-1 1.96 l0 -4.24 c0 -0.9 0.2 -1.7 0.6 -2.3 z M5.9 17.16 c0.2 0.04 0.4 0.1 0.6 0.1 c1.2 0 2 -1 2 -2.5 l0 -2.3 l1 -1.9 l0 4.2 c0 2.1 -1.2 3.48 -3 3.48 c-0.84 0 -1.56 -0.3 -2.04 -0.84 z M15.85 19.5 l3.96 -7 l-3.96 -7 l1.14 0 l3.36 6 l3.4 -6 l1.16 0 l-7.92 14 l-1.14 0 z M18.75 5.5 l2.2 3.96 l-0.54 1.04 l-2.82 -5 l1.16 0 z M25.509999999999998 19.5 l-3.42 -6 l-3.4 6 l-1.1 0 l7.92 -14 l1.14 0 l-3.96 7 l3.96 7 l-1.14 0 z M23.79 19.5 l-2.24 -4 l0.54 -0.94 l2.82 4.94 l-1.12 0 z" fill="#00a55F"/></g><g transform="matrix(2.6933436174089045,0,0,2.6933436174089045,23.266640956477737,122.18661267282366)" fill="#FFFFFF"><path d="M11.24 14.5 c0 1.4 -0.4 2.54 -1.04 3.4 l-0.76 -0.7 c0.5 -0.7 0.8 -1.6 0.8 -2.7 l0 -4 c0 -2.4 -1.4 -4 -3.5 -4 l-3.24 0 l0 10.5 l3.24 0 c1.2 0 2 -1 2 -2.5 l0 -4 c0 -1.5 -0.8 -2.5 -2 -2.5 l-1.38 0 l-1.02 -1 l2.4 0 c1.8 0 3 1.4 3 3.5 l0 4 c0 2.1 -1.2 3.5 -3 3.5 l-4.24 0 l0 -12.5 l4.24 0 c2.7 0 4.5 2 4.5 5 l0 4 z M4 7.359999999999999 l1 1.04 l0 8.1 l-1 0 l0 -9.14 z M6.74 18.5 c0.96 0 1.76 -0.34 2.36 -0.94 l0.76 0.74 c-0.82 0.76 -1.86 1.2 -3.12 1.2 l-4.24 0 l0 -1 l4.24 0 z M18.84 19.5 l-4.66 -14 l1.06 0 l3.6 10.8 l2.5 -7.54 l3.56 10.74 l-1.06 0 l-2.5 -7.56 z M16.8 5.5 l2.54 7.7 l-0.5 1.56 l-3.1 -9.26 l1.06 0 z M25.380000000000003 16.3 l3.6 -10.8 l1.06 0 l-4.66 14 l-3.54 -10.74 l1 0 z M27.439999999999998 5.5 l1.06 0 l-3.12 9.26 l-0.48 -1.56 z M20.4 19.5 l-1.06 0 l2 -6 l0.5 1.6 z M39.980000000000004 11.5 l0 1 l-5.5 0 l0 4.5 l6.5 0 l0 1 l-7.5 0 l0 -12.5 l7.5 0 l0 1 l-6.5 0 l0 5 l5.5 0 z M40.980000000000004 8 l-4.6 0 l-1.06 -1 l5.66 0 l0 1 z M34.980000000000004 7.359999999999999 l1 0.98 l0 2.66 l-1 0 l0 -3.64 z M39.980000000000004 14 l-3.6 0 l-1.06 -1 l4.66 0 l0 1 z M34.980000000000004 13.36 l1 0.98 l0 2.16 l-1 0 l0 -3.14 z M40.980000000000004 19.5 l-7.5 0 l0 -1 l7.5 0 l0 1 z M49.480000000000004 5.5 c2.4 0 4 1.6 4 4 c0 0.56 -0.1 1.1 -0.26 1.6 c-0.3 -0.2 -0.54 -0.4 -0.9 -0.54 c0.1 -0.3 0.16 -0.66 0.16 -1.06 c0 -1.8 -1.2 -3 -3 -3 l-3 0 l0 4 l3.5 0 s0.3 0 0.64 0.06 c0.2 -0.26 0.36 -0.66 0.36 -1.06 c0 -0.9 -0.6 -1.5 -1.5 -1.5 l-1.1 0 l-1.06 -1 l2.16 0 c1.5 0 2.5 1 2.5 2.5 c0 0.3 -0.04 0.56 -0.1 0.8 c-0.06 0.2 -0.1 0.36 -0.2 0.5 c1.76 0.54 2.8 2.1 2.8 4.2 c0 1.26 -0.4 2.3 -1.04 3.06 l-0.76 -0.72 c0.5 -0.6 0.8 -1.38 0.8 -2.34 c0 -2.1 -1.4 -3.5 -3.5 -3.5 l-3.5 0 l0 5.5 l3.5 0 c1.2 0 2 -0.8 2 -2 s-0.8 -2 -2 -2 l-1.6 0 l-1.06 -1 l2.66 0 c1.8 0 3 1.2 3 3 s-1.2 3 -3 3 l-4.5 0 l0 -12.5 l4 0 z M47.980000000000004 10 l-1 0 l0 -2.64 l1 0.98 l0 1.66 z M46.980000000000004 12.36 l1 1 l0 3.14 l-1 0 l0 -4.14 z M49.980000000000004 18.5 c0.94 0 1.74 -0.3 2.34 -0.8 l0.76 0.76 c-0.8 0.64 -1.86 1.04 -3.1 1.04 l-4.5 0 l0 -1 l4.5 0 z" fill="#FFFFFF"/></g></svg>`,
    // Optional wide format logo (ie icon and text) to be displayed in the sidebar of connect modal. Defaults to icon if not provided
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 174.7068132122973" ><g transform="matrix(8.113589761446026,0,0,8.113589761446026,-16.227171785169883,-42.67748400225941)" fill="#00a55F"><path d="M11 14.76 c0 1.38 -0.4 2.58 -1.1 3.48 l-0.76 -0.68 c0.56 -0.7 0.86 -1.66 0.86 -2.8 l0 -4.5 c0 -0.5 -0.06 -0.96 -0.14 -1.36 l-4.12 7.76 l-1.28 0.2 l4.88 -9.06 l-0.14 -0.24 c-0.66 -0.86 -1.56 -1.32 -2.7 -1.32 c-2.1 0 -3.5 1.62 -3.5 4.02 l0 4.5 c0 0.48 0.04 0.94 0.14 1.34 l0.2 -0.34 l3.9 -7.42 l1.26 -0.18 l-4.9 9 l0.14 0.24 c0.6 0.84 1.56 1.36 2.76 1.36 c0.9 0 1.7 -0.3 2.3 -0.86 l0.7 0.7 c-0.76 0.76 -1.8 1.14 -3 1.14 c-2.7 0 -4.5 -1.98 -4.5 -4.98 l0 -4.5 c0 -3 1.8 -5 4.5 -5 s4.5 2 4.5 5 l0 4.5 z M7.1 7.859999999999999 c-0.2 -0.06 -0.4 -0.12 -0.6 -0.12 c-0.54 0 -1 0.22 -1.3 0.56 l-0.74 -0.7 c0.48 -0.54 1.2 -0.84 2.04 -0.84 c0.8 0 1.56 0.3 2.04 0.84 z M4.84 8.7 c-0.2 0.4 -0.34 0.96 -0.34 1.56 l0 2.28 l-1 1.96 l0 -4.24 c0 -0.9 0.2 -1.7 0.6 -2.3 z M5.9 17.16 c0.2 0.04 0.4 0.1 0.6 0.1 c1.2 0 2 -1 2 -2.5 l0 -2.3 l1 -1.9 l0 4.2 c0 2.1 -1.2 3.48 -3 3.48 c-0.84 0 -1.56 -0.3 -2.04 -0.84 z M15.85 19.5 l3.96 -7 l-3.96 -7 l1.14 0 l3.36 6 l3.4 -6 l1.16 0 l-7.92 14 l-1.14 0 z M18.75 5.5 l2.2 3.96 l-0.54 1.04 l-2.82 -5 l1.16 0 z M25.509999999999998 19.5 l-3.42 -6 l-3.4 6 l-1.1 0 l7.92 -14 l1.14 0 l-3.96 7 l3.96 7 l-1.14 0 z M23.79 19.5 l-2.24 -4 l0.54 -0.94 l2.82 4.94 l-1.12 0 z" fill="#00a55F"/></g><g transform="matrix(2.6933436174089045,0,0,2.6933436174089045,23.266640956477737,122.18661267282366)" fill="#FFFFFF"><path d="M11.24 14.5 c0 1.4 -0.4 2.54 -1.04 3.4 l-0.76 -0.7 c0.5 -0.7 0.8 -1.6 0.8 -2.7 l0 -4 c0 -2.4 -1.4 -4 -3.5 -4 l-3.24 0 l0 10.5 l3.24 0 c1.2 0 2 -1 2 -2.5 l0 -4 c0 -1.5 -0.8 -2.5 -2 -2.5 l-1.38 0 l-1.02 -1 l2.4 0 c1.8 0 3 1.4 3 3.5 l0 4 c0 2.1 -1.2 3.5 -3 3.5 l-4.24 0 l0 -12.5 l4.24 0 c2.7 0 4.5 2 4.5 5 l0 4 z M4 7.359999999999999 l1 1.04 l0 8.1 l-1 0 l0 -9.14 z M6.74 18.5 c0.96 0 1.76 -0.34 2.36 -0.94 l0.76 0.74 c-0.82 0.76 -1.86 1.2 -3.12 1.2 l-4.24 0 l0 -1 l4.24 0 z M18.84 19.5 l-4.66 -14 l1.06 0 l3.6 10.8 l2.5 -7.54 l3.56 10.74 l-1.06 0 l-2.5 -7.56 z M16.8 5.5 l2.54 7.7 l-0.5 1.56 l-3.1 -9.26 l1.06 0 z M25.380000000000003 16.3 l3.6 -10.8 l1.06 0 l-4.66 14 l-3.54 -10.74 l1 0 z M27.439999999999998 5.5 l1.06 0 l-3.12 9.26 l-0.48 -1.56 z M20.4 19.5 l-1.06 0 l2 -6 l0.5 1.6 z M39.980000000000004 11.5 l0 1 l-5.5 0 l0 4.5 l6.5 0 l0 1 l-7.5 0 l0 -12.5 l7.5 0 l0 1 l-6.5 0 l0 5 l5.5 0 z M40.980000000000004 8 l-4.6 0 l-1.06 -1 l5.66 0 l0 1 z M34.980000000000004 7.359999999999999 l1 0.98 l0 2.66 l-1 0 l0 -3.64 z M39.980000000000004 14 l-3.6 0 l-1.06 -1 l4.66 0 l0 1 z M34.980000000000004 13.36 l1 0.98 l0 2.16 l-1 0 l0 -3.14 z M40.980000000000004 19.5 l-7.5 0 l0 -1 l7.5 0 l0 1 z M49.480000000000004 5.5 c2.4 0 4 1.6 4 4 c0 0.56 -0.1 1.1 -0.26 1.6 c-0.3 -0.2 -0.54 -0.4 -0.9 -0.54 c0.1 -0.3 0.16 -0.66 0.16 -1.06 c0 -1.8 -1.2 -3 -3 -3 l-3 0 l0 4 l3.5 0 s0.3 0 0.64 0.06 c0.2 -0.26 0.36 -0.66 0.36 -1.06 c0 -0.9 -0.6 -1.5 -1.5 -1.5 l-1.1 0 l-1.06 -1 l2.16 0 c1.5 0 2.5 1 2.5 2.5 c0 0.3 -0.04 0.56 -0.1 0.8 c-0.06 0.2 -0.1 0.36 -0.2 0.5 c1.76 0.54 2.8 2.1 2.8 4.2 c0 1.26 -0.4 2.3 -1.04 3.06 l-0.76 -0.72 c0.5 -0.6 0.8 -1.38 0.8 -2.34 c0 -2.1 -1.4 -3.5 -3.5 -3.5 l-3.5 0 l0 5.5 l3.5 0 c1.2 0 2 -0.8 2 -2 s-0.8 -2 -2 -2 l-1.6 0 l-1.06 -1 l2.66 0 c1.8 0 3 1.2 3 3 s-1.2 3 -3 3 l-4.5 0 l0 -12.5 l4 0 z M47.980000000000004 10 l-1 0 l0 -2.64 l1 0.98 l0 1.66 z M46.980000000000004 12.36 l1 1 l0 3.14 l-1 0 l0 -4.14 z M49.980000000000004 18.5 c0.94 0 1.74 -0.3 2.34 -0.8 l0.76 0.76 c-0.8 0.64 -1.86 1.04 -3.1 1.04 l-4.5 0 l0 -1 l4.5 0 z" fill="#FFFFFF"/></g></svg>`,
    // The description of your app
    description: "WEB3 & Messaging",
    // The url to a getting started guide for app
    gettingStartedGuide: "/getting-started",
    // url that points to more information about app
    explore: "/about",
    // if your app only supports injected wallets and when no injected wallets detected, recommend the user to install some
    recommendedInjectedWallets: [
      {
        // display name
        name: "MetaMask",
        // link to download wallet
        url: "https://metamask.io",
      },
      { name: "Coinbase", url: "https://wallet.coinbase.com/" },
    ],
    // Optional - but allows for dapps to require users to agree to TOS and privacy policy before connecting a wallet
    agreement: {
      version: "1.0.0",
      termsUrl: "https://0xdweb.com/terms",
      privacyUrl: "https://0xdweb.com/privacy",
    },
  },
  // example customising copy
  // i18n: {
  //   en: {
  //     connect: {
  //       selectingWallet: {
  //         header: 'custom text header'
  //       }
  //     }
  //   }
  // }
});
