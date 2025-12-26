/**
 * Unit Tests for devkit.ts - Basic Functions
 * Test file: Account.Test00.devkit.test.ts
 * 
 * Coverage targets:
 * - getXrm() function
 * - getter() and getterSetter() helpers
 * - FormBase constructor
 * - createWebApiEntity() function
 */
import { XrmMockGenerator } from 'xrm-mock';
import { FormBase, createWebApiEntity } from '../lib/devkit';

// Global setup
let mockGlobalContext: any;

describe('devkit.ts - Core Functions', () => {
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

    // Helper: Create a minimal formContext mock
    function createFormContext(options: {
        entityId?: string;
        entityName?: string;
        formId?: string;
        formLabel?: string;
        formType?: number;
    } = {}) {
        const {
            entityId = 'entity-guid',
            entityName = 'account',
            formId = 'form-guid',
            formLabel = 'Main Form',
            formType = 2
        } = options;

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
                    getId: () => entityId,
                    getEntityName: () => entityName,
                    getIsDirty: () => false,
                    isValid: () => true,
                    getDataXml: () => '<data/>',
                    getEntityReference: () => ({ id: entityId, entityType: entityName }),
                    getPrimaryAttributeValue: () => 'Test',
                    addOnSave: () => { },
                    removeOnSave: () => { },
                    addOnPostSave: () => { },
                    removeOnPostSave: () => { }
                },
                process: null
            },
            ui: {
                getFormType: () => formType,
                controls: { get: () => null, getLength: () => 0, forEach: () => { } },
                tabs: { get: () => null, getLength: () => 0, forEach: () => { } },
                formSelector: {
                    getCurrentItem: () => ({ getId: () => formId, getLabel: () => formLabel }),
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
    // FormBase Tests
    // =========================================================================
    describe('FormBase', () => {
        test('FormBase constructor should initialize with minimal config', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test_webresource', {
                body: [],
                header: [],
                tab: [],
                grid: [],
                navigation: [],
                quick: [],
                bpf: []
            });

            expect(form).toBeDefined();
            expect(form.EntityName).toBe('account');
            expect(form.FormId).toBe('form-guid');
        });

        test('FormBase should expose Body, Header, Grid properties', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            expect(form.Body).toBeDefined();
            expect(form.Header).toBeDefined();
            expect(form.Grid).toBeDefined();
        });

        test('FormBase should handle custom entity and form', () => {
            const formContext = createFormContext({
                entityName: 'contact',
                formId: 'custom-form-id',
                formLabel: 'Custom Form'
            });
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, undefined, {});

            expect(form.EntityName).toBe('contact');
            expect(form.FormId).toBe('custom-form-id');
            expect(form.FormLabel).toBe('Custom Form');
        });
    });

    // =========================================================================
    // createWebApiEntity Tests
    // =========================================================================
    describe('createWebApiEntity', () => {
        test('should create WebApi entity with empty entity', () => {
            const fieldConfig = {
                Name: { logicalName: 'name' },
                AccountId: { logicalName: 'accountid' }
            };

            const result = createWebApiEntity(undefined, 'account', 'accounts', fieldConfig);

            expect(result).toBeDefined();
            expect(result.EntityName).toBe('account');
            expect(result.EntityCollectionName).toBe('accounts');
        });

        test('should parse string fields correctly', () => {
            const entity = {
                name: 'Test Account',
                accountid: 'guid-123'
            };
            const fieldConfig = {
                Name: { logicalName: 'name' },
                AccountId: { logicalName: 'accountid' }
            };

            const result = createWebApiEntity(entity, 'account', 'accounts', fieldConfig);

            expect(result.Name).toBe('Test Account');
            expect(result.AccountId).toBe('guid-123');
        });

        test('should handle integer type fields', () => {
            const entity = {
                numberofemployees: 100
            };
            const fieldConfig = {
                NumberOfEmployees: { logicalName: 'numberofemployees', type: 'Integer' }
            };

            const result = createWebApiEntity(entity, 'account', 'accounts', fieldConfig);

            expect(result.NumberOfEmployees).toBe(100);
        });

        test('should handle boolean type fields', () => {
            const entity = {
                creditonhold: true
            };
            const fieldConfig = {
                CreditOnHold: { logicalName: 'creditonhold', type: 'Boolean' }
            };

            const result = createWebApiEntity(entity, 'account', 'accounts', fieldConfig);

            expect(result.CreditOnHold).toBe(true);
        });

        test('should handle formatted values', () => {
            const entity = {
                statecode: 0,
                'statecode@OData.Community.Display.V1.FormattedValue': 'Active'
            };
            const fieldConfig = {
                StateCode: { logicalName: 'statecode', type: 'Integer' }
            };

            const result = createWebApiEntity(entity, 'account', 'accounts', fieldConfig);

            expect(result.FormattedValue.StateCode).toBe('Active');
        });

        test('should handle lookup fields', () => {
            const entity = {
                '_primarycontactid_value': 'contact-guid',
                '_primarycontactid_value@OData.Community.Display.V1.FormattedValue': 'John Doe'
            };
            const fieldConfig = {
                PrimaryContactId: {
                    schemaName: 'primarycontactid',
                    logicalName: '_primarycontactid_value',
                    entityCollectionName: 'contacts',
                    entityLogicalName: 'contact'
                }
            };

            const result = createWebApiEntity(entity, 'account', 'accounts', fieldConfig);

            expect(result.PrimaryContactId).toBe('contact-guid');
        });

        test('should handle getAliasedValue', () => {
            const entity = {
                'contact.fullname': 'John Doe'
            };
            const fieldConfig = {};

            const result = createWebApiEntity(entity, 'account', 'accounts', fieldConfig);

            expect(result.getAliasedValue('contact.fullname')).toBe('John Doe');
        });

        test('should handle getAliasedValue with null', () => {
            const entity = {};
            const fieldConfig = {};

            const result = createWebApiEntity(entity, 'account', 'accounts', fieldConfig);

            expect(result.getAliasedValue('nonexistent')).toBeNull();
        });

        test('should handle getAliasedFormattedValue', () => {
            const entity = {
                'contact.statecode': 0,
                'contact.statecode@OData.Community.Display.V1.FormattedValue': 'Active'
            };
            const fieldConfig = {};

            const result = createWebApiEntity(entity, 'account', 'accounts', fieldConfig);

            expect(result.getAliasedFormattedValue('contact.statecode')).toBe('Active');
        });

        test('should handle getAliasedFormattedValue with null', () => {
            const entity = {};
            const fieldConfig = {};

            const result = createWebApiEntity(entity, 'account', 'accounts', fieldConfig);

            expect(result.getAliasedFormattedValue('nonexistent')).toBe('');
        });
    });
});
