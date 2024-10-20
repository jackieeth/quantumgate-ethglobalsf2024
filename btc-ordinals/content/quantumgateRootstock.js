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

  const anim0Div = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "animateTransform",
  );
  anim0Div.setAttribute("attributeType", "xml");
  anim0Div.setAttribute("attributeName", "transform");
  anim0Div.setAttribute("type", "rotate");
  anim0Div.setAttribute(
    "values",
    "0 194.36 205.675; -5 194.36 205.675; 0 194.36 205.675; 5 194.36 205.675; 0 194.36 205.675",
  );
  anim0Div.setAttribute("keyTimes", "0; 0.25; 0.5; 0.75; 1");
  anim0Div.setAttribute("dur", "3s");
  anim0Div.setAttribute("repeatCount", "indefinite");
  anim0Div.setAttribute("calcMode", "spline");
  anim0Div.setAttribute(
    "keySplines",
    ".42 0 .58 1; .42 0 .58 1; .42 0 .58 1; .42 0 .58 1",
  );

  const anim5Div = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "animateTransform",
  );
  anim5Div.setAttribute("attributeType", "xml");
  anim5Div.setAttribute("attributeName", "transform");
  anim5Div.setAttribute("type", "translate");
  anim5Div.setAttribute("values", "0,0; 0,-1; 0,0; 0,1; 0,0");
  anim5Div.setAttribute("keyTimes", "0; 0.25; 0.5; 0.75; 1");
  anim5Div.setAttribute("dur", "3s");
  anim5Div.setAttribute("repeatCount", "indefinite");
  anim5Div.setAttribute("calcMode", "spline");
  anim5Div.setAttribute(
    "keySplines",
    ".42 0 .58 1; .42 0 .58 1; .42 0 .58 1; .42 0 .58 1",
  );

  const g5Div = document.createElementNS("http://www.w3.org/2000/svg", "g");
  g5Div.setAttribute("transform", "translate(600 480) scale(100 100)");
  g5Div.setAttribute("fill", "#FEFFFE");

  const path9Div = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path",
  );
  path9Div.setAttribute("fill", "#FF9931");
  path9Div.setAttribute(
    "d",
    "M14.37 29.31a12.672 12.672 0 01-8.993-3.732 12.707 12.707 0 01-3.725-9.01c0-1.72.336-3.388 1-4.96a12.698 12.698 0 012.725-4.05 12.68 12.68 0 018.993-3.731 12.673 12.673 0 018.993 3.732 12.707 12.707 0 013.725 9.01c0 1.72-.337 3.388-1 4.96a12.699 12.699 0 01-2.726 4.05 12.682 12.682 0 01-8.992 3.732z",
  );

  const path10Div = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path",
  );
  path10Div.setAttribute("fill", "#006E3C");
  path10Div.setAttribute(
    "d",
    "M29.302 8.617c-.66-.284-1.623-.604-2.67-.642-.862-.032-1.638.135-2.307.495a3.908 3.908 0 00-.388.24c-1.071.753-1.619 1.94-1.893 2.849l-.117.389.356-.19 1.884-1.011a.753.753 0 011.015.294l.005.007.01.019a.705.705 0 01.033.07l4.342-2.409c-.04-.018-.228-.093-.27-.111z",
  );

  const path11Div = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path",
  );
  path11Div.setAttribute("fill", "#06B23C");
  path11Div.setAttribute(
    "d",
    "M28.615 11.533c-2.152 3.562-5.985 1.788-5.985 1.788l1.383-.743c.115-.07.87-.467.87-.467.662-.421.285-1.078.315-1.014l4.375-2.369s-.086 1.36-.959 2.805z",
  );

  const path12Div = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path",
  );
  path12Div.setAttribute("fill", "#fff");
  path12Div.setAttribute(
    "d",
    "M30.752 7.61c-.19-.111-1.94-1.108-4.063-1.185-1.13-.041-2.167.188-3.078.68-.304.164-.581.35-.834.553-1.917 1.537-2.413 4.025-2.54 5.12l-.01.086-.078.043-.562.3c-.538-.552-1.34-.957-1.954-1.126l-.109-.03.562-2.24-1.335-.347-.557 2.225a268.98 268.98 0 00-1.006-.27l.555-2.216-1.335-.346-.553 2.209c-1.62-.425-2.658-.683-2.658-.683s-.223 1.123-.32 1.393c0 0 .275.067.572.154.194.057 1.148.159.83 1.344-.179.665-1.22 5.126-1.302 5.43-.094.355-.191.554-.63.456l-1.065-.238-.669 1.597c.243.083 1.082.278 2.672.681l-.552 2.203 1.335.346.553-2.205c.314.081.651.17 1.007.264l-.552 2.202 1.334.346.562-2.238c1.552.29 2.447.198 2.659.158 1.296-.24 1.847-1.24 2.086-2.193.673-2.686-1.534-2.923-1.255-2.98 1.236-.25 1.827-1.433 1.76-2.484l.63-.337.079-.043.076.042c.826.43 2.12.955 3.59 1.01a5.734 5.734 0 002.609-.5c.113-.05.224-.106.332-.165 3.149-1.696 3.556-5.826 3.591-6.291l.031-.48-.408-.245zm-13.68 11.916c-.367 1.464-2.845.726-2.845.726l-1.177-.305.734-2.928 1.406.364s2.295.498 1.882 2.143zm.441-4.364c-.337 1.343-2.4.72-2.4.72l-.98-.254.673-2.687 1.172.304s1.914.408 1.535 1.917zm12.013-6.319l-.002.017c-.217 1.217-.857 3.407-2.7 4.4a1.19 1.19 0 01-.05.024c-.632.33-1.349.483-2.131.454a6.13 6.13 0 01-1.63-.295l-.382-.122.354-.191 1.898-1.02a.77.77 0 00.401-.656.771.771 0 00-.086-.387l-.01-.02-.006-.007a.753.753 0 00-1.015-.294l-1.884 1.01-.356.191.117-.389c.274-.908.822-2.096 1.894-2.848.122-.086.251-.166.387-.24.669-.36 1.446-.527 2.307-.495 1.047.038 2.01.357 2.67.641l.124.054.117.058-.017.115z",
  );

  const anim8Div = anim5Div.cloneNode(true);

  // rootstock
  g5Div.append(path9Div);
  path9Div.append(anim8Div);
  g5Div.append(path10Div);
  g5Div.append(path11Div);
  g5Div.append(path12Div);
  svgDiv.append(g5Div);

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

    if (chainId !== 31) {
      document.getElementById("btnEth").style.display = "";
      await switchToRSK();
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
      "0x6941AeA46962c3c191D099C3c4ADfD315EEDbf3e";
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
        `<p style="color: #999999">Verifying signed messages...<br/>Minting tRBTC via Rootstock Testnet<br/>Just a moment...</p>`;
      await tx.wait();
      document.getElementById("infoEth").innerHTML =
        `<p style="color: #999999">TX: ${tx.hash} via Rootstock Testnet<br/><br/><b style="color: white">You unlocked the Quantum Gate!</b></p>`;
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
      ">Welcome to the Quantum Gate, a gate in-between BTC and Rootstock RBTC...>>Connect MetaMask to unlock...>";
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

const switchToRSK = async () => {
  eth.request({
    method: "wallet_addEthereumChain",
    params: [
      {
        chainId: `0x${(31).toString(16)}`,
        rpcUrls: [
          "https://rpc.testnet.rootstock.io/Obi2kMscdIOpJhldMFjo5AKvDS2Qa3-T",
        ],
        chainName: "Rootstock Testnet",
        nativeCurrency: {
          name: "tRBTC",
          symbol: "tRBTC",
          decimals: 18,
        },
        blockExplorerUrls: ["https://explorer.testnet.rootstock.io/"],
      },
    ],
  });
};
