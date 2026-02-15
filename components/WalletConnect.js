"use client";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function WalletConnect() {
  return (
    <div style={{ padding: 40 }}>
      <WalletMultiButton />
    </div>
  );
}
