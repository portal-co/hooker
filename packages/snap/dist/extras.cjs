"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._Function_quick_prototype = exports._Function_prototype = exports._Function = exports._Array_quick_prototype = exports._Array_prototype = exports._Array = exports._String_quick_prototype = exports._String_prototype = exports._String = exports._WeakMap_quick_prototype = exports._WeakMap_prototype = exports._WeakMap = exports._Uint8Array_quick_prototype = exports._Uint8Array_prototype = exports._Uint8Array = exports._ArrayBuffer = exports._DataView_quick_prototype = exports._DataView_prototype = exports._DataView = void 0;
const index_ts_1 = require("./index.cjs");
const _path = (a, b) => {
    for (const c of b) {
        a = a?.[c];
    }
    ;
    return a;
};
exports._DataView = _path(globalThis, ["DataView"]);
exports._DataView_prototype = exports._DataView === undefined ? undefined : (0, index_ts_1.snapshotProto)(exports._DataView.prototype);
exports._DataView_quick_prototype = exports._DataView === undefined ? undefined : (0, index_ts_1.quickProto)(exports._DataView.prototype);
exports._ArrayBuffer = _path(globalThis, ["ArrayBuffer"]);
exports._Uint8Array = _path(globalThis, ["Uint8Array"]);
exports._Uint8Array_prototype = exports._Uint8Array === undefined ? undefined : (0, index_ts_1.snapshotProto)(exports._Uint8Array.prototype);
exports._Uint8Array_quick_prototype = exports._Uint8Array === undefined ? undefined : (0, index_ts_1.quickProto)(exports._Uint8Array.prototype);
exports._WeakMap = _path(globalThis, ["WeakMap"]);
exports._WeakMap_prototype = exports._WeakMap === undefined ? undefined : (0, index_ts_1.snapshotProto)(exports._WeakMap.prototype);
exports._WeakMap_quick_prototype = exports._WeakMap === undefined ? undefined : (0, index_ts_1.quickProto)(exports._WeakMap.prototype);
exports._String = _path(globalThis, ["String"]);
exports._String_prototype = exports._String === undefined ? undefined : (0, index_ts_1.snapshotProto)(exports._String.prototype);
exports._String_quick_prototype = exports._String === undefined ? undefined : (0, index_ts_1.quickProto)(exports._String.prototype);
exports._Array = _path(globalThis, ["Array"]);
exports._Array_prototype = exports._Array === undefined ? undefined : (0, index_ts_1.snapshotProto)(exports._Array.prototype);
exports._Array_quick_prototype = exports._Array === undefined ? undefined : (0, index_ts_1.quickProto)(exports._Array.prototype);
exports._Function = _path(globalThis, ["Function"]);
exports._Function_prototype = exports._Function === undefined ? undefined : (0, index_ts_1.snapshotProto)(exports._Function.prototype);
exports._Function_quick_prototype = exports._Function === undefined ? undefined : (0, index_ts_1.quickProto)(exports._Function.prototype);
