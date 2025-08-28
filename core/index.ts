import { _WeakMap_prototype, _WeakMap, snapshot, snapshotProto } from '@portal-solutions/hooker-snap';

export const hookProxies: WeakMap<any, any> = _WeakMap ? new _WeakMap() : undefined;
const _hookProxies = hookProxies;
export const _Proxy: typeof Proxy = globalThis?.Proxy;
export const _Reflect: typeof Reflect = 'Reflect' in globalThis ? { ...Reflect } : undefined as any;
export type HookPropOpts = {Reflect?: typeof _Reflect, attempt?: boolean };
export type HookOpts = { isProperty?: boolean, Proxy?: typeof _Proxy,  hookProxies?: typeof hookProxies } & HookPropOpts;
const { isFrozen } = Object;
export function hook<T extends { [a in K]: object }, K extends keyof T>(object: T, key: K, hook: (Reflect: typeof _Reflect) => ProxyHandler<T[K]>, { isProperty = false, Proxy = _Proxy, Reflect = _Reflect, hookProxies = _hookProxies, attempt = false }: HookOpts = {}) {
    // a[b] = new _Proxy(a[b], c(_Reflect));
    if (attempt && isFrozen(object)) return;
    if (isProperty) {
        hookProp(object, key, descriptor => ((descriptor ??= { value: undefined }), {
            configurable: descriptor?.configurable ?? true,
            enumerable: descriptor?.enumerable ?? true,
            writable: descriptor?.writable ?? true,
            get() {
                var proxy: T[K], value: T[K];
                if (descriptor?.get) {
                    proxy = new (Proxy)(value = descriptor!.get!(), hook(Reflect));
                } else {
                    proxy = new (Proxy)(value = descriptor!.value!, hook(Reflect));
                }
                _WeakMap_prototype.set(hookProxies, proxy, value);
                return proxy;
            },
            set(value) {
                while (_WeakMap_prototype.has(hookProxies, value)) {
                    value = _WeakMap_prototype.get(hookProxies, value)!;
                }
                if (descriptor?.set) {
                    descriptor!.set!(value)
                } else {
                    descriptor.value = value;
                }
            }
        }), { Reflect, attempt });
    } else {
        object[key] = new (Proxy)(object[key], hook(Reflect));
    }
}
export function hookProp<T extends { [a in K]: any }, K extends keyof T>(object: T, key: K, hook: (descriptor: TypedPropertyDescriptor<T[K]> | undefined) => TypedPropertyDescriptor<T[K]>, { Reflect = _Reflect, attempt = false }: HookPropOpts = {}) {
    if (attempt && isFrozen(object)) return;
    const descriptor = Reflect.getOwnPropertyDescriptor(object, key);
    // if (d !== undefined) {
    Reflect.defineProperty(object, key, hook(descriptor));
    // }
}
export * from './events.ts'
export * from '@portal-solutions/hooker-snap'