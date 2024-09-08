# LoanIntent

LoanIntent, is a DeFi application built on the Rootstock network that facilitates decentralized lending by allowing users to secure loans with NFTs as collateral, offering an everyday solution for borrowing and lending in a decentralized, secure, and transparent way

## Depolyed Contracts
| Contract | RootStock Address |
|------------------|------------------|
| LoanIntent  |   |
| AlphaToken  |  |
| BetaToken  |   |
| GammaToken  |   |
| DeltaToken  |   |
| OmegaNFT  |   |
| ZetaNFT  |   |


## Short Description
We integrated Rootstock by deploying LoanIntent’s smart contracts on the Rootstock testnet, leveraging its secure and scalable blockchain network. Our application uses intent-based transactions, where users create borrower and lender intents. These intents encapsulate the desired outcomes and are matched by a solver. Once matched, the Rootstock network facilitates the transfer of NFTs as collateral and cryptocurrency between users, providing a seamless lending experience. The integration leverages Rootstock’s compatibility with Ethereum-style smart contracts, allowing us to match borrower and lender intents, securely hold collateral, and manage repayments or claims within a decentralized environment.

## Team
* Alan Philipose : Student /  Developer
* Athul Sanjose : Solution Architect

## Project Setup

### 1. Clone the repo
```sh
git clone https://github.com/alanphil2k01/LoanIntent --recursive
```

### 2. Install dependencies
1. Install node dependeices
```sh
yarn
```
2. Setup [Foundry](https://book.getfoundry.sh/getting-started/installation)

### 3. Setup NextJS frontend
#### Example .env
```
NEXT_PUBLIC_PROJECT_ID=<WalletConnect Project Id>
```
#### Start frontend
```sh
yarn workspace frontend dev
```

### 4. Setup Solver Backend
#### Example .env
```
PRIVATE_KEY=<PRIVATE_KEY>
```
#### Start backend
```sh
yarn workspace backend dev
```

### Foundry Setup
#### Example .env
```
PRIVATE_KEY=<PRIVATE_KEY>
TESTNET_RPC_URL=<RPC_URL>
```
#### Simulate Deploy
```sh
yarn workspace foundry deployLoanIntent
```
#### Deploy contract to RootStock
```sh
yarn workspace foundry deployLoanIntent --legacy --broadcast
```

### Feedback using RootStock

### Video
