import { _Proxy, _Reflect } from "@portal-solutions/hooker-core";
import { _WeakMap, _WeakMap_prototype } from "@portal-solutions/hooker-snap";

const globalThis_ = globalThis;
export function sealant({
  Proxy = _Proxy,
  Reflect = _Reflect,
  WeakMap = _WeakMap,
  WeakMap_prototype = _WeakMap_prototype,
  Function_prototype = Function.prototype,
  globalThis = globalThis_,
}: {
  Proxy?: typeof _Proxy;
  Reflect?: typeof _Reflect;
  WeakMap?: typeof _WeakMap;
  WeakMap_prototype?: typeof _WeakMap_prototype;
  Function_prototype?: typeof Function.prototype;
  globalThis?: { Proxy: typeof _Proxy };
}): { Proxy: typeof Proxy; map: WeakMap<any, () => string> } {
  const map = new WeakMap();
  const obj = {
    Proxy: new Proxy(globalThis.Proxy, {
      construct(obj, args, self) {
        const a = Reflect.construct(obj, args, self);
        if (args.length && WeakMap_prototype.has(map, args[0]))
          WeakMap_prototype.set(map, a, WeakMap_prototype.get(map, args[0]));
        return a;
      },
    }),
  };
  Function_prototype.bind = new Proxy(Function_prototype.bind, {
    apply(target, self, args) {
      const a = Reflect.apply(target, self, args);
      if (WeakMap_prototype.has(map, self))
        WeakMap_prototype.set(map, a, WeakMap_prototype.get(map, self));
      return a;
    },
  });
  Function_prototype.toString = new Proxy(Function_prototype.toString, {
    apply(target, self, args) {
      if (WeakMap_prototype.has(map, self)) {
        return WeakMap_prototype.get(map, self)();
      } else {
        return Reflect.apply(target, self, args);
      }
    },
  });
  Object.assign(globalThis, obj);
  return {
    ...obj,
    map,
  };
}

export function seal(func: any, map: WeakMap<any,() => string>, {WeakMap_prototype = _WeakMap_prototype}: {WeakMap_prototype?: typeof _WeakMap_prototype}){
    WeakMap_prototype.set(map,func,() => `function ${func.name} { [native code] }`)
}