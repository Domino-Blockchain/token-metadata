//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use crate::generated::types::AuthorizationData;
use borsh::BorshDeserialize;
use borsh::BorshSerialize;

/// Accounts.
pub struct LockV1 {
    /// Delegate or freeze authority
    pub authority: solana_program::pubkey::Pubkey,
    /// Token owner account
    pub token_owner: Option<solana_program::pubkey::Pubkey>,
    /// Token account
    pub token: solana_program::pubkey::Pubkey,
    /// Mint account
    pub mint: solana_program::pubkey::Pubkey,
    /// Metadata account
    pub metadata: solana_program::pubkey::Pubkey,
    /// Edition account
    pub edition: Option<solana_program::pubkey::Pubkey>,
    /// Token record account
    pub token_record: Option<solana_program::pubkey::Pubkey>,
    /// Payer
    pub payer: solana_program::pubkey::Pubkey,
    /// System program
    pub system_program: solana_program::pubkey::Pubkey,
    /// System program
    pub sysvar_instructions: solana_program::pubkey::Pubkey,
    /// SPL Token Program
    pub spl_token_program: Option<solana_program::pubkey::Pubkey>,
    /// Token Authorization Rules Program
    pub authorization_rules_program: Option<solana_program::pubkey::Pubkey>,
    /// Token Authorization Rules account
    pub authorization_rules: Option<solana_program::pubkey::Pubkey>,
}

impl LockV1 {
    pub fn instruction(
        &self,
        args: LockV1InstructionArgs,
    ) -> solana_program::instruction::Instruction {
        self.instruction_with_remaining_accounts(args, &[])
    }
    #[allow(clippy::vec_init_then_push)]
    pub fn instruction_with_remaining_accounts(
        &self,
        args: LockV1InstructionArgs,
        remaining_accounts: &[super::InstructionAccount],
    ) -> solana_program::instruction::Instruction {
        let mut accounts = Vec::with_capacity(13 + remaining_accounts.len());
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.authority,
            true,
        ));
        if let Some(token_owner) = self.token_owner {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                token_owner,
                false,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_TOKEN_METADATA_ID,
                false,
            ));
        }
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.token, false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.mint, false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.metadata,
            false,
        ));
        if let Some(edition) = self.edition {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                edition, false,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_TOKEN_METADATA_ID,
                false,
            ));
        }
        if let Some(token_record) = self.token_record {
            accounts.push(solana_program::instruction::AccountMeta::new(
                token_record,
                false,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_TOKEN_METADATA_ID,
                false,
            ));
        }
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.payer, true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.system_program,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.sysvar_instructions,
            false,
        ));
        if let Some(spl_token_program) = self.spl_token_program {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                spl_token_program,
                false,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_TOKEN_METADATA_ID,
                false,
            ));
        }
        if let Some(authorization_rules_program) = self.authorization_rules_program {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                authorization_rules_program,
                false,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_TOKEN_METADATA_ID,
                false,
            ));
        }
        if let Some(authorization_rules) = self.authorization_rules {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                authorization_rules,
                false,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_TOKEN_METADATA_ID,
                false,
            ));
        }
        remaining_accounts
            .iter()
            .for_each(|remaining_account| accounts.push(remaining_account.to_account_meta()));
        let mut data = LockV1InstructionData::new().try_to_vec().unwrap();
        let mut args = args.try_to_vec().unwrap();
        data.append(&mut args);

        solana_program::instruction::Instruction {
            program_id: crate::MPL_TOKEN_METADATA_ID,
            accounts,
            data,
        }
    }
}

#[derive(BorshDeserialize, BorshSerialize)]
struct LockV1InstructionData {
    discriminator: u8,
    lock_v1_discriminator: u8,
}

impl LockV1InstructionData {
    fn new() -> Self {
        Self {
            discriminator: 46,
            lock_v1_discriminator: 0,
        }
    }
}

