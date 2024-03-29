/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface KittyInterfaceInterface extends ethers.utils.Interface {
  functions: {
    "getKitty(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getKitty",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "getKitty", data: BytesLike): Result;

  events: {};
}

export class KittyInterface extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: KittyInterfaceInterface;

  functions: {
    getKitty(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        boolean,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        isGestating: boolean;
        isReady: boolean;
        cooldownIndex: BigNumber;
        nextActionAt: BigNumber;
        siringWithId: BigNumber;
        birthTime: BigNumber;
        matronId: BigNumber;
        sireId: BigNumber;
        generation: BigNumber;
        genes: BigNumber;
      }
    >;
  };

  getKitty(
    _id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      boolean,
      boolean,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber
    ] & {
      isGestating: boolean;
      isReady: boolean;
      cooldownIndex: BigNumber;
      nextActionAt: BigNumber;
      siringWithId: BigNumber;
      birthTime: BigNumber;
      matronId: BigNumber;
      sireId: BigNumber;
      generation: BigNumber;
      genes: BigNumber;
    }
  >;

  callStatic: {
    getKitty(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        boolean,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        isGestating: boolean;
        isReady: boolean;
        cooldownIndex: BigNumber;
        nextActionAt: BigNumber;
        siringWithId: BigNumber;
        birthTime: BigNumber;
        matronId: BigNumber;
        sireId: BigNumber;
        generation: BigNumber;
        genes: BigNumber;
      }
    >;
  };

  filters: {};

  estimateGas: {
    getKitty(_id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getKitty(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
