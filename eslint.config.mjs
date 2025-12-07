import { antfu } from '@antfu/eslint-config';
import { createBaseConfigs } from '@kikiutils/eslint-config/base';
import { createVueConfig } from '@kikiutils/eslint-config/vue';

export default antfu(
    {
        type: 'lib',
        typescript: true,
        vue: true,
    },
    createBaseConfigs(),
    createVueConfig(),
    { rules: { 'ts/explicit-function-return-type': 'off' } },
);
