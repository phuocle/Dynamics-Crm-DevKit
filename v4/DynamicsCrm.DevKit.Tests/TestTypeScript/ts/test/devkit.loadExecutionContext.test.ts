/**
 * Unit Tests for devkit.ts - loadExecutionContext function
 * Using xrm-mock framework for Dynamics 365/Xrm API simulation
 * 
 * This test file covers ExecutionContext functionality including:
 * - Getter properties: Depth, EntityReference, EventArgs, EventSource, FormContext, IsSaveSuccess, SaveErrorInfo, SaveMode
 * - Methods: DisableAsyncTimeout, GetSharedVariable, IsDefaultPrevented, IsInitialLoad, SetPreventDefault, SetPreventDefaultOnError, SetSharedVariable
 * - Edge cases (null/undefined executionContext)
 */
import { XrmMockGenerator } from 'xrm-mock';
import { FormBase } from '../lib/devkit';

describe('loadExecutionContext Tests', () => {
    beforeEach(() => {
        // Setup global window object for Node.js environment
        (global as any).window = (global as any).window || {};
        XrmMockGenerator.initialise();
        (global as any).window.Xrm = (global as any).Xrm;
    });

    // ========================================================================
    // HELPER FUNCTION: Create Form with ExecutionContext Mock
    // ========================================================================

    function getFormWithExecutionContext(options: {
        depth?: number;
        isSaveSuccess?: boolean;
        saveMode?: number;
        dataLoadState?: number;
        isDefaultPrevented?: boolean;
    } = {}): any {
        const sharedVariables: Record<string, any> = {};
        let preventDefaultCalled = false;
        let preventDefaultOnErrorCalled = false;
        let disableAsyncTimeoutCalled = false;

        const eventArgs = {
            getEntityReference: () => ({ id: '00000000-0000-0000-0000-000000000001', entityType: 'account' }),
            getIsSaveSuccess: () => options.isSaveSuccess ?? true,
            getSaveErrorInfo: () => options.isSaveSuccess === false ? { errorCode: 500, message: 'Save failed' } : null,
            getSaveMode: () => options.saveMode ?? 1,
            getDataLoadState: () => options.dataLoadState ?? 1, // 1 = InitialLoad
            isDefaultPrevented: () => options.isDefaultPrevented ?? preventDefaultCalled,
            preventDefault: () => { preventDefaultCalled = true; },
            preventDefaultOnError: () => { preventDefaultOnErrorCalled = true; },
            disableAsyncTimeout: () => { disableAsyncTimeoutCalled = true; }
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
            getControl: () => null, getAttribute: () => null, getFormContext: function () { return this; }
        };

        const executionContext = {
            getDepth: () => options.depth ?? 1,
            getEventArgs: () => eventArgs,
            getEventSource: () => ({ getName: () => 'primarycontactid' }),
            getFormContext: () => formContext,
            getSharedVariable: (key: string) => sharedVariables[key],
            setSharedVariable: (key: string, value: any) => { sharedVariables[key] = value; }
        };

        return {
            form: new FormBase(executionContext, 'test', {
                body: [], header: [], tab: [], grid: [], navigation: [], quick: [], bpf: []
            }),
            executionContext,
            sharedVariables
        };
    }

    // ========================================================================
    // TEST: ExecutionContext Object
    // ========================================================================

    describe('ExecutionContext Object', () => {
        test('ExecutionContext should be defined', () => {
            const { form } = getFormWithExecutionContext();
            expect(form.ExecutionContext).toBeDefined();
        });
    });

    // ========================================================================
    // TEST: Getter Properties
    // ========================================================================

    describe('Depth Property', () => {
        test('Depth should return execution depth', () => {
            const { form } = getFormWithExecutionContext({ depth: 1 });
            expect(form.ExecutionContext.Depth).toBe(1);
        });

        test('Depth should return custom depth value', () => {
            const { form } = getFormWithExecutionContext({ depth: 3 });
            expect(form.ExecutionContext.Depth).toBe(3);
        });
    });

    describe('EntityReference Property', () => {
        test('EntityReference should return entity reference', () => {
            const { form } = getFormWithExecutionContext();
            const ref = form.ExecutionContext.EntityReference;
            expect(ref).toBeDefined();
            expect(ref.entityType).toBe('account');
            expect(ref.id).toBe('00000000-0000-0000-0000-000000000001');
        });
    });

    describe('EventArgs Property', () => {
        test('EventArgs should return event arguments', () => {
            const { form } = getFormWithExecutionContext();
            const args = form.ExecutionContext.EventArgs;
            expect(args).toBeDefined();
            expect(args.getEntityReference).toBeDefined();
        });
    });

    describe('EventSource Property', () => {
        test('EventSource should return event source', () => {
            const { form } = getFormWithExecutionContext();
            const source = form.ExecutionContext.EventSource;
            expect(source).toBeDefined();
            expect(source.getName()).toBe('primarycontactid');
        });
    });

    describe('FormContext Property', () => {
        test('FormContext should return form context', () => {
            const { form } = getFormWithExecutionContext();
            const ctx = form.ExecutionContext.FormContext;
            expect(ctx).toBeDefined();
            expect(ctx.ui).toBeDefined();
            expect(ctx.data).toBeDefined();
        });
    });

    describe('IsSaveSuccess Property', () => {
        test('IsSaveSuccess should return true when save succeeded', () => {
            const { form } = getFormWithExecutionContext({ isSaveSuccess: true });
            expect(form.ExecutionContext.IsSaveSuccess).toBe(true);
        });

        test('IsSaveSuccess should return false when save failed', () => {
            const { form } = getFormWithExecutionContext({ isSaveSuccess: false });
            expect(form.ExecutionContext.IsSaveSuccess).toBe(false);
        });
    });

    describe('SaveErrorInfo Property', () => {
        test('SaveErrorInfo should return null when save succeeded', () => {
            const { form } = getFormWithExecutionContext({ isSaveSuccess: true });
            expect(form.ExecutionContext.SaveErrorInfo).toBeNull();
        });

        test('SaveErrorInfo should return error info when save failed', () => {
            const { form } = getFormWithExecutionContext({ isSaveSuccess: false });
            const error = form.ExecutionContext.SaveErrorInfo;
            expect(error).toBeDefined();
            expect(error.errorCode).toBe(500);
            expect(error.message).toBe('Save failed');
        });
    });

    describe('SaveMode Property', () => {
        test('SaveMode should return save mode value', () => {
            const { form } = getFormWithExecutionContext({ saveMode: 1 });
            expect(form.ExecutionContext.SaveMode).toBe(1);
        });

        test('SaveMode should return save and close mode', () => {
            const { form } = getFormWithExecutionContext({ saveMode: 2 });
            expect(form.ExecutionContext.SaveMode).toBe(2);
        });
    });

    // ========================================================================
    // TEST: Methods
    // ========================================================================

    describe('DisableAsyncTimeout Method', () => {
        test('DisableAsyncTimeout should not throw', () => {
            const { form } = getFormWithExecutionContext();
            expect(() => form.ExecutionContext.DisableAsyncTimeout()).not.toThrow();
        });
    });

    describe('GetSharedVariable Method', () => {
        test('GetSharedVariable should return undefined for non-existing key', () => {
            const { form } = getFormWithExecutionContext();
            expect(form.ExecutionContext.GetSharedVariable('nonExisting')).toBeUndefined();
        });

        test('GetSharedVariable should return value after SetSharedVariable', () => {
            const { form } = getFormWithExecutionContext();
            form.ExecutionContext.SetSharedVariable('testKey', 'testValue');
            expect(form.ExecutionContext.GetSharedVariable('testKey')).toBe('testValue');
        });
    });

    describe('IsDefaultPrevented Method', () => {
        test('IsDefaultPrevented should return false by default', () => {
            const { form } = getFormWithExecutionContext({ isDefaultPrevented: false });
            expect(form.ExecutionContext.IsDefaultPrevented()).toBe(false);
        });

        test('IsDefaultPrevented should return true when set', () => {
            const { form } = getFormWithExecutionContext({ isDefaultPrevented: true });
            expect(form.ExecutionContext.IsDefaultPrevented()).toBe(true);
        });
    });

    describe('IsInitialLoad Method', () => {
        test('IsInitialLoad should return true when dataLoadState is 1', () => {
            const { form } = getFormWithExecutionContext({ dataLoadState: 1 });
            expect(form.ExecutionContext.IsInitialLoad()).toBe(true);
        });

        test('IsInitialLoad should return false when dataLoadState is not 1', () => {
            const { form } = getFormWithExecutionContext({ dataLoadState: 2 });
            expect(form.ExecutionContext.IsInitialLoad()).toBe(false);
        });
    });

    describe('SetPreventDefault Method', () => {
        test('SetPreventDefault should not throw', () => {
            const { form } = getFormWithExecutionContext();
            expect(() => form.ExecutionContext.SetPreventDefault()).not.toThrow();
        });
    });

    describe('SetPreventDefaultOnError Method', () => {
        test('SetPreventDefaultOnError should not throw', () => {
            const { form } = getFormWithExecutionContext();
            expect(() => form.ExecutionContext.SetPreventDefaultOnError()).not.toThrow();
        });
    });

    describe('SetSharedVariable Method', () => {
        test('SetSharedVariable should set value correctly', () => {
            const { form } = getFormWithExecutionContext();
            form.ExecutionContext.SetSharedVariable('myKey', 123);
            expect(form.ExecutionContext.GetSharedVariable('myKey')).toBe(123);
        });

        test('SetSharedVariable should overwrite existing value', () => {
            const { form } = getFormWithExecutionContext();
            form.ExecutionContext.SetSharedVariable('key', 'first');
            form.ExecutionContext.SetSharedVariable('key', 'second');
            expect(form.ExecutionContext.GetSharedVariable('key')).toBe('second');
        });
    });

    // ========================================================================
    // TEST: Edge Cases - Null ExecutionContext
    // ========================================================================

    describe('Edge Cases - Null ExecutionContext', () => {
        function getFormWithNullExecutionContext(): any {
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

            // ExecutionContext with null getEventArgs
            const nullExecutionContext = {
                getDepth: () => undefined,
                getEventArgs: () => null,
                getEventSource: () => null,
                getFormContext: () => formContext,
                getSharedVariable: () => undefined,
                setSharedVariable: () => { }
            };

            return new FormBase(nullExecutionContext, 'test', {
                body: [], header: [], tab: [], grid: [], navigation: [], quick: [], bpf: []
            });
        }

        test('Depth should return undefined when getDepth returns undefined', () => {
            const form = getFormWithNullExecutionContext();
            expect(form.ExecutionContext.Depth).toBeUndefined();
        });

        test('EntityReference should return undefined when getEventArgs is null', () => {
            const form = getFormWithNullExecutionContext();
            expect(form.ExecutionContext.EntityReference).toBeUndefined();
        });

        test('EventArgs should return null when getEventArgs returns null', () => {
            const form = getFormWithNullExecutionContext();
            expect(form.ExecutionContext.EventArgs).toBeNull();
        });

        test('EventSource should return null when getEventSource returns null', () => {
            const form = getFormWithNullExecutionContext();
            expect(form.ExecutionContext.EventSource).toBeNull();
        });

        test('IsSaveSuccess should return undefined when getEventArgs is null', () => {
            const form = getFormWithNullExecutionContext();
            expect(form.ExecutionContext.IsSaveSuccess).toBeUndefined();
        });

        test('SaveErrorInfo should return undefined when getEventArgs is null', () => {
            const form = getFormWithNullExecutionContext();
            expect(form.ExecutionContext.SaveErrorInfo).toBeUndefined();
        });

        test('SaveMode should return undefined when getEventArgs is null', () => {
            const form = getFormWithNullExecutionContext();
            expect(form.ExecutionContext.SaveMode).toBeUndefined();
        });

        test('DisableAsyncTimeout should not throw when getEventArgs is null', () => {
            const form = getFormWithNullExecutionContext();
            expect(() => form.ExecutionContext.DisableAsyncTimeout()).not.toThrow();
        });

        test('IsDefaultPrevented should return undefined when getEventArgs is null', () => {
            const form = getFormWithNullExecutionContext();
            expect(form.ExecutionContext.IsDefaultPrevented()).toBeUndefined();
        });

        test('IsInitialLoad should return false when getEventArgs is null (undefined === 1 is false)', () => {
            const form = getFormWithNullExecutionContext();
            expect(form.ExecutionContext.IsInitialLoad()).toBe(false);
        });

        test('SetPreventDefault should not throw when getEventArgs is null', () => {
            const form = getFormWithNullExecutionContext();
            expect(() => form.ExecutionContext.SetPreventDefault()).not.toThrow();
        });

        test('SetPreventDefaultOnError should not throw when getEventArgs is null', () => {
            const form = getFormWithNullExecutionContext();
            expect(() => form.ExecutionContext.SetPreventDefaultOnError()).not.toThrow();
        });
    });
});
