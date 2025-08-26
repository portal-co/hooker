import { _WeakMap_prototype, snapshot, snapshotProto } from '@portal-solutions/hooker-snap';





export const hookProxies: WeakMap<any, any> = new WeakMap();
export const _Proxy: typeof Proxy = globalThis?.Proxy;
export const _Reflect: typeof Reflect = 'Reflect' in globalThis ? { ...Reflect } : undefined as any;

export function hook<T extends { [a in K]: object }, K extends keyof T>(a: T, b: K, c: (Reflect: typeof _Reflect) => ProxyHandler<T[K]>, { isProperty = false, Proxy = _Proxy, Reflect = _Reflect }: { isProperty?: boolean, Proxy?: typeof _Proxy, Reflect?: typeof _Reflect } = {}) {
    // a[b] = new _Proxy(a[b], c(_Reflect));
    if (isProperty) {
        hookProp(a, b, d => ((d ??= { value: undefined }), {
            configurable: d?.configurable ?? true,
            enumerable: d?.enumerable ?? true,
            writable: d?.writable ?? true,
            get() {
                var p: T[K], v: T[K];
                if (d?.get) {
                    p = new (Proxy)(v = d!.get!(), c(Reflect));
                } else {
                    p = new (Proxy)(v = d!.value!, c(Reflect));
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
        }), { Reflect });
    } else {
        a[b] = new (Proxy)(a[b], c(Reflect));
    }
}
export function hookProp<T extends { [a in K]: any }, K extends keyof T>(a: T, b: K, c: (d: TypedPropertyDescriptor<T[K]> | undefined) => TypedPropertyDescriptor<T[K]>, { Reflect = _Reflect }: { Reflect?: typeof _Reflect } = {}) {
    let d = Reflect.getOwnPropertyDescriptor(a, b);
    // if (d !== undefined) {
    Reflect.defineProperty(a, b, c(d));
    // }
}
export * from './events.ts'
export * from '@portal-solutions/hooker-snap'