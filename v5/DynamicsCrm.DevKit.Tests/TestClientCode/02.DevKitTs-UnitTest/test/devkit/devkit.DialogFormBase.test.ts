/**
 * Unit Tests for devkit.ts - DialogFormBase class
 * Using xrm-mock framework for Dynamics 365/Xrm API simulation
 */
import { XrmMockGenerator } from 'xrm-mock';
import { DialogFormBase } from '../../lib/devkit';

// Global setup
let mockGlobalContext: any;

describe('DialogFormBase Tests', () => {
    beforeEach(() => {
        (global as any).window = (global as any).window || {};
        XrmMockGenerator.initialise();
        (global as any).window.Xrm = (global as any).Xrm;

        mockGlobalContext = {
            client: {},
            organizationSettings: {},
            userSettings: {},
            getClientUrl: () => 'https://test.crm.dynamics.com',
            getCurrentAppUrl: () => 'https://test.crm.dynamics.com/main.aspx',
            isOnPremises: () => false,
            getVersion: () => '9.2.0.0',
            prependOrgName: (path: string) => `/org${path}`,
            getWebResourceUrl: () => '/webresources/test'
        };
        (Xrm.Utility as any).getGlobalContext = () => mockGlobalContext;
        (Xrm as any).Encoding = { htmlAttributeEncode: (a: string) => a, htmlDecode: (a: string) => a, htmlEncode: (a: string) => a, xmlAttributeEncode: (a: string) => a, xmlEncode: (a: string) => a };
        (Xrm as any).App = { addGlobalNotification: () => Promise.resolve('id'), clearGlobalNotification: () => Promise.resolve(), sidePanes: { state: 0, createPane: () => Promise.resolve(), getPane: () => null, getAllPanes: () => [], getSelectedPane: () => null } };
        (Xrm as any).Device = { captureAudio: () => Promise.resolve({}), captureImage: () => Promise.resolve({}), captureVideo: () => Promise.resolve({}), getBarcodeValue: () => Promise.resolve(''), getCurrentPosition: () => Promise.resolve({ coords: {} }), pickFile: () => Promise.resolve([]) };
        (Xrm as any).Copilot = { executeEvent: () => Promise.resolve(), executePrompt: () => Promise.resolve() };
        (Xrm as any).Navigation = { navigateTo: () => Promise.resolve() };
    });

    // Helper to create a dialog execution context mock
    function createDialogContext(fields: string[] = ['name']) {
        let isClosed = false;

        const attributes = new Map<string, any>();
        const controls = new Map<string, any>();

        fields.forEach(field => {
            attributes.set(field, {
                getName: () => field,
                getValue: () => 'test_value',
                setValue: () => {},
                getAttributeType: () => 'string'
            });

            controls.set(field, {
                getName: () => field,
                getControlType: () => 'standard',
                getVisible: () => true,
                getAttribute: () => attributes.get(field)
            });
        });

        const formContext = {
            data: {
                attributes: {
                    get: (name: string) => attributes.get(name)
                }
            },
            ui: {
                close: () => { isClosed = true; }
            },
            getControl: (name: string) => controls.get(name)
        };

        return {
            executionContext: {
                getFormContext: () => formContext
            },
            formContext,
            isClosed: () => isClosed
        };
    }

    test('should construct DialogFormBase and load properties', () => {
        const { executionContext } = createDialogContext(['name', 'email']);
        const dialog = new DialogFormBase(executionContext, ['name', 'email']);

        expect(dialog).toBeDefined();
        expect(dialog.Utility).toBeDefined();
        expect(dialog.Dialog).toBeDefined();
        expect(dialog.Dialog.name).toBeDefined();
        expect(dialog.Dialog.email).toBeDefined();
    });

    test('Dialog properties should be accessible', () => {
        const { executionContext } = createDialogContext(['name']);
        const dialog = new DialogFormBase(executionContext, ['name']);
        
        expect(dialog.Dialog.name.AttributeName).toBe('name');
        expect(dialog.Dialog.name.Value).toBe('test_value');
    });

    test('Close() method should call formContext.ui.close()', () => {
        const { executionContext, isClosed } = createDialogContext();
        const dialog = new DialogFormBase(executionContext, []);
        
        expect(isClosed()).toBe(false);
        dialog.Close();
        expect(isClosed()).toBe(true);
    });

    test('should gracefully handle getControl missing', () => {
        const { executionContext } = createDialogContext(['name']);
        // Simulate missing getControl entirely
        delete executionContext.getFormContext().getControl; 
        
        const dialog = new DialogFormBase(executionContext, ['name']);
        expect(dialog.Dialog.name.Value).toBe('test_value'); // Can still get from attribute
    });
});
