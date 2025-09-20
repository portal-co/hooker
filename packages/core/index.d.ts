export let events: WeakMap<Event, Event>;
export function hookEvent<T extends EventTarget>(ev: T, event_proxy: (Reflect: typeof _Reflect, name: string) => ProxyHandler<Event>, opts?: HookOpts): void;
export const hookProxies: WeakMap<any, any>;
export const _Proxy: typeof Proxy;
export const _Reflect: typeof Reflect;
declare const _isFrozen: (o: any) => boolean;
export type HookPropOpts = {
    Reflect?: typeof _Reflect;
    attempt?: boolean;
    isFrozen?: typeof _isFrozen;
};
export type HookOpts = {
    isProperty?: boolean;
    Proxy?: typeof _Proxy;
    hookProxies?: typeof hookProxies;
} & HookPropOpts;
export function hook<T extends {
    [a in K]: object;
}, K extends keyof T>(object: T, key: K, hook: (Reflect: typeof _Reflect) => ProxyHandler<T[K]>, { isProperty, Proxy, Reflect, hookProxies, attempt, isFrozen, }?: HookOpts): void;
export function hookProp<T extends {
    [a in K]: any;
}, K extends keyof T>(object: T, key: K, hook: (descriptor: TypedPropertyDescriptor<T[K]> | undefined) => TypedPropertyDescriptor<T[K]>, { Reflect, attempt, isFrozen, }?: HookPropOpts): void;
export * from "@portal-solutions/hooker-snap";

//# sourceMappingURL=index.d.ts.map
