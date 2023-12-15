/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

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
  u8,
} from '@metaplex-foundation/umi/serializers';
import { findMetadataDelegateRecordPda, findMetadataPda } from '../accounts';
import {
  PickPartial,
  ResolvedAccount,
  ResolvedAccountsWithIndices,
  expectPublicKey,
  expectSome,
  getAccountMetasAndSigners,
} from '../shared';
import {
  AuthorizationData,
  AuthorizationDataArgs,
  MetadataDelegateRole,
  RuleSetToggle,
  RuleSetToggleArgs,
  getAuthorizationDataSerializer,
  getRuleSetToggleSerializer,
  ruleSetToggle,
} from '../types';

// Accounts.
export type UpdateAsProgrammableConfigItemDelegateV2InstructionAccounts = {
  /** Update authority or delegate */
  authority?: Signer;
  /** Delegate record PDA */
  delegateRecord?: PublicKey | Pda;
  /** Token account */
  token: PublicKey | Pda;
  /** Mint account */
  mint: PublicKey | Pda;
  /** Metadata account */
  metadata?: PublicKey | Pda;
  /** Edition account */
  edition?: PublicKey | Pda;
  /** Payer */
  payer?: Signer;
  /** System program */
  systemProgram?: PublicKey | Pda;
  /** Instructions sysvar account */
  sysvarInstructions?: PublicKey | Pda;
  /** Token Authorization Rules Program */
  authorizationRulesProgram?: PublicKey | Pda;
  /** Token Authorization Rules account */
  authorizationRules?: PublicKey | Pda;
};

// Data.
export type UpdateAsProgrammableConfigItemDelegateV2InstructionData = {
  discriminator: number;
  updateAsProgrammableConfigItemDelegateV2Discriminator: number;
  ruleSet: RuleSetToggle;
  authorizationData: Option<AuthorizationData>;
};

export type UpdateAsProgrammableConfigItemDelegateV2InstructionDataArgs = {
  ruleSet?: RuleSetToggleArgs;
  authorizationData?: OptionOrNullable<AuthorizationDataArgs>;
};

export function getUpdateAsProgrammableConfigItemDelegateV2InstructionDataSerializer(): Serializer<
  UpdateAsProgrammableConfigItemDelegateV2InstructionDataArgs,
  UpdateAsProgrammableConfigItemDelegateV2InstructionData
> {
  return mapSerializer<
    UpdateAsProgrammableConfigItemDelegateV2InstructionDataArgs,
    any,
    UpdateAsProgrammableConfigItemDelegateV2InstructionData
  >(
    struct<UpdateAsProgrammableConfigItemDelegateV2InstructionData>(
      [
        ['discriminator', u8()],
        ['updateAsProgrammableConfigItemDelegateV2Discriminator', u8()],
        ['ruleSet', getRuleSetToggleSerializer()],
        ['authorizationData', option(getAuthorizationDataSerializer())],
      ],
      { description: 'UpdateAsProgrammableConfigItemDelegateV2InstructionData' }
    ),
    (value) => ({
      ...value,
      discriminator: 50,
      updateAsProgrammableConfigItemDelegateV2Discriminator: 8,
      ruleSet: value.ruleSet ?? ruleSetToggle('None'),
      authorizationData: value.authorizationData ?? none(),
    })
  ) as Serializer<
    UpdateAsProgrammableConfigItemDelegateV2InstructionDataArgs,
    UpdateAsProgrammableConfigItemDelegateV2InstructionData
  >;
}

// Extra Args.
export type UpdateAsProgrammableConfigItemDelegateV2InstructionExtraArgs = {
  updateAuthority: PublicKey;
};

// Args.
export type UpdateAsProgrammableConfigItemDelegateV2InstructionArgs =
  PickPartial<
    UpdateAsProgrammableConfigItemDelegateV2InstructionDataArgs &
      UpdateAsProgrammableConfigItemDelegateV2InstructionExtraArgs,
    'updateAuthority'
  >;

// Instruction.
export function updateAsProgrammableConfigItemDelegateV2(
  context: Pick<Context, 'eddsa' | 'identity' | 'payer' | 'programs'>,
  input: UpdateAsProgrammableConfigItemDelegateV2InstructionAccounts &
    UpdateAsProgrammableConfigItemDelegateV2InstructionArgs
): TransactionBuilder {
  // Program ID.
  const programId = context.programs.getPublicKey(
    'mplTokenMetadata',
    'meta3c863KN6CX6HXzfmDHbURDkfJ5HMCwUT5SEqu5C'
  );

  // Accounts.
  const resolvedAccounts: ResolvedAccountsWithIndices = {
    authority: { index: 0, isWritable: false, value: input.authority ?? null },
    delegateRecord: {
      index: 1,
      isWritable: false,
      value: input.delegateRecord ?? null,
    },
    token: { index: 2, isWritable: false, value: input.token ?? null },
    mint: { index: 3, isWritable: false, value: input.mint ?? null },
    metadata: { index: 4, isWritable: true, value: input.metadata ?? null },
    edition: { index: 5, isWritable: false, value: input.edition ?? null },
    payer: { index: 6, isWritable: true, value: input.payer ?? null },
    systemProgram: {
      index: 7,
      isWritable: false,
      value: input.systemProgram ?? null,
    },
    sysvarInstructions: {
      index: 8,
      isWritable: false,
      value: input.sysvarInstructions ?? null,
    },
    authorizationRulesProgram: {
      index: 9,
      isWritable: false,
      value: input.authorizationRulesProgram ?? null,
    },
    authorizationRules: {
      index: 10,
      isWritable: false,
      value: input.authorizationRules ?? null,
    },
  };

  // Arguments.
  const resolvedArgs: UpdateAsProgrammableConfigItemDelegateV2InstructionArgs =
    { ...input };

  // Default values.
  if (!resolvedAccounts.authority.value) {
    resolvedAccounts.authority.value = context.identity;
  }
  if (!resolvedArgs.updateAuthority) {
    resolvedArgs.updateAuthority = context.identity.publicKey;
  }
  if (!resolvedAccounts.delegateRecord.value) {
    resolvedAccounts.delegateRecord.value = findMetadataDelegateRecordPda(
      context,
      {
        mint: expectPublicKey(resolvedAccounts.mint.value),
        delegateRole: MetadataDelegateRole.ProgrammableConfigItem,
        updateAuthority: expectSome(resolvedArgs.updateAuthority),
        delegate: expectPublicKey(resolvedAccounts.authority.value),
      }
    );
  }
  if (!resolvedAccounts.metadata.value) {
    resolvedAccounts.metadata.value = findMetadataPda(context, {
      mint: expectPublicKey(resolvedAccounts.mint.value),
    });
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
  const data =
    getUpdateAsProgrammableConfigItemDelegateV2InstructionDataSerializer().serialize(
      resolvedArgs as UpdateAsProgrammableConfigItemDelegateV2InstructionDataArgs
    );

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
