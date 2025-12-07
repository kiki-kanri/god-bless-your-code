import type { defaultBlessings } from '../constants';

export type BlessingName =
  | 'alpaca'
  | 'buddha-normal'
  | 'buddha-with-poetry'
  | 'cat'
  | 'dragon'
  | 'gopher'
  | 'guāiguāi';

export type DoNotRemoveOrUseThisType = typeof defaultBlessings;

export interface GodBlessYourCodeOptions {
    /**
     * The name or list of blessing(s) to insert.
     * If multiple are provided, one will be chosen at random per file.
     * These should match the filenames (without extension) in the blessing-texts folder.
     *
     * The default value is {@link defaultBlessings}.
     */
    blessings?: BlessingName | BlessingName[];

    /**
     * Where to insert the blessing: at the top or bottom of the output file.
     *
     * @default 'top'
     */
    position?: 'bottom' | 'top';
}

export interface ViteGodBlessYourCodeOptions extends GodBlessYourCodeOptions {
    /**
     * The maximum number of files to process. Set to `null` for no limit.
     *
     * @default 3
     */
    maxFiles?: null | number;
}
