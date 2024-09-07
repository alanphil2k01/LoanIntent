// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {CustomNFT} from "./DeployERC721NFTsScript.s.sol";

contract ERC721Script is Script {
    function run() external {
        uint256 privateKey = vm.envUint("PRIVATE_KEY");
        address account = vm.addr(privateKey);

        address omegaAddress = 0x8dE3C1c4503400280dE37F65fd398cFD5e5100B6;

        CustomNFT token = CustomNFT(omegaAddress);

        vm.startBroadcast(privateKey);

        token.safeMint(account, "https://i.imgur.com/90D5G01.jpg");
        token.safeMint(account, "https://i.imgur.com/90D5G01.jpg");
        token.safeMint(account, "https://i.imgur.com/90D5G01.jpg");
        token.safeMint(account, "https://i.imgur.com/90D5G01.jpg");
        token.safeMint(account, "https://i.imgur.com/90D5G01.jpg");
        token.safeMint(account, "https://i.imgur.com/90D5G01.jpg");
        token.safeMint(account, "https://i.imgur.com/90D5G01.jpg");
        token.safeMint(account, "https://i.imgur.com/90D5G01.jpg");
        token.safeMint(account, "https://i.imgur.com/90D5G01.jpg");
        token.safeMint(account, "https://i.imgur.com/90D5G01.jpg");
        token.safeMint(account, "https://i.imgur.com/90D5G01.jpg");

        vm.stopBroadcast();
    }
}

