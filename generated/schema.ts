// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Pool extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Pool entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Pool entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Pool", id.toString(), this);
  }

  static load(id: string): Pool | null {
    return store.get("Pool", id) as Pool | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get depositToken(): Bytes {
    let value = this.get("depositToken");
    return value.toBytes();
  }

  set depositToken(value: Bytes) {
    this.set("depositToken", Value.fromBytes(value));
  }

  get rewardToken(): Bytes {
    let value = this.get("rewardToken");
    return value.toBytes();
  }

  set rewardToken(value: Bytes) {
    this.set("rewardToken", Value.fromBytes(value));
  }

  get deprecated(): boolean {
    let value = this.get("deprecated");
    return value.toBoolean();
  }

  set deprecated(value: boolean) {
    this.set("deprecated", Value.fromBoolean(value));
  }
}

export class PoolStake extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save PoolStake entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save PoolStake entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("PoolStake", id.toString(), this);
  }

  static load(id: string): PoolStake | null {
    return store.get("PoolStake", id) as PoolStake | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get poolId(): BigInt {
    let value = this.get("poolId");
    return value.toBigInt();
  }

  set poolId(value: BigInt) {
    this.set("poolId", Value.fromBigInt(value));
  }

  get fromAmount(): BigInt {
    let value = this.get("fromAmount");
    return value.toBigInt();
  }

  set fromAmount(value: BigInt) {
    this.set("fromAmount", Value.fromBigInt(value));
  }

  get toAmount(): BigInt {
    let value = this.get("toAmount");
    return value.toBigInt();
  }

  set toAmount(value: BigInt) {
    this.set("toAmount", Value.fromBigInt(value));
  }

  get updatedBy(): Bytes {
    let value = this.get("updatedBy");
    return value.toBytes();
  }

  set updatedBy(value: Bytes) {
    this.set("updatedBy", Value.fromBytes(value));
  }

  get updatedAt(): BigInt {
    let value = this.get("updatedAt");
    return value.toBigInt();
  }

  set updatedAt(value: BigInt) {
    this.set("updatedAt", Value.fromBigInt(value));
  }
}

export class PoolClaim extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save PoolClaim entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save PoolClaim entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("PoolClaim", id.toString(), this);
  }

  static load(id: string): PoolClaim | null {
    return store.get("PoolClaim", id) as PoolClaim | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get poolId(): BigInt {
    let value = this.get("poolId");
    return value.toBigInt();
  }

  set poolId(value: BigInt) {
    this.set("poolId", Value.fromBigInt(value));
  }

  get claimedAmount(): BigInt {
    let value = this.get("claimedAmount");
    return value.toBigInt();
  }

  set claimedAmount(value: BigInt) {
    this.set("claimedAmount", Value.fromBigInt(value));
  }

  get claimedBy(): Bytes {
    let value = this.get("claimedBy");
    return value.toBytes();
  }

  set claimedBy(value: Bytes) {
    this.set("claimedBy", Value.fromBytes(value));
  }

  get claimedAt(): BigInt {
    let value = this.get("claimedAt");
    return value.toBigInt();
  }

  set claimedAt(value: BigInt) {
    this.set("claimedAt", Value.fromBigInt(value));
  }
}

export class UserStake extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save UserStake entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save UserStake entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("UserStake", id.toString(), this);
  }

  static load(id: string): UserStake | null {
    return store.get("UserStake", id) as UserStake | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user(): Bytes {
    let value = this.get("user");
    return value.toBytes();
  }

  set user(value: Bytes) {
    this.set("user", Value.fromBytes(value));
  }

  get poolId(): BigInt {
    let value = this.get("poolId");
    return value.toBigInt();
  }

  set poolId(value: BigInt) {
    this.set("poolId", Value.fromBigInt(value));
  }

  get fromAmount(): BigInt {
    let value = this.get("fromAmount");
    return value.toBigInt();
  }

  set fromAmount(value: BigInt) {
    this.set("fromAmount", Value.fromBigInt(value));
  }

  get toAmount(): BigInt {
    let value = this.get("toAmount");
    return value.toBigInt();
  }

  set toAmount(value: BigInt) {
    this.set("toAmount", Value.fromBigInt(value));
  }

  get updatedAt(): BigInt {
    let value = this.get("updatedAt");
    return value.toBigInt();
  }

  set updatedAt(value: BigInt) {
    this.set("updatedAt", Value.fromBigInt(value));
  }
}

export class UserClaim extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save UserClaim entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save UserClaim entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("UserClaim", id.toString(), this);
  }

  static load(id: string): UserClaim | null {
    return store.get("UserClaim", id) as UserClaim | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user(): Bytes {
    let value = this.get("user");
    return value.toBytes();
  }

  set user(value: Bytes) {
    this.set("user", Value.fromBytes(value));
  }

  get poolId(): BigInt {
    let value = this.get("poolId");
    return value.toBigInt();
  }

  set poolId(value: BigInt) {
    this.set("poolId", Value.fromBigInt(value));
  }

  get claimedAmount(): BigInt {
    let value = this.get("claimedAmount");
    return value.toBigInt();
  }

  set claimedAmount(value: BigInt) {
    this.set("claimedAmount", Value.fromBigInt(value));
  }

  get claimedAt(): BigInt {
    let value = this.get("claimedAt");
    return value.toBigInt();
  }

  set claimedAt(value: BigInt) {
    this.set("claimedAt", Value.fromBigInt(value));
  }
}