#[derive(BorshSerialize, BorshDeserialize, Clone, Debug, Eq, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub struct LockV1InstructionArgs {
    pub authorization_data: Option<AuthorizationData>,
}

/// Instruction builder.
#[derive(Default)]
pub struct LockV1Builder {
    authority: Option<solana_program::pubkey::Pubkey>,
    token_owner: Option<solana_program::pubkey::Pubkey>,
    token: Option<solana_program::pubkey::Pubkey>,
    mint: Option<solana_program::pubkey::Pubkey>,
    metadata: Option<solana_program::pubkey::Pubkey>,
    edition: Option<solana_program::pubkey::Pubkey>,
    token_record: Option<solana_program::pubkey::Pubkey>,
    payer: Option<solana_program::pubkey::Pubkey>,
    system_program: Option<solana_program::pubkey::Pubkey>,
    sysvar_instructions: Option<solana_program::pubkey::Pubkey>,
    spl_token_program: Option<solana_program::pubkey::Pubkey>,
    authorization_rules_program: Option<solana_program::pubkey::Pubkey>,
    authorization_rules: Option<solana_program::pubkey::Pubkey>,
    authorization_data: Option<AuthorizationData>,
    __remaining_accounts: Vec<super::InstructionAccount>,
}

impl LockV1Builder {
    pub fn new() -> Self {
        Self::default()
    }
    /// Delegate or freeze authority
    #[inline(always)]
    pub fn authority(&mut self, authority: solana_program::pubkey::Pubkey) -> &mut Self {
        self.authority = Some(authority);
        self
    }
    /// `[optional account]`
    /// Token owner account
    #[inline(always)]
    pub fn token_owner(
        &mut self,
        token_owner: Option<solana_program::pubkey::Pubkey>,
    ) -> &mut Self {
        self.token_owner = token_owner;
        self
    }
    /// Token account
    #[inline(always)]
    pub fn token(&mut self, token: solana_program::pubkey::Pubkey) -> &mut Self {
        self.token = Some(token);
        self
    }
    /// Mint account
    #[inline(always)]
    pub fn mint(&mut self, mint: solana_program::pubkey::Pubkey) -> &mut Self {
        self.mint = Some(mint);
        self
    }
    /// Metadata account
    #[inline(always)]
    pub fn metadata(&mut self, metadata: solana_program::pubkey::Pubkey) -> &mut Self {
        self.metadata = Some(metadata);
        self
    }
    /// `[optional account]`
    /// Edition account
    #[inline(always)]
    pub fn edition(&mut self, edition: Option<solana_program::pubkey::Pubkey>) -> &mut Self {
        self.edition = edition;
        self
    }
    /// `[optional account]`
    /// Token record account
    #[inline(always)]
    pub fn token_record(
        &mut self,
        token_record: Option<solana_program::pubkey::Pubkey>,
    ) -> &mut Self {
        self.token_record = token_record;
        self
    }
    /// Payer
    #[inline(always)]
    pub fn payer(&mut self, payer: solana_program::pubkey::Pubkey) -> &mut Self {
        self.payer = Some(payer);
        self
    }
    /// `[optional account, default to '11111111111111111111111111111111']`
    /// System program
    #[inline(always)]
    pub fn system_program(&mut self, system_program: solana_program::pubkey::Pubkey) -> &mut Self {
        self.system_program = Some(system_program);
        self
    }
    /// `[optional account, default to 'Sysvar1nstructions1111111111111111111111111']`
    /// System program
    #[inline(always)]
    pub fn sysvar_instructions(
        &mut self,
        sysvar_instructions: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.sysvar_instructions = Some(sysvar_instructions);
        self
    }
    /// `[optional account]`
    /// SPL Token Program
    #[inline(always)]
    pub fn spl_token_program(
        &mut self,
        spl_token_program: Option<solana_program::pubkey::Pubkey>,
    ) -> &mut Self {
        self.spl_token_program = spl_token_program;
        self
    }
    /// `[optional account]`
    /// Token Authorization Rules Program
    #[inline(always)]
    pub fn authorization_rules_program(
        &mut self,
        authorization_rules_program: Option<solana_program::pubkey::Pubkey>,
    ) -> &mut Self {
        self.authorization_rules_program = authorization_rules_program;
        self
    }
    /// `[optional account]`
    /// Token Authorization Rules account
    #[inline(always)]
    pub fn authorization_rules(
        &mut self,
        authorization_rules: Option<solana_program::pubkey::Pubkey>,
    ) -> &mut Self {
        self.authorization_rules = authorization_rules;
        self
    }
    /// `[optional argument]`
    #[inline(always)]
    pub fn authorization_data(&mut self, authorization_data: AuthorizationData) -> &mut Self {
        self.authorization_data = Some(authorization_data);
        self
    }
    #[inline(always)]
    pub fn add_remaining_account(&mut self, account: super::InstructionAccount) -> &mut Self {
        self.__remaining_accounts.push(account);
        self
    }
    #[inline(always)]
    pub fn add_remaining_accounts(&mut self, accounts: &[super::InstructionAccount]) -> &mut Self {
        self.__remaining_accounts.extend_from_slice(accounts);
        self
    }
    #[allow(clippy::clone_on_copy)]
    pub fn instruction(&self) -> solana_program::instruction::Instruction {
        let accounts = LockV1 {
            authority: self.authority.expect("authority is not set"),
            token_owner: self.token_owner,
            token: self.token.expect("token is not set"),
            mint: self.mint.expect("mint is not set"),
            metadata: self.metadata.expect("metadata is not set"),
            edition: self.edition,
            token_record: self.token_record,
            payer: self.payer.expect("payer is not set"),
            system_program: self
                .system_program
                .unwrap_or(solana_program::pubkey!("11111111111111111111111111111111")),
            sysvar_instructions: self.sysvar_instructions.unwrap_or(solana_program::pubkey!(
                "Sysvar1nstructions1111111111111111111111111"
            )),
            spl_token_program: self.spl_token_program,
            authorization_rules_program: self.authorization_rules_program,
            authorization_rules: self.authorization_rules,
        };
        let args = LockV1InstructionArgs {
            authorization_data: self.authorization_data.clone(),
        };

        accounts.instruction_with_remaining_accounts(args, &self.__remaining_accounts)
    }
}

