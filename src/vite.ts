import type { Plugin } from 'vite';

import type { GodBlessYourCodeOptions } from './types';
import { detectCodeTypeByExt } from './utils';

import { godBlessYourCode as main } from './';

export function godBlessYourCode(options?: GodBlessYourCodeOptions): Plugin {
    return {
        apply: 'build',
        generateBundle(_, bundle) {
            Object.entries(bundle).forEach(([fileName, file]) => {
                const codeType = detectCodeTypeByExt(fileName);
                if (file.type === 'chunk') file.code = main(file.code, codeType, options) ?? file.code;
                else if (typeof file.source === 'string') {
                    file.source = main(file.source, codeType, options) ?? file.source;
                }
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
