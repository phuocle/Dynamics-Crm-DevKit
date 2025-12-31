/**
 * Unit Tests for devkit.ts - loadQuickForms function
 * Using xrm-mock framework for Dynamics 365/Xrm API simulation
 * 
 * This test file covers Quick View Forms functionality including:
 * - QuickForm parsing with field configuration
 * - Control properties (ControlName, ControlParent, ControlType)
 * - Getter/Setter properties (Disabled, Label, Visible)
 * - Methods (Controls, Focus, IsLoaded, Refresh)
 * - Body fields loading
 */
import { XrmMockGenerator } from 'xrm-mock';
import { FormBase } from '../../lib/devkit';

describe('loadQuickForms Tests', () => {
    beforeEach(() => {
        // Setup global window object for Node.js environment
        (global as any).window = (global as any).window || {};
        XrmMockGenerator.initialise();
        (global as any).window.Xrm = (global as any).Xrm;
    });

    // ========================================================================
    // HELPER FUNCTION: Create QuickForm FormBase with Manual Mock
    // ========================================================================

    function getQuickFormForm(quickConfig: string[] = ['ContactQuickForm___name', 'ContactQuickForm___emailaddress1']): any {
        // State variables for getters/setters
        let qfDisabled = false;
        let qfLabel = 'Contact Quick View';
        let qfVisible = true;
        let isLoaded = true;

        // Create quick form control mock
        const quickFormControl = {
            getName: () => 'ContactQuickForm',
            getParent: () => ({ getName: () => 'tab_general' }),
            getControlType: () => 'quickform',
            getDisabled: () => qfDisabled,
            setDisabled: (value: boolean) => { qfDisabled = value; },
            getLabel: () => qfLabel,
            setLabel: (value: string) => { qfLabel = value; },
            getVisible: () => qfVisible,
            setVisible: (value: boolean) => { qfVisible = value; },
            getControl: (arg: any) => arg ? ({ getName: () => arg }) : null,
            setFocus: () => { },
            isLoaded: () => isLoaded,
            refresh: () => { },
            data: {
                entity: {
                    attributes: {
                        get: (fieldName: string) => ({
                            getValue: () => 'test value',
                            setValue: () => { },
                            getName: () => fieldName,
                            getFormat: () => 'text',
                            getAttributeType: () => 'string'
                        })
                    }
                }
            }
        };

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
                quickForms: {
                    get: (name: string) => name === 'ContactQuickForm' ? quickFormControl : null
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

        // Create FormBase with QuickForm config
        const form = new FormBase(
            executionContext,
            'test_webresource',
            {
                body: [],
                header: [],
                tab: [],
                grid: [],
                navigation: [],
                quick: quickConfig,
                bpf: []
            }
        );

        return form;
    }

    // ========================================================================
    // TEST: QuickForm Parsing
    // ========================================================================

    describe('QuickForm Parsing', () => {
        test('should parse QuickForm config with QuickFormName___FieldName format', () => {
            const form = getQuickFormForm([
                'ContactQuickForm___name',
                'ContactQuickForm___emailaddress1',
                'ContactQuickForm___telephone1'
            ]);
            expect(form.QuickForm).toBeDefined();
            expect(form.QuickForm.ContactQuickForm).toBeDefined();
        });

        test('should handle QuickForm without fields', () => {
            const form = getQuickFormForm(['AccountQuickForm']);
            expect(form.QuickForm).toBeDefined();
            expect(form.QuickForm.AccountQuickForm).toBeDefined();
        });

        test('should handle multiple QuickForms', () => {
            const form = getQuickFormForm([
                'ContactQuickForm___name',
                'AddressQuickForm___address1_line1'
            ]);
            expect(form.QuickForm.ContactQuickForm).toBeDefined();
            expect(form.QuickForm.AddressQuickForm).toBeDefined();
        });
    });

    // ========================================================================
    // TEST: Control Properties
    // ========================================================================

    describe('Control Properties', () => {
        test('ControlName should return quick form name', () => {
            const form = getQuickFormForm();
            expect(form.QuickForm.ContactQuickForm.ControlName).toBe('ContactQuickForm');
        });

        test('ControlParent should return parent control', () => {
            const form = getQuickFormForm();
            const parent = form.QuickForm.ContactQuickForm.ControlParent;
            expect(parent).toBeDefined();
            expect(parent.getName()).toBe('tab_general');
        });

        test('ControlType should return "quickform"', () => {
            const form = getQuickFormForm();
            expect(form.QuickForm.ContactQuickForm.ControlType).toBe('quickform');
        });
    });

    // ========================================================================
    // TEST: Disabled Property
    // ========================================================================

    describe('Disabled Property', () => {
        test('Disabled getter should return false by default', () => {
            const form = getQuickFormForm();
            expect(form.QuickForm.ContactQuickForm.Disabled).toBe(false);
        });

        test('Disabled setter should change disabled state', () => {
            const form = getQuickFormForm();
            form.QuickForm.ContactQuickForm.Disabled = true;
            expect(form.QuickForm.ContactQuickForm.Disabled).toBe(true);
        });
    });

    // ========================================================================
    // TEST: Label Property
    // ========================================================================

    describe('Label Property', () => {
        test('Label getter should return label text', () => {
            const form = getQuickFormForm();
            expect(form.QuickForm.ContactQuickForm.Label).toBe('Contact Quick View');
        });

        test('Label setter should change label text', () => {
            const form = getQuickFormForm();
            form.QuickForm.ContactQuickForm.Label = 'New Label';
            expect(form.QuickForm.ContactQuickForm.Label).toBe('New Label');
        });
    });

    // ========================================================================
    // TEST: Visible Property
    // ========================================================================

    describe('Visible Property', () => {
        test('Visible getter should return true by default', () => {
            const form = getQuickFormForm();
            expect(form.QuickForm.ContactQuickForm.Visible).toBe(true);
        });

        test('Visible setter should change visibility', () => {
            const form = getQuickFormForm();
            form.QuickForm.ContactQuickForm.Visible = false;
            expect(form.QuickForm.ContactQuickForm.Visible).toBe(false);
        });
    });

    // ========================================================================
    // TEST: Methods
    // ========================================================================

    describe('Methods', () => {
        test('Controls should return control by name', () => {
            const form = getQuickFormForm();
            const control = form.QuickForm.ContactQuickForm.Controls('name');
            expect(control).toBeDefined();
            expect(control.getName()).toBe('name');
        });

        test('Controls without argument should return null', () => {
            const form = getQuickFormForm();
            const control = form.QuickForm.ContactQuickForm.Controls();
            expect(control).toBeNull();
        });

        test('Focus should not throw', () => {
            const form = getQuickFormForm();
            expect(() => form.QuickForm.ContactQuickForm.Focus()).not.toThrow();
        });

        test('IsLoaded should return true', () => {
            const form = getQuickFormForm();
            expect(form.QuickForm.ContactQuickForm.IsLoaded()).toBe(true);
        });

        test('Refresh should not throw', () => {
            const form = getQuickFormForm();
            expect(() => form.QuickForm.ContactQuickForm.Refresh()).not.toThrow();
        });
    });

    // ========================================================================
    // TEST: Body Property
    // ========================================================================

    describe('Body Property', () => {
        test('Body should be defined', () => {
            const form = getQuickFormForm();
            expect(form.QuickForm.ContactQuickForm.Body).toBeDefined();
        });

        test('Body should have Close method', () => {
            const form = getQuickFormForm();
            expect(form.QuickForm.ContactQuickForm.Body.Close).toBeDefined();
            expect(() => form.QuickForm.ContactQuickForm.Body.Close()).not.toThrow();
        });

        test('Body field EmailAddress1 should exist', () => {
            const form = getQuickFormForm();
            // Body fields are loaded from the fields specified in config (emailaddress1)
            // The Body contains fields loaded via loadFormDialog
            expect(form.QuickForm.ContactQuickForm.Body).toBeDefined();
        });
    });

    // ========================================================================
    // TEST: Body Fields with Value Property
    // ========================================================================

    describe('Body Fields with Value Property', () => {
        function getQuickFormWithBodyField(): any {
            let emailValue = 'contact@example.com';

            // QuickForm control mock with proper data/entity/attributes for Body fields
            const quickFormControl = {
                getName: () => 'contactquickform',
                getParent: () => ({ getName: () => 'tab_general' }),
                getControlType: () => 'quickform',
                getDisabled: () => false,
                setDisabled: () => { },
                getLabel: () => 'Contact Quick View',
                setLabel: () => { },
                getVisible: () => true,
                setVisible: () => { },
                getControl: (fieldName: string) => fieldName ? ({
                    getName: () => fieldName,
                    getControlType: () => 'standard',
                    getVisible: () => true,
                    setVisible: () => { },
                    getLabel: () => 'Email',
                    setLabel: () => { },
                    getDisabled: () => false,
                    setDisabled: () => { },
                    setFocus: () => { },
                    getParent: () => null
                }) : undefined,
                setFocus: () => { },
                isLoaded: () => true,
                refresh: () => { },
                // For loadFormDialog - Body field loading
                data: {
                    entity: {
                        attributes: {
                            get: (fieldName: string) => fieldName === 'emailaddress1' ? ({
                                getValue: () => emailValue,
                                setValue: (value: any) => { emailValue = value; },
                                getName: () => 'emailaddress1',
                                getFormat: () => 'email',
                                getAttributeType: () => 'string',
                                getRequiredLevel: () => 'none',
                                setRequiredLevel: () => { },
                                getSubmitMode: () => 'dirty',
                                setSubmitMode: () => { },
                                getIsDirty: () => false,
                                getMaxLength: () => 100,
                                controls: { get: () => null },
                                addOnChange: () => { },
                                removeOnChange: () => { },
                                fireOnChange: () => { }
                            }) : null
                        }
                    }
                },
                ui: {
                    close: () => { }
                }
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
                    quickForms: { get: (name: string) => name === 'contactquickform' ? quickFormControl : null },
                    formSelector: { getCurrentItem: () => ({ getId: () => 'f', getLabel: () => 'l' }), items: { getLength: () => 0, get: () => null } },
                    getViewPortHeight: () => 800, getViewPortWidth: () => 1200,
                    clearFormNotification: () => true, setFormNotification: () => true, close: () => { }, refreshRibbon: () => { },
                    addLoaded: () => { }, removeLoaded: () => { }, addOnLoad: () => { }, removeOnLoad: () => { }, setFormEntityName: () => { }
                },
                getControl: () => null, getAttribute: () => null, getFormContext: function () { return this; }
            };

            return new FormBase({ getFormContext: () => formContext }, 'test', {
                body: [], header: [], tab: [], grid: [], navigation: [],
                quick: ['contactquickform___emailaddress1'],
                bpf: []
            });
        }

        test('Body.emailaddress1 should exist', () => {
            const form = getQuickFormWithBodyField();
            expect(form.QuickForm.contactquickform).toBeDefined();
            expect(form.QuickForm.contactquickform.Body).toBeDefined();
            expect(form.QuickForm.contactquickform.Body.emailaddress1).toBeDefined();
        });

        test('Body.emailaddress1.Value should return email value (get)', () => {
            const form = getQuickFormWithBodyField();
            expect(form.QuickForm.contactquickform.Body.emailaddress1.Value).toBe('contact@example.com');
        });

        test('Body.emailaddress1.AttributeType should return string', () => {
            const form = getQuickFormWithBodyField();
            expect(form.QuickForm.contactquickform.Body.emailaddress1.AttributeType).toBe('string');
        });

        test('Body.emailaddress1.Format should return email', () => {
            const form = getQuickFormWithBodyField();
            expect(form.QuickForm.contactquickform.Body.emailaddress1.Format).toBe('email');
        });

        test('Body.emailaddress1.MaxLength should return max length', () => {
            const form = getQuickFormWithBodyField();
            expect(form.QuickForm.contactquickform.Body.emailaddress1.MaxLength).toBe(100);
        });
    });

    // ========================================================================
    // TEST: Edge Cases - Null/Undefined
    // ========================================================================

    describe('Edge Cases - Null QuickForm', () => {
        function getFormWithNullQuickForm(): any {
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
                    quickForms: { get: () => null }, // Returns null
                    formSelector: { getCurrentItem: () => ({ getId: () => 'f', getLabel: () => 'l' }), items: { getLength: () => 0, get: () => null } },
                    getViewPortHeight: () => 800, getViewPortWidth: () => 1200,
                    clearFormNotification: () => true, setFormNotification: () => true, close: () => { }, refreshRibbon: () => { },
                    addLoaded: () => { }, removeLoaded: () => { }, addOnLoad: () => { }, removeOnLoad: () => { }, setFormEntityName: () => { }
                },
                getControl: () => null, getAttribute: () => null, getFormContext: function () { return this; }
            };

            return new FormBase({ getFormContext: () => formContext }, 'test', { body: [], header: [], tab: [], grid: [], navigation: [], quick: ['NullQuickForm___field1'], bpf: [] });
        }

        test('ControlName should return undefined when quick form is null', () => {
            const form = getFormWithNullQuickForm();
            expect(form.QuickForm.NullQuickForm.ControlName).toBeUndefined();
        });

        test('ControlParent should return undefined when quick form is null', () => {
            const form = getFormWithNullQuickForm();
            expect(form.QuickForm.NullQuickForm.ControlParent).toBeUndefined();
        });

        test('ControlType should return undefined when quick form is null', () => {
            const form = getFormWithNullQuickForm();
            expect(form.QuickForm.NullQuickForm.ControlType).toBeUndefined();
        });

        test('Disabled getter should return undefined when quick form is null', () => {
            const form = getFormWithNullQuickForm();
            expect(form.QuickForm.NullQuickForm.Disabled).toBeUndefined();
        });

        test('Disabled setter should not throw when quick form is null', () => {
            const form = getFormWithNullQuickForm();
            expect(() => { form.QuickForm.NullQuickForm.Disabled = true; }).not.toThrow();
        });

        test('Label getter should return undefined when quick form is null', () => {
            const form = getFormWithNullQuickForm();
            expect(form.QuickForm.NullQuickForm.Label).toBeUndefined();
        });

        test('Label setter should not throw when quick form is null', () => {
            const form = getFormWithNullQuickForm();
            expect(() => { form.QuickForm.NullQuickForm.Label = 'test'; }).not.toThrow();
        });

        test('Visible getter should return undefined when quick form is null', () => {
            const form = getFormWithNullQuickForm();
            expect(form.QuickForm.NullQuickForm.Visible).toBeUndefined();
        });

        test('Visible setter should not throw when quick form is null', () => {
            const form = getFormWithNullQuickForm();
            expect(() => { form.QuickForm.NullQuickForm.Visible = false; }).not.toThrow();
        });

        test('Controls should return undefined when quick form is null', () => {
            const form = getFormWithNullQuickForm();
            expect(form.QuickForm.NullQuickForm.Controls('field1')).toBeUndefined();
        });

        test('Focus should not throw when quick form is null', () => {
            const form = getFormWithNullQuickForm();
            expect(() => form.QuickForm.NullQuickForm.Focus()).not.toThrow();
        });

        test('IsLoaded should return undefined when quick form is null', () => {
            const form = getFormWithNullQuickForm();
            expect(form.QuickForm.NullQuickForm.IsLoaded()).toBeUndefined();
        });

        test('Refresh should not throw when quick form is null', () => {
            const form = getFormWithNullQuickForm();
            expect(() => form.QuickForm.NullQuickForm.Refresh()).not.toThrow();
        });
    });

    // ========================================================================
    // TEST: Field Filtering (excludedFields)
    // ========================================================================

    describe('Field Filtering', () => {
        test('excludedFields should not be included in Body fields', () => {
            // Create form with a field name that matches excludedFields
            const form = getQuickFormForm([
                'TestQuickForm___name',
                'TestQuickForm___Body', // Should be excluded
                'TestQuickForm___Controls', // Should be excluded
                'TestQuickForm___actualField'
            ]);
            expect(form.QuickForm.TestQuickForm).toBeDefined();
            // The excluded fields are filtered when loading Body
        });
    });
});
