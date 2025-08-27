import * as $fRX83$portalsolutionshookersnap from "@portal-solutions/hooker-snap";


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

var $d96c5798fe320e70$exports = {};

$parcel$export($d96c5798fe320e70$exports, "events", () => $d96c5798fe320e70$export$4bf9923669ad6c63);
$parcel$export($d96c5798fe320e70$exports, "hookEvent", () => $d96c5798fe320e70$export$df859eeaa8b45967);

let $d96c5798fe320e70$export$4bf9923669ad6c63 = new (0, $160958df551d9c11$exports._WeakMap)();
function $d96c5798fe320e70$export$df859eeaa8b45967(ev, event_proxy, opts = {}) {
    let m = new (0, $160958df551d9c11$exports._WeakMap)();
    (0, $160958df551d9c11$export$1062a250c78723ea)(ev, "addEventListener", (Reflect)=>({
            apply (target, thisArg, argArray) {
                let handler = argArray[1];
                let name;
                let h2 = ($)=>{
                    let e = new (opts.Proxy ?? (0, $160958df551d9c11$export$38ba3e7950588cca))($, event_proxy(Reflect, name));
                    (0, $160958df551d9c11$exports._WeakMap_prototype).set($d96c5798fe320e70$export$4bf9923669ad6c63, e, $);
                    handler(e);
                };
                (0, $160958df551d9c11$exports._WeakMap_prototype).set(m, handler, h2);
                return Reflect.apply(target, thisArg, [
                    name = argArray[0],
                    h2
                ]);
            }
        }), opts);
    (0, $160958df551d9c11$export$1062a250c78723ea)(ev, "removeEventListener", (Reflect)=>({
            apply (target, thisArg, argArray) {
                let handler = argArray[1];
                let h2 = (0, $160958df551d9c11$exports._WeakMap_prototype).get(m, handler);
                (0, $160958df551d9c11$exports._WeakMap_prototype).delete(m, handler);
                return Reflect.apply(target, thisArg, [
                    argArray[0],
                    h2
                ]);
            }
        }), opts);
    if (ev instanceof EventSource) (0, $160958df551d9c11$export$1062a250c78723ea)(ev, "dispatchEvent", (Reflect)=>({
            apply (target, thisArg, argArray) {
                var ev = argArray[0];
                if ((0, $160958df551d9c11$exports._WeakMap_prototype).has($d96c5798fe320e70$export$4bf9923669ad6c63, ev)) ev = (0, $160958df551d9c11$exports._WeakMap_prototype).get($d96c5798fe320e70$export$4bf9923669ad6c63, ev);
                return Reflect.apply(target, thisArg, [
                    ev
                ]);
            }
        }), opts);
}


const $160958df551d9c11$export$a992e08d9566370c = new WeakMap();
const $160958df551d9c11$export$38ba3e7950588cca = globalThis?.Proxy;
const $160958df551d9c11$export$c7c8cae26635c874 = 'Reflect' in globalThis ? {
    ...Reflect
} : undefined;
function $160958df551d9c11$export$1062a250c78723ea(a, b, c, { isProperty: isProperty = false, Proxy: Proxy = $160958df551d9c11$export$38ba3e7950588cca, Reflect: Reflect1 = $160958df551d9c11$export$c7c8cae26635c874 } = {}) {
    // a[b] = new _Proxy(a[b], c(_Reflect));
    if (isProperty) $160958df551d9c11$export$ba312a2d6db6c3aa(a, b, (d)=>(d ??= {
            value: undefined
        }, {
            configurable: d?.configurable ?? true,
            enumerable: d?.enumerable ?? true,
            writable: d?.writable ?? true,
            get () {
                var p, v;
                if (d?.get) p = new Proxy(v = d.get(), c(Reflect1));
                else p = new Proxy(v = d.value, c(Reflect1));
                (0, $fRX83$_WeakMap_prototype).set($160958df551d9c11$export$a992e08d9566370c, p, v);
                return p;
            },
            set (value) {
                while((0, $fRX83$_WeakMap_prototype).has($160958df551d9c11$export$a992e08d9566370c, value))value = (0, $fRX83$_WeakMap_prototype).get($160958df551d9c11$export$a992e08d9566370c, value);
                if (d?.set) d.set(value);
                else d.value = value;
            }
        }), {
        Reflect: Reflect1
    });
    else a[b] = new Proxy(a[b], c(Reflect1));
}
function $160958df551d9c11$export$ba312a2d6db6c3aa(a, b, c, { Reflect: Reflect1 = $160958df551d9c11$export$c7c8cae26635c874 } = {}) {
    let d = Reflect1.getOwnPropertyDescriptor(a, b);
    // if (d !== undefined) {
    Reflect1.defineProperty(a, b, c(d));
// }
}


export {$160958df551d9c11$export$a992e08d9566370c as hookProxies, $160958df551d9c11$export$38ba3e7950588cca as _Proxy, $160958df551d9c11$export$c7c8cae26635c874 as _Reflect, $160958df551d9c11$export$1062a250c78723ea as hook, $160958df551d9c11$export$ba312a2d6db6c3aa as hookProp, $d96c5798fe320e70$export$4bf9923669ad6c63 as events, $d96c5798fe320e70$export$df859eeaa8b45967 as hookEvent};
//# sourceMappingURL=index.js.map
