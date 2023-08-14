/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  EthPriceOracleInterface,
  EthPriceOracleInterfaceInterface,
} from "../EthPriceOracleInterface";

const _abi = [
  {
    inputs: [],
    name: "getLatestEthPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060b28061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c806330c0b9ec14602d575b600080fd5b60336047565b604051603e91906059565b60405180910390f35b600090565b6053816072565b82525050565b6000602082019050606c6000830184604c565b92915050565b600081905091905056fea2646970667358221220f94cd0c2db0be3539414ec376f186d9ac275d68bc4c76724274335f3d83d3eeb64736f6c63430008040033";

export class EthPriceOracleInterface__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<EthPriceOracleInterface> {
    return super.deploy(overrides || {}) as Promise<EthPriceOracleInterface>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): EthPriceOracleInterface {
    return super.attach(address) as EthPriceOracleInterface;
  }
  connect(signer: Signer): EthPriceOracleInterface__factory {
    return super.connect(signer) as EthPriceOracleInterface__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EthPriceOracleInterfaceInterface {
    return new utils.Interface(_abi) as EthPriceOracleInterfaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EthPriceOracleInterface {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as EthPriceOracleInterface;
  }
}