/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Account,
  Context,
  Pda,
  PublicKey,
  RpcAccount,
  RpcGetAccountOptions,
  RpcGetAccountsOptions,
  assertAccountExists,
  deserializeAccount,
  gpaBuilder,
  publicKey as toPublicKey,
} from '@metaplex-foundation/umi';
import {
  Serializer,
  bytes,
  publicKey as publicKeySerializer,
  string,
  struct,
  u32,
} from '@metaplex-foundation/umi/serializers';
import { Key, KeyArgs, getKeySerializer } from '../types';

export type EditionMarkerV2 = Account<EditionMarkerV2AccountData>;

export type EditionMarkerV2AccountData = { key: Key; ledger: Uint8Array };

export type EditionMarkerV2AccountDataArgs = {
  key: KeyArgs;
  ledger: Uint8Array;
};

export function getEditionMarkerV2AccountDataSerializer(): Serializer<
  EditionMarkerV2AccountDataArgs,
  EditionMarkerV2AccountData
> {
  return struct<EditionMarkerV2AccountData>(
    [
      ['key', getKeySerializer()],
      ['ledger', bytes({ size: u32() })],
    ],
    { description: 'EditionMarkerV2AccountData' }
  ) as Serializer<EditionMarkerV2AccountDataArgs, EditionMarkerV2AccountData>;
}

export function deserializeEditionMarkerV2(
  rawAccount: RpcAccount
): EditionMarkerV2 {
  return deserializeAccount(
    rawAccount,
    getEditionMarkerV2AccountDataSerializer()
  );
}

export async function fetchEditionMarkerV2(
  context: Pick<Context, 'rpc'>,
  publicKey: PublicKey | Pda,
  options?: RpcGetAccountOptions
): Promise<EditionMarkerV2> {
  const maybeAccount = await context.rpc.getAccount(
    toPublicKey(publicKey, false),
    options
  );
  assertAccountExists(maybeAccount, 'EditionMarkerV2');
  return deserializeEditionMarkerV2(maybeAccount);
}

export async function safeFetchEditionMarkerV2(
  context: Pick<Context, 'rpc'>,
  publicKey: PublicKey | Pda,
  options?: RpcGetAccountOptions
): Promise<EditionMarkerV2 | null> {
  const maybeAccount = await context.rpc.getAccount(
    toPublicKey(publicKey, false),
    options
  );
  return maybeAccount.exists ? deserializeEditionMarkerV2(maybeAccount) : null;
}

export async function fetchAllEditionMarkerV2(
  context: Pick<Context, 'rpc'>,
  publicKeys: Array<PublicKey | Pda>,
  options?: RpcGetAccountsOptions
): Promise<EditionMarkerV2[]> {
  const maybeAccounts = await context.rpc.getAccounts(
    publicKeys.map((key) => toPublicKey(key, false)),
    options
  );
  return maybeAccounts.map((maybeAccount) => {
    assertAccountExists(maybeAccount, 'EditionMarkerV2');
    return deserializeEditionMarkerV2(maybeAccount);
  });
}

export async function safeFetchAllEditionMarkerV2(
  context: Pick<Context, 'rpc'>,
  publicKeys: Array<PublicKey | Pda>,
  options?: RpcGetAccountsOptions
): Promise<EditionMarkerV2[]> {
  const maybeAccounts = await context.rpc.getAccounts(
    publicKeys.map((key) => toPublicKey(key, false)),
    options
  );
  return maybeAccounts
    .filter((maybeAccount) => maybeAccount.exists)
    .map((maybeAccount) =>
      deserializeEditionMarkerV2(maybeAccount as RpcAccount)
    );
}

export function getEditionMarkerV2GpaBuilder(
  context: Pick<Context, 'rpc' | 'programs'>
) {
  const programId = context.programs.getPublicKey(
    'mplTokenMetadata',
    'MetaXKaVt8cn9dGYns81au23cqBYUH4DU4WpC8tAbhQ'
  );
  return gpaBuilder(context, programId)
    .registerFields<{ key: KeyArgs; ledger: Uint8Array }>({
      key: [0, getKeySerializer()],
      ledger: [1, bytes({ size: u32() })],
    })
    .deserializeUsing<EditionMarkerV2>((account) =>
      deserializeEditionMarkerV2(account)
    );
}

export function findEditionMarkerV2Pda(
  context: Pick<Context, 'eddsa' | 'programs'>,
  seeds: {
    /** The address of the mint account */
    mint: PublicKey;
  }
): Pda {
  const programId = context.programs.getPublicKey(
    'mplTokenMetadata',
    'MetaXKaVt8cn9dGYns81au23cqBYUH4DU4WpC8tAbhQ'
  );
  return context.eddsa.findPda(programId, [
    string({ size: 'variable' }).serialize('metadata'),
    publicKeySerializer().serialize(programId),
    publicKeySerializer().serialize(seeds.mint),
    string({ size: 'variable' }).serialize('edition'),
    string({ size: 'variable' }).serialize('marker'),
  ]);
}

export async function fetchEditionMarkerV2FromSeeds(
  context: Pick<Context, 'eddsa' | 'programs' | 'rpc'>,
  seeds: Parameters<typeof findEditionMarkerV2Pda>[1],
  options?: RpcGetAccountOptions
): Promise<EditionMarkerV2> {
  return fetchEditionMarkerV2(
    context,
    findEditionMarkerV2Pda(context, seeds),
    options
  );
}

export async function safeFetchEditionMarkerV2FromSeeds(
  context: Pick<Context, 'eddsa' | 'programs' | 'rpc'>,
  seeds: Parameters<typeof findEditionMarkerV2Pda>[1],
  options?: RpcGetAccountOptions
): Promise<EditionMarkerV2 | null> {
  return safeFetchEditionMarkerV2(
    context,
    findEditionMarkerV2Pda(context, seeds),
    options
  );
}
