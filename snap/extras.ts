
import { snapshotProto } from "./index.ts";
const _path = (a: any, b: (string | symbol)[]) => {
  for(const c of b) {
    if(!(c in a))return undefined;
    a = a[c];
  };
  return a;  
}
export const _DataView: typeof DataView = _path(globalThis,["DataView"]);
export const _DataView_prototype = _DataView === undefined ? undefined : snapshotProto(_DataView.prototype);
export const _ArrayBuffer: typeof ArrayBuffer = _path(globalThis,["ArrayBuffer"]);
export const _Uint8Array: typeof Uint8Array = _path(globalThis,["Uint8Array"]);
export const _Uint8Array_prototype = _Uint8Array === undefined ? undefined : snapshotProto(_Uint8Array.prototype);
export const _WeakMap: typeof WeakMap = _path(globalThis,["WeakMap"]);
export const _WeakMap_prototype = _WeakMap === undefined ? undefined : snapshotProto(_WeakMap.prototype);
export const _String: typeof String = _path(globalThis,["String"]);
export const _String_prototype = _String === undefined ? undefined : snapshotProto(_String.prototype);
export const _Array: typeof Array = _path(globalThis,["Array"]);
export const _Array_prototype = _Array === undefined ? undefined : snapshotProto(_Array.prototype);
export const _Function: typeof Function = _path(globalThis,["Function"]);
export const _Function_prototype = _Function === undefined ? undefined : snapshotProto(_Function.prototype);
