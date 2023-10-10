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
 * @category PrintPurchaseReceipt
 * @category generated
 */
export type PrintPurchaseReceiptInstructionArgs = {
  purchaseReceiptBump: number;
};
/**
 * @category Instructions
 * @category PrintPurchaseReceipt
 * @category generated
 */
export const printPurchaseReceiptStruct = new beet.BeetArgsStruct<
  PrintPurchaseReceiptInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */;
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['purchaseReceiptBump', beet.u8],
  ],
  'PrintPurchaseReceiptInstructionArgs',
);
/**
 * Accounts required by the _printPurchaseReceipt_ instruction
 *
 * @property [_writable_] purchaseReceipt
 * @property [_writable_] listingReceipt
 * @property [_writable_] bidReceipt
 * @property [_writable_, **signer**] bookkeeper
 * @property [] instruction
 * @category Instructions
 * @category PrintPurchaseReceipt
 * @category generated
 */
export type PrintPurchaseReceiptInstructionAccounts = {
  purchaseReceipt: web3.PublicKey;
  listingReceipt: web3.PublicKey;
  bidReceipt: web3.PublicKey;
  bookkeeper: web3.PublicKey;
  systemProgram?: web3.PublicKey;
  rent?: web3.PublicKey;
  instruction: web3.PublicKey;
  anchorRemainingAccounts?: web3.AccountMeta[];
};

export const printPurchaseReceiptInstructionDiscriminator = [227, 154, 251, 7, 180, 56, 100, 143];

/**
 * Creates a _PrintPurchaseReceipt_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category PrintPurchaseReceipt
 * @category generated
 */
export function createPrintPurchaseReceiptInstruction(
  accounts: PrintPurchaseReceiptInstructionAccounts,
  args: PrintPurchaseReceiptInstructionArgs,
  programId = new web3.PublicKey('hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk'),
) {
  const [data] = printPurchaseReceiptStruct.serialize({
    instructionDiscriminator: printPurchaseReceiptInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.purchaseReceipt,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.listingReceipt,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.bidReceipt,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.bookkeeper,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.rent ?? web3.SYSVAR_RENT_PUBKEY,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.instruction,
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
