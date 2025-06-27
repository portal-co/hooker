export const _DataView: DataViewConstructor;
export const _DataView_prototype: ProtoSnap<DataView<ArrayBuffer>>;
export const _ArrayBuffer: ArrayBufferConstructor;
export const _Uint8Array: Uint8ArrayConstructor;
export const _Uint8Array_prototype: ProtoSnap<Uint8Array<ArrayBuffer>>;
export let _Proxy: any;
export let _Reflect: typeof Reflect;
export let hookProxies: WeakMap<any, any>;
export function snap<T, U, V>(fn: (this: T, ...U: any[]) => V): (self: T, ...U: any[]) => V;
export type ProtoSnap<T> = {
    [Prop in keyof T]: T[Prop] extends (this: infer T2, ...U: any[]) => infer V ? (self: T2, ...U: any[]) => V : never;
};
export function snapProto<T extends object>(val: T): ProtoSnap<T>;
export function hook<T extends {
    [a in K]: object;
}, K extends keyof T>(a: T, b: K, c: (Reflect: typeof _Reflect) => ProxyHandler<T[K]>): void;
export function hookProp<T extends {
    [a in K]: any;
}, K extends keyof T>(a: T, b: K, c: (d: TypedPropertyDescriptor<T[K]> | undefined) => TypedPropertyDescriptor<T[K]>): void;
export let events: WeakMap<Event, Event>;
export function hookEvent<T extends EventTarget>(ev: T, event_proxy: (Reflect: typeof _Reflect, name: string) => ProxyHandler<Event>): void;

//# sourceMappingURL=index.d.ts.map
