import { readFileSync } from 'node:fs';
import {
    dirname,
    join,
    relative,
} from 'node:path';
import { fileURLToPath } from 'node:url';

// @ts-expect-error Ignore this error.
import micromatch from 'micromatch';
import type { Plugin } from 'rollup';

export type BlessingName =
  | 'buddha-normal'
  | 'buddha-with-poetry';

export interface RollupGodBlessYourCodeOptions {
    blessings?: BlessingName | BlessingName[];
    exclude?: string[];
    include?: string[];
    position?: 'bottom' | 'top';
}

const __dirname = dirname(fileURLToPath(import.meta.url));
const blessingNameToTextMap: Partial<Record<BlessingName, string>> = {};
const defaultBlessings: readonly BlessingName[] = [
    'buddha-normal',
    'buddha-with-poetry',
];

function loadBlessingText(name: BlessingName) {
    if (blessingNameToTextMap[name]) return blessingNameToTextMap[name];
    return blessingNameToTextMap[name] = readFileSync(join(__dirname, 'blessing-texts', `${name}.txt`), 'utf-8').trim();
}

export function godBlessYourCode(options: RollupGodBlessYourCodeOptions = {}): Plugin {
    const {
        blessings = defaultBlessings,
        exclude,
        include,
        position = 'top',
    } = options;

    return {
        name: 'god-bless-your-code',
        renderChunk(code, { facadeModuleId }) {
            if (!facadeModuleId) return;
            const relativeModulePath = relative(process.cwd(), facadeModuleId);
            if (exclude && micromatch.isMatch(relativeModulePath, exclude)) return;
            if (include && !micromatch.isMatch(relativeModulePath, include)) return;
            const chosenBlessingName: BlessingName | undefined = Array.isArray(blessings)
                ? blessings[Math.floor(Math.random() * blessings.length)]
                : blessings;

            if (!chosenBlessingName) return;
            const blessingText = loadBlessingText(chosenBlessingName);
            if (!blessingText) return;
            const finalCode = position === 'top' ? `${blessingText}\n\n${code}` : `${code}\n\n${blessingText}`;
            return { code: finalCode };
        },
    };
}

export {
    godBlessYourCode as bless,
    godBlessYourCode as god,
    godBlessYourCode as godBless,
};
