import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { writeFileSync } from "node:fs";

// Import from the built data package. When running via Node's
// `--experimental-strip-types`, this file can be executed directly as TypeScript.
import { snapshots, generateExtras } from "./packages/data/dist/index.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

writeFileSync(
  `${__dirname}/packages/snap/extras.ts`,
  generateExtras(snapshots)
);

console.log("done updating code from data");
