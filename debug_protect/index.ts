import { _Proxy, _Reflect, hook } from "@portal-solutions/hooker-core";
// const { create } = Object;
const bobj = { id: true };
function cleanseDevTools(
  a: any,
  {
    Proxy = _Proxy,
    Reflect = _Reflect,
  }: { Proxy?: typeof _Proxy; Reflect?: typeof _Reflect } = {}
): any {
  if (typeof a === "object" || typeof a === "function") {
    for (const banned in bobj)
      if (banned in a) {
        a = new Proxy(a, {
          get: (o, k, r) => {
            if (k in bobj) return undefined;
            return Reflect.get(o, k, r);
          },
        });
        break;
      }
  }
  return a;
}
const _console: typeof console = console;
export function init({
  Proxy = _Proxy,
  Reflect = _Reflect,
  console = _console,
}: {
  Proxy?: typeof _Proxy;
  Reflect?: typeof _Reflect;
  console?: typeof _console;
} = {}) {
  for (const key of ["log"])
    hook(
      console as any,
      key,
      (r) => ({
        apply: (o, t, a) => {
          for (let i = 0; i < a.length; i++) {
            a[i] = cleanseDevTools(a[i], { Proxy, Reflect });
          }
          return r.apply(o, t, a);
        },
      }),
      { Proxy, Reflect }
    );
}
