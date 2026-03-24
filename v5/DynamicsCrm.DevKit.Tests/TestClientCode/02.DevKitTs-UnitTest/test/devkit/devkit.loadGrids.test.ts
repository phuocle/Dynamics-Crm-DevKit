/**
 * Unit Tests for devkit.ts - loadGrids function
 * Using xrm-mock framework for Dynamics 365/Xrm API simulation
 *
 * This test file covers Grid functionality including:
 * - Grid parsing from config (Contacts from Account.form.ts)
 * - Grid getters: EntityName, FetchXml, GridType, Relationship, TotalRecordCount
 * - Rows and SelectedRows with forEach, get, getLength
 * - Row properties: Columns, EntityId, EntityName, EntityReference, PrimaryAttributeValue
 * - Column properties: Label, Name, Disabled, RequiredLevel, Value, ClearNotification, SetNotification
 * - ViewSelector: Visible, CurrentView
 * - Visible property (getter/setter)
 * - Methods: AddOnLoad, OpenRelatedGrid, Refresh, RefreshRibbon, RemoveOnLoad, Url
 * - Edge cases
 *
 * Reference: Account.form.ts grid = ['Contacts']
 */
import { XrmMockGenerator } from 'xrm-mock';
import { FormBase } from '../../lib/devkit';

