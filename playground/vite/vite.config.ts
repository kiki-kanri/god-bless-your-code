import { resolve } from 'node:path';

import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

// eslint-disable-next-line antfu/no-import-dist
import { godBlessYourCode } from '../../dist/vite';

const dirPath = resolve(import.meta.dirname);

export default defineConfig({
    plugins: [
        vue(),
        godBlessYourCode(),
    ],
    root: dirPath,
});
