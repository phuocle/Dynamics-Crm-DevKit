/**
 * Unit Tests for devkit.ts - loadCopilot function
 * Using xrm-mock framework for Dynamics 365/Xrm API simulation
 * 
 * This test file covers Copilot functionality including:
 * - ExecuteEvent: Promise and callback patterns
 * - ExecutePrompt: Promise and callback patterns
 * - Edge cases: null Copilot, undefined Xrm
 */
import { XrmMockGenerator } from 'xrm-mock';
import { FormBase } from '../lib/devkit';

describe('loadCopilot Tests', () => {
    beforeEach(() => {
        (global as any).window = (global as any).window || {};
        XrmMockGenerator.initialise();
        (global as any).window.Xrm = (global as any).Xrm;
    });

    // ========================================================================
    // HELPER: Setup Copilot Mock
    // ========================================================================

    function setupCopilotMock(): any {
        const mockCopilot = {
            executeEvent: (eventName: string, eventParams: any) => Promise.resolve({ eventName, success: true }),
            executePrompt: (promptText: string) => Promise.resolve({ response: 'AI response for: ' + promptText })
        };
        (global as any).Xrm = { ...(global as any).Xrm, Copilot: mockCopilot };
        (global as any).window.Xrm = (global as any).Xrm;
        return mockCopilot;
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
    // TEST: Copilot Object
    // ========================================================================

    describe('Copilot Object', () => {
        test('Copilot should be defined', () => {
            setupCopilotMock();
            const form = getForm();
            expect(form.Copilot).toBeDefined();
        });

        test('Copilot should have ExecuteEvent method', () => {
            setupCopilotMock();
            const form = getForm();
            expect(form.Copilot.ExecuteEvent).toBeDefined();
            expect(typeof form.Copilot.ExecuteEvent).toBe('function');
        });

        test('Copilot should have ExecutePrompt method', () => {
            setupCopilotMock();
            const form = getForm();
            expect(form.Copilot.ExecutePrompt).toBeDefined();
            expect(typeof form.Copilot.ExecutePrompt).toBe('function');
        });
    });

    // ========================================================================
    // TEST: ExecuteEvent - Promise Pattern
    // ========================================================================

    describe('ExecuteEvent - Promise Pattern', () => {
        test('ExecuteEvent should return Promise when no callback', async () => {
            setupCopilotMock();
            const form = getForm();
            const result = await form.Copilot.ExecuteEvent('TestEvent', { param1: 'value1' });
            expect(result.eventName).toBe('TestEvent');
            expect(result.success).toBe(true);
        });

        test('ExecuteEvent should pass eventParameters correctly', async () => {
            const mockCopilot = {
                executeEvent: jest.fn().mockResolvedValue({ success: true })
            };
            (global as any).Xrm = { Copilot: mockCopilot };
            (global as any).window.Xrm = (global as any).Xrm;

            const form = getForm();
            await form.Copilot.ExecuteEvent('MyEvent', { key: 'value' });
            expect(mockCopilot.executeEvent).toHaveBeenCalledWith('MyEvent', { key: 'value' });
        });
    });

    // ========================================================================
    // TEST: ExecuteEvent - Callback Pattern
    // ========================================================================

    describe('ExecuteEvent - Callback Pattern', () => {
        test('ExecuteEvent should call successCallback when provided', async () => {
            setupCopilotMock();
            const form = getForm();
            const successCallback = jest.fn();
            form.Copilot.ExecuteEvent('TestEvent', {}, successCallback);
            await new Promise(r => setTimeout(r, 10));
            expect(successCallback).toHaveBeenCalled();
        });

        test('ExecuteEvent should pass result to successCallback', async () => {
            setupCopilotMock();
            const form = getForm();
            const successCallback = jest.fn();
            form.Copilot.ExecuteEvent('TestEvent', { data: 'test' }, successCallback);
            await new Promise(r => setTimeout(r, 10));
            expect(successCallback).toHaveBeenCalledWith(expect.objectContaining({ eventName: 'TestEvent' }));
        });

        test('ExecuteEvent should call errorCallback on failure', async () => {
            const mockCopilot = {
                executeEvent: () => Promise.reject(new Error('Event failed'))
            };
            (global as any).Xrm = { Copilot: mockCopilot };
            (global as any).window.Xrm = (global as any).Xrm;

            const form = getForm();
            const successCallback = jest.fn();
            const errorCallback = jest.fn();
            form.Copilot.ExecuteEvent('FailEvent', {}, successCallback, errorCallback);
            await new Promise(r => setTimeout(r, 10));
            expect(errorCallback).toHaveBeenCalled();
        });
    });

    // ========================================================================
    // TEST: ExecutePrompt - Promise Pattern
    // ========================================================================

    describe('ExecutePrompt - Promise Pattern', () => {
        test('ExecutePrompt should return Promise when no callback', async () => {
            setupCopilotMock();
            const form = getForm();
            const result = await form.Copilot.ExecutePrompt('What is the weather?');
            expect(result.response).toContain('AI response');
        });

        test('ExecutePrompt should pass promptText correctly', async () => {
            const mockCopilot = {
                executePrompt: jest.fn().mockResolvedValue({ response: 'ok' })
            };
            (global as any).Xrm = { Copilot: mockCopilot };
            (global as any).window.Xrm = (global as any).Xrm;

            const form = getForm();
            await form.Copilot.ExecutePrompt('Hello AI');
            expect(mockCopilot.executePrompt).toHaveBeenCalledWith('Hello AI');
        });
    });

    // ========================================================================
    // TEST: ExecutePrompt - Callback Pattern
    // ========================================================================

    describe('ExecutePrompt - Callback Pattern', () => {
        test('ExecutePrompt should call successCallback when provided', async () => {
            setupCopilotMock();
            const form = getForm();
            const successCallback = jest.fn();
            form.Copilot.ExecutePrompt('Test prompt', successCallback);
            await new Promise(r => setTimeout(r, 10));
            expect(successCallback).toHaveBeenCalled();
        });

        test('ExecutePrompt should pass result to successCallback', async () => {
            setupCopilotMock();
            const form = getForm();
            const successCallback = jest.fn();
            form.Copilot.ExecutePrompt('My prompt', successCallback);
            await new Promise(r => setTimeout(r, 10));
            expect(successCallback).toHaveBeenCalledWith(expect.objectContaining({ response: expect.any(String) }));
        });

        test('ExecutePrompt should call errorCallback on failure', async () => {
            const mockCopilot = {
                executePrompt: () => Promise.reject(new Error('Prompt failed'))
            };
            (global as any).Xrm = { Copilot: mockCopilot };
            (global as any).window.Xrm = (global as any).Xrm;

            const form = getForm();
            const successCallback = jest.fn();
            const errorCallback = jest.fn();
            form.Copilot.ExecutePrompt('Fail prompt', successCallback, errorCallback);
            await new Promise(r => setTimeout(r, 10));
            expect(errorCallback).toHaveBeenCalled();
        });
    });

    // ========================================================================
    // TEST: Edge Cases - Null Copilot
    // ========================================================================

    describe('Edge Cases - Null Copilot', () => {
        beforeEach(() => {
            (global as any).Xrm = { Copilot: null };
            (global as any).window.Xrm = (global as any).Xrm;
        });

        test('ExecuteEvent should return undefined when Copilot is null', () => {
            const form = getForm();
            const result = form.Copilot.ExecuteEvent('TestEvent', {});
            expect(result).toBeUndefined();
        });

        test('ExecuteEvent should not throw when Copilot is null', () => {
            const form = getForm();
            expect(() => form.Copilot.ExecuteEvent('TestEvent', {})).not.toThrow();
        });

        test('ExecutePrompt should return undefined when Copilot is null', () => {
            const form = getForm();
            const result = form.Copilot.ExecutePrompt('Test prompt');
            expect(result).toBeUndefined();
        });

        test('ExecutePrompt should not throw when Copilot is null', () => {
            const form = getForm();
            expect(() => form.Copilot.ExecutePrompt('Test prompt')).not.toThrow();
        });

        test('ExecuteEvent with callback should not throw when Copilot is null', () => {
            const form = getForm();
            const callback = jest.fn();
            expect(() => form.Copilot.ExecuteEvent('TestEvent', {}, callback)).not.toThrow();
        });

        test('ExecutePrompt with callback should not throw when Copilot is null', () => {
            const form = getForm();
            const callback = jest.fn();
            expect(() => form.Copilot.ExecutePrompt('Test prompt', callback)).not.toThrow();
        });
    });

    // ========================================================================
    // TEST: Edge Cases - Undefined Xrm
    // ========================================================================

    describe('Edge Cases - Undefined Xrm', () => {
        beforeEach(() => {
            (global as any).window = {};
            delete (global as any).Xrm;
        });

        test('ExecuteEvent should not throw when Xrm is undefined', () => {
            const form = getForm();
            expect(() => form.Copilot.ExecuteEvent('TestEvent', {})).not.toThrow();
        });

        test('ExecutePrompt should not throw when Xrm is undefined', () => {
            const form = getForm();
            expect(() => form.Copilot.ExecutePrompt('Test prompt')).not.toThrow();
        });
    });
});
