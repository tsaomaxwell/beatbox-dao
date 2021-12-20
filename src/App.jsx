import { useEffect, useMemo, useState } from "react";
import { useWeb3 } from "@3rdweb/hooks";

const App = () => {
  const { connectWallet, address, error, provider } = useWeb3();
  console.log("Address:", address);
  if(!address){
    return (
      <div className="landing">
        <h1>Welcome to BeatboxDAO</h1>
        <button onClick={() => connectWallet("injected")} className="btn-hero">
          Connect your wallet
        </button>
      </div>
    );
  }
  return (
    <div className="landing">
      <h1>(s) B t (pf)</h1>
    </div>
  );
};

export default App;
