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
 * Arguments used to create {@link MetadataDelegateRecord}
 * @category Accounts
 * @category generated
 */
export type MetadataDelegateRecordArgs = {
  key: Key;
  bump: number;
  mint: web3.PublicKey;
  delegate: web3.PublicKey;
  updateAuthority: web3.PublicKey;
};
/**
 * Holds the data for the {@link MetadataDelegateRecord} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class MetadataDelegateRecord implements MetadataDelegateRecordArgs {
  private constructor(
    readonly key: Key,
    readonly bump: number,
    readonly mint: web3.PublicKey,
    readonly delegate: web3.PublicKey,
    readonly updateAuthority: web3.PublicKey,
  ) {}

  /**
   * Creates a {@link MetadataDelegateRecord} instance from the provided args.
   */
  static fromArgs(args: MetadataDelegateRecordArgs) {
    return new MetadataDelegateRecord(
      args.key,
      args.bump,
      args.mint,
      args.delegate,
      args.updateAuthority,
    );
  }

  /**
   * Deserializes the {@link MetadataDelegateRecord} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0,
  ): [MetadataDelegateRecord, number] {
    return MetadataDelegateRecord.deserialize(accountInfo.data, offset);
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link MetadataDelegateRecord} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig,
  ): Promise<MetadataDelegateRecord> {
    const accountInfo = await connection.getAccountInfo(address, commitmentOrConfig);
    if (accountInfo == null) {
      throw new Error(`Unable to find MetadataDelegateRecord account at ${address}`);
    }
    return MetadataDelegateRecord.fromAccountInfo(accountInfo, 0)[0];
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
    return beetSolana.GpaBuilder.fromStruct(programId, metadataDelegateRecordBeet);
  }

  /**
   * Deserializes the {@link MetadataDelegateRecord} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [MetadataDelegateRecord, number] {
    return metadataDelegateRecordBeet.deserialize(buf, offset);
  }

  /**
   * Serializes the {@link MetadataDelegateRecord} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return metadataDelegateRecordBeet.serialize(this);
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link MetadataDelegateRecord}
   */
  static get byteSize() {
    return metadataDelegateRecordBeet.byteSize;
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link MetadataDelegateRecord} data from rent
   *
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    connection: web3.Connection,
    commitment?: web3.Commitment,
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      MetadataDelegateRecord.byteSize,
      commitment,
    );
  }

  /**
   * Determines if the provided {@link Buffer} has the correct byte size to
   * hold {@link MetadataDelegateRecord} data.
   */
  static hasCorrectByteSize(buf: Buffer, offset = 0) {
    return buf.byteLength - offset === MetadataDelegateRecord.byteSize;
  }

  /**
   * Returns a readable version of {@link MetadataDelegateRecord} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      key: 'Key.' + Key[this.key],
      bump: this.bump,
      mint: this.mint.toBase58(),
      delegate: this.delegate.toBase58(),
      updateAuthority: this.updateAuthority.toBase58(),
    };
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const metadataDelegateRecordBeet = new beet.BeetStruct<
  MetadataDelegateRecord,
  MetadataDelegateRecordArgs
>(
  [
    ['key', keyBeet],
    ['bump', beet.u8],
    ['mint', beetSolana.publicKey],
    ['delegate', beetSolana.publicKey],
    ['updateAuthority', beetSolana.publicKey],
  ],
  MetadataDelegateRecord.fromArgs,
  'MetadataDelegateRecord',
);
