export function snapshot(fn) {
    return fn.call.bind(fn);
}
export function snapshotProto(val, { speedy = false, getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor, } = {}) {
    let wipProtoSnapshot = {};
    for (let key in val) {
        let wrapped;
        if ((wrapped = val[key]) instanceof Function) {
            let value = snapshot(wrapped);
            if (speedy)
                value = ((old) => (a, ...args) => val[key] === wrapped ? a[key](...args) : old(a, ...args))(value);
            wipProtoSnapshot[key] = value;
        }
        const desc = getOwnPropertyDescriptor(val, key);
        if (desc === undefined)
            continue;
        wipProtoSnapshot[key] = {
            get: snapshot(desc.get),
            set: snapshot(desc.set),
        };
    }
    return wipProtoSnapshot;
}
export function quickProto(a) {
    if (!_Proxy)
        return undefined;
    return {
        ...new _Proxy(a, {
            get(target, p, receiver) {
                if (typeof target[p] === "function")
                    return (a, ...args) => a[p](...args);
                return {
                    get: (a) => a[p],
                    set: (a, v) => {
                        a[p] = v;
                    },
                };
            },
        }),
    };
}
export const _Proxy = globalThis?.Proxy;
export const _Reflect = "Reflect" in globalThis ? { ...Reflect } : undefined;
export * from "./extras.js";
