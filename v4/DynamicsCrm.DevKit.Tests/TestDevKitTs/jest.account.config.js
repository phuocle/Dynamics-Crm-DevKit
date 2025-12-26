/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/testsAccount'],
    testMatch: ['**/*.test.ts'],
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'text-summary', 'lcov', 'html'],
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '/testsAccount/',
        '/test/'
    ],
    collectCoverageFrom: [
        'lib/devkit.ts',
        'entities/Account.ts',
        'entities/generator/Account.form.ts',
        'entities/generator/Account.webapi.ts',
        '!**/*.d.ts'
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    verbose: true
};
