/**
 * Unit Tests for devkit.ts - loadNavigations function
 * Using xrm-mock framework for Dynamics 365/Xrm API simulation
 * 
 * This test file covers Navigation Items functionality including:
 * - Navigation item parsing from config
 * - Id property (getter)
 * - Label property (getter/setter)
 * - Visible property (getter/setter)
 * - Focus method
 * - Edge cases (null navigation items)
 * 
 * Reference: Account.form.ts navigation = ['nav_msa_account_managingpartner']
 */
import { XrmMockGenerator } from 'xrm-mock';
import { FormBase } from '../../lib/devkit';

describe('loadNavigations Tests', () => {
    beforeEach(() => {
        // Setup global window object for Node.js environment
        (global as any).window = (global as any).window || {};
        XrmMockGenerator.initialise();
        (global as any).window.Xrm = (global as any).Xrm;
    });

    // ========================================================================
    // HELPER FUNCTION: Create Navigation FormBase with Manual Mock
    // ========================================================================

    function getNavigationForm(navConfig: string[] = ['nav_msa_account_managingpartner']): any {
        // State variables for getters/setters
        let navLabel = 'Managing Partner';
        let navVisible = true;

        // Create navigation item mocks
        const navItems = [
            {
                getId: () => 'nav_msa_account_managingpartner',
                getLabel: () => navLabel,
                setLabel: (value: string) => { navLabel = value; },
                getVisible: () => navVisible,
                setVisible: (value: boolean) => { navVisible = value; },
                setFocus: () => { }
            },
            {
                getId: () => 'nav_contacts',
                getLabel: () => 'Contacts',
                setLabel: () => { },
                getVisible: () => true,
                setVisible: () => { },
                setFocus: () => { }
            }
        ];

        // Create formContext mock
        const formContext = {
            data: {
                getIsDirty: () => false,
                isValid: () => true,
                refresh: () => Promise.resolve(),
                save: () => Promise.resolve(),
                addOnLoad: () => { },
                removeOnLoad: () => { },
                entity: {
                    attributes: { get: () => null },
                    getId: () => '00000000-0000-0000-0000-000000000001',
                    getEntityName: () => 'account',
                    getIsDirty: () => false,
                    isValid: () => true,
                    getDataXml: () => '<data></data>',
                    getEntityReference: () => ({ id: '00000000-0000-0000-0000-000000000001', entityType: 'account' }),
                    getPrimaryAttributeValue: () => 'Test Account',
                    addOnSave: () => { },
                    removeOnSave: () => { },
                    addOnPostSave: () => { },
                    removeOnPostSave: () => { }
                }
            },
            ui: {
                getFormType: () => 2,
                controls: { get: () => null },
                tabs: { get: () => null },
                navigation: {
                    items: {
                        get: (index: number) => navItems[index],
                        getLength: () => navItems.length
                    }
                },
                formSelector: {
                    getCurrentItem: () => ({ getId: () => 'form-1', getLabel: () => 'Test Form' }),
                    items: { getLength: () => 0, get: () => null }
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
                setFormEntityName: () => { }
            },
            getControl: () => null,
            getAttribute: () => null,
            getFormContext: function () { return this; }
        };

        // Mock executionContext
        const executionContext = {
            getFormContext: () => formContext,
            getEventArgs: () => ({
                preventDefault: () => { },
                isDefaultPrevented: () => false
            }),
            getContext: () => ({}),
            getDepth: () => 1,
            getEventSource: () => null,
            getSharedVariable: () => null,
            setSharedVariable: () => { }
        };

        // Create FormBase with Navigation config
        return new FormBase(
            executionContext,
            'test_webresource',
            {
                body: [],
                header: [],
                tab: [],
                grid: [],
                navigation: navConfig,
                quick: [],
                bpf: []
            }
        );
    }

    // ========================================================================
    // TEST: Navigation Parsing
    // ========================================================================

    describe('Navigation Parsing', () => {
        test('should parse navigation config correctly', () => {
            const form = getNavigationForm(['nav_msa_account_managingpartner']);
            expect(form.Navigation).toBeDefined();
            expect(form.Navigation.nav_msa_account_managingpartner).toBeDefined();
        });

        test('should handle multiple navigation items', () => {
            const form = getNavigationForm(['nav_msa_account_managingpartner', 'nav_contacts']);
            expect(form.Navigation.nav_msa_account_managingpartner).toBeDefined();
            expect(form.Navigation.nav_contacts).toBeDefined();
        });
    });

    // ========================================================================
    // TEST: Id Property (Account.form.ts reference: nav_msa_account_managingpartner)
    // ========================================================================

    describe('Id Property', () => {
        test('Id should return navigation item id', () => {
            const form = getNavigationForm();
            expect(form.Navigation.nav_msa_account_managingpartner.Id).toBe('nav_msa_account_managingpartner');
        });
    });

    // ========================================================================
    // TEST: Label Property
    // ========================================================================

    describe('Label Property', () => {
        test('Label getter should return label text', () => {
            const form = getNavigationForm();
            expect(form.Navigation.nav_msa_account_managingpartner.Label).toBe('Managing Partner');
        });

        test('Label setter should change label text', () => {
            const form = getNavigationForm();
            form.Navigation.nav_msa_account_managingpartner.Label = 'New Label';
            expect(form.Navigation.nav_msa_account_managingpartner.Label).toBe('New Label');
        });
    });

    // ========================================================================
    // TEST: Visible Property
    // ========================================================================

    describe('Visible Property', () => {
        test('Visible getter should return true by default', () => {
            const form = getNavigationForm();
            expect(form.Navigation.nav_msa_account_managingpartner.Visible).toBe(true);
        });

        test('Visible setter should change visibility', () => {
            const form = getNavigationForm();
            form.Navigation.nav_msa_account_managingpartner.Visible = false;
            expect(form.Navigation.nav_msa_account_managingpartner.Visible).toBe(false);
        });
    });

    // ========================================================================
    // TEST: Focus Method
    // ========================================================================

    describe('Focus Method', () => {
        test('Focus should not throw', () => {
            const form = getNavigationForm();
            expect(() => form.Navigation.nav_msa_account_managingpartner.Focus()).not.toThrow();
        });
    });

    // ========================================================================
    // TEST: Edge Cases - Navigation Not Found
    // ========================================================================

    describe('Edge Cases - Navigation Not Found', () => {
        test('Navigation item not in form should have undefined Id', () => {
            const form = getNavigationForm(['non_existing_nav']);
            expect(form.Navigation.non_existing_nav).toBeDefined();
            expect(form.Navigation.non_existing_nav.Id).toBeUndefined();
        });

        test('Navigation item not found should have undefined Label', () => {
            const form = getNavigationForm(['non_existing_nav']);
            expect(form.Navigation.non_existing_nav.Label).toBeUndefined();
        });

        test('Navigation item not found should have undefined Visible', () => {
            const form = getNavigationForm(['non_existing_nav']);
            expect(form.Navigation.non_existing_nav.Visible).toBeUndefined();
        });

        test('Navigation item not found Focus should not throw', () => {
            const form = getNavigationForm(['non_existing_nav']);
            expect(() => form.Navigation.non_existing_nav.Focus()).not.toThrow();
        });

        test('Label setter should not throw when navigation not found', () => {
            const form = getNavigationForm(['non_existing_nav']);
            expect(() => { form.Navigation.non_existing_nav.Label = 'test'; }).not.toThrow();
        });

        test('Visible setter should not throw when navigation not found', () => {
            const form = getNavigationForm(['non_existing_nav']);
            expect(() => { form.Navigation.non_existing_nav.Visible = false; }).not.toThrow();
        });
    });

    // ========================================================================
    // TEST: Edge Cases - Null Navigation Items
    // ========================================================================

    describe('Edge Cases - Null Navigation Items', () => {
        function getFormWithNullNavItems(): any {
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
                    navigation: { items: null }, // Null navigation items
                    formSelector: { getCurrentItem: () => ({ getId: () => 'f', getLabel: () => 'l' }), items: { getLength: () => 0, get: () => null } },
                    getViewPortHeight: () => 800, getViewPortWidth: () => 1200,
                    clearFormNotification: () => true, setFormNotification: () => true, close: () => { }, refreshRibbon: () => { },
                    addLoaded: () => { }, removeLoaded: () => { }, addOnLoad: () => { }, removeOnLoad: () => { }, setFormEntityName: () => { }
                },
                getControl: () => null, getAttribute: () => null, getFormContext: function () { return this; }
            };

            return new FormBase({ getFormContext: () => formContext }, 'test', {
                body: [], header: [], tab: [], grid: [],
                navigation: ['nav_null_test'],
                quick: [], bpf: []
            });
        }

        test('Id should return undefined when navigation items is null (line 174)', () => {
            const form = getFormWithNullNavItems();
            expect(form.Navigation.nav_null_test.Id).toBeUndefined();
        });

        test('Label should return undefined when navigation items is null', () => {
            const form = getFormWithNullNavItems();
            expect(form.Navigation.nav_null_test.Label).toBeUndefined();
        });

        test('Visible should return undefined when navigation items is null', () => {
            const form = getFormWithNullNavItems();
            expect(form.Navigation.nav_null_test.Visible).toBeUndefined();
        });

        test('Focus should not throw when navigation items is null', () => {
            const form = getFormWithNullNavItems();
            expect(() => form.Navigation.nav_null_test.Focus()).not.toThrow();
        });
    });

    // ========================================================================
    // TEST: Edge Cases - Null Navigation Object
    // ========================================================================

    describe('Edge Cases - Null Navigation Object', () => {
        function getFormWithNullNavigation(): any {
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
                    navigation: null, // Null navigation
                    formSelector: { getCurrentItem: () => ({ getId: () => 'f', getLabel: () => 'l' }), items: { getLength: () => 0, get: () => null } },
                    getViewPortHeight: () => 800, getViewPortWidth: () => 1200,
                    clearFormNotification: () => true, setFormNotification: () => true, close: () => { }, refreshRibbon: () => { },
                    addLoaded: () => { }, removeLoaded: () => { }, addOnLoad: () => { }, removeOnLoad: () => { }, setFormEntityName: () => { }
                },
                getControl: () => null, getAttribute: () => null, getFormContext: function () { return this; }
            };

            return new FormBase({ getFormContext: () => formContext }, 'test', {
                body: [], header: [], tab: [], grid: [],
                navigation: ['nav_null_obj'],
                quick: [], bpf: []
            });
        }

        test('Properties should handle null navigation object gracefully', () => {
            const form = getFormWithNullNavigation();
            expect(form.Navigation.nav_null_obj.Id).toBeUndefined();
            expect(form.Navigation.nav_null_obj.Label).toBeUndefined();
            expect(form.Navigation.nav_null_obj.Visible).toBeUndefined();
        });
    });

    // ========================================================================
    // TEST: Loop through navigation items (line 176-181)
    // ========================================================================

    describe('Loop through navigation items', () => {
        test('Should find navigation item at second position', () => {
            const form = getNavigationForm(['nav_contacts']);
            // nav_contacts is at index 1 in the mock
            expect(form.Navigation.nav_contacts.Id).toBe('nav_contacts');
        });

        test('Should iterate through all items to find matching navigation', () => {
            // This tests the for loop in getNavigationItem
            const form = getNavigationForm(['nav_msa_account_managingpartner']);
            expect(form.Navigation.nav_msa_account_managingpartner.Id).toBe('nav_msa_account_managingpartner');
        });
    });
});
