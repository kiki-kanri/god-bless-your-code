export type BlessingName =
  | 'alpaca'
  | 'buddha-normal'
  | 'buddha-with-poetry'
  | 'dragon';

export interface GodBlessYourCodeOptions {
    /**
     * The name or list of blessing(s) to insert.
     * If multiple are provided, one will be chosen at random per file.
     * These should match the filenames (without extension) in the blessing-texts folder.
     *
     * @default
     * [
     *      'alpaca',
     *      'buddha-normal',
     *      'buddha-with-poetry',
     *      'dragon',
     * ]
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
