/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';
import { UpdateArgs, updateArgsBeet } from '../types/UpdateArgs';

/**
 * @category Instructions
 * @category Update
 * @category generated
 */
export type UpdateInstructionArgs = {
  updateArgs: UpdateArgs;
};
/**
 * @category Instructions
 * @category Update
 * @category generated
 */
export const UpdateStruct = new beet.FixableBeetArgsStruct<
  UpdateInstructionArgs & {
    instructionDiscriminator: number;
  }
>(
  [
    ['instructionDiscriminator', beet.u8],
    ['updateArgs', updateArgsBeet],
  ],
  'UpdateInstructionArgs',
);
/**
 * Accounts required by the _Update_ instruction
 *
 * @property [**signer**] authority Update authority or delegate
 * @property [] delegateRecord (optional) Delegate record PDA
 * @property [] token (optional) Token account
 * @property [] mint Mint account
 * @property [_writable_] metadata Metadata account
 * @property [] edition (optional) Edition account
 * @property [_writable_, **signer**] payer Payer
 * @property [] sysvarInstructions Instructions sysvar account
 * @property [] authorizationRulesProgram (optional) Token Authorization Rules Program
 * @property [] authorizationRules (optional) Token Authorization Rules account
 * @category Instructions
 * @category Update
 * @category generated
 */
export type UpdateInstructionAccounts = {
  authority: web3.PublicKey;
  delegateRecord?: web3.PublicKey;
  token?: web3.PublicKey;
  mint: web3.PublicKey;
  metadata: web3.PublicKey;
  edition?: web3.PublicKey;
  payer: web3.PublicKey;
  systemProgram?: web3.PublicKey;
  sysvarInstructions: web3.PublicKey;
  authorizationRulesProgram?: web3.PublicKey;
  authorizationRules?: web3.PublicKey;
};

export const updateInstructionDiscriminator = 50;

/**
 * Creates a _Update_ instruction.
 *
 * Optional accounts that are not provided default to the program ID since
 * this was indicated in the IDL from which this instruction was generated.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category Update
 * @category generated
 */
export function createUpdateInstruction(
  accounts: UpdateInstructionAccounts,
  args: UpdateInstructionArgs,
  programId = new web3.PublicKey('meta3c863KN6CX6HXzfmDHbURDkfJ5HMCwUT5SEqu5C'),
) {
  const [data] = UpdateStruct.serialize({
    instructionDiscriminator: updateInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.authority,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.delegateRecord ?? programId,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.token ?? programId,
      isWritable: false,
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