/// `lock_v1` CPI accounts.
pub struct LockV1CpiAccounts<'a> {
    /// Delegate or freeze authority
    pub authority: &'a solana_program::account_info::AccountInfo<'a>,
    /// Token owner account
    pub token_owner: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    /// Token account
    pub token: &'a solana_program::account_info::AccountInfo<'a>,
    /// Mint account
    pub mint: &'a solana_program::account_info::AccountInfo<'a>,
    /// Metadata account
    pub metadata: &'a solana_program::account_info::AccountInfo<'a>,
    /// Edition account
    pub edition: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    /// Token record account
    pub token_record: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    /// Payer
    pub payer: &'a solana_program::account_info::AccountInfo<'a>,
    /// System program
    pub system_program: &'a solana_program::account_info::AccountInfo<'a>,
    /// System program
    pub sysvar_instructions: &'a solana_program::account_info::AccountInfo<'a>,
    /// SPL Token Program
    pub spl_token_program: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    /// Token Authorization Rules Program
    pub authorization_rules_program: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    /// Token Authorization Rules account
    pub authorization_rules: Option<&'a solana_program::account_info::AccountInfo<'a>>,
}

/// `lock_v1` CPI instruction.
pub struct LockV1Cpi<'a> {
    /// The program to invoke.
    pub __program: &'a solana_program::account_info::AccountInfo<'a>,
    /// Delegate or freeze authority
    pub authority: &'a solana_program::account_info::AccountInfo<'a>,
    /// Token owner account
    pub token_owner: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    /// Token account
    pub token: &'a solana_program::account_info::AccountInfo<'a>,
    /// Mint account
    pub mint: &'a solana_program::account_info::AccountInfo<'a>,
    /// Metadata account
    pub metadata: &'a solana_program::account_info::AccountInfo<'a>,
    /// Edition account
    pub edition: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    /// Token record account
    pub token_record: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    /// Payer
    pub payer: &'a solana_program::account_info::AccountInfo<'a>,
    /// System program
    pub system_program: &'a solana_program::account_info::AccountInfo<'a>,
    /// System program
    pub sysvar_instructions: &'a solana_program::account_info::AccountInfo<'a>,
    /// SPL Token Program
    pub spl_token_program: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    /// Token Authorization Rules Program
    pub authorization_rules_program: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    /// Token Authorization Rules account
    pub authorization_rules: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    /// The arguments for the instruction.
    pub __args: LockV1InstructionArgs,
}

