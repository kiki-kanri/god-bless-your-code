import { readFileSync } from 'node:fs';
import {
    dirname,
    join,
} from 'node:path';
import { fileURLToPath } from 'node:url';

import { defaultBlessings } from './constants';
import type {
    BlessingName,
    GodBlessYourCodeOptions,
} from './types';

export type * from './types';

const __dirname = dirname(fileURLToPath(import.meta.url));
const blessingNameToTextMap: Partial<Record<BlessingName, string>> = {};
const blessingTextsDirPath = join(__dirname, 'blessing-texts');

export function godBlessYourCode(
    code: string,
    codeType: 'css' | 'html' | 'js' | 'ts' | 'unknown',
    options: Pick<GodBlessYourCodeOptions, 'blessings' | 'position'> = {},
) {
    const { blessings = defaultBlessings } = options;
    const chosenBlessingName: BlessingName | undefined = Array.isArray(blessings)
        ? blessings[Math.floor(Math.random() * blessings.length)]
        : blessings;

    if (!chosenBlessingName) return;
    let blessingText = loadBlessingText(chosenBlessingName);
    if (!blessingText) return;
    const wrap = (content: string) => {
        switch (codeType) {
            case 'css':
            case 'js':
            case 'ts': return `/*\n${content}\n*/`;
            case 'html': return `<!--\n${content}\n-->`;
            default: return `/*\n${content}\n*/`;
        }
    };

    blessingText = wrap(blessingText);
    return options.position === 'bottom' ? `${code}\n\n${blessingText}` : `${blessingText}\n\n${code}`;
}

export function loadBlessingText(name: BlessingName) {
    if (blessingNameToTextMap[name]) return blessingNameToTextMap[name];
    return blessingNameToTextMap[name] = readFileSync(join(blessingTextsDirPath, `${name}.txt`), 'utf-8').trimEnd();
}
