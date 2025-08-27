export let events: WeakMap<Event, Event>;
export function hookEvent<T extends EventTarget>(ev: T, event_proxy: (Reflect: typeof _Reflect, name: string) => ProxyHandler<Event>, opts?: HookOpts): void;
export const hookProxies: WeakMap<any, any>;
export const _Proxy: typeof Proxy;
export const _Reflect: typeof Reflect;
export type HookOpts = {
    isProperty?: boolean;
    Proxy?: typeof _Proxy;
    Reflect?: typeof _Reflect;
};
export function hook<T extends {
    [a in K]: object;
}, K extends keyof T>(a: T, b: K, c: (Reflect: typeof _Reflect) => ProxyHandler<T[K]>, { isProperty, Proxy, Reflect }?: HookOpts): void;
export function hookProp<T extends {
    [a in K]: any;
}, K extends keyof T>(a: T, b: K, c: (d: TypedPropertyDescriptor<T[K]> | undefined) => TypedPropertyDescriptor<T[K]>, { Reflect }?: {
    Reflect?: typeof _Reflect;
}): void;
export * from '@portal-solutions/hooker-snap';

//# sourceMappingURL=index.d.ts.map
