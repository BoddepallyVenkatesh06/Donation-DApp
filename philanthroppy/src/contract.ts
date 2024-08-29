import { Donation as DonationEvent } from "../generated/Contract/Contract"
import { Donation } from "../generated/schema"

export function handleDonation(event: DonationEvent): void {
  let entity = new Donation(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.name = event.params.name
  entity.message = event.params.message
  entity.timestamp = event.params.timestamp
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
