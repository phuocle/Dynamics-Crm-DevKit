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
});
