/**
 * Unit Tests for devkit.ts - QuickForm Loading
 * Test file: Account.Test05.quickform.test.ts
 *
 * Coverage targets:
 * - loadQuickForms() function
 * - QuickForm properties and methods
 */
import { XrmMockGenerator } from 'xrm-mock';
import { FormBase } from '../../lib/devkit';

// Global setup
let mockGlobalContext: any;

describe('devkit.ts - QuickForm Loading', () => {
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

    // Helper: Create mock quick view form control
    function createMockQuickViewControl(name: string, isLoaded: boolean = true) {
        let _disabled = false;
        let _visible = true;
        let _label = 'Quick View Label';
        return {
            getName: () => name,
            getParent: () => ({ getName: () => 'parentSection' }),
            getControlType: () => 'quickform',
            getDisabled: () => _disabled,
            setDisabled: (v: boolean) => { _disabled = v; },
            getLabel: () => _label,
            setLabel: (v: string) => { _label = v; },
            getVisible: () => _visible,
            setVisible: (v: boolean) => { _visible = v; },
            getControl: (arg: any) => null,
            setFocus: jest.fn(),
            isLoaded: () => isLoaded,
            refresh: jest.fn(),
            // Quick view form inner entity/attributes
            data: {
                entity: {
                    attributes: {
                        get: (name: string) => ({
                            getName: () => name,
                            getValue: () => 'Test Value',
                            setValue: jest.fn(),
                            getAttributeType: () => 'string'
                        })
                    }
                }
            },
            getFormContext: function () { return this; }
        };
    }

    // Helper: Create formContext with quick forms
    function createFormContextWithQuickForms(quickForms: Record<string, any>) {
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
                quickForms: {
                    get: (name: string) => quickForms[name] || null,
                    getLength: () => Object.keys(quickForms).length
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
                process: null
            },
            getControl: () => null,
            getAttribute: () => null,
            getFormContext: function () { return this; }
        };
    }

    describe('loadQuickForms', () => {
        test('should load quick form controls', () => {
            const quickControl = createMockQuickViewControl('ContactQuickView');
            const formContext = createFormContextWithQuickForms({ ContactQuickView: quickControl });
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: [],
                grid: [],
                navigation: [],
                quick: ['ContactQuickView'],
                bpf: []
            });

            expect(form.QuickForm).toBeDefined();
            expect(form.QuickForm.ContactQuickView).toBeDefined();
        });

        test('should return ControlName property', () => {
            const quickControl = createMockQuickViewControl('ContactQuickView');
            const formContext = createFormContextWithQuickForms({ ContactQuickView: quickControl });
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: [],
                grid: [],
                navigation: [],
                quick: ['ContactQuickView'],
                bpf: []
            });

            expect(form.QuickForm.ContactQuickView.ControlName).toBe('ContactQuickView');
        });

        test('should return ControlParent property', () => {
            const quickControl = createMockQuickViewControl('ContactQuickView');
            const formContext = createFormContextWithQuickForms({ ContactQuickView: quickControl });
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: [],
                grid: [],
                navigation: [],
                quick: ['ContactQuickView'],
                bpf: []
            });

            expect(form.QuickForm.ContactQuickView.ControlParent).toEqual({ getName: expect.any(Function) });
        });

        test('should return ControlType property', () => {
            const quickControl = createMockQuickViewControl('ContactQuickView');
            const formContext = createFormContextWithQuickForms({ ContactQuickView: quickControl });
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: [],
                grid: [],
                navigation: [],
                quick: ['ContactQuickView'],
                bpf: []
            });

            expect(form.QuickForm.ContactQuickView.ControlType).toBe('quickform');
        });

        test('should handle Disabled getter and setter', () => {
            const quickControl = createMockQuickViewControl('ContactQuickView');
            const formContext = createFormContextWithQuickForms({ ContactQuickView: quickControl });
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: [],
                grid: [],
                navigation: [],
                quick: ['ContactQuickView'],
                bpf: []
            });

            expect(form.QuickForm.ContactQuickView.Disabled).toBe(false);
            form.QuickForm.ContactQuickView.Disabled = true;
            expect(form.QuickForm.ContactQuickView.Disabled).toBe(true);
        });

        test('should handle Label getter and setter', () => {
            const quickControl = createMockQuickViewControl('ContactQuickView');
            const formContext = createFormContextWithQuickForms({ ContactQuickView: quickControl });
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: [],
                grid: [],
                navigation: [],
                quick: ['ContactQuickView'],
                bpf: []
            });

            expect(form.QuickForm.ContactQuickView.Label).toBe('Quick View Label');
            form.QuickForm.ContactQuickView.Label = 'New Label';
            expect(form.QuickForm.ContactQuickView.Label).toBe('New Label');
        });

        test('should handle Visible getter and setter', () => {
            const quickControl = createMockQuickViewControl('ContactQuickView');
            const formContext = createFormContextWithQuickForms({ ContactQuickView: quickControl });
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: [],
                grid: [],
                navigation: [],
                quick: ['ContactQuickView'],
                bpf: []
            });

            expect(form.QuickForm.ContactQuickView.Visible).toBe(true);
            form.QuickForm.ContactQuickView.Visible = false;
            expect(form.QuickForm.ContactQuickView.Visible).toBe(false);
        });

        test('should call IsLoaded method', () => {
            const quickControl = createMockQuickViewControl('ContactQuickView', true);
            const formContext = createFormContextWithQuickForms({ ContactQuickView: quickControl });
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: [],
                grid: [],
                navigation: [],
                quick: ['ContactQuickView'],
                bpf: []
            });

            expect(form.QuickForm.ContactQuickView.IsLoaded()).toBe(true);
        });

        test('should call Refresh method', () => {
            const quickControl = createMockQuickViewControl('ContactQuickView');
            const formContext = createFormContextWithQuickForms({ ContactQuickView: quickControl });
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: [],
                grid: [],
                navigation: [],
                quick: ['ContactQuickView'],
                bpf: []
            });

            form.QuickForm.ContactQuickView.Refresh();
            expect(quickControl.refresh).toHaveBeenCalled();
        });

        test('should call Focus method', () => {
            const quickControl = createMockQuickViewControl('ContactQuickView');
            const formContext = createFormContextWithQuickForms({ ContactQuickView: quickControl });
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: [],
                grid: [],
                navigation: [],
                quick: ['ContactQuickView'],
                bpf: []
            });

            form.QuickForm.ContactQuickView.Focus();
            expect(quickControl.setFocus).toHaveBeenCalled();
        });

        test('should call Controls method', () => {
            const quickControl = createMockQuickViewControl('ContactQuickView');
            const formContext = createFormContextWithQuickForms({ ContactQuickView: quickControl });
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: [],
                grid: [],
                navigation: [],
                quick: ['ContactQuickView'],
                bpf: []
            });

            const result = form.QuickForm.ContactQuickView.Controls('fieldname');
            // Returns null since getControl returns null in mock
            expect(result).toBeNull();
        });

        test('should handle quick form with fields', () => {
            const quickControl = createMockQuickViewControl('ContactQuickView');
            const formContext = createFormContextWithQuickForms({ ContactQuickView: quickControl });
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: [],
                grid: [],
                navigation: [],
                quick: ['ContactQuickView___fullname', 'ContactQuickView___emailaddress1'],
                bpf: []
            });

            expect(form.QuickForm.ContactQuickView).toBeDefined();
            // Body property should exist for quick form fields
            expect(form.QuickForm.ContactQuickView.Body).toBeDefined();
        });

        test('should handle multiple quick forms', () => {
            const quickControl1 = createMockQuickViewControl('ContactQuickView');
            const quickControl2 = createMockQuickViewControl('AccountQuickView');
            const formContext = createFormContextWithQuickForms({
                ContactQuickView: quickControl1,
                AccountQuickView: quickControl2
            });
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: [],
                grid: [],
                navigation: [],
                quick: ['ContactQuickView', 'AccountQuickView'],
                bpf: []
            });

            expect(form.QuickForm.ContactQuickView).toBeDefined();
            expect(form.QuickForm.AccountQuickView).toBeDefined();
        });

        test('should handle no quick forms configured', () => {
            const formContext = createFormContextWithQuickForms({});
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

            expect(form.QuickForm).toEqual({});
        });
    });
});
