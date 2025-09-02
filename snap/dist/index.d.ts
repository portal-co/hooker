export declare function snapshot<T, U, V>(fn: (this: T, ...U: any[]) => V): (self: T, ...U: any[]) => V;
export type SnapshotInput<T, U, V> = (this: T, ...U: any[]) => V;
export type ProtoSnapshot<T> = {
    [Prop in keyof T]: T[Prop] extends SnapshotInput<infer T2, infer U, infer V> ? (self: T2, ...U: any[]) => V : {
        get(self: T): T[Prop];
        set(self: T, value: T[Prop]): any;
    };
};
export declare function snapshotProto<T extends object>(val: T, { speedy, getOwnPropertyDescriptor, }?: {
    speedy?: boolean;
    getOwnPropertyDescriptor?: typeof Object.getOwnPropertyDescriptor;
}): ProtoSnapshot<T>;
export * from "./extras.js";
