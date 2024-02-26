/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type {
  TransactionTracker,
  TransactionTrackerInterface,
} from "../TransactionTracker";

const _abi = [
  {
    inputs: [],
    name: "getTransactions",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
          {
            internalType: "bool",
            name: "success",
            type: "bool",
          },
        ],
        internalType: "struct TransactionTracker.Transaction[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "transactions",
    outputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506106f0806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806383920e901461003b5780639ace38c214610059575b600080fd5b61004361008c565b6040516100509190610517565b60405180910390f35b610073600480360381019061006e919061056a565b6101f8565b604051610083949392919061060e565b60405180910390f35b60606000805480602002602001604051908101604052809291908181526020016000905b828210156101ef57838290600052602060002090600402016040518060800160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815260200160028201805461014390610689565b80601f016020809104026020016040519081016040528092919081815260200182805461016f90610689565b80156101bc5780601f10610191576101008083540402835291602001916101bc565b820191906000526020600020905b81548152906001019060200180831161019f57829003601f168201915b505050505081526020016003820160009054906101000a900460ff161515151581525050815260200190600101906100b0565b50505050905090565b6000818154811061020857600080fd5b90600052602060002090600402016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600101549080600201805461025790610689565b80601f016020809104026020016040519081016040528092919081815260200182805461028390610689565b80156102d05780601f106102a5576101008083540402835291602001916102d0565b820191906000526020600020905b8154815290600101906020018083116102b357829003601f168201915b5050505050908060030160009054906101000a900460ff16905084565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061034482610319565b9050919050565b61035481610339565b82525050565b6000819050919050565b61036d8161035a565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b838110156103ad578082015181840152602081019050610392565b60008484015250505050565b6000601f19601f8301169050919050565b60006103d582610373565b6103df818561037e565b93506103ef81856020860161038f565b6103f8816103b9565b840191505092915050565b60008115159050919050565b61041881610403565b82525050565b6000608083016000830151610436600086018261034b565b5060208301516104496020860182610364565b506040830151848203604086015261046182826103ca565b9150506060830151610476606086018261040f565b508091505092915050565b600061048d838361041e565b905092915050565b6000602082019050919050565b60006104ad826102ed565b6104b781856102f8565b9350836020820285016104c985610309565b8060005b8581101561050557848403895281516104e68582610481565b94506104f183610495565b925060208a019950506001810190506104cd565b50829750879550505050505092915050565b6000602082019050818103600083015261053181846104a2565b905092915050565b600080fd5b6105478161035a565b811461055257600080fd5b50565b6000813590506105648161053e565b92915050565b6000602082840312156105805761057f610539565b5b600061058e84828501610555565b91505092915050565b6105a081610339565b82525050565b6105af8161035a565b82525050565b600082825260208201905092915050565b60006105d182610373565b6105db81856105b5565b93506105eb81856020860161038f565b6105f4816103b9565b840191505092915050565b61060881610403565b82525050565b60006080820190506106236000830187610597565b61063060208301866105a6565b818103604083015261064281856105c6565b905061065160608301846105ff565b95945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806106a157607f821691505b6020821081036106b4576106b361065a565b5b5091905056fea2646970667358221220ab8ff6752662ae246789184d718485d0bdfc988608065e0ad47fa92a5755cd9364736f6c63430008180033";

type TransactionTrackerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TransactionTrackerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TransactionTracker__factory extends ContractFactory {
  constructor(...args: TransactionTrackerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      TransactionTracker & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): TransactionTracker__factory {
    return super.connect(runner) as TransactionTracker__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TransactionTrackerInterface {
    return new Interface(_abi) as TransactionTrackerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): TransactionTracker {
    return new Contract(address, _abi, runner) as unknown as TransactionTracker;
  }
}