impl<'a> LockV1Cpi<'a> {
    pub fn new(
        program: &'a solana_program::account_info::AccountInfo<'a>,
        accounts: LockV1CpiAccounts<'a>,
        args: LockV1InstructionArgs,
    ) -> Self {
        Self {
            __program: program,
            authority: accounts.authority,
            token_owner: accounts.token_owner,
            token: accounts.token,
            mint: accounts.mint,
            metadata: accounts.metadata,
            edition: accounts.edition,
            token_record: accounts.token_record,
            payer: accounts.payer,
            system_program: accounts.system_program,
            sysvar_instructions: accounts.sysvar_instructions,
            spl_token_program: accounts.spl_token_program,
            authorization_rules_program: accounts.authorization_rules_program,
            authorization_rules: accounts.authorization_rules,
            __args: args,
        }
    }
    #[inline(always)]
    pub fn invoke(&self) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed_with_remaining_accounts(&[], &[])
    }
    #[inline(always)]
    pub fn invoke_with_remaining_accounts(
        &self,
        remaining_accounts: &[super::InstructionAccountInfo<'a>],
    ) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed_with_remaining_accounts(&[], remaining_accounts)
    }
    #[inline(always)]
    pub fn invoke_signed(
        &self,
        signers_seeds: &[&[&[u8]]],
    ) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed_with_remaining_accounts(signers_seeds, &[])
    }
    #[allow(clippy::clone_on_copy)]
    #[allow(clippy::vec_init_then_push)]
    pub fn invoke_signed_with_remaining_accounts(
        &self,
        signers_seeds: &[&[&[u8]]],
        remaining_accounts: &[super::InstructionAccountInfo<'a>],
    ) -> solana_program::entrypoint::ProgramResult {
        let mut accounts = Vec::with_capacity(13 + remaining_accounts.len());
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.authority.key,
            true,
        ));
        if let Some(token_owner) = self.token_owner {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                *token_owner.key,
                false,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_TOKEN_METADATA_ID,
                false,
            ));
        }
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.token.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.mint.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.metadata.key,
            false,
        ));
        if let Some(edition) = self.edition {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                *edition.key,
                false,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_TOKEN_METADATA_ID,
                false,
            ));
        }
        if let Some(token_record) = self.token_record {
            accounts.push(solana_program::instruction::AccountMeta::new(
                *token_record.key,
                false,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_TOKEN_METADATA_ID,
                false,
            ));
        }
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.payer.key,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.system_program.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.sysvar_instructions.key,
            false,
        ));
        if let Some(spl_token_program) = self.spl_token_program {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                *spl_token_program.key,
                false,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_TOKEN_METADATA_ID,
                false,
            ));
        }
        if let Some(authorization_rules_program) = self.authorization_rules_program {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                *authorization_rules_program.key,
                false,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_TOKEN_METADATA_ID,
                false,
            ));
        }
        if let Some(authorization_rules) = self.authorization_rules {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                *authorization_rules.key,
                false,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_TOKEN_METADATA_ID,
                false,
            ));
        }
        remaining_accounts
            .iter()
            .for_each(|remaining_account| accounts.push(remaining_account.to_account_meta()));
        let mut data = LockV1InstructionData::new().try_to_vec().unwrap();
        let mut args = self.__args.try_to_vec().unwrap();
        data.append(&mut args);

        let instruction = solana_program::instruction::Instruction {
            program_id: crate::MPL_TOKEN_METADATA_ID,
            accounts,
            data,
        };
        let mut account_infos = Vec::with_capacity(13 + 1 + remaining_accounts.len());
        account_infos.push(self.__program.clone());
        account_infos.push(self.authority.clone());
        if let Some(token_owner) = self.token_owner {
            account_infos.push(token_owner.clone());
        }
        account_infos.push(self.token.clone());
        account_infos.push(self.mint.clone());
        account_infos.push(self.metadata.clone());
        if let Some(edition) = self.edition {
            account_infos.push(edition.clone());
        }
        if let Some(token_record) = self.token_record {
            account_infos.push(token_record.clone());
        }
        account_infos.push(self.payer.clone());
        account_infos.push(self.system_program.clone());
        account_infos.push(self.sysvar_instructions.clone());
        if let Some(spl_token_program) = self.spl_token_program {
            account_infos.push(spl_token_program.clone());
        }
        if let Some(authorization_rules_program) = self.authorization_rules_program {
            account_infos.push(authorization_rules_program.clone());
        }
        if let Some(authorization_rules) = self.authorization_rules {
            account_infos.push(authorization_rules.clone());
        }
        remaining_accounts.iter().for_each(|remaining_account| {
            account_infos.push(remaining_account.account_info().clone())
        });

        if signers_seeds.is_empty() {
            solana_program::program::invoke(&instruction, &account_infos)
        } else {
            solana_program::program::invoke_signed(&instruction, &account_infos, signers_seeds)
        }
    }
}

