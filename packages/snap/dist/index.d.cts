export declare function snapshot<F extends (...args: any) => any>(fn: F): SnapshotOutput<F>;
export type SnapshotInput<T, U, V> = (this: T, ...U: any[]) => V;
export type SnapshotOutput<F extends (...args: any) => any> = (self: ThisParameterType<F>, ...v: Parameters<F>) => ReturnType<F>;
export type ProtoSnapshot<T> = {
    [Prop in keyof T]: T[Prop] extends (...args: any) => any ? SnapshotOutput<T[Prop]> : {
        get(self: T): T[Prop];
        set(self: T, value: T[Prop]): any;
    };
};
export declare function snapshotProto<T extends object>(val: T, { speedy, getOwnPropertyDescriptor, }?: {
    speedy?: boolean;
    getOwnPropertyDescriptor?: typeof Object.getOwnPropertyDescriptor;
}): ProtoSnapshot<T>;
export declare function quickProto<T extends object>(a: T): ProtoSnapshot<T>;
export declare function binder<T extends object>(a: T): T;
export declare const _Proxy: undefined | typeof Proxy;
export declare const _Reflect: undefined | typeof Reflect;
export declare const _path: (a: any, b: (string | symbol)[]) => any;
export * from "./extras.cjs";
