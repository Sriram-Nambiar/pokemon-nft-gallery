import WalletConnect from "../components/WalletConnect";
import NFTGallery from "../components/NFTGallery";

export default function Home() {
  return (
    <main style={{ padding: 40 }}>
      <h1>NFT Dashboard</h1>

      <WalletConnect />

      <NFTGallery />
    </main>
  );
}
