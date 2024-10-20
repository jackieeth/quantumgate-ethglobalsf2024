let characterCount = 0;
let word = "";
const eth = window.ethereum;
const initGate = async () => {
  document.body.style =
    "overflow: hidden;margin: 0 !important;padding: 0 !important;background-color: black;";

  const atomDiv = document.createElement("div");
  atomDiv.setAttribute("id", "atomView");
  const overlayDiv = document.createElement("div");
  overlayDiv.setAttribute("id", "overlay0");
  overlayDiv.style =
    "position: absolute;width: 100% !important;height: 100% !important;display: block;z-index: 9;";

  const svgDiv = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgDiv.setAttribute("width", "100%");
  svgDiv.setAttribute("height", "100%");
  svgDiv.setAttribute("viewBox", "0 0 4096 4096");

  const anim5Div = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "animateTransform",
  );
  anim5Div.setAttribute("attributeType", "xml");
  anim5Div.setAttribute("attributeName", "transform");
  anim5Div.setAttribute("type", "translate");
  anim5Div.setAttribute("values", "0,0; 0,-5; 0,0; 0,5; 0,0");
  anim5Div.setAttribute("keyTimes", "0; 0.25; 0.5; 0.75; 1");
  anim5Div.setAttribute("dur", "1s");
  anim5Div.setAttribute("repeatCount", "indefinite");
  anim5Div.setAttribute("calcMode", "spline");
  anim5Div.setAttribute(
    "keySplines",
    ".42 0 .58 1; .42 0 .58 1; .42 0 .58 1; .42 0 .58 1",
  );

  const g4Div = document.createElementNS("http://www.w3.org/2000/svg", "g");
  g4Div.setAttribute("transform", "translate(0 0) scale(8 8)");
  g4Div.setAttribute("fill", "#FEFFFE");

  const path8Div = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path",
  );
  path8Div.setAttribute(
    "d",
    "M379 310.002C379 378.237 324.186 419 256.553 419C188.919 419 141.841 378.68 133 327.282H195.329C202.181 346.778 224.504 360.956 256.553 360.956C292.137 360.956 317.776 343.012 317.776 311.11C317.776 279.208 292.801 262.814 256.332 262.814V307.787C187.593 307.787 134.989 268.796 134.989 203.663C134.989 138.53 185.604 94 256.774 94C324.186 94 370.601 134.099 375.243 183.502H315.124C310.261 165.779 290.59 152.265 258.1 152.265C218.536 152.265 196.655 170.653 196.655 201.89C196.655 233.127 221.852 248.192 256.332 248.192V201.004C331.038 201.004 379 245.755 379 310.002Z",
  );

  const anim7Div = anim5Div.cloneNode(true);

  // story
  g4Div.append(path8Div);
  path8Div.append(anim7Div);

  svgDiv.append(g4Div);

  overlayDiv.append(svgDiv);
  atomDiv.append(overlayDiv);
  const canvasDiv = document.createElement("canvas");
  canvasDiv.setAttribute("id", "atomCanvas");
  atomDiv.append(canvasDiv);
  document.body.appendChild(atomDiv);

  document.getElementById("atomCanvas").width = window.innerWidth;
  document.getElementById("atomCanvas").height = window.innerHeight;

  if (eth) {
    const proxyjs0 = await fetch(
      `${serverUrl}/content/10d92ec11b31ea21752ac46781d109bcf53bba04ae9b1044747057335c77ef9ci0`,
    );

    const scriptDiv0 = document.createElement("script");
    scriptDiv0.innerHTML = await proxyjs0.text();
    document.body.appendChild(scriptDiv0);

    if (
      window.fullScreen ||
      window.innerWidth == screen.width ||
      window.innerWidth >= 1024
    ) {
      setTimeout(() => {
        setup();
      }, 2000);
    }
  }
};

