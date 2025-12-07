import {
    join,
    resolve,
} from 'node:path';

import { defineConfig } from 'rollup';

// eslint-disable-next-line antfu/no-import-dist
import { godBlessYourCode } from '../../dist/rollup.js';

const dirPath = resolve(import.meta.dirname);

export default defineConfig({
    input: join(dirPath, 'index.mjs'),
    output: {
        dir: join(dirPath, 'dist'),
        format: 'esm',
        plugins: [godBlessYourCode()],
    },
});
