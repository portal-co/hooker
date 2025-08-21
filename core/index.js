
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $0e3a44384afbf336$exports = {};

$parcel$export($0e3a44384afbf336$exports, "_DataView", () => $0e3a44384afbf336$export$fee260b073a0c9c6);
$parcel$export($0e3a44384afbf336$exports, "_DataView_prototype", () => $0e3a44384afbf336$export$fdecce9c58909361);
$parcel$export($0e3a44384afbf336$exports, "_ArrayBuffer", () => $0e3a44384afbf336$export$bb9d876482492a0e);
$parcel$export($0e3a44384afbf336$exports, "_Uint8Array", () => $0e3a44384afbf336$export$8f39e0e69a4ee8ab);
$parcel$export($0e3a44384afbf336$exports, "_Uint8Array_prototype", () => $0e3a44384afbf336$export$3e3718c836d59639);
$parcel$export($0e3a44384afbf336$exports, "_WeakMap", () => $0e3a44384afbf336$export$bc81b4c74ea2198d);
$parcel$export($0e3a44384afbf336$exports, "_WeakMap_prototype", () => $0e3a44384afbf336$export$17cf1b6ad644bf44);

const $0e3a44384afbf336$export$fee260b073a0c9c6 = DataView;
const $0e3a44384afbf336$export$fdecce9c58909361 = (0, $160958df551d9c11$export$8dab992974ec7ae6)($0e3a44384afbf336$export$fee260b073a0c9c6.prototype);
const $0e3a44384afbf336$export$bb9d876482492a0e = ArrayBuffer;
const $0e3a44384afbf336$export$8f39e0e69a4ee8ab = Uint8Array;
const $0e3a44384afbf336$export$3e3718c836d59639 = (0, $160958df551d9c11$export$8dab992974ec7ae6)($0e3a44384afbf336$export$8f39e0e69a4ee8ab.prototype);
const $0e3a44384afbf336$export$bc81b4c74ea2198d = WeakMap;
const $0e3a44384afbf336$export$17cf1b6ad644bf44 = (0, $160958df551d9c11$export$8dab992974ec7ae6)($0e3a44384afbf336$export$bc81b4c74ea2198d.prototype);


var $d96c5798fe320e70$exports = {};

$parcel$export($d96c5798fe320e70$exports, "events", () => $d96c5798fe320e70$export$4bf9923669ad6c63);
$parcel$export($d96c5798fe320e70$exports, "hookEvent", () => $d96c5798fe320e70$export$df859eeaa8b45967);

let $d96c5798fe320e70$export$4bf9923669ad6c63 = new WeakMap();
function $d96c5798fe320e70$export$df859eeaa8b45967(ev, event_proxy) {
    let m = new WeakMap();
    (0, $160958df551d9c11$export$1062a250c78723ea)(ev, "addEventListener", (Reflect)=>({
            apply (target, thisArg, argArray) {
                let handler = argArray[1];
                let name;
                let h2 = ($)=>{
                    let e = new (0, $160958df551d9c11$export$38ba3e7950588cca)($, event_proxy(Reflect, name));
                    (0, $0e3a44384afbf336$export$17cf1b6ad644bf44).set($d96c5798fe320e70$export$4bf9923669ad6c63, e, $);
                    handler(e);
                };
                m.set(handler, h2);
                return Reflect.apply(target, thisArg, [
                    name = argArray[0],
                    h2
                ]);
            }
        }));
    (0, $160958df551d9c11$export$1062a250c78723ea)(ev, "removeEventListener", (Reflect)=>({
            apply (target, thisArg, argArray) {
                let handler = argArray[1];
                let h2 = (0, $0e3a44384afbf336$export$17cf1b6ad644bf44).get(m, handler);
                (0, $0e3a44384afbf336$export$17cf1b6ad644bf44).delete(m, handler);
                return Reflect.apply(target, thisArg, [
                    argArray[0],
                    h2
                ]);
            }
        }));
    if (ev instanceof EventSource) (0, $160958df551d9c11$export$1062a250c78723ea)(ev, "dispatchEvent", (Reflect)=>({
            apply (target, thisArg, argArray) {
                var ev = argArray[0];
                if ((0, $0e3a44384afbf336$export$17cf1b6ad644bf44).has($d96c5798fe320e70$export$4bf9923669ad6c63, ev)) ev = (0, $0e3a44384afbf336$export$17cf1b6ad644bf44).get($d96c5798fe320e70$export$4bf9923669ad6c63, ev);
                return Reflect.apply(target, thisArg, [
                    ev
                ]);
            }
        }));
}


