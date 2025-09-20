
import { snapshotProto, quickProto } from "./index.ts";
const _path = (a: any, b: (string | symbol)[]) => {
  for(const c of b) {
    a = a?.[c];
  };
  return a;  
}
export const _DataView: typeof DataView = _path(globalThis,["DataView"]);
export const _DataView_prototype = _DataView === undefined ? undefined : snapshotProto(_DataView.prototype);
export const _DataView_quick_prototype = _DataView === undefined ? undefined : quickProto(_DataView.prototype);
export const _ArrayBuffer: typeof ArrayBuffer = _path(globalThis,["ArrayBuffer"]);
export const _Uint8Array: typeof Uint8Array = _path(globalThis,["Uint8Array"]);
export const _Uint8Array_prototype = _Uint8Array === undefined ? undefined : snapshotProto(_Uint8Array.prototype);
export const _Uint8Array_quick_prototype = _Uint8Array === undefined ? undefined : quickProto(_Uint8Array.prototype);
export const _Uint16Array: typeof Uint16Array = _path(globalThis,["Uint16Array"]);
export const _Uint16Array_prototype = _Uint16Array === undefined ? undefined : snapshotProto(_Uint16Array.prototype);
export const _Uint16Array_quick_prototype = _Uint16Array === undefined ? undefined : quickProto(_Uint16Array.prototype);
export const _Uint32Array: typeof Uint32Array = _path(globalThis,["Uint32Array"]);
export const _Uint32Array_prototype = _Uint32Array === undefined ? undefined : snapshotProto(_Uint32Array.prototype);
export const _Uint32Array_quick_prototype = _Uint32Array === undefined ? undefined : quickProto(_Uint32Array.prototype);
export const _Int8Array: typeof Int8Array = _path(globalThis,["Int8Array"]);
export const _Int8Array_prototype = _Int8Array === undefined ? undefined : snapshotProto(_Int8Array.prototype);
export const _Int8Array_quick_prototype = _Int8Array === undefined ? undefined : quickProto(_Int8Array.prototype);
export const _Int16Array: typeof Int16Array = _path(globalThis,["Int16Array"]);
export const _Int16Array_prototype = _Int16Array === undefined ? undefined : snapshotProto(_Int16Array.prototype);
export const _Int16Array_quick_prototype = _Int16Array === undefined ? undefined : quickProto(_Int16Array.prototype);
export const _Int32Array: typeof Int32Array = _path(globalThis,["Int32Array"]);
export const _Int32Array_prototype = _Int32Array === undefined ? undefined : snapshotProto(_Int32Array.prototype);
export const _Int32Array_quick_prototype = _Int32Array === undefined ? undefined : quickProto(_Int32Array.prototype);
export const _Float32Array: typeof Float32Array = _path(globalThis,["Float32Array"]);
export const _Float32Array_prototype = _Float32Array === undefined ? undefined : snapshotProto(_Float32Array.prototype);
export const _Float32Array_quick_prototype = _Float32Array === undefined ? undefined : quickProto(_Float32Array.prototype);
export const _Float64Array: typeof Float64Array = _path(globalThis,["Float64Array"]);
export const _Float64Array_prototype = _Float64Array === undefined ? undefined : snapshotProto(_Float64Array.prototype);
export const _Float64Array_quick_prototype = _Float64Array === undefined ? undefined : quickProto(_Float64Array.prototype);
export const _WeakMap: typeof WeakMap = _path(globalThis,["WeakMap"]);
export const _WeakMap_prototype = _WeakMap === undefined ? undefined : snapshotProto(_WeakMap.prototype);
export const _WeakMap_quick_prototype = _WeakMap === undefined ? undefined : quickProto(_WeakMap.prototype);
export const _String: typeof String = _path(globalThis,["String"]);
export const _String_prototype = _String === undefined ? undefined : snapshotProto(_String.prototype);
export const _String_quick_prototype = _String === undefined ? undefined : quickProto(_String.prototype);
export const _Array: typeof Array = _path(globalThis,["Array"]);
export const _Array_prototype = _Array === undefined ? undefined : snapshotProto(_Array.prototype);
export const _Array_quick_prototype = _Array === undefined ? undefined : quickProto(_Array.prototype);
export const _Function: typeof Function = _path(globalThis,["Function"]);
export const _Function_prototype = _Function === undefined ? undefined : snapshotProto(_Function.prototype);
export const _Function_quick_prototype = _Function === undefined ? undefined : quickProto(_Function.prototype);
