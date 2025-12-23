/**
 * Unit Tests for devkit.ts - WebApi Type Parsers
 * 
 * This test file covers:
 * - getWebApiTypeParsers: DateTime, Integer, Number, Boolean parsers
 * - webApiReturnGet: Type-based data conversion
 * - defineWebApiField: Field definition with type parsing
 */
import { defineWebApiField } from '../lib/devkit';

describe('WebApi Type Parsers Tests', () => {

    // ========================================================================
    // HELPER: Create a field object with defineWebApiField
    // ========================================================================

    function createFieldWithType(entity: Record<string, any>, type?: string): any {
        const obj: any = { FormattedValue: {} };
        const upsertEntity: Record<string, any> = {};
        defineWebApiField(obj, 'testField', entity, {
            logicalName: 'testfield',
            schemaName: 'Testfield',
            type: type as any
        }, upsertEntity);
        return obj;
    }

    // ========================================================================
    // TEST: DateTime Parser
    // ========================================================================

    describe('DateTime Parser', () => {
        test('should return Date for valid date string', () => {
            const entity = { testfield: '2023-12-25T10:30:00Z' };
            const obj = createFieldWithType(entity, 'DateTime');
            expect(obj.testField).toBeInstanceOf(Date);
        });

        test('should return null for null value', () => {
            const entity = { testfield: null };
            const obj = createFieldWithType(entity, 'DateTime');
            expect(obj.testField).toBeNull();
        });

        test('should return null for undefined value', () => {
            const entity = { testfield: undefined };
            const obj = createFieldWithType(entity, 'DateTime');
            expect(obj.testField).toBeNull();
        });

        test('should return null for empty string', () => {
            const entity = { testfield: '' };
            const obj = createFieldWithType(entity, 'DateTime');
            expect(obj.testField).toBeNull();
        });

        test('should return null for whitespace string', () => {
            const entity = { testfield: '   ' };
            const obj = createFieldWithType(entity, 'DateTime');
            expect(obj.testField).toBeNull();
        });

        test('should return null for invalid date string', () => {
            const entity = { testfield: 'not-a-date' };
            const obj = createFieldWithType(entity, 'DateTime');
            expect(obj.testField).toBeNull();
        });

        test('should return same Date for valid Date object', () => {
            const date = new Date('2023-12-25');
            const entity = { testfield: date };
            const obj = createFieldWithType(entity, 'DateTime');
            expect(obj.testField).toEqual(date);
        });

        test('should return null for invalid Date object', () => {
            const entity = { testfield: new Date('invalid') };
            const obj = createFieldWithType(entity, 'DateTime');
            expect(obj.testField).toBeNull();
        });

        test('should parse ISO date string correctly', () => {
            const entity = { testfield: '2023-06-15T14:30:00.000Z' };
            const obj = createFieldWithType(entity, 'DateTime');
            const result = obj.testField as Date;
            expect(result.getUTCMonth()).toBe(5); // June = 5
            expect(result.getUTCDate()).toBe(15);
        });
    });

    // ========================================================================
    // TEST: Integer Parser
    // ========================================================================

    describe('Integer Parser', () => {
        test('should return integer for valid number string', () => {
            const entity = { testfield: '42' };
            const obj = createFieldWithType(entity, 'Integer');
            expect(obj.testField).toBe(42);
        });

        test('should return integer for number', () => {
            const entity = { testfield: 100 };
            const obj = createFieldWithType(entity, 'Integer');
            expect(obj.testField).toBe(100);
        });

        test('should truncate decimal for float string', () => {
            const entity = { testfield: '42.9' };
            const obj = createFieldWithType(entity, 'Integer');
            expect(obj.testField).toBe(42);
        });

        test('should return null for non-numeric string', () => {
            const entity = { testfield: 'abc' };
            const obj = createFieldWithType(entity, 'Integer');
            expect(obj.testField).toBeNull();
        });

        test('should return null for empty string', () => {
            const entity = { testfield: '' };
            const obj = createFieldWithType(entity, 'Integer');
            expect(obj.testField).toBeNull();
        });

        test('should handle negative integers', () => {
            const entity = { testfield: '-25' };
            const obj = createFieldWithType(entity, 'Integer');
            expect(obj.testField).toBe(-25);
        });

        test('should handle zero', () => {
            const entity = { testfield: '0' };
            const obj = createFieldWithType(entity, 'Integer');
            expect(obj.testField).toBe(0);
        });
    });

    // ========================================================================
    // TEST: Number Parser
    // ========================================================================

    describe('Number Parser', () => {
        test('should return number for valid decimal string', () => {
            const entity = { testfield: '3.14' };
            const obj = createFieldWithType(entity, 'Number');
            expect(obj.testField).toBe(3.14);
        });

        test('should return number for integer string', () => {
            const entity = { testfield: '42' };
            const obj = createFieldWithType(entity, 'Number');
            expect(obj.testField).toBe(42);
        });

        test('should return number for number', () => {
            const entity = { testfield: 99.99 };
            const obj = createFieldWithType(entity, 'Number');
            expect(obj.testField).toBe(99.99);
        });

        test('should return null for non-numeric string', () => {
            const entity = { testfield: 'not-a-number' };
            const obj = createFieldWithType(entity, 'Number');
            expect(obj.testField).toBeNull();
        });

        test('should handle negative decimals', () => {
            const entity = { testfield: '-123.456' };
            const obj = createFieldWithType(entity, 'Number');
            expect(obj.testField).toBe(-123.456);
        });

        test('should handle scientific notation', () => {
            const entity = { testfield: '1.5e10' };
            const obj = createFieldWithType(entity, 'Number');
            expect(obj.testField).toBe(1.5e10);
        });

        test('should return 0 for empty string (Number coerces to 0)', () => {
            const entity = { testfield: '' };
            const obj = createFieldWithType(entity, 'Number');
            // Note: Number('') === 0, not NaN, so it returns 0
            expect(obj.testField).toBe(0);
        });
    });

    // ========================================================================
    // TEST: Boolean Parser
    // ========================================================================

    describe('Boolean Parser', () => {
        test('should return true for boolean true', () => {
            const entity = { testfield: true };
            const obj = createFieldWithType(entity, 'Boolean');
            expect(obj.testField).toBe(true);
        });

        test('should return false for boolean false', () => {
            const entity = { testfield: false };
            const obj = createFieldWithType(entity, 'Boolean');
            expect(obj.testField).toBe(false);
        });

        test('should return true for string "true"', () => {
            const entity = { testfield: 'true' };
            const obj = createFieldWithType(entity, 'Boolean');
            expect(obj.testField).toBe(true);
        });

        test('should return false for string "false"', () => {
            const entity = { testfield: 'false' };
            const obj = createFieldWithType(entity, 'Boolean');
            expect(obj.testField).toBe(false);
        });

        test('should return true for string "1"', () => {
            const entity = { testfield: '1' };
            const obj = createFieldWithType(entity, 'Boolean');
            expect(obj.testField).toBe(true);
        });

        test('should return false for string "0"', () => {
            const entity = { testfield: '0' };
            const obj = createFieldWithType(entity, 'Boolean');
            expect(obj.testField).toBe(false);
        });

        test('should return true for string "yes"', () => {
            const entity = { testfield: 'yes' };
            const obj = createFieldWithType(entity, 'Boolean');
            expect(obj.testField).toBe(true);
        });

        test('should return false for string "no"', () => {
            const entity = { testfield: 'no' };
            const obj = createFieldWithType(entity, 'Boolean');
            expect(obj.testField).toBe(false);
        });

        test('should return true for string "y"', () => {
            const entity = { testfield: 'y' };
            const obj = createFieldWithType(entity, 'Boolean');
            expect(obj.testField).toBe(true);
        });

        test('should return false for string "n"', () => {
            const entity = { testfield: 'n' };
            const obj = createFieldWithType(entity, 'Boolean');
            expect(obj.testField).toBe(false);
        });

        test('should return null for null value', () => {
            const entity = { testfield: null };
            const obj = createFieldWithType(entity, 'Boolean');
            expect(obj.testField).toBeNull();
        });

        test('should return null for undefined value', () => {
            const entity = { testfield: undefined };
            const obj = createFieldWithType(entity, 'Boolean');
            expect(obj.testField).toBeNull();
        });

        test('should return true for non-zero number', () => {
            const entity = { testfield: 42 };
            const obj = createFieldWithType(entity, 'Boolean');
            expect(obj.testField).toBe(true);
        });

        test('should return false for zero number', () => {
            const entity = { testfield: 0 };
            const obj = createFieldWithType(entity, 'Boolean');
            expect(obj.testField).toBe(false);
        });

        test('should return null for unrecognized string', () => {
            const entity = { testfield: 'maybe' };
            const obj = createFieldWithType(entity, 'Boolean');
            expect(obj.testField).toBeNull();
        });

        test('should handle case insensitive "TRUE"', () => {
            const entity = { testfield: 'TRUE' };
            const obj = createFieldWithType(entity, 'Boolean');
            expect(obj.testField).toBe(true);
        });

        test('should handle case insensitive "FALSE"', () => {
            const entity = { testfield: 'FALSE' };
            const obj = createFieldWithType(entity, 'Boolean');
            expect(obj.testField).toBe(false);
        });

        test('should handle whitespace in string', () => {
            const entity = { testfield: '  true  ' };
            const obj = createFieldWithType(entity, 'Boolean');
            expect(obj.testField).toBe(true);
        });
    });

    // ========================================================================
    // TEST: webApiReturnGet - No Type (passthrough)
    // ========================================================================

    describe('No Type (passthrough)', () => {
        test('should return raw value when no type specified', () => {
            const entity = { testfield: 'raw-value' };
            const obj = createFieldWithType(entity, undefined);
            expect(obj.testField).toBe('raw-value');
        });

        test('should return object when no type specified', () => {
            const entity = { testfield: { nested: 'object' } };
            const obj = createFieldWithType(entity, undefined);
            expect(obj.testField).toEqual({ nested: 'object' });
        });

        test('should return array when no type specified', () => {
            const entity = { testfield: [1, 2, 3] };
            const obj = createFieldWithType(entity, undefined);
            expect(obj.testField).toEqual([1, 2, 3]);
        });

        test('should return null when value is null and no type', () => {
            const entity = { testfield: null };
            const obj = createFieldWithType(entity, undefined);
            expect(obj.testField).toBeNull();
        });
    });

    // ========================================================================
    // TEST: Unknown Type (fallback)
    // ========================================================================

    describe('Unknown Type (fallback)', () => {
        test('should return raw value for unknown type', () => {
            const entity = { testfield: 'some-value' };
            const obj = createFieldWithType(entity, 'UnknownType');
            expect(obj.testField).toBe('some-value');
        });
    });

    // ========================================================================
    // TEST: Lookup Field with entityCollectionName
    // ========================================================================

    describe('Lookup Field with entityCollectionName', () => {
        test('should return value when lookup matches entityLogicalName', () => {
            const entity = {
                testfield: 'guid-123',
                'testfield@Microsoft.Dynamics.CRM.lookuplogicalname': 'account'
            };
            const obj: any = { FormattedValue: {} };
            const upsertEntity: Record<string, any> = {};
            defineWebApiField(obj, 'testField', entity, {
                logicalName: 'testfield',
                schemaName: 'Testfield',
                entityCollectionName: 'accounts',
                entityLogicalName: 'account',
                type: undefined
            }, upsertEntity);
            expect(obj.testField).toBe('guid-123');
        });

        test('should return null when lookup does not match entityLogicalName', () => {
            const entity = {
                testfield: 'guid-123',
                'testfield@Microsoft.Dynamics.CRM.lookuplogicalname': 'contact'
            };
            const obj: any = { FormattedValue: {} };
            const upsertEntity: Record<string, any> = {};
            defineWebApiField(obj, 'testField', entity, {
                logicalName: 'testfield',
                schemaName: 'Testfield',
                entityCollectionName: 'accounts',
                entityLogicalName: 'account',
                type: undefined
            }, upsertEntity);
            expect(obj.testField).toBeNull();
        });

        test('should return value when lookuplogicalname is undefined', () => {
            const entity = {
                testfield: 'guid-456'
            };
            const obj: any = { FormattedValue: {} };
            const upsertEntity: Record<string, any> = {};
            defineWebApiField(obj, 'testField', entity, {
                logicalName: 'testfield',
                schemaName: 'Testfield',
                entityCollectionName: 'accounts',
                entityLogicalName: 'account',
                type: undefined
            }, upsertEntity);
            expect(obj.testField).toBe('guid-456');
        });

        test('should apply type parser for lookup field', () => {
            const entity = {
                testfield: '2023-12-25T10:00:00Z',
                'testfield@Microsoft.Dynamics.CRM.lookuplogicalname': 'account'
            };
            const obj: any = { FormattedValue: {} };
            const upsertEntity: Record<string, any> = {};
            defineWebApiField(obj, 'testField', entity, {
                logicalName: 'testfield',
                schemaName: 'Testfield',
                entityCollectionName: 'accounts',
                entityLogicalName: 'account',
                type: 'DateTime'
            }, upsertEntity);
            expect(obj.testField).toBeInstanceOf(Date);
        });
    });
});
