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
 * Arguments used to create {@link MasterEditionV1}
 * @category Accounts
 * @category generated
 */
export type MasterEditionV1Args = {
  key: Key;
  supply: beet.bignum;
  maxSupply: beet.COption<beet.bignum>;
  printingMint: web3.PublicKey;
  oneTimePrintingAuthorizationMint: web3.PublicKey;
};
/**
 * Holds the data for the {@link MasterEditionV1} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class MasterEditionV1 implements MasterEditionV1Args {
  private constructor(
    readonly key: Key,
    readonly supply: beet.bignum,
    readonly maxSupply: beet.COption<beet.bignum>,
    readonly printingMint: web3.PublicKey,
    readonly oneTimePrintingAuthorizationMint: web3.PublicKey,
  ) {}

  /**
   * Creates a {@link MasterEditionV1} instance from the provided args.
   */
  static fromArgs(args: MasterEditionV1Args) {
    return new MasterEditionV1(
      args.key,
      args.supply,
      args.maxSupply,
      args.printingMint,
      args.oneTimePrintingAuthorizationMint,
    );
  }

  /**
   * Deserializes the {@link MasterEditionV1} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0,
  ): [MasterEditionV1, number] {
    return MasterEditionV1.deserialize(accountInfo.data, offset);
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link MasterEditionV1} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig,
  ): Promise<MasterEditionV1> {
    const accountInfo = await connection.getAccountInfo(address, commitmentOrConfig);
    if (accountInfo == null) {
      throw new Error(`Unable to find MasterEditionV1 account at ${address}`);
    }
    return MasterEditionV1.fromAccountInfo(accountInfo, 0)[0];
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
    return beetSolana.GpaBuilder.fromStruct(programId, masterEditionV1Beet);
  }

  /**
   * Deserializes the {@link MasterEditionV1} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [MasterEditionV1, number] {
    return masterEditionV1Beet.deserialize(buf, offset);
  }

  /**
   * Serializes the {@link MasterEditionV1} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return masterEditionV1Beet.serialize(this);
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link MasterEditionV1} for the provided args.
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   */
  static byteSize(args: MasterEditionV1Args) {
    const instance = MasterEditionV1.fromArgs(args);
    return masterEditionV1Beet.toFixedFromValue(instance).byteSize;
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link MasterEditionV1} data from rent
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    args: MasterEditionV1Args,
    connection: web3.Connection,
    commitment?: web3.Commitment,
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(MasterEditionV1.byteSize(args), commitment);
  }

  /**
   * Returns a readable version of {@link MasterEditionV1} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      key: 'Key.' + Key[this.key],
      supply: (() => {
        const x = <{ toNumber: () => number }>this.supply;
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber();
          } catch (_) {
            return x;
          }
        }
        return x;
      })(),
      maxSupply: this.maxSupply,
      printingMint: this.printingMint.toBase58(),
      oneTimePrintingAuthorizationMint: this.oneTimePrintingAuthorizationMint.toBase58(),
    };
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const masterEditionV1Beet = new beet.FixableBeetStruct<MasterEditionV1, MasterEditionV1Args>(
  [
    ['key', keyBeet],
    ['supply', beet.u64],
    ['maxSupply', beet.coption(beet.u64)],
    ['printingMint', beetSolana.publicKey],
    ['oneTimePrintingAuthorizationMint', beetSolana.publicKey],
  ],
  MasterEditionV1.fromArgs,
  'MasterEditionV1',
);
