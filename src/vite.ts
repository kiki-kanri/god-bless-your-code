import type { Plugin } from 'vite';

import type { ViteGodBlessYourCodeOptions } from './types';
import { detectCodeTypeByExt } from './utils';

import { godBlessYourCode as main } from './';

export function godBlessYourCode(options?: ViteGodBlessYourCodeOptions): Plugin {
    let processedFiles = 0;
    const maxFiles = options?.maxFiles === null ? null : options?.maxFiles ?? 3;
    return {
        apply: 'build',
        generateBundle(_, bundle) {
            Object.entries(bundle).forEach(([fileName, file]) => {
                if (maxFiles !== null && processedFiles >= maxFiles) return;
                const codeType = detectCodeTypeByExt(fileName);
                if (file.type === 'chunk') file.code = main(file.code, codeType, options) ?? file.code;
                else if (typeof file.source === 'string') {
                    file.source = main(file.source, codeType, options) ?? file.source;
                }

                processedFiles++;
            });
        },
        name: 'god-bless-your-code',
    };
}

export {
    godBlessYourCode as bless,
    godBlessYourCode as god,
    godBlessYourCode as godBless,
};
