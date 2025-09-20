import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { writeFileSync } from "node:fs";

import { snapshots } from "./data/dist/index.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

writeFileSync(
  `${__dirname}/snap/extras.ts`,
  `
import { snapshotProto } from "./index.ts";
${snapshots
  .map(
    (a) => `
export const _${a.name} = globalThis?.${a.name};${
      a.proto
        ? `
export const _${a.name}_prototype = _${a.name} === undefined ? undefined : snapshotProto(_${a.name}.prototype);`
        : ""
    }`
  )
  .join("\n")}
`.replaceAll("\n\n", "\n")
);
console.log("done updating code from data");
