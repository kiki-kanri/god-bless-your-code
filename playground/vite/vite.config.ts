import { resolve } from 'node:path';

import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

import { godBlessYourCode } from '../../src/vite';

const dirPath = resolve(import.meta.dirname);

export default defineConfig({
    plugins: [
        vue(),
        godBlessYourCode(),
    ],
    root: dirPath,
});
