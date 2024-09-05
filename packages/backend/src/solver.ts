import 'dotenv/config';
import { createWalletClient, getContract, Hex, http, publicActions } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { localhost } from 'viem/chains'
import contractAbi from '../../foundry/out/LoanIntent.sol/LoanIntent.json'
import { Status } from './types';

const privateKey = process.env.PRIVATE_KEY as Hex;
const contractAddress = process.env.CONTRACT_ADDRESS as Hex;

const account = privateKeyToAccount(privateKey)

const client = createWalletClient({
    account,
    chain: localhost,
    transport: http()
}).extend(publicActions)


const contract = getContract({
    abi: contractAbi.abi,
    address: contractAddress,
    client,
})

async function getLendersIntents() {
    const data = await client.readContract( {
        address: contract.address,
        abi: contract.abi,
        functionName: "getLenderIntents"
    }) as any[];
    return data.filter((lender) => lender.status == Status.Pending);
}

async function getBorrowerIntents() {
    const data = await client.readContract( {
        address: contract.address,
        abi: contract.abi,
        functionName: "getBorrowerIntents"
    }) as any[];
    return data.filter((lender) => lender.status == Status.Pending);
}

async function findSolutions() {
    console.log(await getLendersIntents());
    console.log(await getBorrowerIntents());
}

export async function solveIntents() {
    while (true) {
        await findSolutions();
        await new Promise(resolve => setTimeout(resolve, 10000));
    }
}
