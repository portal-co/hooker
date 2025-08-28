import { _WeakMap_prototype } from './extras.ts';

export const _Proxy = Proxy;
export const _Reflect: typeof Reflect = { ...Reflect };
export const hookProxies: WeakMap<any, any> = new WeakMap();
export function snapshot<T, U, V>(fn: (this: T, ...U) => V): (self: T, ...U) => V {
    return fn.call.bind(fn);
}
export type SnapshotInput<T, U, V> = (this: T, ...U) => V;
export type ProtoSnapshot<T> = { [Prop in keyof T]: T[Prop] extends SnapshotInput<infer T2, infer U, infer V> ? (self: T2, ...U) => V : never };
export function snapshotProto<T extends object>(val: T): ProtoSnapshot<T> {
    let a = {};
    for (let k of Object.keys(val)) {
        let wrapped;
        if ((wrapped = val[k]) instanceof Function) a[k] = snapshot(wrapped);
    }
    return a as ProtoSnapshot<T>;
}
export type HookOpts = { isProperty?: boolean, Proxy?: typeof _Proxy };
export function hook<T extends { [a in K]: object }, K extends keyof T>(a: T, b: K, c: (Reflect: typeof _Reflect) => ProxyHandler<T[K]>, { isProperty = false, Proxy = _Proxy }: HookOpts = {}) {
    // a[b] = new _Proxy(a[b], c(_Reflect));
    if (isProperty) {
        hookProp(a, b, d => ((d ??= { value: undefined }), {
            configurable: d?.configurable ?? true,
            enumerable: d?.enumerable ?? true,
            writable: d?.writable ?? true,
            get() {
                var p: T[K], v: T[K];
                if (d?.get) {
                    p = new (Proxy)(v = d!.get!(), c(_Reflect));
                } else {
                    p = new (Proxy)(v = d!.value!, c(_Reflect));
                }
                _WeakMap_prototype.set(hookProxies, p, v);
                return p;
            },
            set(value) {
                while (_WeakMap_prototype.has(hookProxies, value)) {
                    value = _WeakMap_prototype.get(hookProxies, value)!;
                }
                if (d?.set) {
                    d!.set!(value)
                } else {
                    d.value = value;
                }
            }
        }));
    } else {
        a[b] = new (Proxy)(a[b], c(_Reflect));
    }
}
export function hookProp<T extends { [a in K]: any }, K extends keyof T>(a: T, b: K, c: (d: TypedPropertyDescriptor<T[K]> | undefined) => TypedPropertyDescriptor<T[K]>) {
    let d = _Reflect.getOwnPropertyDescriptor(a, b);
    // if (d !== undefined) {
    _Reflect.defineProperty(a, b, c(d));
    // }
}
export * from './events.ts'
export * from './extras.ts'