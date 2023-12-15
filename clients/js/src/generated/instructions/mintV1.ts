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
  Option,
  OptionOrNullable,
  Pda,
  PublicKey,
  Signer,
  TransactionBuilder,
  none,
  publicKey,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import {
  Serializer,
  mapSerializer,
  option,
  struct,
  u64,
  u8,
} from '@metaplex-foundation/umi/serializers';
import { resolveIsNonFungible, resolveOptionalTokenOwner } from '../../hooked';
import {
  findMasterEditionPda,
  findMetadataPda,
  findTokenRecordPda,
} from '../accounts';
import {
  ResolvedAccount,
  ResolvedAccountsWithIndices,
  expectPublicKey,
  getAccountMetasAndSigners,
} from '../shared';
import {
  AuthorizationData,
  AuthorizationDataArgs,
  TokenStandard,
  TokenStandardArgs,
  getAuthorizationDataSerializer,
} from '../types';

// Accounts.
export type MintV1InstructionAccounts = {
  /** Token or Associated Token account */
  token?: PublicKey | Pda;
  /** Owner of the token account */
  tokenOwner?: PublicKey | Pda;
  /** Metadata account (pda of ['metadata', program id, mint id]) */
  metadata?: PublicKey | Pda;
  /** Master Edition account */
  masterEdition?: PublicKey | Pda;
  /** Token record account */
  tokenRecord?: PublicKey | Pda;
  /** Mint of token asset */
  mint: PublicKey | Pda;
  /** (Mint or Update) authority */
  authority?: Signer;
  /** Metadata delegate record */
  delegateRecord?: PublicKey | Pda;
  /** Payer */
  payer?: Signer;
  /** System program */
  systemProgram?: PublicKey | Pda;
  /** Instructions sysvar account */
  sysvarInstructions?: PublicKey | Pda;
  /** SPL Token program */
  splTokenProgram?: PublicKey | Pda;
  /** SPL Associated Token Account program */
  splAtaProgram?: PublicKey | Pda;
  /** Token Authorization Rules program */
  authorizationRulesProgram?: PublicKey | Pda;
  /** Token Authorization Rules account */
  authorizationRules?: PublicKey | Pda;
};

// Data.
export type MintV1InstructionData = {
  discriminator: number;
  mintV1Discriminator: number;
  amount: bigint;
  authorizationData: Option<AuthorizationData>;
};

export type MintV1InstructionDataArgs = {
  amount?: number | bigint;
  authorizationData?: OptionOrNullable<AuthorizationDataArgs>;
};

export function getMintV1InstructionDataSerializer(): Serializer<
  MintV1InstructionDataArgs,
  MintV1InstructionData
> {
  return mapSerializer<MintV1InstructionDataArgs, any, MintV1InstructionData>(
    struct<MintV1InstructionData>(
      [
        ['discriminator', u8()],
        ['mintV1Discriminator', u8()],
        ['amount', u64()],
        ['authorizationData', option(getAuthorizationDataSerializer())],
      ],
      { description: 'MintV1InstructionData' }
    ),
    (value) => ({
      ...value,
      discriminator: 43,
      mintV1Discriminator: 0,
      amount: value.amount ?? 1,
      authorizationData: value.authorizationData ?? none(),
    })
  ) as Serializer<MintV1InstructionDataArgs, MintV1InstructionData>;
}

// Extra Args.
export type MintV1InstructionExtraArgs = { tokenStandard: TokenStandardArgs };

// Args.
export type MintV1InstructionArgs = MintV1InstructionDataArgs &
  MintV1InstructionExtraArgs;

