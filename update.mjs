import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { writeFileSync } from "node:fs";

import { snapshots } from "./packages/data/dist/index.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

writeFileSync(
  `${__dirname}/packages/snap/extras.ts`,
  `
import { snapshotProto, quickProto } from "./index.ts";
const _path = (a: any, b: (string | symbol)[]) => {
  for(const c of b) {
    a = a?.[c];
  };
  return a;  
}
${snapshots
  .map((a) => {
    const n = a.name.replaceAll(".", "_");
    return `
export const _${n}: typeof ${a.name} = _path(globalThis,${JSON.stringify(
      a.name.split(".")
    )});${
      a.proto
        ? `
export const _${n}_prototype = _${n} === undefined ? undefined : /*#__PURE__*/ snapshotProto(_${n}.prototype);
export const _${n}_quick_prototype = _${n} === undefined ? undefined :/*#__PURE__*/  quickProto(_${n}.prototype);`
        : ""
    }
    ${
      a.props ?? false
        ? `
export const _${n}_props = _${n} === undefined ? undefined : {..._${n}}`
        : ""
    }`;
  })
  .join("\n")}
`.replaceAll("\n\n", "\n")
);
console.log("done updating code from data");
