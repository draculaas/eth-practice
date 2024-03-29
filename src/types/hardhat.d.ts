/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Counter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Counter__factory>;
    getContractFactory(
      name: "ERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721__factory>;
    getContractFactory(
      name: "A",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.A__factory>;
    getContractFactory(
      name: "B",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.B__factory>;
    getContractFactory(
      name: "Hero",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Hero__factory>;
    getContractFactory(
      name: "CallerContractInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CallerContractInterface__factory>;
    getContractFactory(
      name: "CallerContract",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CallerContract__factory>;
    getContractFactory(
      name: "EthPriceOracleInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EthPriceOracleInterface__factory>;
    getContractFactory(
      name: "EthPriceOracle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EthPriceOracle__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "TestHero",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestHero__factory>;
    getContractFactory(
      name: "ZombieAttack",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ZombieAttack__factory>;
    getContractFactory(
      name: "ZombieFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ZombieFactory__factory>;
    getContractFactory(
      name: "KittyInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KittyInterface__factory>;
    getContractFactory(
      name: "ZombieFeeding",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ZombieFeeding__factory>;
    getContractFactory(
      name: "ZombieHelper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ZombieHelper__factory>;
    getContractFactory(
      name: "ZombieOwnership",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ZombieOwnership__factory>;

    getContractAt(
      name: "Counter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Counter>;
    getContractAt(
      name: "ERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721>;
    getContractAt(
      name: "A",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.A>;
    getContractAt(
      name: "B",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.B>;
    getContractAt(
      name: "Hero",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Hero>;
    getContractAt(
      name: "CallerContractInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CallerContractInterface>;
    getContractAt(
      name: "CallerContract",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CallerContract>;
    getContractAt(
      name: "EthPriceOracleInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.EthPriceOracleInterface>;
    getContractAt(
      name: "EthPriceOracle",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.EthPriceOracle>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "TestHero",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestHero>;
    getContractAt(
      name: "ZombieAttack",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ZombieAttack>;
    getContractAt(
      name: "ZombieFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ZombieFactory>;
    getContractAt(
      name: "KittyInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KittyInterface>;
    getContractAt(
      name: "ZombieFeeding",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ZombieFeeding>;
    getContractAt(
      name: "ZombieHelper",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ZombieHelper>;
    getContractAt(
      name: "ZombieOwnership",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ZombieOwnership>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
