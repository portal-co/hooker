export let _Proxy = Proxy;
export let _Reflect: typeof Reflect = { ...Reflect };
export let hookProxies: WeakMap<any, any> = new WeakMap();
export function snap<T, U, V>(fn: (this: T, ...U) => V): (self: T, ...U) => V {
    return fn.call.bind(fn);
}
export type ProtoSnap<T> = { [Prop in keyof T]: T[Prop] extends (this: infer T2, ...U) => infer V ? (self: T2, ...U) => V : never };
export function snapProto<T extends object>(val: T): ProtoSnap<T> {
    let a = {};
    for (let k of Object.keys(val)) {
        a[k] = snap(val[k])
    }
    return a as ProtoSnap<T>;
}

export function hook<T extends { [a in K]: object }, K extends keyof T>(a: T, b: K, c: (Reflect: typeof _Reflect) => ProxyHandler<T[K]>) {
    // a[b] = new _Proxy(a[b], c(_Reflect));
    hookProp(a, b, d => ((d = d || { value: undefined }), {
        configurable: d?.configurable ?? true,
        enumerable: d?.enumerable ?? true,
        writable: d?.writable ?? true,
        get() {
            var p: T[K], v: T[K];
            if (d?.get) {
                p = new _Proxy(v = d!.get!(), c(_Reflect));
            } else {
                p = new _Proxy(v = d!.value!, c(_Reflect));
            }
            hookProxies.set(p, v);
            return p;
        },
        set(value) {
            while (hookProxies.has(value)) {
                value = hookProxies.get(value)!;
            }
            if (d?.set) {
                d!.set!(value)
            } else {
                d.value = value;
            }
        }
    }));
}
export function hookProp<T extends { [a in K]: any }, K extends keyof T>(a: T, b: K, c: (d: TypedPropertyDescriptor<T[K]> | undefined) => TypedPropertyDescriptor<T[K]>) {
    let d = _Reflect.getOwnPropertyDescriptor(a, b);
    // if (d !== undefined) {
    _Reflect.defineProperty(a, b, c(d));
    // }
}
export let events: WeakMap<Event, Event> = new WeakMap();
export function hookEvent<T extends EventTarget>(ev: T, event_proxy: (Reflect: typeof _Reflect, name: string) => ProxyHandler<Event>) {
    let m: WeakMap<any, any> = new WeakMap();
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
                    ev = events.get(ev)!;
                }
                return Reflect.apply(target, thisArg, [ev])
            },
        }));
    }
}
export * from './extras.ts'