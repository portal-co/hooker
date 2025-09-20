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
export const _Proxy: typeof Proxy = globalThis?.Proxy;
export const _Reflect: typeof Reflect =
  "Reflect" in globalThis ? { ...Reflect } : (undefined as any);
export * from "./extras.ts";
