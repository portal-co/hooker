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
        wipProtoSnapshot[key] = {
            get: snapshot(desc.get),
            set: snapshot(desc.set),
        };
    }
    return wipProtoSnapshot;
}
export * from "./extras.js";
