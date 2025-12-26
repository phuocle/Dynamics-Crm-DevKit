/**
 * Unit Tests for Account.form.ts
 * Test file: Account.Test01.form.test.ts
 * 
 * Coverage targets:
 * - FormAccount_DevKitV4.Form class constructor
 * - Form configuration (body, header, tab, grid, navigation, quick, bpf)
 */
import { XrmMockGenerator } from 'xrm-mock';
import { FormAccount_DevKitV4 } from '../entities/generator/Account.form';

// Global setup
let mockGlobalContext: any;

describe('Account.form.ts - Form Class', () => {
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

    // Helper: Create a formContext mock
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
                    getId: () => 'account-guid',
                    getEntityName: () => 'account',
                    getIsDirty: () => false,
                    isValid: () => true,
                    getDataXml: () => '<data/>',
                    getEntityReference: () => ({ id: 'account-guid', entityType: 'account', name: 'Test Account' }),
                    getPrimaryAttributeValue: () => 'Test Account',
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
                    getCurrentItem: () => ({ getId: () => 'account-form-guid', getLabel: () => 'Account DevKitV4' }),
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
    // Form Class Constructor Tests
    // =========================================================================
    describe('Form Constructor', () => {
        test('Form should be instantiated with executionContext', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };

            const form = new FormAccount_DevKitV4.Form(executionContext);

            expect(form).toBeDefined();
            expect(form.EntityName).toBe('account');
        });

        test('Form should accept optional defaultWebResourceName', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };

            const form = new FormAccount_DevKitV4.Form(executionContext, 'dev_/webresources/account');

            expect(form).toBeDefined();
        });

        test('Form should expose Body property', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };

            const form = new FormAccount_DevKitV4.Form(executionContext);

            expect(form.Body).toBeDefined();
        });

        test('Form should expose Header property', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };

            const form = new FormAccount_DevKitV4.Form(executionContext);

            expect(form.Header).toBeDefined();
        });

        test('Form should expose Grid property', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };

            const form = new FormAccount_DevKitV4.Form(executionContext);

            expect(form.Grid).toBeDefined();
        });

        test('Form should expose Navigation property', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };

            const form = new FormAccount_DevKitV4.Form(executionContext);

            expect(form.Navigation).toBeDefined();
        });

        test('Form should expose QuickForm property', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };

            const form = new FormAccount_DevKitV4.Form(executionContext);

            expect(form.QuickForm).toBeDefined();
        });

        test('Form should expose Process property', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };

            const form = new FormAccount_DevKitV4.Form(executionContext);

            expect(form.Process).toBeDefined();
        });

        test('Form should expose ExecutionContext property', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };

            const form = new FormAccount_DevKitV4.Form(executionContext);

            expect(form.ExecutionContext).toBeDefined();
        });

        test('Form should expose Utility property', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };

            const form = new FormAccount_DevKitV4.Form(executionContext);

            expect(form.Utility).toBeDefined();
        });
    });

    // =========================================================================
    // Form Properties Tests
    // =========================================================================
    describe('Form Properties', () => {
        test('FormId should return the form ID', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };

            const form = new FormAccount_DevKitV4.Form(executionContext);

            expect(form.FormId).toBe('account-form-guid');
        });

        test('FormLabel should return the form label', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };

            const form = new FormAccount_DevKitV4.Form(executionContext);

            expect(form.FormLabel).toBe('Account DevKitV4');
        });

        test('FormType should return the form type', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };

            const form = new FormAccount_DevKitV4.Form(executionContext);

            expect(form.FormType).toBe(2);
        });

        test('EntityId should return the entity ID', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };

            const form = new FormAccount_DevKitV4.Form(executionContext);

            expect(form.EntityId).toBe('account-guid');
        });
    });
});
