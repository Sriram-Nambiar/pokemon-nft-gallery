"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function NFTGallery() {
  const { publicKey } = useWallet();
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    if (!publicKey) return;

    const fetchNFTs = async () => {
      try {
        const res = await axios.get(
          `https://api.helius.xyz/v0/addresses/${publicKey.toString()}/nfts?12275c27-0315-4026-8606-fbfeadd0cb9e`
        );
        setNfts(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchNFTs();
  }, [publicKey]);

  if (!publicKey) return <p>Connect wallet to see NFTs</p>;

  return (
    <div>
      <h2>Your NFTs</h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
        {nfts.map((nft, i) => (
          <img
            key={i}
            src={nft.content.links.image}
            alt=""
            width={150}
            style={{ borderRadius: 10 }}
          />
        ))}
      </div>
    </div>
  );
}
