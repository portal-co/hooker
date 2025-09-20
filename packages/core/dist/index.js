import { _WeakMap_prototype, _WeakMap, _Proxy, _Reflect, } from "@portal-solutions/hooker-snap";
export const hookProxies = _WeakMap
    ? new _WeakMap()
    : undefined;
const _hookProxies = hookProxies;
const { isFrozen: _isFrozen } = Object;
export function hook(object, key, hook, { isProperty = false, Proxy = _Proxy, Reflect = _Reflect, hookProxies = _hookProxies, attempt = false, isFrozen = _isFrozen, } = {}) {
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
                    _WeakMap_prototype.set(hookProxies, proxy, value);
                    return proxy;
                },
                set(value) {
                    while (_WeakMap_prototype.has(hookProxies, value)) {
                        value = _WeakMap_prototype.get(hookProxies, value);
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
export function hookProp(object, key, hook, { Reflect = _Reflect, attempt = false, isFrozen = _isFrozen, } = {}) {
    if (attempt && isFrozen(object))
        return;
    const descriptor = Reflect.getOwnPropertyDescriptor(object, key);
    // if (d !== undefined) {
    Reflect.defineProperty(object, key, hook(descriptor));
    // }
}
export * from "./events.js";
export * from "@portal-solutions/hooker-snap";
