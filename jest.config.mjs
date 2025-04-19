/** @type {import('jest').Config} */
export default {
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
