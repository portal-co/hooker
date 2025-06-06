export let _Proxy = Proxy;
export let _Reflect = { ...Reflect };
export let hookProxies = new WeakMap();
export function hook(a, b, c) {
    // a[b] = new _Proxy(a[b], c(_Reflect));
    hookProp(a, b, d => ((d = d || { value: undefined }), {
        configurable: d?.configurable,
        enumerable: d?.enumerable,
        writable: d?.writable,
        get() {
            var p, v;
            if (d?.get) {
                p = new _Proxy(v = d.get(), c(_Reflect));
            }
            else {
                p = new _Proxy(v = d.value, c(_Reflect));
            }
            hookProxies.set(p, v);
            return p;
        },
        set(value) {
            while (hookProxies.has(value)) {
                value = hookProxies.get(value);
            }
            if (d?.set) {
                d.set(value);
            }
            else {
                d.value = value;
            }
        }
    }));
}
export function hookProp(a, b, c) {
    let d = _Reflect.getOwnPropertyDescriptor(a, b);
    // if (d !== undefined) {
    _Reflect.defineProperty(a, b, c(d));
    // }
}
export let events = new WeakMap();
export function hookEvent(ev, event_proxy) {
    let m = new WeakMap();
    hook(ev, "addEventListener", Reflect => ({
        apply(target, thisArg, argArray) {
            let handler = argArray[1];
            let name;
            let h2 = $ => {
                let e = new _Proxy($, event_proxy(Reflect, name));
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
                    ev = events.get(ev);
                }
                return Reflect.apply(target, thisArg, [ev]);
            },
        }));
    }
}
