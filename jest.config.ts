import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@stainless-temp/riza-api$': '<rootDir>/src/index.ts',
    '^@stainless-temp/riza-api/_shims/auto/(.*)$': '<rootDir>/src/_shims/auto/$1-node',
    '^@stainless-temp/riza-api/(.*)$': '<rootDir>/src/$1',
  },
  modulePathIgnorePatterns: [
    '<rootDir>/ecosystem-tests/',
    '<rootDir>/dist/',
    '<rootDir>/deno/',
    '<rootDir>/deno_tests/',
  ],
};

export default config;
