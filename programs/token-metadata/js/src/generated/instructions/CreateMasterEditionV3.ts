/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@solana/spl-token';
import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';
import {
  CreateMasterEditionArgs,
  createMasterEditionArgsBeet,
} from '../types/CreateMasterEditionArgs';

/**
 * @category Instructions
 * @category CreateMasterEditionV3
 * @category generated
 */
export type CreateMasterEditionV3InstructionArgs = {
  createMasterEditionArgs: CreateMasterEditionArgs;
};
/**
 * @category Instructions
 * @category CreateMasterEditionV3
 * @category generated
 */
export const CreateMasterEditionV3Struct = new beet.FixableBeetArgsStruct<
  CreateMasterEditionV3InstructionArgs & {
    instructionDiscriminator: number;
  }
>(
  [
    ['instructionDiscriminator', beet.u8],
    ['createMasterEditionArgs', createMasterEditionArgsBeet],
  ],
  'CreateMasterEditionV3InstructionArgs',
);
/**
 * Accounts required by the _CreateMasterEditionV3_ instruction
 *
 * @property [_writable_] edition Unallocated edition V2 account with address as pda of ['metadata', program id, mint, 'edition']
 * @property [_writable_] mint Metadata mint
 * @property [**signer**] updateAuthority Update authority
 * @property [**signer**] mintAuthority Mint authority on the metadata's mint - THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY
 * @property [_writable_, **signer**] payer payer
 * @property [_writable_] metadata Metadata account
 * @category Instructions
 * @category CreateMasterEditionV3
 * @category generated
 */
export type CreateMasterEditionV3InstructionAccounts = {
  edition: web3.PublicKey;
  mint: web3.PublicKey;
  updateAuthority: web3.PublicKey;
  mintAuthority: web3.PublicKey;
  payer: web3.PublicKey;
  metadata: web3.PublicKey;
  tokenProgram?: web3.PublicKey;
  systemProgram?: web3.PublicKey;
  rent?: web3.PublicKey;
};

export const createMasterEditionV3InstructionDiscriminator = 17;

/**
 * Creates a _CreateMasterEditionV3_ instruction.
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
 * @category CreateMasterEditionV3
 * @category generated
 */
export function createCreateMasterEditionV3Instruction(
  accounts: CreateMasterEditionV3InstructionAccounts,
  args: CreateMasterEditionV3InstructionArgs,
  programId = new web3.PublicKey('MetaXKaVt8cn9dGYns81au23cqBYUH4DU4WpC8tAbhQ'),
) {
  const [data] = CreateMasterEditionV3Struct.serialize({
    instructionDiscriminator: createMasterEditionV3InstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.edition,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.mint,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.updateAuthority,
      isWritable: false,
      isSigner: true,
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
      pubkey: accounts.metadata,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenProgram ?? splToken.TOKEN_PROGRAM_ID,
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
