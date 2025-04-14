import { cpSync } from 'node:fs';

import { defineConfig } from 'ts-project-builder';

let isBlessingTextsCopied = false;

export default defineConfig({
    additionalInputPlugins: {
        afterBuiltIns: [
            {
                name: 'copy-blessing-texts',
                writeBundle() {
                    if (isBlessingTextsCopied) return;
                    isBlessingTextsCopied = true;
                    cpSync('./src/blessing-texts', './dist/blessing-texts', { recursive: true });
                },
            },
        ],
    },
});
