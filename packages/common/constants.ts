import loanIntentLatestRun from "../foundry/broadcast/DeployLoanIntentScript.s.sol/31/run-latest.json";
import ERC20TokensLatestRun from "../foundry/broadcast/DeployERC20TokensScript.s.sol/31/run-latest.json";
import ERC721TokensLatestRun from "../foundry/broadcast/DeployERC721NFTsScript.s.sol/31/run-latest.json";

export type Hex = `0x${string}`

const LoanIntentAddress = loanIntentLatestRun.transactions[0].contractAddress as Hex;

const ERC20Addresses = ERC20TokensLatestRun.transactions
                            .filter((transaction) => transaction.function == null)
                            .map((transaction: any) => transaction.contractAddress) as Hex[];

const ERC721Addresses = ERC721TokensLatestRun.transactions
                            .filter((transaction) => transaction.function == null)
                            .map((transaction: any) => transaction.contractAddress) as Hex[];

export {
    LoanIntentAddress,
    ERC20Addresses,
    ERC721Addresses
};

