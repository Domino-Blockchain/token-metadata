import {
  Transaction,
  PublicKey,
  Connection,
  Keypair,
  sendAndConfirmTransaction,
} from "@solana/web3.js";
import { createCreateMetadataAccountV3Instruction } from "@metaplex-foundation/mpl-token-metadata";
import { Buffer } from "buffer";
import { createMint } from "@solana/spl-token";

const connection = new Connection("http://127.0.0.1:8899", "confirmed");

// 4EmLFkzs6evHdvMC8EuNLfbZgr1zww6VVjkVRL4nqUZ6
const mintOwner = Keypair.fromSecretKey(
  new Uint8Array([
    138, 172, 12, 86, 153, 77, 250, 17, 242, 15, 52, 152, 66, 200, 139, 199, 14,
    53, 196, 146, 149, 203, 54, 203, 22, 170, 4, 198, 234, 224, 228, 168, 48,
    25, 188, 212, 156, 89, 87, 122, 22, 95, 119, 79, 66, 245, 22, 200, 210, 28,
    78, 245, 31, 41, 155, 135, 148, 179, 197, 111, 3, 227, 243, 1,
  ])
);

const metaplexTokenMetadataProgram = new PublicKey(
  "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
);

const createMetadataAccount = async (
  metadataPDA: PublicKey,
  mint: PublicKey,
  payer: PublicKey
) => {
  const transaction = new Transaction().add(
    createCreateMetadataAccountV3Instruction(
      {
        metadata: metadataPDA,
        mint: mint,
        mintAuthority: payer,
        payer: payer,
        updateAuthority: payer,
      },
      {
        createMetadataAccountArgsV3: {
          data: {
            name: `Custom Mint Token Name #${mint.toBase58().slice(0, 4)}`,
            symbol: mint.toBase58().slice(0, 4),
            uri: "",
            sellerFeeBasisPoints: 0,
            creators: [
              {
                address: payer,
                verified: true,
                share: 100,
              },
            ],
            collection: null,
            uses: null,
          },
          isMutable: true,
          collectionDetails: null,
        },
      },
      metaplexTokenMetadataProgram
    )
  );
  return transaction;
};

const getMetadataPDA = (mint: PublicKey): PublicKey => {
  return PublicKey.findProgramAddressSync(
    [
      Buffer.from("metadata"),
      metaplexTokenMetadataProgram.toBuffer(),
      mint.toBuffer(),
    ],
    metaplexTokenMetadataProgram
  )[0];
};

const addMetadata = async (mintAddress: PublicKey, connection: Connection) => {
  const metadataAccount = getMetadataPDA(mintAddress);
  console.log("pda:", metadataAccount.toBase58());
  const transactionToSend = await createMetadataAccount(
    metadataAccount,
    mintAddress,
    mintOwner.publicKey
  );
  return await sendAndConfirmTransaction(connection, transactionToSend, [
    mintOwner,
  ]);
};

(async () => {
  const mintAddress = await createMint(
    connection,
    mintOwner,
    mintOwner.publicKey,
    mintOwner.publicKey,
    2
  );
  console.log("mint address: ", mintAddress.toBase58());
  // Create another account preferably derived from the mint address of your SPL token using PDAs
  // Finally, save your custom metadata in the second account and use it in any way you need.
  // To create metadata account on any SPL token you can create using (JS version)
  const transactionSignature = await addMetadata(mintAddress, connection);
  console.log("metadata transaction signature: ", transactionSignature);
})();
