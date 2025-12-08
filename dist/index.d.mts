import { _Proxy, _Reflect } from "@portal-solutions/hooker-snap";
export declare const hookProxies: WeakMap<any, any>;
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
export declare function hook<T extends {
    [a in K]: object;
}, K extends keyof T>(object: T, key: K, hook: (Reflect: typeof _Reflect) => ProxyHandler<T[K]>, { isProperty, Proxy, Reflect, hookProxies, attempt, isFrozen, }?: HookOpts): void;
export declare function hookProp<T extends {
    [a in K]: any;
}, K extends keyof T>(object: T, key: K, hook: (descriptor: TypedPropertyDescriptor<T[K]> | undefined) => TypedPropertyDescriptor<T[K]>, { Reflect, attempt, isFrozen, }?: HookPropOpts): void;
export * from "./events.mjs";
export * from "@portal-solutions/hooker-snap";
