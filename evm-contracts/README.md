## Story Contracts (deployed on testnet)
- IPARegistrar [0x62F4972F7722871724E69EAe11af175029DA1D47](https://testnet.storyscan.xyz/address/0x62F4972F7722871724E69EAe11af175029DA1D47)
- IPALicenseTerms [0xDDA62418de8fa6873a092876020D466E40750156](https://testnet.storyscan.xyz/address/0xDDA62418de8fa6873a092876020D466E40750156)
- IPALicenseToken [0x1e7e036bD54Ac69f23cFC9606c569769e9EE08Cf](https://testnet.storyscan.xyz/address/0x1e7e036bD54Ac69f23cFC9606c569769e9EE08Cf)

  function to be called in inscription using in-line ABI:
  `function mintLicenseToken(
        uint256 ltAmount,
        address ltRecipient
  ) external returns (address ipId, uint256 tokenId, uint256 startLicenseTokenId)`

## LayerZero OFT (deployed on SKALE and Story testnets)
- SKALE Europa Testnet [0x9DE5B0CF9C58C3254637Bc031f594FD32DC1Bb7A](https://juicy-low-small-testnet.explorer.testnet.skalenodes.com/address/0x9DE5B0CF9C58C3254637Bc031f594FD32DC1Bb7A)
- Story Testnet [0x298a337d0088dd7c6b97FcD825cBE4a32D4c0d04](https://testnet.storyscan.xyz/address/0x298a337d0088dd7c6b97FcD825cBE4a32D4c0d04)

  function to be called in inscription using in-line ABI:
  `function mint(
      string message,
      uint8 v,
      bytes32 r,
      bytes32 s
  ) public returns ()`


![image](https://github.com/user-attachments/assets/08da1668-9a51-45d4-aaff-30c67cb3e70f)
