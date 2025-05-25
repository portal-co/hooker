let _Proxy = Proxy;
let _Reflect = Reflect;

export function hook<T extends { [a in K]: object }, K extends keyof T>(a: T, b: K, c: (Reflect: typeof _Reflect) => ProxyHandler<T[K]>) {
    a[b] = new _Proxy(a[b], c(_Reflect));
}
export let events: WeakMap<Event, Event> = new WeakMap();
export function hookEvent<T extends EventTarget>(ev: T, event_proxy: (Reflect: typeof _Reflect, name: string) => ProxyHandler<Event>) {
    let m: WeakMap<any, any> = new WeakMap();
    hook(ev, "addEventListener", Reflect => ({
        apply(target, thisArg, argArray) {
            let handler = argArray[1];
            let name;
            let h2 = $ => {
                let e = new Proxy($, event_proxy(Reflect, name));
                events.set(e, $);
                handler(e);
            };
            m.set(handler, h2);
            return Reflect.apply(target, thisArg, [name = argArray[0], h2]);
        },
    }));
    hook(ev, "removeEventListener", Reflect => ({
        apply(target, thisArg, argArray) {
            let handler = argArray[1];
            let h2 = m.get(handler);
            m.delete(handler);
            return Reflect.apply(target, thisArg, [argArray[0], h2]);
        },
    }));
    if (ev instanceof EventSource) {
        hook(ev, "dispatchEvent", Reflect => ({
            apply(target, thisArg, argArray) {
                var ev = argArray[0];
                if (events.has(ev)) {
                    ev = events.get(ev)!;
                }
                return Reflect.apply(target, thisArg, [ev])
            },
        }));
    }
}