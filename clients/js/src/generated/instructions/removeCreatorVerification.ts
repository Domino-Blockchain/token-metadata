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
export type RemoveCreatorVerificationInstructionAccounts = {
  /** Metadata (pda of ['metadata', program id, mint id]) */
  metadata: PublicKey | Pda;
  /** Creator */
  creator: Signer;
};

// Data.
export type RemoveCreatorVerificationInstructionData = {
  discriminator: number;
};

export type RemoveCreatorVerificationInstructionDataArgs = {};

export function getRemoveCreatorVerificationInstructionDataSerializer(): Serializer<
  RemoveCreatorVerificationInstructionDataArgs,
  RemoveCreatorVerificationInstructionData
> {
  return mapSerializer<
    RemoveCreatorVerificationInstructionDataArgs,
    any,
    RemoveCreatorVerificationInstructionData
  >(
    struct<RemoveCreatorVerificationInstructionData>(
      [['discriminator', u8()]],
      { description: 'RemoveCreatorVerificationInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 28 })
  ) as Serializer<
    RemoveCreatorVerificationInstructionDataArgs,
    RemoveCreatorVerificationInstructionData
  >;
}

// Instruction.
export function removeCreatorVerification(
  context: Pick<Context, 'programs'>,
  input: RemoveCreatorVerificationInstructionAccounts
): TransactionBuilder {
  // Program ID.
  const programId = context.programs.getPublicKey(
    'mplTokenMetadata',
    'MetaXKaVt8cn9dGYns81au23cqBYUH4DU4WpC8tAbhQ'
  );

  // Accounts.
  const resolvedAccounts: ResolvedAccountsWithIndices = {
    metadata: { index: 0, isWritable: true, value: input.metadata ?? null },
    creator: { index: 1, isWritable: false, value: input.creator ?? null },
  };

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
  const data =
    getRemoveCreatorVerificationInstructionDataSerializer().serialize({});

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
