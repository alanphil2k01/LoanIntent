# LoanIntent

LoanIntent, is a DeFi application built on the Rootstock network that facilitates decentralized lending by allowing users to secure loans with NFTs as collateral, offering an everyday solution for borrowing and lending in a decentralized, secure, and transparent way

## Depolyed Contracts
| Contract | RootStock Address |
|------------------|------------------|
| LoanIntent  |   [0x6e5f0183754af2dfbe5a5f6c94ac9a394fe0c1b5](https://explorer.testnet.rootstock.io/address/0x6e5f0183754af2dfbe5a5f6c94ac9a394fe0c1b5) |
| AlphaToken  |  [0x06c187541b6e34148ab86094edbf58ef5fdb6adf](https://explorer.testnet.rootstock.io/address/0x06c187541b6e34148ab86094edbf58ef5fdb6adf) |
| BetaToken  |   [0x553d8b8748d17db7e97eba1861b6e388ae135ef3](https://explorer.testnet.rootstock.io/address/0x553d8b8748d17db7e97eba1861b6e388ae135ef3) |
| GammaToken  |   [0x635bf79ceb5e5b6baa92d209aa05b2b8f0cb4b84](https://explorer.testnet.rootstock.io/address/0x635bf79ceb5e5b6baa92d209aa05b2b8f0cb4b84) |
| DeltaToken  | [0x5aac275dba703859c6549443f0bb6cee1e47b896](https://explorer.testnet.rootstock.io/address/0x5aac275dba703859c6549443f0bb6cee1e47b896)  |
| OmegaNFT  | [0x8de3c1c4503400280de37f65fd398cfd5e5100b6](https://explorer.testnet.rootstock.io/address/0x8de3c1c4503400280de37f65fd398cfd5e5100b6)  |
| ZetaNFT  |  [0x28b4a4c68cb7e0b5c48267d26c1b337fa88a3ce5](https://explorer.testnet.rootstock.io/address/0x28b4a4c68cb7e0b5c48267d26c1b337fa88a3ce5) |



## RootStock Integration

### Architecture

![LoanIntent png-arch](https://github.com/user-attachments/assets/30f80450-c310-4de6-87c6-fa393e0eaef6)

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

## Feedback using RootStock
Rootstock was easy to incorporate as the chain is EVM compatible.Rootstock often has lower transaction fees, which makes it more accessible for smaller users or for those running complex dApps that require frequent interactions. The Rootstock testnet faucets were easy to use, but the transactions took longer time than expected.


## Demo Video
https://www.youtube.com/watch?v=MWfCqMqaNmE

## Screenshots


![Home](https://github.com/user-attachments/assets/607c194e-7b06-4266-854f-f5150e3f072e)

![LoanIntent-Market](https://github.com/user-attachments/assets/12038fab-a0ff-42e4-8d22-8416f4e2737e)

![BorrowerIntent](https://github.com/user-attachments/assets/069fa657-8d37-4a98-b5fc-6754013b9f2f)

![LoanIntent](https://github.com/user-attachments/assets/7b38ea1a-b1ee-47b5-9221-3a610104ee32)

![Claim](https://github.com/user-attachments/assets/19b01b4e-f25c-421f-8d45-61860ad0e185)

![Repay](https://github.com/user-attachments/assets/4d985fb0-6317-42a3-8f62-9fa5b8ff2c94)



