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
  publicKey,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import {
  Serializer,
  mapSerializer,
  struct,
  u8,
} from '@metaplex-foundation/umi/serializers';
import { findMasterEditionPda, findMetadataPda } from '../accounts';
import {
  ResolvedAccount,
  ResolvedAccountsWithIndices,
  expectPublicKey,
  getAccountMetasAndSigners,
} from '../shared';

// Accounts.
export type VerifyCollectionV1InstructionAccounts = {
  /** Creator to verify, collection update authority or delegate */
  authority?: Signer;
  /** Delegate record PDA */
  delegateRecord?: PublicKey | Pda;
  /** Metadata account */
  metadata: PublicKey | Pda;
  /** Mint of the Collection */
  collectionMint: PublicKey | Pda;
  /** Metadata Account of the Collection */
  collectionMetadata?: PublicKey | Pda;
  /** Master Edition Account of the Collection Token */
  collectionMasterEdition?: PublicKey | Pda;
  /** System program */
  systemProgram?: PublicKey | Pda;
  /** Instructions sysvar account */
  sysvarInstructions?: PublicKey | Pda;
};

// Data.
export type VerifyCollectionV1InstructionData = {
  discriminator: number;
  verifyCollectionV1Discriminator: number;
};

export type VerifyCollectionV1InstructionDataArgs = {};

export function getVerifyCollectionV1InstructionDataSerializer(): Serializer<
  VerifyCollectionV1InstructionDataArgs,
  VerifyCollectionV1InstructionData
> {
  return mapSerializer<
    VerifyCollectionV1InstructionDataArgs,
    any,
    VerifyCollectionV1InstructionData
  >(
    struct<VerifyCollectionV1InstructionData>(
      [
        ['discriminator', u8()],
        ['verifyCollectionV1Discriminator', u8()],
      ],
      { description: 'VerifyCollectionV1InstructionData' }
    ),
    (value) => ({
      ...value,
      discriminator: 52,
      verifyCollectionV1Discriminator: 1,
    })
  ) as Serializer<
    VerifyCollectionV1InstructionDataArgs,
    VerifyCollectionV1InstructionData
  >;
}

// Instruction.
export function verifyCollectionV1(
  context: Pick<Context, 'eddsa' | 'identity' | 'programs'>,
  input: VerifyCollectionV1InstructionAccounts
): TransactionBuilder {
  // Program ID.
  const programId = context.programs.getPublicKey(
    'mplTokenMetadata',
    'MetaXKaVt8cn9dGYns81au23cqBYUH4DU4WpC8tAbhQ'
  );

  // Accounts.
  const resolvedAccounts: ResolvedAccountsWithIndices = {
    authority: { index: 0, isWritable: false, value: input.authority ?? null },
    delegateRecord: {
      index: 1,
      isWritable: false,
      value: input.delegateRecord ?? null,
    },
    metadata: { index: 2, isWritable: true, value: input.metadata ?? null },
    collectionMint: {
      index: 3,
      isWritable: false,
      value: input.collectionMint ?? null,
    },
    collectionMetadata: {
      index: 4,
      isWritable: true,
      value: input.collectionMetadata ?? null,
    },
    collectionMasterEdition: {
      index: 5,
      isWritable: false,
      value: input.collectionMasterEdition ?? null,
    },
    systemProgram: {
      index: 6,
      isWritable: false,
      value: input.systemProgram ?? null,
    },
    sysvarInstructions: {
      index: 7,
      isWritable: false,
      value: input.sysvarInstructions ?? null,
    },
  };

  // Default values.
  if (!resolvedAccounts.authority.value) {
    resolvedAccounts.authority.value = context.identity;
  }
  if (!resolvedAccounts.collectionMetadata.value) {
    resolvedAccounts.collectionMetadata.value = findMetadataPda(context, {
      mint: expectPublicKey(resolvedAccounts.collectionMint.value),
    });
  }
  if (!resolvedAccounts.collectionMasterEdition.value) {
    resolvedAccounts.collectionMasterEdition.value = findMasterEditionPda(
      context,
      { mint: expectPublicKey(resolvedAccounts.collectionMint.value) }
    );
  }
  if (!resolvedAccounts.systemProgram.value) {
    resolvedAccounts.systemProgram.value = context.programs.getPublicKey(
      'splSystem',
      '11111111111111111111111111111111'
    );
    resolvedAccounts.systemProgram.isWritable = false;
  }
  if (!resolvedAccounts.sysvarInstructions.value) {
    resolvedAccounts.sysvarInstructions.value = publicKey(
      'Sysvar1nstructions1111111111111111111111111'
    );
  }

  // Accounts in order.
  const orderedAccounts: ResolvedAccount[] = Object.values(
    resolvedAccounts
  ).sort((a, b) => a.index - b.index);

  // Keys and Signers.
  const [keys, signers] = getAccountMetasAndSigners(
    orderedAccounts,
    'programId',
    programId
  );

  // Data.
  const data = getVerifyCollectionV1InstructionDataSerializer().serialize({});

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
