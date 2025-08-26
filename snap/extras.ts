
import { snapshotProto } from "./index.ts";
export const _DataView = DataView;
export const _DataView_prototype = snapshotProto(_DataView.prototype) 

export const _ArrayBuffer = ArrayBuffer;

export const _Uint8Array = Uint8Array;
export const _Uint8Array_prototype = snapshotProto(_Uint8Array.prototype) 

export const _WeakMap = WeakMap;
export const _WeakMap_prototype = snapshotProto(_WeakMap.prototype) 
