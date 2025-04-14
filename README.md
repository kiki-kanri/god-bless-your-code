# rollup-plugin-god-bless-your-code

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

A Rollup plugin that blesses your code with ASCII gods, monsters, and mystical powers. Your last defense against production bugs and angry PMs.

> [!IMPORTANT]
> This plugin does not actually prevent bugs — use at your own (spiritual) discretion.

- [✨ Release Notes](./CHANGELOG.md)

## Features

- 🧘 Injects ASCII blessings (Buddha, dragons, magical charms...) into your code
- 🎯 Supports per-file control via `include` / `exclude` options
- 🎲 Random or fixed selection of blessing arts
- ✨ Choose blessing placement: top or bottom of the output file
- 🛡️ For spiritual protection only. Not liable for bugs.

## Requirements

- **Node.js** `>= 18.12.1`

## Installation

Using [pnpm](https://pnpm.io):

```bash
pnpm add -D rollup-plugin-god-bless-your-code
```

You can also use `yarn`, `npm`, or `bun`.

## Usage

Here's and example usage in your `rollup.config.mjs` file:

```typescript
import { defineConfig } from 'rollup';
import { godBlessYourCode } from 'rollup-plugin-god-bless-your-code';

export default defineConfig({
    input: './src/index.ts',
    output: [
        {
            file: './dist/index.cjs',
            format: 'cjs',
            plugins: [godBlessYourCode()],
        },
        {
            file: './dist/index.mjs',
            format: 'esm',
            plugins: [godBlessYourCode()],
        },
    ],
});
```

> [!IMPORTANT]
> This is an output plugin. Make sure it's placed in the output plugins array.

You can also import it as:

```typescript
import {
    bless,
    god,
    godBless,
} from 'rollup-plugin-god-bless-your-code';
```

## Available Blessings

Blessing names map to `.txt` files in [`./src/blessing-texts`](./src/blessing-texts).

- alpaca
- buddha-normal
- buddha-with-poetry
- dragon

> Blessing sources:
> - https://www.cnblogs.com/ghl1024/p/9082892.html
> - https://github.com/ben-yip/grunt-buddha-bless/blob/master/tasks/asset/alpaca.txt

## License

[MIT License](./LICENSE)

<!-- Badges -->
[npm-version-href]: https://npmjs.com/package/rollup-plugin-god-bless-your-code
[npm-version-src]: https://img.shields.io/npm/v/rollup-plugin-god-bless-your-code/latest.svg?style=flat&colorA=18181B&colorB=28CF8D

[npm-downloads-href]: https://npmjs.com/package/rollup-plugin-god-bless-your-code
[npm-downloads-src]: https://img.shields.io/npm/dm/rollup-plugin-god-bless-your-code.svg?style=flat&colorA=18181B&colorB=28CF8D

[license-href]: https://github.com/kiki-kanri/rollup-plugin-god-bless-your-code/blob/main/LICENSE
[license-src]: https://img.shields.io/npm/l/rollup-plugin-god-bless-your-code.svg?style=flat&colorA=18181B&colorB=28CF8D
