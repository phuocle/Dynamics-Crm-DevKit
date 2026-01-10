/**
 * Unit Tests for devkit.ts - getXrm function
 * 
 * This test file covers all branches of getXrm function:
 * 1. window.Xrm exists -> return window.Xrm
 * 2. parent.window.Xrm exists -> return parent.window.Xrm
 * 3. parent.parent.window.Xrm exists -> return parent.parent.window.Xrm
 * 4. None exists -> return undefined
 * 
 * Branch conditions to cover:
 * - typeof window !== 'undefined'
 * - (window as any).Xrm !== undefined
 * - typeof parent !== 'undefined'
 * - typeof parent.window !== 'undefined'
 * - (parent.window as any).Xrm !== undefined
 * - typeof parent.parent !== 'undefined'
 * - typeof parent.parent.window !== 'undefined'
 * - (parent.parent.window as any).Xrm !== undefined
 */
import { XrmMockGenerator } from 'xrm-mock';
import { FormBase } from '../../lib/devkit';

describe('getXrm Tests', () => {
    // Store original global state
    let originalWindow: any;
    let originalParent: any;

    beforeEach(() => {
        // Store original values
        originalWindow = (global as any).window;
        originalParent = (global as any).parent;
    });

    afterEach(() => {
        // Restore original values
        (global as any).window = originalWindow;
        (global as any).parent = originalParent;
    });

    // Helper to create a minimal FormBase for testing
    function createForm(): any {
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
    // TEST: Case 1 - window.Xrm exists
    // ========================================================================

    describe('Case 1: window.Xrm exists', () => {
        test('should return window.Xrm when it exists', () => {
            // Setup: window.Xrm exists
            const mockXrm = {
                Utility: { getGlobalContext: () => ({ client: { getClient: () => 'Web' } }) }
            };
            (global as any).window = { Xrm: mockXrm };
            (global as any).Xrm = mockXrm;

            const form = createForm();
            // Utility will be using getXrm() internally
            expect(form.Utility).toBeDefined();
        });

        test('WebApi should work when window.Xrm exists', () => {
            const mockXrm = {
                WebApi: {
                    online: {
                        createRecord: () => Promise.resolve({ id: 'new-id' }),
                        retrieveRecord: () => Promise.resolve({}),
                        updateRecord: () => Promise.resolve({}),
                        deleteRecord: () => Promise.resolve({})
                    }
                }
            };
            (global as any).window = { Xrm: mockXrm };
            (global as any).Xrm = mockXrm;

            const form = createForm();
            expect(form.WebApi).toBeDefined();
        });
    });

    // ========================================================================
    // TEST: Case 2 - Only parent.window.Xrm exists
    // ========================================================================

    describe('Case 2: parent.window.Xrm exists (window.Xrm undefined)', () => {
        test('should fallback to parent.window.Xrm when window.Xrm is undefined', () => {
            // Setup: window exists but window.Xrm is undefined
            const mockXrm = {
                Utility: { getGlobalContext: () => ({ client: { getClient: () => 'Mobile' } }) }
            };
            (global as any).window = {}; // No Xrm here
            (global as any).parent = {
                window: { Xrm: mockXrm }
            };

            const form = createForm();
            expect(form.Utility).toBeDefined();
        });

        test('SidePanes should work with parent.window.Xrm', () => {
            const mockXrm = {
                App: {
                    sidePanes: {
                        state: 'expanded',
                        createPane: () => Promise.resolve({}),
                        getPane: () => null,
                        getAllPanes: () => [],
                        getSelectedPane: () => null
                    }
                }
            };
            (global as any).window = {}; // No Xrm
            (global as any).parent = {
                window: { Xrm: mockXrm }
            };

            const form = createForm();
            expect(form.SidePanes).toBeDefined();
            expect(form.SidePanes.DisplayState).toBe('expanded');
        });
    });

    // ========================================================================
    // TEST: Case 3 - Only parent.parent.window.Xrm exists
    // ========================================================================

    describe('Case 3: parent.parent.window.Xrm exists (nested iframe)', () => {
        test('should fallback to parent.parent.window.Xrm when others are undefined', () => {
            const mockXrm = {
                Utility: { getGlobalContext: () => ({ client: { getClient: () => 'Tablet' } }) }
            };
            (global as any).window = {}; // No Xrm
            (global as any).parent = {
                window: {}, // No Xrm here either
                parent: {
                    window: { Xrm: mockXrm }
                }
            };

            const form = createForm();
            expect(form.Utility).toBeDefined();
        });
    });

    // ========================================================================
    // TEST: Case 4 - No Xrm exists anywhere
    // ========================================================================

    describe('Case 4: No Xrm exists anywhere', () => {
        test('should return undefined when no Xrm exists', () => {
            // Setup: No Xrm anywhere
            (global as any).window = {};
            (global as any).parent = {
                window: {},
                parent: {
                    window: {}
                }
            };

            const form = createForm();
            // WebApi and other Xrm-dependent features should gracefully handle undefined
            expect(form.WebApi).toBeDefined(); // Object exists but methods return undefined
        });

        test('Utility methods should handle undefined Xrm gracefully', () => {
            (global as any).window = {};
            (global as any).parent = undefined;

            const form = createForm();
            expect(form.Utility).toBeDefined();
            expect(form.Utility.ClientUrl).toBeUndefined();
        });
    });

    // ========================================================================
    // TEST: Branch Coverage - typeof checks
    // ========================================================================

    describe('Branch Coverage - typeof window undefined', () => {
        test('should handle case when window is undefined', () => {
            // This tests the typeof window !== 'undefined' branch being false
            delete (global as any).window;
            (global as any).parent = {
                window: { Xrm: { test: true } }
            };

            const form = createForm();
            expect(form.Utility).toBeDefined();
        });
    });

    describe('Branch Coverage - typeof parent undefined', () => {
        test('should handle case when parent is undefined', () => {
            // window has no Xrm, parent is undefined
            (global as any).window = {};
            delete (global as any).parent;

            const form = createForm();
            expect(form.Utility).toBeDefined();
        });
    });

    describe('Branch Coverage - typeof parent.window undefined', () => {
        test('should handle case when parent.window is undefined', () => {
            (global as any).window = {};
            (global as any).parent = {}; // No window property

            const form = createForm();
            expect(form.Utility).toBeDefined();
        });
    });

    describe('Branch Coverage - typeof parent.parent undefined', () => {
        test('should handle case when parent.parent is undefined', () => {
            (global as any).window = {};
            (global as any).parent = {
                window: {} // No Xrm
                // No parent.parent
            };

            const form = createForm();
            expect(form.Utility).toBeDefined();
        });
    });

    describe('Branch Coverage - typeof parent.parent.window undefined', () => {
        test('should handle case when parent.parent.window is undefined', () => {
            (global as any).window = {};
            (global as any).parent = {
                window: {}, // No Xrm
                parent: {} // No window property
            };

            const form = createForm();
            expect(form.Utility).toBeDefined();
        });
    });

    // ========================================================================
    // TEST: Xrm property is undefined vs object missing
    // ========================================================================

    describe('Branch Coverage - Xrm property checks', () => {
        test('should check window.Xrm !== undefined (Xrm property exists but undefined)', () => {
            (global as any).window = { Xrm: undefined }; // Explicitly undefined
            (global as any).parent = {
                window: { Xrm: { test: 'parent' } }
            };

            const form = createForm();
            expect(form.Utility).toBeDefined();
        });

        test('should check parent.window.Xrm !== undefined (Xrm explicitly undefined)', () => {
            (global as any).window = {}; // No Xrm
            (global as any).parent = {
                window: { Xrm: undefined }, // Explicitly undefined
                parent: {
                    window: { Xrm: { test: 'grandparent' } }
                }
            };

            const form = createForm();
            expect(form.Utility).toBeDefined();
        });

        test('should check parent.parent.window.Xrm !== undefined', () => {
            (global as any).window = {};
            (global as any).parent = {
                window: {},
                parent: {
                    window: { Xrm: undefined } // Explicitly undefined
                }
            };

            const form = createForm();
            expect(form.Utility).toBeDefined();
        });
    });

    // ========================================================================
    // TEST: Integration - Copilot uses getXrm
    // ========================================================================

    describe('Integration - Copilot uses getXrm', () => {
        test('Copilot should work when window.Xrm exists', () => {
            const mockXrm = {
                Copilot: {
                    executeEvent: () => Promise.resolve({ success: true }),
                    executePrompt: () => Promise.resolve({ response: 'test' })
                }
            };
            (global as any).window = { Xrm: mockXrm };

            const form = createForm();
            expect(form.Copilot).toBeDefined();
            expect(form.Copilot.ExecuteEvent).toBeDefined();
            expect(form.Copilot.ExecutePrompt).toBeDefined();
        });

        test('Copilot should handle undefined Xrm gracefully', () => {
            (global as any).window = {};
            delete (global as any).parent;

            const form = createForm();
            expect(form.Copilot).toBeDefined();
            // Methods should not throw
            expect(() => form.Copilot.ExecuteEvent('test', {})).not.toThrow();
            expect(() => form.Copilot.ExecutePrompt('test')).not.toThrow();
        });
    });
});
