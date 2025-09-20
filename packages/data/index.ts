export const snapshots: Snapshot[] = [
  { name: "DataView", proto: true },
  { name: "ArrayBuffer", proto: false },
  { name: "Uint8Array", proto: true },
  { name: "WeakMap", proto: true },
  { name: "String", proto: true },
  { name: "Array", proto: true },
  { name: "Function", proto: true },
];
export type Snapshot = { name: string; proto: boolean };
