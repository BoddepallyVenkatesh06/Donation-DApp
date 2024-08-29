import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { Donation } from "../generated/Contract/Contract"

export function createDonationEvent(
  from: Address,
  name: string,
  message: string,
  timestamp: BigInt,
  amount: BigInt
): Donation {
  let donationEvent = changetype<Donation>(newMockEvent())

  donationEvent.parameters = new Array()

  donationEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  donationEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  donationEvent.parameters.push(
    new ethereum.EventParam("message", ethereum.Value.fromString(message))
  )
  donationEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )
  donationEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return donationEvent
}
