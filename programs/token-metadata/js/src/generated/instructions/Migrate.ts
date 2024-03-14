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
 * @category Migrate
 * @category generated
 */
export const MigrateStruct = new beet.BeetArgsStruct<{ instructionDiscriminator: number }>(
  [['instructionDiscriminator', beet.u8]],
  'MigrateInstructionArgs',
);
/**
 * Accounts required by the _Migrate_ instruction
 *
 * @property [_writable_] metadata Metadata account
 * @property [_writable_] edition Edition account
 * @property [_writable_] token Token account
 * @property [] tokenOwner Token account owner
 * @property [] mint Mint account
 * @property [_writable_, **signer**] payer Payer
 * @property [**signer**] authority Update authority
 * @property [] collectionMetadata Collection metadata account
 * @property [] delegateRecord Delegate record account
 * @property [_writable_] tokenRecord Token record account
 * @property [] sysvarInstructions Instruction sysvar account
 * @property [] splTokenProgram SPL Token Program
 * @property [] authorizationRulesProgram (optional) Token Authorization Rules Program
 * @property [] authorizationRules (optional) Token Authorization Rules account
 * @category Instructions
 * @category Migrate
 * @category generated
 */
export type MigrateInstructionAccounts = {
  metadata: web3.PublicKey;
  edition: web3.PublicKey;
  token: web3.PublicKey;
  tokenOwner: web3.PublicKey;
  mint: web3.PublicKey;
  payer: web3.PublicKey;
  authority: web3.PublicKey;
  collectionMetadata: web3.PublicKey;
  delegateRecord: web3.PublicKey;
  tokenRecord: web3.PublicKey;
  systemProgram?: web3.PublicKey;
  sysvarInstructions: web3.PublicKey;
  splTokenProgram: web3.PublicKey;
  authorizationRulesProgram?: web3.PublicKey;
  authorizationRules?: web3.PublicKey;
};

export const migrateInstructionDiscriminator = 48;

/**
 * Creates a _Migrate_ instruction.
 *
 * Optional accounts that are not provided default to the program ID since
 * this was indicated in the IDL from which this instruction was generated.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category Migrate
 * @category generated
 */
export function createMigrateInstruction(
  accounts: MigrateInstructionAccounts,
  programId = new web3.PublicKey('MetaXKaVt8cn9dGYns81au23cqBYUH4DU4WpC8tAbhQ'),
) {
  const [data] = MigrateStruct.serialize({
    instructionDiscriminator: migrateInstructionDiscriminator,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.metadata,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.edition,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.token,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenOwner,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.mint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.payer,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.authority,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.collectionMetadata,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.delegateRecord,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenRecord,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.sysvarInstructions,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.splTokenProgram,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.authorizationRulesProgram ?? programId,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.authorizationRules ?? programId,
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
