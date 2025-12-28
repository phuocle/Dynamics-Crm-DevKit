/**
 * Unit Tests for devkit.ts - Navigation Loading
 * Test file: Account.Test03.navigation.test.ts
 *
 * Coverage targets:
 * - loadNavigations() function
 * - Navigation item getters and setters
 */
import { XrmMockGenerator } from 'xrm-mock';
import { FormBase } from '../../lib/devkit';

// Global setup
let mockGlobalContext: any;

describe('devkit.ts - Navigation Loading', () => {
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

    // Helper: Create mock navigation items
    function createMockNavigationItem(id: string, label: string, visible: boolean = true) {
        let _label = label;
        let _visible = visible;
        return {
            getId: () => id,
            getLabel: () => _label,
            setLabel: (val: string) => { _label = val; },
            getVisible: () => _visible,
            setVisible: (val: boolean) => { _visible = val; },
            setFocus: jest.fn()
        };
    }

    // Helper: Create a formContext with navigation items
    function createFormContextWithNavigation(navigationItems: any[]) {
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
                navigation: {
                    items: {
                        getLength: () => navigationItems.length,
                        get: (index: number) => navigationItems[index]
                    }
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

    describe('loadNavigations', () => {
        test('should load navigation items and expose properties', () => {
            const navItem1 = createMockNavigationItem('nav_contact', 'Contacts', true);
            const navItem2 = createMockNavigationItem('nav_opportunity', 'Opportunities', false);
            const formContext = createFormContextWithNavigation([navItem1, navItem2]);
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: [],
                grid: [],
                navigation: ['nav_contact', 'nav_opportunity'],
                quick: [],
                bpf: []
            });

            expect(form.Navigation).toBeDefined();
            expect(form.Navigation.nav_contact).toBeDefined();
            expect(form.Navigation.nav_opportunity).toBeDefined();
        });

        test('should return correct Id property', () => {
            const navItem = createMockNavigationItem('nav_contact', 'Contacts');
            const formContext = createFormContextWithNavigation([navItem]);
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: [],
                grid: [],
                navigation: ['nav_contact'],
                quick: [],
                bpf: []
            });

            expect(form.Navigation.nav_contact.Id).toBe('nav_contact');
        });

        test('should handle Label getter and setter', () => {
            const navItem = createMockNavigationItem('nav_contact', 'Contacts');
            const formContext = createFormContextWithNavigation([navItem]);
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: [],
                grid: [],
                navigation: ['nav_contact'],
                quick: [],
                bpf: []
            });

            expect(form.Navigation.nav_contact.Label).toBe('Contacts');

            form.Navigation.nav_contact.Label = 'Updated Label';
            expect(form.Navigation.nav_contact.Label).toBe('Updated Label');
        });

        test('should handle Visible getter and setter', () => {
            const navItem = createMockNavigationItem('nav_contact', 'Contacts', true);
            const formContext = createFormContextWithNavigation([navItem]);
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: [],
                grid: [],
                navigation: ['nav_contact'],
                quick: [],
                bpf: []
            });

            expect(form.Navigation.nav_contact.Visible).toBe(true);

            form.Navigation.nav_contact.Visible = false;
            expect(form.Navigation.nav_contact.Visible).toBe(false);
        });

        test('should call Focus method', () => {
            const navItem = createMockNavigationItem('nav_contact', 'Contacts');
            const formContext = createFormContextWithNavigation([navItem]);
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: [],
                grid: [],
                navigation: ['nav_contact'],
                quick: [],
                bpf: []
            });

            form.Navigation.nav_contact.Focus();
            expect(navItem.setFocus).toHaveBeenCalled();
        });

        test('should handle multiple navigation items', () => {
            const items = [
                createMockNavigationItem('nav_contact', 'Contacts'),
                createMockNavigationItem('nav_opportunity', 'Opportunities'),
                createMockNavigationItem('nav_case', 'Cases')
            ];
            const formContext = createFormContextWithNavigation(items);
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: [],
                grid: [],
                navigation: ['nav_contact', 'nav_opportunity', 'nav_case'],
                quick: [],
                bpf: []
            });

            expect(form.Navigation.nav_contact.Id).toBe('nav_contact');
            expect(form.Navigation.nav_opportunity.Id).toBe('nav_opportunity');
            expect(form.Navigation.nav_case.Id).toBe('nav_case');
        });

        test('should handle navigation item not found', () => {
            const formContext = createFormContextWithNavigation([]);
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: [],
                grid: [],
                navigation: ['nav_nonexistent'],
                quick: [],
                bpf: []
            });

            // Should still create the navigation object, but getters return undefined
            expect(form.Navigation.nav_nonexistent).toBeDefined();
            expect(form.Navigation.nav_nonexistent.Id).toBeUndefined();
        });

        test('should handle no navigation items configured', () => {
            const formContext = createFormContextWithNavigation([]);
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

            expect(form.Navigation).toEqual({});
        });
    });
});