// Instruction.
export function mintV1(
  context: Pick<Context, 'eddsa' | 'identity' | 'payer' | 'programs'>,
  input: MintV1InstructionAccounts & MintV1InstructionArgs
): TransactionBuilder {
  // Program ID.
  const programId = context.programs.getPublicKey(
    'mplTokenMetadata',
    'meta3c863KN6CX6HXzfmDHbURDkfJ5HMCwUT5SEqu5C'
  );

  // Accounts.
  const resolvedAccounts: ResolvedAccountsWithIndices = {
    token: { index: 0, isWritable: true, value: input.token ?? null },
    tokenOwner: {
      index: 1,
      isWritable: false,
      value: input.tokenOwner ?? null,
    },
    metadata: { index: 2, isWritable: false, value: input.metadata ?? null },
    masterEdition: {
      index: 3,
      isWritable: true,
      value: input.masterEdition ?? null,
    },
    tokenRecord: {
      index: 4,
      isWritable: true,
      value: input.tokenRecord ?? null,
    },
    mint: { index: 5, isWritable: true, value: input.mint ?? null },
    authority: { index: 6, isWritable: false, value: input.authority ?? null },
    delegateRecord: {
      index: 7,
      isWritable: false,
      value: input.delegateRecord ?? null,
    },
    payer: { index: 8, isWritable: true, value: input.payer ?? null },
    systemProgram: {
      index: 9,
      isWritable: false,
      value: input.systemProgram ?? null,
    },
    sysvarInstructions: {
      index: 10,
      isWritable: false,
      value: input.sysvarInstructions ?? null,
    },
    splTokenProgram: {
      index: 11,
      isWritable: false,
      value: input.splTokenProgram ?? null,
    },
    splAtaProgram: {
      index: 12,
      isWritable: false,
      value: input.splAtaProgram ?? null,
    },
    authorizationRulesProgram: {
      index: 13,
      isWritable: false,
      value: input.authorizationRulesProgram ?? null,
    },
    authorizationRules: {
      index: 14,
      isWritable: false,
      value: input.authorizationRules ?? null,
    },
  };

  // Arguments.
  const resolvedArgs: MintV1InstructionArgs = { ...input };

  // Default values.
  if (!resolvedAccounts.tokenOwner.value) {
    resolvedAccounts.tokenOwner = {
      ...resolvedAccounts.tokenOwner,
      ...resolveOptionalTokenOwner(
        context,
        resolvedAccounts,
        resolvedArgs,
        programId,
        false
      ),
    };
  }
  if (!resolvedAccounts.token.value) {
    resolvedAccounts.token.value = findAssociatedTokenPda(context, {
      mint: expectPublicKey(resolvedAccounts.mint.value),
      owner: expectPublicKey(resolvedAccounts.tokenOwner.value),
    });
  }
  if (!resolvedAccounts.metadata.value) {
    resolvedAccounts.metadata.value = findMetadataPda(context, {
      mint: expectPublicKey(resolvedAccounts.mint.value),
    });
  }
  if (!resolvedAccounts.masterEdition.value) {
    if (
      resolveIsNonFungible(
        context,
        resolvedAccounts,
        resolvedArgs,
        programId,
        true
      )
    ) {
      resolvedAccounts.masterEdition.value = findMasterEditionPda(context, {
        mint: expectPublicKey(resolvedAccounts.mint.value),
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
  if (!resolvedAccounts.authority.value) {
    resolvedAccounts.authority.value = context.identity;
  }
  if (!resolvedAccounts.payer.value) {
    resolvedAccounts.payer.value = context.payer;
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
      'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
    );
    resolvedAccounts.splTokenProgram.isWritable = false;
  }
  if (!resolvedAccounts.splAtaProgram.value) {
    resolvedAccounts.splAtaProgram.value = context.programs.getPublicKey(
      'splAssociatedToken',
      'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL'
    );
    resolvedAccounts.splAtaProgram.isWritable = false;
  }
  if (!resolvedAccounts.authorizationRulesProgram.value) {
    if (resolvedAccounts.authorizationRules.value) {
      resolvedAccounts.authorizationRulesProgram.value =
        context.programs.getPublicKey(
          'mplTokenAuthRules',
          'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg'
        );
      resolvedAccounts.authorizationRulesProgram.isWritable = false;
    }
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
  const data = getMintV1InstructionDataSerializer().serialize(
    resolvedArgs as MintV1InstructionDataArgs
  );

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 468;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
