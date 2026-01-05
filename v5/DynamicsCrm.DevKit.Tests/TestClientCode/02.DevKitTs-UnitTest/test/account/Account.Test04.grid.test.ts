/**
 * Unit Tests for devkit.ts - Grid Loading
 * Test file: Account.Test04.grid.test.ts
 *
 * Coverage targets:
 * - loadGrids() function
 * - loadGridColumn(), loadGridRow() inner functions
 * - Grid properties like Rows, SelectedRows, Columns, ViewSelector
 */
import { XrmMockGenerator } from 'xrm-mock';
import { FormBase } from '../../lib/devkit';

// Global setup
let mockGlobalContext: any;

describe('devkit.ts - Grid Loading', () => {
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

    // Helper: Create mock grid column
    function createMockGridColumn(name: string, value: any, label: string = 'Column Label') {
        let _value = value;
        let _disabled = false;
        let _requiredLevel = 'none';
        // Store control object to ensure jest.fn() is captured correctly
        const controlMock = {
            getLabel: () => label,
            getDisabled: () => _disabled,
            setDisabled: (v: boolean) => { _disabled = v; },
            clearNotification: jest.fn(),
            setNotification: jest.fn()
        };
        return {
            getName: () => name,
            getValue: () => _value,
            setValue: (v: any) => { _value = v; },
            getRequiredLevel: () => _requiredLevel,
            setRequiredLevel: (v: any) => { _requiredLevel = v; },
            controls: {
                get: (index: number) => controlMock
            }
        };
    }

    // Helper: Create mock grid row
    function createMockGridRow(entityId: string, entityName: string, columns: any[]) {
        return {
            data: {
                entity: {
                    getId: () => entityId,
                    getEntityName: () => entityName,
                    getEntityReference: () => ({ id: entityId, entityType: entityName }),
                    getPrimaryAttributeValue: () => 'Primary Value',
                    attributes: {
                        getLength: () => columns.length,
                        get: (index: number) => columns[index]
                    }
                }
            },
            getData: function () { return this; }
        };
    }

    // Helper: Create mock grid control
    function createMockGridControl(name: string, rows: any[], selectedRows: any[] = []) {
        let _visible = true;
        return {
            getName: () => name,
            getEntityName: () => 'contact',
            getFetchXml: () => '<fetch><entity name="contact"/></fetch>',
            getGridType: () => 1,
            getRelationship: () => ({ name: 'contact_account', navigationPropertyName: 'contacts' }),
            getVisible: () => _visible,
            setVisible: (v: boolean) => { _visible = v; },
            addOnLoad: jest.fn(),
            removeOnLoad: jest.fn(),
            openRelatedGrid: jest.fn(),
            refresh: jest.fn(),
            refreshRibbon: jest.fn(),
            getUrl: (client: number) => 'http://url?client=' + client,
            getGrid: () => ({
                getRows: () => ({
                    getLength: () => rows.length,
                    get: (index: number) => rows[index]
                }),
                getSelectedRows: () => ({
                    getLength: () => selectedRows.length,
                    get: (index: number) => selectedRows[index]
                }),
                getTotalRecordCount: () => rows.length
            }),
            getViewSelector: () => ({
                isVisible: () => true,
                getCurrentView: () => ({ id: 'view-1', name: 'Active Contacts' }),
                setCurrentView: jest.fn()
            })
        };
    }

    // Helper: Create formContext with grid controls
    function createFormContextWithGrids(gridControls: Record<string, any>) {
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
            getControl: (name: string) => gridControls[name] || null,
            getAttribute: () => null,
            getFormContext: function () { return this; }
        };
    }

    describe('loadGrids', () => {
        test('should load grid controls and expose properties', () => {
            const columns = [createMockGridColumn('fullname', 'John Doe')];
            const rows = [createMockGridRow('contact-1', 'contact', columns)];
            const gridControl = createMockGridControl('Contacts', rows);

            const formContext = createFormContextWithGrids({ Contacts: gridControl });
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: [],
                grid: ['Contacts'],
                navigation: [],
                quick: [],
                bpf: []
            });

            expect(form.Grid).toBeDefined();
            expect(form.Grid.Contacts).toBeDefined();
        });

        test('should return EntityName property', () => {
            const gridControl = createMockGridControl('Contacts', []);
            const formContext = createFormContextWithGrids({ Contacts: gridControl });
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: [],
                grid: ['Contacts'],
                navigation: [],
                quick: [],
                bpf: []
            });

            expect(form.Grid.Contacts.EntityName).toBe('contact');
        });

        test('should return FetchXml property', () => {
            const gridControl = createMockGridControl('Contacts', []);
            const formContext = createFormContextWithGrids({ Contacts: gridControl });
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: [],
                grid: ['Contacts'],
                navigation: [],
                quick: [],
                bpf: []
            });

            expect(form.Grid.Contacts.FetchXml).toBe('<fetch><entity name="contact"/></fetch>');
        });

        test('should return GridType and Relationship properties', () => {
            const gridControl = createMockGridControl('Contacts', []);
            const formContext = createFormContextWithGrids({ Contacts: gridControl });
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: [],
                grid: ['Contacts'],
                navigation: [],
                quick: [],
                bpf: []
            });

            expect(form.Grid.Contacts.GridType).toBe(1);
            expect(form.Grid.Contacts.Relationship).toEqual({ name: 'contact_account', navigationPropertyName: 'contacts' });
        });

        test('should handle Visible getter and setter', () => {
            const gridControl = createMockGridControl('Contacts', []);
            const formContext = createFormContextWithGrids({ Contacts: gridControl });
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: [],
                grid: ['Contacts'],
                navigation: [],
                quick: [],
                bpf: []
            });

            expect(form.Grid.Contacts.Visible).toBe(true);
            form.Grid.Contacts.Visible = false;
            expect(form.Grid.Contacts.Visible).toBe(false);
        });

        test('should return Rows with getLength, get, forEach', () => {
            const columns = [createMockGridColumn('fullname', 'John Doe')];
            const rows = [
                createMockGridRow('contact-1', 'contact', columns),
                createMockGridRow('contact-2', 'contact', columns)
            ];
            const gridControl = createMockGridControl('Contacts', rows);
            const formContext = createFormContextWithGrids({ Contacts: gridControl });
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: [],
                grid: ['Contacts'],
                navigation: [],
                quick: [],
                bpf: []
            });

            const gridRows = form.Grid.Contacts.Rows;
            expect(gridRows.getLength()).toBe(2);

            const firstRow = gridRows.get(0);
            expect(firstRow.EntityId).toBe('contact-1');
            expect(firstRow.EntityName).toBe('contact');
            expect(firstRow.PrimaryAttributeValue).toBe('Primary Value');
        });

        test('should return Rows.forEach correctly', () => {
            const columns = [createMockGridColumn('fullname', 'John Doe')];
            const rows = [
                createMockGridRow('contact-1', 'contact', columns),
                createMockGridRow('contact-2', 'contact', columns)
            ];
            const gridControl = createMockGridControl('Contacts', rows);
            const formContext = createFormContextWithGrids({ Contacts: gridControl });
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: [],
                grid: ['Contacts'],
                navigation: [],
                quick: [],
                bpf: []
            });

            const collected: any[] = [];
            form.Grid.Contacts.Rows.forEach((row: any, index: number) => {
                collected.push({ entityId: row.EntityId, index });
            });

            expect(collected).toHaveLength(2);
            expect(collected[0]).toEqual({ entityId: 'contact-1', index: 0 });
            expect(collected[1]).toEqual({ entityId: 'contact-2', index: 1 });
        });

        test('should return SelectedRows', () => {
            const columns = [createMockGridColumn('fullname', 'John Doe')];
            const row1 = createMockGridRow('contact-1', 'contact', columns);
            const selectedRows = [row1];
            const gridControl = createMockGridControl('Contacts', [row1], selectedRows);
            const formContext = createFormContextWithGrids({ Contacts: gridControl });
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: [],
                grid: ['Contacts'],
                navigation: [],
                quick: [],
                bpf: []
            });

            const selected = form.Grid.Contacts.SelectedRows;
            expect(selected.getLength()).toBe(1);
        });

        test('should return TotalRecordCount', () => {
            const columns = [createMockGridColumn('fullname', 'John Doe')];
            const rows = [createMockGridRow('contact-1', 'contact', columns)];
            const gridControl = createMockGridControl('Contacts', rows);
            const formContext = createFormContextWithGrids({ Contacts: gridControl });
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: [],
                grid: ['Contacts'],
                navigation: [],
                quick: [],
                bpf: []
            });

            expect(form.Grid.Contacts.TotalRecordCount).toBe(1);
        });

        test('should return ViewSelector with Visible and CurrentView', () => {
            const gridControl = createMockGridControl('Contacts', []);
            const formContext = createFormContextWithGrids({ Contacts: gridControl });
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: [],
                grid: ['Contacts'],
                navigation: [],
                quick: [],
                bpf: []
            });

            const viewSelector = form.Grid.Contacts.ViewSelector;
            expect(viewSelector.Visible).toBe(true);
            expect(viewSelector.CurrentView).toEqual({ id: 'view-1', name: 'Active Contacts' });
        });

        test('should call grid methods: AddOnLoad, RemoveOnLoad, Refresh', () => {
            const gridControl = createMockGridControl('Contacts', []);
            const formContext = createFormContextWithGrids({ Contacts: gridControl });
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: [],
                grid: ['Contacts'],
                navigation: [],
                quick: [],
                bpf: []
            });

            const callback = jest.fn();
            form.Grid.Contacts.AddOnLoad(callback);
            form.Grid.Contacts.RemoveOnLoad(callback);
            form.Grid.Contacts.Refresh();
            form.Grid.Contacts.RefreshRibbon();
            form.Grid.Contacts.OpenRelatedGrid();

            expect(gridControl.addOnLoad).toHaveBeenCalledWith(callback);
            expect(gridControl.removeOnLoad).toHaveBeenCalledWith(callback);
            expect(gridControl.refresh).toHaveBeenCalled();
            expect(gridControl.refreshRibbon).toHaveBeenCalled();
            expect(gridControl.openRelatedGrid).toHaveBeenCalled();
        });

        test('should return Url with client parameter', () => {
            const gridControl = createMockGridControl('Contacts', []);
            const formContext = createFormContextWithGrids({ Contacts: gridControl });
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: [],
                grid: ['Contacts'],
                navigation: [],
                quick: [],
                bpf: []
            });

            expect(form.Grid.Contacts.Url(1)).toBe('http://url?client=1');
        });

        test('should handle grid column properties', () => {
            const column = createMockGridColumn('fullname', 'John Doe', 'Full Name');
            const row = createMockGridRow('contact-1', 'contact', [column]);
            const gridControl = createMockGridControl('Contacts', [row]);
            const formContext = createFormContextWithGrids({ Contacts: gridControl });
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: [],
                grid: ['Contacts'],
                navigation: [],
                quick: [],
                bpf: []
            });

            const rowObj = form.Grid.Contacts.Rows.get(0);
            const columns = rowObj.Columns;
            expect(columns.getLength()).toBe(1);

            const col = columns.get(0);
            expect(col.Name).toBe('fullname');
            expect(col.Value).toBe('John Doe');
            expect(col.Label).toBe('Full Name');
        });

        test('should iterate columns with forEach', () => {
            const columns = [
                createMockGridColumn('fullname', 'John Doe'),
                createMockGridColumn('emailaddress1', 'john@test.com')
            ];
            const row = createMockGridRow('contact-1', 'contact', columns);
            const gridControl = createMockGridControl('Contacts', [row]);
            const formContext = createFormContextWithGrids({ Contacts: gridControl });
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: [],
                grid: ['Contacts'],
                navigation: [],
                quick: [],
                bpf: []
            });

            const rowObj = form.Grid.Contacts.Rows.get(0);
            const collected: any[] = [];
            rowObj.Columns.forEach((col: any, index: number) => {
                collected.push({ name: col.Name, value: col.Value, index });
            });

            expect(collected).toHaveLength(2);
            expect(collected[0]).toEqual({ name: 'fullname', value: 'John Doe', index: 0 });
            expect(collected[1]).toEqual({ name: 'emailaddress1', value: 'john@test.com', index: 1 });
        });

        test('should handle column setter methods', () => {
            const column = createMockGridColumn('fullname', 'John Doe');
            const row = createMockGridRow('contact-1', 'contact', [column]);
            const gridControl = createMockGridControl('Contacts', [row]);
            const formContext = createFormContextWithGrids({ Contacts: gridControl });
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: [],
                grid: ['Contacts'],
                navigation: [],
                quick: [],
                bpf: []
            });

            const rowObj = form.Grid.Contacts.Rows.get(0);
            const col = rowObj.Columns.get(0);

            // Test Value setter
            col.Value = 'Jane Doe';
            expect(col.Value).toBe('Jane Doe');

            // Test RequiredLevel setter
            col.RequiredLevel = 'required';
            expect(col.RequiredLevel).toBe('required');

            // Test Disabled setter
            col.Disabled = true;
            expect(col.Disabled).toBe(true);
        });

        test('should call column notification methods', () => {
            const column = createMockGridColumn('fullname', 'John Doe');
            const row = createMockGridRow('contact-1', 'contact', [column]);
            const gridControl = createMockGridControl('Contacts', [row]);
            const formContext = createFormContextWithGrids({ Contacts: gridControl });
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: [],
                grid: ['Contacts'],
                navigation: [],
                quick: [],
                bpf: []
            });

            const rowObj = form.Grid.Contacts.Rows.get(0);
            const col = rowObj.Columns.get(0);

            col.SetNotification('Error message', 'error-1');
            col.ClearNotification('error-1');

            expect(column.controls.get(0).setNotification).toHaveBeenCalledWith('Error message', 'error-1');
            expect(column.controls.get(0).clearNotification).toHaveBeenCalledWith('error-1');
        });
    });
});
