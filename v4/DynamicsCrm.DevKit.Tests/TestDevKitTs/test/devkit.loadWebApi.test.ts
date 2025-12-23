/**
 * Unit Tests for devkit.ts - loadWebApi function
 * Using xrm-mock framework for Dynamics 365/Xrm API simulation
 * 
 * This test file covers WebApi functionality including:
 * - CRUD operations: CreateRecord, DeleteRecord, RetrieveRecord, UpdateRecord, RetrieveMultipleRecords
 * - Execute and ExecuteMultiple
 * - RetrieveRecords with FetchXML parsing and factory/constructor support
 * - Online.Execute and Online.ExecuteMultiple
 * - Offline.IsAvailable
 * - extractEntityName helper for FetchXML parsing
 * - Edge cases (null WebApi, callback vs promise patterns)
 * 
 * Reference: Account.webapi.ts (AccountApi class)
 */
import { XrmMockGenerator } from 'xrm-mock';
import { FormBase } from '../lib/devkit';

// Simple DOMParser mock for Node.js environment (required for FetchXML parsing in devkit.ts)
class MockElement {
    private attrs: Record<string, string> = {};
    constructor(private name: string, attrs: Record<string, string>) { this.attrs = attrs; }
    hasAttribute(name: string) { return name in this.attrs; }
    getAttribute(name: string) { return this.attrs[name] || null; }
}

class MockDocument {
    private xml: string;
    constructor(xml: string) { this.xml = xml; }
    querySelector(selector: string): MockElement | null {
        if (selector === 'entity') {
            // Extract entity name from fetchXml: <entity name="account">
            const match = this.xml.match(/<entity\s+name="([^"]+)"/i);
            if (match) {
                return new MockElement('entity', { name: match[1] });
            }
        }
        return null;
    }
}

(global as any).DOMParser = class {
    parseFromString(xml: string, type: string): MockDocument {
        return new MockDocument(xml);
    }
};

