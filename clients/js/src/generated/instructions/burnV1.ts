/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { findAssociatedTokenPda } from '@metaplex-foundation/mpl-toolbox';
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
  u64,
  u8,
} from '@metaplex-foundation/umi/serializers';
import { resolveIsNonFungible } from '../../hooked';
import {
  findMasterEditionPda,
  findMetadataPda,
  findTokenRecordPda,
} from '../accounts';
import {
  PickPartial,
  ResolvedAccount,
  ResolvedAccountsWithIndices,
  expectPublicKey,
  expectSome,
  getAccountMetasAndSigners,
} from '../shared';
import { TokenStandard, TokenStandardArgs } from '../types';

// Accounts.
export type BurnV1InstructionAccounts = {
  /** Asset owner or Utility delegate */
  authority?: Signer;
  /** Metadata of the Collection */
  collectionMetadata?: PublicKey | Pda;
  /** Metadata (pda of ['metadata', program id, mint id]) */
  metadata?: PublicKey | Pda;
  /** Edition of the asset */
  edition?: PublicKey | Pda;
  /** Mint of token asset */
  mint: PublicKey | Pda;
  /** Token account to close */
  token?: PublicKey | Pda;
  /** Master edition account */
  masterEdition?: PublicKey | Pda;
  /** Master edition mint of the asset */
  masterEditionMint?: PublicKey | Pda;
  /** Master edition token account */
  masterEditionToken?: PublicKey | Pda;
  /** Edition marker account */
  editionMarker?: PublicKey | Pda;
  /** Token record account */
  tokenRecord?: PublicKey | Pda;
  /** System program */
  systemProgram?: PublicKey | Pda;
  /** Instructions sysvar account */
  sysvarInstructions?: PublicKey | Pda;
  /** SPL Token Program */
  splTokenProgram?: PublicKey | Pda;
};

// Data.
export type BurnV1InstructionData = {
  discriminator: number;
  burnV1Discriminator: number;
  amount: bigint;
};

export type BurnV1InstructionDataArgs = { amount?: number | bigint };

export function getBurnV1InstructionDataSerializer(): Serializer<
  BurnV1InstructionDataArgs,
  BurnV1InstructionData
> {
  return mapSerializer<BurnV1InstructionDataArgs, any, BurnV1InstructionData>(
    struct<BurnV1InstructionData>(
      [
        ['discriminator', u8()],
        ['burnV1Discriminator', u8()],
        ['amount', u64()],
      ],
      { description: 'BurnV1InstructionData' }
    ),
    (value) => ({
      ...value,
      discriminator: 41,
      burnV1Discriminator: 0,
      amount: value.amount ?? 1,
    })
  ) as Serializer<BurnV1InstructionDataArgs, BurnV1InstructionData>;
}

// Extra Args.
export type BurnV1InstructionExtraArgs = {
  tokenOwner: PublicKey;
  tokenStandard: TokenStandardArgs;
};

// Args.
export type BurnV1InstructionArgs = PickPartial<
  BurnV1InstructionDataArgs & BurnV1InstructionExtraArgs,
  'tokenOwner'
>;

// Instruction.
export function burnV1(
  context: Pick<Context, 'eddsa' | 'identity' | 'payer' | 'programs'>,
  input: BurnV1InstructionAccounts & BurnV1InstructionArgs
): TransactionBuilder {
  // Program ID.
  const programId = context.programs.getPublicKey(
    'mplTokenMetadata',
    'MetaXKaVt8cn9dGYns81au23cqBYUH4DU4WpC8tAbhQ'
  );

  // Accounts.
  const resolvedAccounts: ResolvedAccountsWithIndices = {
    authority: { index: 0, isWritable: true, value: input.authority ?? null },
    collectionMetadata: {
      index: 1,
      isWritable: true,
      value: input.collectionMetadata ?? null,
    },
    metadata: { index: 2, isWritable: true, value: input.metadata ?? null },
    edition: { index: 3, isWritable: true, value: input.edition ?? null },
    mint: { index: 4, isWritable: true, value: input.mint ?? null },
    token: { index: 5, isWritable: true, value: input.token ?? null },
    masterEdition: {
      index: 6,
      isWritable: true,
      value: input.masterEdition ?? null,
    },
    masterEditionMint: {
      index: 7,
      isWritable: false,
      value: input.masterEditionMint ?? null,
    },
    masterEditionToken: {
      index: 8,
      isWritable: false,
      value: input.masterEditionToken ?? null,
    },
    editionMarker: {
      index: 9,
      isWritable: true,
      value: input.editionMarker ?? null,
    },
    tokenRecord: {
      index: 10,
      isWritable: true,
      value: input.tokenRecord ?? null,
    },
    systemProgram: {
      index: 11,
      isWritable: false,
      value: input.systemProgram ?? null,
    },
    sysvarInstructions: {
      index: 12,
      isWritable: false,
      value: input.sysvarInstructions ?? null,
    },
    splTokenProgram: {
      index: 13,
      isWritable: false,
      value: input.splTokenProgram ?? null,
    },
  };

  // Arguments.
  const resolvedArgs: BurnV1InstructionArgs = { ...input };

  // Default values.
  if (!resolvedAccounts.authority.value) {
    resolvedAccounts.authority.value = context.identity;
  }
  if (!resolvedAccounts.metadata.value) {
    resolvedAccounts.metadata.value = findMetadataPda(context, {
      mint: expectPublicKey(resolvedAccounts.mint.value),
    });
  }
  if (!resolvedAccounts.edition.value) {
    if (
      resolveIsNonFungible(
        context,
        resolvedAccounts,
        resolvedArgs,
        programId,
        true
      )
    ) {
      resolvedAccounts.edition.value = findMasterEditionPda(context, {
        mint: expectPublicKey(resolvedAccounts.mint.value),
      });
    }
  }
  if (!resolvedArgs.tokenOwner) {
    resolvedArgs.tokenOwner = context.identity.publicKey;
  }
  if (!resolvedAccounts.token.value) {
    resolvedAccounts.token.value = findAssociatedTokenPda(context, {
      mint: expectPublicKey(resolvedAccounts.mint.value),
      owner: expectSome(resolvedArgs.tokenOwner),
    });
  }
  if (!resolvedAccounts.masterEdition.value) {
    if (resolvedAccounts.masterEditionMint.value) {
      resolvedAccounts.masterEdition.value = findMasterEditionPda(context, {
        mint: expectPublicKey(resolvedAccounts.masterEditionMint.value),
      });
    }
  }
  if (!resolvedAccounts.tokenRecord.value) {
    if (resolvedArgs.tokenStandard === TokenStandard.ProgrammableNonFungible) {
      resolvedAccounts.tokenRecord.value = findTokenRecordPda(context, {
        mint: expectPublicKey(resolvedAccounts.mint.value),
        token: expectPublicKey(resolvedAccounts.token.value),
      });
    }
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
  if (!resolvedAccounts.splTokenProgram.value) {
    resolvedAccounts.splTokenProgram.value = context.programs.getPublicKey(
      'splToken',
      'TokenAAGbeQq5tGW2r5RoR3oauzN2EkNFiHNPw9q34s'
    );
    resolvedAccounts.splTokenProgram.isWritable = false;
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
  const data = getBurnV1InstructionDataSerializer().serialize(
    resolvedArgs as BurnV1InstructionDataArgs
  );

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
