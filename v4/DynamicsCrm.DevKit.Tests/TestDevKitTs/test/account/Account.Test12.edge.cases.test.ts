/**
 * Unit Tests for devkit.ts - Additional Edge Cases
 * Test file: Account.Test12.edge.cases.test.ts
 *
 * Coverage targets:
 * - Lines 149: attribute from control fallback
 * - Lines 330: grid selectedRows with getData
 * - Lines 687-689, 695-697: Refresh/Save with callbacks
 * - Lines 1079-1085: Boolean parsing edge cases
 */
import { XrmMockGenerator } from 'xrm-mock';
import { FormBase, createWebApiEntity } from '../../lib/devkit';

// Global setup
let mockGlobalContext: any;

describe('devkit.ts - Edge Cases', () => {
    beforeEach(() => {
        (global as any).window = (global as any).window || {};
        XrmMockGenerator.initialise();
        (global as any).window.Xrm = (global as any).Xrm;

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

    function createFormContextWithCallbacks() {
        return {
            data: {
                getIsDirty: () => false,
                isValid: () => true,
                refresh: jest.fn().mockResolvedValue(undefined),
                save: jest.fn().mockResolvedValue(undefined),
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
                headerSection: {
                    getBodyVisible: () => true,
                    setBodyVisible: jest.fn(),
                    getCommandBarVisible: () => true,
                    setCommandBarVisible: jest.fn(),
                    getTabNavigatorVisible: () => true,
                    setTabNavigatorVisible: jest.fn()
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

    describe('Refresh and Save with Callbacks', () => {
        test('Refresh with successCallback should call callback', async () => {
            const formContext = createFormContextWithCallbacks();
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: [],
                grid: [],
                navigation: [],
                quick: [],
                bpf: []
            });

            const successCallback = jest.fn();
            const errorCallback = jest.fn();

            form.Refresh(true, successCallback, errorCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(successCallback).toHaveBeenCalled();
        });

        test('Save with successCallback should call callback', async () => {
            const formContext = createFormContextWithCallbacks();
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: [],
                grid: [],
                navigation: [],
                quick: [],
                bpf: []
            });

            const successCallback = jest.fn();
            const errorCallback = jest.fn();

            form.Save({}, successCallback, errorCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(successCallback).toHaveBeenCalled();
        });

        test('Refresh without callback should return promise', async () => {
            const formContext = createFormContextWithCallbacks();
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: [],
                grid: [],
                navigation: [],
                quick: [],
                bpf: []
            });

            const result = form.Refresh(false);
            expect(result).toBeInstanceOf(Promise);
            await result;
        });

        test('Save without callback should return promise', async () => {
            const formContext = createFormContextWithCallbacks();
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: [],
                grid: [],
                navigation: [],
                quick: [],
                bpf: []
            });

            const result = form.Save({});
            expect(result).toBeInstanceOf(Promise);
            await result;
        });
    });

    describe('Attribute from Control Fallback', () => {
        test('should get attribute from control when attribute not found directly', () => {
            const attribute = {
                getName: () => 'myfield',
                getValue: () => 'Test Value',
                setValue: jest.fn(),
                getAttributeType: () => 'string',
                getFormat: () => 'text',
                getIsDirty: () => false,
                isValid: () => true,
                getParent: () => ({}),
                getRequiredLevel: () => 'none',
                setRequiredLevel: jest.fn(),
                getSubmitMode: () => 'always',
                setSubmitMode: jest.fn(),
                addOnChange: jest.fn(),
                removeOnChange: jest.fn(),
                fireOnChange: jest.fn(),
                controls: { forEach: jest.fn() }
            };

            const control = {
                getName: () => 'myfield',
                getLabel: () => 'My Field',
                getControlType: () => 'standard',
                getDisabled: () => false,
                setDisabled: jest.fn(),
                getVisible: () => true,
                setVisible: jest.fn(),
                setFocus: jest.fn(),
                getAttribute: () => attribute,  // Control has attribute
                getParent: () => ({ getName: () => 'section' })
            };

            // No attribute in getAttribute, but control exists and has getAttribute
            const formContext = {
                data: {
                    getIsDirty: () => false,
                    isValid: () => true,
                    refresh: jest.fn().mockResolvedValue(undefined),
                    save: jest.fn().mockResolvedValue(undefined),
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
                    headerSection: {
                        getBodyVisible: () => true,
                        setBodyVisible: jest.fn(),
                        getCommandBarVisible: () => true,
                        setCommandBarVisible: jest.fn(),
                        getTabNavigatorVisible: () => true,
                        setTabNavigatorVisible: jest.fn()
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
                getControl: (name: string) => name === 'myfield' ? control : null,
                getAttribute: () => null, // No attribute directly
                getFormContext: function () { return this; }
            };

            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: ['myfield'],
                header: [],
                tab: [],
                grid: [],
                navigation: [],
                quick: [],
                bpf: []
            });

            // Should still work because attribute is obtained from control.getAttribute()
            expect(form.Body.myfield).toBeDefined();
            expect(form.Body.myfield.Value).toBe('Test Value');
        });
    });
});

