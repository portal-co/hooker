import { _Proxy, _Reflect } from "@portal-solutions/hooker-core";
import { _WeakMap, _WeakMap_prototype } from "@portal-solutions/hooker-snap";
export function sealant({ Proxy, Reflect, WeakMap, WeakMap_prototype, Function_prototype, globalThis, }: {
    Proxy?: typeof _Proxy;
    Reflect?: typeof _Reflect;
    WeakMap?: typeof _WeakMap;
    WeakMap_prototype?: typeof _WeakMap_prototype;
    Function_prototype?: typeof Function.prototype;
    globalThis?: {
        Proxy: typeof _Proxy;
    };
}): {
    Proxy: typeof Proxy;
    map: WeakMap<any, () => string>;
};
export function seal(func: any, map: WeakMap<any, () => string>, { WeakMap_prototype }: {
    WeakMap_prototype?: typeof _WeakMap_prototype;
}): void;

//# sourceMappingURL=index.d.ts.map
