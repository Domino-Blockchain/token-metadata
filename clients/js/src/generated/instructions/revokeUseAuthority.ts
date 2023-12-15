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
import { findMetadataPda } from '../accounts';
import {
  ResolvedAccount,
  ResolvedAccountsWithIndices,
  expectPublicKey,
  getAccountMetasAndSigners,
} from '../shared';

// Accounts.
export type RevokeUseAuthorityInstructionAccounts = {
  /** Use Authority Record PDA */
  useAuthorityRecord: PublicKey | Pda;
  /** Owner */
  owner: Signer;
  /** A Use Authority */
  user: PublicKey | Pda;
  /** Owned Token Account Of Mint */
  ownerTokenAccount: PublicKey | Pda;
  /** Mint of Metadata */
  mint: PublicKey | Pda;
  /** Metadata account */
  metadata?: PublicKey | Pda;
  /** Token program */
  tokenProgram?: PublicKey | Pda;
  /** System program */
  systemProgram?: PublicKey | Pda;
  /** Rent info */
  rent?: PublicKey | Pda;
};

// Data.
export type RevokeUseAuthorityInstructionData = { discriminator: number };

export type RevokeUseAuthorityInstructionDataArgs = {};

export function getRevokeUseAuthorityInstructionDataSerializer(): Serializer<
  RevokeUseAuthorityInstructionDataArgs,
  RevokeUseAuthorityInstructionData
> {
  return mapSerializer<
    RevokeUseAuthorityInstructionDataArgs,
    any,
    RevokeUseAuthorityInstructionData
  >(
    struct<RevokeUseAuthorityInstructionData>([['discriminator', u8()]], {
      description: 'RevokeUseAuthorityInstructionData',
    }),
    (value) => ({ ...value, discriminator: 21 })
  ) as Serializer<
    RevokeUseAuthorityInstructionDataArgs,
    RevokeUseAuthorityInstructionData
  >;
}

// Instruction.
export function revokeUseAuthority(
  context: Pick<Context, 'eddsa' | 'programs'>,
  input: RevokeUseAuthorityInstructionAccounts
): TransactionBuilder {
  // Program ID.
  const programId = context.programs.getPublicKey(
    'mplTokenMetadata',
    'meta3c863KN6CX6HXzfmDHbURDkfJ5HMCwUT5SEqu5C'
  );

  // Accounts.
  const resolvedAccounts: ResolvedAccountsWithIndices = {
    useAuthorityRecord: {
      index: 0,
      isWritable: true,
      value: input.useAuthorityRecord ?? null,
    },
    owner: { index: 1, isWritable: true, value: input.owner ?? null },
    user: { index: 2, isWritable: false, value: input.user ?? null },
    ownerTokenAccount: {
      index: 3,
      isWritable: true,
      value: input.ownerTokenAccount ?? null,
    },
    mint: { index: 4, isWritable: false, value: input.mint ?? null },
    metadata: { index: 5, isWritable: false, value: input.metadata ?? null },
    tokenProgram: {
      index: 6,
      isWritable: false,
      value: input.tokenProgram ?? null,
    },
    systemProgram: {
      index: 7,
      isWritable: false,
      value: input.systemProgram ?? null,
    },
    rent: { index: 8, isWritable: false, value: input.rent ?? null },
  };

  // Default values.
  if (!resolvedAccounts.metadata.value) {
    resolvedAccounts.metadata.value = findMetadataPda(context, {
      mint: expectPublicKey(resolvedAccounts.mint.value),
    });
  }
  if (!resolvedAccounts.tokenProgram.value) {
    resolvedAccounts.tokenProgram.value = context.programs.getPublicKey(
      'splToken',
      'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
    );
    resolvedAccounts.tokenProgram.isWritable = false;
  }
  if (!resolvedAccounts.systemProgram.value) {
    resolvedAccounts.systemProgram.value = context.programs.getPublicKey(
      'splSystem',
      '11111111111111111111111111111111'
    );
    resolvedAccounts.systemProgram.isWritable = false;
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
  const data = getRevokeUseAuthorityInstructionDataSerializer().serialize({});

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
