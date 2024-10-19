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

  const g0Div = document.createElementNS("http://www.w3.org/2000/svg", "g");
  g0Div.setAttribute("transform", "translate(0 100)");

  // Bitcoin logo
  const path0Div = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path",
  );
  path0Div.setAttribute("fill", "white");
  path0Div.setAttribute(
    "d",
    "M2947.77 1754.38c40.72,-272.26 -166.56,-418.61 -450,-516.24l91.95 -368.8 -224.5 -55.94 -89.51 359.09c-59.02,-14.72 -119.63,-28.59 -179.87,-42.34l90.16 -361.46 -224.36 -55.94 -92 368.68c-48.84,-11.12 -96.81,-22.11 -143.35,-33.69l0.26 -1.16 -309.59 -77.31 -59.72 239.78c0,0 166.56,38.18 163.05,40.53 90.91,22.69 107.35,82.87 104.62,130.57l-104.74 420.15c6.26,1.59 14.38,3.89 23.34,7.49 -7.49,-1.86 -15.46,-3.89 -23.73,-5.87l-146.81 588.57c-11.11,27.62 -39.31,69.07 -102.87,53.33 2.25,3.26 -163.17,-40.72 -163.17,-40.72l-111.46 256.98 292.15 72.83c54.35,13.63 107.61,27.89 160.06,41.3l-92.9 373.03 224.24 55.94 92 -369.07c61.26,16.63 120.71,31.97 178.91,46.43l-91.69 367.33 224.51 55.94 92.89 -372.33c382.82,72.45 670.67,43.24 791.83,-303.02 97.63,-278.78 -4.86,-439.58 -206.26,-544.44 146.69,-33.83 257.18,-130.31 286.64,-329.61l-0.07 -0.05zm-512.93 719.26c-69.38,278.78 -538.76,128.08 -690.94,90.29l123.28 -494.2c152.17,37.99 640.17,113.17 567.67,403.91zm69.43 -723.3c-63.29,253.58 -453.96,124.75 -580.69,93.16l111.77 -448.21c126.73,31.59 534.85,90.55 468.94,355.05l-0.02 0z",
  );

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

  // noun glass
  const g1Div = document.createElementNS("http://www.w3.org/2000/svg", "g");
  g1Div.setAttribute("transform", "translate(1300 1200) scale (4 4)");

  const path1Div = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path",
  );
  path1Div.setAttribute("stroke", "none");
  path1Div.setAttribute("fill", "#fcfcfc");
  path1Div.setAttribute(
    "d",
    "M100.000 75.000 L 100.000 125.000 125.000 125.000 L 150.000 125.000 150.000 75.000 L 150.000 25.000 125.000 25.000 L 100.000 25.000 100.000 75.000 M275.000 75.000 L 275.000 125.000 300.000 125.000 L 325.000 125.000 325.000 75.000 L 325.000 25.000 300.000 25.000 L 275.000 25.000 275.000 75.000 ",
  );
  const anim1Div = anim0Div.cloneNode(true);

  const path2Div = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path",
  );
  path2Div.setAttribute("stroke", "none");
  path2Div.setAttribute("fill", "#fc8c34");
  path2Div.setAttribute(
    "d",
    "M74.833 24.917 L 74.833 49.833 37.417 49.833 L 0.000 49.833 0.000 87.500 L 0.000 125.167 12.583 125.167 L 25.167 125.167 25.167 100.167 L 25.167 75.167 50.000 75.167 L 74.833 75.167 74.833 112.583 L 74.833 150.000 150.000 150.000 L 225.167 150.000 225.167 112.583 L 225.167 75.167 237.500 75.167 L 249.833 75.167 249.833 112.583 L 249.833 150.000 324.917 150.000 L 400.000 150.000 400.000 75.000 L 400.000 0.000 324.917 0.000 L 249.833 0.000 249.833 24.917 L 249.833 49.833 237.500 49.833 L 225.167 49.833 225.167 24.917 L 225.167 0.000 150.000 0.000 L 74.833 0.000 74.833 24.917 M200.000 75.000 L 200.000 125.000 150.000 125.000 L 100.000 125.000 100.000 75.000 L 100.000 25.000 150.000 25.000 L 200.000 25.000 200.000 75.000 M375.000 75.000 L 375.000 125.000 325.000 125.000 L 275.000 125.000 275.000 75.000 L 275.000 25.000 325.000 25.000 L 375.000 25.000 375.000 75.000 ",
  );
  const anim2Div = anim0Div.cloneNode(true);

  const path3Div = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path",
  );
  path3Div.setAttribute("stroke", "none");
  path3Div.setAttribute("fill", "#040404");
  path3Div.setAttribute(
    "d",
    "M150.000 75.000 L 150.000 125.000 175.000 125.000 L 200.000 125.000 200.000 75.000 L 200.000 25.000 175.000 25.000 L 150.000 25.000 150.000 75.000 M325.000 75.000 L 325.000 125.000 350.000 125.000 L 375.000 125.000 375.000 75.000 L 375.000 25.000 350.000 25.000 L 325.000 25.000 325.000 75.000 ",
  );
  const anim3Div = anim0Div.cloneNode(true);

  // Gate
  const g2Div = document.createElementNS("http://www.w3.org/2000/svg", "g");
  g2Div.setAttribute("transform", "translate(-850 -850) scale(20 20)");
  g2Div.setAttribute("fill", "#FEFFFE");

  const path4Div = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path",
  );
  path4Div.setAttribute("stroke", "none");
  path4Div.setAttribute(
    "d",
    "M192.125 191.344c.403 1.86 2.563 6.219-.6 7.106-2.775.175-5.124.218-6.573.223-2.798.01-5.565.105-8.358.208-1.813.067-4.15.075-5.489-1.38-.76-2.818-1.193-5.715-1.504-8.613-.702-6.549-1.159-13.113-1.911-19.66-1.535-13.369-3.15-26.755-4.318-40.162-.25-2.861-.432-5.753-1.171-8.541-1.449-.611-3.748-.622-5.274-.402-5.696.817-11.313 1.111-17.082.948-2.669-.076-11.718-1.146-12.571-.443-1.156.953-1.555 3.908-1.695 5.327a688 688 0 0 1-1.254 11.64c-.93 7.992-1.897 15.973-2.752 23.972a9918 9918 0 0 0-2.084 19.661c-.296 2.817-.605 5.619-.711 8.451-.09 2.388.094 6.005-1.546 7.969-1.202 1.44-3.391 1.108-5.035 1.032-2.962-.138-5.955.004-8.92-.012-1.934-.011-4.464.364-6.348-.287-2.361-.816-.902-4.615-.553-6.216 2.852-13.086 6.016-26.112 8.993-39.171a5122 5122 0 0 0 4.307-19.012c.712-3.179 3.993-15.648 2.436-16.625-4.616-2.895-11.059-2.148-15.477-5.338-1.55-1.119-1.473-2.299-1.195-4.027.209-1.303.613-2.479 1.125-3.679.872-2.042.896-1.917 2.208-3.896.694-.887.771-.667 1.333-.5.376.111 8.134 2.354 8.988 2.771.938.25 2.351.875 7.645 2.052 6.832 1.521 13.841 2.366 20.827 2.714 13.005.649 26.448-.359 38.967-4.091 2.749-.82 10.747-4.338 12.061-2.714 1.941 2.401 4.663 7.102 3.61 9.772-2.457 6.232-13.078 2.704-16.554 8.511-.013.021 2.353 11.912 1.606 8.558",
  );
  const anim4Div = anim0Div.cloneNode(true);

  const path5Div = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path",
  );
  path5Div.setAttribute("stroke", "none");
  path5Div.setAttribute(
    "d",
    "M160.475 133.575c.927 1.539 3.221 9.174-.207 8.84-2.449-.239-5.518-3.484-7.742-.965 1.82.702 3.772 1.475 5.152 2.911.879.914 2.722 5.031.247 5.264-2.126-1.758-4.716-3.749-7.274-1.5-1.907 3.83 4.422 4.5 6.734 5.388 4.117 1.579 6.508 4.02 7.366 8.363.78 3.951.694 8.017.81 12.023.145 5.078-2.397 1.615-4.76-.112-.942-.688-6.546-3.88-5.583-.77 1.02 3.295 2.243 6.571 2.714 10.006 1.117 8.145-5.655 15.234-14.106 13.477-1.07-1.221 3.505-3.699 4.325-4.739.69-.875 3.413-5.791 1.675-6.586-4.13 2.988-6.854 8.2-12.333 8.972-2.544.359-5.253.04-7.549-1.155-.946-.493-5.41-4.156-2.094-3.956 2.136.129 4.537.52 6.566-.378 3.194-1.411 1.099-2.618-1.206-2.932-4.431-.603-12.479-5.577-9.86-11.051 1.596-1.074 3.956-.273 5.679-.028.864.123 7.003-.602 4.785-2.482-1.808-1.534-4.259-1.517-6.054-3.292-2.188-2.164-3.396-4.914-3.423-7.96-.014-1.594.27-6.873 2.769-4.47 1.467 1.41 6.479 4.998 5.43.359-1.339-5.918-1.449-11.619.267-17.458 1.065-3.625 2.655-9.186 6.305-11.076 2.231-1.155 1.905.472 1.746 2.108-.397 2.318-.681 4.276-.531 6.705.047.77.57 5.293 1.806 4.968 1.824-.48 3.323-3.276 4.382-4.664 2.937-3.851 9.708-6.619 13.964-3.81 1.365 2.267-.223-.147 0 0",
  );

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

  const g3Div = document.createElementNS("http://www.w3.org/2000/svg", "g");
  g3Div.setAttribute("transform", "translate(700 700) scale(25 25)");
  g3Div.setAttribute("fill", "#FEFFFE");

  const path6Div = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path",
  );
  path6Div.setAttribute("fill-rule", "nonzero");
  path6Div.setAttribute(
    "d",
    "m84.094 72.849c.288 2.083.856 3.639 1.701 4.67 1.547 1.877 4.196 2.815 7.949 2.815 2.248 0 4.073-.247 5.475-.742 2.66-.949 3.99-2.712 3.99-5.289 0-1.506-.66-2.671-1.979-3.496-1.32-.804-3.392-1.515-6.218-2.134l-4.825-1.082c-4.743-1.073-8.021-2.238-9.836-3.496-3.072-2.103-4.609-5.392-4.609-9.867 0-4.083 1.485-7.475 4.454-10.176 2.97-2.701 7.331-4.052 13.084-4.052 4.805 0 8.903 1.273 12.295 3.82 3.393 2.547 5.171 6.243 5.336 11.089h-9.156c-.165-2.743-1.361-4.691-3.588-5.846-1.484-.763-3.33-1.145-5.536-1.145-2.454 0-4.413.495-5.877 1.485s-2.196 2.371-2.196 4.145c0 1.629.721 2.846 2.165 3.65.928.536 2.907 1.165 5.939 1.887l7.856 1.886c3.444.825 6.042 1.928 7.795 3.31 2.722 2.145 4.083 5.248 4.083 9.31 0 4.166-1.593 7.625-4.779 10.378s-7.686 4.129-13.502 4.129c-5.938 0-10.609-1.356-14.011-4.068-3.403-2.711-5.104-6.438-5.104-11.181z");
  // <g fill="#fff"><path d="m84.094 72.849c.288 2.083.856 3.639 1.701 4.67 1.547 1.877 4.196 2.815 7.949 2.815 2.248 0 4.073-.247 5.475-.742 2.66-.949 3.99-2.712 3.99-5.289 0-1.506-.66-2.671-1.979-3.496-1.32-.804-3.392-1.515-6.218-2.134l-4.825-1.082c-4.743-1.073-8.021-2.238-9.836-3.496-3.072-2.103-4.609-5.392-4.609-9.867 0-4.083 1.485-7.475 4.454-10.176 2.97-2.701 7.331-4.052 13.084-4.052 4.805 0 8.903 1.273 12.295 3.82 3.393 2.547 5.171 6.243 5.336 11.089h-9.156c-.165-2.743-1.361-4.691-3.588-5.846-1.484-.763-3.33-1.145-5.536-1.145-2.454 0-4.413.495-5.877 1.485s-2.196 2.371-2.196 4.145c0 1.629.721 2.846 2.165 3.65.928.536 2.907 1.165 5.939 1.887l7.856 1.886c3.444.825 6.042 1.928 7.795 3.31 2.722 2.145 4.083 5.248 4.083 9.31 0 4.166-1.593 7.625-4.779 10.378s-7.686 4.129-13.502 4.129c-5.938 0-10.609-1.356-14.011-4.068-3.403-2.711-5.104-6.438-5.104-11.181z" fill-rule="nonzero"/><path d="m28 26v76h66v-7h-58v-62h58v-7z"/></g>

  const anim6Div = anim5Div.cloneNode(true);


  const path7Div = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path",
  );
  path7Div.setAttribute("fill-rule", "nonzero");
  path7Div.setAttribute(
    "d",
    "m28 26v76h66v-7h-58v-62h58v-7z")


  // assemble elements in the groups
  // btc
  g0Div.append(path0Div);
  path0Div.append(anim0Div);

  // noun
  g1Div.append(path1Div);
  path1Div.append(anim1Div);
  g1Div.append(path2Div);
  path2Div.append(anim2Div);
  g1Div.append(path3Div);
  path3Div.append(anim3Div);

  // gate
  g2Div.append(path4Div);
  path4Div.append(anim4Div);
  g2Div.append(path5Div);
  path5Div.append(anim5Div);

  // skale
  g3Div.append(path6Div);
  path6Div.append(anim6Div);
  g3Div.append(path7Div);

  // assemble groups
  // svgDiv.append(g0Div);
  // svgDiv.append(g2Div)
  // svgDiv.append(g1Div)
  svgDiv.append(g3Div)

  overlayDiv.append(svgDiv);
  atomDiv.append(overlayDiv);
  const canvasDiv = document.createElement("canvas");
  canvasDiv.setAttribute("id", "atomCanvas");
  atomDiv.append(canvasDiv);
  document.body.appendChild(atomDiv);

  document.getElementById("atomCanvas").width = window.innerWidth;
  document.getElementById("atomCanvas").height = window.innerHeight;

  console.log("window.innerWidth", window.innerWidth);
  console.log("screen.width", screen.width);

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
        document.getElementById("overlay0").style.display = "none";
      }, 2000);
    }
  }
};