describe('loadWebApi Tests', () => {
    beforeEach(() => {
        (global as any).window = (global as any).window || {};
        XrmMockGenerator.initialise();
        (global as any).window.Xrm = (global as any).Xrm;
    });


    // ========================================================================
    // HELPER: Setup WebApi Mock
    // ========================================================================

    function setupWebApiMock(): any {
        const mockWebApi = {
            createRecord: (entity: string, data: any) => Promise.resolve({ id: 'new-id', entityType: entity }),
            deleteRecord: (entity: string, id: string) => Promise.resolve({ entityType: entity, id }),
            retrieveRecord: (entity: string, id: string, options?: string) => Promise.resolve({ accountid: id, name: 'Test Account' }),
            updateRecord: (entity: string, id: string, data: any) => Promise.resolve({ entityType: entity, id }),
            retrieveMultipleRecords: (entity: string, options?: string, maxPageSize?: number) => Promise.resolve({
                entities: [
                    { accountid: 'acc-1', name: 'Account 1' },
                    { accountid: 'acc-2', name: 'Account 2' }
                ]
            }),
            execute: (request: any) => Promise.resolve({ responseText: 'success' }),
            executeMultiple: (requests: any[]) => Promise.resolve([{ success: true }]),
            online: {
                execute: (request: any) => Promise.resolve({ online: true }),
                executeMultiple: (requests: any[]) => Promise.resolve([{ online: true }])
            },
            offline: {
                isAvailable: (entity: string) => entity === 'account'
            }
        };

        (global as any).Xrm = { ...(global as any).Xrm, WebApi: mockWebApi };
        (global as any).window.Xrm = (global as any).Xrm;
        return mockWebApi;
    }

    function getForm(): any {
        const formContext = {
            data: {
                getIsDirty: () => false, isValid: () => true, refresh: () => Promise.resolve(), save: () => Promise.resolve(),
                addOnLoad: () => { }, removeOnLoad: () => { },
                entity: {
                    attributes: { get: () => null }, getId: () => 'id', getEntityName: () => 'account',
                    getIsDirty: () => false, isValid: () => true, getDataXml: () => '', getEntityReference: () => ({}),
                    getPrimaryAttributeValue: () => '', addOnSave: () => { }, removeOnSave: () => { }, addOnPostSave: () => { }, removeOnPostSave: () => { }
                }
            },
            ui: {
                getFormType: () => 2, controls: { get: () => null }, tabs: { get: () => null },
                formSelector: { getCurrentItem: () => ({ getId: () => 'f', getLabel: () => 'l' }), items: { getLength: () => 0, get: () => null } },
                getViewPortHeight: () => 800, getViewPortWidth: () => 1200,
                clearFormNotification: () => true, setFormNotification: () => true, close: () => { }, refreshRibbon: () => { },
                addLoaded: () => { }, removeLoaded: () => { }, addOnLoad: () => { }, removeOnLoad: () => { }, setFormEntityName: () => { }
            },
            getControl: () => null, getAttribute: () => null, getFormContext: function () { return this; }
        };

        return new FormBase({ getFormContext: () => formContext }, 'test', {
            body: [], header: [], tab: [], grid: [], navigation: [], quick: [], bpf: []
        });
    }

    // ========================================================================
    // TEST: WebApi Object
    // ========================================================================

    describe('WebApi Object', () => {
        test('WebApi should be defined', () => {
            setupWebApiMock();
            const form = getForm();
            expect(form.WebApi).toBeDefined();
        });
    });

    // ========================================================================
    // TEST: CreateRecord
    // ========================================================================

    describe('CreateRecord', () => {
        test('CreateRecord should return Promise when no callback', async () => {
            setupWebApiMock();
            const form = getForm();
            const result = await form.WebApi.CreateRecord('account', { name: 'Test' });
            expect(result.id).toBe('new-id');
        });

        test('CreateRecord should call successCallback when provided', async () => {
            setupWebApiMock();
            const form = getForm();
            const callback = jest.fn();
            form.WebApi.CreateRecord('account', { name: 'Test' }, callback);
            await new Promise(r => setTimeout(r, 10));
            expect(callback).toHaveBeenCalled();
        });
    });

    // ========================================================================
    // TEST: DeleteRecord
    // ========================================================================

    describe('DeleteRecord', () => {
        test('DeleteRecord should return Promise when no callback', async () => {
            setupWebApiMock();
            const form = getForm();
            const result = await form.WebApi.DeleteRecord('account', 'acc-1');
            expect(result.id).toBe('acc-1');
        });

        test('DeleteRecord should call successCallback when provided', async () => {
            setupWebApiMock();
            const form = getForm();
            const callback = jest.fn();
            form.WebApi.DeleteRecord('account', 'acc-1', callback);
            await new Promise(r => setTimeout(r, 10));
            expect(callback).toHaveBeenCalled();
        });
    });

    // ========================================================================
    // TEST: RetrieveRecord (Note: This uses factory pattern - see devkit.ts line 487)
    // ========================================================================

    describe('RetrieveRecord', () => {
        test('RetrieveRecord with factory should return Promise when no callback', async () => {
            setupWebApiMock();
            const form = getForm();
            const factory = (entity: any) => entity;
            const result = await form.WebApi.RetrieveRecord(factory, 'account', 'acc-1', '?$select=name');
            expect(result.name).toBe('Test Account');
        });

        test('RetrieveRecord with factory should call successCallback when provided', async () => {
            setupWebApiMock();
            const form = getForm();
            const callback = jest.fn();
            const factory = (entity: any) => entity;
            form.WebApi.RetrieveRecord(factory, 'account', 'acc-1', '?$select=name', callback);
            await new Promise(r => setTimeout(r, 10));
            expect(callback).toHaveBeenCalled();
        });
    });

    // ========================================================================
    // TEST: UpdateRecord
    // ========================================================================

    describe('UpdateRecord', () => {
        test('UpdateRecord should return Promise when no callback', async () => {
            setupWebApiMock();
            const form = getForm();
            const result = await form.WebApi.UpdateRecord('account', 'acc-1', { name: 'Updated' });
            expect(result.id).toBe('acc-1');
        });

        test('UpdateRecord should call successCallback when provided', async () => {
            setupWebApiMock();
            const form = getForm();
            const callback = jest.fn();
            form.WebApi.UpdateRecord('account', 'acc-1', { name: 'Updated' }, callback);
            await new Promise(r => setTimeout(r, 10));
            expect(callback).toHaveBeenCalled();
        });
    });

    // ========================================================================
    // TEST: RetrieveMultipleRecords
    // ========================================================================

    describe('RetrieveMultipleRecords', () => {
        test('RetrieveMultipleRecords should return Promise when no callback', async () => {
            setupWebApiMock();
            const form = getForm();
            const result = await form.WebApi.RetrieveMultipleRecords('account', '?$select=name', 50);
            expect(result.entities.length).toBe(2);
        });

        test('RetrieveMultipleRecords should call successCallback when provided', async () => {
            setupWebApiMock();
            const form = getForm();
            const callback = jest.fn();
            form.WebApi.RetrieveMultipleRecords('account', '?$select=name', 50, callback);
            await new Promise(r => setTimeout(r, 10));
            expect(callback).toHaveBeenCalled();
        });
    });

    // ========================================================================
    // TEST: Execute
    // ========================================================================

    describe('Execute', () => {
        test('Execute should return Promise when no callback', async () => {
            setupWebApiMock();
            const form = getForm();
            const result = await form.WebApi.Execute({ getMetadata: () => ({}) });
            expect(result.responseText).toBe('success');
        });

        test('Execute should call successCallback when provided', async () => {
            setupWebApiMock();
            const form = getForm();
            const callback = jest.fn();
            form.WebApi.Execute({ getMetadata: () => ({}) }, callback);
            await new Promise(r => setTimeout(r, 10));
            expect(callback).toHaveBeenCalled();
        });
    });

    // ========================================================================
    // TEST: ExecuteMultiple
    // ========================================================================

    describe('ExecuteMultiple', () => {
        test('ExecuteMultiple should return Promise when no callback', async () => {
            setupWebApiMock();
            const form = getForm();
            const result = await form.WebApi.ExecuteMultiple([{}, {}]);
            expect(result[0].success).toBe(true);
        });

        test('ExecuteMultiple should call successCallback when provided', async () => {
            setupWebApiMock();
            const form = getForm();
            const callback = jest.fn();
            form.WebApi.ExecuteMultiple([{}, {}], callback);
            await new Promise(r => setTimeout(r, 10));
            expect(callback).toHaveBeenCalled();
        });
    });

    // ========================================================================
    // TEST: Online
    // ========================================================================

    describe('Online', () => {
        test('Online.Execute should return Promise when no callback', async () => {
            setupWebApiMock();
            const form = getForm();
            const result = await form.WebApi.Online.Execute({});
            expect(result.online).toBe(true);
        });

        test('Online.Execute should call successCallback when provided', async () => {
            setupWebApiMock();
            const form = getForm();
            const callback = jest.fn();
            form.WebApi.Online.Execute({}, callback);
            await new Promise(r => setTimeout(r, 10));
            expect(callback).toHaveBeenCalled();
        });

        test('Online.ExecuteMultiple should return Promise when no callback', async () => {
            setupWebApiMock();
            const form = getForm();
            const result = await form.WebApi.Online.ExecuteMultiple([{}]);
            expect(result[0].online).toBe(true);
        });

        test('Online.ExecuteMultiple should call successCallback when provided', async () => {
            setupWebApiMock();
            const form = getForm();
            const callback = jest.fn();
            form.WebApi.Online.ExecuteMultiple([{}], callback);
            await new Promise(r => setTimeout(r, 10));
            expect(callback).toHaveBeenCalled();
        });
    });

    // ========================================================================
    // TEST: Offline
    // ========================================================================

    describe('Offline', () => {
        test('Offline.IsAvailable should return true for account', () => {
            setupWebApiMock();
            const form = getForm();
            expect(form.WebApi.Offline.IsAvailable('account')).toBe(true);
        });

        test('Offline.IsAvailable should return false for contact', () => {
            setupWebApiMock();
            const form = getForm();
            expect(form.WebApi.Offline.IsAvailable('contact')).toBe(false);
        });
    });

    // ========================================================================
    // TEST: RetrieveRecords with Factory Function
    // ========================================================================

    describe('RetrieveRecords with Factory', () => {
        test('RetrieveRecords with entityLogicalName should return mapped records', async () => {
            setupWebApiMock();
            const form = getForm();
            const factory = (entity: any) => ({ id: entity.accountid, displayName: entity.name });
            const result = await form.WebApi.RetrieveRecords(factory, 'account', '?$select=name');
            expect(result.length).toBe(2);
            expect(result[0].displayName).toBe('Account 1');
        });

        test('RetrieveRecords with constructor should create instances', async () => {
            setupWebApiMock();
            const form = getForm();
            class TestEntity {
                id: string;
                constructor(entity: any) { this.id = entity.accountid; }
            }
            const result = await form.WebApi.RetrieveRecords(TestEntity, 'account', '?$select=name');
            expect(result.length).toBe(2);
            expect(result[0]).toBeInstanceOf(TestEntity);
        });

        test('RetrieveRecords with callback should call successCallback', async () => {
            setupWebApiMock();
            const form = getForm();
            const callback = jest.fn();
            const factory = (entity: any) => entity;
            form.WebApi.RetrieveRecords(factory, 'account', '?$select=name', 50, callback);
            await new Promise(r => setTimeout(r, 10));
            expect(callback).toHaveBeenCalled();
        });

        test('RetrieveRecords with FetchXML should extract entity name', async () => {
            setupWebApiMock();
            const form = getForm();
            const factory = (entity: any) => entity;
            const fetchXml = '<fetch><entity name="account"><attribute name="name"/></entity></fetch>';
            const result = await form.WebApi.RetrieveRecords(factory, fetchXml);
            expect(result.length).toBe(2);
        });

        test('RetrieveRecords with encoded FetchXML should extract entity name', async () => {
            setupWebApiMock();
            const form = getForm();
            const factory = (entity: any) => entity;
            const encodedFetch = '?fetchXml=' + encodeURIComponent('<fetch><entity name="account"/></fetch>');
            const result = await form.WebApi.RetrieveRecords(factory, encodedFetch);
            expect(result.length).toBe(2);
        });

        test('RetrieveRecords should return empty array when no entities', async () => {
            const mockWebApi = {
                retrieveMultipleRecords: () => Promise.resolve({ entities: [] })
            };
            (global as any).Xrm = { WebApi: mockWebApi };
            (global as any).window.Xrm = (global as any).Xrm;

            const form = getForm();
            const factory = (entity: any) => entity;
            const result = await form.WebApi.RetrieveRecords(factory, 'account', '?$select=name');
            expect(result).toEqual([]);
        });

        test('RetrieveRecords with function callback (3rd param) should work', async () => {
            setupWebApiMock();
            const form = getForm();
            const factory = (entity: any) => entity;
            const callback = jest.fn();
            const fetchXml = '<fetch><entity name="account"/></fetch>';
            form.WebApi.RetrieveRecords(factory, fetchXml, callback);
            await new Promise(r => setTimeout(r, 10));
            expect(callback).toHaveBeenCalled();
        });

        test('RetrieveRecords with number maxPageSize and function callback should work', async () => {
            setupWebApiMock();
            const form = getForm();
            const factory = (entity: any) => entity;
            const callback = jest.fn();
            const fetchXml = '<fetch><entity name="account"/></fetch>';
            form.WebApi.RetrieveRecords(factory, fetchXml, 100, callback);
            await new Promise(r => setTimeout(r, 10));
            expect(callback).toHaveBeenCalled();
        });
    });

    // ========================================================================
    // TEST: RetrieveRecord with Factory (second RetrieveRecord overload)
    // ========================================================================

    describe('RetrieveRecord with Factory', () => {
        test('RetrieveRecord with factory should map result', async () => {
            setupWebApiMock();
            const form = getForm();
            const factory = (entity: any) => ({ id: entity.accountid, displayName: entity.name });
            const result = await form.WebApi.RetrieveRecord(factory, 'account', 'acc-1');
            expect(result.displayName).toBe('Test Account');
        });

        test('RetrieveRecord with constructor should create instance', async () => {
            setupWebApiMock();
            const form = getForm();
            class TestEntity {
                name: string;
                constructor(entity: any) { this.name = entity.name; }
            }
            const result = await form.WebApi.RetrieveRecord(TestEntity, 'account', 'acc-1');
            expect(result).toBeInstanceOf(TestEntity);
            expect(result.name).toBe('Test Account');
        });

        test('RetrieveRecord with callback as 4th param should call it', async () => {
            setupWebApiMock();
            const form = getForm();
            const callback = jest.fn();
            const factory = (entity: any) => entity;
            form.WebApi.RetrieveRecord(factory, 'account', 'acc-1', callback);
            await new Promise(r => setTimeout(r, 10));
            expect(callback).toHaveBeenCalled();
        });

        test('RetrieveRecord without options should default to ?$select=*', async () => {
            setupWebApiMock();
            const form = getForm();
            const factory = (entity: any) => entity;
            const result = await form.WebApi.RetrieveRecord(factory, 'account', 'acc-1');
            expect(result.name).toBe('Test Account');
        });
    });

    // ========================================================================
    // TEST: Edge Cases - OData query without entity name
    // ========================================================================

    describe('Edge Cases - OData query error', () => {
        test('RetrieveRecords with OData query should throw error', async () => {
            setupWebApiMock();
            const form = getForm();
            const factory = (entity: any) => entity;
            expect(() => form.WebApi.RetrieveRecords(factory, '?$select=name')).toThrow('Entity name cannot be determined');
        });
    });

    // ========================================================================
    // TEST: Edge Cases - Null WebApi
    // ========================================================================

    describe('Edge Cases - Null WebApi', () => {
        beforeEach(() => {
            (global as any).Xrm = { WebApi: null };
            (global as any).window.Xrm = (global as any).Xrm;
        });

        test('CreateRecord should return undefined when WebApi is null', () => {
            const form = getForm();
            const result = form.WebApi.CreateRecord('account', {});
            expect(result).toBeUndefined();
        });

        test('Methods should not throw when WebApi is null', () => {
            const form = getForm();
            expect(() => form.WebApi.DeleteRecord('account', 'id')).not.toThrow();
            expect(() => form.WebApi.UpdateRecord('account', 'id', {})).not.toThrow();
            expect(() => form.WebApi.Execute({})).not.toThrow();
        });
    });

    // ========================================================================
    // TEST: Additional Branch Coverage Tests
    // ========================================================================

    describe('Additional Branch Coverage - extractEntityName', () => {
        test('extractEntityName should throw when entity has no name attribute', () => {
            // Mock DOMParser to return entity without name attribute
            const originalDOMParser = (global as any).DOMParser;
            (global as any).DOMParser = class {
                parseFromString() {
                    return {
                        querySelector: () => ({
                            hasAttribute: () => false,
                            getAttribute: () => null
                        })
                    };
                }
            };

            setupWebApiMock();
            const form = getForm();
            const factory = (entity: any) => entity;
            expect(() => form.WebApi.RetrieveRecords(factory, '<fetch><entity/></fetch>')).toThrow('Entity name not found');

            (global as any).DOMParser = originalDOMParser;
        });

        test('extractEntityName should handle fetchXml parameter format', async () => {
            setupWebApiMock();
            const form = getForm();
            const factory = (entity: any) => entity;
            // This tests the fetchXmlMatch branch (line 359)
            const result = await form.WebApi.RetrieveRecords(factory, '?fetchXml=<fetch><entity name="account"/></fetch>');
            expect(result.length).toBe(2);
        });
    });

    describe('Additional Branch Coverage - RetrieveRecords variations', () => {
        test('RetrieveRecords with entity name and options and maxPageSize as number', async () => {
            setupWebApiMock();
            const form = getForm();
            const factory = (entity: any) => entity;
            // Line 467: typeof maxPageSizeOrSuccessCallback === 'number'
            const result = await form.WebApi.RetrieveRecords(factory, 'account', '?$select=name', 100);
            expect(result.length).toBe(2);
        });

        test('RetrieveRecords with entity name and function as 4th param', async () => {
            setupWebApiMock();
            const form = getForm();
            const factory = (entity: any) => entity;
            const callback = jest.fn();
            // Line 463: typeof maxPageSizeOrSuccessCallback === 'function'
            form.WebApi.RetrieveRecords(factory, 'account', '?$select=name', callback);
            await new Promise(r => setTimeout(r, 10));
            expect(callback).toHaveBeenCalled();
        });

        test('RetrieveRecords with FetchXML and maxPageSize number then callback', async () => {
            setupWebApiMock();
            const form = getForm();
            const factory = (entity: any) => entity;
            const callback = jest.fn();
            const errorCallback = jest.fn();
            // Line 455: typeof maxPageSizeOrSuccessCallback === 'number' in FetchXML branch
            form.WebApi.RetrieveRecords(factory, '<fetch><entity name="account"/></fetch>', 50, callback, errorCallback);
            await new Promise(r => setTimeout(r, 10));
            expect(callback).toHaveBeenCalled();
        });

        test('RetrieveRecords with FetchXML and maxPageSize number but NO callback (line 447 branch)', async () => {
            setupWebApiMock();
            const form = getForm();
            const factory = (entity: any) => entity;
            // Line 447: typeof maxPageSizeOrSuccessCallback === 'function' is FALSE
            // This means: FetchXML path, optionsOrMaxPageSizeOrCallback is number, but maxPageSizeOrSuccessCallback is NOT a function
            const result = await form.WebApi.RetrieveRecords(factory, '<fetch><entity name="account"/></fetch>', 50);
            expect(result.length).toBe(2);
        });

        test('RetrieveRecords with plain FetchXML (no fetchxml= prefix) tests line 359 false branch', async () => {
            setupWebApiMock();
            const form = getForm();
            const factory = (entity: any) => entity;
            // Line 359: fetchXmlMatch is null (no fetchxml= in string), so we go to else path
            const result = await form.WebApi.RetrieveRecords(factory, '<fetch><entity name="account"><attribute name="name"/></entity></fetch>');
            expect(result.length).toBe(2);
        });
    });


    describe('Additional Branch Coverage - RetrieveRecord variations', () => {
        test('RetrieveRecord with options string and callback', async () => {
            setupWebApiMock();
            const form = getForm();
            const callback = jest.fn();
            const errorCallback = jest.fn();
            const factory = (entity: any) => entity;
            // Line 488: typeof options !== 'function' AND line 493: options truthy
            form.WebApi.RetrieveRecord(factory, 'account', 'acc-1', '?$select=name', callback, errorCallback);
            await new Promise(r => setTimeout(r, 10));
            expect(callback).toHaveBeenCalled();
        });
    });

    describe('Additional Branch Coverage - Online/Offline null checks', () => {
        test('Online.Execute should handle undefined promise', () => {
            (global as any).Xrm = { WebApi: { online: null } };
            (global as any).window.Xrm = (global as any).Xrm;

            const form = getForm();
            expect(() => form.WebApi.Online.Execute({})).not.toThrow();
        });

        test('Offline.IsAvailable should return undefined when offline is null', () => {
            (global as any).Xrm = { WebApi: { offline: null } };
            (global as any).window.Xrm = (global as any).Xrm;

            const form = getForm();
            expect(form.WebApi.Offline.IsAvailable('account')).toBeUndefined();
        });
    });

    // ========================================================================
    // TYPE PARSERS TESTS (getWebApiTypeParsers and webApiReturnGet)
    // ========================================================================

    describe('Type Parsers - DateTime', () => {
        function createFieldWithType(entity: Record<string, any>, type?: string): any {
            const { defineWebApiField } = require('../lib/devkit');
            const obj: any = { FormattedValue: {} };
            const upsertEntity: Record<string, any> = {};
            defineWebApiField(obj, 'testField', entity, {
                logicalName: 'testfield',
                schemaName: 'Testfield',
                type: type as any
            }, upsertEntity);
            return obj;
        }

        test('should return Date for valid date string', () => {
            const entity = { testfield: '2023-12-25T10:30:00Z' };
            const obj = createFieldWithType(entity, 'DateTime');
            expect(obj.testField).toBeInstanceOf(Date);
        });

        test('should return null for null value (filtered by getValue)', () => {
            const entity = { testfield: null };
            const obj = createFieldWithType(entity, 'DateTime');
            expect(obj.testField).toBeNull();
        });

        test('should return null for empty string', () => {
            const entity = { testfield: '' };
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
    });

    describe('Type Parsers - Integer', () => {
        function createFieldWithType(entity: Record<string, any>, type?: string): any {
            const { defineWebApiField } = require('../lib/devkit');
            const obj: any = { FormattedValue: {} };
            const upsertEntity: Record<string, any> = {};
            defineWebApiField(obj, 'testField', entity, {
                logicalName: 'testfield',
                schemaName: 'Testfield',
                type: type as any
            }, upsertEntity);
            return obj;
        }

        test('should return integer for valid number string', () => {
            const entity = { testfield: '42' };
            const obj = createFieldWithType(entity, 'Integer');
            expect(obj.testField).toBe(42);
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
    });

    describe('Type Parsers - Number', () => {
        function createFieldWithType(entity: Record<string, any>, type?: string): any {
            const { defineWebApiField } = require('../lib/devkit');
            const obj: any = { FormattedValue: {} };
            const upsertEntity: Record<string, any> = {};
            defineWebApiField(obj, 'testField', entity, {
                logicalName: 'testfield',
                schemaName: 'Testfield',
                type: type as any
            }, upsertEntity);
            return obj;
        }

        test('should return number for valid decimal string', () => {
            const entity = { testfield: '3.14' };
            const obj = createFieldWithType(entity, 'Number');
            expect(obj.testField).toBe(3.14);
        });

        test('should return null for non-numeric string', () => {
            const entity = { testfield: 'not-a-number' };
            const obj = createFieldWithType(entity, 'Number');
            expect(obj.testField).toBeNull();
        });
    });

    describe('Type Parsers - Boolean', () => {
        function createFieldWithType(entity: Record<string, any>, type?: string): any {
            const { defineWebApiField } = require('../lib/devkit');
            const obj: any = { FormattedValue: {} };
            const upsertEntity: Record<string, any> = {};
            defineWebApiField(obj, 'testField', entity, {
                logicalName: 'testfield',
                schemaName: 'Testfield',
                type: type as any
            }, upsertEntity);
            return obj;
        }

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

        test('should return true for non-zero number', () => {
            const entity = { testfield: 42 };
            const obj = createFieldWithType(entity, 'Boolean');
            expect(obj.testField).toBe(true);
        });

        test('should return null for unrecognized string', () => {
            const entity = { testfield: 'maybe' };
            const obj = createFieldWithType(entity, 'Boolean');
            expect(obj.testField).toBeNull();
        });
    });

    // ========================================================================
    // defineWebApiField TESTS
    // ========================================================================

    describe('defineWebApiField', () => {
        function createField(entity: Record<string, any>, config: any): { obj: any; upsert: any } {
            const { defineWebApiField } = require('../lib/devkit');
            const obj: any = { FormattedValue: {} };
            const upsertEntity: Record<string, any> = {};
            defineWebApiField(obj, 'testField', entity, config, upsertEntity);
            return { obj, upsert: upsertEntity };
        }

        test('should define getter and setter for simple field', () => {
            const { obj, upsert } = createField({ name: 'Test Account' }, {
                logicalName: 'name',
                schemaName: 'Name'
            });
            expect(obj.testField).toBe('Test Account');
            obj.testField = 'New Name';
            expect(upsert.name).toBe('New Name');
        });

        test('should handle lookup field with entityCollectionName', () => {
            const entity = {
                '_primarycontactid_value': 'contact-guid-123',
                '_primarycontactid_value@Microsoft.Dynamics.CRM.lookuplogicalname': 'contact'
            };
            const { obj, upsert } = createField(entity, {
                logicalName: '_primarycontactid_value',
                schemaName: 'primarycontactid',
                entityCollectionName: 'contacts',
                entityLogicalName: 'contact'
            });
            expect(obj.testField).toBe('contact-guid-123');
            obj.testField = 'new-contact-guid';
            expect(upsert['primarycontactid@odata.bind']).toBe('/contacts(new-contact-guid)');
        });

        test('should return null for lookup field with mismatched entityLogicalName', () => {
            const entity = {
                '_ownerid_value': 'team-guid-123',
                '_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname': 'team'
            };
            const { obj } = createField(entity, {
                logicalName: '_ownerid_value',
                schemaName: 'ownerid',
                entityCollectionName: 'systemusers',
                entityLogicalName: 'systemuser'
            });
            expect(obj.testField).toBeNull();
        });

        test('should handle FormattedValue for field', () => {
            const entity = {
                'statecode': 0,
                'statecode@OData.Community.Display.V1.FormattedValue': 'Active'
            };
            const { obj } = createField(entity, {
                logicalName: 'statecode',
                schemaName: 'StateCode',
                type: 'Integer'
            });
            expect(obj.FormattedValue.testField).toBe('Active');
        });

        test('should handle MultiOptionSet type', () => {
            const entity = {
                'categories': '1,2,3',
                'categories@OData.Community.Display.V1.FormattedValue': 'Cat1; Cat2; Cat3'
            };
            const { obj } = createField(entity, {
                logicalName: 'categories',
                schemaName: 'Categories',
                type: 'MultiOptionSet'
            });
            expect(obj.testField).toEqual([1, 2, 3]);
            expect(obj.FormattedValue.testField).toEqual(['Cat1', 'Cat2', 'Cat3']);
        });

        test('should set lookup to null correctly', () => {
            const entity = { '_parentid_value': 'parent-guid' };
            const { obj, upsert } = createField(entity, {
                logicalName: '_parentid_value',
                schemaName: 'parentid',
                entityCollectionName: 'accounts',
                entityLogicalName: 'account'
            });
            obj.testField = null;
            expect(upsert['parentid@odata.bind']).toBeNull();
        });

        // Additional tests for 100% branch coverage

        test('should return empty string when FormattedValue is null (line 1178)', () => {
            const entity = {
                'status': 1,
                'status@OData.Community.Display.V1.FormattedValue': null
            };
            const { obj } = createField(entity, {
                logicalName: 'status',
                type: 'Integer'
            });
            expect(obj.FormattedValue.testField).toBe('');
        });

        test('should return empty string when FormattedValue is undefined (line 1178)', () => {
            const entity = { 'status': 1 }; // No formatted value key
            const { obj } = createField(entity, {
                logicalName: 'status',
                type: 'Integer'
            });
            expect(obj.FormattedValue.testField).toBe('');
        });

        test('should return FormattedValue for lookup with matching entityLogicalName (line 1181-1184)', () => {
            const entity = {
                '_contactid_value': 'contact-123',
                '_contactid_value@OData.Community.Display.V1.FormattedValue': 'John Doe',
                '_contactid_value@Microsoft.Dynamics.CRM.lookuplogicalname': 'contact'
            };
            const { obj } = createField(entity, {
                logicalName: '_contactid_value',
                schemaName: 'contactid',
                entityCollectionName: 'contacts',
                entityLogicalName: 'contact'
            });
            expect(obj.FormattedValue.testField).toBe('John Doe');
        });

        test('should return empty string for lookup FormattedValue with mismatched entityLogicalName (line 1183-1186)', () => {
            const entity = {
                '_ownerid_value': 'team-123',
                '_ownerid_value@OData.Community.Display.V1.FormattedValue': 'Sales Team',
                '_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname': 'team'
            };
            const { obj } = createField(entity, {
                logicalName: '_ownerid_value',
                schemaName: 'ownerid',
                entityCollectionName: 'systemusers',
                entityLogicalName: 'systemuser'
            });
            expect(obj.FormattedValue.testField).toBe('');
        });

        test('should handle readOnly field without setter (line 1227)', () => {
            const entity = { 'createdon': '2023-12-25T10:00:00Z' };
            const { obj } = createField(entity, {
                logicalName: 'createdon',
                type: 'DateTime',
                readOnly: true
            });
            expect(obj.testField).toBeInstanceOf(Date);
            // Attempting to set should have no effect (no setter defined)
            expect(() => { obj.testField = new Date(); }).toThrow();
        });

        test('should strip braces from GUID when setting lookup (line 1216)', () => {
            const entity = {};
            const { obj, upsert } = createField(entity, {
                logicalName: '_accountid_value',
                schemaName: 'accountid',
                entityCollectionName: 'accounts',
                entityLogicalName: 'account'
            });
            obj.testField = '{12345678-1234-1234-1234-123456789abc}';
            expect(upsert['accountid@odata.bind']).toBe('/accounts(12345678-1234-1234-1234-123456789abc)');
        });

        test('should handle lookup without schemaName - use logicalName (line 1212)', () => {
            const entity = {};
            const { obj, upsert } = createField(entity, {
                logicalName: '_parentid_value',
                // No schemaName - should fallback to logicalName
                entityCollectionName: 'accounts',
                entityLogicalName: 'account'
            });
            obj.testField = 'parent-guid';
            expect(upsert['_parentid_value@odata.bind']).toBe('/accounts(parent-guid)');
        });

        test('should handle numeric lookup value (line 1216 non-string branch)', () => {
            const entity = {};
            const { obj, upsert } = createField(entity, {
                logicalName: '_numericid_value',
                schemaName: 'numericid',
                entityCollectionName: 'numerics',
                entityLogicalName: 'numeric'
            });
            // Pass a number instead of string - should still work
            obj.testField = 12345;
            expect(upsert['numericid@odata.bind']).toBe('/numerics(12345)');
        });

        test('should handle MultiOptionSet setValue (line 1210)', () => {
            const entity = { 'categories': '1,2' };
            const { obj, upsert } = createField(entity, {
                logicalName: 'categories',
                type: 'MultiOptionSet'
            });
            obj.testField = [3, 4, 5];
            expect(upsert.categories).toBe('3,4,5');
        });

        test('should handle MultiOptionSet with null value in split (line 1205 fallback)', () => {
            const entity = { 'categories': null };
            const { obj } = createField(entity, {
                logicalName: 'categories',
                type: 'MultiOptionSet'
            });
            expect(obj.testField).toBeNull();
        });

        test('should handle MultiOptionSet FormattedValue with null (line 1189 fallback)', () => {
            const entity = {
                'categories': '1,2',
                'categories@OData.Community.Display.V1.FormattedValue': null
            };
            const { obj } = createField(entity, {
                logicalName: 'categories',
                type: 'MultiOptionSet'
            });
            expect(obj.FormattedValue.testField).toBe('');
        });
    });

    // ========================================================================
    // createWebApiEntity TESTS (Account.webapi.ts style)
    // ========================================================================

    describe('createWebApiEntity', () => {
        test('should create entity with basic properties', () => {
            const { createWebApiEntity } = require('../lib/devkit');
            const entity = {
                accountid: 'acc-guid-123',
                name: 'Test Account',
                '@odata.etag': 'W/"12345"'
            };
            const fieldConfig = {
                AccountId: { logicalName: 'accountid' },
                Name: { logicalName: 'name' }
            };
            const result = createWebApiEntity(entity, 'account', 'accounts', fieldConfig);

            expect(result.EntityName).toBe('account');
            expect(result.EntityCollectionName).toBe('accounts');
            expect(result['@odata.etag']).toBe('W/"12345"');
            expect(result.ODataEntity).toBe(entity);
            expect(result.AccountId).toBe('acc-guid-123');
            expect(result.Name).toBe('Test Account');
        });

        test('should create entity with undefined entity (for create operations)', () => {
            const { createWebApiEntity } = require('../lib/devkit');
            const fieldConfig = {
                Name: { logicalName: 'name' }
            };
            const result = createWebApiEntity(undefined, 'account', 'accounts', fieldConfig);

            expect(result.EntityName).toBe('account');
            expect(result.Name).toBeNull();
            result.Name = 'New Account';
            expect(result.Entity.name).toBe('New Account');
        });

        test('should provide getAliasedValue for linked entity values', () => {
            const { createWebApiEntity } = require('../lib/devkit');
            const entity = {
                'contact_alias.fullname': 'John Doe',
                'contact_alias.contactid': 'contact-guid'
            };
            const result = createWebApiEntity(entity, 'account', 'accounts', {});

            expect(result.getAliasedValue('contact_alias.fullname')).toBe('John Doe');
            expect(result.getAliasedValue('nonexistent')).toBeNull();
        });

        test('should provide getAliasedValue for MultiOptionSet', () => {
            const { createWebApiEntity } = require('../lib/devkit');
            const entity = {
                'alias.categories': '1,2,3'
            };
            const result = createWebApiEntity(entity, 'account', 'accounts', {});

            expect(result.getAliasedValue('alias.categories', true)).toEqual([1, 2, 3]);
        });

        test('should provide getAliasedFormattedValue', () => {
            const { createWebApiEntity } = require('../lib/devkit');
            const entity = {
                'alias.status@OData.Community.Display.V1.FormattedValue': 'Active'
            };
            const result = createWebApiEntity(entity, 'account', 'accounts', {});

            expect(result.getAliasedFormattedValue('alias.status')).toBe('Active');
            expect(result.getAliasedFormattedValue('nonexistent')).toBe('');
        });

        test('should provide getAliasedFormattedValue for MultiOptionSet', () => {
            const { createWebApiEntity } = require('../lib/devkit');
            const entity = {
                'alias.cats@OData.Community.Display.V1.FormattedValue': 'Cat1; Cat2; Cat3'
            };
            const result = createWebApiEntity(entity, 'account', 'accounts', {});

            expect(result.getAliasedFormattedValue('alias.cats', true)).toEqual(['Cat1', 'Cat2', 'Cat3']);
        });

        test('should define fields from fieldConfig', () => {
            const { createWebApiEntity } = require('../lib/devkit');
            const entity = {
                numberofemployees: 100,
                revenue: 1000000.50,
                donotemail: true,
                createdon: '2023-12-25T10:00:00Z'
            };
            const fieldConfig = {
                NumberOfEmployees: { logicalName: 'numberofemployees', type: 'Integer' },
                Revenue: { logicalName: 'revenue', type: 'Number' },
                DoNotEmail: { logicalName: 'donotemail', type: 'Boolean' },
                CreatedOn: { logicalName: 'createdon', type: 'DateTime' }
            };
            const result = createWebApiEntity(entity, 'account', 'accounts', fieldConfig);

            expect(result.NumberOfEmployees).toBe(100);
            expect(result.Revenue).toBe(1000000.50);
            expect(result.DoNotEmail).toBe(true);
            expect(result.CreatedOn).toBeInstanceOf(Date);
        });
    });

    // ========================================================================
    // AccountApi Integration Tests (like Account.webapi.ts usage)
    // ========================================================================

    describe('AccountApi Integration (Account.webapi.ts style)', () => {
        test('should create AccountApi instance with entity data', () => {
            const { createWebApiEntity } = require('../lib/devkit');
            const entity = {
                accountid: 'acc-123',
                name: 'Contoso Ltd',
                numberofemployees: 500,
                revenue: 5000000,
                '_primarycontactid_value': 'contact-456',
                '_primarycontactid_value@Microsoft.Dynamics.CRM.lookuplogicalname': 'contact',
                'name@OData.Community.Display.V1.FormattedValue': 'Contoso Ltd'
            };
            const fieldConfig = {
                AccountId: { logicalName: 'accountid' },
                Name: { logicalName: 'name' },
                NumberOfEmployees: { logicalName: 'numberofemployees', type: 'Integer' },
                Revenue: { logicalName: 'revenue', type: 'Number' },
                PrimaryContactId: {
                    schemaName: 'primarycontactid',
                    logicalName: '_primarycontactid_value',
                    entityCollectionName: 'contacts',
                    entityLogicalName: 'contact'
                }
            };

            const account = createWebApiEntity(entity, 'account', 'accounts', fieldConfig);

            expect(account.AccountId).toBe('acc-123');
            expect(account.Name).toBe('Contoso Ltd');
            expect(account.NumberOfEmployees).toBe(500);
            expect(account.Revenue).toBe(5000000);
            expect(account.PrimaryContactId).toBe('contact-456');
            expect(account.FormattedValue.Name).toBe('Contoso Ltd');
        });

        test('should create empty AccountApi for create operations', () => {
            const { createWebApiEntity } = require('../lib/devkit');
            const fieldConfig = {
                Name: { logicalName: 'name' },
                Revenue: { logicalName: 'revenue', type: 'Number' }
            };

            const account = createWebApiEntity(undefined, 'account', 'accounts', fieldConfig);

            expect(account.Name).toBeNull();
            account.Name = 'New Company';
            account.Revenue = 1000000;

            expect(account.Entity.name).toBe('New Company');
            expect(account.Entity.revenue).toBe(1000000);
        });
    });

    // ========================================================================
    // Coverage: DateTime Invalid Date object (line 1026)
    // ========================================================================

    describe('Type Parsers - DateTime with Invalid Date object (line 1026)', () => {
        function createFieldWithType(entity: Record<string, any>, type?: string): any {
            const { defineWebApiField } = require('../lib/devkit');
            const obj: any = { FormattedValue: {} };
            const upsertEntity: Record<string, any> = {};
            defineWebApiField(obj, 'testField', entity, {
                logicalName: 'testfield',
                schemaName: 'Testfield',
                type: type as any
            }, upsertEntity);
            return obj;
        }

        test('should return null for invalid Date object (NaN timestamp)', () => {
            // This tests line 1026: if (value instanceof Date) return isNaN(value.getTime()) ? null : value;
            // When value is a Date but getTime() returns NaN
            const invalidDate = new Date('invalid');
            expect(isNaN(invalidDate.getTime())).toBe(true); // Confirm it's invalid
            const entity = { testfield: invalidDate };
            const obj = createFieldWithType(entity, 'DateTime');
            expect(obj.testField).toBeNull();
        });
    });

    // ========================================================================
    // Coverage: webApiReturnGet Unknown Type (line 1060)
    // ========================================================================

    describe('Type Parsers - Unknown Type Fallback (line 1060)', () => {
        function createFieldWithType(entity: Record<string, any>, type?: string): any {
            const { defineWebApiField } = require('../lib/devkit');
            const obj: any = { FormattedValue: {} };
            const upsertEntity: Record<string, any> = {};
            defineWebApiField(obj, 'testField', entity, {
                logicalName: 'testfield',
                schemaName: 'Testfield',
                type: type as any
            }, upsertEntity);
            return obj;
        }

        test('should return data as-is for unknown type (line 1060 parser fallback)', () => {
            // This tests line 1060: return parser ? parser(data) : data;
            // When type is not recognized (no parser found), it should return data unchanged
            const entity = { testfield: 'some-custom-value' };
            const obj = createFieldWithType(entity, 'UnknownType' as any);
            expect(obj.testField).toBe('some-custom-value');
        });

        test('should return object as-is for unknown type', () => {
            const customObject = { foo: 'bar', num: 123 };
            const entity = { testfield: customObject };
            const obj = createFieldWithType(entity, 'CustomType' as any);
            expect(obj.testField).toEqual(customObject);
        });
    });
});
