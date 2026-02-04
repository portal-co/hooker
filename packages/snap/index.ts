/*#__NO_SIDE_EFFECTS__*/
export function snapshot<F extends (...args: any) => any>(
  fn: F
): SnapshotOutput<F> {
  return fn.call.bind(fn);
}
export type SnapshotInput<T, U, V> = (this: T, ...U) => V;
export type SnapshotOutput<F extends (...args: any) => any> = (
  self: ThisParameterType<F>,
  ...v: Parameters<F>
) => ReturnType<F>;
export type ProtoSnapshot<T> = {
  [Prop in keyof T]: T[Prop] extends (...args: any) => any
    ? SnapshotOutput<T[Prop]>
    : { get(self: T): T[Prop]; set(self: T, value: T[Prop]) };
};
/*#__NO_SIDE_EFFECTS__*/
export function snapshotProto<T extends object>(
  val: T,
  {
    speedy = false,
    getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor,
  }: {
    speedy?: boolean;
    getOwnPropertyDescriptor?: typeof Object.getOwnPropertyDescriptor;
  } = {}
): ProtoSnapshot<T> {
  let wipProtoSnapshot: any = {};
  for (let key in val) {
    let wrapped;
    if ((wrapped = val[key]) instanceof Function) {
      let value = snapshot(wrapped);
      if (speedy)
        value = (
          (old) =>
          (a: any, ...args) =>
            val[key] === wrapped ? a[key](...args) : old(a, ...args)
        )(value);
      wipProtoSnapshot[key] = value;
    }
    const desc = getOwnPropertyDescriptor(val, key);
    if (desc === undefined) continue;
    wipProtoSnapshot[key] = {
      get: snapshot(desc.get),
      set: snapshot(desc.set),
    };
  }
  return wipProtoSnapshot as ProtoSnapshot<T>;
}
/*#__NO_SIDE_EFFECTS__*/
export function quickProto<T extends object>(a: T): ProtoSnapshot<T> {
  if (!_Proxy) return undefined!;
  return {
    ...new _Proxy(a, {
      get(target, p, receiver) {
        if (typeof target[p] === "function")
          return (a, ...args) => a[p](...args);
        return {
          get: (a) => a[p],
          set: (a, v) => {
            a[p] = v;
          },
        };
      },
    }),
  } as any as ProtoSnapshot<T>;
}
/*#__NO_SIDE_EFFECTS__*/
export function binder<T extends object>(a: T): T{
  return _Proxy ? new _Proxy(a, {
    get(target, p, receiver) {
      const v = target[p];
      if(typeof v === "function"){
        return v.bind(target);
      }
      return v;
    }
  }) : a;
}
export const _Proxy: undefined | typeof Proxy = globalThis?.Proxy;
export const _Reflect: undefined | typeof Reflect =
  "Reflect" in globalThis ? { ...binder(Reflect) } : (undefined as any);

export const _path = /*#__NO_SIDE_EFFECTS__*/ (a: any, b: (string | symbol)[]) => {
  for(const c of b) {
    a = a?.[c];
  };
  return a;  
}

export * from "./extras.ts";