const $160958df551d9c11$export$38ba3e7950588cca = Proxy;
const $160958df551d9c11$export$c7c8cae26635c874 = {
    ...Reflect
};
const $160958df551d9c11$export$a992e08d9566370c = new WeakMap();
function $160958df551d9c11$export$b8801ea43165ed7d(fn) {
    return fn.call.bind(fn);
}
function $160958df551d9c11$export$8dab992974ec7ae6(val) {
    let a = {};
    for (let k of Object.keys(val)){
        let wrapped;
        if ((wrapped = val[k]) instanceof Function) a[k] = $160958df551d9c11$export$b8801ea43165ed7d(wrapped);
    }
    return a;
}
function $160958df551d9c11$export$1062a250c78723ea(a, b, c, { isProperty: isProperty = false, Proxy: Proxy1 = $160958df551d9c11$export$38ba3e7950588cca } = {}) {
    // a[b] = new _Proxy(a[b], c(_Reflect));
    if (isProperty) $160958df551d9c11$export$ba312a2d6db6c3aa(a, b, (d)=>(d ??= {
            value: undefined
        }, {
            configurable: d?.configurable ?? true,
            enumerable: d?.enumerable ?? true,
            writable: d?.writable ?? true,
            get () {
                var p, v;
                if (d?.get) p = new Proxy1(v = d.get(), c($160958df551d9c11$export$c7c8cae26635c874));
                else p = new Proxy1(v = d.value, c($160958df551d9c11$export$c7c8cae26635c874));
                (0, $0e3a44384afbf336$export$17cf1b6ad644bf44).set($160958df551d9c11$export$a992e08d9566370c, p, v);
                return p;
            },
            set (value) {
                while((0, $0e3a44384afbf336$export$17cf1b6ad644bf44).has($160958df551d9c11$export$a992e08d9566370c, value))value = (0, $0e3a44384afbf336$export$17cf1b6ad644bf44).get($160958df551d9c11$export$a992e08d9566370c, value);
                if (d?.set) d.set(value);
                else d.value = value;
            }
        }));
    else a[b] = new Proxy1(a[b], c($160958df551d9c11$export$c7c8cae26635c874));
}
function $160958df551d9c11$export$ba312a2d6db6c3aa(a, b, c) {
    let d = $160958df551d9c11$export$c7c8cae26635c874.getOwnPropertyDescriptor(a, b);
    // if (d !== undefined) {
    $160958df551d9c11$export$c7c8cae26635c874.defineProperty(a, b, c(d));
// }
}


export {$160958df551d9c11$export$38ba3e7950588cca as _Proxy, $160958df551d9c11$export$c7c8cae26635c874 as _Reflect, $160958df551d9c11$export$a992e08d9566370c as hookProxies, $160958df551d9c11$export$b8801ea43165ed7d as snapshot, $160958df551d9c11$export$8dab992974ec7ae6 as snapshotProto, $160958df551d9c11$export$1062a250c78723ea as hook, $160958df551d9c11$export$ba312a2d6db6c3aa as hookProp, $0e3a44384afbf336$export$fee260b073a0c9c6 as _DataView, $0e3a44384afbf336$export$fdecce9c58909361 as _DataView_prototype, $0e3a44384afbf336$export$bb9d876482492a0e as _ArrayBuffer, $0e3a44384afbf336$export$8f39e0e69a4ee8ab as _Uint8Array, $0e3a44384afbf336$export$3e3718c836d59639 as _Uint8Array_prototype, $0e3a44384afbf336$export$bc81b4c74ea2198d as _WeakMap, $0e3a44384afbf336$export$17cf1b6ad644bf44 as _WeakMap_prototype, $d96c5798fe320e70$export$4bf9923669ad6c63 as events, $d96c5798fe320e70$export$df859eeaa8b45967 as hookEvent};
//# sourceMappingURL=index.js.map
