"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._path = exports._Reflect = exports._Proxy = void 0;
exports.snapshot = snapshot;
exports.snapshotProto = snapshotProto;
exports.quickProto = quickProto;
exports.binder = binder;
/*#__NO_SIDE_EFFECTS__*/
function snapshot(fn) {
    return fn.call.bind(fn);
}
/*#__NO_SIDE_EFFECTS__*/
function snapshotProto(val, { speedy = false, getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor, } = {}) {
    let wipProtoSnapshot = {};
    for (let key in val) {
        let wrapped;
        if ((wrapped = val[key]) instanceof Function) {
            let value = snapshot(wrapped);
            if (speedy)
                value = ((old) => (a, ...args) => val[key] === wrapped ? a[key](...args) : old(a, ...args))(value);
            wipProtoSnapshot[key] = value;
        }
        const desc = getOwnPropertyDescriptor(val, key);
        if (desc === undefined)
            continue;
        wipProtoSnapshot[key] = {
            get: snapshot(desc.get),
            set: snapshot(desc.set),
        };
    }
    return wipProtoSnapshot;
}
/*#__NO_SIDE_EFFECTS__*/
function quickProto(a) {
    if (!exports._Proxy)
        return undefined;
    return {
        ...new exports._Proxy(a, {
            get(target, p, receiver) {
                if (typeof target[p] === "function")
                    return (a, ...args) => a[p](...args);
                return {
                    get: (a) => a[p],
                    set: (a, v) => {
                        a[p] = v;
                    },
                };
            },
        }),
    };
}
/*#__NO_SIDE_EFFECTS__*/
function binder(a) {
    return exports._Proxy ? new exports._Proxy(a, {
        get(target, p, receiver) {
            const v = target[p];
            if (typeof v === "function") {
                return v.bind(target);
            }
            return v;
        }
    }) : a;
}
exports._Proxy = globalThis?.Proxy;
exports._Reflect = "Reflect" in globalThis ? { ...binder(Reflect) } : undefined;
const _path = (a, b) => {
    for (const c of b) {
        a = a?.[c];
    }
    ;
    return a;
};
exports._path = _path;
__exportStar(require("./extras.cjs"), exports);
