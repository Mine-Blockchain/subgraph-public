import { Claim } from '../generated/PolkamineRewardDistributor/PolkamineRewardDistributor'
import { PoolClaim, UserClaim } from '../generated/schema'

export function handleClaim(event: Claim): void {
  let userClaim = new UserClaim(event.transaction.hash.toHexString() + '-' + event.params.beneficiary.toHexString())
  userClaim.user = event.params.beneficiary
  userClaim.poolId = event.params.pid
  userClaim.claimedAmount = event.params.amount
  userClaim.claimedAt = event.block.timestamp
  userClaim.save()

  let poolClaim = new PoolClaim(event.transaction.hash.toHexString() + '-' + event.params.pid.toHexString())
  poolClaim.poolId = event.params.pid
  poolClaim.claimedAmount = event.params.amount
  poolClaim.claimedAt = event.block.timestamp
  poolClaim.claimedBy = event.params.beneficiary
  poolClaim.save()
}
