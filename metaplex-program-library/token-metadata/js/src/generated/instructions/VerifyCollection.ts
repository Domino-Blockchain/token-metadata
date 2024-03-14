/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';

/**
 * @category Instructions
 * @category VerifyCollection
 * @category generated
 */
export const VerifyCollectionStruct = new beet.BeetArgsStruct<{ instructionDiscriminator: number }>(
  [['instructionDiscriminator', beet.u8]],
  'VerifyCollectionInstructionArgs',
);
/**
 * Accounts required by the _VerifyCollection_ instruction
 *
 * @property [_writable_] metadata Metadata account
 * @property [_writable_, **signer**] collectionAuthority Collection Update authority
 * @property [_writable_, **signer**] payer payer
 * @property [] collectionMint Mint of the Collection
 * @property [] collection Metadata Account of the Collection
 * @property [] collectionMasterEditionAccount MasterEdition2 Account of the Collection Token
 * @category Instructions
 * @category VerifyCollection
 * @category generated
 */
export type VerifyCollectionInstructionAccounts = {
  metadata: web3.PublicKey;
  collectionAuthority: web3.PublicKey;
  payer: web3.PublicKey;
  collectionMint: web3.PublicKey;
  collection: web3.PublicKey;
  collectionMasterEditionAccount: web3.PublicKey;
};

export const verifyCollectionInstructionDiscriminator = 18;

/**
 * Creates a _VerifyCollection_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category VerifyCollection
 * @category generated
 */
export function createVerifyCollectionInstruction(
  accounts: VerifyCollectionInstructionAccounts,
  programId = new web3.PublicKey('MetaXKaVt8cn9dGYns81au23cqBYUH4DU4WpC8tAbhQ'),
) {
  const [data] = VerifyCollectionStruct.serialize({
    instructionDiscriminator: verifyCollectionInstructionDiscriminator,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.metadata,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.collectionAuthority,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.payer,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.collectionMint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.collection,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.collectionMasterEditionAccount,
      isWritable: false,
      isSigner: false,
    },
  ];

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  });
  return ix;
}
