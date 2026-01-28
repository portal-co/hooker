import { _Proxy, _WeakMap_prototype, _WeakMap, hook } from "./index.js";
export let events = new _WeakMap();
export function hookEvent(ev, event_proxy, opts = {}) {
    const handlerMap = new _WeakMap();
    hook(ev, "addEventListener", Reflect => ({
        apply(target, thisArg, argArray) {
            let handler = argArray[1];
            let name;
            let h2 = origEvent => {
                const newEvent = new (opts.Proxy ?? _Proxy)(origEvent, event_proxy(Reflect, name));
                _WeakMap_prototype.set(events, newEvent, origEvent);
                handler(newEvent);
            };
            _WeakMap_prototype.set(handlerMap, handler, h2);
            return Reflect.apply(target, thisArg, [name = argArray[0], h2]);
        },
    }), opts);
    hook(ev, "removeEventListener", Reflect => ({
        apply(target, thisArg, argArray) {
            let handler = argArray[1];
            let h2 = _WeakMap_prototype.get(handlerMap, handler);
            _WeakMap_prototype.delete(handlerMap, handler);
            return Reflect.apply(target, thisArg, [argArray[0], h2]);
        },
    }), opts);
    if (ev instanceof EventSource) {
        hook(ev, "dispatchEvent", Reflect => ({
            apply(target, thisArg, argArray) {
                var ev = argArray[0];
                if (_WeakMap_prototype.has(events, ev)) {
                    ev = _WeakMap_prototype.get(events, ev);
                }
                return Reflect.apply(target, thisArg, [ev]);
            },
        }), opts);
    }
}
