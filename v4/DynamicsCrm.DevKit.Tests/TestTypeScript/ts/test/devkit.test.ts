/**
 * Unit Tests for devkit.ts - loadUtility function
 * Using xrm-mock framework for Dynamics 365/Xrm API simulation
 */
import { XrmMockGenerator } from 'xrm-mock';

// We need to access the loadUtility function which is internal to devkit.ts
// Since loadUtility is not exported, we'll test it through the FormBase class
// which calls loadUtility internally

// Import the devkit module to access FormBase
import { FormBase } from '../lib/devkit';

// Global context object shared across tests
let mockGlobalContext: any;

describe('loadUtility Tests', () => {
    beforeEach(() => {
        // Setup global window object for Node.js environment
        // This allows getXrm() in devkit.ts to find Xrm on window
        (global as any).window = (global as any).window || {};

        // Initialize XrmMockGenerator to set up global Xrm object
        XrmMockGenerator.initialise();

        // Copy Xrm to window for getXrm() to find it
        (global as any).window.Xrm = (global as any).Xrm;

        // Create mock global context
        mockGlobalContext = {
            // Client properties
            client: {
                getClient: () => 'Web',
                getClientState: () => 'Online',
                getFormFactor: () => 1,
                isNetworkAvailable: () => true,
                isOffline: () => false
            },
            // Organization settings
            organizationSettings: {
                attributes: {},
                baseCurrency: { id: 'USD', name: 'US Dollar' },
                baseCurrencyId: '00000000-0000-0000-0000-000000000001',
                defaultCountryCode: 'US',
                fullNameConventionCode: 0,
                isAutoSaveEnabled: true,
                isTrialOrganization: false,
                languageId: 1033,
                organizationExpiryDate: new Date('2099-12-31'),
                organizationId: '00000000-0000-0000-0000-000000000002',
                uniqueName: 'TestOrg',
                useSkypeProtocol: false
            },
            // User settings
            userSettings: {
                dateFormattingInfo: { separator: '/' },
                defaultDashboardId: '00000000-0000-0000-0000-000000000003',
                isGuidedHelpEnabled: true,
                isHighContrastEnabled: false,
                isRTL: false,
                languageId: 1033,
                roles: { get: () => [] },
                securityRolePrivileges: ['priv1', 'priv2'],
                securityRoles: ['role1', 'role2'],
                getTimeZoneOffsetMinutes: () => -420, // UTC-7
                transactionCurrency: { id: 'USD', name: 'US Dollar' },
                transactionCurrencyId: '00000000-0000-0000-0000-000000000004',
                userId: '00000000-0000-0000-0000-000000000005',
                userName: 'Test User'
            },
            // GlobalContext methods
            getClientUrl: () => 'https://testorg.crm.dynamics.com',
            getCurrentAppUrl: () => 'https://testorg.crm.dynamics.com/main.aspx',
            isOnPremises: () => false,
            getVersion: () => '9.2.0.0',
            getCurrentAppName: () => Promise.resolve('Test App'),
            getCurrentAppProperties: () => Promise.resolve({ appId: 'app1', displayName: 'Test App' }),
            getAdvancedConfigSetting: (setting: string) => 10,
            prependOrgName: (sPath: string) => `/TestOrg${sPath}`,
            getWebResourceUrl: (webResourceName: string) => `/webresources/${webResourceName}`
        };

        // Setup Utility.getGlobalContext to return our configured globalContext
        (Xrm.Utility as any).getGlobalContext = () => mockGlobalContext;

        // Configure Xrm.Encoding
        (Xrm as any).Encoding = {
            htmlAttributeEncode: (arg: string) => arg.replace(/"/g, '&quot;'),
            htmlDecode: (arg: string) => arg.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&'),
            htmlEncode: (arg: string) => arg.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'),
            xmlAttributeEncode: (arg: string) => arg.replace(/"/g, '&quot;').replace(/'/g, '&apos;'),
            xmlEncode: (arg: string) => arg.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        };

        // Configure Xrm.Navigation
        (Xrm as any).Navigation = {
            navigateTo: (pageInput: any, navigationOptions: any) => Promise.resolve(),
            openAlertDialog: (alertStrings: any, alertOptions: any) => Promise.resolve(),
            openConfirmDialog: (confirmStrings: any, confirmOptions: any) => Promise.resolve({ confirmed: true }),
            openErrorDialog: (errorOptions: any) => Promise.resolve(),
            openForm: (entityFormOptions: any, formParameters: any) => Promise.resolve({ savedEntityReference: [] }),
            openFile: (file: any, openFileOptions: any) => { },
            openUrl: (url: string, openUrlOptions: any) => { },
            openWebResource: (webResourceName: string, windowOptions: any, data: string) => { }
        };

        // Configure Xrm.App
        (Xrm as any).App = {
            addGlobalNotification: (notification: any) => Promise.resolve('notification-id'),
            clearGlobalNotification: (uniqueId: string) => Promise.resolve()
        };

        // Configure Xrm.Device
        (Xrm as any).Device = {
            captureAudio: () => Promise.resolve({ fileContent: 'base64audio' }),
            captureImage: (imageOptions: any) => Promise.resolve({ fileContent: 'base64image' }),
            captureVideo: () => Promise.resolve({ fileContent: 'base64video' }),
            getBarcodeValue: () => Promise.resolve('barcode123'),
            getCurrentPosition: () => Promise.resolve({ coords: { latitude: 0, longitude: 0 } }),
            pickFile: (pickFileOptions: any) => Promise.resolve([{ fileContent: 'base64file' }])
        };

        // Configure Xrm.Panel
        (Xrm as any).Panel = {
            loadPanel: (url: string, title: string) => { }
        };

        // Configure additional Utility methods
        (Xrm.Utility as any).closeProgressIndicator = () => { };
        (Xrm.Utility as any).showProgressIndicator = (message: string) => { };
        (Xrm.Utility as any).getLearningPathAttributeName = () => 'learningPath';
        (Xrm.Utility as any).getPageContext = () => ({ input: {} });
        (Xrm.Utility as any).getAllowedStatusTransitions = (entityName: string, stateCode: number) => Promise.resolve([1, 2, 3]);
        (Xrm.Utility as any).getEntityMetadata = (entityName: string, attributes?: string[]) => Promise.resolve({ LogicalName: entityName });
        (Xrm.Utility as any).invokeProcessAction = (name: string, parameters: any) => Promise.resolve({ result: 'success' });
        (Xrm.Utility as any).lookupObjects = (lookupOptions: any) => Promise.resolve([]);
        (Xrm.Utility as any).refreshParentGrid = (lookupOptions: any) => { };
        (Xrm.Utility as any).getResourceString = (webResourceName: string, key: string) => `Resource: ${key}`;
        (Xrm.Utility as any).getEntityMainFormDescriptor = (entityName: string, formId: string) => ({ formId });
    });

    afterEach(() => {
        // Cleanup after each test
    });

    // Helper function to get Utility via FormBase
    // We need a properly configured formContext to avoid data.getIsDirty errors
    function getUtility(): any {
        // Create a minimal executionContext with fully mocked formContext
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
                },
                process: null
            },
            ui: {
                getFormType: () => 2,
                controls: { get: () => null },
                tabs: { get: () => null },
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
                setFormEntityName: () => { },
                process: null
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

        // Create a minimal FormBase instance to access Utility
        const form = new FormBase(
            executionContext,
            'test_webresource',
            { body: [], header: [], tab: [], grid: [], navigation: [], quick: [], bpf: [] }
        );

        return form.Utility;
    }

    // =========================================================================
    // CLIENT PROPERTIES TESTS
    // =========================================================================

    describe('Client Properties', () => {
        test('Client.ClientName should return "Web"', () => {
            const utility = getUtility();
            expect(utility.Client.ClientName).toBe('Web');
        });

        test('Client.ClientState should return "Online"', () => {
            const utility = getUtility();
            expect(utility.Client.ClientState).toBe('Online');
        });

        test('Client.FormFactor should return 1 (Desktop)', () => {
            const utility = getUtility();
            expect(utility.Client.FormFactor).toBe(1);
        });

        test('Client.IsNetworkAvailable should return true', () => {
            const utility = getUtility();
            expect(utility.Client.IsNetworkAvailable).toBe(true);
        });

        test('Client.IsOffline should return false', () => {
            const utility = getUtility();
            expect(utility.Client.IsOffline).toBe(false);
        });
    });

    // =========================================================================
    // GLOBAL CONTEXT URL PROPERTIES TESTS
    // =========================================================================

    describe('Global Context URL Properties', () => {
        test('ClientUrl should return the CRM URL', () => {
            const utility = getUtility();
            expect(utility.ClientUrl).toBe('https://testorg.crm.dynamics.com');
        });

        test('CurrentAppUrl should return the app URL', () => {
            const utility = getUtility();
            expect(utility.CurrentAppUrl).toBe('https://testorg.crm.dynamics.com/main.aspx');
        });

        test('IsOnPremises should return false', () => {
            const utility = getUtility();
            expect(utility.IsOnPremises).toBe(false);
        });

        test('Version should return the Dynamics version', () => {
            const utility = getUtility();
            expect(utility.Version).toBe('9.2.0.0');
        });
    });

    // =========================================================================
    // ORGANIZATION SETTINGS TESTS
    // =========================================================================

    describe('OrganizationSettings Properties', () => {
        test('OrganizationSettings.BaseCurrencyId should return currency ID', () => {
            const utility = getUtility();
            expect(utility.OrganizationSettings.BaseCurrencyId).toBe('00000000-0000-0000-0000-000000000001');
        });

        test('OrganizationSettings.DefaultCountryCode should return "US"', () => {
            const utility = getUtility();
            expect(utility.OrganizationSettings.DefaultCountryCode).toBe('US');
        });

        test('OrganizationSettings.IsAutoSaveEnabled should return true', () => {
            const utility = getUtility();
            expect(utility.OrganizationSettings.IsAutoSaveEnabled).toBe(true);
        });

        test('OrganizationSettings.IsTrialOrganization should return false', () => {
            const utility = getUtility();
            expect(utility.OrganizationSettings.IsTrialOrganization).toBe(false);
        });

        test('OrganizationSettings.LanguageId should return 1033', () => {
            const utility = getUtility();
            expect(utility.OrganizationSettings.LanguageId).toBe(1033);
        });

        test('OrganizationSettings.OrganizationId should return org ID', () => {
            const utility = getUtility();
            expect(utility.OrganizationSettings.OrganizationId).toBe('00000000-0000-0000-0000-000000000002');
        });

        test('OrganizationSettings.UniqueName should return "TestOrg"', () => {
            const utility = getUtility();
            expect(utility.OrganizationSettings.UniqueName).toBe('TestOrg');
        });

        test('OrganizationSettings.UseSkypeProtocol should return false', () => {
            const utility = getUtility();
            expect(utility.OrganizationSettings.UseSkypeProtocol).toBe(false);
        });
    });

    // =========================================================================
    // USER SETTINGS TESTS
    // =========================================================================

    describe('UserSettings Properties', () => {
        test('UserSettings.DefaultDashboardId should return dashboard ID', () => {
            const utility = getUtility();
            expect(utility.UserSettings.DefaultDashboardId).toBe('00000000-0000-0000-0000-000000000003');
        });

        test('UserSettings.IsGuidedHelpEnabled should return true', () => {
            const utility = getUtility();
            expect(utility.UserSettings.IsGuidedHelpEnabled).toBe(true);
        });

        test('UserSettings.IsHighContrastEnabled should return false', () => {
            const utility = getUtility();
            expect(utility.UserSettings.IsHighContrastEnabled).toBe(false);
        });

        test('UserSettings.IsRTL should return false', () => {
            const utility = getUtility();
            expect(utility.UserSettings.IsRTL).toBe(false);
        });

        test('UserSettings.LanguageId should return 1033', () => {
            const utility = getUtility();
            expect(utility.UserSettings.LanguageId).toBe(1033);
        });

        test('UserSettings.SecurityRolePrivileges should return privilege array', () => {
            const utility = getUtility();
            expect(utility.UserSettings.SecurityRolePrivileges).toEqual(['priv1', 'priv2']);
        });

        test('UserSettings.SecurityRoles should return role array', () => {
            const utility = getUtility();
            expect(utility.UserSettings.SecurityRoles).toEqual(['role1', 'role2']);
        });

        test('UserSettings.TimeZoneOffsetMinutes should return -420', () => {
            const utility = getUtility();
            expect(utility.UserSettings.TimeZoneOffsetMinutes).toBe(-420);
        });

        test('UserSettings.TransactionCurrencyId should return currency ID', () => {
            const utility = getUtility();
            expect(utility.UserSettings.TransactionCurrencyId).toBe('00000000-0000-0000-0000-000000000004');
        });

        test('UserSettings.UserId should return user ID', () => {
            const utility = getUtility();
            expect(utility.UserSettings.UserId).toBe('00000000-0000-0000-0000-000000000005');
        });

        test('UserSettings.UserName should return "Test User"', () => {
            const utility = getUtility();
            expect(utility.UserSettings.UserName).toBe('Test User');
        });
    });

    // =========================================================================
    // ENCODING METHODS TESTS
    // =========================================================================

    describe('Encoding Methods', () => {
        test('HtmlEncode should encode HTML special characters', () => {
            const utility = getUtility();
            expect(utility.HtmlEncode('<script>alert("test")</script>')).toBe('&lt;script&gt;alert("test")&lt;/script&gt;');
        });

        test('HtmlDecode should decode HTML entities', () => {
            const utility = getUtility();
            expect(utility.HtmlDecode('&lt;div&gt;')).toBe('<div>');
        });

        test('HtmlAttributeEncode should encode attribute values', () => {
            const utility = getUtility();
            expect(utility.HtmlAttributeEncode('value="test"')).toBe('value=&quot;test&quot;');
        });

        test('XmlEncode should encode XML special characters', () => {
            const utility = getUtility();
            expect(utility.XmlEncode('<tag>&value</tag>')).toBe('&lt;tag&gt;&amp;value&lt;/tag&gt;');
        });

        test('XmlAttributeEncode should encode XML attribute values', () => {
            const utility = getUtility();
            expect(utility.XmlAttributeEncode('attr="value\'s"')).toBe('attr=&quot;value&apos;s&quot;');
        });
    });

    // =========================================================================
    // UTILITY METHODS TESTS
    // =========================================================================

    describe('Utility Methods', () => {
        test('LearningPathAttributeName should return attribute name', () => {
            const utility = getUtility();
            expect(utility.LearningPathAttributeName).toBe('learningPath');
        });

        test('PageContext should return page context object', () => {
            const utility = getUtility();
            expect(utility.PageContext).toEqual({ input: {} });
        });

        test('AdvancedConfigSetting should return config value', () => {
            const utility = getUtility();
            expect(utility.AdvancedConfigSetting('MaxChildIncidentNumber')).toBe(10);
        });

        test('PrependOrgName should prepend org name to path', () => {
            const utility = getUtility();
            expect(utility.PrependOrgName('/api/data')).toBe('/TestOrg/api/data');
        });

        test('WebResourceUrl should return web resource URL', () => {
            const utility = getUtility();
            expect(utility.WebResourceUrl('my_webresource.js')).toBe('/webresources/my_webresource.js');
        });

        test('Resource should return resource string', () => {
            const utility = getUtility();
            expect(utility.Resource('SaveButton')).toBe('Resource: SaveButton');
        });

        test('ResourceString should return resource string for specific web resource', () => {
            const utility = getUtility();
            expect(utility.ResourceString('my_resx.js', 'CancelButton')).toBe('Resource: CancelButton');
        });

        test('CloseProgressIndicator should be callable', () => {
            const utility = getUtility();
            expect(() => utility.CloseProgressIndicator()).not.toThrow();
        });

        test('ShowProgressIndicator should be callable', () => {
            const utility = getUtility();
            expect(() => utility.ShowProgressIndicator('Loading...')).not.toThrow();
        });

        test('LoadPanel should be callable', () => {
            const utility = getUtility();
            expect(() => utility.LoadPanel('/panel.html', 'Panel Title')).not.toThrow();
        });

        test('RefreshParentGrid should be callable', () => {
            const utility = getUtility();
            expect(() => utility.RefreshParentGrid({ entityType: 'account' })).not.toThrow();
        });
    });

    // =========================================================================
    // ASYNC UTILITY METHODS TESTS (Promise-based)
    // =========================================================================

    describe('Async Utility Methods (Promise-based)', () => {
        test('CurrentAppName should return app name as Promise', async () => {
            const utility = getUtility();
            const result = await utility.CurrentAppName();
            expect(result).toBe('Test App');
        });

        test('CurrentAppProperties should return app properties as Promise', async () => {
            const utility = getUtility();
            const result = await utility.CurrentAppProperties();
            expect(result.appId).toBe('app1');
            expect(result.displayName).toBe('Test App');
        });

        test('AllowedStatusTransitions should return transitions as Promise', async () => {
            const utility = getUtility();
            const result = await utility.AllowedStatusTransitions('account', 0);
            expect(result).toEqual([1, 2, 3]);
        });

        test('EntityMetadata should return metadata as Promise', async () => {
            const utility = getUtility();
            const result = await utility.EntityMetadata('account');
            expect(result.LogicalName).toBe('account');
        });

        test('InvokeProcessAction should return result as Promise', async () => {
            const utility = getUtility();
            const result = await utility.InvokeProcessAction('MyAction', { param1: 'value1' });
            expect(result.result).toBe('success');
        });

        test('LookupObjects should return lookup result as Promise', async () => {
            const utility = getUtility();
            const result = await utility.LookupObjects({ entityTypes: ['account'] });
            expect(result).toEqual([]);
        });
    });

    // =========================================================================
    // ASYNC UTILITY METHODS TESTS (Callback-based)
    // =========================================================================

    describe('Async Utility Methods (Callback-based)', () => {
        test('CurrentAppName should call successCallback', (done) => {
            const utility = getUtility();
            utility.CurrentAppName(
                (result: string) => {
                    expect(result).toBe('Test App');
                    done();
                },
                (error: any) => {
                    done(error);
                }
            );
        });

        test('AllowedStatusTransitions should call successCallback', (done) => {
            const utility = getUtility();
            utility.AllowedStatusTransitions(
                'account',
                0,
                (result: number[]) => {
                    expect(result).toEqual([1, 2, 3]);
                    done();
                },
                (error: any) => {
                    done(error);
                }
            );
        });

        test('EntityMetadata should call successCallback', (done) => {
            const utility = getUtility();
            utility.EntityMetadata(
                'account',
                ['name'],
                (result: any) => {
                    expect(result.LogicalName).toBe('account');
                    done();
                },
                (error: any) => {
                    done(error);
                }
            );
        });
    });

    // =========================================================================
    // NAVIGATION METHODS TESTS
    // =========================================================================

    describe('Navigation Methods', () => {
        test('NavigateTo should return Promise when no callback provided', async () => {
            const utility = getUtility();
            const result = await utility.NavigateTo(
                { pageType: 'entityrecord', entityName: 'account' },
                { target: 2 }
            );
            expect(result).toBeUndefined();
        });

        test('OpenAlertDialog should return Promise when no callback provided', async () => {
            const utility = getUtility();
            const result = await utility.OpenAlertDialog(
                { text: 'Alert message', title: 'Alert' },
                { height: 200, width: 400 }
            );
            expect(result).toBeUndefined();
        });

        test('OpenConfirmDialog should return Promise with confirmed result', async () => {
            const utility = getUtility();
            const result = await utility.OpenConfirmDialog(
                { text: 'Confirm?', title: 'Confirm' },
                { height: 200, width: 400 }
            );
            expect(result.confirmed).toBe(true);
        });

        test('OpenErrorDialog should return Promise when no callback provided', async () => {
            const utility = getUtility();
            const result = await utility.OpenErrorDialog({ message: 'Error occurred' });
            expect(result).toBeUndefined();
        });

        test('OpenForm should return Promise with saved entity reference', async () => {
            const utility = getUtility();
            const result = await utility.OpenForm(
                { entityName: 'account', entityId: '00000000-0000-0000-0000-000000000001' },
                {}
            );
            expect(result.savedEntityReference).toEqual([]);
        });

        test('OpenUrl should be callable', () => {
            const utility = getUtility();
            expect(() => utility.OpenUrl('https://example.com')).not.toThrow();
        });

        test('OpenWebResource should be callable', () => {
            const utility = getUtility();
            expect(() => utility.OpenWebResource('my_webresource.html')).not.toThrow();
        });

        test('OpenFile should be callable', () => {
            const utility = getUtility();
            expect(() => utility.OpenFile({ fileContent: 'base64', fileName: 'test.txt' })).not.toThrow();
        });
    });

    // =========================================================================
    // APP NOTIFICATION METHODS TESTS
    // =========================================================================

    describe('App Notification Methods', () => {
        test('AddGlobalNotification should return Promise with notification ID', async () => {
            const utility = getUtility();
            const result = await utility.AddGlobalNotification({
                type: 2,
                level: 1,
                message: 'Test notification'
            });
            expect(result).toBe('notification-id');
        });

        test('ClearGlobalNotification should return Promise', async () => {
            const utility = getUtility();
            const result = await utility.ClearGlobalNotification('notification-id');
            expect(result).toBeUndefined();
        });

        test('AddGlobalNotification with callback should call successCallback', (done) => {
            const utility = getUtility();
            utility.AddGlobalNotification(
                { type: 2, level: 1, message: 'Test' },
                (id: string) => {
                    expect(id).toBe('notification-id');
                    done();
                },
                (error: any) => {
                    done(error);
                }
            );
        });
    });

    // =========================================================================
    // DEVICE METHODS TESTS
    // =========================================================================

    describe('Device Methods', () => {
        test('BarcodeValue should return barcode as Promise', async () => {
            const utility = getUtility();
            const result = await utility.BarcodeValue();
            expect(result).toBe('barcode123');
        });

        test('CaptureAudio should return audio as Promise', async () => {
            const utility = getUtility();
            const result = await utility.CaptureAudio();
            expect(result.fileContent).toBe('base64audio');
        });

        test('CaptureImage should return image as Promise', async () => {
            const utility = getUtility();
            const result = await utility.CaptureImage({ width: 100, height: 100 });
            expect(result.fileContent).toBe('base64image');
        });

        test('CaptureVideo should return video as Promise', async () => {
            const utility = getUtility();
            const result = await utility.CaptureVideo();
            expect(result.fileContent).toBe('base64video');
        });

        test('CurrentPosition should return coordinates as Promise', async () => {
            const utility = getUtility();
            const result = await utility.CurrentPosition();
            expect(result.coords.latitude).toBe(0);
            expect(result.coords.longitude).toBe(0);
        });

        test('PickFile should return files as Promise', async () => {
            const utility = getUtility();
            const result = await utility.PickFile({});
            expect(result.length).toBe(1);
            expect(result[0].fileContent).toBe('base64file');
        });
    });

    // =========================================================================
    // SPECIAL METHOD TESTS
    // =========================================================================

    describe('Special Methods', () => {
        test('EntityMainFormDescriptor should return form descriptor', () => {
            const utility = getUtility();
            const result = utility.EntityMainFormDescriptor('account', '00000000-0000-0000-0000-000000000001');
            expect(result.formId).toBe('00000000-0000-0000-0000-000000000001');
        });
    });
});
