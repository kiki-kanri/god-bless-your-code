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
    /**
     * The name or list of blessing(s) to insert.
     * If multiple are provided, one will be chosen at random per file.
     * These should match the filenames (without extension) in the blessing-texts folder.
     *
     * @default ['buddha-normal', 'buddha-with-poetry']
     */
    blessings?: BlessingName | BlessingName[];

    /**
     * Glob patterns to exclude files from being blessed.
     * Matches are checked against the relative path of the original input file.
     */
    exclude?: string[];

    /**
     * Glob patterns to include files for blessing.
     * If provided, only matched files will be processed.
     * Matches are checked against the relative path of the original input file.
     */
    include?: string[];

    /**
     * Where to insert the blessing: at the top or bottom of the output file.
     *
     * @default 'top'
     */
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
