import * as $j4bmX$portalsolutionshookersnap from "@portal-solutions/hooker-snap";


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

var $946a76da8c3426e1$exports = {};

$parcel$export($946a76da8c3426e1$exports, "events", () => $946a76da8c3426e1$export$4bf9923669ad6c63);
$parcel$export($946a76da8c3426e1$exports, "hookEvent", () => $946a76da8c3426e1$export$df859eeaa8b45967);

let $946a76da8c3426e1$export$4bf9923669ad6c63 = new (0, $cba3330782bf8e99$exports._WeakMap)();
function $946a76da8c3426e1$export$df859eeaa8b45967(ev, event_proxy, opts = {}) {
    const handlerMap = new (0, $cba3330782bf8e99$exports._WeakMap)();
    (0, $cba3330782bf8e99$export$1062a250c78723ea)(ev, "addEventListener", (Reflect)=>({
            apply (target, thisArg, argArray) {
                let handler = argArray[1];
                let name;
                let h2 = (origEvent)=>{
                    const newEvent = new (opts.Proxy ?? (0, $cba3330782bf8e99$export$38ba3e7950588cca))(origEvent, event_proxy(Reflect, name));
                    (0, $cba3330782bf8e99$exports._WeakMap_prototype).set($946a76da8c3426e1$export$4bf9923669ad6c63, newEvent, origEvent);
                    handler(newEvent);
                };
                (0, $cba3330782bf8e99$exports._WeakMap_prototype).set(handlerMap, handler, h2);
                return Reflect.apply(target, thisArg, [
                    name = argArray[0],
                    h2
                ]);
            }
        }), opts);
    (0, $cba3330782bf8e99$export$1062a250c78723ea)(ev, "removeEventListener", (Reflect)=>({
            apply (target, thisArg, argArray) {
                let handler = argArray[1];
                let h2 = (0, $cba3330782bf8e99$exports._WeakMap_prototype).get(handlerMap, handler);
                (0, $cba3330782bf8e99$exports._WeakMap_prototype).delete(handlerMap, handler);
                return Reflect.apply(target, thisArg, [
                    argArray[0],
                    h2
                ]);
            }
        }), opts);
    if (ev instanceof EventSource) (0, $cba3330782bf8e99$export$1062a250c78723ea)(ev, "dispatchEvent", (Reflect)=>({
            apply (target, thisArg, argArray) {
                var ev = argArray[0];
                if ((0, $cba3330782bf8e99$exports._WeakMap_prototype).has($946a76da8c3426e1$export$4bf9923669ad6c63, ev)) ev = (0, $cba3330782bf8e99$exports._WeakMap_prototype).get($946a76da8c3426e1$export$4bf9923669ad6c63, ev);
                return Reflect.apply(target, thisArg, [
                    ev
                ]);
            }
        }), opts);
}


const $cba3330782bf8e99$export$a992e08d9566370c = (0, $j4bmX$_WeakMap) ? new (0, $j4bmX$_WeakMap)() : undefined;
const $cba3330782bf8e99$var$_hookProxies = $cba3330782bf8e99$export$a992e08d9566370c;
const $cba3330782bf8e99$export$38ba3e7950588cca = globalThis?.Proxy;
const $cba3330782bf8e99$export$c7c8cae26635c874 = "Reflect" in globalThis ? {
    ...Reflect
} : undefined;
const { isFrozen: $cba3330782bf8e99$var$_isFrozen } = Object;
function $cba3330782bf8e99$export$1062a250c78723ea(object, key, hook1, { isProperty: isProperty = false, Proxy: Proxy = $cba3330782bf8e99$export$38ba3e7950588cca, Reflect: Reflect1 = $cba3330782bf8e99$export$c7c8cae26635c874, hookProxies: hookProxies = $cba3330782bf8e99$var$_hookProxies, attempt: attempt = false, isFrozen: isFrozen = $cba3330782bf8e99$var$_isFrozen } = {}) {
    // a[b] = new _Proxy(a[b], c(_Reflect));
    if (attempt && isFrozen(object)) return;
    if (isProperty) $cba3330782bf8e99$export$ba312a2d6db6c3aa(object, key, (descriptor)=>(descriptor ??= {
            value: undefined
        }, {
            configurable: descriptor?.configurable ?? true,
            enumerable: descriptor?.enumerable ?? true,
            writable: descriptor?.writable ?? true,
            get () {
                var proxy, value;
                if (descriptor?.get) proxy = new Proxy(value = descriptor.get(), hook1(Reflect1));
                else proxy = new Proxy(value = descriptor.value, hook1(Reflect1));
                (0, $j4bmX$_WeakMap_prototype).set(hookProxies, proxy, value);
                return proxy;
            },
            set (value) {
                while((0, $j4bmX$_WeakMap_prototype).has(hookProxies, value))value = (0, $j4bmX$_WeakMap_prototype).get(hookProxies, value);
                if (descriptor?.set) descriptor.set(value);
                else descriptor.value = value;
            }
        }), {
        Reflect: Reflect1,
        attempt: attempt,
        isFrozen: isFrozen
    });
    else object[key] = new Proxy(object[key], hook1(Reflect1));
}
function $cba3330782bf8e99$export$ba312a2d6db6c3aa(object, key, hook, { Reflect: Reflect1 = $cba3330782bf8e99$export$c7c8cae26635c874, attempt: attempt = false, isFrozen: isFrozen = $cba3330782bf8e99$var$_isFrozen } = {}) {
    if (attempt && isFrozen(object)) return;
    const descriptor = Reflect1.getOwnPropertyDescriptor(object, key);
    // if (d !== undefined) {
    Reflect1.defineProperty(object, key, hook(descriptor));
// }
}


export {$cba3330782bf8e99$export$a992e08d9566370c as hookProxies, $cba3330782bf8e99$export$38ba3e7950588cca as _Proxy, $cba3330782bf8e99$export$c7c8cae26635c874 as _Reflect, $cba3330782bf8e99$export$1062a250c78723ea as hook, $cba3330782bf8e99$export$ba312a2d6db6c3aa as hookProp, $946a76da8c3426e1$export$4bf9923669ad6c63 as events, $946a76da8c3426e1$export$df859eeaa8b45967 as hookEvent};
//# sourceMappingURL=index.js.map
