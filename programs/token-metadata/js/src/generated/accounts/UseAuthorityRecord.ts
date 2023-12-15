/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';
import * as beetSolana from '@metaplex-foundation/beet-solana';
import { Key, keyBeet } from '../types/Key';

/**
 * Arguments used to create {@link UseAuthorityRecord}
 * @category Accounts
 * @category generated
 */
export type UseAuthorityRecordArgs = {
  key: Key;
  allowedUses: beet.bignum;
  bump: number;
};
/**
 * Holds the data for the {@link UseAuthorityRecord} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class UseAuthorityRecord implements UseAuthorityRecordArgs {
  private constructor(
    readonly key: Key,
    readonly allowedUses: beet.bignum,
    readonly bump: number,
  ) {}

  /**
   * Creates a {@link UseAuthorityRecord} instance from the provided args.
   */
  static fromArgs(args: UseAuthorityRecordArgs) {
    return new UseAuthorityRecord(args.key, args.allowedUses, args.bump);
  }

  /**
   * Deserializes the {@link UseAuthorityRecord} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0,
  ): [UseAuthorityRecord, number] {
    return UseAuthorityRecord.deserialize(accountInfo.data, offset);
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link UseAuthorityRecord} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig,
  ): Promise<UseAuthorityRecord> {
    const accountInfo = await connection.getAccountInfo(address, commitmentOrConfig);
    if (accountInfo == null) {
      throw new Error(`Unable to find UseAuthorityRecord account at ${address}`);
    }
    return UseAuthorityRecord.fromAccountInfo(accountInfo, 0)[0];
  }

  /**
   * Provides a {@link web3.Connection.getProgramAccounts} config builder,
   * to fetch accounts matching filters that can be specified via that builder.
   *
   * @param programId - the program that owns the accounts we are filtering
   */
  static gpaBuilder(
    programId: web3.PublicKey = new web3.PublicKey('meta3c863KN6CX6HXzfmDHbURDkfJ5HMCwUT5SEqu5C'),
  ) {
    return beetSolana.GpaBuilder.fromStruct(programId, useAuthorityRecordBeet);
  }

  /**
   * Deserializes the {@link UseAuthorityRecord} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [UseAuthorityRecord, number] {
    return useAuthorityRecordBeet.deserialize(buf, offset);
  }

  /**
   * Serializes the {@link UseAuthorityRecord} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return useAuthorityRecordBeet.serialize(this);
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link UseAuthorityRecord}
   */
  static get byteSize() {
    return useAuthorityRecordBeet.byteSize;
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link UseAuthorityRecord} data from rent
   *
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    connection: web3.Connection,
    commitment?: web3.Commitment,
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(UseAuthorityRecord.byteSize, commitment);
  }

  /**
   * Determines if the provided {@link Buffer} has the correct byte size to
   * hold {@link UseAuthorityRecord} data.
   */
  static hasCorrectByteSize(buf: Buffer, offset = 0) {
    return buf.byteLength - offset === UseAuthorityRecord.byteSize;
  }

  /**
   * Returns a readable version of {@link UseAuthorityRecord} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      key: 'Key.' + Key[this.key],
      allowedUses: (() => {
        const x = <{ toNumber: () => number }>this.allowedUses;
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber();
          } catch (_) {
            return x;
          }
        }
        return x;
      })(),
      bump: this.bump,
    };
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const useAuthorityRecordBeet = new beet.BeetStruct<
  UseAuthorityRecord,
  UseAuthorityRecordArgs
>(
  [
    ['key', keyBeet],
    ['allowedUses', beet.u64],
    ['bump', beet.u8],
  ],
  UseAuthorityRecord.fromArgs,
  'UseAuthorityRecord',
);
