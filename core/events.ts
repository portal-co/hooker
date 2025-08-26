import { _Proxy, _Reflect, _WeakMap_prototype, _WeakMap, hook } from "./index.ts";

export let events: WeakMap<Event, Event> = new _WeakMap();
export function hookEvent<T extends EventTarget>(ev: T, event_proxy: (Reflect: typeof _Reflect, name: string) => ProxyHandler<Event>) {
    let m: WeakMap<any, any> = new _WeakMap();
    hook(ev, "addEventListener", Reflect => ({
        apply(target, thisArg, argArray) {
            let handler = argArray[1];
            let name;
            let h2 = $ => {
                let e = new _Proxy($, event_proxy(Reflect, name));
                _WeakMap_prototype.set(events, e, $);
                handler(e);
            };
            _WeakMap_prototype.set(m, handler, h2);
            return Reflect.apply(target, thisArg, [name = argArray[0], h2]);
        },
    }));
    hook(ev, "removeEventListener", Reflect => ({
        apply(target, thisArg, argArray) {
            let handler = argArray[1];
            let h2 = _WeakMap_prototype.get(m, handler);
            _WeakMap_prototype.delete(m, handler);
            return Reflect.apply(target, thisArg, [argArray[0], h2]);
        },
    }));
    if (ev instanceof EventSource) {
        hook(ev, "dispatchEvent", Reflect => ({
            apply(target, thisArg, argArray) {
                var ev = argArray[0];
                if (_WeakMap_prototype.has(events, ev)) {
                    ev = _WeakMap_prototype.get(events, ev)!;
                }
                return Reflect.apply(target, thisArg, [ev])
            },
        }));
    }
}