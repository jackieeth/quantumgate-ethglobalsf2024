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
  anim5Div.setAttribute("values", "0,0; 0,-3; 0,0; 0,3; 0,0");
  anim5Div.setAttribute("keyTimes", "0; 0.25; 0.5; 0.75; 1");
  anim5Div.setAttribute("dur", "1.5s");
  anim5Div.setAttribute("repeatCount", "indefinite");
  anim5Div.setAttribute("calcMode", "spline");
  anim5Div.setAttribute(
    "keySplines",
    ".42 0 .58 1; .42 0 .58 1; .42 0 .58 1; .42 0 .58 1",
  );

  const g3Div = document.createElementNS("http://www.w3.org/2000/svg", "g");
  g3Div.setAttribute("transform", "translate(520 500) scale(25 25)");
  g3Div.setAttribute("fill", "#FEFFFE");

  const path6Div = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path",
  );
  path6Div.setAttribute("fill-rule", "nonzero");
  path6Div.setAttribute(
    "d",
    "m84.094 72.849c.288 2.083.856 3.639 1.701 4.67 1.547 1.877 4.196 2.815 7.949 2.815 2.248 0 4.073-.247 5.475-.742 2.66-.949 3.99-2.712 3.99-5.289 0-1.506-.66-2.671-1.979-3.496-1.32-.804-3.392-1.515-6.218-2.134l-4.825-1.082c-4.743-1.073-8.021-2.238-9.836-3.496-3.072-2.103-4.609-5.392-4.609-9.867 0-4.083 1.485-7.475 4.454-10.176 2.97-2.701 7.331-4.052 13.084-4.052 4.805 0 8.903 1.273 12.295 3.82 3.393 2.547 5.171 6.243 5.336 11.089h-9.156c-.165-2.743-1.361-4.691-3.588-5.846-1.484-.763-3.33-1.145-5.536-1.145-2.454 0-4.413.495-5.877 1.485s-2.196 2.371-2.196 4.145c0 1.629.721 2.846 2.165 3.65.928.536 2.907 1.165 5.939 1.887l7.856 1.886c3.444.825 6.042 1.928 7.795 3.31 2.722 2.145 4.083 5.248 4.083 9.31 0 4.166-1.593 7.625-4.779 10.378s-7.686 4.129-13.502 4.129c-5.938 0-10.609-1.356-14.011-4.068-3.403-2.711-5.104-6.438-5.104-11.181z",
  );

  const anim6Div = anim5Div.cloneNode(true);

  const path7Div = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path",
  );
  path7Div.setAttribute("fill-rule", "nonzero");
  path7Div.setAttribute("d", "m28 26v76h66v-7h-58v-62h58v-7z");

  // skale
  g3Div.append(path6Div);
  path6Div.append(anim6Div);
  g3Div.append(path7Div);
  svgDiv.append(g3Div);

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
    // document.getElementById("btnSKALENetworkNetwork").style.display="none";
    const provider = new ethers.BrowserProvider(window.ethereum);

    const chainIdBigInt = (await provider.getNetwork()).chainId;
    const chainId = Number(chainIdBigInt);
    console.log("chainId", chainId);

    if (chainId !== 1444673419) {
      document.getElementById("btnEth").style.display = "";
      await switchToSkale();
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
        `<p style="color: #999999">Verifying signed messages...<br/>Minting 0-99 tokens using SKALE RNG via Europa Hub Testnet...<br/>Just a moment...<br/>And, Good Luck!</p>`;
      await tx.wait();
      document.getElementById("infoEth").innerHTML =
        `<p style="color: #999999">TX: ${tx.hash} via Europa Hub Testnet<br/><br/><b style="color: white">You unlocked the Quantum Gate!</b></p>`;
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
      ">Welcome to the Quantum Gate, a gate in-between BTC and SKALE...>>Connect MetaMask to unlock...>";
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

const switchToSkale = async () => {
  eth.request({
    method: "wallet_addEthereumChain",
    params: [
      {
        chainId: `0x${(1444673419).toString(16)}`,
        rpcUrls: ["https://testnet.skalenodes.com/v1/juicy-low-small-testnet"],
        chainName: "SKALE Europa Hub Testnet",
        nativeCurrency: {
          name: "sFUEL",
          symbol: "sFUEL",
          decimals: 18,
        },
        blockExplorerUrls: [
          "https://juicy-low-small-testnet.explorer.testnet.skalenodes.com/",
        ],
      },
    ],
  });
};
