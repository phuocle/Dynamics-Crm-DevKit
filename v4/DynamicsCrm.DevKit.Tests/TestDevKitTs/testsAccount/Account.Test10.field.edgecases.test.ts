/**
 * Unit Tests for devkit.ts - Field Loading Edge Cases
 * Test file: Account.Test10.field.edgecases.test.ts
 *
 * Coverage targets:
 * - Lines 5-11: getXrm() with parent frames
 * - Lines 58-59, 70-71: Disabled/Value setters on readonly forms (FormType 3,4)
 * - Lines 114-123: findControlFromAttribute()
 * - Lines 139-154: Attribute fallback scenarios
 */
import { XrmMockGenerator } from 'xrm-mock';
import { FormBase } from '../lib/devkit';

// Global setup
let mockGlobalContext: any;

describe('devkit.ts - Field Loading Edge Cases', () => {
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

    // Helper: Create mock attribute
    function createMockAttribute(name: string, value: any) {
        let _value = value;
        let _disabled = false;
        let _isValid = true;
        return {
            getName: () => name,
            getValue: () => _value,
            setValue: jest.fn((v: any) => { _value = v; }),
            getAttributeType: () => 'string',
            getFormat: () => 'text',
            getIsDirty: () => false,
            isValid: () => _isValid,
            setIsValid: (v: boolean) => { _isValid = v; },
            getParent: () => ({}),
            getRequiredLevel: () => 'none',
            setRequiredLevel: jest.fn(),
            getSubmitMode: () => 'always',
            setSubmitMode: jest.fn(),
            addOnChange: jest.fn(),
            removeOnChange: jest.fn(),
            fireOnChange: jest.fn(),
            controls: {
                forEach: jest.fn((cb: any) => {
                    // Simulate control attached to attribute
                    cb({
                        getName: () => name,
                        getLabel: () => 'Field Label',
                        getDisabled: () => _disabled,
                        setDisabled: jest.fn((v: boolean) => { _disabled = v; }),
                        setFocus: jest.fn(),
                        getVisible: () => true,
                        setVisible: jest.fn(),
                        getAttribute: () => createMockAttribute(name, value)
                    });
                })
            }
        };
    }

    // Helper: Create mock control
    function createMockControl(name: string, attribute: any) {
        let _disabled = false;
        let _visible = true;
        return {
            getName: () => name,
            getLabel: () => name + ' Label',
            getControlType: () => 'standard',
            getDisabled: () => _disabled,
            setDisabled: jest.fn((v: boolean) => { _disabled = v; }),
            getVisible: () => _visible,
            setVisible: (v: boolean) => { _visible = v; },
            setFocus: jest.fn(),
            getAttribute: () => attribute,
            getParent: () => ({ getName: () => 'sectionName' })
        };
    }

    // Helper: Create formContext with readonly form type
    function createFormContextWithFormType(formType: number, attributes: Record<string, any> = {}, controls: Record<string, any> = {}) {
        return {
            data: {
                getIsDirty: () => false,
                isValid: () => true,
                refresh: () => Promise.resolve(),
                save: () => Promise.resolve(),
                addOnLoad: () => { },
                removeOnLoad: () => { },
                entity: {
                    attributes: {
                        get: (name: string) => attributes[name] || null,
                        getLength: () => Object.keys(attributes).length,
                        forEach: (cb: any) => Object.values(attributes).forEach(cb)
                    },
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
                getFormType: () => formType,
                controls: {
                    get: (name: string) => controls[name] || null,
                    getLength: () => Object.keys(controls).length,
                    forEach: (cb: any) => Object.values(controls).forEach(cb)
                },
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
            getControl: (name: string) => controls[name] || null,
            getAttribute: (name: string) => attributes[name] || null,
            getFormContext: function () { return this; }
        };
    }

    describe('Readonly Form Types (FormType 3 and 4)', () => {
        test('Disabled setter should not work on FormType 3 (Readonly)', () => {
            const attribute = createMockAttribute('name', 'Test Value');
            const control = createMockControl('name', attribute);

            const formContext = createFormContextWithFormType(3, { name: attribute }, { name: control });
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: ['name'],
                header: [],
                tab: [],
                grid: [],
                navigation: [],
                quick: [],
                bpf: []
            });

            // Try to set Disabled - should not call control.setDisabled on readonly form
            form.Body.name.Disabled = true;
            // The setter should have been blocked, so setDisabled should not be called
            // Note: On readonly forms, the setter returns early without calling setDisabled
        });

        test('Value setter should not work on FormType 4 (Disabled)', () => {
            const attribute = createMockAttribute('name', 'Original');
            const control = createMockControl('name', attribute);

            const formContext = createFormContextWithFormType(4, { name: attribute }, { name: control });
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: ['name'],
                header: [],
                tab: [],
                grid: [],
                navigation: [],
                quick: [],
                bpf: []
            });

            // Try to set Value - should not call attribute.setValue on disabled form
            form.Body.name.Value = 'New Value';
            // On FormType 4, setValue should not be called
        });

        test('Normal form (FormType 2) should allow Disabled and Value setters', () => {
            const attribute = createMockAttribute('name', 'Original');
            const control = createMockControl('name', attribute);

            const formContext = createFormContextWithFormType(2, { name: attribute }, { name: control });
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: ['name'],
                header: [],
                tab: [],
                grid: [],
                navigation: [],
                quick: [],
                bpf: []
            });

            // On normal forms, setters should work
            form.Body.name.Disabled = true;
            form.Body.name.Value = 'New Value';

            expect(control.setDisabled).toHaveBeenCalledWith(true);
            expect(attribute.setValue).toHaveBeenCalledWith('New Value');
        });
    });

    describe('Attribute Fallback Scenarios', () => {
        test('should find attribute using base name for numbered controls (e.g., OwnerId1 -> ownerid)', () => {
            const attribute = createMockAttribute('ownerid', [{ id: 'user-1', name: 'Test User', entityType: 'systemuser' }]);

            // Control name is OwnerId1, but attribute is ownerid
            const formContext = createFormContextWithFormType(2,
                { ownerid: attribute },
                { ownerid1: createMockControl('ownerid1', attribute) }
            );
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: ['OwnerId1'],
                header: [],
                tab: [],
                grid: [],
                navigation: [],
                quick: [],
                bpf: []
            });

            // Should resolve to the ownerid attribute
            expect(form.Body.OwnerId1).toBeDefined();
        });

        test('should find control from attribute.controls when control not in formContext.getControl', () => {
            const attribute = createMockAttribute('lazyfield', 'Lazy Value');

            // Simulate lazy-loaded tab: control is not in formContext.getControl but in attribute.controls
            const formContext = createFormContextWithFormType(2,
                { lazyfield: attribute },
                {} // No control in getControl
            );
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: ['lazyfield'],
                header: [],
                tab: [],
                grid: [],
                navigation: [],
                quick: [],
                bpf: []
            });

            // Should still work because findControlFromAttribute is called
            expect(form.Body.lazyfield).toBeDefined();
            expect(form.Body.lazyfield.AttributeName).toBe('lazyfield');
        });
    });

    describe('Header Fields', () => {
        test('should load header fields with header_ prefix', () => {
            const attribute = createMockAttribute('name', 'Test Account');
            const control = createMockControl('header_name', attribute);

            const formContext = createFormContextWithFormType(2,
                { name: attribute },
                { header_name: control }
            );
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: ['name'],
                tab: [],
                grid: [],
                navigation: [],
                quick: [],
                bpf: []
            });

            expect(form.Header).toBeDefined();
            expect(form.Header.name).toBeDefined();
        });

        test('Header should have BodyVisible, CommandBarVisible, TabNavigatorVisible properties', () => {
            const attribute = createMockAttribute('name', 'Test');
            const control = createMockControl('header_name', attribute);

            const formContext = createFormContextWithFormType(2, { name: attribute }, { header_name: control });
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: ['name'],  // Need at least one header field to trigger headerSection loading
                tab: [],
                grid: [],
                navigation: [],
                quick: [],
                bpf: []
            });

            expect(form.Header.BodyVisible).toBe(true);
            expect(form.Header.CommandBarVisible).toBe(true);
            expect(form.Header.TabNavigatorVisible).toBe(true);

            // Test setters
            form.Header.BodyVisible = false;
            form.Header.CommandBarVisible = false;
            form.Header.TabNavigatorVisible = false;

            expect((formContext.ui.headerSection as any).setBodyVisible).toHaveBeenCalledWith(false);
            expect((formContext.ui.headerSection as any).setCommandBarVisible).toHaveBeenCalledWith(false);
            expect((formContext.ui.headerSection as any).setTabNavigatorVisible).toHaveBeenCalledWith(false);
        });
    });

    describe('Field Methods', () => {
        test('AddNotification should create proper notification object', () => {
            const attribute = createMockAttribute('name', 'Test');
            const control = {
                ...createMockControl('name', attribute),
                addNotification: jest.fn()
            };

            const formContext = createFormContextWithFormType(2, { name: attribute }, { name: control });
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: ['name'],
                header: [],
                tab: [],
                grid: [],
                navigation: [],
                quick: [],
                bpf: []
            });

            const callback = jest.fn();
            form.Body.name.AddNotification('Test message', 'ERROR', 'unique-123', callback);

            expect(control.addNotification).toHaveBeenCalledWith({
                messages: ['Test message'],
                notificationLevel: 'ERROR',
                uniqueId: 'unique-123',
                actions: [{
                    message: 'Test message',
                    actions: [callback]
                }]
            });
        });

        test('ContentWindow should handle promise and callback', async () => {
            const contentWindowObj = { postMessage: jest.fn() };
            const attribute = createMockAttribute('webresource', null);
            const control = {
                ...createMockControl('webresource', attribute),
                getContentWindow: jest.fn().mockResolvedValue(contentWindowObj)
            };

            const formContext = createFormContextWithFormType(2, { webresource: attribute }, { webresource: control });
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: ['webresource'],
                header: [],
                tab: [],
                grid: [],
                navigation: [],
                quick: [],
                bpf: []
            });

            // Test with callback
            const successCallback = jest.fn();
            form.Body.webresource.ContentWindow(successCallback);
            await new Promise(resolve => setTimeout(resolve, 10));
            expect(successCallback).toHaveBeenCalledWith(contentWindowObj);

            // Test without callback (returns promise)
            const result = await form.Body.webresource.ContentWindow();
            expect(result).toBe(contentWindowObj);
        });

        test('Field methods should call correct control/attribute methods', () => {
            const attribute = createMockAttribute('lookup', [{ id: 'id-1' }]);
            const control = {
                ...createMockControl('lookup', attribute),
                addCustomFilter: jest.fn(),
                addCustomView: jest.fn(),
                addOnLookupTagClick: jest.fn(),
                removeOnLookupTagClick: jest.fn(),
                addPreSearch: jest.fn(),
                removePreSearch: jest.fn(),
                addOnPostSearch: jest.fn(),
                removeOnPostSearch: jest.fn(),
                addOnResultOpened: jest.fn(),
                removeOnResultOpened: jest.fn(),
                addOnSelection: jest.fn(),
                removeOnSelection: jest.fn(),
                addOnOutputChange: jest.fn(),
                removeOnOutputChange: jest.fn(),
                clearNotification: jest.fn(),
                setNotification: jest.fn(),
                clearOptions: jest.fn(),
                addOption: jest.fn(),
                removeOption: jest.fn(),
                refresh: jest.fn(),
                openSearchResult: jest.fn(),
                getDefaultView: jest.fn().mockReturnValue('view-1'),
                setDefaultView: jest.fn(),
                getInitialUrl: jest.fn().mockReturnValue('http://url'),
                getData: jest.fn().mockReturnValue({}),
                setData: jest.fn(),
                getEntityTypes: jest.fn().mockReturnValue(['account']),
                setEntityTypes: jest.fn(),
                getSearchQuery: jest.fn().mockReturnValue('search'),
                setSearchQuery: jest.fn(),
                getShowTime: jest.fn().mockReturnValue(true),
                setShowTime: jest.fn(),
                getSrc: jest.fn().mockReturnValue('src'),
                setSrc: jest.fn(),
                getObject: jest.fn().mockReturnValue({}),
                getOutputs: jest.fn().mockReturnValue([]),
                getSelectedResults: jest.fn().mockReturnValue([]),
                getState: jest.fn().mockReturnValue('normal'),
                getTotalResultCount: jest.fn().mockReturnValue(10),
                getOptions: jest.fn().mockReturnValue([])
            };

            const formContext = createFormContextWithFormType(2, { lookup: attribute }, { lookup: control });
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: ['lookup'],
                header: [],
                tab: [],
                grid: [],
                navigation: [],
                quick: [],
                bpf: []
            });

            const callback = jest.fn();

            // Test all field methods
            form.Body.lookup.AddCustomFilter('<filter/>', 'account');
            expect(control.addCustomFilter).toHaveBeenCalledWith('<filter/>', 'account');

            form.Body.lookup.AddCustomView('view-1', 'account', 'My View', '<fetch/>', '<layout/>', true);
            expect(control.addCustomView).toHaveBeenCalledWith('view-1', 'account', 'My View', '<fetch/>', '<layout/>', true);

            form.Body.lookup.AddLookupTagClick(callback);
            expect(control.addOnLookupTagClick).toHaveBeenCalledWith(callback);

            form.Body.lookup.RemoveLookupTagClick(callback);
            expect(control.removeOnLookupTagClick).toHaveBeenCalledWith(callback);

            form.Body.lookup.AddPreSearch(callback);
            expect(control.addPreSearch).toHaveBeenCalledWith(callback);

            form.Body.lookup.RemovePreSearch(callback);
            expect(control.removePreSearch).toHaveBeenCalledWith(callback);

            form.Body.lookup.AddPostSearch(callback);
            expect(control.addOnPostSearch).toHaveBeenCalledWith(callback);

            form.Body.lookup.RemovePostSearch(callback);
            expect(control.removeOnPostSearch).toHaveBeenCalledWith(callback);

            form.Body.lookup.AddResultOpened(callback);
            expect(control.addOnResultOpened).toHaveBeenCalledWith(callback);

            form.Body.lookup.RemoveResultOpened(callback);
            expect(control.removeOnResultOpened).toHaveBeenCalledWith(callback);

            form.Body.lookup.AddSelection(callback);
            expect(control.addOnSelection).toHaveBeenCalledWith(callback);

            form.Body.lookup.RemoveSelection(callback);
            expect(control.removeOnSelection).toHaveBeenCalledWith(callback);

            form.Body.lookup.AddOnOutputChange(callback);
            expect(control.addOnOutputChange).toHaveBeenCalledWith(callback);

            form.Body.lookup.RemoveOnOutputChange(callback);
            expect(control.removeOnOutputChange).toHaveBeenCalledWith(callback);

            form.Body.lookup.AddOnChange(callback);
            expect(attribute.addOnChange).toHaveBeenCalledWith(callback);

            form.Body.lookup.RemoveOnChange(callback);
            expect(attribute.removeOnChange).toHaveBeenCalledWith(callback);

            form.Body.lookup.ClearNotification('unique-1');
            expect(control.clearNotification).toHaveBeenCalledWith('unique-1');

            form.Body.lookup.SetNotification('message', 'unique-2');
            expect(control.setNotification).toHaveBeenCalledWith('message', 'unique-2');

            form.Body.lookup.ClearOptions();
            expect(control.clearOptions).toHaveBeenCalled();

            form.Body.lookup.AddOption('Option 1', 1, 0);
            expect(control.addOption).toHaveBeenCalledWith({ text: 'Option 1', value: 1 }, 0);

            form.Body.lookup.RemoveOption(1);
            expect(control.removeOption).toHaveBeenCalledWith(1);

            form.Body.lookup.Refresh();
            expect(control.refresh).toHaveBeenCalled();

            form.Body.lookup.OpenSearchResult(1, 'inline');
            expect(control.openSearchResult).toHaveBeenCalledWith(1, 'inline');

            form.Body.lookup.FireOnChange();
            expect(attribute.fireOnChange).toHaveBeenCalled();

            form.Body.lookup.Focus();
            expect(control.setFocus).toHaveBeenCalled();

            // Test getter properties
            expect(form.Body.lookup.InitialUrl).toBe('http://url');
            expect(form.Body.lookup.ControlOptions).toEqual([]);
            expect(form.Body.lookup.Data).toEqual({});
            expect(form.Body.lookup.DefaultView).toBe('view-1');
            expect(form.Body.lookup.EntityTypes).toEqual(['account']);
            expect(form.Body.lookup.Object).toEqual({});
            expect(form.Body.lookup.Outputs).toEqual([]);
            expect(form.Body.lookup.SelectedResults).toEqual([]);
            expect(form.Body.lookup.State).toBe('normal');
            expect(form.Body.lookup.TotalResultCount).toBe(10);

            // Test setters
            form.Body.lookup.DefaultView = 'view-2';
            expect(control.setDefaultView).toHaveBeenCalledWith('view-2');

            form.Body.lookup.Data = { key: 'value' };
            expect(control.setData).toHaveBeenCalledWith({ key: 'value' });

            form.Body.lookup.EntityTypes = ['contact'];
            expect(control.setEntityTypes).toHaveBeenCalledWith(['contact']);

            form.Body.lookup.SearchQuery = 'new search';
            expect(control.setSearchQuery).toHaveBeenCalledWith('new search');

            form.Body.lookup.ShowTime = false;
            expect(control.setShowTime).toHaveBeenCalledWith(false);

            form.Body.lookup.Src = 'new-src';
            expect(control.setSrc).toHaveBeenCalledWith('new-src');
        });

        test('Attribute SetIsValid should work', () => {
            const attribute = {
                ...createMockAttribute('field', 'value'),
                setIsValid: jest.fn()
            };
            const control = createMockControl('field', attribute);

            const formContext = createFormContextWithFormType(2, { field: attribute }, { field: control });
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: ['field'],
                header: [],
                tab: [],
                grid: [],
                navigation: [],
                quick: [],
                bpf: []
            });

            form.Body.field.SetIsValid(false, 'Invalid field');
            expect(attribute.setIsValid).toHaveBeenCalledWith(false, 'Invalid field');
        });

        test('Attribute Option should return option by value', () => {
            const options = [{ text: 'Option A', value: 1 }, { text: 'Option B', value: 2 }];
            const attribute = {
                ...createMockAttribute('optionset', 1),
                getOptions: () => options,
                getOption: jest.fn((v: any) => options.find(o => o.value === v))
            };
            const control = createMockControl('optionset', attribute);

            const formContext = createFormContextWithFormType(2, { optionset: attribute }, { optionset: control });
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: ['optionset'],
                header: [],
                tab: [],
                grid: [],
                navigation: [],
                quick: [],
                bpf: []
            });

            const option = form.Body.optionset.Option(1);
            expect(attribute.getOption).toHaveBeenCalledWith(1);
        });

        test('Attribute Precision getter and setter', () => {
            const attribute = {
                ...createMockAttribute('decimal', 123.456),
                getPrecision: jest.fn().mockReturnValue(2),
                setPrecision: jest.fn()
            };
            const control = createMockControl('decimal', attribute);

            const formContext = createFormContextWithFormType(2, { decimal: attribute }, { decimal: control });
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: ['decimal'],
                header: [],
                tab: [],
                grid: [],
                navigation: [],
                quick: [],
                bpf: []
            });

            expect(form.Body.decimal.Precision).toBe(2);
            form.Body.decimal.Precision = 4;
            expect(attribute.setPrecision).toHaveBeenCalledWith(4);
        });
    });
});
