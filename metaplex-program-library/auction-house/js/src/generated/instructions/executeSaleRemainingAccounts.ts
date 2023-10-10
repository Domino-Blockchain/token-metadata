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
 * @category ExecuteSaleRemainingAccounts
 * @category generated
 */
export const executeSaleRemainingAccountsStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number[] /* size: 8 */;
}>(
  [['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]],
  'ExecuteSaleRemainingAccountsInstructionArgs',
);
/**
 * Accounts required by the _executeSaleRemainingAccounts_ instruction
 *
 * @property [] metadataProgram
 * @property [] edition
 * @property [_writable_] ownerTr
 * @property [_writable_] destinationTr
 * @property [] authRulesProgram
 * @property [] authRules
 * @property [] sysvarInstructions
 * @category Instructions
 * @category ExecuteSaleRemainingAccounts
 * @category generated
 */
export type ExecuteSaleRemainingAccountsInstructionAccounts = {
  metadataProgram: web3.PublicKey;
  edition: web3.PublicKey;
  ownerTr: web3.PublicKey;
  destinationTr: web3.PublicKey;
  authRulesProgram: web3.PublicKey;
  authRules: web3.PublicKey;
  sysvarInstructions: web3.PublicKey;
  anchorRemainingAccounts?: web3.AccountMeta[];
};

export const executeSaleRemainingAccountsInstructionDiscriminator = [
  159, 12, 171, 254, 141, 198, 122, 7,
];

/**
 * Creates a _ExecuteSaleRemainingAccounts_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category ExecuteSaleRemainingAccounts
 * @category generated
 */
export function createExecuteSaleRemainingAccountsInstruction(
  accounts: ExecuteSaleRemainingAccountsInstructionAccounts,
  programId = new web3.PublicKey('hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk'),
) {
  const [data] = executeSaleRemainingAccountsStruct.serialize({
    instructionDiscriminator: executeSaleRemainingAccountsInstructionDiscriminator,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.metadataProgram,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.edition,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.ownerTr,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.destinationTr,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.authRulesProgram,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.authRules,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.sysvarInstructions,
      isWritable: false,
      isSigner: false,
    },
  ];

  if (accounts.anchorRemainingAccounts != null) {
    for (const acc of accounts.anchorRemainingAccounts) {
      keys.push(acc);
    }
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  });
  return ix;
}
