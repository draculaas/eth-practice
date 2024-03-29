/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  KittyInterface,
  KittyInterfaceInterface,
} from "../KittyInterface";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getKitty",
    outputs: [
      {
        internalType: "bool",
        name: "isGestating",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "isReady",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "cooldownIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "nextActionAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "siringWithId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "birthTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "matronId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "sireId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "generation",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "genes",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610203806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063e98b7f4d14610030575b600080fd5b61004a600480360381019061004591906100bd565b610069565b6040516100609a99989796959493929190610104565b60405180910390f35b60008060008060008060008060008060018060008060008060008060008099509950995099509950995099509950995099509193959799509193959799565b6000813590506100b7816101b6565b92915050565b6000602082840312156100cf57600080fd5b60006100dd848285016100a8565b91505092915050565b6100ef816101a0565b82525050565b6100fe816101ac565b82525050565b60006101408201905061011a600083018d6100e6565b610127602083018c6100e6565b610134604083018b6100f5565b610141606083018a6100f5565b61014e60808301896100f5565b61015b60a08301886100f5565b61016860c08301876100f5565b61017560e08301866100f5565b6101836101008301856100f5565b6101916101208301846100f5565b9b9a5050505050505050505050565b60008115159050919050565b6000819050919050565b6101bf816101ac565b81146101ca57600080fd5b5056fea26469706673582212200efb3a0a119e500745d05978be75a3f08b70ce0055aac8ea76baebdabac4319c64736f6c63430008040033";

export class KittyInterface__factory extends ContractFactory {
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
  ): Promise<KittyInterface> {
    return super.deploy(overrides || {}) as Promise<KittyInterface>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): KittyInterface {
    return super.attach(address) as KittyInterface;
  }
  connect(signer: Signer): KittyInterface__factory {
    return super.connect(signer) as KittyInterface__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): KittyInterfaceInterface {
    return new utils.Interface(_abi) as KittyInterfaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): KittyInterface {
    return new Contract(address, _abi, signerOrProvider) as KittyInterface;
  }
}