/// `lock_v1` CPI instruction builder.
pub struct LockV1CpiBuilder<'a> {
    instruction: Box<LockV1CpiBuilderInstruction<'a>>,
}

impl<'a> LockV1CpiBuilder<'a> {
    pub fn new(program: &'a solana_program::account_info::AccountInfo<'a>) -> Self {
        let instruction = Box::new(LockV1CpiBuilderInstruction {
            __program: program,
            authority: None,
            token_owner: None,
            token: None,
            mint: None,
            metadata: None,
            edition: None,
            token_record: None,
            payer: None,
            system_program: None,
            sysvar_instructions: None,
            spl_token_program: None,
            authorization_rules_program: None,
            authorization_rules: None,
            authorization_data: None,
            __remaining_accounts: Vec::new(),
        });
        Self { instruction }
    }
    /// Delegate or freeze authority
    #[inline(always)]
    pub fn authority(
        &mut self,
        authority: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.authority = Some(authority);
        self
    }
    /// `[optional account]`
    /// Token owner account
    #[inline(always)]
    pub fn token_owner(
        &mut self,
        token_owner: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    ) -> &mut Self {
        self.instruction.token_owner = token_owner;
        self
    }
    /// Token account
    #[inline(always)]
    pub fn token(&mut self, token: &'a solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.token = Some(token);
        self
    }
    /// Mint account
    #[inline(always)]
    pub fn mint(&mut self, mint: &'a solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.mint = Some(mint);
        self
    }
    /// Metadata account
    #[inline(always)]
    pub fn metadata(
        &mut self,
        metadata: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.metadata = Some(metadata);
        self
    }
    /// `[optional account]`
    /// Edition account
    #[inline(always)]
    pub fn edition(
        &mut self,
        edition: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    ) -> &mut Self {
        self.instruction.edition = edition;
        self
    }
    /// `[optional account]`
    /// Token record account
    #[inline(always)]
    pub fn token_record(
        &mut self,
        token_record: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    ) -> &mut Self {
        self.instruction.token_record = token_record;
        self
    }
    /// Payer
    #[inline(always)]
    pub fn payer(&mut self, payer: &'a solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.payer = Some(payer);
        self
    }
    /// System program
    #[inline(always)]
    pub fn system_program(
        &mut self,
        system_program: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.system_program = Some(system_program);
        self
    }
    /// System program
    #[inline(always)]
    pub fn sysvar_instructions(
        &mut self,
        sysvar_instructions: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.sysvar_instructions = Some(sysvar_instructions);
        self
    }
    /// `[optional account]`
    /// SPL Token Program
    #[inline(always)]
    pub fn spl_token_program(
        &mut self,
        spl_token_program: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    ) -> &mut Self {
        self.instruction.spl_token_program = spl_token_program;
        self
    }
    /// `[optional account]`
    /// Token Authorization Rules Program
    #[inline(always)]
    pub fn authorization_rules_program(
        &mut self,
        authorization_rules_program: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    ) -> &mut Self {
        self.instruction.authorization_rules_program = authorization_rules_program;
        self
    }
    /// `[optional account]`
    /// Token Authorization Rules account
    #[inline(always)]
    pub fn authorization_rules(
        &mut self,
        authorization_rules: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    ) -> &mut Self {
        self.instruction.authorization_rules = authorization_rules;
        self
    }
    /// `[optional argument]`
    #[inline(always)]
    pub fn authorization_data(&mut self, authorization_data: AuthorizationData) -> &mut Self {
        self.instruction.authorization_data = Some(authorization_data);
        self
    }
    #[inline(always)]
    pub fn add_remaining_account(
        &mut self,
        account: super::InstructionAccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.__remaining_accounts.push(account);
        self
    }
    #[inline(always)]
    pub fn add_remaining_accounts(
        &mut self,
        accounts: &[super::InstructionAccountInfo<'a>],
    ) -> &mut Self {
        self.instruction
            .__remaining_accounts
            .extend_from_slice(accounts);
        self
    }
    #[inline(always)]
    pub fn invoke(&self) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed(&[])
    }
    #[allow(clippy::clone_on_copy)]
    #[allow(clippy::vec_init_then_push)]
    pub fn invoke_signed(
        &self,
        signers_seeds: &[&[&[u8]]],
    ) -> solana_program::entrypoint::ProgramResult {
        let args = LockV1InstructionArgs {
            authorization_data: self.instruction.authorization_data.clone(),
        };
        let instruction = LockV1Cpi {
            __program: self.instruction.__program,

            authority: self.instruction.authority.expect("authority is not set"),

            token_owner: self.instruction.token_owner,

            token: self.instruction.token.expect("token is not set"),

            mint: self.instruction.mint.expect("mint is not set"),

            metadata: self.instruction.metadata.expect("metadata is not set"),

            edition: self.instruction.edition,

            token_record: self.instruction.token_record,

            payer: self.instruction.payer.expect("payer is not set"),

            system_program: self
                .instruction
                .system_program
                .expect("system_program is not set"),

            sysvar_instructions: self
                .instruction
                .sysvar_instructions
                .expect("sysvar_instructions is not set"),

            spl_token_program: self.instruction.spl_token_program,

            authorization_rules_program: self.instruction.authorization_rules_program,

            authorization_rules: self.instruction.authorization_rules,
            __args: args,
        };
        instruction.invoke_signed_with_remaining_accounts(
            signers_seeds,
            &self.instruction.__remaining_accounts,
        )
    }
}

struct LockV1CpiBuilderInstruction<'a> {
    __program: &'a solana_program::account_info::AccountInfo<'a>,
    authority: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    token_owner: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    token: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    mint: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    metadata: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    edition: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    token_record: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    payer: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    system_program: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    sysvar_instructions: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    spl_token_program: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    authorization_rules_program: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    authorization_rules: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    authorization_data: Option<AuthorizationData>,
    __remaining_accounts: Vec<super::InstructionAccountInfo<'a>>,
}