const setup = async () => {
  console.log("ethers", ethers);
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
    await switchToSkale();
    ethAddress = accounts[0];
    console.log("ethAddress", ethAddress);
    document.getElementById("info0").innerHTML =``
    document.getElementById("infoEth").innerHTML = `<p style="color: #999999">ETH Address: ${ethAddress}<br/><br/><span style="color: white">${quantumMsg}</span></p>`;
    document.getElementById("btnEth").style.display="none";
    // document.getElementById("btnSKALENetworkNetwork").style.display="none";
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    ethSigner = signer;
    console.log("ethSigner", ethSigner);

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
        "function recoverStringFromVRS(string message, uint8 v, bytes32 r, bytes32 s) pure returns (address)",
        "function unlock(string message, uint8 v, bytes32 r, bytes32 s) public returns ()",
      ],
      ethSigner,
    );

    console.log(
      "recoverStringFromVRS",
      await VerifySigContract.recoverStringFromVRS(
        toHex(quantumMsg),
        sig.v,
        sig.r,
        sig.s,
      ),
    );

    const tx = await VerifySigContract.unlock(
      toHex(quantumMsg),
      sig.v,
      sig.r,
      sig.s,
    );
    if (tx && tx.hash){
    console.log("tx hash", tx.hash)
    document.getElementById("infoEth").innerHTML = `<p style="color: #999999">Verifying...</p>`;
    await tx.wait()
    document.getElementById("infoEth").innerHTML = `<p style="color: #999999">TX: ${tx.hash}<br/><br/><b style="color: white">You unlocked the Quantum Gate!</b></p>`;
    console.log("done")
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

  setInterval(addCharacter, 80);

  if (eth) {
    document.getElementById("info0").innerHTML = "";
    word = ">Welcome to the Quantum Gate!>>Connect MetaMask to unlock...>";
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

  if (false&& eth) {
    // const btnEthNetwork = document.createElement("button");
    // btnEthNetwork.setAttribute("id", "btnEthNetwork");
    // btnEthNetwork.style.padding = "7px";
    // btnEthNetwork.style.color = "#cccccc";
    // btnEthNetwork.style.cursor = "pointer";
    // btnEthNetwork.style.fontSize = ".9em";
    // btnEthNetwork.style.border = "1px solid white";
    // btnEthNetwork.style.backgroundColor = "transparent";
    // btnEthNetwork.style.marginLeft = "10px";
    // btnEthNetwork.onclick = async () => {
    //   eth.request({
    //     method: "wallet_addEthereumChain",
    //     params: [
    //       {
    //         chainId: `0x${(1513).toString(16)}`,
    //         rpcUrls: ["https://testnet.storyrpc.io/"],
    //         chainName: "Story Public Testnet (Iliad)",
    //         nativeCurrency: {
    //           name: "IP",
    //           symbol: "IP",
    //           decimals: 18,
    //         },
    //         blockExplorerUrls: ["https://testnet.storyscan.xyz/"],
    //       },
    //     ],
    //   });
    // };
    // btnEthNetwork.innerHTML = "Switch to Story Protocol (Iliad testnet)";
    // ordOsDiv.appendChild(btnEthNetwork);

    const btnSKALENetwork = document.createElement("button");
    btnSKALENetwork.setAttribute("id", "btnSKALENetworkNetwork");
    btnSKALENetwork.style.padding = "7px";
    btnSKALENetwork.style.color = "#cccccc";
    btnSKALENetwork.style.cursor = "pointer";
    btnSKALENetwork.style.fontSize = ".9em";
    btnSKALENetwork.style.border = "1px solid white";
    btnSKALENetwork.style.backgroundColor = "transparent";
    btnSKALENetwork.style.marginLeft = "10px";
    btnSKALENetwork.onclick = switchToSkale;
    btnSKALENetwork.innerHTML = "Switch to SKALE Europa Hub Testnet";
    ordOsDiv.appendChild(btnSKALENetwork);
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
        blockExplorerUrls: ["https://juicy-low-small-testnet.explorer.testnet.skalenodes.com/"],
      },
    ],
  });
};