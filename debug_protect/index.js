import {_Proxy as $k1ZFv$_Proxy, _Reflect as $k1ZFv$_Reflect, hook as $k1ZFv$hook} from "@portal-solutions/hooker-core";


// const { create } = Object;
const $95fdd9c12cc04e3f$var$bobj = {
    id: true
};
function $95fdd9c12cc04e3f$var$cleanseDevTools(a, { Proxy: Proxy = (0, $k1ZFv$_Proxy), Reflect: Reflect = (0, $k1ZFv$_Reflect) } = {}) {
    if (typeof a === "object" || typeof a === "function") {
        for(const banned in $95fdd9c12cc04e3f$var$bobj)if (banned in a) {
            a = new Proxy(a, {
                get: (o, k, r)=>{
                    if (k in $95fdd9c12cc04e3f$var$bobj) return undefined;
                    return Reflect.get(o, k, r);
                }
            });
            break;
        }
    }
    return a;
}
const $95fdd9c12cc04e3f$var$_console = console;
function $95fdd9c12cc04e3f$export$2cd8252107eb640b({ Proxy: Proxy = (0, $k1ZFv$_Proxy), Reflect: Reflect = (0, $k1ZFv$_Reflect), console: console1 = $95fdd9c12cc04e3f$var$_console, attempt: attempt = false } = {}) {
    for (const key of [
        "log"
    ])(0, $k1ZFv$hook)(console1, key, (Reflect)=>({
            apply: (o, t, a)=>{
                for(let i = 0; i < a.length; i++)a[i] = $95fdd9c12cc04e3f$var$cleanseDevTools(a[i], {
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


export {$95fdd9c12cc04e3f$export$2cd8252107eb640b as init};
//# sourceMappingURL=index.js.map