describe('loadGrids Tests', () => {
    beforeEach(() => {
        // Setup global window object for Node.js environment
        (global as any).window = (global as any).window || {};
        XrmMockGenerator.initialise();
        (global as any).window.Xrm = (global as any).Xrm;
    });

    // ========================================================================
    // HELPER FUNCTION: Create Grid FormBase with Manual Mock
    // ========================================================================

    function getGridForm(gridConfig: string[] = ['Contacts']): any {
        let gridVisible = true;
        let gridDisabled = false;
        let gridLabel = 'Contacts Grid';
        let currentView = { id: 'view-1', name: 'Active Contacts' };
        const onLoadCallbacks: any[] = [];

        // Column mock
        const createColumnMock = (name: string, value: any) => ({
            getName: () => name,
            getValue: () => value,
            setValue: (v: any) => { },
            getRequiredLevel: () => 'none',
            setRequiredLevel: (level: string) => { },
            controls: {
                get: (index: number) => ({
                    getLabel: () => `${name} Label`,
                    getDisabled: () => false,
                    setDisabled: (v: boolean) => { },
                    clearNotification: (uniqueId: string) => true,
                    setNotification: (message: string, uniqueId: string) => true
                })
            }
        });

        // Row mock
        const createRowMock = (id: string, name: string) => ({
            data: {
                entity: {
                    getId: () => id,
                    getEntityName: () => 'contact',
                    getEntityReference: () => ({ id, entityType: 'contact', name }),
                    getPrimaryAttributeValue: () => name,
                    attributes: {
                        getLength: () => 2,
                        get: (index: number) => index === 0
                            ? createColumnMock('fullname', name)
                            : createColumnMock('emailaddress1', `${name}@example.com`)
                    }
                }
            },
            getData: function () { return this; }
        });

        const rows = [
            createRowMock('contact-1', 'John Doe'),
            createRowMock('contact-2', 'Jane Smith')
        ];

        const selectedRows = [rows[0]];

        // Grid instance mock
        const gridInstance = {
            getRows: () => ({
                getLength: () => rows.length,
                get: (index: number) => rows[index]
            }),
            getSelectedRows: () => ({
                getLength: () => selectedRows.length,
                get: (index: number) => selectedRows[index]
            }),
            getTotalRecordCount: () => rows.length
        };

        // Grid control mock with subgrid properties
        const gridControl = {
            getEntityName: () => 'contact',
            getFetchXml: () => '<fetch><entity name="contact"/></fetch>',
            getGridType: () => 1, // 1 = Subgrid
            getRelationship: () => ({ name: 'contact_customer_accounts', attributeName: 'parentcustomerid' }),
            getGrid: () => gridInstance,
            getVisible: () => gridVisible,
            setVisible: (value: boolean) => { gridVisible = value; },
            getViewSelector: () => ({
                isVisible: () => true,
                getCurrentView: () => currentView,
                setCurrentView: (view: any) => { currentView = view; }
            }),
            addOnLoad: (callback: any) => { onLoadCallbacks.push(callback); },
            removeOnLoad: (callback: any) => { const idx = onLoadCallbacks.indexOf(callback); if (idx > -1) onLoadCallbacks.splice(idx, 1); },
            openRelatedGrid: () => { },
            refresh: () => { },
            refreshRibbon: () => { },
            getUrl: (client: number) => `https://crm.dynamics.com/contacts?client=${client}`,
            // Subgrid control properties
            getControlType: () => 'subgrid',
            getName: () => 'Contacts',
            getParent: () => ({ getName: () => 'SUMMARY_TAB' }),
            getDisabled: () => gridDisabled,
            setDisabled: (value: boolean) => { gridDisabled = value; },
            getLabel: () => gridLabel,
            setLabel: (value: string) => { gridLabel = value; },
            setFocus: () => { }
        };

        // Create formContext mock
        const formContext = {
            data: {
                getIsDirty: () => false, isValid: () => true, refresh: () => Promise.resolve(), save: () => Promise.resolve(),
                addOnLoad: () => { }, removeOnLoad: () => { },
                entity: {
                    attributes: { get: () => null }, getId: () => 'id', getEntityName: () => 'account',
                    getIsDirty: () => false, isValid: () => true, getDataXml: () => '', getEntityReference: () => ({}),
                    getPrimaryAttributeValue: () => '', addOnSave: () => { }, removeOnSave: () => { }, addOnPostSave: () => { }, removeOnPostSave: () => { }
                }
            },
            ui: {
                getFormType: () => 2, controls: { get: () => null }, tabs: { get: () => null },
                formSelector: { getCurrentItem: () => ({ getId: () => 'f', getLabel: () => 'l' }), items: { getLength: () => 0, get: () => null } },
                getViewPortHeight: () => 800, getViewPortWidth: () => 1200,
                clearFormNotification: () => true, setFormNotification: () => true, close: () => { }, refreshRibbon: () => { },
                addLoaded: () => { }, removeLoaded: () => { }, addOnLoad: () => { }, removeOnLoad: () => { }, setFormEntityName: () => { }
            },
            getControl: (name: string) => name === 'Contacts' ? gridControl : null,
            getAttribute: () => null,
            getFormContext: function () { return this; }
        };

        return new FormBase({ getFormContext: () => formContext }, 'test', {
            body: [], header: [], tab: [], navigation: [], quick: [], bpf: [],
            grid: gridConfig
        });
    }

    // ========================================================================
    // TEST: Grid Parsing (Account.form.ts: grid = ['Contacts'])
    // ========================================================================

    describe('Grid Parsing', () => {
        test('should parse grid config correctly for Contacts', () => {
            const form = getGridForm(['Contacts']);
            expect(form.Grid).toBeDefined();
            expect(form.Grid.Contacts).toBeDefined();
        });

        test('should handle multiple grids', () => {
            const form = getGridForm(['Contacts', 'Opportunities']);
            expect(form.Grid.Contacts).toBeDefined();
            expect(form.Grid.Opportunities).toBeDefined();
        });
    });

    // ========================================================================
    // TEST: Grid Properties
    // ========================================================================

    describe('Grid Properties', () => {
        test('EntityName should return entity name', () => {
            const form = getGridForm();
            expect(form.Grid.Contacts.EntityName).toBe('contact');
        });

        test('FetchXml should return fetch xml', () => {
            const form = getGridForm();
            expect(form.Grid.Contacts.FetchXml).toContain('<fetch>');
        });

        test('GridType should return grid type', () => {
            const form = getGridForm();
            expect(form.Grid.Contacts.GridType).toBe(1);
        });

        test('Relationship should return relationship info', () => {
            const form = getGridForm();
            const rel = form.Grid.Contacts.Relationship;
            expect(rel).toBeDefined();
            expect(rel.name).toBe('contact_customer_accounts');
        });

        test('TotalRecordCount should return total count', () => {
            const form = getGridForm();
            expect(form.Grid.Contacts.TotalRecordCount).toBe(2);
        });
    });

    // ========================================================================
    // TEST: ViewSelector
    // ========================================================================

    describe('ViewSelector', () => {
        test('ViewSelector.Visible should return true', () => {
            const form = getGridForm();
            expect(form.Grid.Contacts.ViewSelector.Visible).toBe(true);
        });

        test('ViewSelector.CurrentView getter should return current view', () => {
            const form = getGridForm();
            const view = form.Grid.Contacts.ViewSelector.CurrentView;
            expect(view).toBeDefined();
            expect(view.name).toBe('Active Contacts');
        });

        test('ViewSelector.CurrentView setter should change view', () => {
            const form = getGridForm();
            form.Grid.Contacts.ViewSelector.CurrentView = { id: 'view-2', name: 'All Contacts' };
            expect(form.Grid.Contacts.ViewSelector.CurrentView.name).toBe('All Contacts');
        });
    });

    // ========================================================================
    // TEST: Visible Property
    // ========================================================================

    describe('Visible Property', () => {
        test('Visible getter should return true by default', () => {
            const form = getGridForm();
            expect(form.Grid.Contacts.Visible).toBe(true);
        });

        test('Visible setter should change visibility', () => {
            const form = getGridForm();
            form.Grid.Contacts.Visible = false;
            expect(form.Grid.Contacts.Visible).toBe(false);
        });
    });

    // ========================================================================
    // TEST: Rows
    // ========================================================================

    describe('Rows', () => {
        test('Rows.getLength should return row count', () => {
            const form = getGridForm();
            expect(form.Grid.Contacts.Rows.getLength()).toBe(2);
        });

        test('Rows.get should return row at index', () => {
            const form = getGridForm();
            const row = form.Grid.Contacts.Rows.get(0);
            expect(row).toBeDefined();
            expect(row.EntityName).toBe('contact');
        });

        test('Rows.forEach should iterate all rows', () => {
            const form = getGridForm();
            const rowNames: string[] = [];
            form.Grid.Contacts.Rows.forEach((row: any, index: number) => {
                rowNames.push(row.PrimaryAttributeValue);
            });
            expect(rowNames).toContain('John Doe');
            expect(rowNames).toContain('Jane Smith');
        });
    });

    // ========================================================================
    // TEST: Row Properties
    // ========================================================================

    describe('Row Properties', () => {
        test('Row.EntityId should return entity id', () => {
            const form = getGridForm();
            const row = form.Grid.Contacts.Rows.get(0);
            expect(row.EntityId).toBe('contact-1');
        });

        test('Row.EntityName should return entity name', () => {
            const form = getGridForm();
            const row = form.Grid.Contacts.Rows.get(0);
            expect(row.EntityName).toBe('contact');
        });

        test('Row.EntityReference should return entity reference', () => {
            const form = getGridForm();
            const row = form.Grid.Contacts.Rows.get(0);
            const ref = row.EntityReference;
            expect(ref).toBeDefined();
            expect(ref.entityType).toBe('contact');
        });

        test('Row.PrimaryAttributeValue should return primary attribute value', () => {
            const form = getGridForm();
            const row = form.Grid.Contacts.Rows.get(0);
            expect(row.PrimaryAttributeValue).toBe('John Doe');
        });
    });

    // ========================================================================
    // TEST: Columns
    // ========================================================================

    describe('Columns', () => {
        test('Row.Columns.getLength should return column count', () => {
            const form = getGridForm();
            const row = form.Grid.Contacts.Rows.get(0);
            expect(row.Columns.getLength()).toBe(2);
        });

        test('Row.Columns.get should return column at index', () => {
            const form = getGridForm();
            const row = form.Grid.Contacts.Rows.get(0);
            const col = row.Columns.get(0);
            expect(col).toBeDefined();
            expect(col.Name).toBe('fullname');
        });

        test('Row.Columns.forEach should iterate all columns', () => {
            const form = getGridForm();
            const row = form.Grid.Contacts.Rows.get(0);
            const colNames: string[] = [];
            row.Columns.forEach((col: any, index: number) => {
                colNames.push(col.Name);
            });
            expect(colNames).toContain('fullname');
            expect(colNames).toContain('emailaddress1');
        });
    });

    // ========================================================================
    // TEST: Column Properties
    // ========================================================================

    describe('Column Properties', () => {
        test('Column.Label should return label', () => {
            const form = getGridForm();
            const col = form.Grid.Contacts.Rows.get(0).Columns.get(0);
            expect(col.Label).toBe('fullname Label');
        });

        test('Column.Name should return name', () => {
            const form = getGridForm();
            const col = form.Grid.Contacts.Rows.get(0).Columns.get(0);
            expect(col.Name).toBe('fullname');
        });

        test('Column.Value getter should return value', () => {
            const form = getGridForm();
            const col = form.Grid.Contacts.Rows.get(0).Columns.get(0);
            expect(col.Value).toBe('John Doe');
        });

        test('Column.Value setter should not throw', () => {
            const form = getGridForm();
            const col = form.Grid.Contacts.Rows.get(0).Columns.get(0);
            expect(() => { col.Value = 'New Name'; }).not.toThrow();
        });

        test('Column.Disabled getter should return disabled state', () => {
            const form = getGridForm();
            const col = form.Grid.Contacts.Rows.get(0).Columns.get(0);
            expect(col.Disabled).toBe(false);
        });

        test('Column.Disabled setter should not throw', () => {
            const form = getGridForm();
            const col = form.Grid.Contacts.Rows.get(0).Columns.get(0);
            expect(() => { col.Disabled = true; }).not.toThrow();
        });

        test('Column.RequiredLevel getter should return required level', () => {
            const form = getGridForm();
            const col = form.Grid.Contacts.Rows.get(0).Columns.get(0);
            expect(col.RequiredLevel).toBe('none');
        });

        test('Column.RequiredLevel setter should not throw', () => {
            const form = getGridForm();
            const col = form.Grid.Contacts.Rows.get(0).Columns.get(0);
            expect(() => { col.RequiredLevel = 'required'; }).not.toThrow();
        });

        test('Column.ClearNotification should return true', () => {
            const form = getGridForm();
            const col = form.Grid.Contacts.Rows.get(0).Columns.get(0);
            expect(col.ClearNotification('uniqueId')).toBe(true);
        });

        test('Column.SetNotification should return true', () => {
            const form = getGridForm();
            const col = form.Grid.Contacts.Rows.get(0).Columns.get(0);
            expect(col.SetNotification('message', 'uniqueId')).toBe(true);
        });
    });

    // ========================================================================
    // TEST: SelectedRows
    // ========================================================================

    describe('SelectedRows', () => {
        test('SelectedRows.getLength should return selected count', () => {
            const form = getGridForm();
            expect(form.Grid.Contacts.SelectedRows.getLength()).toBe(1);
        });

        test('SelectedRows.get should return selected row', () => {
            const form = getGridForm();
            const row = form.Grid.Contacts.SelectedRows.get(0);
            expect(row).toBeDefined();
        });

        test('SelectedRows.forEach should iterate selected rows', () => {
            const form = getGridForm();
            let count = 0;
            form.Grid.Contacts.SelectedRows.forEach((row: any, index: number) => {
                count++;
            });
            expect(count).toBe(1);
        });
    });

    // ========================================================================
    // TEST: Methods
    // ========================================================================

    describe('Methods', () => {
        test('AddOnLoad should not throw', () => {
            const form = getGridForm();
            const callback = () => { };
            expect(() => form.Grid.Contacts.AddOnLoad(callback)).not.toThrow();
        });

        test('RemoveOnLoad should not throw', () => {
            const form = getGridForm();
            const callback = () => { };
            form.Grid.Contacts.AddOnLoad(callback);
            expect(() => form.Grid.Contacts.RemoveOnLoad(callback)).not.toThrow();
        });

        test('OpenRelatedGrid should not throw', () => {
            const form = getGridForm();
            expect(() => form.Grid.Contacts.OpenRelatedGrid()).not.toThrow();
        });

        test('Refresh should not throw', () => {
            const form = getGridForm();
            expect(() => form.Grid.Contacts.Refresh()).not.toThrow();
        });

        test('RefreshRibbon should not throw', () => {
            const form = getGridForm();
            expect(() => form.Grid.Contacts.RefreshRibbon()).not.toThrow();
        });

        test('Url should return grid url', () => {
            const form = getGridForm();
            const url = form.Grid.Contacts.Url(1);
            expect(url).toContain('https://');
        });
    });

    // ========================================================================
    // TEST: Subgrid Control Properties
    // ========================================================================

    describe('Subgrid Control Properties', () => {
        test('ControlType should return subgrid', () => {
            const form = getGridForm();
            expect(form.Grid.Contacts.ControlType).toBe('subgrid');
        });

        test('ControlName should return grid name', () => {
            const form = getGridForm();
            expect(form.Grid.Contacts.ControlName).toBe('Contacts');
        });

        test('ControlParent should return parent tab', () => {
            const form = getGridForm();
            const parent = form.Grid.Contacts.ControlParent;
            expect(parent).toBeDefined();
            expect(parent.getName()).toBe('SUMMARY_TAB');
        });

        test('Disabled getter should return false by default', () => {
            const form = getGridForm();
            expect(form.Grid.Contacts.Disabled).toBe(false);
        });

        test('Disabled setter should change disabled state', () => {
            const form = getGridForm();
            form.Grid.Contacts.Disabled = true;
            expect(form.Grid.Contacts.Disabled).toBe(true);
        });

        test('Label getter should return grid label', () => {
            const form = getGridForm();
            expect(form.Grid.Contacts.Label).toBe('Contacts Grid');
        });

        test('Label setter should change label', () => {
            const form = getGridForm();
            form.Grid.Contacts.Label = 'New Label';
            expect(form.Grid.Contacts.Label).toBe('New Label');
        });

        test('Focus should not throw', () => {
            const form = getGridForm();
            expect(() => form.Grid.Contacts.Focus()).not.toThrow();
        });
    });

    // ========================================================================
    // TEST: Edge Cases - Null Grid Control
    // ========================================================================

    describe('Edge Cases - Null Grid Control', () => {
        function getFormWithNullGridControl(): any {
            const formContext = {
                data: {
                    getIsDirty: () => false, isValid: () => true, refresh: () => Promise.resolve(), save: () => Promise.resolve(),
                    addOnLoad: () => { }, removeOnLoad: () => { },
                    entity: {
                        attributes: { get: () => null }, getId: () => 'id', getEntityName: () => 'account',
                        getIsDirty: () => false, isValid: () => true, getDataXml: () => '', getEntityReference: () => ({}),
                        getPrimaryAttributeValue: () => '', addOnSave: () => { }, removeOnSave: () => { }, addOnPostSave: () => { }, removeOnPostSave: () => { }
                    }
                },
                ui: {
                    getFormType: () => 2, controls: { get: () => null }, tabs: { get: () => null },
                    formSelector: { getCurrentItem: () => ({ getId: () => 'f', getLabel: () => 'l' }), items: { getLength: () => 0, get: () => null } },
                    getViewPortHeight: () => 800, getViewPortWidth: () => 1200,
                    clearFormNotification: () => true, setFormNotification: () => true, close: () => { }, refreshRibbon: () => { },
                    addLoaded: () => { }, removeLoaded: () => { }, addOnLoad: () => { }, removeOnLoad: () => { }, setFormEntityName: () => { }
                },
                getControl: () => null, // Returns null
                getAttribute: () => null,
                getFormContext: function () { return this; }
            };

            return new FormBase({ getFormContext: () => formContext }, 'test', {
                body: [], header: [], tab: [], navigation: [], quick: [], bpf: [],
                grid: ['NullGrid']
            });
        }

        test('EntityName should return undefined when grid control is null', () => {
            const form = getFormWithNullGridControl();
            expect(form.Grid.NullGrid.EntityName).toBeUndefined();
        });

        test('Visible should return undefined when grid control is null', () => {
            const form = getFormWithNullGridControl();
            expect(form.Grid.NullGrid.Visible).toBeUndefined();
        });

        test('Visible setter should not throw when grid control is null', () => {
            const form = getFormWithNullGridControl();
            expect(() => { form.Grid.NullGrid.Visible = false; }).not.toThrow();
        });

        test('TotalRecordCount should return undefined when grid control is null', () => {
            const form = getFormWithNullGridControl();
            expect(form.Grid.NullGrid.TotalRecordCount).toBeUndefined();
        });

        test('Methods should not throw when grid control is null', () => {
            const form = getFormWithNullGridControl();
            expect(() => form.Grid.NullGrid.AddOnLoad(() => { })).not.toThrow();
            expect(() => form.Grid.NullGrid.Refresh()).not.toThrow();
            expect(() => form.Grid.NullGrid.OpenRelatedGrid()).not.toThrow();
        });
    });

    // ========================================================================
    // TEST: Edge Cases - Empty Grid with Null getLength (line 274 branch)
    // ========================================================================

    describe('Edge Cases - Empty Grid (line 274 branch)', () => {
        function getFormWithEmptyGrid(): any {
            // Grid instance with null getRows
            const gridInstance = {
                getRows: () => null, // Returns null - will make getLength undefined
                getSelectedRows: () => null,
                getTotalRecordCount: () => 0
            };

            const gridControl = {
                getEntityName: () => 'contact',
                getFetchXml: () => '<fetch/>',
                getGridType: () => 1,
                getRelationship: () => null,
                getGrid: () => gridInstance,
                getVisible: () => true,
                setVisible: () => { },
                getViewSelector: () => null,
                addOnLoad: () => { },
                removeOnLoad: () => { },
                openRelatedGrid: () => { },
                refresh: () => { },
                refreshRibbon: () => { },
                getUrl: () => ''
            };

            const formContext = {
                data: {
                    getIsDirty: () => false, isValid: () => true, refresh: () => Promise.resolve(), save: () => Promise.resolve(),
                    addOnLoad: () => { }, removeOnLoad: () => { },
                    entity: {
                        attributes: { get: () => null }, getId: () => 'id', getEntityName: () => 'account',
                        getIsDirty: () => false, isValid: () => true, getDataXml: () => '', getEntityReference: () => ({}),
                        getPrimaryAttributeValue: () => '', addOnSave: () => { }, removeOnSave: () => { }, addOnPostSave: () => { }, removeOnPostSave: () => { }
                    }
                },
                ui: {
                    getFormType: () => 2, controls: { get: () => null }, tabs: { get: () => null },
                    formSelector: { getCurrentItem: () => ({ getId: () => 'f', getLabel: () => 'l' }), items: { getLength: () => 0, get: () => null } },
                    getViewPortHeight: () => 800, getViewPortWidth: () => 1200,
                    clearFormNotification: () => true, setFormNotification: () => true, close: () => { }, refreshRibbon: () => { },
                    addLoaded: () => { }, removeLoaded: () => { }, addOnLoad: () => { }, removeOnLoad: () => { }, setFormEntityName: () => { }
                },
                getControl: (name: string) => name === 'EmptyGrid' ? gridControl : null,
                getAttribute: () => null,
                getFormContext: function () { return this; }
            };

            return new FormBase({ getFormContext: () => formContext }, 'test', {
                body: [], header: [], tab: [], navigation: [], quick: [], bpf: [],
                grid: ['EmptyGrid']
            });
        }

        test('Rows.getLength should return undefined when getRows returns null', () => {
            const form = getFormWithEmptyGrid();
            expect(form.Grid.EmptyGrid.Rows.getLength()).toBeUndefined();
        });

        test('Rows.forEach should not throw when getRows returns null (line 274)', () => {
            const form = getFormWithEmptyGrid();
            let count = 0;
            // This should not iterate because items?.getLength() || 0 returns 0
            form.Grid.EmptyGrid.Rows.forEach((row: any) => { count++; });
            expect(count).toBe(0);
        });

        test('SelectedRows.forEach should not throw when getSelectedRows returns null', () => {
            const form = getFormWithEmptyGrid();
            let count = 0;
            form.Grid.EmptyGrid.SelectedRows.forEach((row: any) => { count++; });
            expect(count).toBe(0);
        });
    });

    // ========================================================================
    // TEST: Edge Cases - No getControl function (lines 318, 337, 344 false branches)
    // ========================================================================

    describe('Edge Cases - No getControl function', () => {
        function getFormWithNoGetControl(): any {
            // formContext has NO getControl property at all
            // This makes typeof formContext?.getControl === 'function' → false
            const formContext: any = {
                data: {
                    getIsDirty: () => false, isValid: () => true,
                    refresh: () => Promise.resolve(), save: () => Promise.resolve(),
                    addOnLoad: () => { }, removeOnLoad: () => { },
                    entity: {
                        attributes: { get: () => null }, getId: () => 'id', getEntityName: () => 'account',
                        getIsDirty: () => false, isValid: () => true, getDataXml: () => '',
                        getEntityReference: () => ({}), getPrimaryAttributeValue: () => '',
                        addOnSave: () => { }, removeOnSave: () => { }, addOnPostSave: () => { }, removeOnPostSave: () => { }
                    }
                },
                ui: {
                    getFormType: () => 2, controls: { get: () => null }, tabs: { get: () => null },
                    formSelector: { getCurrentItem: () => ({ getId: () => 'f', getLabel: () => 'l' }), items: { getLength: () => 0, get: () => null } },
                    getViewPortHeight: () => 800, getViewPortWidth: () => 1200,
                    clearFormNotification: () => true, setFormNotification: () => true, close: () => { }, refreshRibbon: () => { },
                    addLoaded: () => { }, removeLoaded: () => { }, addOnLoad: () => { }, removeOnLoad: () => { }, setFormEntityName: () => { }
                },
                // NO getControl property - typeof formContext?.getControl !== 'function'
                getAttribute: () => null,
                getFormContext: function () { return this; }
            };

            return new FormBase({ getFormContext: () => formContext }, 'test', {
                body: [], header: [], tab: [], navigation: [], quick: [], bpf: [],
                grid: ['NoControlGrid']
            });
        }

        test('EntityName should return undefined when no getControl function (line 318 false branch)', () => {
            const form = getFormWithNoGetControl();
            // line 318: typeof formContext?.getControl === 'function' → false → gridControl = null
            expect(form.Grid.NoControlGrid.EntityName).toBeUndefined();
        });

        test('Rows should use null gridInstance when no getControl function (line 337 false branch)', () => {
            const form = getFormWithNoGetControl();
            // line 337: typeof formContext?.getControl === 'function' → false → gridInstance = null
            const rows = form.Grid.NoControlGrid.Rows;
            expect(rows).toBeDefined();
            expect(rows.getLength()).toBeUndefined();
        });

        test('SelectedRows should use null gridInstance when no getControl function (line 344 false branch)', () => {
            const form = getFormWithNoGetControl();
            // line 344: typeof formContext?.getControl === 'function' → false → gridInstance = null
            const selectedRows = form.Grid.NoControlGrid.SelectedRows;
            expect(selectedRows).toBeDefined();
            expect(selectedRows.getLength()).toBeUndefined();
        });
    });
});
