/**
 * Unit Tests for devkit.ts - Tabs and Sections
 * Test file: Account.Test11.tabs.sections.test.ts
 *
 * Coverage targets:
 * - Lines 166-202: loadTabs() function
 * - Tab properties: Name, Parent, ContentType, DisplayState, Label, Visible
 * - Section properties: Name, Parent, Label, Visible
 * - Tab methods: AddTabStateChange, Focus, RemoveTabStateChange
 */
import { XrmMockGenerator } from 'xrm-mock';
import { FormBase } from '../../lib/devkit';

// Global setup
let mockGlobalContext: any;

describe('devkit.ts - Tabs and Sections', () => {
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

    // Helper: Create mock section
    function createMockSection(name: string, label: string) {
        let _label = label;
        let _visible = true;
        return {
            getName: () => name,
            getLabel: () => _label,
            setLabel: jest.fn((v: string) => { _label = v; }),
            getVisible: () => _visible,
            setVisible: jest.fn((v: boolean) => { _visible = v; }),
            getParent: () => ({ getName: () => 'parentTab' })
        };
    }

    // Helper: Create mock tab
    function createMockTab(name: string, label: string, sections: Record<string, any>) {
        let _label = label;
        let _visible = true;
        let _displayState = 'expanded';
        let _contentType = 'cardSections';
        return {
            getName: () => name,
            getLabel: () => _label,
            setLabel: jest.fn((v: string) => { _label = v; }),
            getVisible: () => _visible,
            setVisible: jest.fn((v: boolean) => { _visible = v; }),
            getDisplayState: () => _displayState,
            setDisplayState: jest.fn((v: string) => { _displayState = v; }),
            getContentType: () => _contentType,
            setContentType: jest.fn((v: string) => { _contentType = v; }),
            getParent: () => ({ getFormType: () => 2 }),
            setFocus: jest.fn(),
            addTabStateChange: jest.fn(),
            removeTabStateChange: jest.fn(),
            sections: {
                get: (sectionName: string) => sections[sectionName] || null,
                getLength: () => Object.keys(sections).length,
                forEach: (cb: any) => Object.values(sections).forEach(cb)
            }
        };
    }

    // Helper: Create formContext with tabs
    function createFormContextWithTabs(tabs: Record<string, any>) {
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
                tabs: {
                    get: (tabName: string) => tabs[tabName] || null,
                    getLength: () => Object.keys(tabs).length,
                    forEach: (cb: any) => Object.values(tabs).forEach(cb)
                },
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

    describe('loadTabs', () => {
        test('should load tabs and sections', () => {
            const section1 = createMockSection('GeneralSection', 'General Information');
            const section2 = createMockSection('DetailsSection', 'Details');
            const generalTab = createMockTab('General', 'General', {
                GeneralSection: section1,
                DetailsSection: section2
            });

            const formContext = createFormContextWithTabs({ General: generalTab });
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: ['General___GeneralSection', 'General___DetailsSection'],
                grid: [],
                navigation: [],
                quick: [],
                bpf: []
            });

            expect(form.Body.Tab).toBeDefined();
            expect(form.Body.Tab.General).toBeDefined();
            expect(form.Body.Tab.General.Section).toBeDefined();
            expect(form.Body.Tab.General.Section.GeneralSection).toBeDefined();
            expect(form.Body.Tab.General.Section.DetailsSection).toBeDefined();
        });

        test('Tab should have Name property', () => {
            const section = createMockSection('Section1', 'Section 1');
            const tab = createMockTab('tab_general', 'General Tab', { Section1: section });

            const formContext = createFormContextWithTabs({ tab_general: tab });
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: ['tab_general___Section1'],
                grid: [],
                navigation: [],
                quick: [],
                bpf: []
            });

            expect(form.Body.Tab.tab_general.Name).toBe('tab_general');
        });

        test('Tab should have Parent property', () => {
            const section = createMockSection('Section1', 'Section 1');
            const tab = createMockTab('tab_general', 'General Tab', { Section1: section });

            const formContext = createFormContextWithTabs({ tab_general: tab });
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: ['tab_general___Section1'],
                grid: [],
                navigation: [],
                quick: [],
                bpf: []
            });

            expect(form.Body.Tab.tab_general.Parent).toBeDefined();
        });

        test('Tab should have DisplayState getter and setter', () => {
            const section = createMockSection('Section1', 'Section 1');
            const tab = createMockTab('tab_general', 'General Tab', { Section1: section });

            const formContext = createFormContextWithTabs({ tab_general: tab });
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: ['tab_general___Section1'],
                grid: [],
                navigation: [],
                quick: [],
                bpf: []
            });

            expect(form.Body.Tab.tab_general.DisplayState).toBe('expanded');
            form.Body.Tab.tab_general.DisplayState = 'collapsed';
            expect(tab.setDisplayState).toHaveBeenCalledWith('collapsed');
        });

        test('Tab should have ContentType getter and setter', () => {
            const section = createMockSection('Section1', 'Section 1');
            const tab = createMockTab('tab_general', 'General Tab', { Section1: section });

            const formContext = createFormContextWithTabs({ tab_general: tab });
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: ['tab_general___Section1'],
                grid: [],
                navigation: [],
                quick: [],
                bpf: []
            });

            expect(form.Body.Tab.tab_general.ContentType).toBe('cardSections');
            form.Body.Tab.tab_general.ContentType = 'singleComponent';
            expect(tab.setContentType).toHaveBeenCalledWith('singleComponent');
        });

        test('Tab should have Label getter and setter', () => {
            const section = createMockSection('Section1', 'Section 1');
            const tab = createMockTab('tab_general', 'General Tab', { Section1: section });

            const formContext = createFormContextWithTabs({ tab_general: tab });
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: ['tab_general___Section1'],
                grid: [],
                navigation: [],
                quick: [],
                bpf: []
            });

            expect(form.Body.Tab.tab_general.Label).toBe('General Tab');
            form.Body.Tab.tab_general.Label = 'New Label';
            expect(tab.setLabel).toHaveBeenCalledWith('New Label');
        });

        test('Tab should have Visible getter and setter', () => {
            const section = createMockSection('Section1', 'Section 1');
            const tab = createMockTab('tab_general', 'General Tab', { Section1: section });

            const formContext = createFormContextWithTabs({ tab_general: tab });
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: ['tab_general___Section1'],
                grid: [],
                navigation: [],
                quick: [],
                bpf: []
            });

            expect(form.Body.Tab.tab_general.Visible).toBe(true);
            form.Body.Tab.tab_general.Visible = false;
            expect(tab.setVisible).toHaveBeenCalledWith(false);
        });

        test('Tab should have AddTabStateChange method', () => {
            const section = createMockSection('Section1', 'Section 1');
            const tab = createMockTab('tab_general', 'General Tab', { Section1: section });

            const formContext = createFormContextWithTabs({ tab_general: tab });
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: ['tab_general___Section1'],
                grid: [],
                navigation: [],
                quick: [],
                bpf: []
            });

            const callback = jest.fn();
            form.Body.Tab.tab_general.AddTabStateChange(callback);
            expect(tab.addTabStateChange).toHaveBeenCalledWith(callback);
        });

        test('Tab should have RemoveTabStateChange method', () => {
            const section = createMockSection('Section1', 'Section 1');
            const tab = createMockTab('tab_general', 'General Tab', { Section1: section });

            const formContext = createFormContextWithTabs({ tab_general: tab });
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: ['tab_general___Section1'],
                grid: [],
                navigation: [],
                quick: [],
                bpf: []
            });

            const callback = jest.fn();
            form.Body.Tab.tab_general.RemoveTabStateChange(callback);
            expect(tab.removeTabStateChange).toHaveBeenCalledWith(callback);
        });

        test('Tab should have Focus method', () => {
            const section = createMockSection('Section1', 'Section 1');
            const tab = createMockTab('tab_general', 'General Tab', { Section1: section });

            const formContext = createFormContextWithTabs({ tab_general: tab });
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: ['tab_general___Section1'],
                grid: [],
                navigation: [],
                quick: [],
                bpf: []
            });

            form.Body.Tab.tab_general.Focus();
            expect(tab.setFocus).toHaveBeenCalled();
        });
    });

    describe('Section properties', () => {
        test('Section should have Name property', () => {
            const section = createMockSection('Section1', 'Section 1');
            const tab = createMockTab('tab_general', 'General Tab', { Section1: section });

            const formContext = createFormContextWithTabs({ tab_general: tab });
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: ['tab_general___Section1'],
                grid: [],
                navigation: [],
                quick: [],
                bpf: []
            });

            expect(form.Body.Tab.tab_general.Section.Section1.Name).toBe('Section1');
        });

        test('Section should have Parent property', () => {
            const section = createMockSection('Section1', 'Section 1');
            const tab = createMockTab('tab_general', 'General Tab', { Section1: section });

            const formContext = createFormContextWithTabs({ tab_general: tab });
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: ['tab_general___Section1'],
                grid: [],
                navigation: [],
                quick: [],
                bpf: []
            });

            expect(form.Body.Tab.tab_general.Section.Section1.Parent).toBeDefined();
        });

        test('Section should have Label getter and setter', () => {
            const section = createMockSection('Section1', 'Original Label');
            const tab = createMockTab('tab_general', 'General Tab', { Section1: section });

            const formContext = createFormContextWithTabs({ tab_general: tab });
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: ['tab_general___Section1'],
                grid: [],
                navigation: [],
                quick: [],
                bpf: []
            });

            expect(form.Body.Tab.tab_general.Section.Section1.Label).toBe('Original Label');
            form.Body.Tab.tab_general.Section.Section1.Label = 'New Label';
            expect(section.setLabel).toHaveBeenCalledWith('New Label');
        });

        test('Section should have Visible getter and setter', () => {
            const section = createMockSection('Section1', 'Section 1');
            const tab = createMockTab('tab_general', 'General Tab', { Section1: section });

            const formContext = createFormContextWithTabs({ tab_general: tab });
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: ['tab_general___Section1'],
                grid: [],
                navigation: [],
                quick: [],
                bpf: []
            });

            expect(form.Body.Tab.tab_general.Section.Section1.Visible).toBe(true);
            form.Body.Tab.tab_general.Section.Section1.Visible = false;
            expect(section.setVisible).toHaveBeenCalledWith(false);
        });
    });

    describe('Multiple tabs and sections', () => {
        test('should handle multiple tabs with multiple sections each', () => {
            const generalSection = createMockSection('GeneralInfo', 'General Information');
            const addressSection = createMockSection('AddressInfo', 'Address Information');
            const generalTab = createMockTab('General', 'General', {
                GeneralInfo: generalSection,
                AddressInfo: addressSection
            });

            const notesSection = createMockSection('NotesSection', 'Notes');
            const notesTab = createMockTab('Notes', 'Notes', {
                NotesSection: notesSection
            });

            const formContext = createFormContextWithTabs({
                General: generalTab,
                Notes: notesTab
            });
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: [
                    'General___GeneralInfo',
                    'General___AddressInfo',
                    'Notes___NotesSection'
                ],
                grid: [],
                navigation: [],
                quick: [],
                bpf: []
            });

            expect(form.Body.Tab.General).toBeDefined();
            expect(form.Body.Tab.General.Section.GeneralInfo).toBeDefined();
            expect(form.Body.Tab.General.Section.AddressInfo).toBeDefined();
            expect(form.Body.Tab.Notes).toBeDefined();
            expect(form.Body.Tab.Notes.Section.NotesSection).toBeDefined();
        });
    });
});
