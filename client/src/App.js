import { useState, useEffect } from "react";
import { ethers } from "ethers";
import './App.css';

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  
  const [contract, setContract] = useState(null);
  const [address, setAddress] = useState(null);

  const [Name, setName] = useState(null);
  const [Symbol, setTokenSymbol] = useState(null);
  const [totalSupply, setTotalSupply] = useState(null);
  const [Decimals, setDecimal] = useState(null);
  const [balanceOf, setBalanceOf] = useState(null);
  const [Allowance, setAllowance] = useState(null);
  

useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0xEc005D64fAbCf502EB95BBdfDD0a2567Bf5904f9";
      const contractABI = [
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "_burn",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "_mint",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            }
          ],
          "name": "allowance",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "approve",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "balanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "decimals",
          "outputs": [
            {
              "internalType": "uint8",
              "name": "",
              "type": "uint8"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "subtractedValue",
              "type": "uint256"
            }
          ],
          "name": "decreaseAllowance",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "addedValue",
              "type": "uint256"
            }
          ],
          "name": "increaseAllowance",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "name",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "symbol",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "totalSupply",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "transfer",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "transferFrom",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ];
      try {
        const { ethereum } = window;

        if (ethereum) {
          const account = await ethereum.request({method: "eth_requestAccounts",});

          window.ethereum.on("chainChanged", () => {     //If chain is changed then reload the brower.
            window.location.reload();
          });

          window.ethereum.on("accountsChanged", () => {     ////If metamask account is changed then reload the brower.
            window.location.reload();
          });

          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(contractAddress, contractABI, signer);

          setContract(contract);

          setState({provider, signer, contract});
          
        } else {
          alert("Please install metamask");
        }
      } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  }, []);
  console.log(state);
  

  // useEffect(() => {
  //   const getContractFunction = async () => {
  //     const totalSupply = await contract.totalSupply();
  //     console.log("totalSupply:", String(totalSupply));

  //     // const totalSupply = ethers.utils.formatEther(totalSupplyy);
  //     // console.log("totalSupply:",totalSupply);

  //     setTotalSupply(String(totalSupply));

  //   };
    
  //   contract && getContractFunction();
  // },[contract]);



  const getName = async () => {
    const Name = await contract.name();
    console.log("Name:", Name);
 
    setName(Name);
  }

  const getTokenSymbol = async () => {
    const Symbol = await contract.symbol();
    console.log("Symbol:", Symbol);

    setTokenSymbol(Symbol);
  }

  const getDecimal = async () => {
    const Decimals = await contract.decimals();
    console.log("Decimals:", Decimals);

    setDecimal(Decimals);
  }

  const getTotalSupply = async () => {
    const totalSupplyy = await contract.totalSupply();
    // console.log("totalSupply:", totalSupply);
    const totalSupply = ethers.utils.formatEther(totalSupplyy);
    console.log("totalSupply:",totalSupply);

    setTotalSupply(totalSupply);
  }


  const getContractBalanceOfFunction = async () => {
    const addressBalance = document.querySelector("#address").value;

    const balanceOff = await contract.balanceOf(addressBalance);
    const balanceOf = ethers.utils.formatEther(balanceOff);
    console.log("balanceOf:", balanceOf);

    setBalanceOf(balanceOf);
  }


  const getContractTransferFunction = async () => {
    const transferAddress = document.querySelector("#transferAddress").value;
    const transferAmountt = document.querySelector("#transferAmount").value;
    const transferAmount = ethers.utils.parseEther(transferAmountt);

    const transfer = await contract.transfer(transferAddress, transferAmount);
    // console.log("transfer:", transfer);

    setTimeout(function () {
      window.location.reload(1);
    }, 10);
    setTimeout();

  }


  const getContractMintFunction = async () => {
    const mintAddress = document.querySelector("#mintAddress").value;
    const mintAmountt = document.querySelector("#mintAmount").value;
    const mintAmount = ethers.utils.parseEther(mintAmountt);

    const mint = await contract._mint(mintAddress, mintAmount);
    // console.log("Mint:", mint);

    setTimeout(function () {
      window.location.reload(1);
    }, 10);
    setTimeout();

  }


  const getContractBurnFunction = async () => {
    const burnAddress = document.querySelector("#burnAddress").value;
    const burnAmountt = document.querySelector("#burnAmount").value;
    const burnAmount = ethers.utils.parseEther(burnAmountt);

    const burn = await contract._burn(burnAddress, burnAmount);
    // console.log("Burn:", burn);

    setTimeout(function () {
      window.location.reload(1);
    }, 10);
    setTimeout();

  }


  const getContractApproveFunction = async () => {
    const spenderAddress = document.querySelector("#spenderAddress").value;
    const Amountt = document.querySelector("#Amount").value;
    const Amount = ethers.utils.parseEther(Amountt);

    const approve = await contract.approve(spenderAddress, Amount);
    // console.log("Approve:", approve);

    setTimeout(function () {
      window.location.reload(1);
    }, 10);
    setTimeout();

  }


  const getContractAllowanceFunction = async () => {
    const ownerAddress = document.querySelector("#ownerAddress").value;
    const spenderAddress = document.querySelector("#spenderAddresss").value;

    const allowancee = await contract.allowance(ownerAddress, spenderAddress);
    const allowance = ethers.utils.formatEther(allowancee);
    // console.log("Allowance:", allowance);

    setAllowance(allowance);

    // setTimeout(function () {
    //   window.location.reload(1);
    // }, 10);
    // setTimeout();

  }


  const getContractTransferFromFunction = async () => {
    const fromAddress = document.querySelector("#fromAddress").value;
    const toAddress = document.querySelector("#toAddress").value;
    const Amountt = document.querySelector("#Amountt").value;
    const Amount = ethers.utils.parseEther(Amountt);

    const approve = await contract.transferFrom(fromAddress, toAddress, Amount);

    setTimeout(function () {
      window.location.reload(1);
    }, 10);
    setTimeout();

  }


  const getContractIncreaseAllowanceFromFunction = async () => {
    const spenderAddressss = document.querySelector("#spenderAddressss").value;
    const addedValue = document.querySelector("#addedValue").value;
    const Amount = ethers.utils.parseEther(addedValue);

    const approve = await contract.increaseAllowance(spenderAddressss, Amount);

    setTimeout(function () {
      window.location.reload(1);
    }, 10);
    setTimeout();

  }


  const getContractDecreaseAllowanceFromFunction = async () => {
    const spenderAddressss = document.querySelector("#spenderAddresssss").value;
    const subtractedValue = document.querySelector("#subtractedValue").value;
    const Amount = ethers.utils.parseEther(subtractedValue);

    const approve = await contract.decreaseAllowance(spenderAddressss, Amount);

    setTimeout(function () {
      window.location.reload(1);
    }, 10);
    setTimeout();

  }



  return (
    <div className="App">
      <div class="titlee">
      <div class="title"><h1>ERC20 Token</h1></div>
      <div class="subtitle"><h3>Interact with our ERC20 Token Dapp!</h3></div>
      </div>
      <br></br>
      <br></br>
      
      <div class="func">
      <button type="button" onClick={getName} className="btn btn-primary" id="myBtn" disabled = {!contract}>Name:</button> <span>{Name}</span>
      <br></br>
      <br></br>
      <button type="button" onClick={getTokenSymbol} className="btn btn-primary" id="myBtn" disabled = {!contract}>Symbol:</button> <span>{Symbol}</span>
      <br></br>
      <br></br>
      <button type="button" onClick={getDecimal} className="btn btn-primary" id="myBtn" disabled = {!contract}>Decimal:</button> <span>{Decimals}</span>
      <br></br>
      <br></br>
      <button type="button" onClick={getTotalSupply} className="btn btn-primary" id="myBtn" disabled = {!contract}>totalSupply:</button> <span>{totalSupply}</span>
      <br></br>
      <br></br>
      <button type="button" className="btn btn-primary" id="myBtn" onClick={getContractBalanceOfFunction} disabled = {!contract}> balanceOf: </button>

      <input type="text" placeholder="_address" className="address" id="address"></input>
      <br></br>
      <p>Balance: {balanceOf}</p>
      
      <button type="button" className="btn btn-primary" id="myBtn" onClick={getContractTransferFunction} disabled = {!contract}> Transfer: </button>
      <input type="text" placeholder="to _address" className="address" id="transferAddress"></input>
      <br></br>
      <input type="text" placeholder="amount _uint256" className="amount" id="transferAmount"></input>
      <br></br>
      <br></br>
      <button type="button" className="btn btn-primary" id="myBtn" onClick={getContractMintFunction} disabled = {!contract}> Mint: </button>
      <input type="text" placeholder="mint _address" className="address" id="mintAddress"></input>
      <br></br>
      <input type="text" placeholder="amount _uint256" className="amount" id="mintAmount"></input>
      <br></br>
      <br></br>
      <button type="button" className="btn btn-primary" id="myBtn" onClick={getContractBurnFunction} disabled = {!contract}> Burn: </button>
      <input type="text" placeholder="burn _address" className="address" id="burnAddress"></input>
      <br></br>
      <input type="text" placeholder="amount _uint256" className="amount" id="burnAmount"></input>

      <br></br>
      <br></br>
      <button type="button" className="btn btn-primary" id="myBtn" onClick={getContractApproveFunction} disabled = {!contract}> Approve: </button>
      <input type="text" placeholder="spender _address" className="address" id="spenderAddress"></input>
      <br></br>
      <input type="text" placeholder="amount _uint256" className="amount" id="Amount"></input>
      <br></br>
      <br></br>
      <button type="button" className="btn btn-primary" id="myBtn" onClick={getContractAllowanceFunction} disabled = {!contract}> Allowance: </button>
      <input type="text" placeholder="owner _address" className="address" id="ownerAddress"></input>
      <br></br>
      <input type="text" placeholder="spender _address" className="amount" id="spenderAddresss"></input>
      <br></br>
      <p>Allowance: {Allowance}</p>
      <button type="button" className="btn btn-primary" id="myBtn" onClick={getContractTransferFromFunction} disabled = {!contract}> transferFrom: </button>
      <input type="text" placeholder="from _address" className="address" id="fromAddress"></input>
      <br></br>
      <input type="text" placeholder="to _address" className="address" id="toAddress"></input>
      <br></br>
      <input type="text" placeholder="amount _uint256" className="amount" id="Amountt"></input>
      <br></br>
      <br></br>
      <br></br>
      <button type="button" className="btn btn-primary" id="myBtn" onClick={getContractIncreaseAllowanceFromFunction} disabled = {!contract}> increaseAllowance: </button>
      <input type="text" placeholder="spender _address" className="address" id="spenderAddressss"></input>
      <br></br>
      <input type="text" placeholder="addedValue _uint256" className="address" id="addedValue"></input>
      <br></br>
      <br></br>
      <button type="button" className="btn btn-primary" id="myBtn" onClick={getContractDecreaseAllowanceFromFunction} disabled = {!contract}> decreaseAllowance: </button>
      <input type="text" placeholder="spender _address" className="address" id="spenderAddresssss"></input>
      <br></br>
      <input type="text" placeholder="subtractedValue _uint256" className="address" id="subtractedValue"></input>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      </div>
      
      
    </div>
  );
}


export default App;