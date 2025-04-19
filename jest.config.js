/** @type {import('jest').Config} */
module.exports = {
    clearMocks: true,
    testEnvironment: 'node',
    transform: {
        '^.+\\.tsx?$': [
            'ts-jest',
            { tsconfig: './tsconfig.jest.json' },
        ],
    },
    workerThreads: true,
};
