//! A Token Metadata program for the Solana blockchain.
//!
//! The program attach additional data to Fungible or Non-Fungible Tokens on Solana.

pub mod assertions;

// (Re-)Declare modules to maintain API compatibility.

pub mod escrow {
    pub use crate::{instruction::escrow::*, processor::escrow::*};
}

#[cfg(not(feature = "no-entrypoint"))]
pub mod entrypoint;
pub mod error;
pub mod instruction;
pub mod pda;
pub mod processor;
pub mod state;
pub mod utils;

// Export current sdk types for downstream users building with a different sdk version
pub use domichain_program;

domichain_program::declare_id!("MetaXKaVt8cn9dGYns81au23cqBYUH4DU4WpC8tAbhQ");
