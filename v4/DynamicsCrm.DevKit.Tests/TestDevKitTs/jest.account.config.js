/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/testsAccount', '<rootDir>/test'],
    testMatch: ['**/*.test.ts'],
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'text-summary', 'lcov', 'html'],
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '/testsAccount/'
    ],
    collectCoverageFrom: [
        'lib/devkit.ts',
        'entities/Account.ts',
        'entities/Account.form.ts',
        'entities/Account.webapi.ts',
        '!**/*.d.ts'
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    verbose: true
};

