export const _DataView: DataViewConstructor;
export const _DataView_prototype: ProtoSnapshot<DataView<ArrayBuffer>>;
export const _ArrayBuffer: ArrayBufferConstructor;
export const _Uint8Array: Uint8ArrayConstructor;
export const _Uint8Array_prototype: ProtoSnapshot<Uint8Array<ArrayBuffer>>;
export const _WeakMap: any;
export const _WeakMap_prototype: ProtoSnapshot<any>;
export function snapshot<T, U, V>(fn: (this: T, ...U: any[]) => V): (self: T, ...U: any[]) => V;
export type SnapshotInput<T, U, V> = (this: T, ...U: any[]) => V;
export type ProtoSnapshot<T> = {
    [Prop in keyof T]: T[Prop] extends SnapshotInput<infer T2, infer U, infer V> ? (self: T2, ...U: any[]) => V : never;
};
export function snapshotProto<T extends object>(val: T): ProtoSnapshot<T>;

//# sourceMappingURL=index.d.ts.map
