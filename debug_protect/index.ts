import { _Proxy, _Reflect, hook } from "@portal-solutions/hooker-core"
const { create } = Object;
function cleanseDevTools(a: any): any {
    if (typeof a === "object" || typeof a === "function") {
        for (const banned of ["id"]) if (banned in a) {
            a = new _Proxy(a, {
                get: (o, k, r) => {
                    if (k === banned) return undefined;
                    return _Reflect.get(o, k, r);
                }
            });
        }
    }
    return a;
}
for (const key of ["log"]) hook(console as any, key, r => ({
    apply: (o, t, a) => {
        for (let i = 0; i < a.length; i++) {
            a[i] = cleanseDevTools(a[i]);
        }
        return r.apply(o, t, a);
    }
}))