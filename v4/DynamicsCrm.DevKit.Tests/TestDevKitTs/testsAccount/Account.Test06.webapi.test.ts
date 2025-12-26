/**
 * Unit Tests for devkit.ts - WebApi Loading
 * Test file: Account.Test06.webapi.test.ts
 *
 * Coverage targets:
 * - loadWebApi() function
 * - WebApi methods: CreateRecord, DeleteRecord, UpdateRecord, Execute, etc.
 * - RetrieveRecords and RetrieveRecord with factory pattern
 */
import { XrmMockGenerator } from 'xrm-mock';
import { FormBase } from '../lib/devkit';

// Global setup
let mockGlobalContext: any;
let mockWebApi: any;

describe('devkit.ts - WebApi Loading', () => {
    beforeEach(() => {
        (global as any).window = (global as any).window || {};
        XrmMockGenerator.initialise();
        (global as any).window.Xrm = (global as any).Xrm;

        // Mock WebApi with all methods
        mockWebApi = {
            createRecord: jest.fn().mockResolvedValue({ id: 'new-id' }),
            deleteRecord: jest.fn().mockResolvedValue({ id: 'deleted-id' }),
            updateRecord: jest.fn().mockResolvedValue({ id: 'updated-id' }),
            retrieveRecord: jest.fn().mockResolvedValue({ name: 'Test Record' }),
            retrieveMultipleRecords: jest.fn().mockResolvedValue({ entities: [{ name: 'Test Record 1' }] }),
            execute: jest.fn().mockResolvedValue({ response: 'ok' }),
            executeMultiple: jest.fn().mockResolvedValue([{ response: 'ok' }]),
            online: {
                execute: jest.fn().mockResolvedValue({ response: 'online-ok' }),
                executeMultiple: jest.fn().mockResolvedValue([{ response: 'online-ok' }])
            },
            offline: {
                isAvailable: jest.fn().mockReturnValue(true)
            }
        };

        mockGlobalContext = {
            client: { getClient: () => 'Web', getClientState: () => 'Online', getFormFactor: () => 1, isNetworkAvailable: () => true, isOffline: () => false },
            organizationSettings: { attributes: {}, baseCurrency: { id: 'USD' }, baseCurrencyId: 'usd-guid', defaultCountryCode: 'US', isAutoSaveEnabled: true, languageId: 1033, organizationId: 'org-guid', uniqueName: 'TestOrg', useSkypeProtocol: false },
            userSettings: { dateFormattingInfo: {}, defaultDashboardId: 'dash-guid', isGuidedHelpEnabled: true, isHighContrastEnabled: false, isRTL: false, languageId: 1033, roles: { get: () => [] }, securityRolePrivileges: [], securityRoles: [], getTimeZoneOffsetMinutes: () => -420, transactionCurrency: {}, transactionCurrencyId: 'currency-guid', userId: 'user-guid', userName: 'testuser' },
            getClientUrl: () => 'https://test.crm.dynamics.com',
            getCurrentAppUrl: () => 'https://test.crm.dynamics.com/main.aspx',
            isOnPremises: () => false,
            getVersion: () => '9.2.0.0',
            getCurrentAppName: () => Promise.resolve('Test App'),
            getCurrentAppProperties: () => Promise.resolve({ appId: 'app1' }),
            getAdvancedConfigSetting: () => 10,
            prependOrgName: (path: string) => `/org${path}`,
            getWebResourceUrl: () => '/webresources/test'
        };

        (Xrm.Utility as any).getGlobalContext = () => mockGlobalContext;
        (Xrm as any).WebApi = mockWebApi;
        (Xrm as any).Encoding = { htmlAttributeEncode: (a: string) => a, htmlDecode: (a: string) => a, htmlEncode: (a: string) => a, xmlAttributeEncode: (a: string) => a, xmlEncode: (a: string) => a };
        (Xrm as any).Navigation = { navigateTo: () => Promise.resolve(), openAlertDialog: () => Promise.resolve(), openConfirmDialog: () => Promise.resolve({ confirmed: true }), openErrorDialog: () => Promise.resolve(), openForm: () => Promise.resolve({ savedEntityReference: [] }), openFile: () => { }, openUrl: () => { }, openWebResource: () => { } };
        (Xrm as any).App = { addGlobalNotification: () => Promise.resolve('id'), clearGlobalNotification: () => Promise.resolve(), sidePanes: { state: 0, createPane: () => Promise.resolve(), getPane: () => null, getAllPanes: () => [], getSelectedPane: () => null } };
        (Xrm as any).Device = { captureAudio: () => Promise.resolve({}), captureImage: () => Promise.resolve({}), captureVideo: () => Promise.resolve({}), getBarcodeValue: () => Promise.resolve(''), getCurrentPosition: () => Promise.resolve({ coords: {} }), pickFile: () => Promise.resolve([]) };
        (Xrm as any).Panel = { loadPanel: () => { } };
        (Xrm as any).Copilot = { executeEvent: () => Promise.resolve(), executePrompt: () => Promise.resolve() };
        (Xrm.Utility as any).closeProgressIndicator = () => { };
        (Xrm.Utility as any).showProgressIndicator = () => { };
        (Xrm.Utility as any).getLearningPathAttributeName = () => 'lp';
        (Xrm.Utility as any).getPageContext = () => ({});
        (Xrm.Utility as any).getAllowedStatusTransitions = () => Promise.resolve([]);
        (Xrm.Utility as any).getEntityMetadata = () => Promise.resolve({});
        (Xrm.Utility as any).invokeProcessAction = () => Promise.resolve({});
        (Xrm.Utility as any).lookupObjects = () => Promise.resolve([]);
        (Xrm.Utility as any).refreshParentGrid = () => { };
        (Xrm.Utility as any).getResourceString = () => '';
        (Xrm.Utility as any).getEntityMainFormDescriptor = () => ({});
    });

    // Helper: Create a minimal formContext
    function createFormContext() {
        return {
            data: {
                getIsDirty: () => false,
                isValid: () => true,
                refresh: () => Promise.resolve(),
                save: () => Promise.resolve(),
                addOnLoad: () => { },
                removeOnLoad: () => { },
                entity: {
                    attributes: { get: () => null, getLength: () => 0, forEach: () => { } },
                    getId: () => 'entity-guid',
                    getEntityName: () => 'account',
                    getIsDirty: () => false,
                    isValid: () => true,
                    getDataXml: () => '<data/>',
                    getEntityReference: () => ({ id: 'entity-guid', entityType: 'account' }),
                    getPrimaryAttributeValue: () => 'Test',
                    addOnSave: () => { },
                    removeOnSave: () => { },
                    addOnPostSave: () => { },
                    removeOnPostSave: () => { }
                },
                process: null
            },
            ui: {
                getFormType: () => 2,
                controls: { get: () => null, getLength: () => 0, forEach: () => { } },
                tabs: { get: () => null, getLength: () => 0, forEach: () => { } },
                formSelector: {
                    getCurrentItem: () => ({ getId: () => 'form-guid', getLabel: () => 'Main Form' }),
                    items: { getLength: () => 0, get: () => null, forEach: () => { } }
                },
                getViewPortHeight: () => 800,
                getViewPortWidth: () => 1200,
                clearFormNotification: () => true,
                setFormNotification: () => true,
                close: () => { },
                refreshRibbon: () => { },
                addLoaded: () => { },
                removeLoaded: () => { },
                addOnLoad: () => { },
                removeOnLoad: () => { },
                setFormEntityName: () => { },
                process: null,
                quickForms: { get: () => null, getLength: () => 0 }
            },
            getControl: () => null,
            getAttribute: () => null,
            getFormContext: function () { return this; }
        };
    }

    describe('loadWebApi', () => {
        test('should expose WebApi on FormBase', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {});

            expect(form.WebApi).toBeDefined();
        });

        test('CreateRecord should call WebApi.createRecord and return promise', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const result = await form.WebApi.CreateRecord('account', { name: 'Test' });
            expect(mockWebApi.createRecord).toHaveBeenCalledWith('account', { name: 'Test' });
            expect(result).toEqual({ id: 'new-id' });
        });

        test('CreateRecord with callbacks should invoke success callback', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const successCallback = jest.fn();
            const errorCallback = jest.fn();

            form.WebApi.CreateRecord('account', { name: 'Test' }, successCallback, errorCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(successCallback).toHaveBeenCalledWith({ id: 'new-id' });
        });

        test('DeleteRecord should call WebApi.deleteRecord', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const result = await form.WebApi.DeleteRecord('account', 'account-id');
            expect(mockWebApi.deleteRecord).toHaveBeenCalledWith('account', 'account-id');
            expect(result).toEqual({ id: 'deleted-id' });
        });

        test('DeleteRecord with callbacks should invoke success callback', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const successCallback = jest.fn();
            form.WebApi.DeleteRecord('account', 'account-id', successCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(successCallback).toHaveBeenCalledWith({ id: 'deleted-id' });
        });

        test('UpdateRecord should call WebApi.updateRecord', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const result = await form.WebApi.UpdateRecord('account', 'account-id', { name: 'Updated' });
            expect(mockWebApi.updateRecord).toHaveBeenCalledWith('account', 'account-id', { name: 'Updated' });
            expect(result).toEqual({ id: 'updated-id' });
        });

        test('UpdateRecord with callbacks should invoke success callback', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const successCallback = jest.fn();
            form.WebApi.UpdateRecord('account', 'account-id', { name: 'Updated' }, successCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(successCallback).toHaveBeenCalledWith({ id: 'updated-id' });
        });

        test('RetrieveMultipleRecords should call WebApi.retrieveMultipleRecords', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const result = await form.WebApi.RetrieveMultipleRecords('account', '?$select=name');
            expect(mockWebApi.retrieveMultipleRecords).toHaveBeenCalledWith('account', '?$select=name', undefined);
        });

        test('RetrieveMultipleRecords with callbacks should invoke success callback', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const successCallback = jest.fn();
            form.WebApi.RetrieveMultipleRecords('account', '?$select=name', undefined, successCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(successCallback).toHaveBeenCalled();
        });

        test('Execute should call WebApi.execute', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const request = { getMetadata: () => ({}) };
            const result = await form.WebApi.Execute(request);
            expect(mockWebApi.execute).toHaveBeenCalledWith(request);
            expect(result).toEqual({ response: 'ok' });
        });

        test('Execute with callbacks should invoke success callback', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const successCallback = jest.fn();
            const request = { getMetadata: () => ({}) };
            form.WebApi.Execute(request, successCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(successCallback).toHaveBeenCalledWith({ response: 'ok' });
        });

        test('ExecuteMultiple should call WebApi.executeMultiple', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const requests = [{ getMetadata: () => ({}) }];
            const result = await form.WebApi.ExecuteMultiple(requests);
            expect(mockWebApi.executeMultiple).toHaveBeenCalledWith(requests);
            expect(result).toEqual([{ response: 'ok' }]);
        });

        test('ExecuteMultiple with callbacks should invoke success callback', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const successCallback = jest.fn();
            const requests = [{ getMetadata: () => ({}) }];
            form.WebApi.ExecuteMultiple(requests, successCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(successCallback).toHaveBeenCalledWith([{ response: 'ok' }]);
        });

        test('Online.Execute should call WebApi.online.execute', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const request = { getMetadata: () => ({}) };
            const result = await form.WebApi.Online.Execute(request);
            expect(mockWebApi.online.execute).toHaveBeenCalledWith(request);
            expect(result).toEqual({ response: 'online-ok' });
        });

        test('Online.Execute with callbacks should invoke success callback', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const successCallback = jest.fn();
            const request = { getMetadata: () => ({}) };
            form.WebApi.Online.Execute(request, successCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(successCallback).toHaveBeenCalledWith({ response: 'online-ok' });
        });

        test('Online.ExecuteMultiple should call WebApi.online.executeMultiple', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const requests = [{ getMetadata: () => ({}) }];
            const result = await form.WebApi.Online.ExecuteMultiple(requests);
            expect(mockWebApi.online.executeMultiple).toHaveBeenCalledWith(requests);
            expect(result).toEqual([{ response: 'online-ok' }]);
        });

        test('Online.ExecuteMultiple with callbacks should invoke success callback', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const successCallback = jest.fn();
            const requests = [{ getMetadata: () => ({}) }];
            form.WebApi.Online.ExecuteMultiple(requests, successCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(successCallback).toHaveBeenCalledWith([{ response: 'online-ok' }]);
        });

        test('Offline.IsAvailable should call WebApi.offline.isAvailable', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const result = form.WebApi.Offline.IsAvailable('account');
            expect(mockWebApi.offline.isAvailable).toHaveBeenCalledWith('account');
            expect(result).toBe(true);
        });

        test('RetrieveRecord with factory should transform result', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            // Factory function
            const factory = (entity: any) => ({ wrapped: true, data: entity });

            const result = await form.WebApi.RetrieveRecord(factory, 'account', 'account-id', '?$select=name');
            expect(mockWebApi.retrieveRecord).toHaveBeenCalledWith('account', 'account-id', '?$select=name');
            expect(result).toEqual({ wrapped: true, data: { name: 'Test Record' } });
        });

        test('RetrieveRecord with constructor should instantiate class', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            // Constructor class
            class TestEntity {
                public name: string;
                constructor(entity: any) {
                    this.name = entity.name;
                }
            }

            const result = await form.WebApi.RetrieveRecord(TestEntity, 'account', 'account-id', '?$select=name');
            expect(result).toBeInstanceOf(TestEntity);
            expect(result.name).toBe('Test Record');
        });

        test('RetrieveRecord with callbacks should invoke success callback', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const successCallback = jest.fn();
            const errorCallback = jest.fn();
            const factory = (entity: any) => entity;

            // @ts-ignore - testing callback overload
            form.WebApi.RetrieveRecord(factory, 'account', 'account-id', '?$select=name', successCallback, errorCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(successCallback).toHaveBeenCalled();
        });

        test('RetrieveRecord with function as options should default to $select=*', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const factory = (entity: any) => entity;
            const successCallback = jest.fn();

            // Pass function as 4th param (options position)
            // @ts-ignore - testing callback overload
            form.WebApi.RetrieveRecord(factory, 'account', 'account-id', successCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(mockWebApi.retrieveRecord).toHaveBeenCalledWith('account', 'account-id', '?$select=*');
        });

        test('RetrieveRecord with no options should default to $select=*', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const factory = (entity: any) => entity;

            await form.WebApi.RetrieveRecord(factory, 'account', 'account-id');
            expect(mockWebApi.retrieveRecord).toHaveBeenCalledWith('account', 'account-id', '?$select=*');
        });

        test('RetrieveRecords with entityLogicalName should work correctly', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const factory = (entity: any) => ({ wrapped: true, data: entity });

            const result = await form.WebApi.RetrieveRecords(factory, 'account', '?$select=name', 100);
            expect(mockWebApi.retrieveMultipleRecords).toHaveBeenCalledWith('account', '?$select=name', 100);
            expect(result).toHaveLength(1);
            expect(result[0]).toEqual({ wrapped: true, data: { name: 'Test Record 1' } });
        });

        // Note: Tests for fetchXml require DOMParser which is not available in Node.js
        // These tests are skipped and should be tested in a browser environment

        test('RetrieveRecords with callback as 4th param should work with function', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const successCallback = jest.fn();
            const errorCallback = jest.fn();
            const factory = (entity: any) => entity;

            // @ts-ignore - testing callback overload
            form.WebApi.RetrieveRecords(factory, 'account', '?$select=name', successCallback, errorCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(successCallback).toHaveBeenCalled();
        });

        test('RetrieveRecords with empty result should return empty array', async () => {
            mockWebApi.retrieveMultipleRecords.mockResolvedValueOnce({ entities: [] });

            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const factory = (entity: any) => entity;
            const result = await form.WebApi.RetrieveRecords(factory, 'account', '?$select=name');
            expect(result).toEqual([]);
        });
    });
});

