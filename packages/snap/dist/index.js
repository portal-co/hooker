/*#__NO_SIDE_EFFECTS__*/
export function snapshot(fn) {
    return fn.call.bind(fn);
}
/*#__NO_SIDE_EFFECTS__*/
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
/*#__NO_SIDE_EFFECTS__*/
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
/*#__NO_SIDE_EFFECTS__*/
export function binder(a) {
    return _Proxy ? new _Proxy(a, {
        get(target, p, receiver) {
            const v = target[p];
            if (typeof v === "function") {
                return v.bind(target);
            }
            return v;
        }
    }) : a;
}
export const _Proxy = globalThis?.Proxy;
export const _Reflect = "Reflect" in globalThis ? { ...binder(Reflect) } : undefined;
export const _path = (a, b) => {
    for (const c of b) {
        a = a?.[c];
    }
    ;
    return a;
};
export * from "./extras.js";
