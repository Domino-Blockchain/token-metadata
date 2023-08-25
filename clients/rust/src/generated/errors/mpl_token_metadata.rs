//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use num_derive::FromPrimitive;
use thiserror::Error;

#[derive(Clone, Debug, Eq, Error, FromPrimitive, PartialEq)]
pub enum MplTokenMetadataError {
    /// 0x0 -
    #[error("")]
    InstructionUnpackError,
    /// 0x1 -
    #[error("")]
    InstructionPackError,
    /// 0x2 - Lamport balance below rent-exempt threshold
    #[error("Lamport balance below rent-exempt threshold")]
    NotRentExempt,
    /// 0x3 - Already initialized
    #[error("Already initialized")]
    AlreadyInitialized,
    /// 0x4 - Uninitialized
    #[error("Uninitialized")]
    Uninitialized,
    /// 0x5 -  Metadata's key must match seed of ['metadata', program id, mint] provided
    #[error(" Metadata's key must match seed of ['metadata', program id, mint] provided")]
    InvalidMetadataKey,
    /// 0x6 - Edition's key must match seed of ['metadata', program id, name, 'edition'] provided
    #[error("Edition's key must match seed of ['metadata', program id, name, 'edition'] provided")]
    InvalidEditionKey,
    /// 0x7 - Update Authority given does not match
    #[error("Update Authority given does not match")]
    UpdateAuthorityIncorrect,
    /// 0x8 - Update Authority needs to be signer to update metadata
    #[error("Update Authority needs to be signer to update metadata")]
    UpdateAuthorityIsNotSigner,
    /// 0x9 - You must be the mint authority and signer on this transaction
    #[error("You must be the mint authority and signer on this transaction")]
    NotMintAuthority,
    /// 0xA - Mint authority provided does not match the authority on the mint
    #[error("Mint authority provided does not match the authority on the mint")]
    InvalidMintAuthority,
    /// 0xB - Name too long
    #[error("Name too long")]
    NameTooLong,
    /// 0xC - Symbol too long
    #[error("Symbol too long")]
    SymbolTooLong,
    /// 0xD - URI too long
    #[error("URI too long")]
    UriTooLong,
    /// 0xE -
    #[error("")]
    UpdateAuthorityMustBeEqualToMetadataAuthorityAndSigner,
    /// 0xF - Mint given does not match mint on Metadata
    #[error("Mint given does not match mint on Metadata")]
    MintMismatch,
    /// 0x10 - Editions must have exactly one token
    #[error("Editions must have exactly one token")]
    EditionsMustHaveExactlyOneToken,
    /// 0x11 -
    #[error("")]
    MaxEditionsMintedAlready,
    /// 0x12 -
    #[error("")]
    TokenMintToFailed,
    /// 0x13 -
    #[error("")]
    MasterRecordMismatch,
    /// 0x14 -
    #[error("")]
    DestinationMintMismatch,
    /// 0x15 -
    #[error("")]
    EditionAlreadyMinted,
    /// 0x16 -
    #[error("")]
    PrintingMintDecimalsShouldBeZero,
    /// 0x17 -
    #[error("")]
    OneTimePrintingAuthorizationMintDecimalsShouldBeZero,
    /// 0x18 - EditionMintDecimalsShouldBeZero
    #[error("EditionMintDecimalsShouldBeZero")]
    EditionMintDecimalsShouldBeZero,
    /// 0x19 -
    #[error("")]
    TokenBurnFailed,
    /// 0x1A -
    #[error("")]
    TokenAccountOneTimeAuthMintMismatch,
    /// 0x1B - Derived key invalid
    #[error("Derived key invalid")]
    DerivedKeyInvalid,
    /// 0x1C - The Printing mint does not match that on the master edition!
    #[error("The Printing mint does not match that on the master edition!")]
    PrintingMintMismatch,
    /// 0x1D - The One Time Printing Auth mint does not match that on the master edition!
    #[error("The One Time Printing Auth mint does not match that on the master edition!")]
    OneTimePrintingAuthMintMismatch,
    /// 0x1E - The mint of the token account does not match the Printing mint!
    #[error("The mint of the token account does not match the Printing mint!")]
    TokenAccountMintMismatch,
    /// 0x1F - The mint of the token account does not match the master metadata mint!
    #[error("The mint of the token account does not match the master metadata mint!")]
    TokenAccountMintMismatchV2,
    /// 0x20 - Not enough tokens to mint a limited edition
    #[error("Not enough tokens to mint a limited edition")]
    NotEnoughTokens,
    /// 0x21 -
    #[error("")]
    PrintingMintAuthorizationAccountMismatch,
    /// 0x22 -
    #[error("")]
    AuthorizationTokenAccountOwnerMismatch,
    /// 0x23 -
    #[error("")]
    Disabled,
    /// 0x24 - Creators list too long
    #[error("Creators list too long")]
    CreatorsTooLong,
    /// 0x25 - Creators must be at least one if set
    #[error("Creators must be at least one if set")]
    CreatorsMustBeAtleastOne,
    /// 0x26 -
    #[error("")]
    MustBeOneOfCreators,
    /// 0x27 - This metadata does not have creators
    #[error("This metadata does not have creators")]
    NoCreatorsPresentOnMetadata,
    /// 0x28 - This creator address was not found
    #[error("This creator address was not found")]
    CreatorNotFound,
    /// 0x29 - Basis points cannot be more than 10000
    #[error("Basis points cannot be more than 10000")]
    InvalidBasisPoints,
    /// 0x2A - Primary sale can only be flipped to true and is immutable
    #[error("Primary sale can only be flipped to true and is immutable")]
    PrimarySaleCanOnlyBeFlippedToTrue,
    /// 0x2B - Owner does not match that on the account given
    #[error("Owner does not match that on the account given")]
    OwnerMismatch,
    /// 0x2C - This account has no tokens to be used for authorization
    #[error("This account has no tokens to be used for authorization")]
    NoBalanceInAccountForAuthorization,
    /// 0x2D - Share total must equal 100 for creator array
    #[error("Share total must equal 100 for creator array")]
    ShareTotalMustBe100,
    /// 0x2E -
    #[error("")]
    ReservationExists,
    /// 0x2F -
    #[error("")]
    ReservationDoesNotExist,
    /// 0x30 -
    #[error("")]
    ReservationNotSet,
    /// 0x31 -
    #[error("")]
    ReservationAlreadyMade,
    /// 0x32 -
    #[error("")]
    BeyondMaxAddressSize,
    /// 0x33 - NumericalOverflowError
    #[error("NumericalOverflowError")]
    NumericalOverflowError,
    /// 0x34 -
    #[error("")]
    ReservationBreachesMaximumSupply,
    /// 0x35 -
    #[error("")]
    AddressNotInReservation,
    /// 0x36 - You cannot unilaterally verify another creator, they must sign
    #[error("You cannot unilaterally verify another creator, they must sign")]
    CannotVerifyAnotherCreator,
    /// 0x37 - You cannot unilaterally unverify another creator
    #[error("You cannot unilaterally unverify another creator")]
    CannotUnverifyAnotherCreator,
    /// 0x38 -
    #[error("")]
    SpotMismatch,
    /// 0x39 - Incorrect account owner
    #[error("Incorrect account owner")]
    IncorrectOwner,
    /// 0x3A -
    #[error("")]
    PrintingWouldBreachMaximumSupply,
    /// 0x3B - Data is immutable
    #[error("Data is immutable")]
    DataIsImmutable,
    /// 0x3C - No duplicate creator addresses
    #[error("No duplicate creator addresses")]
    DuplicateCreatorAddress,
    /// 0x3D -
    #[error("")]
    ReservationSpotsRemainingShouldMatchTotalSpotsAtStart,
    /// 0x3E - Invalid token program
    #[error("Invalid token program")]
    InvalidTokenProgram,
    /// 0x3F - Data type mismatch
    #[error("Data type mismatch")]
    DataTypeMismatch,
    /// 0x40 -
    #[error("")]
    BeyondAlottedAddressSize,
    /// 0x41 -
    #[error("")]
    ReservationNotComplete,
    /// 0x42 -
    #[error("")]
    TriedToReplaceAnExistingReservation,
    /// 0x43 - Invalid operation
    #[error("Invalid operation")]
    InvalidOperation,
    /// 0x44 - Invalid Owner
    #[error("Invalid Owner")]
    InvalidOwner,
    /// 0x45 - Printing mint supply must be zero for conversion
    #[error("Printing mint supply must be zero for conversion")]
    PrintingMintSupplyMustBeZeroForConversion,
    /// 0x46 - One Time Auth mint supply must be zero for conversion
    #[error("One Time Auth mint supply must be zero for conversion")]
    OneTimeAuthMintSupplyMustBeZeroForConversion,
    /// 0x47 - You tried to insert one edition too many into an edition mark pda
    #[error("You tried to insert one edition too many into an edition mark pda")]
    InvalidEditionIndex,
    /// 0x48 -
    #[error("")]
    ReservationArrayShouldBeSizeOne,
    /// 0x49 - Is Mutable can only be flipped to false
    #[error("Is Mutable can only be flipped to false")]
    IsMutableCanOnlyBeFlippedToFalse,
    /// 0x4A - Collection cannot be verified in this instruction
    #[error("Collection cannot be verified in this instruction")]
    CollectionCannotBeVerifiedInThisInstruction,
    /// 0x4B - This instruction was deprecated in a previous release and is now removed
    #[error("This instruction was deprecated in a previous release and is now removed")]
    Removed,
    /// 0x4C -
    #[error("")]
    MustBeBurned,
    /// 0x4D - This use method is invalid
    #[error("This use method is invalid")]
    InvalidUseMethod,
    /// 0x4E - Cannot Change Use Method after the first use
    #[error("Cannot Change Use Method after the first use")]
    CannotChangeUseMethodAfterFirstUse,
    /// 0x4F - Cannot Change Remaining or Available uses after the first use
    #[error("Cannot Change Remaining or Available uses after the first use")]
    CannotChangeUsesAfterFirstUse,
    /// 0x50 - Collection Not Found on Metadata
    #[error("Collection Not Found on Metadata")]
    CollectionNotFound,
    /// 0x51 - Collection Update Authority is invalid
    #[error("Collection Update Authority is invalid")]
    InvalidCollectionUpdateAuthority,
    /// 0x52 - Collection Must Be a Unique Master Edition v2
    #[error("Collection Must Be a Unique Master Edition v2")]
    CollectionMustBeAUniqueMasterEdition,
    /// 0x53 - The Use Authority Record Already Exists, to modify it Revoke, then Approve
    #[error("The Use Authority Record Already Exists, to modify it Revoke, then Approve")]
    UseAuthorityRecordAlreadyExists,
    /// 0x54 - The Use Authority Record is empty or already revoked
    #[error("The Use Authority Record is empty or already revoked")]
    UseAuthorityRecordAlreadyRevoked,
    /// 0x55 - This token has no uses
    #[error("This token has no uses")]
    Unusable,
    /// 0x56 - There are not enough Uses left on this token.
    #[error("There are not enough Uses left on this token.")]
    NotEnoughUses,
    /// 0x57 - This Collection Authority Record Already Exists.
    #[error("This Collection Authority Record Already Exists.")]
    CollectionAuthorityRecordAlreadyExists,
    /// 0x58 - This Collection Authority Record Does Not Exist.
    #[error("This Collection Authority Record Does Not Exist.")]
    CollectionAuthorityDoesNotExist,
    /// 0x59 - This Use Authority Record is invalid.
    #[error("This Use Authority Record is invalid.")]
    InvalidUseAuthorityRecord,
    /// 0x5A -
    #[error("")]
    InvalidCollectionAuthorityRecord,
    /// 0x5B - Metadata does not match the freeze authority on the mint
    #[error("Metadata does not match the freeze authority on the mint")]
    InvalidFreezeAuthority,
    /// 0x5C - All tokens in this account have not been delegated to this user.
    #[error("All tokens in this account have not been delegated to this user.")]
    InvalidDelegate,
    /// 0x5D -
    #[error("")]
    CannotAdjustVerifiedCreator,
    /// 0x5E - Verified creators cannot be removed.
    #[error("Verified creators cannot be removed.")]
    CannotRemoveVerifiedCreator,
    /// 0x5F -
    #[error("")]
    CannotWipeVerifiedCreators,
    /// 0x60 -
    #[error("")]
    NotAllowedToChangeSellerFeeBasisPoints,
    /// 0x61 - Edition override cannot be zero
    #[error("Edition override cannot be zero")]
    EditionOverrideCannotBeZero,
    /// 0x62 - Invalid User
    #[error("Invalid User")]
    InvalidUser,
    /// 0x63 - Revoke Collection Authority signer is incorrect
    #[error("Revoke Collection Authority signer is incorrect")]
    RevokeCollectionAuthoritySignerIncorrect,
    /// 0x64 -
    #[error("")]
    TokenCloseFailed,
    /// 0x65 - Can't use this function on unsized collection
    #[error("Can't use this function on unsized collection")]
    UnsizedCollection,
    /// 0x66 - Can't use this function on a sized collection
    #[error("Can't use this function on a sized collection")]
    SizedCollection,
    /// 0x67 - Missing collection metadata account
    #[error("Missing collection metadata account")]
    MissingCollectionMetadata,
    /// 0x68 - This NFT is not a member of the specified collection.
    #[error("This NFT is not a member of the specified collection.")]
    NotAMemberOfCollection,
    /// 0x69 - This NFT is not a verified member of the specified collection.
    #[error("This NFT is not a verified member of the specified collection.")]
    NotVerifiedMemberOfCollection,
    /// 0x6A - This NFT is not a collection parent NFT.
    #[error("This NFT is not a collection parent NFT.")]
    NotACollectionParent,
    /// 0x6B - Could not determine a TokenStandard type.
    #[error("Could not determine a TokenStandard type.")]
    CouldNotDetermineTokenStandard,
    /// 0x6C - This mint account has an edition but none was provided.
    #[error("This mint account has an edition but none was provided.")]
    MissingEditionAccount,
    /// 0x6D - This edition is not a Master Edition
    #[error("This edition is not a Master Edition")]
    NotAMasterEdition,
    /// 0x6E - This Master Edition has existing prints
    #[error("This Master Edition has existing prints")]
    MasterEditionHasPrints,
    /// 0x6F -
    #[error("")]
    BorshDeserializationError,
    /// 0x70 - Cannot update a verified collection in this command
    #[error("Cannot update a verified collection in this command")]
    CannotUpdateVerifiedCollection,
    /// 0x71 - Edition account doesnt match collection
    #[error("Edition account doesnt match collection ")]
    CollectionMasterEditionAccountInvalid,
    /// 0x72 - Item is already verified.
    #[error("Item is already verified.")]
    AlreadyVerified,
    /// 0x73 -
    #[error("")]
    AlreadyUnverified,
    /// 0x74 - This edition is not a Print Edition
    #[error("This edition is not a Print Edition")]
    NotAPrintEdition,
    /// 0x75 - Invalid Master Edition
    #[error("Invalid Master Edition")]
    InvalidMasterEdition,
    /// 0x76 - Invalid Print Edition
    #[error("Invalid Print Edition")]
    InvalidPrintEdition,
    /// 0x77 - Invalid Edition Marker
    #[error("Invalid Edition Marker")]
    InvalidEditionMarker,
    /// 0x78 - Reservation List is Deprecated
    #[error("Reservation List is Deprecated")]
    ReservationListDeprecated,
    /// 0x79 - Print Edition does not match Master Edition
    #[error("Print Edition does not match Master Edition")]
    PrintEditionDoesNotMatchMasterEdition,
    /// 0x7A - Edition Number greater than max supply
    #[error("Edition Number greater than max supply")]
    EditionNumberGreaterThanMaxSupply,
    /// 0x7B - Must unverify before migrating collections.
    #[error("Must unverify before migrating collections.")]
    MustUnverify,
    /// 0x7C - Invalid Escrow Account Bump Seed
    #[error("Invalid Escrow Account Bump Seed")]
    InvalidEscrowBumpSeed,
    /// 0x7D - Must Escrow Authority
    #[error("Must Escrow Authority")]
    MustBeEscrowAuthority,
    /// 0x7E - Invalid System Program
    #[error("Invalid System Program")]
    InvalidSystemProgram,
    /// 0x7F - Must be a Non Fungible Token
    #[error("Must be a Non Fungible Token")]
    MustBeNonFungible,
    /// 0x80 - Insufficient tokens for transfer
    #[error("Insufficient tokens for transfer")]
    InsufficientTokens,
    /// 0x81 - Borsh Serialization Error
    #[error("Borsh Serialization Error")]
    BorshSerializationError,
    /// 0x82 - Cannot create NFT with no Freeze Authority.
    #[error("Cannot create NFT with no Freeze Authority.")]
    NoFreezeAuthoritySet,
    /// 0x83 - Invalid collection size change
    #[error("Invalid collection size change")]
    InvalidCollectionSizeChange,
    /// 0x84 - Invalid bubblegum signer
    #[error("Invalid bubblegum signer")]
    InvalidBubblegumSigner,
    /// 0x85 - Escrow parent cannot have a delegate
    #[error("Escrow parent cannot have a delegate")]
    EscrowParentHasDelegate,
    /// 0x86 - Mint needs to be signer to initialize the account
    #[error("Mint needs to be signer to initialize the account")]
    MintIsNotSigner,
    /// 0x87 - Invalid token standard
    #[error("Invalid token standard")]
    InvalidTokenStandard,
    /// 0x88 - Invalid mint account for specified token standard
    #[error("Invalid mint account for specified token standard")]
    InvalidMintForTokenStandard,
    /// 0x89 - Invalid authorization rules account
    #[error("Invalid authorization rules account")]
    InvalidAuthorizationRules,
    /// 0x8A - Missing authorization rules account
    #[error("Missing authorization rules account")]
    MissingAuthorizationRules,
    /// 0x8B - Missing programmable configuration
    #[error("Missing programmable configuration")]
    MissingProgrammableConfig,
    /// 0x8C - Invalid programmable configuration
    #[error("Invalid programmable configuration")]
    InvalidProgrammableConfig,
    /// 0x8D - Delegate already exists
    #[error("Delegate already exists")]
    DelegateAlreadyExists,
    /// 0x8E - Delegate not found
    #[error("Delegate not found")]
    DelegateNotFound,
    /// 0x8F - Required account not set in instruction builder
    #[error("Required account not set in instruction builder")]
    MissingAccountInBuilder,
    /// 0x90 - Required argument not set in instruction builder
    #[error("Required argument not set in instruction builder")]
    MissingArgumentInBuilder,
    /// 0x91 - Feature not supported currently
    #[error("Feature not supported currently")]
    FeatureNotSupported,
    /// 0x92 - Invalid system wallet
    #[error("Invalid system wallet")]
    InvalidSystemWallet,
    /// 0x93 - Only the sale delegate can transfer while its set
    #[error("Only the sale delegate can transfer while its set")]
    OnlySaleDelegateCanTransfer,
    /// 0x94 - Missing token account
    #[error("Missing token account")]
    MissingTokenAccount,
    /// 0x95 - Missing SPL token program
    #[error("Missing SPL token program")]
    MissingSplTokenProgram,
    /// 0x96 - Missing authorization rules program
    #[error("Missing authorization rules program")]
    MissingAuthorizationRulesProgram,
    /// 0x97 - Invalid delegate role for transfer
    #[error("Invalid delegate role for transfer")]
    InvalidDelegateRoleForTransfer,
    /// 0x98 - Invalid transfer authority
    #[error("Invalid transfer authority")]
    InvalidTransferAuthority,
    /// 0x99 - Instruction not supported for ProgrammableNonFungible assets
    #[error("Instruction not supported for ProgrammableNonFungible assets")]
    InstructionNotSupported,
    /// 0x9A - Public key does not match expected value
    #[error("Public key does not match expected value")]
    KeyMismatch,
    /// 0x9B - Token is locked
    #[error("Token is locked")]
    LockedToken,
    /// 0x9C - Token is unlocked
    #[error("Token is unlocked")]
    UnlockedToken,
    /// 0x9D - Missing delegate role
    #[error("Missing delegate role")]
    MissingDelegateRole,
    /// 0x9E - Invalid authority type
    #[error("Invalid authority type")]
    InvalidAuthorityType,
    /// 0x9F - Missing token record account
    #[error("Missing token record account")]
    MissingTokenRecord,
    /// 0xA0 - Mint supply must be zero for programmable assets
    #[error("Mint supply must be zero for programmable assets")]
    MintSupplyMustBeZero,
    /// 0xA1 - Data is empty or zeroed
    #[error("Data is empty or zeroed")]
    DataIsEmptyOrZeroed,
    /// 0xA2 - Missing token owner
    #[error("Missing token owner")]
    MissingTokenOwnerAccount,
    /// 0xA3 - Master edition account has an invalid length
    #[error("Master edition account has an invalid length")]
    InvalidMasterEditionAccountLength,
    /// 0xA4 - Incorrect token state
    #[error("Incorrect token state")]
    IncorrectTokenState,
    /// 0xA5 - Invalid delegate role
    #[error("Invalid delegate role")]
    InvalidDelegateRole,
    /// 0xA6 - Print supply is required for non-fungibles
    #[error("Print supply is required for non-fungibles")]
    MissingPrintSupply,
    /// 0xA7 - Missing master edition account
    #[error("Missing master edition account")]
    MissingMasterEditionAccount,
    /// 0xA8 - Amount must be greater than zero
    #[error("Amount must be greater than zero")]
    AmountMustBeGreaterThanZero,
    /// 0xA9 - Invalid delegate args
    #[error("Invalid delegate args")]
    InvalidDelegateArgs,
    /// 0xAA - Missing address for locked transfer
    #[error("Missing address for locked transfer")]
    MissingLockedTransferAddress,
    /// 0xAB - Invalid destination address for locked transfer
    #[error("Invalid destination address for locked transfer")]
    InvalidLockedTransferAddress,
    /// 0xAC - Exceeded account realloc increase limit
    #[error("Exceeded account realloc increase limit")]
    DataIncrementLimitExceeded,
    /// 0xAD - Cannot update the rule set of a programmable asset that has a delegate
    #[error("Cannot update the rule set of a programmable asset that has a delegate")]
    CannotUpdateAssetWithDelegate,
    /// 0xAE - Invalid token amount for this operation or token standard
    #[error("Invalid token amount for this operation or token standard")]
    InvalidAmount,
    /// 0xAF - Missing master edition mint account
    #[error("Missing master edition mint account")]
    MissingMasterEditionMintAccount,
    /// 0xB0 - Missing master edition token account
    #[error("Missing master edition token account")]
    MissingMasterEditionTokenAccount,
    /// 0xB1 - Missing edition marker account
    #[error("Missing edition marker account")]
    MissingEditionMarkerAccount,
    /// 0xB2 - Cannot burn while persistent delegate is set
    #[error("Cannot burn while persistent delegate is set")]
    CannotBurnWithDelegate,
    /// 0xB3 - Missing edition account
    #[error("Missing edition account")]
    MissingEdition,
    /// 0xB4 - Invalid Associated Token Account Program
    #[error("Invalid Associated Token Account Program")]
    InvalidAssociatedTokenAccountProgram,
    /// 0xB5 - Invalid InstructionsSysvar
    #[error("Invalid InstructionsSysvar")]
    InvalidInstructionsSysvar,
    /// 0xB6 - Invalid or Unneeded parent accounts
    #[error("Invalid or Unneeded parent accounts")]
    InvalidParentAccounts,
    /// 0xB7 - Authority cannot apply all update args
    #[error("Authority cannot apply all update args")]
    InvalidUpdateArgs,
    /// 0xB8 - Token account does not have enough tokens
    #[error("Token account does not have enough tokens")]
    InsufficientTokenBalance,
    /// 0xB9 - Missing collection account
    #[error("Missing collection account")]
    MissingCollectionMint,
    /// 0xBA - Missing collection master edition account
    #[error("Missing collection master edition account")]
    MissingCollectionMasterEdition,
    /// 0xBB - Invalid token record account
    #[error("Invalid token record account")]
    InvalidTokenRecord,
    /// 0xBC - The close authority needs to be revoked by the Utility Delegate
    #[error("The close authority needs to be revoked by the Utility Delegate")]
    InvalidCloseAuthority,
    /// 0xBD - Invalid or removed instruction
    #[error("Invalid or removed instruction")]
    InvalidInstruction,
    /// 0xBE - Missing delegate record
    #[error("Missing delegate record")]
    MissingDelegateRecord,
    /// 0xBF -
    #[error("")]
    InvalidFeeAccount,
    /// 0xC0 -
    #[error("")]
    InvalidMetadataFlags,
}

impl solana_program::program_error::PrintProgramError for MplTokenMetadataError {
    fn print<E>(&self) {
        solana_program::msg!(&self.to_string());
    }
}