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
    if(desc === undefined)continue;
    wipProtoSnapshot[key] = {
      get: snapshot(desc.get),
      set: snapshot(desc.set),
    };
  }
  return wipProtoSnapshot as ProtoSnapshot<T>;
}
export * from "./extras.ts";
