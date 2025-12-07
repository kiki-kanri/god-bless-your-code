import {
    glob,
    rm,
} from 'node:fs/promises';

import { defineConfig } from 'tsdown';

import packageJson from './package.json' with { type: 'json' };

interface PackageJsonExportEntry {
    import: null | string;
    require: null | string;
    types: null | string;
}

export default defineConfig({
    clean: true,
    dts: true,
    entry: ['./src/index.ts'],
    exports: {
        customExports(exports) {
            Object.entries(exports).forEach(([key, value]: [string, string]) => {
                if (key === './package.json') return;
                const newExports: PackageJsonExportEntry = {
                    /* eslint-disable perfectionist/sort-objects */
                    types: null,
                    import: null,
                    require: null,
                    /* eslint-enable perfectionist/sort-objects */
                };

                if (!value.includes('internals')) {
                    if (!value.endsWith('index.js')) return delete exports[key];
                    exports[`${key}/index`] = { ...newExports };
                    newExports.types = value.replace(/\.js$/, '.d.ts');
                    if (!value.startsWith('./dist/types')) newExports.import = value;
                }

                exports[key] = newExports;
            });

            // TODO: automatically add `./dist/*.js` from entry
            exports['./*'] = './dist/*.js';
            const sortedExports: Record<string, PackageJsonExportEntry> = {};
            Object.entries(exports).sort().forEach(([key, value]) => sortedExports[key] = value);
            return sortedExports;
        },
    },
    external: [
        ...new Set([
            // eslint-disable-next-line ts/ban-ts-comment
            // @ts-ignore
            ...Object.keys(packageJson.dependencies || {}),
            ...Object.keys(packageJson.devDependencies || {}),
            // eslint-disable-next-line ts/ban-ts-comment
            // @ts-ignore
            ...Object.keys(packageJson.peerDependencies || {}),
        ]),
    ],
    fixedExtension: false,
    format: 'esm',
    plugins: [
        {
            name: 'remove-types-js',
            async writeBundle() {
                const filePaths = [];
                for await (const filePath of glob('./dist/types/**/*.js')) filePaths.push(filePath);
                await Promise.all(filePaths.map((filePath) => rm(filePath, { force: true })));
            },
        },
    ],
    publint: true,
    sourcemap: true,
    tsconfig: './tsconfig.build.json',
    unbundle: true,
    unused: true,
});
