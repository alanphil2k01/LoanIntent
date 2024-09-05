// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {LoanIntent} from "../src/LoanIntent.sol";


contract DeployERC20TokensScript is Script {
    function run() external {
        uint privateKey = vm.envUint("PRIVATE_KEY");

        vm.startBroadcast(privateKey);

        new LoanIntent();

        vm.stopBroadcast();
    }
}
