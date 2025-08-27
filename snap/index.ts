export function snapshot<T, U, V>(fn: (this: T, ...U) => V): (self: T, ...U) => V {
    return fn.call.bind(fn);
}
export type SnapshotInput<T, U, V> = (this: T, ...U) => V;
export type ProtoSnapshot<T> = { [Prop in keyof T]: T[Prop] extends SnapshotInput<infer T2, infer U, infer V> ? (self: T2, ...U) => V : never };
export function snapshotProto<T extends object>(val: T): ProtoSnapshot<T> {
    let wipProtoSnapshot = {};
    for (let key of Object.keys(val)) {
        let wrapped;
        if ((wrapped = val[key]) instanceof Function) wipProtoSnapshot[key] = snapshot(wrapped);
    }
    return wipProtoSnapshot as ProtoSnapshot<T>;
}
export * from "./extras.ts"