
import { snapProto } from "./index.ts";

export const _DataView = DataView;
export const _DataView_prototype = snapProto(_DataView.prototype) 


export const _ArrayBuffer = ArrayBuffer;



export const _Uint8Array = Uint8Array;
export const _Uint8Array_prototype = snapProto(_Uint8Array.prototype) 

