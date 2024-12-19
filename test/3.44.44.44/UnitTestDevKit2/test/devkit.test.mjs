import { expect } from 'chai';
import { readFileSync } from 'fs';
import { join } from 'path';
import vm from 'vm';

// Load the devkit.js file
const devkitPath = join(process.cwd(), 'lib/devkit.js');
const devkitScript = readFileSync(devkitPath, 'utf8');

// Create a sandbox and evaluate the script within it
const sandbox = {};
vm.createContext(sandbox); // Contextify the sandbox
vm.runInContext(devkitScript, sandbox); // Evaluate the script in the sandbox

const devKit = sandbox.devKit;
const OptionSet = sandbox.OptionSet;

describe('devKit', function() {
    describe('Add', function() {
        it('should add two numbers correctly', function() {
            const result = devKit.Add(2, 3);
            expect(result).to.equal(5);
        });

        it('should return correct sum for negative numbers', function() {
            const result = devKit.Add(-2, -3);
            expect(result).to.equal(-5);
        });

        it('should return correct sum for mixed positive and negative numbers', function() {
            const result = devKit.Add(-2, 3);
            expect(result).to.equal(1);
        });
    });

    describe('Subtract', function() {
        it('should subtract two numbers correctly', function() {
            const result = devKit.Subtract(5, 3);
            expect(result).to.equal(2);
        });

        it('should return correct difference for negative numbers', function() {
            const result = devKit.Subtract(-5, -3);
            expect(result).to.equal(-2);
        });

        it('should return correct difference for mixed positive and negative numbers', function() {
            const result = devKit.Subtract(-5, 3);
            expect(result).to.equal(-8);
        });
    });

    describe('Add2', function() {
        it('should add two numbers correctly', function() {
            const result = devKit.Add2(2, 3);
            expect(result).to.equal(5);
        });

        it('should return correct sum for negative numbers', function() {
            const result = devKit.Add2(-2, -3);
            expect(result).to.equal(-5);
        });

        it('should return correct sum for mixed positive and negative numbers', function() {
            const result = devKit.Add2(-2, 3);
            expect(result).to.equal(1);
        });
    });
});

describe('OptionSet', function() {
    it('should have correct values for FormType', function() {
        expect(OptionSet.FormType.Undefined).to.equal(0);
        expect(OptionSet.FormType.Create).to.equal(1);
        expect(OptionSet.FormType.Update).to.equal(2);
        expect(OptionSet.FormType.ReadOnly).to.equal(3);
        expect(OptionSet.FormType.Disabled).to.equal(4);
        expect(OptionSet.FormType.BulkEdit).to.equal(5);
    });
});
