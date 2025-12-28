/**
 * Unit Tests for devkit.ts - Copilot and SidePanes Loading
 * Test file: Account.Test08.copilot.sidepanes.test.ts
 *
 * Coverage targets:
 * - loadCopilot() function
 * - loadSidePanes() function
 */
import { XrmMockGenerator } from 'xrm-mock';
import { FormBase } from '../../lib/devkit';

// Global setup
let mockGlobalContext: any;
let mockSidePanes: any;
let mockCopilot: any;

describe('devkit.ts - Copilot and SidePanes Loading', () => {
    beforeEach(() => {
        (global as any).window = (global as any).window || {};
        XrmMockGenerator.initialise();
        (global as any).window.Xrm = (global as any).Xrm;

        // Mock SidePanes
        mockSidePanes = {
            state: 0,
            createPane: jest.fn().mockResolvedValue({ paneId: 'pane-1' }),
            getPane: jest.fn().mockReturnValue({ paneId: 'pane-1', title: 'Test Pane' }),
            getAllPanes: jest.fn().mockReturnValue([{ paneId: 'pane-1' }, { paneId: 'pane-2' }]),
            getSelectedPane: jest.fn().mockReturnValue({ paneId: 'selected-pane' })
        };

        // Mock Copilot
        mockCopilot = {
            executeEvent: jest.fn().mockResolvedValue({ success: true }),
            executePrompt: jest.fn().mockResolvedValue({ response: 'AI response' })
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
        (Xrm as any).WebApi = { createRecord: jest.fn(), deleteRecord: jest.fn(), updateRecord: jest.fn(), retrieveRecord: jest.fn(), retrieveMultipleRecords: jest.fn(), execute: jest.fn(), executeMultiple: jest.fn(), online: { execute: jest.fn(), executeMultiple: jest.fn() }, offline: { isAvailable: jest.fn() } };
        (Xrm as any).Encoding = { htmlAttributeEncode: (a: string) => a, htmlDecode: (a: string) => a, htmlEncode: (a: string) => a, xmlAttributeEncode: (a: string) => a, xmlEncode: (a: string) => a };
        (Xrm as any).Navigation = { navigateTo: () => Promise.resolve(), openAlertDialog: () => Promise.resolve(), openConfirmDialog: () => Promise.resolve({ confirmed: true }), openErrorDialog: () => Promise.resolve(), openForm: () => Promise.resolve({ savedEntityReference: [] }), openFile: () => { }, openUrl: () => { }, openWebResource: () => { } };
        (Xrm as any).App = { addGlobalNotification: () => Promise.resolve('id'), clearGlobalNotification: () => Promise.resolve(), sidePanes: mockSidePanes };
        (Xrm as any).Device = { captureAudio: () => Promise.resolve({}), captureImage: () => Promise.resolve({}), captureVideo: () => Promise.resolve({}), getBarcodeValue: () => Promise.resolve(''), getCurrentPosition: () => Promise.resolve({ coords: {} }), pickFile: () => Promise.resolve([]) };
        (Xrm as any).Panel = { loadPanel: () => { } };
        (Xrm as any).Copilot = mockCopilot;
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

    // =========================================================================
    // Copilot Tests
    // =========================================================================
    describe('loadCopilot', () => {
        test('should expose Copilot on FormBase', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            expect(form.Copilot).toBeDefined();
        });

        test('ExecuteEvent should call Xrm.Copilot.executeEvent and return promise', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const eventName = 'TestEvent';
            const eventParameters = { param1: 'value1' };
            const result = await form.Copilot.ExecuteEvent(eventName, eventParameters);

            expect(mockCopilot.executeEvent).toHaveBeenCalledWith(eventName, eventParameters);
            expect(result).toEqual({ success: true });
        });

        test('ExecuteEvent with callbacks should invoke success callback', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const successCallback = jest.fn();
            const errorCallback = jest.fn();
            const eventName = 'TestEvent';
            const eventParameters = { param1: 'value1' };

            form.Copilot.ExecuteEvent(eventName, eventParameters, successCallback, errorCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(successCallback).toHaveBeenCalledWith({ success: true });
            expect(errorCallback).not.toHaveBeenCalled();
        });

        test('ExecutePrompt should call Xrm.Copilot.executePrompt and return promise', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const promptText = 'What is the weather today?';
            const result = await form.Copilot.ExecutePrompt(promptText);

            expect(mockCopilot.executePrompt).toHaveBeenCalledWith(promptText);
            expect(result).toEqual({ response: 'AI response' });
        });

        test('ExecutePrompt with callbacks should invoke success callback', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const successCallback = jest.fn();
            const errorCallback = jest.fn();
            const promptText = 'Hello AI';

            form.Copilot.ExecutePrompt(promptText, successCallback, errorCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(successCallback).toHaveBeenCalledWith({ response: 'AI response' });
            expect(errorCallback).not.toHaveBeenCalled();
        });
    });

    // =========================================================================
    // SidePanes Tests
    // =========================================================================
    describe('loadSidePanes', () => {
        test('should expose SidePanes on FormBase', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            expect(form.SidePanes).toBeDefined();
        });

        test('DisplayState getter should return sidePanes.state', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            expect(form.SidePanes.DisplayState).toBe(0);
        });

        test('DisplayState setter should update sidePanes.state', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            form.SidePanes.DisplayState = 1;
            expect(mockSidePanes.state).toBe(1);
        });

        test('Create should call sidePanes.createPane', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const paneOptions = { paneId: 'test-pane', title: 'Test Pane' };
            const successCallback = jest.fn();

            form.SidePanes.Create(paneOptions, successCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(mockSidePanes.createPane).toHaveBeenCalledWith(paneOptions);
            expect(successCallback).toHaveBeenCalledWith({ paneId: 'pane-1' });
        });

        test('Get should call sidePanes.getPane', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const result = form.SidePanes.Get('pane-1');
            expect(mockSidePanes.getPane).toHaveBeenCalledWith('pane-1');
            expect(result).toEqual({ paneId: 'pane-1', title: 'Test Pane' });
        });

        test('GetAll should call sidePanes.getAllPanes', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const result = form.SidePanes.GetAll();
            expect(mockSidePanes.getAllPanes).toHaveBeenCalled();
            expect(result).toEqual([{ paneId: 'pane-1' }, { paneId: 'pane-2' }]);
        });

        test('GetSelected should call sidePanes.getSelectedPane', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const result = form.SidePanes.GetSelected();
            expect(mockSidePanes.getSelectedPane).toHaveBeenCalled();
            expect(result).toEqual({ paneId: 'selected-pane' });
        });
    });
});
