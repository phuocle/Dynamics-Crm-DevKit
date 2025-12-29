/**
 * Unit Tests for devkit.ts - loadSidePanes function
 * Using xrm-mock framework for Dynamics 365/Xrm API simulation
 * 
 * This test file covers Side Panes functionality including:
 * - DisplayState property (getter/setter)
 * - Create method with callback
 * - Get method (get specific pane)
 * - GetAll method (get all panes)
 * - GetSelected method (get selected pane)
 * - Edge cases (null/undefined Xrm.App.sidePanes)
 */
import { XrmMockGenerator } from 'xrm-mock';
import { FormBase } from '../../lib/devkit';

describe('loadSidePanes Tests', () => {
    beforeEach(() => {
        // Setup global window object for Node.js environment
        (global as any).window = (global as any).window || {};
        XrmMockGenerator.initialise();
        (global as any).window.Xrm = (global as any).Xrm;
    });

    // ========================================================================
    // HELPER FUNCTION: Setup SidePanes Mock
    // ========================================================================

    function setupSidePanesMock(): any {
        let displayState = 'expanded';
        const panes = [
            { paneId: 'pane1', title: 'Pane 1', isSelected: true },
            { paneId: 'pane2', title: 'Pane 2', isSelected: false }
        ];

        const sidePanesMock = {
            get state() { return displayState; },
            set state(value: string) { displayState = value; },
            createPane: (options: any) => Promise.resolve({ paneId: options.paneId || 'new-pane' }),
            getPane: (paneId: string) => panes.find(p => p.paneId === paneId) || null,
            getAllPanes: () => panes,
            getSelectedPane: () => panes.find(p => p.isSelected) || null
        };

        // Setup Xrm.App.sidePanes
        (global as any).Xrm = {
            ...(global as any).Xrm,
            App: {
                sidePanes: sidePanesMock
            }
        };
        (global as any).window.Xrm = (global as any).Xrm;

        return sidePanesMock;
    }

    function getForm(): any {
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
            getControl: () => null, getAttribute: () => null, getFormContext: function () { return this; }
        };

        return new FormBase({ getFormContext: () => formContext }, 'test', {
            body: [], header: [], tab: [], grid: [], navigation: [], quick: [], bpf: []
        });
    }

    // ========================================================================
    // TEST: SidePanes Object
    // ========================================================================

    describe('SidePanes Object', () => {
        test('SidePanes should be defined', () => {
            setupSidePanesMock();
            const form = getForm();
            expect(form.SidePanes).toBeDefined();
        });
    });

    // ========================================================================
    // TEST: DisplayState Property
    // ========================================================================

    describe('DisplayState Property', () => {
        test('DisplayState getter should return current state', () => {
            setupSidePanesMock();
            const form = getForm();
            expect(form.SidePanes.DisplayState).toBe('expanded');
        });

        test('DisplayState setter should change state', () => {
            setupSidePanesMock();
            const form = getForm();
            form.SidePanes.DisplayState = 'collapsed';
            expect(form.SidePanes.DisplayState).toBe('collapsed');
        });
    });

    // ========================================================================
    // TEST: Create Method
    // ========================================================================

    describe('Create Method', () => {
        test('Create should create a new pane', () => {
            setupSidePanesMock();
            const form = getForm();
            expect(() => form.SidePanes.Create({ paneId: 'test-pane', title: 'Test' })).not.toThrow();
        });

        test('Create should call successCallback when provided', async () => {
            setupSidePanesMock();
            const form = getForm();
            const callback = jest.fn();
            form.SidePanes.Create({ paneId: 'test-pane' }, callback);
            // Wait for promise to resolve
            await new Promise(resolve => setTimeout(resolve, 10));
            expect(callback).toHaveBeenCalledWith({ paneId: 'test-pane' });
        });

        test('Create without callback should not throw', () => {
            setupSidePanesMock();
            const form = getForm();
            expect(() => form.SidePanes.Create({ paneId: 'test-pane' })).not.toThrow();
        });

        test('Create without callback should return Promise', () => {
            setupSidePanesMock();
            const form = getForm();
            const result = form.SidePanes.Create({ paneId: 'test-pane' });
            expect(result).toBeInstanceOf(Promise);
        });

        test('Create with errorCallback should handle errors', async () => {
            // Setup mock that rejects
            const errorMock = {
                state: 'expanded',
                createPane: () => Promise.reject(new Error('Create pane failed')),
                getPane: () => null,
                getAllPanes: () => [],
                getSelectedPane: () => null
            };
            (global as any).Xrm = { App: { sidePanes: errorMock } };
            (global as any).window.Xrm = (global as any).Xrm;

            const form = getForm();
            const successCallback = jest.fn();
            const errorCallback = jest.fn();

            form.SidePanes.Create({ paneId: 'test-pane' }, successCallback, errorCallback);

            // Wait for promise to reject
            await new Promise(resolve => setTimeout(resolve, 10));
            expect(errorCallback).toHaveBeenCalled();
            expect(successCallback).not.toHaveBeenCalled();
        });

        test('Create with callbacks should not return anything', () => {
            setupSidePanesMock();
            const form = getForm();
            const result = form.SidePanes.Create({ paneId: 'test-pane' }, () => { }, () => { });
            expect(result).toBeUndefined();
        });
    });

    // ========================================================================
    // TEST: Get Method
    // ========================================================================

    describe('Get Method', () => {
        test('Get should return pane by id', () => {
            setupSidePanesMock();
            const form = getForm();
            const pane = form.SidePanes.Get('pane1');
            expect(pane).toBeDefined();
            expect(pane.paneId).toBe('pane1');
        });

        test('Get should return null for non-existing pane', () => {
            setupSidePanesMock();
            const form = getForm();
            const pane = form.SidePanes.Get('non-existing');
            expect(pane).toBeNull();
        });
    });

    // ========================================================================
    // TEST: GetAll Method
    // ========================================================================

    describe('GetAll Method', () => {
        test('GetAll should return all panes', () => {
            setupSidePanesMock();
            const form = getForm();
            const panes = form.SidePanes.GetAll();
            expect(panes).toBeDefined();
            expect(panes.length).toBe(2);
        });
    });

    // ========================================================================
    // TEST: GetSelected Method
    // ========================================================================

    describe('GetSelected Method', () => {
        test('GetSelected should return selected pane', () => {
            setupSidePanesMock();
            const form = getForm();
            const pane = form.SidePanes.GetSelected();
            expect(pane).toBeDefined();
            expect(pane.paneId).toBe('pane1');
            expect(pane.isSelected).toBe(true);
        });
    });

    // ========================================================================
    // TEST: Edge Cases - Null sidePanes
    // ========================================================================

    describe('Edge Cases - Null sidePanes', () => {
        beforeEach(() => {
            // Setup Xrm.App without sidePanes
            (global as any).Xrm = {
                App: {
                    sidePanes: null
                }
            };
            (global as any).window.Xrm = (global as any).Xrm;
        });

        test('DisplayState getter should return undefined when sidePanes is null', () => {
            const form = getForm();
            expect(form.SidePanes.DisplayState).toBeUndefined();
        });

        test('DisplayState setter should not throw when sidePanes is null', () => {
            const form = getForm();
            expect(() => { form.SidePanes.DisplayState = 'collapsed'; }).not.toThrow();
        });

        test('Create should not throw when sidePanes is null', () => {
            const form = getForm();
            expect(() => form.SidePanes.Create({ paneId: 'test' })).not.toThrow();
        });

        test('Get should return undefined when sidePanes is null', () => {
            const form = getForm();
            expect(form.SidePanes.Get('pane1')).toBeUndefined();
        });

        test('GetAll should return undefined when sidePanes is null', () => {
            const form = getForm();
            expect(form.SidePanes.GetAll()).toBeUndefined();
        });

        test('GetSelected should return undefined when sidePanes is null', () => {
            const form = getForm();
            expect(form.SidePanes.GetSelected()).toBeUndefined();
        });
    });

    // ========================================================================
    // TEST: Edge Cases - Null App
    // ========================================================================

    describe('Edge Cases - Null App', () => {
        beforeEach(() => {
            // Setup Xrm without App
            (global as any).Xrm = {
                App: null
            };
            (global as any).window.Xrm = (global as any).Xrm;
        });

        test('DisplayState getter should return undefined when App is null', () => {
            const form = getForm();
            expect(form.SidePanes.DisplayState).toBeUndefined();
        });

        test('DisplayState setter should not throw when App is null', () => {
            const form = getForm();
            expect(() => { form.SidePanes.DisplayState = 'collapsed'; }).not.toThrow();
        });

        test('Create should not throw when App is null', () => {
            const form = getForm();
            expect(() => form.SidePanes.Create({ paneId: 'test' })).not.toThrow();
        });

        test('Get should return undefined when App is null', () => {
            const form = getForm();
            expect(form.SidePanes.Get('pane1')).toBeUndefined();
        });

        test('GetAll should return undefined when App is null', () => {
            const form = getForm();
            expect(form.SidePanes.GetAll()).toBeUndefined();
        });

        test('GetSelected should return undefined when App is null', () => {
            const form = getForm();
            expect(form.SidePanes.GetSelected()).toBeUndefined();
        });
    });

    // ========================================================================
    // TEST: Edge Cases - Undefined Xrm
    // ========================================================================

    describe('Edge Cases - Undefined Xrm', () => {
        beforeEach(() => {
            // Remove Xrm completely
            delete (global as any).Xrm;
            delete (global as any).window.Xrm;
        });

        test('DisplayState getter should return undefined when Xrm is undefined', () => {
            const form = getForm();
            expect(form.SidePanes.DisplayState).toBeUndefined();
        });

        test('DisplayState setter should not throw when Xrm is undefined', () => {
            const form = getForm();
            expect(() => { form.SidePanes.DisplayState = 'collapsed'; }).not.toThrow();
        });

        test('All methods should handle undefined Xrm gracefully', () => {
            const form = getForm();
            expect(() => form.SidePanes.Create({ paneId: 'test' })).not.toThrow();
            expect(form.SidePanes.Get('pane1')).toBeUndefined();
            expect(form.SidePanes.GetAll()).toBeUndefined();
            expect(form.SidePanes.GetSelected()).toBeUndefined();
        });
    });
});
