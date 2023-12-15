/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Context,
  Pda,
  PublicKey,
  Signer,
  TransactionBuilder,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import {
  Serializer,
  mapSerializer,
  struct,
  u8,
} from '@metaplex-foundation/umi/serializers';
import {
  ResolvedAccount,
  ResolvedAccountsWithIndices,
  getAccountMetasAndSigners,
} from '../shared';

// Accounts.
export type VerifyCollectionInstructionAccounts = {
  /** Metadata account */
  metadata: PublicKey | Pda;
  /** Collection Update authority */
  collectionAuthority: Signer;
  /** payer */
  payer?: Signer;
  /** Mint of the Collection */
  collectionMint: PublicKey | Pda;
  /** Metadata Account of the Collection */
  collection: PublicKey | Pda;
  /** MasterEdition2 Account of the Collection Token */
  collectionMasterEditionAccount: PublicKey | Pda;
  /** Collection Authority Record PDA */
  collectionAuthorityRecord?: PublicKey | Pda;
};

// Data.
export type VerifyCollectionInstructionData = { discriminator: number };

export type VerifyCollectionInstructionDataArgs = {};

export function getVerifyCollectionInstructionDataSerializer(): Serializer<
  VerifyCollectionInstructionDataArgs,
  VerifyCollectionInstructionData
> {
  return mapSerializer<
    VerifyCollectionInstructionDataArgs,
    any,
    VerifyCollectionInstructionData
  >(
    struct<VerifyCollectionInstructionData>([['discriminator', u8()]], {
      description: 'VerifyCollectionInstructionData',
    }),
    (value) => ({ ...value, discriminator: 18 })
  ) as Serializer<
    VerifyCollectionInstructionDataArgs,
    VerifyCollectionInstructionData
  >;
}

// Instruction.
export function verifyCollection(
  context: Pick<Context, 'payer' | 'programs'>,
  input: VerifyCollectionInstructionAccounts
): TransactionBuilder {
  // Program ID.
  const programId = context.programs.getPublicKey(
    'mplTokenMetadata',
    'meta3c863KN6CX6HXzfmDHbURDkfJ5HMCwUT5SEqu5C'
  );

  // Accounts.
  const resolvedAccounts: ResolvedAccountsWithIndices = {
    metadata: { index: 0, isWritable: true, value: input.metadata ?? null },
    collectionAuthority: {
      index: 1,
      isWritable: true,
      value: input.collectionAuthority ?? null,
    },
    payer: { index: 2, isWritable: true, value: input.payer ?? null },
    collectionMint: {
      index: 3,
      isWritable: false,
      value: input.collectionMint ?? null,
    },
    collection: {
      index: 4,
      isWritable: false,
      value: input.collection ?? null,
    },
    collectionMasterEditionAccount: {
      index: 5,
      isWritable: false,
      value: input.collectionMasterEditionAccount ?? null,
    },
    collectionAuthorityRecord: {
      index: 6,
      isWritable: false,
      value: input.collectionAuthorityRecord ?? null,
    },
  };

  // Default values.
  if (!resolvedAccounts.payer.value) {
    resolvedAccounts.payer.value = context.payer;
  }

  // Accounts in order.
  const orderedAccounts: ResolvedAccount[] = Object.values(
    resolvedAccounts
  ).sort((a, b) => a.index - b.index);

  // Keys and Signers.
  const [keys, signers] = getAccountMetasAndSigners(
    orderedAccounts,
    'omitted',
    programId
  );

  // Data.
  const data = getVerifyCollectionInstructionDataSerializer().serialize({});

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
