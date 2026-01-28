"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.snapshots = void 0;
exports.generateExtras = generateExtras;
exports.snapshots = [
    { name: "DataView", proto: true },
    { name: "ArrayBuffer", proto: true },
    { name: "Uint8Array", proto: true },
    { name: "Uint16Array", proto: true },
    { name: "Uint32Array", proto: true },
    { name: "Int8Array", proto: true },
    { name: "Int16Array", proto: true },
    { name: "Int32Array", proto: true },
    { name: "Float32Array", proto: true },
    { name: "Float64Array", proto: true },
    { name: "WeakMap", proto: true },
    { name: "String", proto: true, props: true },
    { name: "Array", proto: true },
    { name: "Function", proto: true },
    { name: "Math", proto: false, props: true },
];
/**
 * Generate the content for `packages/snap/extras.ts` from a snapshot list.
 * This returns a TypeScript source string that downstream packages can write
 * out. The function is intentionally lightweight so callers can post-process
 * or change paths as needed.
 */
function generateExtras(snapshots, { rootPath = "./index.ts" } = {}) {
    const header = `import { snapshotProto, quickProto, _path, binder } from ${JSON.stringify(rootPath)};\n\n`;
    const body = snapshots
        .map((a) => {
        const n = a.name.replaceAll(".", "_");
        return `export const _${n}: typeof ${a.name} = _path(globalThis,${JSON.stringify(a.name.split("."))});${a.proto
            ? `\nexport const _${n}_prototype = _${n} === undefined ? undefined : /*#__PURE__*/ snapshotProto(_${n}.prototype);\nexport const _${n}_quick_prototype = _${n} === undefined ? undefined :/*#__PURE__*/  quickProto(_${n}.prototype);`
            : ""}${a.props ?? false
            ? `\nexport const _${n}_props = _${n} === undefined ? undefined : {...binder(_${n})}`
            : ""}`;
    })
        .join("\n");
    return (header + body).replaceAll("\n\n", "\n");
}
