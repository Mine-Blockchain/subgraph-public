import { AddPool, PolkaminePoolManager, RemovePool, StakeChange } from '../generated/PolkaminePoolManager/PolkaminePoolManager'
import { Pool, PoolStake, UserStake } from '../generated/schema'

export function handleAddPool(event: AddPool): void {
  let pool = new Pool(event.params.pid.toString())
  pool.depositToken = event.params.depositToken
  pool.rewardToken = event.params.rewardToken
  pool.deprecated = false
  pool.save()
}

export function handleRemovePool(event: RemovePool): void {
  let id = event.params.pid.toString()
  let pool = Pool.load(id)
  pool.deprecated = true
  pool.save()
}

export function handleStakeChange(event: StakeChange): void {
  let userStake = new UserStake(event.transaction.hash.toHexString() + '-' + event.params.user.toHexString())
  userStake.poolId = event.params.pid
  userStake.user = event.params.user
  userStake.fromAmount = event.params.fromAmount
  userStake.toAmount = event.params.toAmount
  userStake.updatedAt = event.block.timestamp
  userStake.save()

  let poolStake = new PoolStake(event.transaction.hash.toHexString() + '-' + event.params.pid.toHexString())
  poolStake.poolId = event.params.pid
  poolStake.toAmount = PolkaminePoolManager.bind(event.address).poolStakes(poolStake.poolId)
  poolStake.fromAmount = event.params.fromAmount.plus(poolStake.toAmount).minus(event.params.toAmount)
  poolStake.updatedAt = event.block.timestamp
  poolStake.updatedBy = event.params.user
  poolStake.save()
}
