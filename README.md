# god-bless-your-code

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

Bless your code with ASCII gods, monsters, and mystical powers — your last line of defense against bugs and angry PMs.

> [!IMPORTANT]
> This plugin does not actually prevent bugs — use at your own (spiritual) discretion.

- [✨ Release Notes](./CHANGELOG.md)

## Features

- 🧘 Add ASCII blessings (Buddha, dragons, magical charms...) into your code
- 🎯 Works as a utility or plugin — compatible with Rollup, Vite, Bun, and more
- 🎲 Random or fixed selection of blessing arts
- ✨ Choose blessing placement: top or bottom of the output
- 🛡️ For spiritual protection only. No guarantees against bugs or cursed deadlines

## Requirements

- **Node.js** `>= 18.12.1`

## Installation

Using [pnpm](https://pnpm.io):

```bash
pnpm add -D god-bless-your-code
```

You can also use `yarn`, `npm`, or `bun`.

## Usage

### Bun

Coming soon.

### Rollup

Here's an example usage in your `rollup.config.mjs` file:

```typescript
import { godBlessYourCode } from 'god-bless-your-code/rollup';
import { defineConfig } from 'rollup';

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
> This is an output plugin. Make sure it's placed in the `output.plugins` array.

You can also import it as follows:

```typescript
import {
    bless,
    god,
    godBless,
} from 'god-bless-your-code/rollup';
```

### Vite

Here's an example usage in your `vite.config.ts` file:

```typescript
import vue from '@vitejs/plugin-vue';
import { godBlessYourCode } from 'god-bless-your-code/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        vue(),
        godBlessYourCode(),
    ],
});
```

You can also import it as follows:

```typescript
import {
    bless,
    god,
    godBless,
} from 'god-bless-your-code/vite';
```

> [!NOTE]
> In order not to make the total size of the output too large, a maximum of three files are processed by default.
>
> This can be adjusted with `options.maxFiles`.

## Available Blessings

Blessing names map to `.txt` files in [`./src/blessing-texts`](./src/blessing-texts).

- alpaca
- buddha-normal
- buddha-with-poetry
- cat
- dragon
- gopher
- guāiguāi

> Blessing sources:
> - https://www.cnblogs.com/ghl1024/p/9082892.html
> - https://github.com/ben-yip/grunt-buddha-bless/blob/master/tasks/asset/alpaca.txt

Feel free to submit more blessing texts!

## License

[MIT License](./LICENSE)

<!-- Badges -->
[npm-version-href]: https://npmjs.com/package/god-bless-your-code
[npm-version-src]: https://img.shields.io/npm/v/god-bless-your-code/latest.svg?colorA=18181b&colorB=28cf8d&style=flat

[npm-downloads-href]: https://npmjs.com/package/god-bless-your-code
[npm-downloads-src]: https://img.shields.io/npm/dm/god-bless-your-code.svg?colorA=18181b&colorB=28cf8d&style=flat

[codecov-href]: https://codecov.io/gh/kiki-kanri/god-bless-your-code
[codecov-src]: https://codecov.io/gh/kiki-kanri/god-bless-your-code/graph/badge.svg?token=x4MtKMBvZZ

[license-href]: https://github.com/kiki-kanri/god-bless-your-code/blob/main/LICENSE
[license-src]: https://img.shields.io/github/license/kiki-kanri/god-bless-your-code?colorA=18181b&colorB=28cf8d&style=flat
