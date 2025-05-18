import { createConfig } from '@kikiutils/eslint-config';

export default createConfig(
    'node',
    {
        type: 'lib',
        vue: true,
    },
).overrideRules({ 'ts/explicit-function-return-type': 'off' });
