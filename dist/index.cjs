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
exports.hookProxies = void 0;
exports.hook = hook;
exports.hookProp = hookProp;
const hooker_snap_1 = require("@portal-solutions/hooker-snap");
exports.hookProxies = hooker_snap_1._WeakMap
    ? new hooker_snap_1._WeakMap()
    : undefined;
const _hookProxies = exports.hookProxies;
const { isFrozen: _isFrozen } = Object;
function hook(object, key, hook, { isProperty = false, Proxy = hooker_snap_1._Proxy, Reflect = hooker_snap_1._Reflect, hookProxies = _hookProxies, attempt = false, isFrozen = _isFrozen, } = {}) {
    // a[b] = new _Proxy(a[b], c(_Reflect));
    if (attempt && isFrozen(object))
        return;
    if (isProperty) {
        hookProp(object, key, (descriptor) => ((descriptor ??= { value: undefined }),
            {
                configurable: descriptor?.configurable ?? true,
                enumerable: descriptor?.enumerable ?? true,
                writable: descriptor?.writable ?? true,
                get() {
                    var proxy, value;
                    if (descriptor?.get) {
                        proxy = new Proxy((value = descriptor.get()), hook(Reflect));
                    }
                    else {
                        proxy = new Proxy((value = descriptor.value), hook(Reflect));
                    }
                    hooker_snap_1._WeakMap_prototype.set(hookProxies, proxy, value);
                    return proxy;
                },
                set(value) {
                    while (hooker_snap_1._WeakMap_prototype.has(hookProxies, value)) {
                        value = hooker_snap_1._WeakMap_prototype.get(hookProxies, value);
                    }
                    if (descriptor?.set) {
                        descriptor.set(value);
                    }
                    else {
                        descriptor.value = value;
                    }
                },
            }), { Reflect, attempt, isFrozen });
    }
    else {
        object[key] = new Proxy(object[key], hook(Reflect));
    }
}
function hookProp(object, key, hook, { Reflect = hooker_snap_1._Reflect, attempt = false, isFrozen = _isFrozen, } = {}) {
    if (attempt && isFrozen(object))
        return;
    const descriptor = Reflect.getOwnPropertyDescriptor(object, key);
    // if (d !== undefined) {
    Reflect.defineProperty(object, key, hook(descriptor));
    // }
}
__exportStar(require("./events.cjs"), exports);
__exportStar(require("@portal-solutions/hooker-snap"), exports);
