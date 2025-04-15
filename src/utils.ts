import { extname } from 'node:path';

const htmlExtensions = new Set([
    '.astro',
    '.htm',
    '.html',
    '.marko',
    '.svelte',
    '.vue',
]);

const jsExtensions = new Set([
    '.cjs',
    '.css',
    '.js',
    '.mjs',
    '.ts',
]);

export function detectCodeTypeByExt(id: string): 'html' | 'js' | 'unknown' {
    const ext = extname(id).toLowerCase();
    if (htmlExtensions.has(ext)) return 'html';
    if (jsExtensions.has(ext)) return 'js';
    return 'unknown';
}
