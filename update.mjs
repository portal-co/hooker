import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { writeFileSync } from "node:fs";

import { snapshots } from "./data/dist/index.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

writeFileSync(
  `${__dirname}/snap/extras.ts`,
  `
import { snapshotProto } from "./index.ts";
const _path = (a: any, b: (string | symbol)[]) => {
  for(const c of b) {
    a = a?.[c];
  };
  return a;  
}
${snapshots
  .map(
    (a) => `
export const _${a.name.replaceAll(".", "_")}: typeof ${
      a.name
    } = _path(globalThis,${JSON.stringify(a.name.split("."))});${
      a.proto
        ? `
export const _${a.name.replaceAll(".", "_")}_prototype = _${a.name.replaceAll(
            ".",
            "_"
          )} === undefined ? undefined : snapshotProto(_${a.name.replaceAll(
            ".",
            "_"
          )}.prototype);`
        : ""
    }`
  )
  .join("\n")}
`.replaceAll("\n\n", "\n")
);
console.log("done updating code from data");
