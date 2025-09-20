"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.events = void 0;
exports.hookEvent = hookEvent;
const index_ts_1 = require("./index.cjs");
exports.events = new index_ts_1._WeakMap();
function hookEvent(ev, event_proxy, opts = {}) {
    const handlerMap = new index_ts_1._WeakMap();
    (0, index_ts_1.hook)(ev, "addEventListener", Reflect => ({
        apply(target, thisArg, argArray) {
            let handler = argArray[1];
            let name;
            let h2 = origEvent => {
                const newEvent = new (opts.Proxy ?? index_ts_1._Proxy)(origEvent, event_proxy(Reflect, name));
                index_ts_1._WeakMap_prototype.set(exports.events, newEvent, origEvent);
                handler(newEvent);
            };
            index_ts_1._WeakMap_prototype.set(handlerMap, handler, h2);
            return Reflect.apply(target, thisArg, [name = argArray[0], h2]);
        },
    }), opts);
    (0, index_ts_1.hook)(ev, "removeEventListener", Reflect => ({
        apply(target, thisArg, argArray) {
            let handler = argArray[1];
            let h2 = index_ts_1._WeakMap_prototype.get(handlerMap, handler);
            index_ts_1._WeakMap_prototype.delete(handlerMap, handler);
            return Reflect.apply(target, thisArg, [argArray[0], h2]);
        },
    }), opts);
    if (ev instanceof EventSource) {
        (0, index_ts_1.hook)(ev, "dispatchEvent", Reflect => ({
            apply(target, thisArg, argArray) {
                var ev = argArray[0];
                if (index_ts_1._WeakMap_prototype.has(exports.events, ev)) {
                    ev = index_ts_1._WeakMap_prototype.get(exports.events, ev);
                }
                return Reflect.apply(target, thisArg, [ev]);
            },
        }), opts);
    }
}
