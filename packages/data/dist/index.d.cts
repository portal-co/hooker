export declare const snapshots: Snapshot[];
export type Snapshot = {
    name: string;
    proto: boolean;
    props?: boolean;
};
/**
 * Generate the content for `packages/snap/extras.ts` from a snapshot list.
 * This returns a TypeScript source string that downstream packages can write
 * out. The function is intentionally lightweight so callers can post-process
 * or change paths as needed.
 */
export declare function generateExtras(snapshots: Snapshot[], { rootPath }?: {
    rootPath?: string;
}): string;
