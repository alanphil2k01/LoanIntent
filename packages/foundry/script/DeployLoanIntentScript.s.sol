// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {LoanIntent} from "../src/LoanIntent.sol";

contract DeployERC20TokensScript is Script {
    function run() external {
        uint256 privateKey = vm.envUint("PRIVATE_KEY");
        uint256 loanDuration = 600;

        vm.startBroadcast(privateKey);

        new LoanIntent(loanDuration);

        vm.stopBroadcast();
    }
}
