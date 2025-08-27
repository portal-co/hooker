import * as $fRX83$portalsolutionshookersnap from "@portal-solutions/hooker-snap";


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

var $d96c5798fe320e70$exports = {};

$parcel$export($d96c5798fe320e70$exports, "events", () => $d96c5798fe320e70$export$4bf9923669ad6c63);
$parcel$export($d96c5798fe320e70$exports, "hookEvent", () => $d96c5798fe320e70$export$df859eeaa8b45967);

let $d96c5798fe320e70$export$4bf9923669ad6c63 = new (0, $160958df551d9c11$exports._WeakMap)();
function $d96c5798fe320e70$export$df859eeaa8b45967(ev, event_proxy, opts = {}) {
    const handlerMap = new (0, $160958df551d9c11$exports._WeakMap)();
    (0, $160958df551d9c11$export$1062a250c78723ea)(ev, "addEventListener", (Reflect)=>({
            apply (target, thisArg, argArray) {
                let handler = argArray[1];
                let name;
                let h2 = (origEvent)=>{
                    const newEvent = new (opts.Proxy ?? (0, $160958df551d9c11$export$38ba3e7950588cca))(origEvent, event_proxy(Reflect, name));
                    (0, $160958df551d9c11$exports._WeakMap_prototype).set($d96c5798fe320e70$export$4bf9923669ad6c63, newEvent, origEvent);
                    handler(newEvent);
                };
                (0, $160958df551d9c11$exports._WeakMap_prototype).set(handlerMap, handler, h2);
                return Reflect.apply(target, thisArg, [
                    name = argArray[0],
                    h2
                ]);
            }
        }), opts);
    (0, $160958df551d9c11$export$1062a250c78723ea)(ev, "removeEventListener", (Reflect)=>({
            apply (target, thisArg, argArray) {
                let handler = argArray[1];
                let h2 = (0, $160958df551d9c11$exports._WeakMap_prototype).get(handlerMap, handler);
                (0, $160958df551d9c11$exports._WeakMap_prototype).delete(handlerMap, handler);
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


const $160958df551d9c11$export$a992e08d9566370c = (0, $fRX83$_WeakMap) ? new (0, $fRX83$_WeakMap)() : undefined;
const $160958df551d9c11$var$_hookProxies = $160958df551d9c11$export$a992e08d9566370c;
const $160958df551d9c11$export$38ba3e7950588cca = globalThis?.Proxy;
const $160958df551d9c11$export$c7c8cae26635c874 = 'Reflect' in globalThis ? {
    ...Reflect
} : undefined;
function $160958df551d9c11$export$1062a250c78723ea(object, key, hook1, { isProperty: isProperty = false, Proxy: Proxy = $160958df551d9c11$export$38ba3e7950588cca, Reflect: Reflect1 = $160958df551d9c11$export$c7c8cae26635c874, hookProxies: hookProxies = $160958df551d9c11$var$_hookProxies } = {}) {
    // a[b] = new _Proxy(a[b], c(_Reflect));
    if (isProperty) $160958df551d9c11$export$ba312a2d6db6c3aa(object, key, (descriptor)=>(descriptor ??= {
            value: undefined
        }, {
            configurable: descriptor?.configurable ?? true,
            enumerable: descriptor?.enumerable ?? true,
            writable: descriptor?.writable ?? true,
            get () {
                var proxy, value;
                if (descriptor?.get) proxy = new Proxy(value = descriptor.get(), hook1(Reflect1));
                else proxy = new Proxy(value = descriptor.value, hook1(Reflect1));
                (0, $fRX83$_WeakMap_prototype).set(hookProxies, proxy, value);
                return proxy;
            },
            set (value) {
                while((0, $fRX83$_WeakMap_prototype).has(hookProxies, value))value = (0, $fRX83$_WeakMap_prototype).get(hookProxies, value);
                if (descriptor?.set) descriptor.set(value);
                else descriptor.value = value;
            }
        }), {
        Reflect: Reflect1
    });
    else object[key] = new Proxy(object[key], hook1(Reflect1));
}
function $160958df551d9c11$export$ba312a2d6db6c3aa(object, key, hook, { Reflect: Reflect1 = $160958df551d9c11$export$c7c8cae26635c874 } = {}) {
    const descriptor = Reflect1.getOwnPropertyDescriptor(object, key);
    // if (d !== undefined) {
    Reflect1.defineProperty(object, key, hook(descriptor));
// }
}


export {$160958df551d9c11$export$a992e08d9566370c as hookProxies, $160958df551d9c11$export$38ba3e7950588cca as _Proxy, $160958df551d9c11$export$c7c8cae26635c874 as _Reflect, $160958df551d9c11$export$1062a250c78723ea as hook, $160958df551d9c11$export$ba312a2d6db6c3aa as hookProp, $d96c5798fe320e70$export$4bf9923669ad6c63 as events, $d96c5798fe320e70$export$df859eeaa8b45967 as hookEvent};
//# sourceMappingURL=index.js.map
