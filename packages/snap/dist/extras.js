import { snapshotProto } from "./index.js";
const _path = (a, b) => {
    for (const c of b) {
        a = a?.[c];
    }
    ;
    return a;
};
export const _DataView = _path(globalThis, ["DataView"]);
export const _DataView_prototype = _DataView === undefined ? undefined : snapshotProto(_DataView.prototype);
export const _ArrayBuffer = _path(globalThis, ["ArrayBuffer"]);
export const _Uint8Array = _path(globalThis, ["Uint8Array"]);
export const _Uint8Array_prototype = _Uint8Array === undefined ? undefined : snapshotProto(_Uint8Array.prototype);
export const _WeakMap = _path(globalThis, ["WeakMap"]);
export const _WeakMap_prototype = _WeakMap === undefined ? undefined : snapshotProto(_WeakMap.prototype);
export const _String = _path(globalThis, ["String"]);
export const _String_prototype = _String === undefined ? undefined : snapshotProto(_String.prototype);
export const _Array = _path(globalThis, ["Array"]);
export const _Array_prototype = _Array === undefined ? undefined : snapshotProto(_Array.prototype);
export const _Function = _path(globalThis, ["Function"]);
export const _Function_prototype = _Function === undefined ? undefined : snapshotProto(_Function.prototype);
