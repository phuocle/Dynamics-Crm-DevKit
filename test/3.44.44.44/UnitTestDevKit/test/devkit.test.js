import devKit from '../lib/devkit.mjs';

describe('devKit', () => {
    describe('Add', () => {
        test('should add two numbers correctly', () => {
            expect(devKit.Add(1, 2)).toBe(3);
            expect(devKit.Add(-1, -1)).toBe(-2);
            expect(devKit.Add(0, 0)).toBe(0);
        });
    });

    describe('Subtract', () => {
        test('should subtract two numbers correctly', () => {
            expect(devKit.Subtract(3, 2)).toBe(1);
            expect(devKit.Subtract(-1, -1)).toBe(0);
            expect(devKit.Subtract(0, 0)).toBe(0);
        });
    });

    describe('Add2', () => {
        test('should add two numbers correctly', () => {
            expect(devKit.Add2(1, 2)).toBe(3);
            expect(devKit.Add2(-1, -1)).toBe(-2);
            expect(devKit.Add2(0, 0)).toBe(0);
        });
    });

    describe('OptionSet', () => {
        test('should have correct FormType values', () => {
            expect(devKit.OptionSet.FormType.Undefined).toBe(0);
            expect(devKit.OptionSet.FormType.Create).toBe(1);
            expect(devKit.OptionSet.FormType.Update).toBe(2);
            expect(devKit.OptionSet.FormType.ReadOnly).toBe(3);
            expect(devKit.OptionSet.FormType.Disabled).toBe(4);
            expect(devKit.OptionSet.FormType.BulkEdit).toBe(5);
        });
    });
});
