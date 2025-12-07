# Changelog

## v0.6.0

[compare changes](https://github.com/kiki-kanri/god-bless-your-code/compare/v0.5.0...v0.6.0)

### 🚀 Enhancements

- Add `update-peer-dependencies-meta.ts` ([643c006](https://github.com/kiki-kanri/god-bless-your-code/commit/643c006))

### 🩹 Fixes

- Resolve alias configuration error in tsdown setup ([656e2e0](https://github.com/kiki-kanri/god-bless-your-code/commit/656e2e0))
- Add missing -b flag to typecheck command ([cf0c795](https://github.com/kiki-kanri/god-bless-your-code/commit/cf0c795))
- Remove custom exports configuration from tsdown ([efb18bc](https://github.com/kiki-kanri/god-bless-your-code/commit/efb18bc))
- Remove tsdown `remove-types-js` plugin ([6922c2f](https://github.com/kiki-kanri/god-bless-your-code/commit/6922c2f))
- Remove tsdown remove-types-js plugin and custom exports configuration ([735a3a9](https://github.com/kiki-kanri/god-bless-your-code/commit/735a3a9))
- Ensure tsdown `customExports` returns after deleting keys containing internals ([7324bab](https://github.com/kiki-kanri/god-bless-your-code/commit/7324bab))

### 💅 Refactors

- **tsconfig:** Separate references so src and tests use different settings ([df472e2](https://github.com/kiki-kanri/god-bless-your-code/commit/df472e2))
- Rename func parameters in `arr.map` and similar methods to `item` for consistency ([c5768ac](https://github.com/kiki-kanri/god-bless-your-code/commit/c5768ac))
- Tidy up code ([1a92f2c](https://github.com/kiki-kanri/god-bless-your-code/commit/1a92f2c))

### 📖 Documentation

- Update README ([63ba464](https://github.com/kiki-kanri/god-bless-your-code/commit/63ba464))
- Update README ([eb8eefe](https://github.com/kiki-kanri/god-bless-your-code/commit/eb8eefe))

### 📦 Build

- ⚠️  Switch builder to tsdown and convert package to pure ESM ([d307be4](https://github.com/kiki-kanri/god-bless-your-code/commit/d307be4))
- Clean up js files under `dist/types` after tsdown build and update exports config ([2affd31](https://github.com/kiki-kanri/god-bless-your-code/commit/2affd31))
- Clean up js files under `dist/types` after tsdown build and update exports config ([299e647](https://github.com/kiki-kanri/god-bless-your-code/commit/299e647))
- Clean up js files under `dist/types` after tsdown build and update exports config ([6fa1d2b](https://github.com/kiki-kanri/god-bless-your-code/commit/6fa1d2b))
- Update tsdown config to treat all dependencies as external ([f5e4f7a](https://github.com/kiki-kanri/god-bless-your-code/commit/f5e4f7a))
- Update tsdown customExports to remove entries with keys containing "internals" ([59b1622](https://github.com/kiki-kanri/god-bless-your-code/commit/59b1622))
- Update tsdown entry ([2e67d6b](https://github.com/kiki-kanri/god-bless-your-code/commit/2e67d6b))
- Set tsdown external from package.json instead of using wildcard * ([7dc5f28](https://github.com/kiki-kanri/god-bless-your-code/commit/7dc5f28))
- Update `customExports` rules to enable IDE import hints for package usage ([e4111c0](https://github.com/kiki-kanri/god-bless-your-code/commit/e4111c0))
- Update `customExports` rules to enable IDE import hints for package usage ([fa88888](https://github.com/kiki-kanri/god-bless-your-code/commit/fa88888))

### 🏡 Chore

- Upgrade dependencies and remove `@types/node` ([32aaf31](https://github.com/kiki-kanri/god-bless-your-code/commit/32aaf31))
- Wrap all variable expansions in scripts with `${}` ([82c47c9](https://github.com/kiki-kanri/god-bless-your-code/commit/82c47c9))
- Update dependencies and modify scripts ([374cc56](https://github.com/kiki-kanri/god-bless-your-code/commit/374cc56))
- ⚠️  Drop support for Node.js 18.12.1, set minimum supported version to 20 ([32c6ad3](https://github.com/kiki-kanri/god-bless-your-code/commit/32c6ad3))
- Bump tsconfig target to es2023 ([b9185b7](https://github.com/kiki-kanri/god-bless-your-code/commit/b9185b7))
- Update `.gitignore` ([1465997](https://github.com/kiki-kanri/god-bless-your-code/commit/1465997))
- **ci:** Configure pnpm cache in workflow ([79e2264](https://github.com/kiki-kanri/god-bless-your-code/commit/79e2264))
- **ci:** Remove pnpm cache configure in workflow ([abc0801](https://github.com/kiki-kanri/god-bless-your-code/commit/abc0801))
- ⚠️  Drop support for Node.js 20, set minimum supported version to 22 ([3319820](https://github.com/kiki-kanri/god-bless-your-code/commit/3319820))
- Upgrade devDependencies ([57244a0](https://github.com/kiki-kanri/god-bless-your-code/commit/57244a0))
- Set tsdown alias and tsconfig paths ([be49779](https://github.com/kiki-kanri/god-bless-your-code/commit/be49779))
- Update tsdown config ([fc9e7cb](https://github.com/kiki-kanri/god-bless-your-code/commit/fc9e7cb))
- Add `tsconfig.base.json` ([f6ba6dd](https://github.com/kiki-kanri/god-bless-your-code/commit/f6ba6dd))
- Update eslint config ([99cd82e](https://github.com/kiki-kanri/god-bless-your-code/commit/99cd82e))
- Update tsdown entry ([9cbb6bb](https://github.com/kiki-kanri/god-bless-your-code/commit/9cbb6bb))
- Disable `isolatedDeclarations` ([85f066e](https://github.com/kiki-kanri/god-bless-your-code/commit/85f066e))
- Update eslint config ([09d584b](https://github.com/kiki-kanri/god-bless-your-code/commit/09d584b))
- Update all scripts ([fa5e797](https://github.com/kiki-kanri/god-bless-your-code/commit/fa5e797))
- Set minimum supported version to 22.12.0 ([76e8cc1](https://github.com/kiki-kanri/god-bless-your-code/commit/76e8cc1))
- Remove alias config ([e353604](https://github.com/kiki-kanri/god-bless-your-code/commit/e353604))
- Change `update-peer-dependencies-meta.ts` to non-executable permission file ([62a7690](https://github.com/kiki-kanri/god-bless-your-code/commit/62a7690))
- Update base tsconfig ([26f4158](https://github.com/kiki-kanri/god-bless-your-code/commit/26f4158))
- Add `.editorconfig` ([11056ce](https://github.com/kiki-kanri/god-bless-your-code/commit/11056ce))
- Upgrade devDependencies ([aca04e8](https://github.com/kiki-kanri/god-bless-your-code/commit/aca04e8))
- Replace `@kikiutils/changelogen` with `changelogen` ([8d1d648](https://github.com/kiki-kanri/god-bless-your-code/commit/8d1d648))
- Update script ([44312fb](https://github.com/kiki-kanri/god-bless-your-code/commit/44312fb))
- Update `pnpm.onlyBuiltDependencies` ([9788a78](https://github.com/kiki-kanri/god-bless-your-code/commit/9788a78))
- Update tsdown config ([59407a9](https://github.com/kiki-kanri/god-bless-your-code/commit/59407a9))
- Disable tsdown `fixedExtension` config ([9039405](https://github.com/kiki-kanri/god-bless-your-code/commit/9039405))
- Update eslint config ([e75c3d7](https://github.com/kiki-kanri/god-bless-your-code/commit/e75c3d7))
- Remove all files ([1c5ae5e](https://github.com/kiki-kanri/god-bless-your-code/commit/1c5ae5e))
- Add base files ([238a594](https://github.com/kiki-kanri/god-bless-your-code/commit/238a594))
- Update LICENSE ([caf104e](https://github.com/kiki-kanri/god-bless-your-code/commit/caf104e))
- Remove tslib dep ([bc69e27](https://github.com/kiki-kanri/god-bless-your-code/commit/bc69e27))
- Revert CHANGELOG ([f30db1a](https://github.com/kiki-kanri/god-bless-your-code/commit/f30db1a))
- Enable vue eslint rules ([a874feb](https://github.com/kiki-kanri/god-bless-your-code/commit/a874feb))

### ✅ Tests

- Change vitest config file to mjs ([5c3bc1f](https://github.com/kiki-kanri/god-bless-your-code/commit/5c3bc1f))
- Fix vitest config to correctly load tsconfig and aliases ([0522f79](https://github.com/kiki-kanri/god-bless-your-code/commit/0522f79))

### 🤖 CI

- Set `--prod=false` when install dependencies ([93d7945](https://github.com/kiki-kanri/god-bless-your-code/commit/93d7945))
- Remove `--prod=false` flag when install dependencies ([249def0](https://github.com/kiki-kanri/god-bless-your-code/commit/249def0))
- Update config file ([cfba23c](https://github.com/kiki-kanri/god-bless-your-code/commit/cfba23c))

#### ⚠️ Breaking Changes

- ⚠️  Switch builder to tsdown and convert package to pure ESM ([d307be4](https://github.com/kiki-kanri/god-bless-your-code/commit/d307be4))
- ⚠️  Drop support for Node.js 18.12.1, set minimum supported version to 20 ([32c6ad3](https://github.com/kiki-kanri/god-bless-your-code/commit/32c6ad3))
- ⚠️  Drop support for Node.js 20, set minimum supported version to 22 ([3319820](https://github.com/kiki-kanri/god-bless-your-code/commit/3319820))

### ❤️ Contributors

- Kiki-kanri

## v0.5.0

[compare changes](https://github.com/kiki-kanri/god-bless-your-code/compare/v0.4.0...v0.5.0)

### 🚀 Enhancements

- Add `cat` blessing text ([c3ca302](https://github.com/kiki-kanri/god-bless-your-code/commit/c3ca302))

### 🏡 Chore

- Split `tsconfig` and create build-specific config for production builds ([564b6d2](https://github.com/kiki-kanri/god-bless-your-code/commit/564b6d2))
- **vitest:** Configure coverage to collect files only under `src/` ([e2c7f65](https://github.com/kiki-kanri/god-bless-your-code/commit/e2c7f65))

### ❤️ Contributors

- kiki-kanri

## v0.4.0

[compare changes](https://github.com/kiki-kanri/god-bless-your-code/compare/v0.3.0...v0.4.0)

### 🚀 Enhancements

- **vite:** Add `maxFiles` option to limit number of files to process ([fe3aea0](https://github.com/kiki-kanri/god-bless-your-code/commit/fe3aea0))

### 📖 Documentation

- Update README badges urls ([499bc71](https://github.com/kiki-kanri/god-bless-your-code/commit/499bc71))
- Replace `%2F` with `/` in badge URLs in README ([4aaf916](https://github.com/kiki-kanri/god-bless-your-code/commit/4aaf916))
- Update README ([dd5a44a](https://github.com/kiki-kanri/god-bless-your-code/commit/dd5a44a))

### 🏡 Chore

- Update `modify-files-permissions.sh` ([89f72e3](https://github.com/kiki-kanri/god-bless-your-code/commit/89f72e3))
- Upgrade dependencies and format code ([af0ac5c](https://github.com/kiki-kanri/god-bless-your-code/commit/af0ac5c))
- Add option to `upgrade-dependencies.sh` to clean `node_modules` and `pnpm-lock.yaml` before upgrading ([e542b14](https://github.com/kiki-kanri/god-bless-your-code/commit/e542b14))
- Upgrade dependencies ([d3ee5a7](https://github.com/kiki-kanri/god-bless-your-code/commit/d3ee5a7))
- Ensure all scripts change to their own directory before execution ([9be5fbf](https://github.com/kiki-kanri/god-bless-your-code/commit/9be5fbf))
- Update ignore files ([c81c294](https://github.com/kiki-kanri/god-bless-your-code/commit/c81c294))
- **scripts:** Ensure all scripts `cd` to their current directory correctly ([5362c3b](https://github.com/kiki-kanri/god-bless-your-code/commit/5362c3b))
- Set `--max-warnings=0` for `lint` and `lint:fix` ([bffe476](https://github.com/kiki-kanri/god-bless-your-code/commit/bffe476))
- Upgrade dependencies ([a94c38b](https://github.com/kiki-kanri/god-bless-your-code/commit/a94c38b))
- Set eslint config to enable `lib` mode ([59e03e4](https://github.com/kiki-kanri/god-bless-your-code/commit/59e03e4))
- Disable `ts/explicit-function-return-type` eslint rule ([5190f6b](https://github.com/kiki-kanri/god-bless-your-code/commit/5190f6b))
- Lint code ([f8f0974](https://github.com/kiki-kanri/god-bless-your-code/commit/f8f0974))
- **test:** Migrate from `jest` to `vitest` ([9a9d869](https://github.com/kiki-kanri/god-bless-your-code/commit/9a9d869))
- Upgrade dependencies ([4775a93](https://github.com/kiki-kanri/god-bless-your-code/commit/4775a93))

### 🤖 CI

- Update test workflow ([1519e46](https://github.com/kiki-kanri/god-bless-your-code/commit/1519e46))
- Update condition for uploading to Codecov in workflow job ([39851ac](https://github.com/kiki-kanri/god-bless-your-code/commit/39851ac))

### ❤️ Contributors

- kiki-kanri

## v0.3.0

[compare changes](https://github.com/kiki-kanri/god-bless-your-code/compare/v0.2.1...v0.3.0)

### 🚀 Enhancements

- Add english to `buddha-with-poetry` blessing text ([639959c](https://github.com/kiki-kanri/god-bless-your-code/commit/639959c))
- Add Vite plugin and corresponding playground test files ([d079f96](https://github.com/kiki-kanri/god-bless-your-code/commit/d079f96))
- Add more blessing texts ([7ed430b](https://github.com/kiki-kanri/god-bless-your-code/commit/7ed430b))

### 💅 Refactors

- Simplify some functions ([20aa66c](https://github.com/kiki-kanri/god-bless-your-code/commit/20aa66c))
- Simplify code after disabling `isolatedDeclarations` in tsconfig ([18b474c](https://github.com/kiki-kanri/god-bless-your-code/commit/18b474c))
- ⚠️ Temporarily remove exclude and include options ([726c6a3](https://github.com/kiki-kanri/god-bless-your-code/commit/726c6a3))

### 📖 Documentation

- Fix incorrect links in CHANGELOG ([c2beb23](https://github.com/kiki-kanri/god-bless-your-code/commit/c2beb23))
- Update README ([6b789b0](https://github.com/kiki-kanri/god-bless-your-code/commit/6b789b0))
- Update README and package keywords ([05af1d0](https://github.com/kiki-kanri/god-bless-your-code/commit/05af1d0))

### 📦 Build

- Avoid using glob paths in build script ([f1fef1d](https://github.com/kiki-kanri/god-bless-your-code/commit/f1fef1d))

### 🏡 Chore

- Upgrade dependencies ([f5a0f69](https://github.com/kiki-kanri/god-bless-your-code/commit/f5a0f69))
- Upgrade dependencies ([29085c8](https://github.com/kiki-kanri/god-bless-your-code/commit/29085c8))
- Enable `isolatedDeclarations` in tsconfig and update code ([2ecc653](https://github.com/kiki-kanri/god-bless-your-code/commit/2ecc653))
- Upgrade dependencies ([e7573e4](https://github.com/kiki-kanri/god-bless-your-code/commit/e7573e4))
- Format script ([16ca049](https://github.com/kiki-kanri/god-bless-your-code/commit/16ca049))
- Update file permissions after installing or updating dependencies ([d141f76](https://github.com/kiki-kanri/god-bless-your-code/commit/d141f76))
- Add `--hideAuthorEmail` flag to bumplog command ([382091b](https://github.com/kiki-kanri/god-bless-your-code/commit/382091b))
- Add typecheck command to package.json scripts ([2a1f7e0](https://github.com/kiki-kanri/god-bless-your-code/commit/2a1f7e0))
- Format code ([88f04a0](https://github.com/kiki-kanri/god-bless-your-code/commit/88f04a0))
- Update package.json scripts field ([41b0f2d](https://github.com/kiki-kanri/god-bless-your-code/commit/41b0f2d))
- Rename `jest.config.js` to `jest.config.mjs` ([76371a1](https://github.com/kiki-kanri/god-bless-your-code/commit/76371a1))
- Reorder lint, test, and build steps in release command ([b63dcb4](https://github.com/kiki-kanri/god-bless-your-code/commit/b63dcb4))
- Disable `isolatedDeclarations` in tsconfig ([ed1636f](https://github.com/kiki-kanri/god-bless-your-code/commit/ed1636f))
- Add live testing functionality for Rollup output ([f2d159d](https://github.com/kiki-kanri/god-bless-your-code/commit/f2d159d))
- Add Vite-related build configurations ([ea8b721](https://github.com/kiki-kanri/god-bless-your-code/commit/ea8b721))

### ✅ Tests

- Add pass test unit ([d7b98bd](https://github.com/kiki-kanri/god-bless-your-code/commit/d7b98bd))

### 🤖 CI

- Add test github workflow config file ([dd421d1](https://github.com/kiki-kanri/god-bless-your-code/commit/dd421d1))

#### ⚠️ Breaking Changes

- ⚠️ Temporarily remove exclude and include options ([726c6a3](https://github.com/kiki-kanri/god-bless-your-code/commit/726c6a3))

### ❤️ Contributors

- kiki-kanri

## v0.2.1

[compare changes](https://github.com/kiki-kanri/god-bless-your-code/compare/v0.2.0...v0.2.1)

### 🩹 Fixes

- Preserve leading whitespace in `loadBlessingText` ([aae640d](https://github.com/kiki-kanri/god-bless-your-code/commit/aae640d))

### 📖 Documentation

- Update README and package description ([1bc9cef](https://github.com/kiki-kanri/god-bless-your-code/commit/1bc9cef))

### 🏡 Chore

- Upgrade dependencies ([b634149](https://github.com/kiki-kanri/god-bless-your-code/commit/b634149))

### ❤️ Contributors

- kiki-kanri

## v0.2.0

[compare changes](https://github.com/kiki-kanri/god-bless-your-code/compare/v0.1.1...v0.2.0)

### 🚀 Enhancements

- Add english to `buddha-normal` blessing text ([327d61e](https://github.com/kiki-kanri/god-bless-your-code/commit/327d61e))
- Add more blessing texts ([fab3d44](https://github.com/kiki-kanri/god-bless-your-code/commit/fab3d44))
- ⚠️ Refactor and restructure core logic and plugin ([cae0015](https://github.com/kiki-kanri/god-bless-your-code/commit/cae0015))

### 📦 Build

- Remove `--preserve-modules` flag from build script ([1214a74](https://github.com/kiki-kanri/god-bless-your-code/commit/1214a74))

### 🏡 Chore

- Upgrade dependencies ([41e694c](https://github.com/kiki-kanri/god-bless-your-code/commit/41e694c))
- ⚠️ Rename package to `god-bless-your-code` ([8cfa021](https://github.com/kiki-kanri/god-bless-your-code/commit/8cfa021))

#### ⚠️ Breaking Changes

- ⚠️ Refactor and restructure core logic and plugin ([cae0015](https://github.com/kiki-kanri/god-bless-your-code/commit/cae0015))
- ⚠️ Rename package to `god-bless-your-code` ([8cfa021](https://github.com/kiki-kanri/god-bless-your-code/commit/8cfa021))

### ❤️ Contributors

- kiki-kanri

## v0.1.1

[compare changes](https://github.com/kiki-kanri/god-bless-your-code/compare/v0.1.0...v0.1.1)

### 🩹 Fixes

- Add missing `map` field to return value in `renderChunk` ([b3450de](https://github.com/kiki-kanri/god-bless-your-code/commit/b3450de))

### 📦 Build

- Apply this plugin to itself during build ([985b514](https://github.com/kiki-kanri/god-bless-your-code/commit/985b514))

### ❤️ Contributors

- kiki-kanri

## v0.1.0

[compare changes](https://github.com/kiki-kanri/god-bless-your-code/compare/662e280...v0.1.0)

### 🚀 Enhancements

- Add core functionality ([9564de0](https://github.com/kiki-kanri/god-bless-your-code/commit/9564de0))
- Add more blessing texts ([85ca49a](https://github.com/kiki-kanri/god-bless-your-code/commit/85ca49a))

### 💅 Refactors

- Remove default export ([99ce2a5](https://github.com/kiki-kanri/god-bless-your-code/commit/99ce2a5))

### 📖 Documentation

- Add README and set `description` in package.json ([bfa0862](https://github.com/kiki-kanri/god-bless-your-code/commit/bfa0862))
- Update README and comments in `RollupGodBlessYourCodeOptions` ([4269145](https://github.com/kiki-kanri/god-bless-your-code/commit/4269145))

### 📦 Build

- Copy `src/blessing-texts` to dist after build ([7e72f77](https://github.com/kiki-kanri/god-bless-your-code/commit/7e72f77))

### 🏡 Chore

- Add required dependencies ([535db6e](https://github.com/kiki-kanri/god-bless-your-code/commit/535db6e))
- Update keywords in package.json ([deaea3f](https://github.com/kiki-kanri/god-bless-your-code/commit/deaea3f))
- Format code and add `--hideAuthorEmail` flag to `bumplog` script in package.json ([3f0e7e6](https://github.com/kiki-kanri/god-bless-your-code/commit/3f0e7e6))

### ❤️ Contributors

- kiki-kanri
