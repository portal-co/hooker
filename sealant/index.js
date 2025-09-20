import {_Proxy as $9Qwck$_Proxy, _Reflect as $9Qwck$_Reflect} from "@portal-solutions/hooker-core";
import {_WeakMap as $9Qwck$_WeakMap, _WeakMap_prototype as $9Qwck$_WeakMap_prototype} from "@portal-solutions/hooker-snap";



const $193f3d0663b08877$var$globalThis_ = globalThis;
function $193f3d0663b08877$export$c2b58f881608ca5a({ Proxy: Proxy = (0, $9Qwck$_Proxy), Reflect: Reflect = (0, $9Qwck$_Reflect), WeakMap: WeakMap = (0, $9Qwck$_WeakMap), WeakMap_prototype: WeakMap_prototype = (0, $9Qwck$_WeakMap_prototype), Function_prototype: Function_prototype = Function.prototype, globalThis: globalThis1 = $193f3d0663b08877$var$globalThis_ }) {
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
function $193f3d0663b08877$export$2b159b7d6747ae3f(func, map, { WeakMap_prototype: WeakMap_prototype = (0, $9Qwck$_WeakMap_prototype) }) {
    WeakMap_prototype.set(map, func, ()=>`function ${func.name} { [native code] }`);
}


export {$193f3d0663b08877$export$c2b58f881608ca5a as sealant, $193f3d0663b08877$export$2b159b7d6747ae3f as seal};
//# sourceMappingURL=index.js.map
