import 'dotenv/config';
import { createWalletClient, getContract, Hex, http, publicActions } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { rootstockTestnet } from 'viem/chains'
import loanIntentAbi from 'common/LoanIntent/LoanIntent.json'
import { Status } from './types';
import { LoanIntentAddress } from 'common/constants';

const privateKey = process.env.PRIVATE_KEY as Hex;

const account = privateKeyToAccount(privateKey)

const client = createWalletClient({
    account,
    chain: rootstockTestnet,
    transport: http()
}).extend(publicActions)


const contract = getContract({
    abi: loanIntentAbi.abi,
    address: LoanIntentAddress,
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
    const lenders = await getLendersIntents();
    const borrowers = await getBorrowerIntents();

    const matchedPairs: Array<{ lender: any, borrower: any }> = [];

    for (const lender of lenders) {
        for (const borrower of borrowers) {
            if (lender.tokenAddress === borrower.tokenAddress &&
                borrower.maxInterest >= lender.minInterest) {
                matchedPairs.push({ lender, borrower });
                borrowers.splice(borrowers.indexOf(borrower), 1);
                break;
            }
        }
    }
    console.log('Matched Pairs:', matchedPairs);
    await sendSolutions(matchedPairs);
}

async function sendSolutions(matchedPairs: Array<{ lender: any, borrower: any }>) {
    if (matchedPairs.length <= 0) {
        return;
    }
    matchedPairs.forEach(async ({lender, borrower}) => {
        try {
            const { request } = await client.simulateContract({
                address: contract.address,
                abi: contract.abi,
                functionName: "solve",
                args: [
                    BigInt(borrower.id),
                    BigInt(lender.id)
                ]
            })
            await client.writeContract(request)
        } catch (error) {
            console.log(error);
        }
    })
}

export async function solveIntents() {
    while (true) {
        await findSolutions();
        await new Promise(resolve => setTimeout(resolve, 10000));
    }
}
