declare let _Reflect: typeof Reflect;
export declare function hook<T extends {
    [a in K]: object;
}, K extends keyof T>(a: T, b: K, c: (Reflect: typeof _Reflect) => ProxyHandler<T[K]>): void;
export declare let events: WeakMap<Event, Event>;
export declare function hookEvent<T extends EventTarget>(ev: T, event_proxy: (Reflect: typeof _Reflect, name: string) => ProxyHandler<Event>): void;
export {};
