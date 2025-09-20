import {_Proxy as $bXptg$_Proxy, _Reflect as $bXptg$_Reflect} from "@portal-solutions/hooker-core";
import {_WeakMap as $bXptg$_WeakMap, _WeakMap_prototype as $bXptg$_WeakMap_prototype} from "@portal-solutions/hooker-snap";



const $611c0020afb17dd9$var$globalThis_ = globalThis;
function $611c0020afb17dd9$export$c2b58f881608ca5a({ Proxy: Proxy = (0, $bXptg$_Proxy), Reflect: Reflect = (0, $bXptg$_Reflect), WeakMap: WeakMap = (0, $bXptg$_WeakMap), WeakMap_prototype: WeakMap_prototype = (0, $bXptg$_WeakMap_prototype), Function_prototype: Function_prototype = Function.prototype, globalThis: globalThis1 = $611c0020afb17dd9$var$globalThis_ }) {
    const map = new WeakMap();
    const obj = {
        Proxy: new Proxy(globalThis1.Proxy, {
            construct (obj, args, self) {
                const a = Reflect.construct(obj, args, self);
                if (args.length && WeakMap_prototype.has(map, args[0])) WeakMap_prototype.set(map, a, WeakMap_prototype.get(map, args[0]));
                return a;
            }
        })
    };
    Function_prototype.bind = new Proxy(Function_prototype.bind, {
        apply (target, self, args) {
            const a = Reflect.apply(target, self, args);
            if (WeakMap_prototype.has(map, self)) WeakMap_prototype.set(map, a, WeakMap_prototype.get(map, self));
            return a;
        }
    });
    Function_prototype.toString = new Proxy(Function_prototype.toString, {
        apply (target, self, args) {
            if (WeakMap_prototype.has(map, self)) return WeakMap_prototype.get(map, self)();
            else return Reflect.apply(target, self, args);
        }
    });
    Object.assign(globalThis1, obj);
    return {
        ...obj,
        map: map
    };
}
function $611c0020afb17dd9$export$2b159b7d6747ae3f(func, map, { WeakMap_prototype: WeakMap_prototype = (0, $bXptg$_WeakMap_prototype) }) {
    WeakMap_prototype.set(map, func, ()=>`function ${func.name} { [native code] }`);
}


export {$611c0020afb17dd9$export$c2b58f881608ca5a as sealant, $611c0020afb17dd9$export$2b159b7d6747ae3f as seal};
//# sourceMappingURL=index.js.map
