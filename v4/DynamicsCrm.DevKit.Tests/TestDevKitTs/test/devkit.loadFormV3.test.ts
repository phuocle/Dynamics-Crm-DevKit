/**
 * Unit Tests for devkit.ts - loadFormV3 function
 * Using xrm-mock framework for Dynamics 365/Xrm API simulation
 */
import { XrmMockGenerator } from 'xrm-mock';
import { FormBase } from '../lib/devkit';

// Global setup
let mockGlobalContext: any;

describe('loadFormV3 Tests', () => {
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

    // Helper: Create a comprehensive formContext mock
    function createFormContext(options: {
        entityId?: string;
        entityName?: string;
        formId?: string;
        formLabel?: string;
        formType?: number;
        isDirty?: boolean;
        isValid?: boolean;
        primaryValue?: string;
        formItems?: { id: string; label: string; visible?: boolean }[];
        headerFields?: string[];
        bodyFields?: string[];
        tabs?: { name: string; label: string; sections?: { name: string; label: string }[] }[];
        dialogFields?: string[];
    } = {}) {
        const {
            entityId = 'entity-guid',
            entityName = 'account',
            formId = 'form-guid',
            formLabel = 'Main Form',
            formType = 2,
            isDirty = false,
            isValid = true,
            primaryValue = 'Test Record',
            formItems = [],
            headerFields = [],
            bodyFields = [],
            tabs = [],
            dialogFields = []
        } = options;

        const onLoadCallbacks: any[] = [];
        const onSaveCallbacks: any[] = [];
        const onPostSaveCallbacks: any[] = [];
        const uiOnLoadCallbacks: any[] = [];
        const uiLoadedCallbacks: any[] = [];

        // Create form items for the form selector
        const formItemsMock = formItems.map((item, idx) => ({
            getId: () => item.id,
            getLabel: () => item.label,
            getVisible: () => item.visible ?? true,
            setVisible: (v: boolean) => { },
            navigate: () => { }
        }));

        // Create tab sections mock
        const createSection = (name: string, label: string) => ({
            getName: () => name,
            getLabel: () => label,
            setLabel: (l: string) => { },
            getVisible: () => true,
            setVisible: (v: boolean) => { },
            getParent: () => ({})
        });

        // Create tab mock
        const createTab = (name: string, label: string, sections: { name: string; label: string }[] = []) => ({
            getName: () => name,
            getLabel: () => label,
            setLabel: (l: string) => { },
            getVisible: () => true,
            setVisible: (v: boolean) => { },
            getDisplayState: () => 'expanded',
            setDisplayState: (s: string) => { },
            setFocus: () => { },
            getParent: () => ({}),
            getContentType: () => 'cardSections',
            setContentType: (c: string) => { },
            sections: {
                get: (idx: any) => sections[idx] ? createSection(sections[idx].name, sections[idx].label) : null,
                getLength: () => sections.length,
                forEach: (cb: any) => sections.forEach((s, i) => cb(createSection(s.name, s.label), i))
            },
            addTabStateChange: () => { },
            removeTabStateChange: () => { }
        });

        const tabsMock = tabs.map(t => createTab(t.name, t.label, t.sections || []));

        // Create attribute mock
        const createAttribute = (name: string) => ({
            getName: () => name,
            getValue: () => null,
            setValue: () => { },
            getIsDirty: () => false,
            getRequiredLevel: () => 'none',
            setRequiredLevel: () => { },
            getSubmitMode: () => 'dirty',
            setSubmitMode: () => { },
            getAttributeType: () => 'string',
            getFormat: () => 'text',
            getMaxLength: () => 100,
            getParent: () => ({}),
            getUserPrivilege: () => ({ canRead: true, canUpdate: true, canCreate: true }),
            isValid: () => true,
            setIsValid: () => { },
            addOnChange: () => { },
            removeOnChange: () => { },
            fireOnChange: () => { },
            controls: { get: () => null, getLength: () => 0, forEach: () => { } }
        });

        // Create control mock
        const createControl = (name: string, controlType: string = 'standard') => ({
            getName: () => name,
            getLabel: () => `${name} Label`,
            setLabel: (l: string) => { },
            getVisible: () => true,
            setVisible: (v: boolean) => { },
            getDisabled: () => false,
            setDisabled: (d: boolean) => { },
            setFocus: () => { },
            getControlType: () => controlType,
            getParent: () => ({}),
            getAttribute: () => createAttribute(name),
            clearNotification: () => true,
            setNotification: () => true,
            addNotification: () => { }
        });

        const allFields = [...bodyFields, ...headerFields.map(h => `header_${h}`), ...dialogFields];
        const attributesMap = new Map<string, any>();
        allFields.forEach(f => attributesMap.set(f, createAttribute(f)));

        const controlsMap = new Map<string, any>();
        allFields.forEach(f => controlsMap.set(f, createControl(f)));

        return {
            data: {
                getIsDirty: () => isDirty,
                isValid: () => isValid,
                refresh: (save?: boolean) => Promise.resolve(),
                save: (saveOptions?: any) => Promise.resolve(),
                addOnLoad: (cb: any) => onLoadCallbacks.push(cb),
                removeOnLoad: (cb: any) => { const idx = onLoadCallbacks.indexOf(cb); if (idx >= 0) onLoadCallbacks.splice(idx, 1); },
                entity: {
                    attributes: {
                        get: (name: any) => attributesMap.get(name) || null,
                        getLength: () => attributesMap.size,
                        forEach: (cb: any) => attributesMap.forEach((v, k) => cb(v, k))
                    },
                    getId: () => entityId,
                    getEntityName: () => entityName,
                    getIsDirty: () => isDirty,
                    isValid: () => isValid,
                    getDataXml: () => '<data/>',
                    getEntityReference: () => ({ id: entityId, entityType: entityName, name: primaryValue }),
                    getPrimaryAttributeValue: () => primaryValue,
                    addOnSave: (cb: any) => onSaveCallbacks.push(cb),
                    removeOnSave: (cb: any) => { const idx = onSaveCallbacks.indexOf(cb); if (idx >= 0) onSaveCallbacks.splice(idx, 1); },
                    addOnPostSave: (cb: any) => onPostSaveCallbacks.push(cb),
                    removeOnPostSave: (cb: any) => { const idx = onPostSaveCallbacks.indexOf(cb); if (idx >= 0) onPostSaveCallbacks.splice(idx, 1); }
                },
                process: null
            },
            ui: {
                getFormType: () => formType,
                controls: {
                    get: (name: any) => controlsMap.get(name) || null,
                    getLength: () => controlsMap.size,
                    forEach: (cb: any) => controlsMap.forEach((v, k) => cb(v, k))
                },
                tabs: {
                    get: (idx: any) => tabsMock[idx] || null,
                    getLength: () => tabsMock.length,
                    forEach: (cb: any) => tabsMock.forEach((t, i) => cb(t, i))
                },
                formSelector: {
                    getCurrentItem: () => ({ getId: () => formId, getLabel: () => formLabel }),
                    items: {
                        getLength: () => formItemsMock.length,
                        get: (idx: number) => formItemsMock[idx] || null,
                        forEach: (cb: any) => formItemsMock.forEach((item, i) => cb(item, i))
                    }
                },
                getViewPortHeight: () => 800,
                getViewPortWidth: () => 1200,
                clearFormNotification: (id: string) => true,
                setFormNotification: (msg: string, level: string, id: string) => true,
                close: () => { },
                refreshRibbon: (refreshAll?: boolean) => { },
                addLoaded: (cb: any) => uiLoadedCallbacks.push(cb),
                removeLoaded: (cb: any) => { const idx = uiLoadedCallbacks.indexOf(cb); if (idx >= 0) uiLoadedCallbacks.splice(idx, 1); },
                addOnLoad: (cb: any) => uiOnLoadCallbacks.push(cb),
                removeOnLoad: (cb: any) => { const idx = uiOnLoadCallbacks.indexOf(cb); if (idx >= 0) uiOnLoadCallbacks.splice(idx, 1); },
                setFormEntityName: (name: string) => { },
                process: null,
                quickForms: { get: () => null, getLength: () => 0 }
            },
            getControl: (name: string) => controlsMap.get(name) || null,
            getAttribute: (name: string) => attributesMap.get(name) || null,
            getFormContext: function () { return this; }
        };
    }

    // Helper: Create FormBase instance with config
    function getForm(options: {
        formContext?: any;
        body?: string[];
        header?: string[];
        tab?: string[];
        grid?: string[];
        navigation?: string[];
        quick?: string[];
        bpf?: string[];
        dialog?: string[];
    } = {}): any {
        const formContext = options.formContext || createFormContext();
        const executionContext = { getFormContext: () => formContext };
        return new FormBase(executionContext, 'test_webresource', {
            body: options.body || [],
            header: options.header || [],
            tab: options.tab || [],
            grid: options.grid || [],
            navigation: options.navigation || [],
            quick: options.quick || [],
            bpf: options.bpf || []
        });
    }

    // =========================================================================
    // BASIC FORM PROPERTIES TESTS
    // =========================================================================
    describe('Basic Form Properties', () => {
        test('EntityId should return entity ID', () => {
            const formContext = createFormContext({ entityId: 'my-entity-guid' });
            const form = getForm({ formContext });
            expect(form.EntityId).toBe('my-entity-guid');
        });

        test('EntityName should return entity logical name', () => {
            const formContext = createFormContext({ entityName: 'contact' });
            const form = getForm({ formContext });
            expect(form.EntityName).toBe('contact');
        });

        test('FormId should return form ID', () => {
            const formContext = createFormContext({ formId: 'form-123' });
            const form = getForm({ formContext });
            expect(form.FormId).toBe('form-123');
        });

        test('FormLabel should return form label', () => {
            const formContext = createFormContext({ formLabel: 'Custom Form' });
            const form = getForm({ formContext });
            expect(form.FormLabel).toBe('Custom Form');
        });

        test('FormType should return form type number', () => {
            const formContext = createFormContext({ formType: 1 });
            const form = getForm({ formContext });
            expect(form.FormType).toBe(1);
        });

        test('PrimaryAttributeValue should return primary attribute value', () => {
            const formContext = createFormContext({ primaryValue: 'Test Account' });
            const form = getForm({ formContext });
            expect(form.PrimaryAttributeValue).toBe('Test Account');
        });

        test('EntityReference should return entity reference object', () => {
            const formContext = createFormContext({ entityId: 'guid-1', entityName: 'account', primaryValue: 'Acme Corp' });
            const form = getForm({ formContext });
            const ref = form.EntityReference;
            expect(ref.id).toBe('guid-1');
            expect(ref.entityType).toBe('account');
            expect(ref.name).toBe('Acme Corp');
        });
    });

    // =========================================================================
    // DATA PROPERTIES TESTS
    // =========================================================================
    describe('Data Properties', () => {
        test('DataIsDirty should return dirty state', () => {
            const formContext = createFormContext({ isDirty: true });
            const form = getForm({ formContext });
            expect(form.DataIsDirty).toBe(true);
        });

        test('DataIsValid should return valid state', () => {
            const formContext = createFormContext({ isValid: false });
            const form = getForm({ formContext });
            expect(form.DataIsValid).toBe(false);
        });

        test('EntityIsDirty should return entity dirty state', () => {
            const formContext = createFormContext({ isDirty: true });
            const form = getForm({ formContext });
            expect(form.EntityIsDirty).toBe(true);
        });

        test('EntityIsValid should return entity valid state', () => {
            const formContext = createFormContext({ isValid: true });
            const form = getForm({ formContext });
            expect(form.EntityIsValid).toBe(true);
        });

        test('DataXml should return data XML string', () => {
            const formContext = createFormContext();
            const form = getForm({ formContext });
            expect(form.DataXml).toBe('<data/>');
        });

        test('Attributes should return attributes collection', () => {
            const formContext = createFormContext({ bodyFields: ['name'] });
            const form = getForm({ formContext, body: ['Name'] });
            expect(form.Attributes).toBeDefined();
        });

        test('Controls should return controls collection', () => {
            const formContext = createFormContext();
            const form = getForm({ formContext });
            expect(form.Controls).toBeDefined();
        });
    });

    // =========================================================================
    // UI VIEWPORT PROPERTIES TESTS
    // =========================================================================
    describe('UI Viewport Properties', () => {
        test('ViewPortHeight should return viewport height', () => {
            const formContext = createFormContext();
            const form = getForm({ formContext });
            expect(form.ViewPortHeight).toBe(800);
        });

        test('ViewPortWidth should return viewport width', () => {
            const formContext = createFormContext();
            const form = getForm({ formContext });
            expect(form.ViewPortWidth).toBe(1200);
        });
    });

    // =========================================================================
    // SAVE AND REFRESH OPERATIONS TESTS
    // =========================================================================
    describe('Save and Refresh Operations', () => {
        test('Save should return promise when no callback provided', async () => {
            const formContext = createFormContext();
            const form = getForm({ formContext });
            const result = await form.Save();
            expect(result).toBeUndefined();
        });

        test('Refresh should return promise when no callback provided', async () => {
            const formContext = createFormContext();
            const form = getForm({ formContext });
            const result = await form.Refresh(false);
            expect(result).toBeUndefined();
        });

        test('Close should be callable', () => {
            const formContext = createFormContext();
            const form = getForm({ formContext });
            expect(() => form.Close()).not.toThrow();
        });

        test('RefreshRibbon should be callable', () => {
            const formContext = createFormContext();
            const form = getForm({ formContext });
            expect(() => form.RefreshRibbon(true)).not.toThrow();
        });
    });

    // =========================================================================
    // FORM NOTIFICATION TESTS
    // =========================================================================
    describe('Form Notifications', () => {
        test('SetFormNotification should return true', () => {
            const formContext = createFormContext();
            const form = getForm({ formContext });
            const result = form.SetFormNotification('Test message', 'INFO', 'unique-1');
            expect(result).toBe(true);
        });

        test('ClearFormNotification should return true', () => {
            const formContext = createFormContext();
            const form = getForm({ formContext });
            const result = form.ClearFormNotification('unique-1');
            expect(result).toBe(true);
        });
    });

    // =========================================================================
    // DATA LOAD HANDLERS TESTS
    // =========================================================================
    describe('Data Load Handlers', () => {
        test('DataAddOnLoad should add callback', () => {
            const formContext = createFormContext();
            const form = getForm({ formContext });
            const callback = () => { };
            expect(() => form.DataAddOnLoad(callback)).not.toThrow();
        });

        test('DataRemoveOnLoad should remove callback', () => {
            const formContext = createFormContext();
            const form = getForm({ formContext });
            const callback = () => { };
            form.DataAddOnLoad(callback);
            expect(() => form.DataRemoveOnLoad(callback)).not.toThrow();
        });
    });

    // =========================================================================
    // SAVE HANDLERS TESTS
    // =========================================================================
    describe('Save Handlers', () => {
        test('AddOnSave should add save callback', () => {
            const formContext = createFormContext();
            const form = getForm({ formContext });
            const callback = () => { };
            expect(() => form.AddOnSave(callback)).not.toThrow();
        });

        test('RemoveOnSave should remove save callback', () => {
            const formContext = createFormContext();
            const form = getForm({ formContext });
            const callback = () => { };
            form.AddOnSave(callback);
            expect(() => form.RemoveOnSave(callback)).not.toThrow();
        });

        test('AddOnPostSave should add post-save callback', () => {
            const formContext = createFormContext();
            const form = getForm({ formContext });
            const callback = () => { };
            expect(() => form.AddOnPostSave(callback)).not.toThrow();
        });

        test('RemoveOnPostSave should remove post-save callback', () => {
            const formContext = createFormContext();
            const form = getForm({ formContext });
            const callback = () => { };
            form.AddOnPostSave(callback);
            expect(() => form.RemoveOnPostSave(callback)).not.toThrow();
        });
    });

    // =========================================================================
    // UI LOAD HANDLERS TESTS
    // =========================================================================
    describe('UI Load Handlers', () => {
        test('UiAddOnLoad should add UI on-load callback', () => {
            const formContext = createFormContext();
            const form = getForm({ formContext });
            const callback = () => { };
            expect(() => form.UiAddOnLoad(callback)).not.toThrow();
        });

        test('UiRemoveOnLoad should remove UI on-load callback', () => {
            const formContext = createFormContext();
            const form = getForm({ formContext });
            const callback = () => { };
            form.UiAddOnLoad(callback);
            expect(() => form.UiRemoveOnLoad(callback)).not.toThrow();
        });

        test('UiAddLoaded should add UI loaded callback', () => {
            const formContext = createFormContext();
            const form = getForm({ formContext });
            const callback = () => { };
            expect(() => form.UiAddLoaded(callback)).not.toThrow();
        });

        test('UiRemoveLoaded should remove UI loaded callback', () => {
            const formContext = createFormContext();
            const form = getForm({ formContext });
            const callback = () => { };
            form.UiAddLoaded(callback);
            expect(() => form.UiRemoveLoaded(callback)).not.toThrow();
        });
    });

    // =========================================================================
    // FORM SELECTOR OPERATIONS TESTS (findFormItem coverage)
    // =========================================================================
    describe('Form Selector Operations', () => {
        test('FormIsVisible should return visibility of a form by ID', () => {
            const formContext = createFormContext({
                formItems: [
                    { id: 'form-1', label: 'Form One', visible: true },
                    { id: 'form-2', label: 'Form Two', visible: false }
                ]
            });
            const form = getForm({ formContext });
            expect(form.FormIsVisible('form-1')).toBe(true);
        });

        test('FormIsVisible should return undefined for non-existent form', () => {
            const formContext = createFormContext({ formItems: [] });
            const form = getForm({ formContext });
            expect(form.FormIsVisible('non-existent')).toBeUndefined();
        });

        test('FormNavigateToFormId should navigate to form by ID', () => {
            const formContext = createFormContext({
                formItems: [{ id: 'form-1', label: 'Form One' }]
            });
            const form = getForm({ formContext });
            expect(() => form.FormNavigateToFormId('form-1')).not.toThrow();
        });

        test('FormNavigateToFormLabel should navigate to form by label', () => {
            const formContext = createFormContext({
                formItems: [{ id: 'form-1', label: 'Form One' }]
            });
            const form = getForm({ formContext });
            expect(() => form.FormNavigateToFormLabel('Form One')).not.toThrow();
        });

        test('FormSetVisible should set visibility of a form by ID', () => {
            const formContext = createFormContext({
                formItems: [{ id: 'form-1', label: 'Form One' }]
            });
            const form = getForm({ formContext });
            expect(() => form.FormSetVisible('form-1', false)).not.toThrow();
        });

        test('SetFormEntityName should set entity name', () => {
            const formContext = createFormContext();
            const form = getForm({ formContext });
            expect(() => form.SetFormEntityName('contact')).not.toThrow();
        });
    });

    // =========================================================================
    // HEADER FIELDS LOADING TESTS (header branch coverage)
    // =========================================================================
    describe('Header Fields Loading', () => {
        test('Header should load fields with header_ prefix', () => {
            const formContext = createFormContext({ headerFields: ['Revenue', 'Status'] });
            // Note: FormBase doesn't expose Header fields via config in this pattern
            // We verify that form.Header is defined when header config is provided
            const form = getForm({ formContext, header: ['Revenue', 'Status'] });
            expect(form.Header).toBeDefined();
        });

        test('Header should be empty object when no header fields', () => {
            const formContext = createFormContext();
            const form = getForm({ formContext, header: [] });
            expect(form.Header).toEqual({});
        });
    });

    // =========================================================================
    // TAB LOADING TESTS (tab branch coverage)
    // =========================================================================
    describe('Tab Loading', () => {
        test('Tab should be loaded when tab config is provided', () => {
            const formContext = createFormContext({
                tabs: [
                    { name: 'SUMMARY_TAB', label: 'Summary', sections: [{ name: 'GENERAL', label: 'General' }] }
                ]
            });
            const form = getForm({ formContext, tab: ['SUMMARY_TAB_@@_Section_@@_GENERAL'] });
            expect(form.Body.Tab).toBeDefined();
        });

        test('Tab should be empty when no tab config', () => {
            const formContext = createFormContext();
            const form = getForm({ formContext, tab: [] });
            expect(form.Body.Tab).toEqual({});
        });
    });

    // =========================================================================
    // DEFAULT VALUE DESTRUCTURING TESTS
    // =========================================================================
    describe('Default Value Destructuring', () => {
        test('Body should be accessible with empty config', () => {
            const formContext = createFormContext();
            // Test with undefined formConfig properties
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});
            expect(form.Body).toBeDefined();
        });

        test('All sections should have default empty values', () => {
            const formContext = createFormContext();
            const form = getForm({ formContext });
            expect(form.Header).toEqual({});
            expect(form.Body.Tab).toEqual({});
            expect(form.QuickForm).toEqual({});
            expect(form.Grid).toEqual({});
            expect(form.Navigation).toEqual({});
            expect(form.Process).toEqual({});
        });
    });

    // =========================================================================
    // INTEGRATION WITH OTHER LOADERS TESTS
    // =========================================================================
    describe('Integration with Other Loaders', () => {
        test('Utility should be loaded', () => {
            const formContext = createFormContext();
            const form = getForm({ formContext });
            expect(form.Utility).toBeDefined();
            expect(form.Utility.ClientUrl).toBeDefined();
        });

        test('ExecutionContext should be loaded', () => {
            const formContext = createFormContext();
            const form = getForm({ formContext });
            expect(form.ExecutionContext).toBeDefined();
        });

        test('SidePanes should be loaded', () => {
            const formContext = createFormContext();
            const form = getForm({ formContext });
            expect(form.SidePanes).toBeDefined();
        });

        test('WebApi should be loaded', () => {
            const formContext = createFormContext();
            const form = getForm({ formContext });
            expect(form.WebApi).toBeDefined();
        });

        test('Copilot should be loaded', () => {
            const formContext = createFormContext();
            const form = getForm({ formContext });
            expect(form.Copilot).toBeDefined();
        });
    });

    // =========================================================================
    // EDGE CASES TESTS
    // =========================================================================
    describe('Edge Cases', () => {
        test('Form should handle null executionContext gracefully', () => {
            const executionContext = { getFormContext: () => null };
            const form = new FormBase(executionContext, 'test', { body: [] });
            expect(form).toBeDefined();
        });

        test('Form should handle undefined getFormContext gracefully', () => {
            const executionContext = {};
            const form = new FormBase(executionContext, 'test', { body: [] });
            expect(form).toBeDefined();
        });

        test('Form with empty formItems should handle FormIsVisible', () => {
            const formContext = createFormContext({ formItems: [] });
            const form = getForm({ formContext });
            // Should iterate through empty array and return null
            const result = form.FormIsVisible('any-id');
            expect(result).toBeUndefined();
        });
    });

    // =========================================================================
    // loadField TESTS - Uncovered branches 58-59, 70-71, 78-80, 92-94
    // =========================================================================
    describe('loadField - FormType Guards (lines 58-59, 70-71)', () => {
        // Helper: Create form context with specific formType and trackable setters
        function createFormContextWithTracking(formType: number) {
            let disabledValue = false;
            let attributeValue: any = 'initial';

            const attribute = {
                getName: () => 'testfield',
                getValue: () => attributeValue,
                setValue: (v: any) => { attributeValue = v; },
                getIsDirty: () => false,
                getRequiredLevel: () => 'none',
                setRequiredLevel: () => { },
                getSubmitMode: () => 'dirty',
                setSubmitMode: () => { },
                getAttributeType: () => 'string',
                getFormat: () => 'text',
                getMaxLength: () => 100,
                getParent: () => ({}),
                getUserPrivilege: () => ({ canRead: true, canUpdate: true, canCreate: true }),
                isValid: () => true,
                setIsValid: () => { },
                addOnChange: () => { },
                removeOnChange: () => { },
                fireOnChange: () => { },
                controls: { get: () => null, getLength: () => 0, forEach: () => { } },
                getInitialValue: () => null,
                getIsPartyList: () => false,
                getMax: () => 100,
                getMin: () => 0,
                getOptions: () => [],
                getSelectedOption: () => null,
                getText: () => '',
                getPrecision: () => 2,
                setPrecision: () => { },
                getOption: () => null
            };

            const control = {
                getName: () => 'testfield',
                getLabel: () => 'Test Field',
                setLabel: () => { },
                getVisible: () => true,
                setVisible: () => { },
                getDisabled: () => disabledValue,
                setDisabled: (d: boolean) => { disabledValue = d; },
                setFocus: () => { },
                getControlType: () => 'standard',
                getParent: () => ({}),
                getAttribute: () => attribute,
                clearNotification: () => true,
                setNotification: () => true,
                addNotification: (n: any) => { },
                getOptions: () => [],
                getInitialUrl: () => '',
                getObject: () => null,
                getOutputs: () => ({}),
                getSelectedResults: () => [],
                getState: () => 'idle',
                getTotalResultCount: () => 0,
                getData: () => null,
                setData: () => { },
                getDefaultView: () => '',
                setDefaultView: () => { },
                getEntityTypes: () => [],
                setEntityTypes: () => { },
                getSearchQuery: () => '',
                setSearchQuery: () => { },
                getShowTime: () => false,
                setShowTime: () => { },
                getSrc: () => '',
                setSrc: () => { },
                addCustomFilter: () => { },
                addCustomView: () => { },
                addOnLookupTagClick: () => { },
                addOnOutputChange: () => { },
                addOption: () => { },
                addOnPostSearch: () => { },
                addPreSearch: () => { },
                addOnResultOpened: () => { },
                addOnSelection: () => { },
                clearOptions: () => { },
                getContentWindow: () => Promise.resolve({ test: 'window' }),
                refresh: () => { },
                removeOnLookupTagClick: () => { },
                removeOnOutputChange: () => { },
                removeOption: () => { },
                removeOnPostSearch: () => { },
                removePreSearch: () => { },
                removeOnResultOpened: () => { },
                removeOnSelection: () => { },
                openSearchResult: () => { }
            };

            const attributesMap = new Map([['testfield', attribute]]);
            const controlsMap = new Map([['testfield', control]]);

            return {
                formContext: {
                    data: {
                        getIsDirty: () => false,
                        isValid: () => true,
                        refresh: () => Promise.resolve(),
                        save: () => Promise.resolve(),
                        addOnLoad: () => { },
                        removeOnLoad: () => { },
                        entity: {
                            attributes: { get: (n: any) => attributesMap.get(n), getLength: () => 1, forEach: () => { } },
                            getId: () => 'guid',
                            getEntityName: () => 'account',
                            getIsDirty: () => false,
                            isValid: () => true,
                            getDataXml: () => '',
                            getEntityReference: () => ({}),
                            getPrimaryAttributeValue: () => '',
                            addOnSave: () => { },
                            removeOnSave: () => { },
                            addOnPostSave: () => { },
                            removeOnPostSave: () => { }
                        },
                        process: null
                    },
                    ui: {
                        getFormType: () => formType,
                        controls: { get: (n: any) => controlsMap.get(n), getLength: () => 1, forEach: () => { } },
                        tabs: { get: () => null, getLength: () => 0, forEach: () => { } },
                        formSelector: { getCurrentItem: () => ({ getId: () => '', getLabel: () => '' }), items: { getLength: () => 0, get: () => null, forEach: () => { } } },
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
                        quickForms: { get: () => null, getLength: () => 0 },
                        headerSection: {
                            getBodyVisible: () => true,
                            setBodyVisible: () => { },
                            getCommandBarVisible: () => true,
                            setCommandBarVisible: () => { },
                            getTabNavigatorVisible: () => true,
                            setTabNavigatorVisible: () => { }
                        }
                    },
                    getControl: (n: string) => controlsMap.get(n),
                    getAttribute: (n: string) => attributesMap.get(n),
                    getFormContext: function () { return this; }
                },
                getDisabledValue: () => disabledValue,
                getAttributeValue: () => attributeValue
            };
        }

        test('Disabled setter should NOT call setDisabled when formType is 3 (Read Only)', () => {
            const { formContext } = createFormContextWithTracking(3);
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });

            // Try to set Disabled - should be ignored for formType 3
            form.Body.testfield.Disabled = true;
            // The setter should early-return, so the internal value stays false
            expect(form.Body.testfield.Disabled).toBe(false);
        });

        test('Disabled setter should NOT call setDisabled when formType is 4 (Disabled)', () => {
            const { formContext } = createFormContextWithTracking(4);
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });

            form.Body.testfield.Disabled = true;
            expect(form.Body.testfield.Disabled).toBe(false);
        });

        test('Value setter should NOT call setValue when formType is 3 (Read Only)', () => {
            const { formContext, getAttributeValue } = createFormContextWithTracking(3);
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });

            form.Body.testfield.Value = 'new value';
            // Should be ignored, value stays 'initial'
            expect(getAttributeValue()).toBe('initial');
        });

        test('Value setter should NOT call setValue when formType is 4 (Disabled)', () => {
            const { formContext, getAttributeValue } = createFormContextWithTracking(4);
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });

            form.Body.testfield.Value = 'new value';
            expect(getAttributeValue()).toBe('initial');
        });

        test('Disabled setter SHOULD work when formType is 2 (Update)', () => {
            const { formContext, getDisabledValue } = createFormContextWithTracking(2);
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });

            form.Body.testfield.Disabled = true;
            expect(getDisabledValue()).toBe(true);
        });

        test('Value setter SHOULD work when formType is 2 (Update)', () => {
            const { formContext, getAttributeValue } = createFormContextWithTracking(2);
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });

            form.Body.testfield.Value = 'updated';
            expect(getAttributeValue()).toBe('updated');
        });
    });

    describe('loadField - AddNotification (lines 78-80)', () => {
        test('AddNotification should call control.addNotification with correct structure', () => {
            let capturedNotification: any = null;

            const control = {
                getName: () => 'notifyfield',
                getLabel: () => 'Notify Field',
                setLabel: () => { },
                getVisible: () => true,
                setVisible: () => { },
                getDisabled: () => false,
                setDisabled: () => { },
                setFocus: () => { },
                getControlType: () => 'standard',
                getParent: () => ({}),
                getAttribute: () => null,
                clearNotification: () => true,
                setNotification: () => true,
                addNotification: (n: any) => { capturedNotification = n; }
            };

            const controlsMap = new Map([['notifyfield', control]]);

            const formContext = {
                data: { getIsDirty: () => false, isValid: () => true, refresh: () => Promise.resolve(), save: () => Promise.resolve(), addOnLoad: () => { }, removeOnLoad: () => { }, entity: { attributes: { get: () => null, getLength: () => 0, forEach: () => { } }, getId: () => '', getEntityName: () => '', getIsDirty: () => false, isValid: () => true, getDataXml: () => '', getEntityReference: () => ({}), getPrimaryAttributeValue: () => '', addOnSave: () => { }, removeOnSave: () => { }, addOnPostSave: () => { }, removeOnPostSave: () => { } }, process: null },
                ui: { getFormType: () => 2, controls: { get: (n: any) => controlsMap.get(n), getLength: () => 1, forEach: () => { } }, tabs: { get: () => null, getLength: () => 0, forEach: () => { } }, formSelector: { getCurrentItem: () => ({ getId: () => '', getLabel: () => '' }), items: { getLength: () => 0, get: () => null, forEach: () => { } } }, getViewPortHeight: () => 800, getViewPortWidth: () => 1200, clearFormNotification: () => true, setFormNotification: () => true, close: () => { }, refreshRibbon: () => { }, addLoaded: () => { }, removeLoaded: () => { }, addOnLoad: () => { }, removeOnLoad: () => { }, setFormEntityName: () => { }, process: null, quickForms: { get: () => null, getLength: () => 0 } },
                getControl: (n: string) => controlsMap.get(n),
                getAttribute: () => null,
                getFormContext: function () { return this; }
            };

            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['notifyfield'] });

            const callback = () => { };
            form.Body.notifyfield.AddNotification('Test message', 'ERROR', 'notify-1', callback);

            expect(capturedNotification).not.toBeNull();
            expect(capturedNotification.messages).toContain('Test message');
            expect(capturedNotification.notificationLevel).toBe('ERROR');
            expect(capturedNotification.uniqueId).toBe('notify-1');
            expect(capturedNotification.actions).toBeDefined();
            expect(capturedNotification.actions[0].actions).toContain(callback);
        });
    });

    describe('loadField - ContentWindow callback (lines 92-94)', () => {
        test('ContentWindow should return promise when no callback', async () => {
            const control = {
                getName: () => 'iframefield',
                getContentWindow: () => Promise.resolve({ document: {} }),
                getLabel: () => 'IFrame',
                setLabel: () => { },
                getVisible: () => true,
                setVisible: () => { },
                getDisabled: () => false,
                setDisabled: () => { },
                setFocus: () => { },
                getControlType: () => 'iframe',
                getParent: () => ({}),
                getAttribute: () => null,
                clearNotification: () => true,
                setNotification: () => true,
                addNotification: () => { }
            };

            const controlsMap = new Map([['iframefield', control]]);

            const formContext = {
                data: { getIsDirty: () => false, isValid: () => true, refresh: () => Promise.resolve(), save: () => Promise.resolve(), addOnLoad: () => { }, removeOnLoad: () => { }, entity: { attributes: { get: () => null, getLength: () => 0, forEach: () => { } }, getId: () => '', getEntityName: () => '', getIsDirty: () => false, isValid: () => true, getDataXml: () => '', getEntityReference: () => ({}), getPrimaryAttributeValue: () => '', addOnSave: () => { }, removeOnSave: () => { }, addOnPostSave: () => { }, removeOnPostSave: () => { } }, process: null },
                ui: { getFormType: () => 2, controls: { get: (n: any) => controlsMap.get(n), getLength: () => 1, forEach: () => { } }, tabs: { get: () => null, getLength: () => 0, forEach: () => { } }, formSelector: { getCurrentItem: () => ({ getId: () => '', getLabel: () => '' }), items: { getLength: () => 0, get: () => null, forEach: () => { } } }, getViewPortHeight: () => 800, getViewPortWidth: () => 1200, clearFormNotification: () => true, setFormNotification: () => true, close: () => { }, refreshRibbon: () => { }, addLoaded: () => { }, removeLoaded: () => { }, addOnLoad: () => { }, removeOnLoad: () => { }, setFormEntityName: () => { }, process: null, quickForms: { get: () => null, getLength: () => 0 } },
                getControl: (n: string) => controlsMap.get(n),
                getAttribute: () => null,
                getFormContext: function () { return this; }
            };

            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['iframefield'] });

            const result = await form.Body.iframefield.ContentWindow();
            expect(result).toEqual({ document: {} });
        });

        test('ContentWindow should call successCallback when provided', async () => {
            let callbackResult: any = null;

            const control = {
                getName: () => 'iframefield',
                getContentWindow: () => Promise.resolve({ myWindow: true }),
                getLabel: () => 'IFrame',
                setLabel: () => { },
                getVisible: () => true,
                setVisible: () => { },
                getDisabled: () => false,
                setDisabled: () => { },
                setFocus: () => { },
                getControlType: () => 'iframe',
                getParent: () => ({}),
                getAttribute: () => null,
                clearNotification: () => true,
                setNotification: () => true,
                addNotification: () => { }
            };

            const controlsMap = new Map([['iframefield', control]]);

            const formContext = {
                data: { getIsDirty: () => false, isValid: () => true, refresh: () => Promise.resolve(), save: () => Promise.resolve(), addOnLoad: () => { }, removeOnLoad: () => { }, entity: { attributes: { get: () => null, getLength: () => 0, forEach: () => { } }, getId: () => '', getEntityName: () => '', getIsDirty: () => false, isValid: () => true, getDataXml: () => '', getEntityReference: () => ({}), getPrimaryAttributeValue: () => '', addOnSave: () => { }, removeOnSave: () => { }, addOnPostSave: () => { }, removeOnPostSave: () => { } }, process: null },
                ui: { getFormType: () => 2, controls: { get: (n: any) => controlsMap.get(n), getLength: () => 1, forEach: () => { } }, tabs: { get: () => null, getLength: () => 0, forEach: () => { } }, formSelector: { getCurrentItem: () => ({ getId: () => '', getLabel: () => '' }), items: { getLength: () => 0, get: () => null, forEach: () => { } } }, getViewPortHeight: () => 800, getViewPortWidth: () => 1200, clearFormNotification: () => true, setFormNotification: () => true, close: () => { }, refreshRibbon: () => { }, addLoaded: () => { }, removeLoaded: () => { }, addOnLoad: () => { }, removeOnLoad: () => { }, setFormEntityName: () => { }, process: null, quickForms: { get: () => null, getLength: () => 0 } },
                getControl: (n: string) => controlsMap.get(n),
                getAttribute: () => null,
                getFormContext: function () { return this; }
            };

            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['iframefield'] });

            await new Promise<void>(resolve => {
                form.Body.iframefield.ContentWindow((win: any) => {
                    callbackResult = win;
                    resolve();
                });
            });

            expect(callbackResult).toEqual({ myWindow: true });
        });
    });

    // =========================================================================
    // loadFields - Attribute fallback (line 120) and HeaderSection tests
    // =========================================================================
    describe('loadFields - Attribute fallback (line 120)', () => {
        test('Should get attribute from control.getAttribute when formContext.getAttribute returns null', () => {
            const attribute = {
                getName: () => 'fallbackfield',
                getValue: () => 'from-control',
                setValue: () => { },
                getAttributeType: () => 'string'
            };

            const control = {
                getName: () => 'fallbackfield',
                getLabel: () => 'Fallback',
                setLabel: () => { },
                getVisible: () => true,
                setVisible: () => { },
                getDisabled: () => false,
                setDisabled: () => { },
                setFocus: () => { },
                getControlType: () => 'standard',
                getParent: () => ({}),
                getAttribute: () => attribute, // Control has getAttribute
                clearNotification: () => true,
                setNotification: () => true,
                addNotification: () => { }
            };

            const controlsMap = new Map([['fallbackfield', control]]);

            const formContext = {
                data: { getIsDirty: () => false, isValid: () => true, refresh: () => Promise.resolve(), save: () => Promise.resolve(), addOnLoad: () => { }, removeOnLoad: () => { }, entity: { attributes: { get: () => null, getLength: () => 0, forEach: () => { } }, getId: () => '', getEntityName: () => '', getIsDirty: () => false, isValid: () => true, getDataXml: () => '', getEntityReference: () => ({}), getPrimaryAttributeValue: () => '', addOnSave: () => { }, removeOnSave: () => { }, addOnPostSave: () => { }, removeOnPostSave: () => { } }, process: null },
                ui: { getFormType: () => 2, controls: { get: (n: any) => controlsMap.get(n), getLength: () => 1, forEach: () => { } }, tabs: { get: () => null, getLength: () => 0, forEach: () => { } }, formSelector: { getCurrentItem: () => ({ getId: () => '', getLabel: () => '' }), items: { getLength: () => 0, get: () => null, forEach: () => { } } }, getViewPortHeight: () => 800, getViewPortWidth: () => 1200, clearFormNotification: () => true, setFormNotification: () => true, close: () => { }, refreshRibbon: () => { }, addLoaded: () => { }, removeLoaded: () => { }, addOnLoad: () => { }, removeOnLoad: () => { }, setFormEntityName: () => { }, process: null, quickForms: { get: () => null, getLength: () => 0 } },
                getControl: (n: string) => controlsMap.get(n),
                getAttribute: () => null, // formContext.getAttribute returns null
                getFormContext: function () { return this; }
            };

            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['fallbackfield'] });

            // The attribute should be retrieved via control.getAttribute() fallback
            expect(form.Body.fallbackfield.Value).toBe('from-control');
            expect(form.Body.fallbackfield.AttributeType).toBe('string');
        });
    });

    describe('loadFields - Control fallback from Attribute (lines 114-123, 152)', () => {
        test('Should find control from attribute.controls when formContext.getControl returns null', () => {
            const control = {
                getName: () => 'lazycontrol',
                getLabel: () => 'Lazy Control',
                setLabel: () => { },
                getVisible: () => true,
                setVisible: () => { },
                getDisabled: () => false,
                setDisabled: () => { },
                setFocus: () => { },
                getControlType: () => 'standard',
                getParent: () => ({}),
                getAttribute: () => null,
                clearNotification: () => true,
                setNotification: () => true,
                addNotification: () => { },
                getOptions: () => [],
                getInitialUrl: () => '',
                getObject: () => null,
                getOutputs: () => null,
                getSelectedResults: () => null,
                getState: () => null,
                getTotalResultCount: () => 0,
                getData: () => null,
                setData: () => { },
                getDefaultView: () => '',
                setDefaultView: () => { },
                getEntityTypes: () => [],
                setEntityTypes: () => { },
                getSearchQuery: () => '',
                setSearchQuery: () => { },
                getShowTime: () => false,
                setShowTime: () => { },
                getSrc: () => '',
                setSrc: () => { }
            };

            const attribute = {
                getName: () => 'lazycontrol',
                getValue: () => 'lazy-value',
                setValue: () => { },
                getAttributeType: () => 'string',
                controls: {
                    forEach: (callback: any) => {
                        callback(control);
                    },
                    get: (name: string) => name === 'lazycontrol' ? control : null
                },
                getParent: () => null,
                getFormat: () => 'text',
                getInitialValue: () => '',
                getIsDirty: () => false,
                getIsPartyList: () => false,
                isValid: () => true,
                getMax: () => 100,
                getMaxLength: () => 100,
                getMin: () => 0,
                getOptions: () => [],
                getSelectedOption: () => null,
                getText: () => '',
                getUserPrivilege: () => ({ canRead: true, canUpdate: true, canCreate: true }),
                getPrecision: () => 0,
                setPrecision: () => { },
                getRequiredLevel: () => 'none',
                setRequiredLevel: () => { },
                getSubmitMode: () => 'dirty',
                setSubmitMode: () => { },
                addOnChange: () => { },
                removeOnChange: () => { },
                fireOnChange: () => { },
                setIsValid: () => { },
                getOption: () => null
            };

            const formContext = {
                data: { getIsDirty: () => false, isValid: () => true, refresh: () => Promise.resolve(), save: () => Promise.resolve(), addOnLoad: () => { }, removeOnLoad: () => { }, entity: { attributes: { get: () => null, getLength: () => 0, forEach: () => { } }, getId: () => '', getEntityName: () => '', getIsDirty: () => false, isValid: () => true, getDataXml: () => '', getEntityReference: () => ({}), getPrimaryAttributeValue: () => '', addOnSave: () => { }, removeOnSave: () => { }, addOnPostSave: () => { }, removeOnPostSave: () => { } }, process: null },
                ui: { getFormType: () => 2, controls: { get: () => null, getLength: () => 0, forEach: () => { } }, tabs: { get: () => null, getLength: () => 0, forEach: () => { } }, formSelector: { getCurrentItem: () => ({ getId: () => '', getLabel: () => '' }), items: { getLength: () => 0, get: () => null, forEach: () => { } } }, getViewPortHeight: () => 800, getViewPortWidth: () => 1200, clearFormNotification: () => true, setFormNotification: () => true, close: () => { }, refreshRibbon: () => { }, addLoaded: () => { }, removeLoaded: () => { }, addOnLoad: () => { }, removeOnLoad: () => { }, setFormEntityName: () => { }, process: null, quickForms: { get: () => null, getLength: () => 0 } },
                getControl: () => null, // formContext.getControl returns null
                getAttribute: (n: string) => n === 'lazycontrol' ? attribute : null,
                getFormContext: function () { return this; }
            };

            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['lazycontrol'] });

            // The control should be retrieved via attribute.controls fallback
            expect(form.Body.lazycontrol.ControlName).toBe('lazycontrol');
            expect(form.Body.lazycontrol.Value).toBe('lazy-value');
        });

        test('Should handle attribute without controls property (line 117)', () => {
            const attribute = {
                getName: () => 'nocontrols',
                getValue: () => 'val',
                setValue: () => { },
                getAttributeType: () => 'string',
                controls: undefined, // undefined controls
                getParent: () => null,
                getFormat: () => 'text',
                getInitialValue: () => '',
                getIsDirty: () => false,
                getIsPartyList: () => false,
                isValid: () => true,
                getMax: () => 100,
                getMaxLength: () => 100,
                getMin: () => 0,
                getOptions: () => [],
                getSelectedOption: () => null,
                getText: () => '',
                getUserPrivilege: () => ({ canRead: true, canUpdate: true, canCreate: true }),
                getPrecision: () => 0,
                setPrecision: () => { },
                getRequiredLevel: () => 'none',
                setRequiredLevel: () => { },
                getSubmitMode: () => 'dirty',
                setSubmitMode: () => { },
                addOnChange: () => { },
                removeOnChange: () => { },
                fireOnChange: () => { },
                setIsValid: () => { },
                getOption: () => null
            };

            const formContext = {
                data: { getIsDirty: () => false, isValid: () => true, refresh: () => Promise.resolve(), save: () => Promise.resolve(), addOnLoad: () => { }, removeOnLoad: () => { }, entity: { attributes: { get: () => null, getLength: () => 0, forEach: () => { } }, getId: () => '', getEntityName: () => '', getIsDirty: () => false, isValid: () => true, getDataXml: () => '', getEntityReference: () => ({}), getPrimaryAttributeValue: () => '', addOnSave: () => { }, removeOnSave: () => { }, addOnPostSave: () => { }, removeOnPostSave: () => { } }, process: null },
                ui: { getFormType: () => 2, controls: { get: () => null, getLength: () => 0, forEach: () => { } }, tabs: { get: () => null, getLength: () => 0, forEach: () => { } }, formSelector: { getCurrentItem: () => ({ getId: () => '', getLabel: () => '' }), items: { getLength: () => 0, get: () => null, forEach: () => { } } }, getViewPortHeight: () => 800, getViewPortWidth: () => 1200, clearFormNotification: () => true, setFormNotification: () => true, close: () => { }, refreshRibbon: () => { }, addLoaded: () => { }, removeLoaded: () => { }, addOnLoad: () => { }, removeOnLoad: () => { }, setFormEntityName: () => { }, process: null, quickForms: { get: () => null, getLength: () => 0 } },
                getControl: () => null,
                getAttribute: (n: string) => n === 'nocontrols' ? attribute : null,
                getFormContext: function () { return this; }
            };

            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['nocontrols'] });

            expect(form.Body.nocontrols.Value).toBe('val');
        });

        test('Should resolve base attribute name for multi-control fields (line 142)', () => {
            const attribute = {
                getName: () => 'ownerid',
                getValue: () => 'owner-value',
                setValue: () => { },
                getAttributeType: () => 'lookup',
                controls: [],
                getParent: () => null,
                getFormat: () => 'text',
                getInitialValue: () => '',
                getIsDirty: () => false,
                getIsPartyList: () => false,
                isValid: () => true,
                getMax: () => 100,
                getMaxLength: () => 100,
                getMin: () => 0,
                getOptions: () => [],
                getSelectedOption: () => null,
                getText: () => '',
                getUserPrivilege: () => ({ canRead: true, canUpdate: true, canCreate: true }),
                getPrecision: () => 0,
                setPrecision: () => { },
                getRequiredLevel: () => 'none',
                setRequiredLevel: () => { },
                getSubmitMode: () => 'dirty',
                setSubmitMode: () => { },
                addOnChange: () => { },
                removeOnChange: () => { },
                fireOnChange: () => { },
                setIsValid: () => { },
                getOption: () => null
            };

            const formContext = {
                data: { getIsDirty: () => false, isValid: () => true, refresh: () => Promise.resolve(), save: () => Promise.resolve(), addOnLoad: () => { }, removeOnLoad: () => { }, entity: { attributes: { get: () => null, getLength: () => 0, forEach: () => { } }, getId: () => '', getEntityName: () => '', getIsDirty: () => false, isValid: () => true, getDataXml: () => '', getEntityReference: () => ({}), getPrimaryAttributeValue: () => '', addOnSave: () => { }, removeOnSave: () => { }, addOnPostSave: () => { }, removeOnPostSave: () => { } }, process: null },
                ui: { getFormType: () => 2, controls: { get: () => null, getLength: () => 0, forEach: () => { } }, tabs: { get: () => null, getLength: () => 0, forEach: () => { } }, formSelector: { getCurrentItem: () => ({ getId: () => '', getLabel: () => '' }), items: { getLength: () => 0, get: () => null, forEach: () => { } } }, getViewPortHeight: () => 800, getViewPortWidth: () => 1200, clearFormNotification: () => true, setFormNotification: () => true, close: () => { }, refreshRibbon: () => { }, addLoaded: () => { }, removeLoaded: () => { }, addOnLoad: () => { }, removeOnLoad: () => { }, setFormEntityName: () => { }, process: null, quickForms: { get: () => null, getLength: () => 0 } },
                getControl: () => null,
                getAttribute: (n: string) => n === 'ownerid' ? attribute : null, // Returns attribute for base name
                getFormContext: function () { return this; }
            };

            const executionContext = { getFormContext: () => formContext };
            // Requesting 'ownerid1', should resolve to 'ownerid' attribute
            const form = new FormBase(executionContext, 'test', { body: ['ownerid1'] });

            expect(form.Body.ownerid1.Value).toBe('owner-value');
        });

        test('Should handle controls with null items or null names in findControlFromAttribute (line 118)', () => {
            const controlWithNullName = {
                getName: () => null,
                getLabel: () => 'Null Name Control',
                setLabel: () => { },
                getVisible: () => true,
                setVisible: () => { },
                getDisabled: () => false,
                setDisabled: () => { },
                setFocus: () => { },
                getControlType: () => 'standard',
                getParent: () => ({}),
                getAttribute: () => null,
                clearNotification: () => true,
                setNotification: () => true,
                addNotification: () => { },
                getOptions: () => [],
                getInitialUrl: () => '',
                getObject: () => null,
                getOutputs: () => null,
                getSelectedResults: () => null,
                getState: () => null,
                getTotalResultCount: () => 0,
                getData: () => null,
                setData: () => { },
                getDefaultView: () => '',
                setDefaultView: () => { },
                getEntityTypes: () => [],
                setEntityTypes: () => { },
                getSearchQuery: () => '',
                setSearchQuery: () => { },
                getShowTime: () => false,
                setShowTime: () => { },
                getSrc: () => '',
                setSrc: () => { }
            };

            const attribute = {
                getName: () => 'attr',
                getValue: () => 'val',
                setValue: () => { },
                getAttributeType: () => 'string',
                controls: [
                    null, // Null control in array
                    controlWithNullName
                ],
                getParent: () => null,
                getFormat: () => 'text',
                getInitialValue: () => '',
                getIsDirty: () => false,
                getIsPartyList: () => false,
                isValid: () => true,
                getMax: () => 100,
                getMaxLength: () => 100,
                getMin: () => 0,
                getOptions: () => [],
                getSelectedOption: () => null,
                getText: () => '',
                getUserPrivilege: () => ({ canRead: true, canUpdate: true, canCreate: true }),
                getPrecision: () => 0,
                setPrecision: () => { },
                getRequiredLevel: () => 'none',
                setRequiredLevel: () => { },
                getSubmitMode: () => 'dirty',
                setSubmitMode: () => { },
                addOnChange: () => { },
                removeOnChange: () => { },
                fireOnChange: () => { },
                setIsValid: () => { },
                getOption: () => null
            };

            const formContext = {
                data: { getIsDirty: () => false, isValid: () => true, refresh: () => Promise.resolve(), save: () => Promise.resolve(), addOnLoad: () => { }, removeOnLoad: () => { }, entity: { attributes: { get: () => null, getLength: () => 0, forEach: () => { } }, getId: () => '', getEntityName: () => '', getIsDirty: () => false, isValid: () => true, getDataXml: () => '', getEntityReference: () => ({}), getPrimaryAttributeValue: () => '', addOnSave: () => { }, removeOnSave: () => { }, addOnPostSave: () => { }, removeOnPostSave: () => { } }, process: null },
                ui: { getFormType: () => 2, controls: { get: () => null, getLength: () => 0, forEach: () => { } }, tabs: { get: () => null, getLength: () => 0, forEach: () => { } }, formSelector: { getCurrentItem: () => ({ getId: () => '', getLabel: () => '' }), items: { getLength: () => 0, get: () => null, forEach: () => { } } }, getViewPortHeight: () => 800, getViewPortWidth: () => 1200, clearFormNotification: () => true, setFormNotification: () => true, close: () => { }, refreshRibbon: () => { }, addLoaded: () => { }, removeLoaded: () => { }, addOnLoad: () => { }, removeOnLoad: () => { }, setFormEntityName: () => { }, process: null, quickForms: { get: () => null, getLength: () => 0 } },
                getControl: () => null,
                getAttribute: (n: string) => n === 'attr' ? attribute : null,
                getFormContext: function () { return this; }
            };

            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['attr'] });

            // Should not crash, and control should be null (or whatever loadField does with null control)
            // Since control is not found, loadField is called with null control.
            // We can check if form.Body.attr exists (it should)
            expect(form.Body.attr).toBeDefined();
            // ControlName should be undefined if control is null
            expect(form.Body.attr.ControlName).toBeUndefined();
        });
    });

    describe('loadFields - Header Section properties (lines 124-129)', () => {
        test('Header should have BodyVisible, CommandBarVisible, TabNavigatorVisible when type is header_', () => {
            let bodyVisible = true;
            let commandBarVisible = true;
            let tabNavigatorVisible = true;

            const attribute = {
                getName: () => 'revenue',
                getValue: () => 1000,
                setValue: () => { }
            };

            const control = {
                getName: () => 'header_revenue',
                getLabel: () => 'Revenue',
                setLabel: () => { },
                getVisible: () => true,
                setVisible: () => { },
                getDisabled: () => false,
                setDisabled: () => { },
                setFocus: () => { },
                getControlType: () => 'standard',
                getParent: () => ({}),
                getAttribute: () => attribute,
                clearNotification: () => true,
                setNotification: () => true,
                addNotification: () => { }
            };

            const controlsMap = new Map([['header_revenue', control]]);
            const attributesMap = new Map([['header_revenue', attribute]]);

            const formContext = {
                data: { getIsDirty: () => false, isValid: () => true, refresh: () => Promise.resolve(), save: () => Promise.resolve(), addOnLoad: () => { }, removeOnLoad: () => { }, entity: { attributes: { get: (n: any) => attributesMap.get(n), getLength: () => 1, forEach: () => { } }, getId: () => '', getEntityName: () => '', getIsDirty: () => false, isValid: () => true, getDataXml: () => '', getEntityReference: () => ({}), getPrimaryAttributeValue: () => '', addOnSave: () => { }, removeOnSave: () => { }, addOnPostSave: () => { }, removeOnPostSave: () => { } }, process: null },
                ui: {
                    getFormType: () => 2,
                    controls: { get: (n: any) => controlsMap.get(n), getLength: () => 1, forEach: () => { } },
                    tabs: { get: () => null, getLength: () => 0, forEach: () => { } },
                    formSelector: { getCurrentItem: () => ({ getId: () => '', getLabel: () => '' }), items: { getLength: () => 0, get: () => null, forEach: () => { } } },
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
                    quickForms: { get: () => null, getLength: () => 0 },
                    headerSection: {
                        getBodyVisible: () => bodyVisible,
                        setBodyVisible: (v: boolean) => { bodyVisible = v; },
                        getCommandBarVisible: () => commandBarVisible,
                        setCommandBarVisible: (v: boolean) => { commandBarVisible = v; },
                        getTabNavigatorVisible: () => tabNavigatorVisible,
                        setTabNavigatorVisible: (v: boolean) => { tabNavigatorVisible = v; }
                    }
                },
                getControl: (n: string) => controlsMap.get(n),
                getAttribute: (n: string) => attributesMap.get(n),
                getFormContext: function () { return this; }
            };

            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { header: ['Revenue'] });

            // Test getters
            expect(form.Header.BodyVisible).toBe(true);
            expect(form.Header.CommandBarVisible).toBe(true);
            expect(form.Header.TabNavigatorVisible).toBe(true);

            // Test setters
            form.Header.BodyVisible = false;
            expect(bodyVisible).toBe(false);

            form.Header.CommandBarVisible = false;
            expect(commandBarVisible).toBe(false);

            form.Header.TabNavigatorVisible = false;
            expect(tabNavigatorVisible).toBe(false);
        });
    });

    // =========================================================================
    // loadTabs - Comprehensive tests for tabs and sections
    // =========================================================================
    describe('loadTabs - Complete coverage', () => {
        function createFormContextWithTabs() {
            let tabLabel = 'Summary';
            let tabVisible = true;
            let tabDisplayState = 'expanded';
            let tabContentType = 'cardSections';
            let sectionLabel = 'Account Information';
            let sectionVisible = true;

            const createSection = (name: string) => ({
                getName: () => name,
                getLabel: () => sectionLabel,
                setLabel: (l: string) => { sectionLabel = l; },
                getVisible: () => sectionVisible,
                setVisible: (v: boolean) => { sectionVisible = v; },
                getParent: () => ({ getName: () => 'SUMMARY_TAB' })
            });

            const sectionsMap = new Map([
                ['ACCOUNT_INFORMATION', createSection('ACCOUNT_INFORMATION')]
            ]);

            const tab = {
                getName: () => 'SUMMARY_TAB',
                getLabel: () => tabLabel,
                setLabel: (l: string) => { tabLabel = l; },
                getVisible: () => tabVisible,
                setVisible: (v: boolean) => { tabVisible = v; },
                getDisplayState: () => tabDisplayState,
                setDisplayState: (s: string) => { tabDisplayState = s; },
                setFocus: () => { },
                getParent: () => ({}),
                getContentType: () => tabContentType,
                setContentType: (c: string) => { tabContentType = c; },
                sections: {
                    get: (name: any) => sectionsMap.get(name),
                    getLength: () => sectionsMap.size,
                    forEach: (cb: any) => sectionsMap.forEach((v, k) => cb(v, k))
                },
                addTabStateChange: () => { },
                removeTabStateChange: () => { }
            };

            const tabsMap = new Map([['SUMMARY_TAB', tab]]);

            return {
                formContext: {
                    data: { getIsDirty: () => false, isValid: () => true, refresh: () => Promise.resolve(), save: () => Promise.resolve(), addOnLoad: () => { }, removeOnLoad: () => { }, entity: { attributes: { get: () => null, getLength: () => 0, forEach: () => { } }, getId: () => '', getEntityName: () => '', getIsDirty: () => false, isValid: () => true, getDataXml: () => '', getEntityReference: () => ({}), getPrimaryAttributeValue: () => '', addOnSave: () => { }, removeOnSave: () => { }, addOnPostSave: () => { }, removeOnPostSave: () => { } }, process: null },
                    ui: {
                        getFormType: () => 2,
                        controls: { get: () => null, getLength: () => 0, forEach: () => { } },
                        tabs: {
                            get: (name: any) => tabsMap.get(name),
                            getLength: () => tabsMap.size,
                            forEach: (cb: any) => tabsMap.forEach((v, k) => cb(v, k))
                        },
                        formSelector: { getCurrentItem: () => ({ getId: () => '', getLabel: () => '' }), items: { getLength: () => 0, get: () => null, forEach: () => { } } },
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
                },
                getTabLabel: () => tabLabel,
                getTabVisible: () => tabVisible,
                getTabDisplayState: () => tabDisplayState,
                getTabContentType: () => tabContentType,
                getSectionLabel: () => sectionLabel,
                getSectionVisible: () => sectionVisible
            };
        }

        test('Tab properties should be accessible', () => {
            const { formContext } = createFormContextWithTabs();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { tab: ['SUMMARY_TAB___ACCOUNT_INFORMATION'] });

            const tab = form.Body.Tab.SUMMARY_TAB;
            expect(tab).toBeDefined();
            expect(tab.Name).toBe('SUMMARY_TAB');
            expect(tab.Label).toBe('Summary');
            expect(tab.Visible).toBe(true);
            expect(tab.DisplayState).toBe('expanded');
            expect(tab.ContentType).toBe('cardSections');
            expect(tab.Parent).toBeDefined();
        });

        test('Tab setters should update values', () => {
            const { formContext, getTabLabel, getTabVisible, getTabDisplayState, getTabContentType } = createFormContextWithTabs();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { tab: ['SUMMARY_TAB___ACCOUNT_INFORMATION'] });

            const tab = form.Body.Tab.SUMMARY_TAB;

            tab.Label = 'New Label';
            expect(getTabLabel()).toBe('New Label');

            tab.Visible = false;
            expect(getTabVisible()).toBe(false);

            tab.DisplayState = 'collapsed';
            expect(getTabDisplayState()).toBe('collapsed');

            tab.ContentType = 'singleComponent';
            expect(getTabContentType()).toBe('singleComponent');
        });

        test('Tab methods should be callable', () => {
            const { formContext } = createFormContextWithTabs();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { tab: ['SUMMARY_TAB___ACCOUNT_INFORMATION'] });

            const tab = form.Body.Tab.SUMMARY_TAB;

            expect(() => tab.Focus()).not.toThrow();
            expect(() => tab.AddTabStateChange(() => { })).not.toThrow();
            expect(() => tab.RemoveTabStateChange(() => { })).not.toThrow();
        });

        test('Section properties should be accessible', () => {
            const { formContext } = createFormContextWithTabs();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { tab: ['SUMMARY_TAB___ACCOUNT_INFORMATION'] });

            const section = form.Body.Tab.SUMMARY_TAB.Section.ACCOUNT_INFORMATION;
            expect(section).toBeDefined();
            expect(section.Name).toBe('ACCOUNT_INFORMATION');
            expect(section.Label).toBe('Account Information');
            expect(section.Visible).toBe(true);
            expect(section.Parent).toBeDefined();
        });

        test('Section setters should update values', () => {
            const { formContext, getSectionLabel, getSectionVisible } = createFormContextWithTabs();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { tab: ['SUMMARY_TAB___ACCOUNT_INFORMATION'] });

            const section = form.Body.Tab.SUMMARY_TAB.Section.ACCOUNT_INFORMATION;

            section.Label = 'New Section Label';
            expect(getSectionLabel()).toBe('New Section Label');

            section.Visible = false;
            expect(getSectionVisible()).toBe(false);
        });

        // Test for multiple sections in same tab (covers line 136 else branch)
        test('Tab with multiple sections should have all sections accessible', () => {
            // Create mock with two sections in one tab
            const sectionObjects = new Map([
                ['SECTION_1', {
                    getName: () => 'SECTION_1',
                    getLabel: () => 'Section 1',
                    setLabel: () => { },
                    getVisible: () => true,
                    setVisible: () => { },
                    getParent: () => ({})
                }],
                ['SECTION_2', {
                    getName: () => 'SECTION_2',
                    getLabel: () => 'Section 2',
                    setLabel: () => { },
                    getVisible: () => true,
                    setVisible: () => { },
                    getParent: () => ({})
                }]
            ]);

            const tabObject = {
                getName: () => 'MY_TAB',
                getLabel: () => 'My Tab',
                setLabel: () => { },
                getVisible: () => true,
                setVisible: () => { },
                getParent: () => ({}),
                getDisplayState: () => 'expanded',
                setDisplayState: () => { },
                getContentType: () => 'cardSections',
                setContentType: () => { },
                setFocus: () => { },
                addTabStateChange: () => { },
                removeTabStateChange: () => { },
                sections: {
                    get: (n: string) => sectionObjects.get(n),
                    getLength: () => 2
                }
            };

            const tabsMap = new Map([['MY_TAB', tabObject]]);

            const formContext = {
                data: {
                    getIsDirty: () => false,
                    isValid: () => true,
                    entity: {
                        attributes: { get: () => null },
                        getId: () => 'test-id',
                        getEntityName: () => 'account',
                        getIsDirty: () => false,
                        isValid: () => true,
                        getDataXml: () => '',
                        getEntityReference: () => ({}),
                        getPrimaryAttributeValue: () => ''
                    }
                },
                ui: {
                    getFormType: () => 2,
                    controls: { get: () => null, getLength: () => 0, forEach: () => { } },
                    tabs: { get: (n: string) => tabsMap.get(n), getLength: () => 1, forEach: () => { } },
                    formSelector: { getCurrentItem: () => null, items: { getLength: () => 0 } },
                    getViewPortHeight: () => 800,
                    getViewPortWidth: () => 1200
                },
                getControl: () => null,
                getAttribute: () => null,
                getFormContext: function () { return this; }
            };

            const executionContext = { getFormContext: () => formContext };
            // Pass two sections in the same tab - this triggers line 136 else branch
            const form = new FormBase(executionContext, 'test', {
                tab: ['MY_TAB___SECTION_1', 'MY_TAB___SECTION_2']
            });

            expect(form.Body.Tab.MY_TAB).toBeDefined();
            expect(form.Body.Tab.MY_TAB.Section.SECTION_1).toBeDefined();
            expect(form.Body.Tab.MY_TAB.Section.SECTION_2).toBeDefined();
            expect(form.Body.Tab.MY_TAB.Section.SECTION_1.Name).toBe('SECTION_1');
            expect(form.Body.Tab.MY_TAB.Section.SECTION_2.Name).toBe('SECTION_2');
        });

        // Test for Section.Controls collection (lines 180-193)
        test('Section.Controls should return controls collection with get, getLength, forEach methods', () => {
            const mockControl1 = { getName: () => 'control1', getLabel: () => 'Control 1' };
            const mockControl2 = { getName: () => 'control2', getLabel: () => 'Control 2' };

            const sectionObject = {
                getName: () => 'SECTION_WITH_CONTROLS',
                getLabel: () => 'Section With Controls',
                setLabel: () => { },
                getVisible: () => true,
                setVisible: () => { },
                getParent: () => ({ getName: () => 'TAB1' }),
                controls: {
                    get: (arg: number | string) => {
                        if (typeof arg === 'number') {
                            return [mockControl1, mockControl2][arg];
                        }
                        if (arg === 'control1') return mockControl1;
                        if (arg === 'control2') return mockControl2;
                        return null;
                    },
                    getLength: () => 2
                }
            };

            const tabObject = {
                getName: () => 'TAB1',
                getLabel: () => 'Tab 1',
                setLabel: () => { },
                getVisible: () => true,
                setVisible: () => { },
                getParent: () => ({}),
                getDisplayState: () => 'expanded',
                setDisplayState: () => { },
                getContentType: () => 'cardSections',
                setContentType: () => { },
                setFocus: () => { },
                addTabStateChange: () => { },
                removeTabStateChange: () => { },
                sections: {
                    get: (n: string) => n === 'SECTION_WITH_CONTROLS' ? sectionObject : null,
                    getLength: () => 1
                }
            };

            const tabsMap = new Map([['TAB1', tabObject]]);

            const formContext = {
                data: {
                    getIsDirty: () => false,
                    isValid: () => true,
                    entity: {
                        attributes: { get: () => null },
                        getId: () => 'test-id',
                        getEntityName: () => 'account',
                        getIsDirty: () => false,
                        isValid: () => true,
                        getDataXml: () => '',
                        getEntityReference: () => ({}),
                        getPrimaryAttributeValue: () => ''
                    }
                },
                ui: {
                    getFormType: () => 2,
                    controls: { get: () => null, getLength: () => 0, forEach: () => { } },
                    tabs: { get: (n: string) => tabsMap.get(n), getLength: () => 1, forEach: () => { } },
                    formSelector: { getCurrentItem: () => null, items: { getLength: () => 0 } },
                    getViewPortHeight: () => 800,
                    getViewPortWidth: () => 1200
                },
                getControl: () => null,
                getAttribute: () => null,
                getFormContext: function () { return this; }
            };

            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {
                tab: ['TAB1___SECTION_WITH_CONTROLS']
            });

            const section = form.Body.Tab.TAB1.Section.SECTION_WITH_CONTROLS;
            expect(section).toBeDefined();
            expect(section.Controls).toBeDefined();

            // Test get() method with index (line 184)
            expect(section.Controls.get(0)).toBe(mockControl1);
            expect(section.Controls.get(1)).toBe(mockControl2);

            // Test get() method with name (line 184)
            expect(section.Controls.get('control1')).toBe(mockControl1);
            expect(section.Controls.get('control2')).toBe(mockControl2);

            // Test getLength() method (line 185)
            expect(section.Controls.getLength()).toBe(2);

            // Test forEach() method (lines 186-190)
            const collectedControls: any[] = [];
            section.Controls.forEach((control: any, index: number) => {
                collectedControls.push({ control, index });
            });
            expect(collectedControls).toHaveLength(2);
            expect(collectedControls[0].control).toBe(mockControl1);
            expect(collectedControls[0].index).toBe(0);
            expect(collectedControls[1].control).toBe(mockControl2);
            expect(collectedControls[1].index).toBe(1);
        });

        test('Section.Controls should return null when section controls is undefined (line 182)', () => {
            const sectionObject = {
                getName: () => 'SECTION_NO_CONTROLS',
                getLabel: () => 'Section No Controls',
                setLabel: () => { },
                getVisible: () => true,
                setVisible: () => { },
                getParent: () => ({ getName: () => 'TAB2' }),
                controls: undefined // No controls
            };

            const tabObject = {
                getName: () => 'TAB2',
                getLabel: () => 'Tab 2',
                setLabel: () => { },
                getVisible: () => true,
                setVisible: () => { },
                getParent: () => ({}),
                getDisplayState: () => 'expanded',
                setDisplayState: () => { },
                getContentType: () => 'cardSections',
                setContentType: () => { },
                setFocus: () => { },
                addTabStateChange: () => { },
                removeTabStateChange: () => { },
                sections: {
                    get: (n: string) => n === 'SECTION_NO_CONTROLS' ? sectionObject : null,
                    getLength: () => 1
                }
            };

            const tabsMap = new Map([['TAB2', tabObject]]);

            const formContext = {
                data: {
                    getIsDirty: () => false,
                    isValid: () => true,
                    entity: {
                        attributes: { get: () => null },
                        getId: () => 'test-id',
                        getEntityName: () => 'account',
                        getIsDirty: () => false,
                        isValid: () => true,
                        getDataXml: () => '',
                        getEntityReference: () => ({}),
                        getPrimaryAttributeValue: () => ''
                    }
                },
                ui: {
                    getFormType: () => 2,
                    controls: { get: () => null, getLength: () => 0, forEach: () => { } },
                    tabs: { get: (n: string) => tabsMap.get(n), getLength: () => 1, forEach: () => { } },
                    formSelector: { getCurrentItem: () => null, items: { getLength: () => 0 } },
                    getViewPortHeight: () => 800,
                    getViewPortWidth: () => 1200
                },
                getControl: () => null,
                getAttribute: () => null,
                getFormContext: function () { return this; }
            };

            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {
                tab: ['TAB2___SECTION_NO_CONTROLS']
            });

            const section = form.Body.Tab.TAB2.Section.SECTION_NO_CONTROLS;
            expect(section).toBeDefined();
            // Controls should be null when section.controls is undefined
            expect(section.Controls).toBeNull();
        });

        test('Section.Controls.forEach should handle undefined getLength (line 187 || 0 branch)', () => {
            // Create controls collection where getLength returns undefined
            const controlsCollectionWithUndefinedLength = {
                get: (arg: any) => ({ name: 'ctrl1' }),
                getLength: () => undefined // This triggers the || 0 branch
            };

            const sectionObject = {
                getName: () => 'SECTION_UNDEFINED_LENGTH',
                getLabel: () => 'Section Undefined Length',
                setLabel: () => { },
                getVisible: () => true,
                setVisible: () => { },
                getParent: () => ({ getName: () => 'TAB3' }),
                controls: controlsCollectionWithUndefinedLength
            };

            const tabObject = {
                getName: () => 'TAB3',
                getLabel: () => 'Tab 3',
                setLabel: () => { },
                getVisible: () => true,
                setVisible: () => { },
                getDisplayState: () => 'expanded',
                setDisplayState: () => { },
                getParent: () => ({}),
                getContentType: () => 'cardSections',
                setContentType: () => { },
                sections: {
                    get: (n: string) => sectionObject,
                    getLength: () => 1
                },
                addTabStateChange: () => { },
                removeTabStateChange: () => { },
                setFocus: () => { }
            };

            const tabsMap = new Map<string, any>();
            tabsMap.set('TAB3', tabObject);

            const formContext = {
                data: {
                    getIsDirty: () => false,
                    isValid: () => true,
                    entity: {
                        attributes: { get: () => null },
                        getId: () => 'test-id',
                        getEntityName: () => 'account',
                        getIsDirty: () => false,
                        isValid: () => true,
                        getDataXml: () => '',
                        getEntityReference: () => ({}),
                        getPrimaryAttributeValue: () => ''
                    }
                },
                ui: {
                    getFormType: () => 2,
                    controls: { get: () => null, getLength: () => 0, forEach: () => { } },
                    tabs: { get: (n: string) => tabsMap.get(n), getLength: () => 1, forEach: () => { } },
                    formSelector: { getCurrentItem: () => null, items: { getLength: () => 0 } },
                    getViewPortHeight: () => 800,
                    getViewPortWidth: () => 1200
                },
                getControl: () => null,
                getAttribute: () => null,
                getFormContext: function () { return this; }
            };

            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {
                tab: ['TAB3___SECTION_UNDEFINED_LENGTH']
            });

            const section = form.Body.Tab.TAB3.Section.SECTION_UNDEFINED_LENGTH;
            expect(section).toBeDefined();
            expect(section.Controls).toBeDefined();
            expect(section.Controls).not.toBeNull();

            // forEach should not throw and iterate 0 times because getLength() is undefined -> fallback to 0
            let count = 0;
            section.Controls.forEach(() => { count++; });
            expect(count).toBe(0); // Should be 0 because || 0 fallback
        });
    });

    // =========================================================================
    // loadField - COMPLETE getter and method coverage
    // =========================================================================
    describe('loadField - All Getter Properties', () => {
        function createFullyMockedFieldContext() {
            const attributeValue = 'test value';
            const options = [{ text: 'Option 1', value: 1 }, { text: 'Option 2', value: 2 }];

            const attribute = {
                getName: () => 'testfield',
                getValue: () => attributeValue,
                setValue: () => { },
                getAttributeType: () => 'string',
                getFormat: () => 'text',
                getMaxLength: () => 200,
                getMax: () => 1000,
                getMin: () => 0,
                getParent: () => ({ entityName: 'account' }),
                getUserPrivilege: () => ({ canRead: true, canUpdate: true, canCreate: true }),
                isValid: () => true,
                setIsValid: () => { },
                getIsDirty: () => true,
                getIsPartyList: () => false,
                getInitialValue: () => 'initial',
                getOptions: () => options,
                getSelectedOption: () => options[0],
                getText: () => 'Option 1',
                getPrecision: () => 2,
                setPrecision: () => { },
                getRequiredLevel: () => 'required',
                setRequiredLevel: () => { },
                getSubmitMode: () => 'always',
                setSubmitMode: () => { },
                addOnChange: () => { },
                removeOnChange: () => { },
                fireOnChange: () => { },
                getOption: (v: any) => options.find(o => o.value === v),
                controls: { get: () => null, getLength: () => 0, forEach: () => { } }
            };

            const control = {
                getName: () => 'testfield',
                getLabel: () => 'Test Field Label',
                setLabel: () => { },
                getVisible: () => true,
                setVisible: () => { },
                getDisabled: () => false,
                setDisabled: () => { },
                setFocus: () => { },
                getControlType: () => 'standard',
                getParent: () => ({ name: 'section1' }),
                getAttribute: () => attribute,
                clearNotification: () => true,
                setNotification: () => true,
                addNotification: () => { },
                getOptions: () => options,
                getInitialUrl: () => 'https://example.com/initial',
                getObject: () => ({ objectType: 'iframe' }),
                getOutputs: () => ({ output1: 'value1' }),
                getSelectedResults: () => [{ id: '1', name: 'Result 1' }],
                getState: () => 'success',
                getTotalResultCount: () => 5,
                getData: () => 'custom data',
                setData: () => { },
                getDefaultView: () => 'view-guid',
                setDefaultView: () => { },
                getEntityTypes: () => ['account', 'contact'],
                setEntityTypes: () => { },
                getSearchQuery: () => 'search term',
                setSearchQuery: () => { },
                getShowTime: () => true,
                setShowTime: () => { },
                getSrc: () => 'https://example.com/src',
                setSrc: () => { },
                addCustomFilter: () => { },
                addCustomView: () => { },
                addOnLookupTagClick: () => { },
                removeOnLookupTagClick: () => { },
                addOnOutputChange: () => { },
                removeOnOutputChange: () => { },
                addOption: () => { },
                removeOption: () => { },
                clearOptions: () => { },
                addOnPostSearch: () => { },
                removeOnPostSearch: () => { },
                addPreSearch: () => { },
                removePreSearch: () => { },
                addOnResultOpened: () => { },
                removeOnResultOpened: () => { },
                addOnSelection: () => { },
                removeOnSelection: () => { },
                getContentWindow: () => Promise.resolve({ document: {} }),
                refresh: () => { },
                openSearchResult: () => { }
            };

            const attributesMap = new Map([['testfield', attribute]]);
            const controlsMap = new Map([['testfield', control]]);

            return {
                formContext: {
                    data: { getIsDirty: () => false, isValid: () => true, refresh: () => Promise.resolve(), save: () => Promise.resolve(), addOnLoad: () => { }, removeOnLoad: () => { }, entity: { attributes: { get: (n: any) => attributesMap.get(n), getLength: () => 1, forEach: () => { } }, getId: () => 'guid', getEntityName: () => 'account', getIsDirty: () => false, isValid: () => true, getDataXml: () => '', getEntityReference: () => ({}), getPrimaryAttributeValue: () => '', addOnSave: () => { }, removeOnSave: () => { }, addOnPostSave: () => { }, removeOnPostSave: () => { } }, process: null },
                    ui: { getFormType: () => 2, controls: { get: (n: any) => controlsMap.get(n), getLength: () => 1, forEach: () => { } }, tabs: { get: () => null, getLength: () => 0, forEach: () => { } }, formSelector: { getCurrentItem: () => ({ getId: () => '', getLabel: () => '' }), items: { getLength: () => 0, get: () => null, forEach: () => { } } }, getViewPortHeight: () => 800, getViewPortWidth: () => 1200, clearFormNotification: () => true, setFormNotification: () => true, close: () => { }, refreshRibbon: () => { }, addLoaded: () => { }, removeLoaded: () => { }, addOnLoad: () => { }, removeOnLoad: () => { }, setFormEntityName: () => { }, process: null, quickForms: { get: () => null, getLength: () => 0 } },
                    getControl: (n: string) => controlsMap.get(n),
                    getAttribute: (n: string) => attributesMap.get(n),
                    getFormContext: function () { return this; }
                }
            };
        }

        // Test all getter properties - lines 29-54
        test('Attribute should return control.getAttribute result', () => {
            const { formContext } = createFullyMockedFieldContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });
            expect(form.Body.testfield.Attribute).toBeDefined();
        });

        test('AttributeName should return attribute name', () => {
            const { formContext } = createFullyMockedFieldContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });
            expect(form.Body.testfield.AttributeName).toBe('testfield');
        });

        test('AttributeParent should return attribute parent', () => {
            const { formContext } = createFullyMockedFieldContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });
            expect(form.Body.testfield.AttributeParent).toEqual({ entityName: 'account' });
        });

        test('AttributeType should return attribute type', () => {
            const { formContext } = createFullyMockedFieldContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });
            expect(form.Body.testfield.AttributeType).toBe('string');
        });

        test('ControlName should return control name', () => {
            const { formContext } = createFullyMockedFieldContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });
            expect(form.Body.testfield.ControlName).toBe('testfield');
        });

        test('ControlOptions should return control options', () => {
            const { formContext } = createFullyMockedFieldContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });
            expect(form.Body.testfield.ControlOptions).toBeDefined();
            expect(form.Body.testfield.ControlOptions.length).toBe(2);
        });

        test('ControlParent should return control parent', () => {
            const { formContext } = createFullyMockedFieldContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });
            expect(form.Body.testfield.ControlParent).toEqual({ name: 'section1' });
        });

        test('ControlType should return control type', () => {
            const { formContext } = createFullyMockedFieldContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });
            expect(form.Body.testfield.ControlType).toBe('standard');
        });

        test('Format should return attribute format', () => {
            const { formContext } = createFullyMockedFieldContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });
            expect(form.Body.testfield.Format).toBe('text');
        });

        test('InitialUrl should return control initial URL', () => {
            const { formContext } = createFullyMockedFieldContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });
            expect(form.Body.testfield.InitialUrl).toBe('https://example.com/initial');
        });

        test('InitialValue should return attribute initial value', () => {
            const { formContext } = createFullyMockedFieldContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });
            expect(form.Body.testfield.InitialValue).toBe('initial');
        });

        test('IsDirty should return attribute dirty state', () => {
            const { formContext } = createFullyMockedFieldContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });
            expect(form.Body.testfield.IsDirty).toBe(true);
        });

        test('IsPartyList should return party list status', () => {
            const { formContext } = createFullyMockedFieldContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });
            expect(form.Body.testfield.IsPartyList).toBe(false);
        });

        test('IsValid should return attribute valid state', () => {
            const { formContext } = createFullyMockedFieldContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });
            expect(form.Body.testfield.IsValid).toBe(true);
        });

        test('Max should return attribute max value', () => {
            const { formContext } = createFullyMockedFieldContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });
            expect(form.Body.testfield.Max).toBe(1000);
        });

        test('MaxLength should return attribute max length', () => {
            const { formContext } = createFullyMockedFieldContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });
            expect(form.Body.testfield.MaxLength).toBe(200);
        });

        test('Min should return attribute min value', () => {
            const { formContext } = createFullyMockedFieldContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });
            expect(form.Body.testfield.Min).toBe(0);
        });

        test('Object should return control object', () => {
            const { formContext } = createFullyMockedFieldContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });
            expect(form.Body.testfield.Object).toEqual({ objectType: 'iframe' });
        });

        test('Options should return attribute options', () => {
            const { formContext } = createFullyMockedFieldContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });
            expect(form.Body.testfield.Options.length).toBe(2);
        });

        test('Outputs should return control outputs', () => {
            const { formContext } = createFullyMockedFieldContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });
            expect(form.Body.testfield.Outputs).toEqual({ output1: 'value1' });
        });

        test('SelectedOption should return selected option', () => {
            const { formContext } = createFullyMockedFieldContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });
            expect(form.Body.testfield.SelectedOption).toEqual({ text: 'Option 1', value: 1 });
        });

        test('SelectedResults should return selected results', () => {
            const { formContext } = createFullyMockedFieldContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });
            expect(form.Body.testfield.SelectedResults).toEqual([{ id: '1', name: 'Result 1' }]);
        });

        test('State should return control state', () => {
            const { formContext } = createFullyMockedFieldContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });
            expect(form.Body.testfield.State).toBe('success');
        });

        test('Text should return attribute text', () => {
            const { formContext } = createFullyMockedFieldContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });
            expect(form.Body.testfield.Text).toBe('Option 1');
        });

        test('TotalResultCount should return total result count', () => {
            const { formContext } = createFullyMockedFieldContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });
            expect(form.Body.testfield.TotalResultCount).toBe(5);
        });

        test('UserPrivilege should return user privileges', () => {
            const { formContext } = createFullyMockedFieldContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });
            expect(form.Body.testfield.UserPrivilege).toEqual({ canRead: true, canUpdate: true, canCreate: true });
        });
    });

    // Test getterSetter properties - lines 55-73
    describe('loadField - GetterSetter Properties', () => {
        function createGetterSetterContext() {
            let dataValue = 'initial data';
            let defaultViewValue = 'default-view';
            let entityTypesValue = ['account'];
            let labelValue = 'Initial Label';
            let precisionValue = 2;
            let requiredLevelValue = 'none';
            let searchQueryValue = '';
            let showTimeValue = false;
            let srcValue = 'https://initial.com';
            let submitModeValue = 'dirty';
            let visibleValue = true;

            const attribute = {
                getName: () => 'testfield',
                getValue: () => 'value',
                setValue: () => { },
                getPrecision: () => precisionValue,
                setPrecision: (v: number) => { precisionValue = v; },
                getRequiredLevel: () => requiredLevelValue,
                setRequiredLevel: (v: string) => { requiredLevelValue = v; },
                getSubmitMode: () => submitModeValue,
                setSubmitMode: (v: string) => { submitModeValue = v; }
            };

            const control = {
                getName: () => 'testfield',
                getLabel: () => labelValue,
                setLabel: (v: string) => { labelValue = v; },
                getVisible: () => visibleValue,
                setVisible: (v: boolean) => { visibleValue = v; },
                getDisabled: () => false,
                setDisabled: () => { },
                setFocus: () => { },
                getControlType: () => 'standard',
                getParent: () => ({}),
                getAttribute: () => attribute,
                getData: () => dataValue,
                setData: (v: any) => { dataValue = v; },
                getDefaultView: () => defaultViewValue,
                setDefaultView: (v: any) => { defaultViewValue = v; },
                getEntityTypes: () => entityTypesValue,
                setEntityTypes: (v: any) => { entityTypesValue = v; },
                getSearchQuery: () => searchQueryValue,
                setSearchQuery: (v: string) => { searchQueryValue = v; },
                getShowTime: () => showTimeValue,
                setShowTime: (v: boolean) => { showTimeValue = v; },
                getSrc: () => srcValue,
                setSrc: (v: string) => { srcValue = v; }
            };

            const controlsMap = new Map([['testfield', control]]);
            const attributesMap = new Map([['testfield', attribute]]);

            return {
                formContext: {
                    data: { getIsDirty: () => false, isValid: () => true, refresh: () => Promise.resolve(), save: () => Promise.resolve(), addOnLoad: () => { }, removeOnLoad: () => { }, entity: { attributes: { get: (n: any) => attributesMap.get(n), getLength: () => 1, forEach: () => { } }, getId: () => '', getEntityName: () => '', getIsDirty: () => false, isValid: () => true, getDataXml: () => '', getEntityReference: () => ({}), getPrimaryAttributeValue: () => '', addOnSave: () => { }, removeOnSave: () => { }, addOnPostSave: () => { }, removeOnPostSave: () => { } }, process: null },
                    ui: { getFormType: () => 2, controls: { get: (n: any) => controlsMap.get(n), getLength: () => 1, forEach: () => { } }, tabs: { get: () => null, getLength: () => 0, forEach: () => { } }, formSelector: { getCurrentItem: () => ({ getId: () => '', getLabel: () => '' }), items: { getLength: () => 0, get: () => null, forEach: () => { } } }, getViewPortHeight: () => 800, getViewPortWidth: () => 1200, clearFormNotification: () => true, setFormNotification: () => true, close: () => { }, refreshRibbon: () => { }, addLoaded: () => { }, removeLoaded: () => { }, addOnLoad: () => { }, removeOnLoad: () => { }, setFormEntityName: () => { }, process: null, quickForms: { get: () => null, getLength: () => 0 } },
                    getControl: (n: string) => controlsMap.get(n),
                    getAttribute: (n: string) => attributesMap.get(n),
                    getFormContext: function () { return this; }
                },
                getDataValue: () => dataValue,
                getDefaultViewValue: () => defaultViewValue,
                getEntityTypesValue: () => entityTypesValue,
                getLabelValue: () => labelValue,
                getPrecisionValue: () => precisionValue,
                getRequiredLevelValue: () => requiredLevelValue,
                getSearchQueryValue: () => searchQueryValue,
                getShowTimeValue: () => showTimeValue,
                getSrcValue: () => srcValue,
                getSubmitModeValue: () => submitModeValue,
                getVisibleValue: () => visibleValue
            };
        }

        test('Data getter and setter should work', () => {
            const { formContext, getDataValue } = createGetterSetterContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });

            expect(form.Body.testfield.Data).toBe('initial data');
            form.Body.testfield.Data = 'new data';
            expect(getDataValue()).toBe('new data');
        });

        test('DefaultView getter and setter should work', () => {
            const { formContext, getDefaultViewValue } = createGetterSetterContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });

            expect(form.Body.testfield.DefaultView).toBe('default-view');
            form.Body.testfield.DefaultView = 'new-view';
            expect(getDefaultViewValue()).toBe('new-view');
        });

        test('EntityTypes getter and setter should work', () => {
            const { formContext, getEntityTypesValue } = createGetterSetterContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });

            expect(form.Body.testfield.EntityTypes).toEqual(['account']);
            form.Body.testfield.EntityTypes = ['contact', 'lead'];
            expect(getEntityTypesValue()).toEqual(['contact', 'lead']);
        });

        test('Label getter and setter should work', () => {
            const { formContext, getLabelValue } = createGetterSetterContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });

            expect(form.Body.testfield.Label).toBe('Initial Label');
            form.Body.testfield.Label = 'New Label';
            expect(getLabelValue()).toBe('New Label');
        });

        test('Precision getter and setter should work', () => {
            const { formContext, getPrecisionValue } = createGetterSetterContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });

            expect(form.Body.testfield.Precision).toBe(2);
            form.Body.testfield.Precision = 4;
            expect(getPrecisionValue()).toBe(4);
        });

        test('RequiredLevel getter and setter should work', () => {
            const { formContext, getRequiredLevelValue } = createGetterSetterContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });

            expect(form.Body.testfield.RequiredLevel).toBe('none');
            form.Body.testfield.RequiredLevel = 'required';
            expect(getRequiredLevelValue()).toBe('required');
        });

        test('SearchQuery getter and setter should work', () => {
            const { formContext, getSearchQueryValue } = createGetterSetterContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });

            expect(form.Body.testfield.SearchQuery).toBe('');
            form.Body.testfield.SearchQuery = 'search term';
            expect(getSearchQueryValue()).toBe('search term');
        });

        test('ShowTime getter and setter should work', () => {
            const { formContext, getShowTimeValue } = createGetterSetterContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });

            expect(form.Body.testfield.ShowTime).toBe(false);
            form.Body.testfield.ShowTime = true;
            expect(getShowTimeValue()).toBe(true);
        });

        test('Src getter and setter should work', () => {
            const { formContext, getSrcValue } = createGetterSetterContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });

            expect(form.Body.testfield.Src).toBe('https://initial.com');
            form.Body.testfield.Src = 'https://new.com';
            expect(getSrcValue()).toBe('https://new.com');
        });

        test('SubmitMode getter and setter should work', () => {
            const { formContext, getSubmitModeValue } = createGetterSetterContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });

            expect(form.Body.testfield.SubmitMode).toBe('dirty');
            form.Body.testfield.SubmitMode = 'always';
            expect(getSubmitModeValue()).toBe('always');
        });

        test('Visible getter and setter should work', () => {
            const { formContext, getVisibleValue } = createGetterSetterContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });

            expect(form.Body.testfield.Visible).toBe(true);
            form.Body.testfield.Visible = false;
            expect(getVisibleValue()).toBe(false);
        });
    });

    // Test field methods - lines 74-110
    describe('loadField - Methods', () => {
        function createMethodContext() {
            let onChangeCallbacks: any[] = [];
            let onOutputChangeCallbacks: any[] = [];
            let preSearchCallbacks: any[] = [];
            let postSearchCallbacks: any[] = [];
            let resultOpenedCallbacks: any[] = [];
            let selectionCallbacks: any[] = [];
            let lookupTagClickCallbacks: any[] = [];
            const addedOptions: any[] = [];
            const removedOptions: number[] = [];
            let clearedOptions = false;
            let focusCalled = false;
            let refreshCalled = false;
            let fireOnChangeCalled = false;
            let isValidSet = false;
            let notificationSet: any = null;
            let notificationCleared: string = '';

            const attribute = {
                getName: () => 'testfield',
                getValue: () => 'value',
                setValue: () => { },
                addOnChange: (cb: any) => { onChangeCallbacks.push(cb); },
                removeOnChange: (cb: any) => { onChangeCallbacks = onChangeCallbacks.filter(c => c !== cb); },
                fireOnChange: () => { fireOnChangeCalled = true; },
                setIsValid: (valid: boolean, msg?: string) => { isValidSet = true; },
                getOption: (v: number) => ({ text: 'Option', value: v })
            };

            const control = {
                getName: () => 'testfield',
                getLabel: () => 'Field',
                setLabel: () => { },
                getVisible: () => true,
                setVisible: () => { },
                getDisabled: () => false,
                setDisabled: () => { },
                setFocus: () => { focusCalled = true; },
                getControlType: () => 'standard',
                getParent: () => ({}),
                getAttribute: () => attribute,
                clearNotification: (id: string) => { notificationCleared = id; return true; },
                setNotification: (msg: string, id: string) => { notificationSet = { msg, id }; return true; },
                addNotification: () => { },
                addCustomFilter: () => { },
                addCustomView: () => { },
                addOnLookupTagClick: (cb: any) => { lookupTagClickCallbacks.push(cb); },
                removeOnLookupTagClick: (cb: any) => { lookupTagClickCallbacks = lookupTagClickCallbacks.filter(c => c !== cb); },
                addOnOutputChange: (cb: any) => { onOutputChangeCallbacks.push(cb); },
                removeOnOutputChange: (cb: any) => { onOutputChangeCallbacks = onOutputChangeCallbacks.filter(c => c !== cb); },
                addOption: (opt: any, idx?: number) => { addedOptions.push({ opt, idx }); },
                removeOption: (v: number) => { removedOptions.push(v); },
                clearOptions: () => { clearedOptions = true; },
                addOnPostSearch: (cb: any) => { postSearchCallbacks.push(cb); },
                removeOnPostSearch: (cb: any) => { postSearchCallbacks = postSearchCallbacks.filter(c => c !== cb); },
                addPreSearch: (cb: any) => { preSearchCallbacks.push(cb); },
                removePreSearch: (cb: any) => { preSearchCallbacks = preSearchCallbacks.filter(c => c !== cb); },
                addOnResultOpened: (cb: any) => { resultOpenedCallbacks.push(cb); },
                removeOnResultOpened: (cb: any) => { resultOpenedCallbacks = resultOpenedCallbacks.filter(c => c !== cb); },
                addOnSelection: (cb: any) => { selectionCallbacks.push(cb); },
                removeOnSelection: (cb: any) => { selectionCallbacks = selectionCallbacks.filter(c => c !== cb); },
                getContentWindow: () => Promise.resolve({}),
                refresh: () => { refreshCalled = true; },
                openSearchResult: () => { }
            };

            const controlsMap = new Map([['testfield', control]]);
            const attributesMap = new Map([['testfield', attribute]]);

            return {
                formContext: {
                    data: { getIsDirty: () => false, isValid: () => true, refresh: () => Promise.resolve(), save: () => Promise.resolve(), addOnLoad: () => { }, removeOnLoad: () => { }, entity: { attributes: { get: (n: any) => attributesMap.get(n), getLength: () => 1, forEach: () => { } }, getId: () => '', getEntityName: () => '', getIsDirty: () => false, isValid: () => true, getDataXml: () => '', getEntityReference: () => ({}), getPrimaryAttributeValue: () => '', addOnSave: () => { }, removeOnSave: () => { }, addOnPostSave: () => { }, removeOnPostSave: () => { } }, process: null },
                    ui: { getFormType: () => 2, controls: { get: (n: any) => controlsMap.get(n), getLength: () => 1, forEach: () => { } }, tabs: { get: () => null, getLength: () => 0, forEach: () => { } }, formSelector: { getCurrentItem: () => ({ getId: () => '', getLabel: () => '' }), items: { getLength: () => 0, get: () => null, forEach: () => { } } }, getViewPortHeight: () => 800, getViewPortWidth: () => 1200, clearFormNotification: () => true, setFormNotification: () => true, close: () => { }, refreshRibbon: () => { }, addLoaded: () => { }, removeLoaded: () => { }, addOnLoad: () => { }, removeOnLoad: () => { }, setFormEntityName: () => { }, process: null, quickForms: { get: () => null, getLength: () => 0 } },
                    getControl: (n: string) => controlsMap.get(n),
                    getAttribute: (n: string) => attributesMap.get(n),
                    getFormContext: function () { return this; }
                },
                getOnChangeCallbacks: () => onChangeCallbacks,
                getOnOutputChangeCallbacks: () => onOutputChangeCallbacks,
                getPreSearchCallbacks: () => preSearchCallbacks,
                getPostSearchCallbacks: () => postSearchCallbacks,
                getResultOpenedCallbacks: () => resultOpenedCallbacks,
                getSelectionCallbacks: () => selectionCallbacks,
                getLookupTagClickCallbacks: () => lookupTagClickCallbacks,
                getAddedOptions: () => addedOptions,
                getRemovedOptions: () => removedOptions,
                isClearedOptions: () => clearedOptions,
                isFocusCalled: () => focusCalled,
                isRefreshCalled: () => refreshCalled,
                isFireOnChangeCalled: () => fireOnChangeCalled,
                isIsValidSet: () => isValidSet,
                getNotificationSet: () => notificationSet,
                getNotificationCleared: () => notificationCleared
            };
        }

        test('AddCustomFilter should be callable', () => {
            const { formContext } = createMethodContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });
            expect(() => form.Body.testfield.AddCustomFilter('<filter/>')).not.toThrow();
        });

        test('AddCustomView should be callable', () => {
            const { formContext } = createMethodContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });
            expect(() => form.Body.testfield.AddCustomView('view-id', 'account', 'View', '<fetch/>', '<layout/>', true)).not.toThrow();
        });

        test('AddOnChange and RemoveOnChange should work', () => {
            const { formContext, getOnChangeCallbacks } = createMethodContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });
            const callback = () => { };
            form.Body.testfield.AddOnChange(callback);
            expect(getOnChangeCallbacks().length).toBe(1);
            form.Body.testfield.RemoveOnChange(callback);
            expect(getOnChangeCallbacks().length).toBe(0);
        });

        test('AddOnOutputChange and RemoveOnOutputChange should work', () => {
            const { formContext, getOnOutputChangeCallbacks } = createMethodContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });
            const callback = () => { };
            form.Body.testfield.AddOnOutputChange(callback);
            expect(getOnOutputChangeCallbacks().length).toBe(1);
            form.Body.testfield.RemoveOnOutputChange(callback);
            expect(getOnOutputChangeCallbacks().length).toBe(0);
        });

        test('AddOption and RemoveOption should work', () => {
            const { formContext, getAddedOptions, getRemovedOptions } = createMethodContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });
            form.Body.testfield.AddOption('New Option', 3, 0);
            expect(getAddedOptions().length).toBe(1);
            form.Body.testfield.RemoveOption(3);
            expect(getRemovedOptions()).toContain(3);
        });

        test('AddPreSearch and RemovePreSearch should work', () => {
            const { formContext, getPreSearchCallbacks } = createMethodContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });
            const callback = () => { };
            form.Body.testfield.AddPreSearch(callback);
            expect(getPreSearchCallbacks().length).toBe(1);
            form.Body.testfield.RemovePreSearch(callback);
            expect(getPreSearchCallbacks().length).toBe(0);
        });

        test('AddPostSearch and RemovePostSearch should work', () => {
            const { formContext, getPostSearchCallbacks } = createMethodContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });
            const callback = () => { };
            form.Body.testfield.AddPostSearch(callback);
            expect(getPostSearchCallbacks().length).toBe(1);
            form.Body.testfield.RemovePostSearch(callback);
            expect(getPostSearchCallbacks().length).toBe(0);
        });

        test('AddResultOpened and RemoveResultOpened should work', () => {
            const { formContext, getResultOpenedCallbacks } = createMethodContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });
            const callback = () => { };
            form.Body.testfield.AddResultOpened(callback);
            expect(getResultOpenedCallbacks().length).toBe(1);
            form.Body.testfield.RemoveResultOpened(callback);
            expect(getResultOpenedCallbacks().length).toBe(0);
        });

        test('AddSelection and RemoveSelection should work', () => {
            const { formContext, getSelectionCallbacks } = createMethodContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });
            const callback = () => { };
            form.Body.testfield.AddSelection(callback);
            expect(getSelectionCallbacks().length).toBe(1);
            form.Body.testfield.RemoveSelection(callback);
            expect(getSelectionCallbacks().length).toBe(0);
        });

        test('AddLookupTagClick and RemoveLookupTagClick should work', () => {
            const { formContext, getLookupTagClickCallbacks } = createMethodContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });
            const callback = () => { };
            form.Body.testfield.AddLookupTagClick(callback);
            expect(getLookupTagClickCallbacks().length).toBe(1);
            form.Body.testfield.RemoveLookupTagClick(callback);
            expect(getLookupTagClickCallbacks().length).toBe(0);
        });

        test('ClearOptions should work', () => {
            const { formContext, isClearedOptions } = createMethodContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });
            form.Body.testfield.ClearOptions();
            expect(isClearedOptions()).toBe(true);
        });

        test('Focus should work', () => {
            const { formContext, isFocusCalled } = createMethodContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });
            form.Body.testfield.Focus();
            expect(isFocusCalled()).toBe(true);
        });

        test('Refresh should work', () => {
            const { formContext, isRefreshCalled } = createMethodContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });
            form.Body.testfield.Refresh();
            expect(isRefreshCalled()).toBe(true);
        });

        test('FireOnChange should work', () => {
            const { formContext, isFireOnChangeCalled } = createMethodContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });
            form.Body.testfield.FireOnChange();
            expect(isFireOnChangeCalled()).toBe(true);
        });

        test('SetIsValid should work', () => {
            const { formContext, isIsValidSet } = createMethodContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });
            form.Body.testfield.SetIsValid(false, 'Invalid');
            expect(isIsValidSet()).toBe(true);
        });

        test('SetNotification should work', () => {
            const { formContext, getNotificationSet } = createMethodContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });
            form.Body.testfield.SetNotification('Error message', 'notify-1');
            expect(getNotificationSet()).toEqual({ msg: 'Error message', id: 'notify-1' });
        });

        test('ClearNotification should work', () => {
            const { formContext, getNotificationCleared } = createMethodContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });
            form.Body.testfield.ClearNotification('notify-1');
            expect(getNotificationCleared()).toBe('notify-1');
        });

        test('Option should return option by value', () => {
            const { formContext } = createMethodContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });
            const option = form.Body.testfield.Option(1);
            expect(option).toEqual({ text: 'Option', value: 1 });
        });

        test('OpenSearchResult should be callable', () => {
            const { formContext } = createMethodContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', { body: ['testfield'] });
            expect(() => form.Body.testfield.OpenSearchResult(1, 'read')).not.toThrow();
        });
    });

    // =========================================================================
    // Edge Cases - Null/Undefined ExecutionContext (lines 610-662)
    // =========================================================================
    describe('Null ExecutionContext Edge Cases', () => {
        test('FormBase should handle null executionContext', () => {
            const form = new FormBase(null, 'test', {});
            expect(form).toBeDefined();
            expect(form.FormId).toBeUndefined();
            expect(form.FormType).toBeUndefined();
            expect(form.EntityId).toBeUndefined();
        });

        test('FormBase should handle undefined executionContext', () => {
            const form = new FormBase(undefined, 'test', {});
            expect(form).toBeDefined();
            expect(form.DataIsDirty).toBeUndefined();
            expect(form.EntityName).toBeUndefined();
        });

        test('FormBase should handle executionContext with null getFormContext', () => {
            const form = new FormBase({ getFormContext: () => null }, 'test', {});
            expect(form).toBeDefined();
            expect(form.Attributes).toBeUndefined();
            expect(form.Controls).toBeUndefined();
        });

        test('FormBase should handle executionContext without getFormContext', () => {
            // This tests the fallback path where executionContext itself is used
            const mockContext = {
                data: null,
                ui: null
            };
            const form = new FormBase(mockContext, 'test', {});
            expect(form).toBeDefined();
        });

        test('Form with null data should handle gracefully', () => {
            const formContext = {
                data: null,
                ui: {
                    getFormType: () => 2,
                    getViewPortHeight: () => 800,
                    getViewPortWidth: () => 1200,
                    controls: null,
                    formSelector: { getCurrentItem: () => null, items: { getLength: () => 0 } }
                },
                getFormContext: function () { return this; }
            };
            const form = new FormBase({ getFormContext: () => formContext }, 'test', {});
            // Access FormType which should work (ui exists)
            expect(form.FormType).toBe(2);
            // Body should have Tab property even when body/tab config is empty
            expect(form.Body).toEqual({ Tab: {} });
        });

        test('Form with null ui should handle gracefully', () => {
            const formContext = {
                data: {
                    getIsDirty: () => false,
                    isValid: () => true,
                    entity: {
                        getId: () => 'id',
                        getEntityName: () => 'account',
                        getIsDirty: () => false,
                        isValid: () => true,
                        getDataXml: () => '',
                        getEntityReference: () => ({}),
                        getPrimaryAttributeValue: () => ''
                    }
                },
                ui: null,
                getFormContext: function () { return this; }
            };
            const form = new FormBase({ getFormContext: () => formContext }, 'test', {});
            // EntityId should work (data exists)
            expect(form.EntityId).toBe('id');
            // Body should have Tab property even when body/tab config is empty
            expect(form.Body).toEqual({ Tab: {} });
        });
    });

    // =========================================================================
    // findFormItem Edge Cases (lines 617, 620)
    // =========================================================================
    describe('findFormItem Edge Cases', () => {
        test('FormIsVisible should handle null items (line 617)', () => {
            const formContext = {
                data: {
                    getIsDirty: () => false,
                    isValid: () => true,
                    entity: {
                        getId: () => 'test-id',
                        getEntityName: () => 'account',
                        getIsDirty: () => false,
                        isValid: () => true,
                        getDataXml: () => '',
                        getEntityReference: () => ({}),
                        getPrimaryAttributeValue: () => ''
                    }
                },
                ui: {
                    getFormType: () => 2,
                    formSelector: {
                        getCurrentItem: () => ({ getId: () => 'form-1', getLabel: () => 'Form 1' }),
                        items: null  // null items - covers line 617 ?? 0 fallback
                    },
                    getViewPortHeight: () => 800,
                    getViewPortWidth: () => 1200,
                    controls: { get: () => null }
                },
                getControl: () => null,
                getAttribute: () => null,
                getFormContext: function () { return this; }
            };
            const form = new FormBase({ getFormContext: () => formContext }, 'test', {});

            // Should return undefined when items is null
            expect(form.FormIsVisible('any-form-id')).toBeUndefined();
        });

        test('FormNavigateToFormId should handle items.get() returning null (line 620)', () => {
            const formContext = {
                data: {
                    getIsDirty: () => false,
                    isValid: () => true,
                    entity: {
                        getId: () => 'test-id',
                        getEntityName: () => 'account',
                        getIsDirty: () => false,
                        isValid: () => true,
                        getDataXml: () => '',
                        getEntityReference: () => ({}),
                        getPrimaryAttributeValue: () => ''
                    }
                },
                ui: {
                    getFormType: () => 2,
                    formSelector: {
                        getCurrentItem: () => ({ getId: () => 'form-1', getLabel: () => 'Form 1' }),
                        items: {
                            getLength: () => 3,
                            get: (index: number) => {
                                // Return null for index 0 and 1, covers line 620 (item && ...)
                                if (index === 0) return null;
                                if (index === 1) return undefined;
                                return { getId: () => 'form-3', getLabel: () => 'Form 3', navigate: () => { } };
                            }
                        }
                    },
                    getViewPortHeight: () => 800,
                    getViewPortWidth: () => 1200,
                    controls: { get: () => null }
                },
                getControl: () => null,
                getAttribute: () => null,
                getFormContext: function () { return this; }
            };
            const form = new FormBase({ getFormContext: () => formContext }, 'test', {});

            // Should handle null/undefined items in the loop
            expect(() => form.FormNavigateToFormId('form-3')).not.toThrow();
            expect(() => form.FormNavigateToFormId('not-found')).not.toThrow();
        });
    });

    // =========================================================================
    // Refresh/Save without callback (lines 654, 662)
    // =========================================================================
    describe('Refresh and Save without callback', () => {
        test('Refresh without successCallback should return promise (line 654-655)', () => {
            const refreshPromise = Promise.resolve();
            const formContext = {
                data: {
                    getIsDirty: () => false,
                    isValid: () => true,
                    refresh: () => refreshPromise,
                    save: () => Promise.resolve(),
                    entity: {
                        getId: () => 'test-id',
                        getEntityName: () => 'account',
                        getIsDirty: () => false,
                        isValid: () => true,
                        getDataXml: () => '',
                        getEntityReference: () => ({}),
                        getPrimaryAttributeValue: () => ''
                    }
                },
                ui: {
                    getFormType: () => 2,
                    formSelector: { getCurrentItem: () => null, items: { getLength: () => 0 } },
                    getViewPortHeight: () => 800,
                    getViewPortWidth: () => 1200,
                    controls: { get: () => null }
                },
                getControl: () => null,
                getAttribute: () => null,
                getFormContext: function () { return this; }
            };
            const form = new FormBase({ getFormContext: () => formContext }, 'test', {});

            // Call Refresh WITHOUT callback - should return promise (else branch line 655)
            const result = form.Refresh(true);
            expect(result).toBe(refreshPromise);
        });

        test('Save without successCallback should return promise (line 662-663)', () => {
            const savePromise = Promise.resolve();
            const formContext = {
                data: {
                    getIsDirty: () => false,
                    isValid: () => true,
                    refresh: () => Promise.resolve(),
                    save: () => savePromise,
                    entity: {
                        getId: () => 'test-id',
                        getEntityName: () => 'account',
                        getIsDirty: () => false,
                        isValid: () => true,
                        getDataXml: () => '',
                        getEntityReference: () => ({}),
                        getPrimaryAttributeValue: () => ''
                    }
                },
                ui: {
                    getFormType: () => 2,
                    formSelector: { getCurrentItem: () => null, items: { getLength: () => 0 } },
                    getViewPortHeight: () => 800,
                    getViewPortWidth: () => 1200,
                    controls: { get: () => null }
                },
                getControl: () => null,
                getAttribute: () => null,
                getFormContext: function () { return this; }
            };
            const form = new FormBase({ getFormContext: () => formContext }, 'test', {});

            // Call Save WITHOUT callback - should return promise (else branch line 663)
            const result = form.Save();
            expect(result).toBe(savePromise);
        });
    });

    // =========================================================================
    // Refresh/Save WITH callback but null data (lines 654, 662 inner branch)
    // =========================================================================
    describe('Refresh and Save with callback but null data', () => {
        test('Refresh WITH successCallback but null data should not throw (line 654 branch)', () => {
            const formContext = {
                data: null,  // null data means contextData?.refresh() returns undefined
                ui: {
                    getFormType: () => 2,
                    formSelector: { getCurrentItem: () => null, items: { getLength: () => 0 } },
                    getViewPortHeight: () => 800,
                    getViewPortWidth: () => 1200,
                    controls: { get: () => null }
                },
                getControl: () => null,
                getAttribute: () => null,
                getFormContext: function () { return this; }
            };
            const form = new FormBase({ getFormContext: () => formContext }, 'test', {});
            const callback = jest.fn();

            // Call Refresh WITH callback but data is null - promise?.then should handle null promise
            expect(() => form.Refresh(true, callback)).not.toThrow();
        });

        test('Save WITH successCallback but null data should not throw (line 662 branch)', () => {
            const formContext = {
                data: null,  // null data means contextData?.save() returns undefined
                ui: {
                    getFormType: () => 2,
                    formSelector: { getCurrentItem: () => null, items: { getLength: () => 0 } },
                    getViewPortHeight: () => 800,
                    getViewPortWidth: () => 1200,
                    controls: { get: () => null }
                },
                getControl: () => null,
                getAttribute: () => null,
                getFormContext: function () { return this; }
            };
            const form = new FormBase({ getFormContext: () => formContext }, 'test', {});
            const callback = jest.fn();

            // Call Save WITH callback but data is null - promise?.then should handle null promise
            expect(() => form.Save({}, callback)).not.toThrow();
        });
    });
});

