/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/test/devkit', '<rootDir>/test/account'],
    testMatch: ['**/*.test.ts'],
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'text-summary', 'lcov', 'html'],
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '/test/'
    ],
    collectCoverageFrom: [
        'lib/devkit.ts',
        'entities/**/*.ts',
        '!entities/**/*.d.ts'
    ],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100
        }
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    verbose: true
};
