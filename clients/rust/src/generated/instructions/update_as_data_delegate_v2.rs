//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use crate::generated::types::AuthorizationData;
use crate::generated::types::Creator;
use borsh::BorshDeserialize;
use borsh::BorshSerialize;

/// Accounts.
pub struct UpdateAsDataDelegateV2 {
    /// Update authority or delegate
    pub authority: solana_program::pubkey::Pubkey,
    /// Delegate record PDA
    pub delegate_record: Option<solana_program::pubkey::Pubkey>,
    /// Token account
    pub token: Option<solana_program::pubkey::Pubkey>,
    /// Mint account
    pub mint: solana_program::pubkey::Pubkey,
    /// Metadata account
    pub metadata: solana_program::pubkey::Pubkey,
    /// Edition account
    pub edition: Option<solana_program::pubkey::Pubkey>,
    /// Payer
    pub payer: solana_program::pubkey::Pubkey,
    /// System program
    pub system_program: solana_program::pubkey::Pubkey,
    /// Instructions sysvar account
    pub sysvar_instructions: solana_program::pubkey::Pubkey,
    /// Token Authorization Rules Program
    pub authorization_rules_program: Option<solana_program::pubkey::Pubkey>,
    /// Token Authorization Rules account
    pub authorization_rules: Option<solana_program::pubkey::Pubkey>,
}

impl UpdateAsDataDelegateV2 {
    pub fn instruction(
        &self,
        args: UpdateAsDataDelegateV2InstructionArgs,
    ) -> solana_program::instruction::Instruction {
        self.instruction_with_remaining_accounts(args, &[])
    }
    #[allow(clippy::vec_init_then_push)]
    pub fn instruction_with_remaining_accounts(
        &self,
        args: UpdateAsDataDelegateV2InstructionArgs,
        remaining_accounts: &[super::InstructionAccount],
    ) -> solana_program::instruction::Instruction {
        let mut accounts = Vec::with_capacity(11 + remaining_accounts.len());
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.authority,
            true,
        ));
        if let Some(delegate_record) = self.delegate_record {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                delegate_record,
                false,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_TOKEN_METADATA_ID,
                false,
            ));
        }
        if let Some(token) = self.token {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                token, false,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_TOKEN_METADATA_ID,
                false,
            ));
        }
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
        let mut data = UpdateAsDataDelegateV2InstructionData::new()
            .try_to_vec()
            .unwrap();
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
struct UpdateAsDataDelegateV2InstructionData {
    discriminator: u8,
    update_as_data_delegate_v2_discriminator: u8,
}

impl UpdateAsDataDelegateV2InstructionData {
    fn new() -> Self {
        Self {
            discriminator: 50,
            update_as_data_delegate_v2_discriminator: 4,
        }
    }
}

#[derive(BorshSerialize, BorshDeserialize, Clone, Debug, Eq, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub struct UpdateAsDataDelegateV2InstructionArgs {
    pub data: Option<UpdateAsDataDelegateV2InstructionDataData>,
    pub authorization_data: Option<AuthorizationData>,
}

#[derive(BorshSerialize, BorshDeserialize, Clone, Debug, Eq, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub struct UpdateAsDataDelegateV2InstructionDataData {
    pub name: String,
    pub symbol: String,
    pub uri: String,
    pub seller_fee_basis_points: u16,
    pub creators: Option<Vec<Creator>>,
}

/// Instruction builder.
#[derive(Default)]
pub struct UpdateAsDataDelegateV2Builder {
    authority: Option<solana_program::pubkey::Pubkey>,
    delegate_record: Option<solana_program::pubkey::Pubkey>,
    token: Option<solana_program::pubkey::Pubkey>,
    mint: Option<solana_program::pubkey::Pubkey>,
    metadata: Option<solana_program::pubkey::Pubkey>,
    edition: Option<solana_program::pubkey::Pubkey>,
    payer: Option<solana_program::pubkey::Pubkey>,
    system_program: Option<solana_program::pubkey::Pubkey>,
    sysvar_instructions: Option<solana_program::pubkey::Pubkey>,
    authorization_rules_program: Option<solana_program::pubkey::Pubkey>,
    authorization_rules: Option<solana_program::pubkey::Pubkey>,
    data: Option<UpdateAsDataDelegateV2InstructionDataData>,
    authorization_data: Option<AuthorizationData>,
    __remaining_accounts: Vec<super::InstructionAccount>,
}

