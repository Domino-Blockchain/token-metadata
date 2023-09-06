//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use crate::generated::types::Collection;
use crate::generated::types::CollectionDetails;
use crate::generated::types::Creator;
use crate::generated::types::PrintSupply;
use crate::generated::types::TokenStandard;
use crate::generated::types::Uses;
use borsh::BorshDeserialize;
use borsh::BorshSerialize;
use solana_program::pubkey::Pubkey;

#[derive(BorshSerialize, BorshDeserialize, Clone, Debug, Eq, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub enum CreateArgs {
    V1 {
        name: String,
        symbol: String,
        uri: String,
        seller_fee_basis_points: u16,
        creators: Option<Vec<Creator>>,
        primary_sale_happened: bool,
        is_mutable: bool,
        token_standard: TokenStandard,
        collection: Option<Collection>,
        uses: Option<Uses>,
        collection_details: Option<CollectionDetails>,
        rule_set: Option<Pubkey>,
        decimals: Option<u8>,
        print_supply: Option<PrintSupply>,
    },
}
