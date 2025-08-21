export const _DataView: DataViewConstructor;
export const _DataView_prototype: ProtoSnapshot<DataView<ArrayBuffer>>;
export const _ArrayBuffer: ArrayBufferConstructor;
export const _Uint8Array: Uint8ArrayConstructor;
export const _Uint8Array_prototype: ProtoSnapshot<Uint8Array<ArrayBuffer>>;
export const _WeakMap: any;
export const _WeakMap_prototype: any;
export let events: WeakMap<Event, Event>;
export function hookEvent<T extends EventTarget>(ev: T, event_proxy: (Reflect: typeof _Reflect, name: string) => ProxyHandler<Event>): void;
export const _Proxy: any;
export const _Reflect: typeof Reflect;
export const hookProxies: WeakMap<any, any>;
export function snapshot<T, U, V>(fn: (this: T, ...U: any[]) => V): (self: T, ...U: any[]) => V;
export type SnapshotInput<T, U, V> = (this: T, ...U: any[]) => V;
export type ProtoSnapshot<T> = {
    [Prop in keyof T]: T[Prop] extends SnapshotInput<infer T2, infer U, infer V> ? (self: T2, ...U: any[]) => V : never;
};
export function snapshotProto<T extends object>(val: T): ProtoSnapshot<T>;
export function hook<T extends {
    [a in K]: object;
}, K extends keyof T>(a: T, b: K, c: (Reflect: typeof _Reflect) => ProxyHandler<T[K]>, { isProperty, Proxy }?: {
    isProperty?: boolean;
    Proxy?: typeof _Proxy;
}): void;
export function hookProp<T extends {
    [a in K]: any;
}, K extends keyof T>(a: T, b: K, c: (d: TypedPropertyDescriptor<T[K]> | undefined) => TypedPropertyDescriptor<T[K]>): void;

//# sourceMappingURL=index.d.ts.map
