export declare let _Proxy: ProxyConstructor;
export declare let _Reflect: typeof Reflect;
export declare let hookProxies: WeakMap<any, any>;
export declare function hook<T extends {
    [a in K]: object;
}, K extends keyof T>(a: T, b: K, c: (Reflect: typeof _Reflect) => ProxyHandler<T[K]>): void;
export declare function hookProp<T extends {
    [a in K]: any;
}, K extends keyof T>(a: T, b: K, c: (d: TypedPropertyDescriptor<T[K]> | undefined) => TypedPropertyDescriptor<T[K]>): void;
export declare let events: WeakMap<Event, Event>;
export declare function hookEvent<T extends EventTarget>(ev: T, event_proxy: (Reflect: typeof _Reflect, name: string) => ProxyHandler<Event>): void;
