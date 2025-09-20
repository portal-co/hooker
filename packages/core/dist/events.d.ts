import { _Reflect, HookOpts } from "./index.js";
export declare let events: WeakMap<Event, Event>;
export declare function hookEvent<T extends EventTarget>(ev: T, event_proxy: (Reflect: typeof _Reflect, name: string) => ProxyHandler<Event>, opts?: HookOpts): void;
