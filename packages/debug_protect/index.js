import {_Proxy as $b5dSV$_Proxy, _Reflect as $b5dSV$_Reflect, hook as $b5dSV$hook} from "@portal-solutions/hooker-core";


// const { create } = Object;
const $3d62cee6fd7b124a$var$bobj = {
    id: true
};
function $3d62cee6fd7b124a$var$cleanseDevTools(a, { Proxy: Proxy = (0, $b5dSV$_Proxy), Reflect: Reflect = (0, $b5dSV$_Reflect) } = {}) {
    if (typeof a === "object" || typeof a === "function") {
        for(const banned in $3d62cee6fd7b124a$var$bobj)if (banned in a) {
            a = new Proxy(a, {
                get: (o, k, r)=>{
                    if (k in $3d62cee6fd7b124a$var$bobj) return undefined;
                    return Reflect.get(o, k, r);
                },
                has: (o, k)=>!(k in $3d62cee6fd7b124a$var$bobj) && Reflect.has(o, k)
            });
            break;
        }
    }
    return a;
}
const $3d62cee6fd7b124a$var$_console = console;
function $3d62cee6fd7b124a$export$2cd8252107eb640b({ Proxy: Proxy = (0, $b5dSV$_Proxy), Reflect: Reflect = (0, $b5dSV$_Reflect), console: console1 = $3d62cee6fd7b124a$var$_console, attempt: attempt = false } = {}) {
    for (const key of [
        "log"
    ])(0, $b5dSV$hook)(console1, key, (Reflect)=>({
            apply: (o, t, a)=>{
                for(let i = 0; i < a.length; i++)a[i] = $3d62cee6fd7b124a$var$cleanseDevTools(a[i], {
                    Proxy: Proxy,
                    Reflect: Reflect
                });
                return Reflect.apply(o, t, a);
            }
        }), {
        Proxy: Proxy,
        Reflect: Reflect,
        attempt: attempt
    });
}


export {$3d62cee6fd7b124a$export$2cd8252107eb640b as init};
//# sourceMappingURL=index.js.map
