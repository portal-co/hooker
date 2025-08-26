
import { snapshotProto } from "./index.ts";
export const _DataView = globalThis?.DataView;
export const _DataView_prototype = _DataView === undefined ? undefined : snapshotProto(_DataView.prototype);
export const _ArrayBuffer = globalThis?.ArrayBuffer;
export const _Uint8Array = globalThis?.Uint8Array;
export const _Uint8Array_prototype = _Uint8Array === undefined ? undefined : snapshotProto(_Uint8Array.prototype);
export const _WeakMap = globalThis?.WeakMap;
export const _WeakMap_prototype = _WeakMap === undefined ? undefined : snapshotProto(_WeakMap.prototype);
