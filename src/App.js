import logo from "./logo.svg";
import "./App.css";
import Web3 from "web3";
import { useEffect, useState } from "react";
import detectETHProvider from "@metamask/detect-provider";
function App() {
  const [web3api, setWeb3Api] = useState({
    provider: null,
    web3: null,
  });
  const [account, setAccount] = useState(null);

  useEffect(() => {
    const getAccount = async () => {
      const address = await web3api.web3.eth.getAccounts();
      setAccount(address[0]);
      return account;
    };
    getAccount();
  }, [web3api.web3]);

  const connectMetaMast = async () => {
    if (!web3api.provider) {
      const provider = await detectETHProvider();
      provider.request({ method: "eth_requestAccounts" });
      setWeb3Api({
        provider,
        web3: new Web3(provider),
      });
    } else {
      alert("You connected");
    }
  };

  return (
    <div className="App">
      <h1>
        Account:
        {account ? account : "Require login"}
      </h1>
      <h1>Current balance : 10 ETH</h1>
      <button>Donate</button>
      <button>WithDraw</button>
      <button onClick={connectMetaMast}> Connect to wallets</button>
    </div>
  );
}

export default App;