impl UpdateAsDataDelegateV2Builder {
    pub fn new() -> Self {
        Self::default()
    }
    /// Update authority or delegate
    #[inline(always)]
    pub fn authority(&mut self, authority: solana_program::pubkey::Pubkey) -> &mut Self {
        self.authority = Some(authority);
        self
    }
    /// `[optional account]`
    /// Delegate record PDA
    #[inline(always)]
    pub fn delegate_record(
        &mut self,
        delegate_record: Option<solana_program::pubkey::Pubkey>,
    ) -> &mut Self {
        self.delegate_record = delegate_record;
        self
    }
    /// `[optional account]`
    /// Token account
    #[inline(always)]
    pub fn token(&mut self, token: Option<solana_program::pubkey::Pubkey>) -> &mut Self {
        self.token = token;
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
    /// Instructions sysvar account
    #[inline(always)]
    pub fn sysvar_instructions(
        &mut self,
        sysvar_instructions: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.sysvar_instructions = Some(sysvar_instructions);
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
    pub fn data(&mut self, data: UpdateAsDataDelegateV2InstructionDataData) -> &mut Self {
        self.data = Some(data);
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
        let accounts = UpdateAsDataDelegateV2 {
            authority: self.authority.expect("authority is not set"),
            delegate_record: self.delegate_record,
            token: self.token,
            mint: self.mint.expect("mint is not set"),
            metadata: self.metadata.expect("metadata is not set"),
            edition: self.edition,
            payer: self.payer.expect("payer is not set"),
            system_program: self
                .system_program
                .unwrap_or(solana_program::pubkey!("11111111111111111111111111111111")),
            sysvar_instructions: self.sysvar_instructions.unwrap_or(solana_program::pubkey!(
                "Sysvar1nstructions1111111111111111111111111"
            )),
            authorization_rules_program: self.authorization_rules_program,
            authorization_rules: self.authorization_rules,
        };
        let args = UpdateAsDataDelegateV2InstructionArgs {
            data: self.data.clone(),
            authorization_data: self.authorization_data.clone(),
        };

        accounts.instruction_with_remaining_accounts(args, &self.__remaining_accounts)
    }
}

/// `update_as_data_delegate_v2` CPI accounts.
pub struct UpdateAsDataDelegateV2CpiAccounts<'a> {
    /// Update authority or delegate
    pub authority: &'a solana_program::account_info::AccountInfo<'a>,
    /// Delegate record PDA
    pub delegate_record: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    /// Token account
    pub token: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    /// Mint account
    pub mint: &'a solana_program::account_info::AccountInfo<'a>,
    /// Metadata account
    pub metadata: &'a solana_program::account_info::AccountInfo<'a>,
    /// Edition account
    pub edition: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    /// Payer
    pub payer: &'a solana_program::account_info::AccountInfo<'a>,
    /// System program
    pub system_program: &'a solana_program::account_info::AccountInfo<'a>,
    /// Instructions sysvar account
    pub sysvar_instructions: &'a solana_program::account_info::AccountInfo<'a>,
    /// Token Authorization Rules Program
    pub authorization_rules_program: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    /// Token Authorization Rules account
    pub authorization_rules: Option<&'a solana_program::account_info::AccountInfo<'a>>,
}

/// `update_as_data_delegate_v2` CPI instruction.
pub struct UpdateAsDataDelegateV2Cpi<'a> {
    /// The program to invoke.
    pub __program: &'a solana_program::account_info::AccountInfo<'a>,
    /// Update authority or delegate
    pub authority: &'a solana_program::account_info::AccountInfo<'a>,
    /// Delegate record PDA
    pub delegate_record: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    /// Token account
    pub token: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    /// Mint account
    pub mint: &'a solana_program::account_info::AccountInfo<'a>,
    /// Metadata account
    pub metadata: &'a solana_program::account_info::AccountInfo<'a>,
    /// Edition account
    pub edition: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    /// Payer
    pub payer: &'a solana_program::account_info::AccountInfo<'a>,
    /// System program
    pub system_program: &'a solana_program::account_info::AccountInfo<'a>,
    /// Instructions sysvar account
    pub sysvar_instructions: &'a solana_program::account_info::AccountInfo<'a>,
    /// Token Authorization Rules Program
    pub authorization_rules_program: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    /// Token Authorization Rules account
    pub authorization_rules: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    /// The arguments for the instruction.
    pub __args: UpdateAsDataDelegateV2InstructionArgs,
}

