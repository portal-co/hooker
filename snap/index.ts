export function snapshot<T, U, V>(
  fn: (this: T, ...U) => V
): (self: T, ...U) => V {
  return fn.call.bind(fn);
}
export type SnapshotInput<T, U, V> = (this: T, ...U) => V;
export type ProtoSnapshot<T> = {
  [Prop in keyof T]: T[Prop] extends SnapshotInput<infer T2, infer U, infer V>
    ? (self: T2, ...U) => V
    : never;
};
export function snapshotProto<T extends object>(
  val: T,
  { speedy = false }: { speedy?: boolean } = {}
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
  }
  return wipProtoSnapshot as ProtoSnapshot<T>;
}
export * from "./extras.ts";
