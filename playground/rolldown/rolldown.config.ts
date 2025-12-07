import {
    join,
    resolve,
} from 'node:path';

import { defineConfig } from 'rolldown';

import { godBlessYourCode } from '../../src/rollup';

const dirPath = resolve(import.meta.dirname);

export default defineConfig({
    input: join(dirPath, 'index.mjs'),
    output: {
        dir: join(dirPath, 'dist'),
        format: 'esm',
        plugins: [godBlessYourCode()],
    },
});
