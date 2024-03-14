const path = require("path");
const { generateIdl } = require("@metaplex-foundation/shank-js");

const idlDir = path.join(__dirname, "..", "idls");
const binaryInstallDir = path.join(__dirname, "..", ".crates");
const programDir = path.join(__dirname, "..", "programs");

generateIdl({
  generator: "shank",
  programName: "token_metadata",
  programId: "MetaXKaVt8cn9dGYns81au23cqBYUH4DU4WpC8tAbhQ",
  idlDir,
  binaryInstallDir,
  programDir: path.join(programDir, "token-metadata", "program"),
});
