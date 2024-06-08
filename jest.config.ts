import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/test/**/*.test.ts'],
    transform: {
        '^.+\\.ts$': [
            'ts-jest',
            {
                tsconfig: 'tsconfig.json',
            },
        ],
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/*',
    },
};

export default config;