impl<'a> UpdateAsDataDelegateV2Cpi<'a> {
    pub fn new(
        program: &'a solana_program::account_info::AccountInfo<'a>,
        accounts: UpdateAsDataDelegateV2CpiAccounts<'a>,
        args: UpdateAsDataDelegateV2InstructionArgs,
    ) -> Self {
        Self {
            __program: program,
            authority: accounts.authority,
            delegate_record: accounts.delegate_record,
            token: accounts.token,
            mint: accounts.mint,
            metadata: accounts.metadata,
            edition: accounts.edition,
            payer: accounts.payer,
            system_program: accounts.system_program,
            sysvar_instructions: accounts.sysvar_instructions,
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
        let mut accounts = Vec::with_capacity(11 + remaining_accounts.len());
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.authority.key,
            true,
        ));
        if let Some(delegate_record) = self.delegate_record {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                *delegate_record.key,
                false,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_TOKEN_METADATA_ID,
                false,
            ));
        }
        if let Some(token) = self.token {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                *token.key, false,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_TOKEN_METADATA_ID,
                false,
            ));
        }
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
        let mut data = UpdateAsDataDelegateV2InstructionData::new()
            .try_to_vec()
            .unwrap();
        let mut args = self.__args.try_to_vec().unwrap();
        data.append(&mut args);

        let instruction = solana_program::instruction::Instruction {
            program_id: crate::MPL_TOKEN_METADATA_ID,
            accounts,
            data,
        };
        let mut account_infos = Vec::with_capacity(11 + 1 + remaining_accounts.len());
        account_infos.push(self.__program.clone());
        account_infos.push(self.authority.clone());
        if let Some(delegate_record) = self.delegate_record {
            account_infos.push(delegate_record.clone());
        }
        if let Some(token) = self.token {
            account_infos.push(token.clone());
        }
        account_infos.push(self.mint.clone());
        account_infos.push(self.metadata.clone());
        if let Some(edition) = self.edition {
            account_infos.push(edition.clone());
        }
        account_infos.push(self.payer.clone());
        account_infos.push(self.system_program.clone());
        account_infos.push(self.sysvar_instructions.clone());
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

/// `update_as_data_delegate_v2` CPI instruction builder.
pub struct UpdateAsDataDelegateV2CpiBuilder<'a> {
    instruction: Box<UpdateAsDataDelegateV2CpiBuilderInstruction<'a>>,
}

impl<'a> UpdateAsDataDelegateV2CpiBuilder<'a> {
    pub fn new(program: &'a solana_program::account_info::AccountInfo<'a>) -> Self {
        let instruction = Box::new(UpdateAsDataDelegateV2CpiBuilderInstruction {
            __program: program,
            authority: None,
            delegate_record: None,
            token: None,
            mint: None,
            metadata: None,
            edition: None,
            payer: None,
            system_program: None,
            sysvar_instructions: None,
            authorization_rules_program: None,
            authorization_rules: None,
            data: None,
            authorization_data: None,
            __remaining_accounts: Vec::new(),
        });
        Self { instruction }
    }
    /// Update authority or delegate
    #[inline(always)]
    pub fn authority(
        &mut self,
        authority: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.authority = Some(authority);
        self
    }
    /// `[optional account]`
    /// Delegate record PDA
    #[inline(always)]
    pub fn delegate_record(
        &mut self,
        delegate_record: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    ) -> &mut Self {
        self.instruction.delegate_record = delegate_record;
        self
    }
    /// `[optional account]`
    /// Token account
    #[inline(always)]
    pub fn token(
        &mut self,
        token: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    ) -> &mut Self {
        self.instruction.token = token;
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
    /// Instructions sysvar account
    #[inline(always)]
    pub fn sysvar_instructions(
        &mut self,
        sysvar_instructions: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.sysvar_instructions = Some(sysvar_instructions);
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
    pub fn data(&mut self, data: UpdateAsDataDelegateV2InstructionDataData) -> &mut Self {
        self.instruction.data = Some(data);
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
        let args = UpdateAsDataDelegateV2InstructionArgs {
            data: self.instruction.data.clone(),
            authorization_data: self.instruction.authorization_data.clone(),
        };
        let instruction = UpdateAsDataDelegateV2Cpi {
            __program: self.instruction.__program,

            authority: self.instruction.authority.expect("authority is not set"),

            delegate_record: self.instruction.delegate_record,

            token: self.instruction.token,

            mint: self.instruction.mint.expect("mint is not set"),

            metadata: self.instruction.metadata.expect("metadata is not set"),

            edition: self.instruction.edition,

            payer: self.instruction.payer.expect("payer is not set"),

            system_program: self
                .instruction
                .system_program
                .expect("system_program is not set"),

            sysvar_instructions: self
                .instruction
                .sysvar_instructions
                .expect("sysvar_instructions is not set"),

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

struct UpdateAsDataDelegateV2CpiBuilderInstruction<'a> {
    __program: &'a solana_program::account_info::AccountInfo<'a>,
    authority: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    delegate_record: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    token: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    mint: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    metadata: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    edition: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    payer: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    system_program: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    sysvar_instructions: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    authorization_rules_program: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    authorization_rules: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    data: Option<UpdateAsDataDelegateV2InstructionDataData>,
    authorization_data: Option<AuthorizationData>,
    __remaining_accounts: Vec<super::InstructionAccountInfo<'a>>,
}
