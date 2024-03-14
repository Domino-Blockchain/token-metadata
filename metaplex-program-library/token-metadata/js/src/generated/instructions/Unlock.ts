/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';
import { UnlockArgs, unlockArgsBeet } from '../types/UnlockArgs';

/**
 * @category Instructions
 * @category Unlock
 * @category generated
 */
export type UnlockInstructionArgs = {
  unlockArgs: UnlockArgs;
};
/**
 * @category Instructions
 * @category Unlock
 * @category generated
 */
export const UnlockStruct = new beet.FixableBeetArgsStruct<
  UnlockInstructionArgs & {
    instructionDiscriminator: number;
  }
>(
  [
    ['instructionDiscriminator', beet.u8],
    ['unlockArgs', unlockArgsBeet],
  ],
  'UnlockInstructionArgs',
);
/**
 * Accounts required by the _Unlock_ instruction
 *
 * @property [**signer**] authority Delegate or freeze authority
 * @property [] tokenOwner (optional) Token owner account
 * @property [_writable_] token Token account
 * @property [] mint Mint account
 * @property [_writable_] metadata Metadata account
 * @property [] edition (optional) Edition account
 * @property [_writable_] tokenRecord (optional) Token record account
 * @property [_writable_, **signer**] payer Payer
 * @property [] sysvarInstructions System program
 * @property [] splTokenProgram (optional) SPL Token Program
 * @property [] authorizationRulesProgram (optional) Token Authorization Rules Program
 * @property [] authorizationRules (optional) Token Authorization Rules account
 * @category Instructions
 * @category Unlock
 * @category generated
 */
export type UnlockInstructionAccounts = {
  authority: web3.PublicKey;
  tokenOwner?: web3.PublicKey;
  token: web3.PublicKey;
  mint: web3.PublicKey;
  metadata: web3.PublicKey;
  edition?: web3.PublicKey;
  tokenRecord?: web3.PublicKey;
  payer: web3.PublicKey;
  systemProgram?: web3.PublicKey;
  sysvarInstructions: web3.PublicKey;
  splTokenProgram?: web3.PublicKey;
  authorizationRulesProgram?: web3.PublicKey;
  authorizationRules?: web3.PublicKey;
};

export const unlockInstructionDiscriminator = 47;

/**
 * Creates a _Unlock_ instruction.
 *
 * Optional accounts that are not provided default to the program ID since
 * this was indicated in the IDL from which this instruction was generated.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category Unlock
 * @category generated
 */
export function createUnlockInstruction(
  accounts: UnlockInstructionAccounts,
  args: UnlockInstructionArgs,
  programId = new web3.PublicKey('MetaXKaVt8cn9dGYns81au23cqBYUH4DU4WpC8tAbhQ'),
) {
  const [data] = UnlockStruct.serialize({
    instructionDiscriminator: unlockInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.authority,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.tokenOwner ?? programId,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.token,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.mint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.metadata,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.edition ?? programId,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenRecord ?? programId,
      isWritable: accounts.tokenRecord != null,
      isSigner: false,
    },
    {
      pubkey: accounts.payer,
      isWritable: true,
      isSigner: true,
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
      pubkey: accounts.splTokenProgram ?? programId,
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
