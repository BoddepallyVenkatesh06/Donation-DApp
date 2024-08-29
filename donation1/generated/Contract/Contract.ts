// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Donation extends ethereum.Event {
  get params(): Donation__Params {
    return new Donation__Params(this);
  }
}

export class Donation__Params {
  _event: Donation;

  constructor(event: Donation) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get name(): string {
    return this._event.parameters[1].value.toString();
  }

  get message(): string {
    return this._event.parameters[2].value.toString();
  }

  get timestamp(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class Contract extends ethereum.SmartContract {
  static bind(address: Address): Contract {
    return new Contract("Contract", address);
  }
}

export class BuyChaiCall extends ethereum.Call {
  get inputs(): BuyChaiCall__Inputs {
    return new BuyChaiCall__Inputs(this);
  }

  get outputs(): BuyChaiCall__Outputs {
    return new BuyChaiCall__Outputs(this);
  }
}

export class BuyChaiCall__Inputs {
  _call: BuyChaiCall;

  constructor(call: BuyChaiCall) {
    this._call = call;
  }

  get name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get message(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class BuyChaiCall__Outputs {
  _call: BuyChaiCall;

  constructor(call: BuyChaiCall) {
    this._call = call;
  }
}