const setup = async () => {
  let ethAddress = "";
  let ethSigner;
  const quantumMsg = `Forging a Mithril Key to unlock the Quantum Gate...`;

  function toHex(str) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
      result += str.charCodeAt(i).toString(16);
    }
    return result;
  }

  const signEth = async () => {
    try {
      const from = ethAddress;
      const msg = toHex(quantumMsg);
      const signedData = await eth.request({
        method: "personal_sign",
        params: [msg, from],
      });
      return signedData;
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  const connectEth = async () => {
    document.getElementById("overlay0").style.display = "none";
    const accounts = await eth // Or window.ethereum if you don't support EIP-6963.
      .request({ method: "eth_requestAccounts" })
      .catch((err) => {
        if (err.code === 4001) {
          // EIP-1193 userRejectedRequest error.
          // If this happens, the user rejected the connection request.
          console.log("Please connect to MetaMask.");
        } else {
          document.getElementById("btnEth").style.display = "";
          console.error(err);
        }
      });
    // await switchToStory();

    ethAddress = accounts[0];
    console.log("ethAddress", ethAddress);
    document.getElementById("info0").innerHTML = ``;
    document.getElementById("infoEth").innerHTML =
      `<p style="color: #999999">ETH Address: ${ethAddress}<br/><br/><span style="color: white">${quantumMsg}</span></p>`;
    document.getElementById("btnEth").style.display = "none";
    const provider = new ethers.BrowserProvider(window.ethereum);
    const chainIdBigInt = (await provider.getNetwork()).chainId;
    const chainId = Number(chainIdBigInt);
    console.log("chainId", chainId);

    if (chainId !== 1513) {
      document.getElementById("btnEth").style.display = "";
      await switchToStory();
      location.reload();
    }

    const signer = await provider.getSigner();
    ethSigner = signer;

    const signedData = await signEth();
    console.log("signedData", signedData);
    const sig = Signature.from(signedData);
    console.log("r", sig.r);
    console.log("s", sig.s);
    console.log("v", sig.v);
    const recoveredAddress = ethers.verifyMessage(
      toHex(quantumMsg),
      signedData,
    );
    console.log("Recovered Address:", recoveredAddress);

    const VerifySigContractAddress =
      "0x9385A660b79D451e61D7A16Aa5cB7E1a65817e4f";
    const VerifySigContract = new ethers.Contract(
      VerifySigContractAddress,
      [
        "function unlock(string message, uint8 v, bytes32 r, bytes32 s) public returns ()",
      ],
      ethSigner,
    );

    const tx = await VerifySigContract.unlock(
      toHex(quantumMsg),
      sig.v,
      sig.r,
      sig.s,
    );
    if (tx && tx.hash) {
      console.log("tx hash", tx.hash);
      document.getElementById("infoEth").innerHTML =
        `<p style="color: #999999">Verifying signed messages...<br/>Minting an IP licensing token via Story Protocol (Iliad testnet)<br/>Just a moment...</p>`;
      await tx.wait();
      document.getElementById("infoEth").innerHTML =
        `<p style="color: #999999">TX: ${tx.hash} via Story Protocol (Iliad testnet)<br/><br/><b style="color: white">You unlocked the Quantum Gate!</b></p>`;
      console.log("done");
    }
  };

  const ordOsDiv = document.createElement("div");
  ordOsDiv.setAttribute("id", "ordOsDiv0");

  ordOsDiv.style =
    "color: white; position: absolute;width: 100% !important;z-index: 999;top: 0px;font-family: system-ui;margin: 0px; padding: 0px";
  document.getElementById("atomView").appendChild(ordOsDiv);

  const infoDiv = document.createElement("div");
  infoDiv.setAttribute("id", "info0");
  infoDiv.style.marginLeft = "10px";
  infoDiv.style.marginBottom = "20px";
  infoDiv.style.fontSize = ".9em";
  ordOsDiv.appendChild(infoDiv);

  const infoEthDiv = document.createElement("div");
  infoEthDiv.setAttribute("id", "infoEth");
  infoEthDiv.style.marginLeft = "10px";
  infoEthDiv.style.fontSize = ".9em";
  ordOsDiv.appendChild(infoEthDiv);

  function addCharacter() {
    if (characterCount < word.length) {
      const i = word[characterCount % word.length];
      if (i === ">") {
        document.getElementById("info0").innerHTML += "<br/>";
      } else {
        document.getElementById("info0").innerHTML += i;
      }
      characterCount++;
    }
  }

  setInterval(addCharacter, 40);

  if (eth) {
    document.getElementById("info0").innerHTML = "";
    word =
      ">Welcome to the Quantum Gate, a gate in-between BTC and Story Protocol...>>Connect MetaMask to unlock...>";
  } else {
    document.getElementById("info0").innerHTML = "";
    word = ">No Metamask Wallet detected>>";
  }

  if (eth) {
    const btnEth = document.createElement("button");
    btnEth.setAttribute("id", "btnEth");
    btnEth.style.padding = "7px";
    btnEth.style.color = "#cccccc";
    btnEth.style.cursor = "pointer";
    btnEth.style.fontSize = ".9em";
    btnEth.style.border = "1px solid white";
    btnEth.style.backgroundColor = "transparent";
    btnEth.style.marginLeft = "10px";
    btnEth.onclick = async () => {
      if (ethAddress) {
      } else {
        connectEth();
      }
    };
    btnEth.innerHTML = "Unlock";
    ordOsDiv.appendChild(btnEth);
  }
};

const switchToStory = async () => {
  eth.request({
    method: "wallet_addEthereumChain",
    params: [
      {
        chainId: `0x${(1513).toString(16)}`,
        rpcUrls: ["https://testnet.storyrpc.io/"],
        chainName: "Story Public Testnet (Iliad)",
        nativeCurrency: {
          name: "IP",
          symbol: "IP",
          decimals: 18,
        },
        blockExplorerUrls: ["https://testnet.storyscan.xyz/"],
      },
    ],
  });
};
