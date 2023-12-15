const path = require("path");
const { generateIdl } = require("@metaplex-foundation/shank-js");

const idlDir = path.join(__dirname, "..", "idls");
const binaryInstallDir = path.join(__dirname, "..", ".crates");
const programDir = path.join(__dirname, "..", "programs");

generateIdl({
  generator: "shank",
  programName: "token_metadata",
  programId: "meta3c863KN6CX6HXzfmDHbURDkfJ5HMCwUT5SEqu5C",
  idlDir,
  binaryInstallDir,
  programDir: path.join(programDir, "token-metadata", "program"),
});
