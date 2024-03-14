/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js';
import * as beet from '@metaplex-foundation/beet';
import * as beetSolana from '@metaplex-foundation/beet-solana';
import { Key, keyBeet } from '../types/Key';

/**
 * Arguments used to create {@link CollectionAuthorityRecord}
 * @category Accounts
 * @category generated
 */
export type CollectionAuthorityRecordArgs = {
  key: Key;
  bump: number;
  updateAuthority: beet.COption<web3.PublicKey>;
};
/**
 * Holds the data for the {@link CollectionAuthorityRecord} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class CollectionAuthorityRecord implements CollectionAuthorityRecordArgs {
  private constructor(
    readonly key: Key,
    readonly bump: number,
    readonly updateAuthority: beet.COption<web3.PublicKey>,
  ) {}

  /**
   * Creates a {@link CollectionAuthorityRecord} instance from the provided args.
   */
  static fromArgs(args: CollectionAuthorityRecordArgs) {
    return new CollectionAuthorityRecord(args.key, args.bump, args.updateAuthority);
  }

  /**
   * Deserializes the {@link CollectionAuthorityRecord} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0,
  ): [CollectionAuthorityRecord, number] {
    return CollectionAuthorityRecord.deserialize(accountInfo.data, offset);
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link CollectionAuthorityRecord} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig,
  ): Promise<CollectionAuthorityRecord> {
    const accountInfo = await connection.getAccountInfo(address, commitmentOrConfig);
    if (accountInfo == null) {
      throw new Error(`Unable to find CollectionAuthorityRecord account at ${address}`);
    }
    return CollectionAuthorityRecord.fromAccountInfo(accountInfo, 0)[0];
  }

  /**
   * Provides a {@link web3.Connection.getProgramAccounts} config builder,
   * to fetch accounts matching filters that can be specified via that builder.
   *
   * @param programId - the program that owns the accounts we are filtering
   */
  static gpaBuilder(
    programId: web3.PublicKey = new web3.PublicKey('MetaXKaVt8cn9dGYns81au23cqBYUH4DU4WpC8tAbhQ'),
  ) {
    return beetSolana.GpaBuilder.fromStruct(programId, collectionAuthorityRecordBeet);
  }

  /**
   * Deserializes the {@link CollectionAuthorityRecord} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [CollectionAuthorityRecord, number] {
    return collectionAuthorityRecordBeet.deserialize(buf, offset);
  }

  /**
   * Serializes the {@link CollectionAuthorityRecord} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return collectionAuthorityRecordBeet.serialize(this);
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link CollectionAuthorityRecord} for the provided args.
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   */
  static byteSize(args: CollectionAuthorityRecordArgs) {
    const instance = CollectionAuthorityRecord.fromArgs(args);
    return collectionAuthorityRecordBeet.toFixedFromValue(instance).byteSize;
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link CollectionAuthorityRecord} data from rent
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    args: CollectionAuthorityRecordArgs,
    connection: web3.Connection,
    commitment?: web3.Commitment,
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      CollectionAuthorityRecord.byteSize(args),
      commitment,
    );
  }

  /**
   * Returns a readable version of {@link CollectionAuthorityRecord} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      key: 'Key.' + Key[this.key],
      bump: this.bump,
      updateAuthority: this.updateAuthority,
    };
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const collectionAuthorityRecordBeet = new beet.FixableBeetStruct<
  CollectionAuthorityRecord,
  CollectionAuthorityRecordArgs
>(
  [
    ['key', keyBeet],
    ['bump', beet.u8],
    ['updateAuthority', beet.coption(beetSolana.publicKey)],
  ],
  CollectionAuthorityRecord.fromArgs,
  'CollectionAuthorityRecord',
);
