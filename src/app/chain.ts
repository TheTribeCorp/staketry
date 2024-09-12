import { defineChain } from 'thirdweb';

export const chain = defineChain({
  id: 56,
  name: "Binance Smart Chain",
  // @ts-ignore
  network: "bsc",
  rpcUrls: {
    default: {
      http: ["https://bsc-dataseed.binance.org/"],
      webSocket: ["wss://bsc-ws-node.nariox.org/"],
    },
    public: {
      http: ["https://bsc-dataseed1.ninicoin.io/"],
      webSocket: ["wss://bsc-ws-node.nariox.org/"],
    }
  },
  nativeCurrency: {
    name: "Binance Coin",
    symbol: "BNB",
    decimals: 18,
  },
  blockExplorers: {
    default: { name: "BscScan", url: "https://bscscan.com" }
  }
});