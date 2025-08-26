import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import {writeFileSync} from 'node:fs';
    
const __dirname = dirname(fileURLToPath(import.meta.url));
const snapshots = [
    {name:"DataView",proto:true},
    {name:"ArrayBuffer",proto:false},
    {name:"Uint8Array", proto:true},
    {name:"WeakMap",proto:true}
]
writeFileSync(`${__dirname}/snap/extras.ts`,`
import { snapshotProto } from "./index.ts";
${snapshots.map(a => `
export const _${a.name} = globalThis?.${a.name};${a.proto ? `
export const _${a.name}_prototype = _${a.name} === undefined ? undefined : snapshotProto(_${a.name}.prototype);` : ''}`).join('\n')}
`.replaceAll('\n\n',"\n"))