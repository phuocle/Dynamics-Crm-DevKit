/**
 * Unit Tests for devkit.ts - Utility Loading
 * Test file: Account.Test07.utility.test.ts
 *
 * Coverage targets:
 * - loadUtility() function
 * - Utility Client, OrganizationSettings, UserSettings properties
 * - Various utility methods (NavigateTo, OpenForm, etc.)
 */
import { XrmMockGenerator } from 'xrm-mock';
import { FormBase } from '../../lib/devkit';

// Global setup
let mockGlobalContext: any;

describe('devkit.ts - Utility Loading', () => {
    beforeEach(() => {
        (global as any).window = (global as any).window || {};
        XrmMockGenerator.initialise();
        (global as any).window.Xrm = (global as any).Xrm;

        mockGlobalContext = {
            client: {
                getClient: () => 'Web',
                getClientState: () => 'Online',
                getFormFactor: () => 1,
                isNetworkAvailable: () => true,
                isOffline: () => false
            },
            organizationSettings: {
                attributes: { attr1: 'value1' },
                baseCurrency: { id: 'USD', name: 'US Dollar' },
                baseCurrencyId: 'usd-guid',
                defaultCountryCode: 'US',
                fullNameConventionCode: 0,
                isAutoSaveEnabled: true,
                isTrialOrganization: false,
                languageId: 1033,
                organizationExpiryDate: new Date('2030-01-01'),
                organizationId: 'org-guid',
                uniqueName: 'TestOrg',
                useSkypeProtocol: false
            },
            userSettings: {
                dateFormattingInfo: { format: 'MM/dd/yyyy' },
                defaultDashboardId: 'dash-guid',
                isGuidedHelpEnabled: true,
                isHighContrastEnabled: false,
                isRTL: false,
                languageId: 1033,
                roles: { get: () => [{ id: 'role-1', name: 'Admin' }] },
                securityRolePrivileges: ['priv1', 'priv2'],
                securityRoles: ['role1', 'role2'],
                getTimeZoneOffsetMinutes: () => -420,
                transactionCurrency: { id: 'currency-id', name: 'USD' },
                transactionCurrencyId: 'currency-guid',
                userId: 'user-guid',
                userName: 'testuser'
            },
            getClientUrl: () => 'https://test.crm.dynamics.com',
            getCurrentAppUrl: () => 'https://test.crm.dynamics.com/main.aspx',
            isOnPremises: () => false,
            getVersion: () => '9.2.0.0',
            getCurrentAppName: () => Promise.resolve('Test App'),
            getCurrentAppProperties: () => Promise.resolve({ appId: 'app1', displayName: 'Test App' }),
            getAdvancedConfigSetting: (setting: string) => setting === 'MaxChildIncidentNumber' ? 10 : 5,
            prependOrgName: (path: string) => `/TestOrg${path}`,
            getWebResourceUrl: (name: string) => `/webresources/${name}`
        };

        (Xrm.Utility as any).getGlobalContext = () => mockGlobalContext;
        (Xrm as any).WebApi = {
            createRecord: jest.fn().mockResolvedValue({ id: 'new-id' }),
            deleteRecord: jest.fn().mockResolvedValue({ id: 'deleted-id' }),
            updateRecord: jest.fn().mockResolvedValue({ id: 'updated-id' }),
            retrieveRecord: jest.fn().mockResolvedValue({ name: 'Test' }),
            retrieveMultipleRecords: jest.fn().mockResolvedValue({ entities: [] }),
            execute: jest.fn(),
            executeMultiple: jest.fn(),
            online: { execute: jest.fn(), executeMultiple: jest.fn() },
            offline: { isAvailable: jest.fn() }
        };
        (Xrm as any).Encoding = {
            htmlAttributeEncode: (a: string) => `htmlAttr:${a}`,
            htmlDecode: (a: string) => `decoded:${a}`,
            htmlEncode: (a: string) => `encoded:${a}`,
            xmlAttributeEncode: (a: string) => `xmlAttr:${a}`,
            xmlEncode: (a: string) => `xml:${a}`
        };
        (Xrm as any).Navigation = {
            navigateTo: jest.fn().mockResolvedValue(undefined),
            openAlertDialog: jest.fn().mockResolvedValue(undefined),
            openConfirmDialog: jest.fn().mockResolvedValue({ confirmed: true }),
            openErrorDialog: jest.fn().mockResolvedValue(undefined),
            openForm: jest.fn().mockResolvedValue({ savedEntityReference: [] }),
            openFile: jest.fn(),
            openUrl: jest.fn(),
            openWebResource: jest.fn()
        };
        (Xrm as any).App = {
            addGlobalNotification: jest.fn().mockResolvedValue('notification-id'),
            clearGlobalNotification: jest.fn().mockResolvedValue(undefined),
            sidePanes: { state: 0, createPane: () => Promise.resolve(), getPane: () => null, getAllPanes: () => [], getSelectedPane: () => null }
        };
        (Xrm as any).Device = {
            captureAudio: jest.fn().mockResolvedValue({ fileContent: 'audio' }),
            captureImage: jest.fn().mockResolvedValue({ fileContent: 'image' }),
            captureVideo: jest.fn().mockResolvedValue({ fileContent: 'video' }),
            getBarcodeValue: jest.fn().mockResolvedValue('barcode-123'),
            getCurrentPosition: jest.fn().mockResolvedValue({ coords: { latitude: 0, longitude: 0 } }),
            pickFile: jest.fn().mockResolvedValue([{ fileContent: 'file' }])
        };
        (Xrm as any).Panel = { loadPanel: jest.fn() };
        (Xrm as any).Copilot = { executeEvent: () => Promise.resolve(), executePrompt: () => Promise.resolve() };
        (Xrm.Utility as any).closeProgressIndicator = jest.fn();
        (Xrm.Utility as any).showProgressIndicator = jest.fn();
        (Xrm.Utility as any).getLearningPathAttributeName = () => 'learningpath';
        (Xrm.Utility as any).getPageContext = () => ({ pageType: 'entityrecord' });
        (Xrm.Utility as any).getAllowedStatusTransitions = jest.fn().mockResolvedValue([1, 2, 3]);
        (Xrm.Utility as any).getEntityMetadata = jest.fn().mockResolvedValue({ LogicalName: 'account' });
        (Xrm.Utility as any).invokeProcessAction = jest.fn().mockResolvedValue({ OutputArguments: {} });
        (Xrm.Utility as any).lookupObjects = jest.fn().mockResolvedValue([{ id: 'lookup-id' }]);
        (Xrm.Utility as any).refreshParentGrid = jest.fn();
        (Xrm.Utility as any).getResourceString = (webResource: string, key: string) => `${webResource}:${key}`;
        (Xrm.Utility as any).getEntityMainFormDescriptor = jest.fn().mockReturnValue({ formId: 'form-1' });
    });

    // Helper: Create a minimal formContext
    function createFormContext() {
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
            getControl: () => null,
            getAttribute: () => null,
            getFormContext: function () { return this; }
        };
    }

    describe('loadUtility', () => {
        test('should expose Utility on FormBase', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test_webresource', {});

            expect(form.Utility).toBeDefined();
        });

        // Client properties
        test('Client.ClientName should return client name', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            expect(form.Utility.Client.ClientName).toBe('Web');
        });

        test('Client.ClientState should return client state', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            expect(form.Utility.Client.ClientState).toBe('Online');
        });

        test('Client.FormFactor should return form factor', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            expect(form.Utility.Client.FormFactor).toBe(1);
        });

        test('Client.IsNetworkAvailable should return network availability', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            expect(form.Utility.Client.IsNetworkAvailable).toBe(true);
        });

        test('Client.IsOffline should return offline status', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            expect(form.Utility.Client.IsOffline).toBe(false);
        });

        // Global context properties
        test('ClientUrl should return client URL', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            expect(form.Utility.ClientUrl).toBe('https://test.crm.dynamics.com');
        });

        test('CurrentAppUrl should return current app URL', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            expect(form.Utility.CurrentAppUrl).toBe('https://test.crm.dynamics.com/main.aspx');
        });

        test('IsOnPremises should return on-premises status', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            expect(form.Utility.IsOnPremises).toBe(false);
        });

        test('Version should return version', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            expect(form.Utility.Version).toBe('9.2.0.0');
        });

        test('LearningPathAttributeName should return learning path attribute name', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            expect(form.Utility.LearningPathAttributeName).toBe('learningpath');
        });

        test('PageContext should return page context', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            expect(form.Utility.PageContext).toEqual({ pageType: 'entityrecord' });
        });

        // Organization settings
        test('OrganizationSettings properties should be accessible', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const orgSettings = form.Utility.OrganizationSettings;
            expect(orgSettings.Attributes).toEqual({ attr1: 'value1' });
            expect(orgSettings.BaseCurrency).toEqual({ id: 'USD', name: 'US Dollar' });
            expect(orgSettings.BaseCurrencyId).toBe('usd-guid');
            expect(orgSettings.DefaultCountryCode).toBe('US');
            expect(orgSettings.FullNameConventionCode).toBe(0);
            expect(orgSettings.IsAutoSaveEnabled).toBe(true);
            expect(orgSettings.IsTrialOrganization).toBe(false);
            expect(orgSettings.LanguageId).toBe(1033);
            expect(orgSettings.OrganizationId).toBe('org-guid');
            expect(orgSettings.UniqueName).toBe('TestOrg');
            expect(orgSettings.UseSkypeProtocol).toBe(false);
        });

        // User settings
        test('UserSettings properties should be accessible', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const userSettings = form.Utility.UserSettings;
            expect(userSettings.DateFormattingInfo).toEqual({ format: 'MM/dd/yyyy' });
            expect(userSettings.DefaultDashboardId).toBe('dash-guid');
            expect(userSettings.IsGuidedHelpEnabled).toBe(true);
            expect(userSettings.IsHighContrastEnabled).toBe(false);
            expect(userSettings.IsRTL).toBe(false);
            expect(userSettings.LanguageId).toBe(1033);
            expect(userSettings.SecurityRolePrivileges).toEqual(['priv1', 'priv2']);
            expect(userSettings.SecurityRoles).toEqual(['role1', 'role2']);
            expect(userSettings.TimeZoneOffsetMinutes).toBe(-420);
            expect(userSettings.TransactionCurrencyId).toBe('currency-guid');
            expect(userSettings.UserId).toBe('user-guid');
            expect(userSettings.UserName).toBe('testuser');
        });

        // Utility methods
        test('AddGlobalNotification should call Xrm.App.addGlobalNotification', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const notification = { type: 2 as any, level: 1 as any, message: 'Test' };
            const result = await form.Utility.AddGlobalNotification(notification);
            expect((Xrm as any).App.addGlobalNotification).toHaveBeenCalledWith(notification);
            expect(result).toBe('notification-id');
        });

        test('AddGlobalNotification with callback should invoke callback', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const successCallback = jest.fn();
            form.Utility.AddGlobalNotification({ type: 2 as any, level: 1 as any, message: 'Test' }, successCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(successCallback).toHaveBeenCalledWith('notification-id');
        });

        test('ClearGlobalNotification should call Xrm.App.clearGlobalNotification', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            await form.Utility.ClearGlobalNotification('notification-id');
            expect((Xrm as any).App.clearGlobalNotification).toHaveBeenCalledWith('notification-id');
        });

        test('ClearGlobalNotification with callback should invoke callback', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const successCallback = jest.fn();
            form.Utility.ClearGlobalNotification('notification-id', successCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(successCallback).toHaveBeenCalled();
        });

        test('AdvancedConfigSetting should return config setting', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            expect(form.Utility.AdvancedConfigSetting('MaxChildIncidentNumber')).toBe(10);
        });

        test('AllowedStatusTransitions should call Xrm.Utility.getAllowedStatusTransitions', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const result = await form.Utility.AllowedStatusTransitions('account', 0);
            expect((Xrm.Utility as any).getAllowedStatusTransitions).toHaveBeenCalledWith('account', 0);
            expect(result).toEqual([1, 2, 3]);
        });

        test('AllowedStatusTransitions with callback should invoke callback', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const successCallback = jest.fn();
            form.Utility.AllowedStatusTransitions('account', 0, successCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(successCallback).toHaveBeenCalledWith([1, 2, 3]);
        });

        // Device methods
        test('BarcodeValue should call Xrm.Device.getBarcodeValue', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const result = await form.Utility.BarcodeValue();
            expect((Xrm as any).Device.getBarcodeValue).toHaveBeenCalled();
            expect(result).toBe('barcode-123');
        });

        test('BarcodeValue with callback should invoke callback', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const successCallback = jest.fn();
            form.Utility.BarcodeValue(successCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(successCallback).toHaveBeenCalledWith('barcode-123');
        });

        test('CaptureAudio should call Xrm.Device.captureAudio', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const result = await form.Utility.CaptureAudio();
            expect((Xrm as any).Device.captureAudio).toHaveBeenCalled();
            expect(result).toEqual({ fileContent: 'audio' });
        });

        test('CaptureAudio with callback should invoke callback', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const successCallback = jest.fn();
            form.Utility.CaptureAudio(successCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(successCallback).toHaveBeenCalledWith({ fileContent: 'audio' });
        });

        test('CaptureImage should call Xrm.Device.captureImage', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const imageOptions = { allowEdit: true };
            const result = await form.Utility.CaptureImage(imageOptions);
            expect((Xrm as any).Device.captureImage).toHaveBeenCalledWith(imageOptions);
            expect(result).toEqual({ fileContent: 'image' });
        });

        test('CaptureImage with callback should invoke callback', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const successCallback = jest.fn();
            form.Utility.CaptureImage({}, successCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(successCallback).toHaveBeenCalledWith({ fileContent: 'image' });
        });

        test('CaptureVideo should call Xrm.Device.captureVideo', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const result = await form.Utility.CaptureVideo();
            expect((Xrm as any).Device.captureVideo).toHaveBeenCalled();
            expect(result).toEqual({ fileContent: 'video' });
        });

        test('CaptureVideo with callback should invoke callback', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const successCallback = jest.fn();
            form.Utility.CaptureVideo(successCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(successCallback).toHaveBeenCalledWith({ fileContent: 'video' });
        });

        test('CurrentPosition should call Xrm.Device.getCurrentPosition', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const result = await form.Utility.CurrentPosition();
            expect((Xrm as any).Device.getCurrentPosition).toHaveBeenCalled();
            expect(result).toEqual({ coords: { latitude: 0, longitude: 0 } });
        });

        test('CurrentPosition with callback should invoke callback', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const successCallback = jest.fn();
            form.Utility.CurrentPosition(successCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(successCallback).toHaveBeenCalled();
        });

        test('PickFile should call Xrm.Device.pickFile', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const options = { allowMultipleFiles: true };
            const result = await form.Utility.PickFile(options);
            expect((Xrm as any).Device.pickFile).toHaveBeenCalledWith(options);
            expect(result).toEqual([{ fileContent: 'file' }]);
        });

        test('PickFile with callback should invoke callback', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const successCallback = jest.fn();
            form.Utility.PickFile({}, successCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(successCallback).toHaveBeenCalledWith([{ fileContent: 'file' }]);
        });

        // Progress indicator methods
        test('ShowProgressIndicator should call Xrm.Utility.showProgressIndicator', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            form.Utility.ShowProgressIndicator('Loading...');
            expect((Xrm.Utility as any).showProgressIndicator).toHaveBeenCalledWith('Loading...');
        });

        test('CloseProgressIndicator should call Xrm.Utility.closeProgressIndicator', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            form.Utility.CloseProgressIndicator();
            expect((Xrm.Utility as any).closeProgressIndicator).toHaveBeenCalled();
        });

        // App name and properties
        test('CurrentAppName should call getGlobalContext.getCurrentAppName', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const result = await form.Utility.CurrentAppName();
            expect(result).toBe('Test App');
        });

        test('CurrentAppName with callback should invoke callback', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const successCallback = jest.fn();
            form.Utility.CurrentAppName(successCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(successCallback).toHaveBeenCalledWith('Test App');
        });

        test('CurrentAppProperties should call getGlobalContext.getCurrentAppProperties', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const result = await form.Utility.CurrentAppProperties();
            expect(result).toEqual({ appId: 'app1', displayName: 'Test App' });
        });

        test('CurrentAppProperties with callback should invoke callback', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const successCallback = jest.fn();
            form.Utility.CurrentAppProperties(successCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(successCallback).toHaveBeenCalledWith({ appId: 'app1', displayName: 'Test App' });
        });

        // Encoding methods
        test('HtmlAttributeEncode should call Xrm.Encoding.htmlAttributeEncode', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            expect(form.Utility.HtmlAttributeEncode('test')).toBe('htmlAttr:test');
        });

        test('HtmlDecode should call Xrm.Encoding.htmlDecode', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            expect(form.Utility.HtmlDecode('test')).toBe('decoded:test');
        });

        test('HtmlEncode should call Xrm.Encoding.htmlEncode', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            expect(form.Utility.HtmlEncode('test')).toBe('encoded:test');
        });

        test('XmlAttributeEncode should call Xrm.Encoding.xmlAttributeEncode', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            expect(form.Utility.XmlAttributeEncode('test')).toBe('xmlAttr:test');
        });

        test('XmlEncode should call Xrm.Encoding.xmlEncode', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            expect(form.Utility.XmlEncode('test')).toBe('xml:test');
        });

        // Entity and form methods
        test('EntityMetadata should call Xrm.Utility.getEntityMetadata', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const result = await form.Utility.EntityMetadata('account', ['name', 'accountid']);
            expect((Xrm.Utility as any).getEntityMetadata).toHaveBeenCalledWith('account', ['name', 'accountid']);
            expect(result).toEqual({ LogicalName: 'account' });
        });

        test('EntityMetadata with callback should invoke callback', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const successCallback = jest.fn();
            form.Utility.EntityMetadata('account', [], successCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(successCallback).toHaveBeenCalledWith({ LogicalName: 'account' });
        });

        test('EntityMainFormDescriptor should call Xrm.Utility.getEntityMainFormDescriptor', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const result = form.Utility.EntityMainFormDescriptor('account', 'form-123');
            expect((Xrm.Utility as any).getEntityMainFormDescriptor).toHaveBeenCalledWith('account', 'form-123');
            expect(result).toEqual({ formId: 'form-1' });
        });

        test('InvokeProcessAction should call Xrm.Utility.invokeProcessAction', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const result = await form.Utility.InvokeProcessAction('TestAction', { input: 'value' });
            expect((Xrm.Utility as any).invokeProcessAction).toHaveBeenCalledWith('TestAction', { input: 'value' });
            expect(result).toEqual({ OutputArguments: {} });
        });

        test('InvokeProcessAction with callback should invoke callback', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const successCallback = jest.fn();
            form.Utility.InvokeProcessAction('TestAction', {}, successCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(successCallback).toHaveBeenCalledWith({ OutputArguments: {} });
        });

        test('LookupObjects should call Xrm.Utility.lookupObjects', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const lookupOptions = { entityTypes: ['account'] };
            const result = await form.Utility.LookupObjects(lookupOptions);
            expect((Xrm.Utility as any).lookupObjects).toHaveBeenCalledWith(lookupOptions);
            expect(result).toEqual([{ id: 'lookup-id' }]);
        });

        test('LookupObjects with callback should invoke callback', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const successCallback = jest.fn();
            form.Utility.LookupObjects({ entityTypes: ['account'] }, successCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(successCallback).toHaveBeenCalledWith([{ id: 'lookup-id' }]);
        });

        // Navigation methods
        test('NavigateTo should call Xrm.Navigation.navigateTo', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const pageInput = { pageType: 'entityrecord' as 'entityrecord', entityName: 'account' };
            const navOptions = { target: 1 as 1 };
            await form.Utility.NavigateTo(pageInput, navOptions);
            expect((Xrm as any).Navigation.navigateTo).toHaveBeenCalledWith(pageInput, navOptions);
        });

        test('NavigateTo with callback should invoke callback', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const successCallback = jest.fn();
            form.Utility.NavigateTo({ pageType: 'entitylist', entityName: 'account' }, { target: 1 as 1 }, successCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(successCallback).toHaveBeenCalled();
        });

        test('OpenAlertDialog should call Xrm.Navigation.openAlertDialog', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const alertStrings = { text: 'Hello' };
            const alertOptions = { height: 200 };
            await form.Utility.OpenAlertDialog(alertStrings, alertOptions);
            expect((Xrm as any).Navigation.openAlertDialog).toHaveBeenCalledWith(alertStrings, alertOptions);
        });

        test('OpenAlertDialog with callback should invoke callback', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const closeCallback = jest.fn();
            form.Utility.OpenAlertDialog({ text: 'test' }, {}, closeCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(closeCallback).toHaveBeenCalled();
        });

        test('OpenConfirmDialog should call Xrm.Navigation.openConfirmDialog', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const confirmStrings = { text: 'Are you sure?' };
            const confirmOptions = { height: 200 };
            const result = await form.Utility.OpenConfirmDialog(confirmStrings, confirmOptions);
            expect((Xrm as any).Navigation.openConfirmDialog).toHaveBeenCalledWith(confirmStrings, confirmOptions);
            expect(result).toEqual({ confirmed: true });
        });

        test('OpenConfirmDialog with callback should invoke callback', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const successCallback = jest.fn();
            form.Utility.OpenConfirmDialog({ text: 'test' }, {}, successCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(successCallback).toHaveBeenCalledWith({ confirmed: true });
        });

        test('OpenErrorDialog should call Xrm.Navigation.openErrorDialog', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const errorOptions = { message: 'Error occurred' };
            await form.Utility.OpenErrorDialog(errorOptions);
            expect((Xrm as any).Navigation.openErrorDialog).toHaveBeenCalledWith(errorOptions);
        });

        test('OpenErrorDialog with callback should invoke callback', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const successCallback = jest.fn();
            form.Utility.OpenErrorDialog({ message: 'test' }, successCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(successCallback).toHaveBeenCalled();
        });

        test('OpenForm should call Xrm.Navigation.openForm', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const entityFormOptions = { entityName: 'account' };
            const formParameters = { name: 'Test' };
            const result = await form.Utility.OpenForm(entityFormOptions, formParameters);
            expect((Xrm as any).Navigation.openForm).toHaveBeenCalledWith(entityFormOptions, formParameters);
            expect(result).toEqual({ savedEntityReference: [] });
        });

        test('OpenForm with callback should invoke callback', async () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const successCallback = jest.fn();
            form.Utility.OpenForm({ entityName: 'account' }, {}, successCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(successCallback).toHaveBeenCalledWith({ savedEntityReference: [] });
        });

        test('OpenFile should call Xrm.Navigation.openFile', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const file = { fileContent: 'base64content', fileName: 'test.txt', fileSize: 1024, mimeType: 'text/plain' };
            form.Utility.OpenFile(file, { openMode: 1 });
            expect((Xrm as any).Navigation.openFile).toHaveBeenCalledWith(file, { openMode: 1 });
        });

        test('OpenUrl should call Xrm.Navigation.openUrl', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            form.Utility.OpenUrl('https://example.com', { height: 400 });
            expect((Xrm as any).Navigation.openUrl).toHaveBeenCalledWith('https://example.com', { height: 400 });
        });

        test('OpenWebResource should call Xrm.Navigation.openWebResource', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            form.Utility.OpenWebResource('test_webresource', { height: 400 }, 'param=value');
            expect((Xrm as any).Navigation.openWebResource).toHaveBeenCalledWith('test_webresource', { height: 400 }, 'param=value');
        });

        // Panel and other methods
        test('LoadPanel should call Xrm.Panel.loadPanel', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            form.Utility.LoadPanel('https://example.com/panel', 'Panel Title');
            expect((Xrm as any).Panel.loadPanel).toHaveBeenCalledWith('https://example.com/panel', 'Panel Title');
        });

        test('PrependOrgName should call getGlobalContext.prependOrgName', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            expect(form.Utility.PrependOrgName('/api/data')).toBe('/TestOrg/api/data');
        });

        test('RefreshParentGrid should call Xrm.Utility.refreshParentGrid', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            const lookupOptions = { entityType: 'account', id: 'id' };
            form.Utility.RefreshParentGrid(lookupOptions);
            expect((Xrm.Utility as any).refreshParentGrid).toHaveBeenCalledWith(lookupOptions);
        });

        test('Resource should call Xrm.Utility.getResourceString with default web resource', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test_webresource', {});

            expect(form.Utility.Resource('key1')).toBe('test_webresource:key1');
        });

        test('ResourceString should call Xrm.Utility.getResourceString', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            expect(form.Utility.ResourceString('custom_webresource', 'key1')).toBe('custom_webresource:key1');
        });

        test('WebResourceUrl should call getGlobalContext.getWebResourceUrl', () => {
            const formContext = createFormContext();
            const executionContext = { getFormContext: () => formContext };
            const form = new FormBase(executionContext, 'test', {});

            expect(form.Utility.WebResourceUrl('test_wr')).toBe('/webresources/test_wr');
        });
    });
});
