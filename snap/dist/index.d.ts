export declare function snapshot<T, U, V>(fn: (this: T, ...U: any[]) => V): (self: T, ...U: any[]) => V;
export type SnapshotInput<T, U, V> = (this: T, ...U: any[]) => V;
export type ProtoSnapshot<T> = {
    [Prop in keyof T]: T[Prop] extends SnapshotInput<infer T2, infer U, infer V> ? (self: T2, ...U: any[]) => V : never;
};
export declare function snapshotProto<T extends object>(val: T, { speedy }?: {
    speedy?: boolean;
}): ProtoSnapshot<T>;
export * from "./extras.js";
