/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';
import {
  CreateMetadataAccountArgsV2,
  createMetadataAccountArgsV2Beet,
} from '../types/CreateMetadataAccountArgsV2';

/**
 * @category Instructions
 * @category CreateMetadataAccountV2
 * @category generated
 */
export type CreateMetadataAccountV2InstructionArgs = {
  createMetadataAccountArgsV2: CreateMetadataAccountArgsV2;
};
/**
 * @category Instructions
 * @category CreateMetadataAccountV2
 * @category generated
 */
export const CreateMetadataAccountV2Struct = new beet.FixableBeetArgsStruct<
  CreateMetadataAccountV2InstructionArgs & {
    instructionDiscriminator: number;
  }
>(
  [
    ['instructionDiscriminator', beet.u8],
    ['createMetadataAccountArgsV2', createMetadataAccountArgsV2Beet],
  ],
  'CreateMetadataAccountV2InstructionArgs',
);
/**
 * Accounts required by the _CreateMetadataAccountV2_ instruction
 *
 * @property [_writable_] metadata Metadata key (pda of ['metadata', program id, mint id])
 * @property [] mint Mint of token asset
 * @property [**signer**] mintAuthority Mint authority
 * @property [_writable_, **signer**] payer payer
 * @property [] updateAuthority update authority info
 * @category Instructions
 * @category CreateMetadataAccountV2
 * @category generated
 */
export type CreateMetadataAccountV2InstructionAccounts = {
  metadata: web3.PublicKey;
  mint: web3.PublicKey;
  mintAuthority: web3.PublicKey;
  payer: web3.PublicKey;
  updateAuthority: web3.PublicKey;
  systemProgram?: web3.PublicKey;
  rent?: web3.PublicKey;
};

export const createMetadataAccountV2InstructionDiscriminator = 16;

/**
 * Creates a _CreateMetadataAccountV2_ instruction.
 *
 * Optional accounts that are not provided will be omitted from the accounts
 * array passed with the instruction.
 * An optional account that is set cannot follow an optional account that is unset.
 * Otherwise an Error is raised.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category CreateMetadataAccountV2
 * @category generated
 */
export function createCreateMetadataAccountV2Instruction(
  accounts: CreateMetadataAccountV2InstructionAccounts,
  args: CreateMetadataAccountV2InstructionArgs,
  programId = new web3.PublicKey('meta3c863KN6CX6HXzfmDHbURDkfJ5HMCwUT5SEqu5C'),
) {
  const [data] = CreateMetadataAccountV2Struct.serialize({
    instructionDiscriminator: createMetadataAccountV2InstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.metadata,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.mint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.mintAuthority,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.payer,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.updateAuthority,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
  ];

  if (accounts.rent != null) {
    keys.push({
      pubkey: accounts.rent,
      isWritable: false,
      isSigner: false,
    });
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  });
  return ix;
}
