import type { Plugin } from 'rollup';

import type { GodBlessYourCodeOptions } from './types';
import { detectCodeTypeByExt } from './utils';

import { godBlessYourCode as main } from './';

export function godBlessYourCode(options?: GodBlessYourCodeOptions): Plugin {
    return {
        name: 'god-bless-your-code',
        renderChunk(code, { facadeModuleId }) {
            if (!facadeModuleId) return;
            const result = main(code, detectCodeTypeByExt(facadeModuleId), options);
            if (!result) return;
            return {
                code: result,
                map: null,
            };
        },
    };
}

export {
    godBlessYourCode as bless,
    godBlessYourCode as god,
    godBlessYourCode as godBless,
};
