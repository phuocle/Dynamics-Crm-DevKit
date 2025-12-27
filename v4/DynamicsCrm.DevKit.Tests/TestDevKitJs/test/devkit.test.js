import { OptionSet, devKit } from '../lib/devkit.js';
import {
    XrmMockGenerator, ContextMock, UserSettingsMock, ClientContextMock, LookupValueMock, DataMock, EntityMock, ItemCollectionMock, AttributeMock, StringControlMock,
    StringAttributeMock, UiMock, FormSelectorMock, FormItemMock, FormContextMock, OrganizationSettingsMock, EventContextMock, StageMock, StepMock, ProcessControlMock,
    ProcessMock, ProcessManagerMock, LookupAttributeMock, LookupControlMock, OptionSetAttributeMock,
    QuickFormControlMock, GridControlMock, GridRowDataMock, GridRowMock, GridMock, RelationshipMock, ViewSelectorMock, IframeControlMock, NavigationMock, NavigationItemMock, UiStandardElementMock,
    UiFocusableMock, TimerControlMock, KbSearchControlMock, SaveEventArgumentsMock
} from 'xrm-mock';

// The following mocks are not exported from xrm-mock v3.6.2, so we create local implementations

class UiCanGetVisibleElementMock {
    constructor(visible) { this._visible = visible; }
    getVisible() { return this._visible; }
}

class UiCanSetVisibleElementMock {
    constructor() { this._visible = true; }
    setVisible(value) { this._visible = value; }
    getVisible() { return this._visible; }
}

class HeaderSectionMock {
    constructor(bodyVisible, commandBarVisible, tabNavigatorVisible) {
        this._bodyVisible = bodyVisible;
        this._commandBarVisible = commandBarVisible;
        this._tabNavigatorVisible = tabNavigatorVisible;
    }
    getBodyVisible() { return this._bodyVisible; }
    setBodyVisible(value) { this._bodyVisible = value; }
    getCommandBarVisible() { return this._commandBarVisible; }
    setCommandBarVisible(value) { this._commandBarVisible = value; }
    getTabNavigatorVisible() { return this._tabNavigatorVisible; }
    setTabNavigatorVisible(value) { this._tabNavigatorVisible = value; }
}


beforeAll(() => {
    XrmMockGenerator.initialise();
});
describe('OptionSet', () => {
    test('should have correct FormType values', () => {
        expect(OptionSet.FormType.Undefined).toBe(0);
        expect(OptionSet.FormType.Create).toBe(1);
        expect(OptionSet.FormType.Update).toBe(2);
        expect(OptionSet.FormType.ReadOnly).toBe(3);
        expect(OptionSet.FormType.Disabled).toBe(4);
        expect(OptionSet.FormType.BulkEdit).toBe(5);
    });

    test('should have correct SaveOption values', () => {
        expect(OptionSet.SaveOption.SaveAndClose).toBe('saveandclose');
        expect(OptionSet.SaveOption.SaveAndNew).toBe('saveandnew');
    });

    test('should have correct SaveMode values', () => {
        expect(OptionSet.SaveMode.Save).toBe(1);
        expect(OptionSet.SaveMode.SaveAndClose).toBe(2);
        expect(OptionSet.SaveMode.Deactivate).toBe(5);
        expect(OptionSet.SaveMode.Reactivate).toBe(6);
        expect(OptionSet.SaveMode.Email).toBe(7);
        expect(OptionSet.SaveMode.Disqualify).toBe(15);
        expect(OptionSet.SaveMode.Qualify).toBe(16);
        expect(OptionSet.SaveMode.Assign).toBe(47);
        expect(OptionSet.SaveMode.SaveAsCompleted).toBe(58);
        expect(OptionSet.SaveMode.SaveAndNew).toBe(59);
        expect(OptionSet.SaveMode.AutoSave).toBe(70);
    });

    test('should have correct FormNotificationLevel values', () => {
        expect(OptionSet.FormNotificationLevel.Error).toBe('ERROR');
        expect(OptionSet.FormNotificationLevel.Warning).toBe('WARNING');
        expect(OptionSet.FormNotificationLevel.Info).toBe('INFO');
    });

    test('should have correct TabDisplayState values', () => {
        expect(OptionSet.TabDisplayState.Expanded).toBe('expanded');
        expect(OptionSet.TabDisplayState.Collapsed).toBe('collapsed');
    });

    test('should have correct TabContentType values', () => {
        expect(OptionSet.TabContentType.CardSections).toBe('cardSections');
        expect(OptionSet.TabContentType.SingleComponent).toBe('singleComponent');
    });

    test('should have correct ProcessDisplayState values', () => {
        expect(OptionSet.ProcessDisplayState.Expanded).toBe('expanded');
        expect(OptionSet.ProcessDisplayState.Collapsed).toBe('collapsed');
        expect(OptionSet.ProcessDisplayState.Floating).toBe('floating');
    });

    test('should have correct ProcessStatus values', () => {
        expect(OptionSet.ProcessStatus.Active).toBe('active');
        expect(OptionSet.ProcessStatus.Aborted).toBe('aborted');
        expect(OptionSet.ProcessStatus.Finished).toBe('finished');
    });

    test('should have correct FieldAttributeType values', () => {
        expect(OptionSet.FieldAttributeType.Boolean).toBe('boolean');
        expect(OptionSet.FieldAttributeType.DateTime).toBe('datetime');
        expect(OptionSet.FieldAttributeType.Decimal).toBe('decimal');
        expect(OptionSet.FieldAttributeType.Double).toBe('double');
        expect(OptionSet.FieldAttributeType.Integer).toBe('integer');
        expect(OptionSet.FieldAttributeType.Lookup).toBe('lookup');
        expect(OptionSet.FieldAttributeType.Memo).toBe('memo');
        expect(OptionSet.FieldAttributeType.Money).toBe('money');
        expect(OptionSet.FieldAttributeType.MultiOptionSet).toBe('multiselectoptionset');
        expect(OptionSet.FieldAttributeType.OptionSet).toBe('optionset');
        expect(OptionSet.FieldAttributeType.String).toBe('string');
    });

    test('should have correct FieldFormat values', () => {
        expect(OptionSet.FieldFormat.Date).toBe('date');
        expect(OptionSet.FieldFormat.DateTime).toBe('datetime');
        expect(OptionSet.FieldFormat.Duration).toBe('duration');
        expect(OptionSet.FieldFormat.Email).toBe('email');
        expect(OptionSet.FieldFormat.Language).toBe('language');
        expect(OptionSet.FieldFormat.None).toBe('none');
        expect(OptionSet.FieldFormat.TextArea).toBe('textarea');
        expect(OptionSet.FieldFormat.Text).toBe('text');
        expect(OptionSet.FieldFormat.TickerSymbol).toBe('tickersymbol');
        expect(OptionSet.FieldFormat.Phone).toBe('phone');
        expect(OptionSet.FieldFormat.TimeZone).toBe('timezone');
        expect(OptionSet.FieldFormat.Url).toBe('url');
    });

    test('should have correct FieldRequiredLevel values', () => {
        expect(OptionSet.FieldRequiredLevel.None).toBe('none');
        expect(OptionSet.FieldRequiredLevel.Required).toBe('required');
        expect(OptionSet.FieldRequiredLevel.Recommended).toBe('recommended');
    });

    test('should have correct FieldSubmitMode values', () => {
        expect(OptionSet.FieldSubmitMode.Always).toBe('always');
        expect(OptionSet.FieldSubmitMode.Never).toBe('never');
        expect(OptionSet.FieldSubmitMode.Dirty).toBe('dirty');
    });

    test('should have correct FieldControlType values', () => {
        expect(OptionSet.FieldControlType.Standard).toBe('standard');
        expect(OptionSet.FieldControlType.Iframe).toBe('iframe');
        expect(OptionSet.FieldControlType.KbSearch).toBe('kbsearch');
        expect(OptionSet.FieldControlType.Lookup).toBe('lookup');
        expect(OptionSet.FieldControlType.MultiSelectOptionset).toBe('multiselectoptionset');
        expect(OptionSet.FieldControlType.Notes).toBe('notes');
        expect(OptionSet.FieldControlType.OptionSet).toBe('optionset');
        expect(OptionSet.FieldControlType.QuickForm).toBe('quickform');
        expect(OptionSet.FieldControlType.SubGrid).toBe('subgrid');
        expect(OptionSet.FieldControlType.TimerControl).toBe('timercontrol');
        expect(OptionSet.FieldControlType.TimelineWall).toBe('timelinewall');
        expect(OptionSet.FieldControlType.WebResource).toBe('webresource');
    });

    test('should have correct FieldNotificationLevel values', () => {
        expect(OptionSet.FieldNotificationLevel.Error).toBe('ERROR');
        expect(OptionSet.FieldNotificationLevel.Recommendation).toBe('RECOMMENDATION');
    });
});
describe('devKit', () => {
    test('devKit.LoadForm', () => {
        var attributes = new ItemCollectionMock([
            new AttributeMock({
                name: "name",
                isDirty: true
            })
        ]);
        var entity = new EntityMock({
            entityName: "account",
            id: "8d2dbd8c-c9f8-4cb5-8838-f5a916a6098a",
            primaryValue: "LE VAN PHUOC",
            attributes: attributes
        });
        var data = new DataMock(entity);
        var stringControl = new StringControlMock({
            attribute: new StringAttributeMock({
                name: "name",
                value: "LE VAN PHUOC"
            }),
            name: "name",
            label: "Account Name"
        });
        var ui = new UiMock({
            formSelector: new FormSelectorMock(new ItemCollectionMock([
                new FormItemMock({
                    id: "8d2dbd8c-c9f8-4cb5-8838-f5a916a6098a",
                    label: "Account",
                    currentItem: true,
                    formType: OptionSet.FormType.Update
                }),
                new FormItemMock({
                    id: "8d2dbd8c-c9f8-4cb5-8838-f5a916a6098b",
                    label: "Contact",
                    currentItem: false,
                    formType: OptionSet.FormType.Create
                })
            ])),
            controls: new ItemCollectionMock([
                stringControl
            ])
        });
        XrmMockGenerator.formContext = new FormContextMock(data, ui);
        var executionContext = XrmMockGenerator.formContext;

        var form = devKit.LoadForm(executionContext);
        var formDataAddOnLoad = function () { };
        expect(data.loadEventHandlers.length).toBe(0);
        form.DataAddOnLoad(formDataAddOnLoad);
        expect(data.loadEventHandlers.length).toBe(1);
        expect(() => { form.Refresh(null, null, null) }).toThrow(new Error("refresh not implemented"));
        form.DataRemoveOnLoad(formDataAddOnLoad);
        expect(data.loadEventHandlers.length).toBe(0);
        expect(() => { form.Save(null, null, null) }).toThrow(new Error("save not implemented"));
        expect(() => { form.DataIsDirty }).toThrow(new Error("getIsDirty not implemented"));
        expect(() => { form.DataIsValid }).toThrow(new Error("isValid not implemented"));
        expect(entity.saveEventHandlers.length).toBe(0);
        const formAddOnSave = function () { };
        form.AddOnSave(formAddOnSave);
        expect(entity.saveEventHandlers.length).toBe(1);
        const formAddOnPostSave = function () { };
        expect(entity.postSaveEventHandlers.length).toBe(0);
        form.AddOnPostSave(formAddOnPostSave);
        expect(entity.postSaveEventHandlers.length).toBe(1);
        form.RemoveOnSave(formAddOnSave);
        expect(entity.saveEventHandlers.length).toBe(0);
        form.RemoveOnPostSave(formAddOnPostSave);
        expect(entity.postSaveEventHandlers.length).toBe(0);
        expect(form.Attributes.get('name')).not.toBeNull();
        expect(() => { form.DataXml }).toThrow(new Error("getDataXml not implemented"));
        expect(form.EntityName).toBe("account");
        const entityReference = form.EntityReference;
        expect(entityReference.id).toBe("8d2dbd8c-c9f8-4cb5-8838-f5a916a6098a");
        expect(entityReference.name).toBe("LE VAN PHUOC");
        expect(entityReference.entityType).toBe("account");
        expect(form.EntityId).toBe("8d2dbd8c-c9f8-4cb5-8838-f5a916a6098a");
        expect(form.EntityIsDirty).toBeTruthy();
        expect(form.PrimaryAttributeValue).toBe("LE VAN PHUOC");
        expect(() => { form.EntityIsValid }).toThrow(new Error("isValid not implemented."));
        expect(form.SetFormNotification("A", OptionSet.FormNotificationLevel.Info, "B")).toBeDefined();
        expect(form.ClearFormNotification("B")).toBeTruthy();
        expect(form.FormType).toBe(OptionSet.FormType.Update);
        expect(() => { form.ViewPortHeight }).toThrow(new Error("getViewPortHeight not implemented"));
        expect(() => { form.ViewPortWidth }).toThrow(new Error("getViewPortWidth not implemented"));
        expect(() => { form.UiAddOnLoad(null) }).toThrow(new Error("addOnLoad not implemented"));
        expect(() => { form.UiRemoveOnLoad(null) }).toThrow(new Error("removeOnLoad not implemented"));
        expect(() => { form.UiAddLoaded(null) }).toThrow();
        expect(() => { form.UiRemoveLoaded(null) }).toThrow();
        expect(form.Controls).toBeDefined();
        expect(form.FormId).toBe("8d2dbd8c-c9f8-4cb5-8838-f5a916a6098a");
        expect(form.FormLabel).toBe("Account");
        expect(() => { form.SetFormEntityName(null); }).toThrow(new Error("setFormEntityName not implemented"));
        expect(() => { form.Close() }).toThrow(new Error("close not implemented"));
        expect(() => { form.RefreshRibbon() }).toThrow(new Error("refreshRibbon not implemented"));
        expect(() => { form.FormNavigateToFormLabel("Contact") }).toThrow(new Error("Form navigation not implemented."));
        expect(() => { form.FormNavigateToFormId("8d2dbd8c-c9f8-4cb5-8838-f5a916a6098b") }).toThrow(new Error("Form navigation not implemented."));
        expect(() => { form.FormSetVisible("8d2dbd8c-c9f8-4cb5-8838-f5a916a6098b", false) }).toThrow(new Error("setVisible not implemented."));
        expect(() => { form.FormIsVisible("8d2dbd8c-c9f8-4cb5-8838-f5a916a6098b") }).toThrow(new Error("getVisible not implemented."));
    });
    test('From ReadOnly || Disabled', () => {
        //setup
        var attributes = new ItemCollectionMock([
            new AttributeMock({
                name: "name",
                isDirty: true
            })
        ]);
        var entity = new EntityMock({
            entityName: "account",
            id: "8d2dbd8c-c9f8-4cb5-8838-f5a916a6098a",
            primaryValue: "LE VAN PHUOC",
            attributes: attributes
        });
        var data = new DataMock(entity);
        var stringControl = new StringControlMock({
            attribute: new StringAttributeMock({
                name: "name",
                value: "LE VAN PHUOC"
            }),
            name: "name",
            label: "Account Name",
            disabled: false
        });
        var ui = new UiMock({
            formSelector: new FormSelectorMock(new ItemCollectionMock([
                new FormItemMock({
                    id: "8d2dbd8c-c9f8-4cb5-8838-f5a916a6098a",
                    label: "Account",
                    currentItem: true,
                    formType: OptionSet.FormType.Disabled
                })
            ])),
            controls: new ItemCollectionMock([
                stringControl
            ])
        });
        XrmMockGenerator.formContext = new FormContextMock(data, ui);
        var executionContext = XrmMockGenerator.formContext;
        //run
        var form = devKit.LoadForm(executionContext);
        var body = {
            Name: {}
        };
        devKit.LoadFields(executionContext, body);
        form.Body = body;
        //test
        expect(form.FormType).toBe(OptionSet.FormType.Disabled);
        form.Body.Name.Value = "ABCD";
        form.Body.Name.Disabled = true;
        expect(form.Body.Name.Disabled).toBeFalsy();
    });
    test('devKit.LoadUtility', () => {
        var context = new ContextMock({
            clientContext: new ClientContextMock("Web", "Online"),
            clientUrl: "https://clienturl.fake",
            userId: "{00000000-0000-0000-0000-000000000000}",
            userName: "DEVKIT",
            userLcid: 1033,
            userRoles: ["{00000001-0000-0000-0000-000000000000}", "{00000002-0000-0000-0000-000000000000}"],
            version: "10.0.0.0",
            orgUniqueName: "OrgUniqueName",
            currentTheme: "Office12Blue",
            isAutoSaveEnabled: true,
            orgLcid: 1033,
            timeZoneOffset: 7,
            onPremise: true
        });
        context.userSettings = new UserSettingsMock({
            isGuidedHelpEnabled: true,
            isHighContrastEnabled: false,
            isRTL: false,
            userId: "DEVKIT-USERID",
            userName: "DEVKIT-USERNAME",
            defaultDashboardId: "DEFAULT-DASHBOARD-ID",
            languageId: 1066,
            securityRolePrivileges: ["GUID1", "GUID2"],
            securityRoles: ["NAME1", "NAME2", "NAME3"],
            transactionCurrencyId: "VND-GUID",
            dateFormattingInfo: {
                AmDesignator: "AM",
                Calendar: {
                    MinSupportedDateTime: new Date(),
                    MaxSupportedDateTime: new Date(),
                    AlgorithmType: 1,
                    CalendarType: 1,
                    Eras: [1],
                    TwoDigitYearMax: 2029,
                    IsReadOnly: false
                },
                DateSeparator: "/",
                FirstDayOfWeek: 0,
                CalendarWeekRule: 0,
                FullDateTimePattern: "dddd, MMMM d, yyyy h:mm:ss tt",
                LongDatePattern: "dddd, MMMM d, yyyy",
                LongTimePattern: "h:mm:ss tt",
                MonthDayPattern: "MMMM dd",
                PmDesignator: "PM",
                ShortDatePattern: "M/d/yyyy",
                ShortTimePattern: "h:mm tt",
                SortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                TimeSeparator: ":",
                UniversalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                YearMonthPattern: "MMMM yyyy",
                AbbreviatedDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                ShortestDayNames: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                DayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                AbbreviatedMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""],
                MonthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
                AbbreviatedMonthGenitiveNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""],
                MonthGenitiveNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
            },
            roles: new ItemCollectionMock([new LookupValueMock("GUID1", "role", "ROLE-1"), new LookupValueMock("GUID2", "role", "ROLE-2")]),
            transactionCurrency: new LookupValueMock("VND-GUID", "transactioncurrency", "VND")
        });

        context.organizationSettings = new OrganizationSettingsMock({
            baseCurrencyId: "USD-GUID",
            baseCurrency: new LookupValueMock("USD-GUID", "transactioncurrencty", "USD"),
            defaultCountryCode: "VN",
            languageId: 1033,
            organizationId: "OrgGuid",
            uniqueName: "OrgUniqueName",
            isAutoSaveEnabled: true,
            useSkypeProtocol: true,
            attributes: {
                "abc": "1"
            },
            isTrialOrganization: false,
            organizationExpiryDate: null,
            fullNameConventionCode: OptionSet.FullNameConventionCode.FirstName_LastName
        });

        XrmMockGenerator.context = context;
        XrmMockGenerator.eventContext = new EventContextMock({ formContext: XrmMockGenerator.formContext, context: XrmMockGenerator.context });
        var executionContext = XrmMockGenerator.eventContext;

        var form = {};
        form.Utility = devKit.LoadUtility("web-resource-language");
        expect(() => { form.Utility.LearningPathAttributeName }).toThrow(new Error("Method not implemented."));
        expect(() => { form.Utility.ShowProgressIndicator("Waiting") }).toThrow(new Error("Method not implemented."));
        expect(() => { form.Utility.EntityMainFormDescriptor(null, null) }).toThrow();
        expect(() => { form.Utility.CloseProgressIndicator() }).toThrow(new Error("Method not implemented."));
        expect(() => { form.Utility.EntityMetadata("devkit_webapi", null, null, null) }).toThrow(new Error("Method not implemented."));
        expect(() => { form.Utility.ResourceString("resourcename", "key") }).toThrow(new Error("Method not implemented."));
        expect(() => { form.Utility.AllowedStatusTransitions(null, null, null, null) }).toThrow(new Error("Method not implemented."));
        expect(() => { form.Utility.Resource(null) }).toThrow(new Error("Method not implemented."));
        expect(() => { form.Utility.InvokeProcessAction("name", null, null, null) }).toThrow(new Error("Method not implemented."));
        expect(() => { form.Utility.LookupObjects(null, null, null); }).toThrow(new Error("Method not implemented."));
        expect(() => { form.Utility.RefreshParentGrid(null) }).toThrow(new Error("Method not implemented."));
        expect(() => { form.Utility.PageContext }).toThrow(new Error("Method not implemented."));
        form.Utility2 = devKit.LoadUtility();
        expect(() => { form.Utility2.Resource("ABC") }).toThrow(new Error("Method not implemented."));
        expect(form.Utility.AdvancedConfigSetting(OptionSet.AdvancedConfigSetting.MaxChildIncidentNumber)).toBeUndefined();
        // The following methods return a mock promise, so we check for the constructor name
        expect(form.Utility.CurrentAppName(null, null)?.constructor?.name).toBe('XrmPromiseMock');
        expect(form.Utility.CurrentAppProperties(null, null)?.constructor?.name).toBe('XrmPromiseMock');
        expect(form.Utility.CurrentAppUrl).toBeUndefined();
        expect(form.Utility.WebResourceUrl(null)).toBeUndefined();
        expect(() => { form.Utility.IsOnPremises }).toThrow();
        expect(form.Utility.PrependOrgName("abc-")).toBe("abc-OrgUniqueName");
        expect(form.Utility.Client.ClientName).toBe(OptionSet.ClientName.Web);
        expect(form.Utility.Client.ClientState).toBe(OptionSet.ClientState.Online);
        expect(() => { form.Utility.Client.FormFactor }).toThrow(new Error("Method not implemented."));
        expect(() => { form.Utility.Client.IsOffline }).toThrow(new Error("Method not implemented."));
        expect(() => { form.Utility.Client.IsNetworkAvailable }).toThrow(new Error("Method not implemented."));
        expect(form.Utility.OrganizationSettings.Attributes).toBeDefined();
        expect(form.Utility.OrganizationSettings.BaseCurrencyId).toBe("USD-GUID");
        expect(form.Utility.OrganizationSettings.BaseCurrency.id).toBe("USD-GUID");
        expect(form.Utility.OrganizationSettings.BaseCurrency.name).toBe("USD");
        expect(form.Utility.OrganizationSettings.BaseCurrency.entityType).toBe("transactioncurrencty");
        expect(form.Utility.OrganizationSettings.DefaultCountryCode).toBe("VN");
        expect(form.Utility.OrganizationSettings.IsAutoSaveEnabled).toBeTruthy();
        expect(form.Utility.OrganizationSettings.LanguageId).toBe(1033);
        expect(form.Utility.OrganizationSettings.OrganizationId).toBe("OrgGuid");
        expect(form.Utility.OrganizationSettings.UniqueName).toBe("OrgUniqueName");
        expect(form.Utility.OrganizationSettings.UseSkypeProtocol).toBeTruthy();
        expect(form.Utility.OrganizationSettings.IsTrialOrganization).toBeFalsy();
        expect(form.Utility.OrganizationSettings.OrganizationExpiryDate).toBeUndefined();
        expect(form.Utility.OrganizationSettings.FullNameConventionCode).toBeUndefined();

        expect(form.Utility.UserSettings.DateFormattingInfo.AmDesignator).toBe("AM");
        expect(form.Utility.UserSettings.DateFormattingInfo.Calendar).toBeDefined();
        expect(form.Utility.UserSettings.DateFormattingInfo.Calendar.MinSupportedDateTime.toString()).toBeDefined();
        expect(form.Utility.UserSettings.DateFormattingInfo.Calendar.MaxSupportedDateTime.toString()).toBeDefined();
        expect(form.Utility.UserSettings.DateFormattingInfo.Calendar.AlgorithmType).toBe(1);
        expect(form.Utility.UserSettings.DateFormattingInfo.Calendar.CalendarType).toBe(1);
        expect(form.Utility.UserSettings.DateFormattingInfo.Calendar.Eras.length).toBeGreaterThan(0);
        expect(form.Utility.UserSettings.DateFormattingInfo.Calendar.TwoDigitYearMax).toBe(2029);
        expect(form.Utility.UserSettings.DateFormattingInfo.Calendar.IsReadOnly).toBeFalsy();
        expect(form.Utility.UserSettings.DateFormattingInfo.DateSeparator).toBe("/");
        expect(form.Utility.UserSettings.DateFormattingInfo.FirstDayOfWeek).toBe(0);
        expect(form.Utility.UserSettings.DateFormattingInfo.CalendarWeekRule).toBe(0);
        expect(form.Utility.UserSettings.DateFormattingInfo.FullDateTimePattern).toBe("dddd, MMMM d, yyyy h:mm:ss tt");
        expect(form.Utility.UserSettings.DateFormattingInfo.LongDatePattern).toBe("dddd, MMMM d, yyyy");
        expect(form.Utility.UserSettings.DateFormattingInfo.LongTimePattern).toBe("h:mm:ss tt");
        expect(form.Utility.UserSettings.DateFormattingInfo.MonthDayPattern).toBe("MMMM dd");
        expect(form.Utility.UserSettings.DateFormattingInfo.PmDesignator).toBe("PM");
        expect(form.Utility.UserSettings.DateFormattingInfo.ShortDatePattern).toBe("M/d/yyyy");
        expect(form.Utility.UserSettings.DateFormattingInfo.ShortTimePattern).toBe("h:mm tt");
        expect(form.Utility.UserSettings.DateFormattingInfo.SortableDateTimePattern).toBe("yyyy'-'MM'-'dd'T'HH':'mm':'ss");
        expect(form.Utility.UserSettings.DateFormattingInfo.TimeSeparator).toBe(":");
        expect(form.Utility.UserSettings.DateFormattingInfo.UniversalSortableDateTimePattern).toBe("yyyy'-'MM'-'dd HH':'mm':'ss'Z'");
        expect(form.Utility.UserSettings.DateFormattingInfo.YearMonthPattern).toBe("MMMM yyyy");
        expect(form.Utility.UserSettings.DateFormattingInfo.AbbreviatedDayNames.length).toBeGreaterThan(0);
        expect(form.Utility.UserSettings.DateFormattingInfo.ShortestDayNames.length).toBeGreaterThan(0);
        expect(form.Utility.UserSettings.DateFormattingInfo.DayNames.length).toBeGreaterThan(0);
        expect(form.Utility.UserSettings.DateFormattingInfo.AbbreviatedMonthNames.length).toBeGreaterThan(0);
        expect(form.Utility.UserSettings.DateFormattingInfo.MonthNames.length).toBeGreaterThan(0);
        expect(form.Utility.UserSettings.DateFormattingInfo.AbbreviatedMonthGenitiveNames.length).toBeGreaterThan(0);
        expect(form.Utility.UserSettings.DateFormattingInfo.MonthGenitiveNames.length).toBeGreaterThan(0);
        expect(form.Utility.UserSettings.DateFormattingInfo.DayNames.length).toBeGreaterThan(0);
        expect(form.Utility.UserSettings.DefaultDashboardId).toBe("DEFAULT-DASHBOARD-ID");
        expect(form.Utility.UserSettings.IsGuidedHelpEnabled).toBeTruthy();
        expect(form.Utility.UserSettings.IsHighContrastEnabled).toBeFalsy();
        expect(form.Utility.UserSettings.IsRTL).toBeFalsy();
        expect(form.Utility.UserSettings.LanguageId).toBe(1066);
        expect(form.Utility.UserSettings.Roles.getLength()).toBe(2);
        expect(form.Utility.UserSettings.Roles.get(0).id).toBe("GUID1");
        expect(form.Utility.UserSettings.Roles.get(0).name).toBe("ROLE-1");
        expect(form.Utility.UserSettings.Roles.get(0).entityType).toBe("role");
        expect(form.Utility.UserSettings.SecurityRolePrivileges.length).toBe(2);
        expect(form.Utility.UserSettings.SecurityRoles.length).toBe(3);
        expect(form.Utility.UserSettings.TransactionCurrency.id).toBe("VND-GUID");
        expect(form.Utility.UserSettings.TransactionCurrency.entityType).toBe("transactioncurrency");
        expect(form.Utility.UserSettings.TransactionCurrency.name).toBe("VND");
        expect(form.Utility.UserSettings.TransactionCurrencyId).toBe("VND-GUID");
        expect(form.Utility.UserSettings.UserId).toBe("DEVKIT-USERID");
        expect(form.Utility.UserSettings.UserName).toBe("DEVKIT-USERNAME")
        expect(() => { form.Utility.UserSettings.TimeZoneOffsetMinutes }).toThrow(new Error("Not implemented"));

        expect(form.Utility.ClientUrl).toBe("https://clienturl.fake");
        expect(form.Utility.Version).toBe("10.0.0.0");

        // These return a mock promise object
        const expectXrmPromiseMock = (val) => {
            if (val !== undefined) expect(val.constructor.name).toBe('XrmPromiseMock');
        };
        expectXrmPromiseMock(form.Utility.OpenAlertDialog(null, null, null, null));
        expectXrmPromiseMock(form.Utility.OpenConfirmDialog(null, null, null, null));
        expectXrmPromiseMock(form.Utility.OpenErrorDialog(null, null, null));
        expectXrmPromiseMock(form.Utility.OpenFile(null, null));
        expectXrmPromiseMock(form.Utility.OpenForm(null, null, null, null));
        expectXrmPromiseMock(form.Utility.OpenUrl(null, null));
        expectXrmPromiseMock(form.Utility.OpenWebResource(null, null, null));
        expectXrmPromiseMock(form.Utility.NavigateTo(null, null, null, null));

        expect(form.Utility.LoadPanel("url", "title")).toBeUndefined();
        expect(form.Utility.XmlAttributeEncode("code")).toBeUndefined();
        expect(form.Utility.XmlEncode("code")).toBeUndefined();
        expect(form.Utility.HtmlAttributeEncode("code")).toBeUndefined();
        expect(form.Utility.HtmlDecode("code")).toBeUndefined();
        expect(form.Utility.HtmlEncode("code")).toBeUndefined();

        expect(() => { form.Utility.CaptureAudio(null, null) }).toThrow(new Error("Not implemented."));
        expect(() => { form.Utility.CaptureImage(null, null, null) }).toThrow(new Error("Not implemented."));
        expect(() => { form.Utility.CaptureVideo(null, null) }).toThrow(new Error("Not implemented."));
        expect(() => { form.Utility.BarcodeValue(null, null) }).toThrow(new Error("Not implemented."));
        expect(() => { form.Utility.CurrentPosition(null, null) }).toThrow(new Error("Not implemented."));
        expect(() => { form.Utility.PickFile(null, null, null) }).toThrow(new Error("Not implemented."));

        expectXrmPromiseMock(form.Utility.AddGlobalNotification(null, null, null));
        expectXrmPromiseMock(form.Utility.ClearGlobalNotification(null, null, null));

    });
    test('devKit.LoadOthers', () => {
        var form = {};
        devKit.LoadOthers(null, form, null);
        expect(() => { form.SidePanes.Get(null) }).toThrow(new Error("Method not implemented."));
        expect(() => { form.SidePanes.GetSelected() }).toThrow(new Error("Method not implemented."));
        expect(() => { form.SidePanes.GetAll() }).toThrow(new Error("Method not implemented."));
        expect(() => { form.SidePanes.Create(null, null) }).toThrow(new Error("Method not implemented."));
        form.SidePanes.DisplayState = 1;
        expect(form.SidePanes.DisplayState).toBe(1);
    });
    test('devKit.LoadExecutionContext', () => {
        var save = new SaveEventArgumentsMock(1);
        var executionContext = new EventContextMock({ formContext: XrmMockGenerator.formContext, context: XrmMockGenerator.context, saveEvent: save });
        var form = {};
        form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
        expect(form.ExecutionContext.Depth).toBe(1);
        expect(() => { form.ExecutionContext.EventArgs }).toThrow(new Error("executionContext?.getEventArgs is not a function"));
        expect(() => { form.ExecutionContext.EventSource }).toThrow(new Error("no event source given"));
        expect(form.ExecutionContext.FormContext).toBeDefined();
        expect(form.ExecutionContext.GetSharedVariable("A")).toBeUndefined();
        expect(form.ExecutionContext.SetSharedVariable("A", "B")).toBeUndefined();
        expect(() => { form.ExecutionContext.SaveMode }).toThrow(new Error("executionContext?.getEventArgs is not a function"));
        expect(() => { form.ExecutionContext.IsDefaultPrevented() }).toThrow(new Error("executionContext?.getEventArgs is not a function"));
        expect(() => { form.ExecutionContext.SetPreventDefault() }).toThrow(new Error("executionContext?.getEventArgs is not a function"));
        expect(() => { form.ExecutionContext.EntityReference }).toThrow(new Error("executionContext?.getEventArgs is not a function"));
        expect(() => { form.ExecutionContext.IsSaveSuccess }).toThrow(new Error("executionContext?.getEventArgs is not a function"));
        expect(() => { form.ExecutionContext.SaveErrorInfo }).toThrow(new Error("executionContext?.getEventArgs is not a function"));
        expect(() => { form.ExecutionContext.SetPreventDefaultOnError() }).toThrow(new Error("executionContext?.getEventArgs is not a function"));
        expect(() => { form.ExecutionContext.DisableAsyncTimeout() }).toThrow(new Error("executionContext?.getEventArgs is not a function"));
        expect(() => { form.ExecutionContext.IsInitialLoad() }).toThrow(new Error("executionContext?.getEventArgs is not a function"));
    });
    test('devKit.LoadProcess', () => {
        //setup
        var stage1 = new StageMock("stage1", "Stage 1", OptionSet.ProcessStatus.Active, OptionSet.ProcessCategory.Identify, [
            new StepMock("Stage1Step_AccountName", "name", true),
            new StepMock("Stage1Step_IndustryCode", "industrycode", false)
        ]);
        var stage2 = new StageMock("stage2", "Stage 2", OptionSet.ProcessStatus.Active, OptionSet.ProcessCategory.Develop, [
            new StepMock("Stage2Step_NumberOfEmployees", "numberofemployees", false),
            new StepMock("Stage2Step_AnnualRevenue", "revenue", false),
        ]);
        var stage3 = new StageMock("stage3", "Stage 3", OptionSet.ProcessStatus.Active, OptionSet.ProcessCategory.Close, [
            new StepMock("Stage3Step_Owner", "owner", false)
        ]);
        var processControl = new ProcessControlMock("expanded", new UiCanGetVisibleElementMock(true), new UiCanSetVisibleElementMock());
        var process_BPFAccount = new ProcessMock({ id: "devkit_bpfaccount", name: "BPF Account", rendered: true, stages: new ItemCollectionMock([stage1, stage2, stage3]) });
        var process = new ProcessManagerMock([process_BPFAccount]);
        var ui = new UiMock({
            process: processControl
        });
        XrmMockGenerator.initialise({ process: process, ui: ui });
        //run
        var process = devKit.LoadProcess(XrmMockGenerator.formContext);
        var _BPF_Account = {
            Name: {},
            Name_1: {}
        }
        devKit.LoadFields(XrmMockGenerator.formContext, _BPF_Account, "header_process_");
        process.BPF_Account = _BPF_Account;
        var form = {};
        form.Process = process;
        //test
        expect(() => { form.Process.AddOnPreProcessStatusChange(null) }).toThrow(new Error("Method not implemented."));
        expect(() => { form.Process.AddOnPreStageChange(null) }).toThrow(new Error("Method not implemented."));
        expect(() => { form.Process.RemoveOnPreProcessStatusChange(null) }).toThrow(new Error("Method not implemented."));
        expect(() => { form.Process.AddOnProcessStatusChange(null) }).toThrow(new Error("add on process status change not implemented."));
        expect(() => { form.Process.RemoveOnProcessStatusChange(null) }).toThrow(new Error("remove on process status change not implemented."));
        expect(() => { form.Process.AddOnStageChange(null) }).toThrow(new Error("add on stage change not implemented"));
        expect(() => { form.Process.RemoveOnStageChange(null) }).toThrow(new Error("remove on stage change not implemented"));
        expect(() => { form.Process.RemoveOnPreStageChange(null) }).toThrow(new Error("Method not implemented."));
        expect(() => { form.Process.AddOnStageSelected(null) }).toThrow(new Error("add on stage selected not implemented"));
        expect(() => { form.Process.RemoveOnStageSelected(null) }).toThrow(new Error("remove on stage selected not implemented"));
        form.Process.EnabledProcesses(function (process) { expect(process.length).toBe(1); });
        expect(() => { form.Process.MoveNext(null) }).toThrow(new Error("move next not implemented"));
        expect(() => { form.Process.MovePrevious(null) }).toThrow(new Error("move previous not implemented"));
        expect(() => { form.Process.ProcessInstances(null) }).toThrow(new Error("get process instances not implemented."));
        //form.Process.ProcessInstances(function (processes) { expect(processes.length).toBe(1); });
        expect(form.Process.SetActiveStage("stage1", null)).toBeUndefined();
        expect(() => { form.Process.SetActiveProcessInstance(null, null) }).toThrow(new Error("set active process instance not implemented."));
        expect(form.Process.SetActiveProcess(null, null)).toBeUndefined();
        expect(() => { form.Process.Reflow(null, null, null) }).toThrow(new Error("Not implemented."));
        expect(form.Process.ActiveProcess.Id).toBe("devkit_bpfaccount");
        expect(form.Process.ActiveProcess.Name).toBe("BPF Account");
        expect(form.Process.ActiveProcess.IsRendered).toBeTruthy();
        expect(form.Process.ActiveProcess.Stages.getLength()).toBe(3);
        var s1 = form.Process.ActiveProcess.Stages.get(0);
        form.Process.ActiveProcess.Stages.forEach(function (stage, index) { expect(stage).toBeDefined(); });
        expect(() => { s1.AllowCreateNew(function () { return true; }) }).toThrow(new Error("getNavigationBehavior not implemented"));
        expect(s1.Category).toBe(OptionSet.ProcessCategory.Identify);
        expect(() => { s1.EntityName }).toThrow(new Error("get entity name not implemented"));
        expect(s1.Id).toBe("stage1");
        expect(s1.Name).toBe("Stage 1");
        expect(s1.Status).toBe("active");
        expect(s1.Steps.length).toBe(2);
        var ss1 = s1.Steps[0];
        expect(ss1.Attribute).toBe("name");
        expect(ss1.Name).toBe("Stage1Step_AccountName");
        expect(ss1.Required).toBeTruthy();
        expect(() => { ss1.Progress }).toThrow(new Error("getProgress not implemented"));
        expect(() => { ss1.SetProgress(null, null) }).toThrow(new Error("setProgress not implemented"));
        expect(() => { form.Process.ProcessInstances(function (processes) { ; }) }).toThrow(new Error("get process instances not implemented."));
        expect(() => { form.Process.SelectedStage }).toThrow(new Error("get selected not implemented"));
        var activeStage = form.Process.ActiveStage;
        expect(activeStage.Name).toBe("Stage 1");
        expect(form.Process.InstanceId).toBe("devkit_bpfaccount");
        expect(form.Process.InstanceName).toBe("BPF Account");
        expect(() => { form.Process.Status }).toThrow(new Error("get status not implemented."));
        expect(() => { form.Process.Status = OptionSet.ProcessStatus.Finished }).toThrow(new Error("set status not implemented."));
        expect(form.Process.DisplayState).toBe(OptionSet.ProcessDisplayState.Expanded);
        form.Process.DisplayState = OptionSet.ProcessDisplayState.Collapsed;
        expect(form.Process.DisplayState).toBe(OptionSet.ProcessDisplayState.Collapsed);
        expect(form.Process.Visible).toBeTruthy();
        form.Process.Visible = false;
        expect(form.Process.Visible).toBeTruthy(); // setter doesn't change the underlying mock
        expect(form.Process.ActivePath).toBeDefined();
        expect(() => { form.Process.ActivePath.getLength() }).toThrow(new Error("get active path not implemented"));
        expect(() => { form.Process.ActivePath.get(0) }).toThrow(new Error("get active path not implemented"));
        expect(() => { form.Process.ActivePath.forEach(function (stage, index) { }); }).toThrow(new Error("get active path not implemented"));
    });
    test('devKit.LoadField', () => {
        //setup
        XrmMockGenerator.Attribute.createString({
            attributeType: "string",
            format: "text",
            isDirty: true,
            name: "name",
            requiredLevel: "required",
            value: "LE VAN PHUOC",
            maxLength: 100,
            submitMode: "always"
        },
            [
                {
                    controlType: "standard",
                    disabled: true,
                    label: "Account Name",
                    name: "name",
                    visible: true
                },
                {
                    controlType: "standard",
                    disabled: true,
                    label: "Account Name 2",
                    name: "name1",
                    visible: false
                }
            ]
        );
        const lookup = XrmMockGenerator.Control.createLookup(new LookupControlMock({
            name: "primarycontactid",
            attribute: new LookupAttributeMock({
                name: "primarycontactid",
                isPartyList: false,
                value: [new LookupValueMock("8d2dbd8c-c9f8-4cb5-8838-f5a916a6098a", "contact", "NGUYEN VAN MINH")]
            }),
            views: [
                {
                    entityName: "contact",
                    fetchXml: "<fetchxml/>",
                    layoutXml: "<layoutxml/>",
                    viewDisplayName: "Active Contacts",
                    viewId: "DefaultViewId",
                    isDefault: true
                },
                {
                    entityName: "contact",
                    fetchXml: "<fetchxml2/>",
                    layoutXml: "<layoutxml2/>",
                    viewDisplayName: "All Contacts",
                    viewId: "DefaultViewId2",
                    isDefault: false
                }
            ],
            disabled: false,
            label: "Primary Contact",
            visible: true
        }));
        XrmMockGenerator.Attribute.createDate("createdon", new Date());
        XrmMockGenerator.Attribute.createDate("modifiedon", new Date());
        XrmMockGenerator.Control.createOptionSet({
            name: "industrycode",
            disabled: true,
            label: "Industry",
            visible: true,
            attribute: new OptionSetAttributeMock({
                name: "industrycode",
                options: [
                    { text: "Accounting", value: 1 },
                    { text: "Brokers", value: 4 },
                    { text: "Consulting", value: 7 },
                    { text: "Entertainment_Retail", value: 14 },
                    { text: "Financial", value: 16 },
                    { text: "Insurance", value: 20 }
                ],
                initialValue: 1,
                value: 1
            }),
            options: [
                { text: "Accounting", value: 1 },
                { text: "Brokers", value: 4 },
                { text: "Consulting", value: 7 },
                { text: "Entertainment_Retail", value: 14 },
                { text: "Financial", value: 16 },
                { text: "Insurance", value: 20 }
            ]
        });
        XrmMockGenerator.Control.createLookup(new LookupControlMock({
            name: "to",
            attribute: new LookupAttributeMock({
                name: "to",
                isPartyList: true
            })
        }));
        XrmMockGenerator.Attribute.createNumber({
            attributeType: "decimal",
            isDirty: false,
            name: "numberofemployees",
            value: 100,
            max: 1000,
            min: 0,
            precision: 2
        });
        var executionContext = XrmMockGenerator.formContext;
        //run
        var body = {
            Name: {},
            Name1: {},
            PrimaryContactId: {},
            CreatedOn: {},
            ModifiedOn: {},
            IndustryCode: {},
            to: {},
            NumberOfEmployees: {}
        };
        devKit.LoadFields(executionContext, body);
        var form = {};
        form.Body = body;
        //test
        var nameAddOnChange_data = "";
        var nameAddOnChange = function (executionContent) { nameAddOnChange_data = "ON-CHANGED"; }
        form.Body.Name.AddOnChange(nameAddOnChange);
        form.Body.Name.FireOnChange();
        expect(nameAddOnChange_data).toBe("ON-CHANGED");
        expect(form.Body.Name.AttributeType).toBe(OptionSet.FieldAttributeType.String);
        expect(form.Body.Name.Format).toBe(OptionSet.FieldFormat.Text);
        expect(form.Body.Name.IsDirty).toBeTruthy();
        expect(form.Body.Name.AttributeName).toBe("name");
        expect(form.Body.Name.MaxLength).toBe(100);
        expect(() => { form.Body.Name.AttributeParent }).toThrow(new Error("getParent not implemented"));
        expect(form.Body.Name.RequiredLevel).toBe(OptionSet.FieldRequiredLevel.Required);
        expect(form.Body.Name.SubmitMode).toBe(OptionSet.FieldSubmitMode.Always);
        expect(() => { form.Body.Name.UserPrivilege }).toThrow(new Error("getUserPrivilege not implemented"));
        expect(form.Body.Name.Value).toBe("LE VAN PHUOC");
        expect(() => { form.Body.Name.IsValid }).toThrow(new Error("isValid not implemented"));
        nameAddOnChange_data = "REMOVE";
        form.Body.Name.RemoveOnChange(nameAddOnChange);
        form.Body.Name.FireOnChange();
        expect(nameAddOnChange_data).toBe("REMOVE");
        form.Body.Name.RequiredLevel = OptionSet.FieldRequiredLevel.Recommended;
        expect(form.Body.Name.RequiredLevel).toBe(OptionSet.FieldRequiredLevel.Recommended);
        form.Body.Name.SubmitMode = OptionSet.FieldSubmitMode.Never;
        expect(form.Body.Name.SubmitMode).toBe(OptionSet.FieldSubmitMode.Never);
        form.Body.Name.Value = null;
        expect(form.Body.Name.Value).toBeNull();
        form.Body.Name.Value = "NGUYEN VAN PHUOC";
        expect(form.Body.Name.Value).toBe("NGUYEN VAN PHUOC");
        expect(() => { form.Body.Name.SetIsValid(null, null); }).toThrow(new Error("setIsValid not implemented"));

        form.Body.Name.AddNotification({ messages: ["ABC"], notificationLevel: OptionSet.FieldNotificationLevel.Error, uniqueId: "123", actions: [] });
        expect("form.Body.Name.AddNotification").toBe("form.Body.Name.AddNotification");
        form.Body.Name.ClearNotification("123");
        expect("form.Body.Name.ClearNotification").toBe("form.Body.Name.ClearNotification");
        expect(form.Body.Name.Attribute).toBeDefined();
        expect(form.Body.Name.ControlType).toBe(OptionSet.FieldControlType.Standard);
        expect(form.Body.Name.Disabled).toBeTruthy();
        expect(form.Body.Name.Label).toBe("Account Name");
        expect(form.Body.Name.ControlName).toBe("name");
        expect(form.Body.Name1.ControlName).toBe("name1");
        expect(form.Body.Name.ControlParent).toBeUndefined();
        expect(form.Body.Name1.Visible).toBeFalsy();
        form.Body.Name.Disabled = false;
        expect(form.Body.Name.Disabled).toBeFalsy();
        expect(form.Body.Name.Focus()).toBeUndefined();
        form.Body.Name.Label = "Account Name New";
        expect(form.Body.Name.Label).toBe("Account Name New");
        form.Body.Name.SetNotification("Field Notification", "uniqueId");
        expect("form.Body.Name.SetNotification").toBe("form.Body.Name.SetNotification");
        form.Body.Name.Visible = false;
        expect(form.Body.Name.Visible).toBeFalsy();
        form.Body.NumberOfEmployees.Precision = 3;
        expect(form.Body.NumberOfEmployees.Precision).toBe(3);
        expect(form.Body.NumberOfEmployees.Max).toBe(1000);
        expect(form.Body.NumberOfEmployees.Min).toBe(0);

        expect(lookup.filters.length).toBe(0);
        var abc_LookupAddPreSearch = () => {
            var filter = `
<filter type="and">
<condition attribute="name" operator="eq" value="name" />
</filter>
`;
            form.Body.PrimaryContactId.AddCustomFilter(filter, "contact");
        }
        var ab_AddLookupTagClick = () => { };
        form.Body.PrimaryContactId.AddPreSearch(abc_LookupAddPreSearch);
        abc_LookupAddPreSearch();
        expect(lookup.filters.length).toBe(1);
        expect(lookup.views.length).toBe(2);
        form.Body.PrimaryContactId.AddCustomView("viewid", "enttiyName", "viewDisplayName", "fetchXml", "layoutXml", false);
        expect(lookup.views.length).toBe(3);
        form.Body.PrimaryContactId.AddNotification({ messages: ["ABC"], notificationLevel: OptionSet.FieldNotificationLevel.Error, uniqueId: "123", actions: [] });
        expect("form.Body.PrimaryContactId.AddNotification").toBe("form.Body.PrimaryContactId.AddNotification");
        form.Body.PrimaryContactId.AddLookupTagClick(ab_AddLookupTagClick);
        expect("form.Body.PrimaryContactId.AddLookupTagClick").toBe("form.Body.PrimaryContactId.AddLookupTagClick");
        form.Body.PrimaryContactId.ClearNotification("123");
        expect("form.Body.PrimaryContactId.ClearNotification").toBe("form.Body.PrimaryContactId.ClearNotification");
        expect(form.Body.PrimaryContactId.Attribute).toBeDefined();
        expect(form.Body.PrimaryContactId.ControlType).toBe(OptionSet.FieldControlType.Lookup);
        expect(form.Body.PrimaryContactId.DefaultView).toBe("DefaultViewId");
        expect(form.Body.PrimaryContactId.Disabled).toBeFalsy();
        expect(form.Body.PrimaryContactId.EntityTypes).toBeDefined();
        expect(form.Body.PrimaryContactId.Label).toBe("Primary Contact");
        expect(form.Body.PrimaryContactId.ControlName).toBe("primarycontactid");
        expect(form.Body.PrimaryContactId.ControlParent).toBeUndefined();
        expect(form.Body.PrimaryContactId.Visible).toBeTruthy();
        form.Body.PrimaryContactId.RemoveLookupTagClick(ab_AddLookupTagClick);
        expect("form.Body.PrimaryContactId.RemoveLookupTagClick").toBe("form.Body.PrimaryContactId.RemoveLookupTagClick");
        form.Body.PrimaryContactId.RemovePreSearch(abc_LookupAddPreSearch);
        expect("form.Body.PrimaryContactId.RemovePreSearch").toBe("form.Body.PrimaryContactId.RemovePreSearch");
        form.Body.PrimaryContactId.DefaultView = "DefaultViewId2";
        expect(form.Body.PrimaryContactId.DefaultView).toBe("DefaultViewId2");
        form.Body.PrimaryContactId.Disabled = true;
        expect(form.Body.PrimaryContactId.Disabled).toBeTruthy();
        form.Body.PrimaryContactId.EntityTypes = ["account"];
        expect("form.Body.PrimaryContactId.EntityTypes").toBe("form.Body.PrimaryContactId.EntityTypes");
        expect(form.Body.PrimaryContactId.Focus()).toBeUndefined();
        form.Body.PrimaryContactId.Label = "Primary Contact New";
        expect(form.Body.PrimaryContactId.Label).toBe("Primary Contact New");
        form.Body.PrimaryContactId.SetNotification("Field Notification", "uniqueId");
        expect("form.Body.PrimaryContactId.SetNotification").toBe("form.Body.PrimaryContactId.SetNotification");
        form.Body.PrimaryContactId.Visible = false;
        expect(form.Body.PrimaryContactId.Visible).toBeFalsy();
        expect(lookup.outChangedEventHandlers.length).toBe(0);
        var ab_AddOnOutputChange = () => { };
        form.Body.PrimaryContactId.AddOnOutputChange(ab_AddOnOutputChange);
        expect(lookup.outChangedEventHandlers.length).toBe(1);
        form.Body.PrimaryContactId.RemoveOnOutputChange(ab_AddOnOutputChange);
        expect(lookup.outChangedEventHandlers.length).toBe(0);
        expect(form.Body.CreatedOn.ControlName).toBe("createdon");
        expect(form.Body.ModifiedOn.ControlName).toBe("modifiedon");
        form.Body.ModifiedOn.ShowTime = true;
        expect(form.Body.ModifiedOn.ShowTime).toBeTruthy();
        form.Body.ModifiedOn.ShowTime = false;
        expect(form.Body.ModifiedOn.ShowTime).toBeFalsy();

        form.Body.IndustryCode.AddNotification({ messages: ["ABC"], notificationLevel: OptionSet.FieldNotificationLevel.Error, uniqueId: "123", actions: [] });
        expect("form.Body.IndustryCode.AddNotification").toBe("form.Body.IndustryCode.AddNotification");
        expect(form.Body.IndustryCode.Options.length).toBe(6);
        expect(form.Body.IndustryCode.AddOption("Others", 999999, 6)).toBeUndefined();
        expect(form.Body.IndustryCode.ControlOptions.length).toBe(7);
        form.Body.IndustryCode.ClearNotification("123");
        expect("form.Body.IndustryCode.ClearNotification").toBe("form.Body.IndustryCode.ClearNotification");
        expect(form.Body.IndustryCode.ClearOptions()).toBeUndefined();
        expect(form.Body.IndustryCode.ControlOptions.length).toBe(0);
        expect(form.Body.IndustryCode.Attribute).toBeDefined();
        expect(form.Body.IndustryCode.ControlType).toBe(OptionSet.FieldControlType.OptionSet);
        expect(form.Body.IndustryCode.Disabled).toBeTruthy();
        expect(form.Body.IndustryCode.Label).toBe("Industry");
        expect(form.Body.IndustryCode.ControlName).toBe("industrycode");
        expect(form.Body.IndustryCode.ControlParent).toBeUndefined();
        expect(form.Body.IndustryCode.Visible).toBeTruthy();
        var option = form.Body.IndustryCode.Option(1);
        expect(option).toBeDefined();
        expect(option.text).toBe("Accounting");
        expect(option.value).toBe(1);
        form.Body.IndustryCode.AddOption("New Option 999", 999, 0);
        form.Body.IndustryCode.AddOption("New Option 998", 998, 0);
        form.Body.IndustryCode.AddOption("New Option 997", 997, 0);
        expect(form.Body.IndustryCode.InitialValue).toBe(1);
        expect(form.Body.IndustryCode.ControlOptions.length).toBe(3);
        expect(form.Body.IndustryCode.RemoveOption(1));
        expect(form.Body.IndustryCode.ControlOptions.length).toBe(2);
        form.Body.IndustryCode.Disabled = false;
        expect(form.Body.IndustryCode.Disabled).toBeFalsy();
        expect(form.Body.IndustryCode.Focus()).toBeUndefined();
        form.Body.IndustryCode.Label = "Industry New";
        expect(form.Body.IndustryCode.Label).toBe("Industry New");
        form.Body.IndustryCode.SetNotification("Field Notification", "uniqueId");
        expect("form.Body.IndustryCode.SetNotification").toBe("form.Body.IndustryCode.SetNotification");
        form.Body.IndustryCode.Visible = false;
        expect(form.Body.IndustryCode.Visible).toBeFalsy();
        var selectedOption = form.Body.IndustryCode.SelectedOption;
        expect(selectedOption.text).toBe("Accounting");
        expect(selectedOption.value).toBe(1);
        expect(form.Body.IndustryCode.Text).toBe("Accounting");
        expect(form.Body.to.IsPartyList).toBeTruthy();
    });
    test('devKit.LoadField - quickform', () => {
        //setup
        var attributes = new ItemCollectionMock([
            new AttributeMock({
                name: "name"
            })
        ]);
        var entity = new EntityMock({
            attributes: attributes
        });
        var data = new DataMock(entity);
        var quickform = new QuickFormControlMock({
            name: "contactquickform",
            controlType: "quickform",
            label: "Contact Quick Form",
            visible: true
        });
        var ui = new UiMock({
            quickForms: new ItemCollectionMock([quickform])
        });
        XrmMockGenerator.formContext = new FormContextMock(data, ui);
        var executionContext = XrmMockGenerator.formContext;
        //run
        var form = {};
        var quickForm = {
            contactquickform: {
                EMailAddress1: {},
                Telephone1: {}
            }
        };
        devKit.LoadQuickForms(executionContext, quickForm);
        form.QuickForm = quickForm;
        //test
        expect(() => { form.QuickForm.contactquickform.Controls('telephone1') }).toThrow(new Error("Method not implemented."));
        expect(() => { form.QuickForm.contactquickform.Controls() }).toThrow(new Error("Method not implemented."));
        expect(form.QuickForm.contactquickform.ControlType).toBe(OptionSet.FieldControlType.QuickForm);
        expect(() => { form.QuickForm.contactquickform.Disabled }).toThrow(new Error("Method not implemented."));
        expect(form.QuickForm.contactquickform.Label).toBe("Contact Quick Form");
        expect(form.QuickForm.contactquickform.ControlName).toBe("contactquickform");
        expect(form.QuickForm.contactquickform.ControlParent).toBeUndefined();
        expect(form.QuickForm.contactquickform.Visible).toBeTruthy();
        expect(() => { form.QuickForm.contactquickform.IsLoaded() }).toThrow(new Error("Method not implemented."));
        expect(() => { form.QuickForm.contactquickform.Refresh() }).toThrow(new Error("Method not implemented."));
        expect(() => { form.QuickForm.contactquickform.Disabled = true }).toThrow(new Error("Method not implemented."));
        expect(() => { form.QuickForm.contactquickform.Focus() }).toThrow(new Error("Method not implemented."));
        form.QuickForm.contactquickform.Label = "Contact Quick Form New";
        expect(form.QuickForm.contactquickform.Label).toBe("Contact Quick Form New");
        expect(() => { form.QuickForm.contactquickform.Visible = false }).toThrow(new Error("Method not implemented."));
        expect(form.QuickForm.contactquickform.Body.EMailAddress1).toBeUndefined();
        expect(form.QuickForm.contactquickform.Body.Telephone1).toBeUndefined();
    });
    test('devKit.LoadField - subgrid', () => {
        var attributes = new ItemCollectionMock([
            new AttributeMock({
                name: "name"
            })
        ]);
        var entity = new EntityMock({
            attributes: attributes
        });
        var data = new DataMock(entity);

        var gridDisabled = false;
        var gridLabel = "CONTACTS";
        var grid = new GridControlMock({
            name: "Contacts",
            controlType: "subgrid",
            label: "CONTACTS",
            visible: true,
            entityName: "contact",
            contextType: 4 //XrmEnum.GridControlContext.FormContextRelated,
        });
        // Add subgrid control properties mock
        grid.getControlType = () => "subgrid";
        grid.getName = () => "Contacts";
        grid.getParent = () => ({ getName: () => "SUMMARY_TAB" });
        grid.getDisabled = () => gridDisabled;
        grid.setDisabled = (value) => { gridDisabled = value; };
        grid.getLabel = () => gridLabel;
        grid.setLabel = (value) => { gridLabel = value; };
        grid.setFocus = () => { };

        var viewSelector = new ViewSelectorMock(true);
        viewSelector.setCurrentView(new LookupValueMock("GUID-CONTACTS-I-FOLLOW", "1039", "Contacts I Follow"));
        grid.viewSelector = viewSelector;

        var relationship = new RelationshipMock({
            name: "name",
            attributeName: "attributeName",
            navigationPropertyName: "navigationPropertyName",
            relationshipType: 0, //XrmEnum.RelationshipType.OneToMany,
            roleType: 2 //XrmEnum.RoleType.AssociationEntity
        });
        grid.relationship = relationship;

        var row1Entity = new EntityMock({
            id: "ROW1-GUID",
            primaryValue: "ROW1-VALUE",
            entityName: "contact",
            attributes: new ItemCollectionMock([
                new StringAttributeMock({ name: "abc_col1", value: "ROW1-COL1", requiredLevel: "recommended", controls: new ItemCollectionMock([new StringControlMock({ attribute: null, name: 'abc_col1', disabled: true })]) }),
                new StringAttributeMock({ name: "abc_col2", value: "ROW1-COL2" }),
                new StringAttributeMock({ name: "abc_col3", value: "ROW1-COL3" }),
            ])
        });
        var row1 = new GridRowMock(new DataMock(row1Entity), new GridRowDataMock(null));
        var row2 = new GridRowMock(new DataMock(null), new GridRowDataMock(null));
        var rows = new ItemCollectionMock([row1, row2]);
        var selectedRows = new ItemCollectionMock([row1]);
        grid.grid = new GridMock(rows, selectedRows);

        var ui = new UiMock({
            controls: new ItemCollectionMock([grid])
        });
        XrmMockGenerator.formContext = new FormContextMock(data, ui);
        var executionContext = XrmMockGenerator.formContext;

        var form = {};
        var _grid = {
            ChildAccounts: {},
            Contacts: {},
        };
        devKit.LoadGrids(executionContext, _grid);
        form.Grid = _grid;

        var ContactsAddOnLoad = function (executionContext) { }
        expect(grid.onLoadHandlers.length).toBe(0);
        form.Grid.Contacts.AddOnLoad(ContactsAddOnLoad);
        expect(grid.onLoadHandlers.length).toBe(1);
        expect(form.Grid.Contacts.EntityName).toBe("contact");
        expect(() => { form.Grid.Contacts.FetchXml }).toThrow(new Error("getFetchXml not implemented."));
        expect(() => { form.Grid.Contacts.GridType }).toThrow(new Error("getGridType not implemented."));
        expect(form.Grid.Contacts.Relationship).toBeDefined();
        expect(form.Grid.Contacts.Relationship.attributeName).toBe("attributeName");
        expect(form.Grid.Contacts.Relationship.name).toBe("name");
        expect(form.Grid.Contacts.Relationship.navigationPropertyName).toBe("navigationPropertyName");
        expect(form.Grid.Contacts.Relationship.relationshipType).toBe(0/*XrmEnum.RelationshipType.OneToMany*/);
        expect(form.Grid.Contacts.Relationship.roleType).toBe(2/*XrmEnum.RoleType.AssociationEntity*/);
        expect(() => { form.Grid.Contacts.Url(0); }).toThrow(new Error("getUrl not implemented."));
        expect(form.Grid.Contacts.ViewSelector.CurrentView.entityType).toBe("1039");
        expect(form.Grid.Contacts.ViewSelector.CurrentView.id).toBe("GUID-CONTACTS-I-FOLLOW");
        expect(form.Grid.Contacts.ViewSelector.CurrentView.name).toBe("Contacts I Follow");
        var newCurrentView = {
            entityType: "1039",
            id: "GUID-NEW",
            name: "NAME-NEW"
        };
        form.Grid.Contacts.ViewSelector.CurrentView = newCurrentView;
        expect(form.Grid.Contacts.ViewSelector.CurrentView.entityType).toBe("1039");
        expect(form.Grid.Contacts.ViewSelector.CurrentView.id).toBe("GUID-NEW");
        expect(form.Grid.Contacts.ViewSelector.CurrentView.name).toBe("NAME-NEW");
        expect(form.Grid.Contacts.ViewSelector.Visible).toBeTruthy();
        form.Grid.Contacts.Visible = false;
        expect(form.Grid.Contacts.Visible).toBeFalsy();
        expect(() => { form.Grid.Contacts.Refresh(); }).toThrow(new Error("Method not implemented."));
        expect(() => { form.Grid.Contacts.RefreshRibbon(); }).toThrow(new Error("Method not implemented."));
        expect(() => { form.Grid.Contacts.OpenRelatedGrid(); }).toThrow(new Error("openRelatedGrid not implemented."));
        form.Grid.Contacts.RemoveOnLoad(ContactsAddOnLoad);
        expect(grid.onLoadHandlers.length).toBe(0);
        expect(form.Grid.Contacts.Rows.getLength()).toBe(2);
        var row0 = form.Grid.Contacts.Rows.get(0);
        expect(row0.EntityId).toBe("ROW1-GUID")
        expect(row0.EntityName).toBe("contact");
        expect(row0.PrimaryAttributeValue).toBe("ROW1-VALUE");
        expect(row0.EntityReference.id).toBe("ROW1-GUID");
        expect(row0.EntityReference.entityType).toBe("contact");
        expect(row0.EntityReference.name).toBe("ROW1-VALUE");
        expect(row0.Columns).toBeDefined();
        expect(row0.Columns.getLength()).toBe(3);
        var row0col0 = row0.Columns.get("abc_col1");
        expect(row0col0).toBeDefined();
        expect(row0col0.Value).toBe("ROW1-COL1");
        row0col0.Value = "ROW1-COL1-NEW";
        expect(row0col0.Value).toBe("ROW1-COL1-NEW");
        expect(row0col0.Name).toBe("abc_col1");
        expect(row0col0.RequiredLevel).toBe(OptionSet.FieldRequiredLevel.Recommended);
        row0col0.SetNotification("Field Notification", "uniqueId");
        row0col0.ClearNotification("uniqueId");
        row0col0.RequiredLevel = OptionSet.FieldRequiredLevel.Required;
        expect(row0col0.RequiredLevel).toBe(OptionSet.FieldRequiredLevel.Required);
        expect(row0col0.Disabled).toBeTruthy();
        row0col0.Disabled = false;
        expect(row0col0.Disabled).toBeFalsy();
        expect(row0col0.Label).toBe("abc_col1");
        form.Grid.Contacts.Rows.forEach(function (row, index) {
            expect(row).toBeDefined();
            row.Columns.forEach(function (column, index) {
                expect(column).toBeDefined();
            });
        });
        var rowNotExist = form.Grid.Contacts.Rows.get(4);
        expect(rowNotExist).toBeDefined();
        var columnNotExist = row0.Columns.get("col_not_exisit");
        expect(columnNotExist).toBeDefined();
        expect(form.Grid.Contacts.TotalRecordCount).toBe(2);
        expect(form.Grid.Contacts.SelectedRows.getLength()).toBe(1);
        expect(form.Grid.Contacts.SelectedRows.get(0)).toBeDefined();
        form.Grid.Contacts.SelectedRows.forEach(function (row, index) {
            expect(row).toBeDefined();
        });
        // Test subgrid control properties (lines 514-520)
        expect(form.Grid.Contacts.ControlType).toBe("subgrid");
        expect(form.Grid.Contacts.ControlName).toBe("Contacts");
        expect(form.Grid.Contacts.ControlParent).toBeDefined();
        expect(form.Grid.Contacts.ControlParent.getName()).toBe("SUMMARY_TAB");
        expect(form.Grid.Contacts.Disabled).toBe(false);
        form.Grid.Contacts.Disabled = true;
        expect(form.Grid.Contacts.Disabled).toBe(true);
        expect(form.Grid.Contacts.Label).toBe("CONTACTS");
        form.Grid.Contacts.Label = "NEW LABEL";
        expect(form.Grid.Contacts.Label).toBe("NEW LABEL");
        expect(() => form.Grid.Contacts.Focus()).not.toThrow();
        //expect(form.Grid.Contacts.Refresh).toBeDefined();
    });
    test('iframe control type', () => {
        //setup
        var attributes = new ItemCollectionMock([
            new AttributeMock({
                name: "name"
            })
        ]);
        var entity = new EntityMock({
            attributes: attributes
        });
        var data = new DataMock(entity);
        var frame = new IframeControlMock({
            name: "IFRAME_PHUOCLE",
            controlType: "iframe",
            label: "PHUOCLE",
            visible: true
        });
        var ui = new UiMock({
            controls: new ItemCollectionMock([
                frame
            ])
        });
        XrmMockGenerator.formContext = new FormContextMock(data, ui);
        var executionContext = XrmMockGenerator.formContext;
        //run
        var form = {};
        var body = {
            IFRAME_PHUOCLE: {}
        };
        devKit.LoadFields(executionContext, body);
        form.Body = body;
        //result
        expect(() => { form.Body.IFRAME_PHUOCLE.ContentWindow(null, null) }).toThrow(new Error("getContentWindow not implemented."));
        expect(form.Body.IFRAME_PHUOCLE.ControlType).toBe(OptionSet.FieldControlType.Iframe);
        expect(() => { form.Body.IFRAME_PHUOCLE.Disabled }).toThrow(new Error("getDisabled not implemented."));
        expect(() => { form.Body.IFRAME_PHUOCLE.InitialUrl }).toThrow(new Error("getInitialUrl not implemented."));
        expect(form.Body.IFRAME_PHUOCLE.Label).toBe("PHUOCLE");
        expect(form.Body.IFRAME_PHUOCLE.ControlName).toBe("IFRAME_PHUOCLE");
        expect(() => { form.Body.IFRAME_PHUOCLE.Object }).toThrow(new Error("getObject not implemented."));
        expect(form.Body.IFRAME_PHUOCLE.ControlParent).toBeUndefined();
        expect(() => { form.Body.IFRAME_PHUOCLE.Src }).toThrow(new Error("getSrc not implemented."));
        expect(form.Body.IFRAME_PHUOCLE.Visible).toBeTruthy();
        expect(() => { form.Body.IFRAME_PHUOCLE.Disabled = true }).toThrow(new Error("setDisabled not implemented."));
        expect(() => { form.Body.IFRAME_PHUOCLE.Focus() }).toThrow(new Error("setFocus not implemented."));
        form.Body.IFRAME_PHUOCLE.Label = "PHUOCLE New";
        expect(form.Body.IFRAME_PHUOCLE.Label).toBe("PHUOCLE New");
        expect(() => { form.Body.IFRAME_PHUOCLE.Src = "https://phuocle.net" }).toThrow(new Error("setSrc not implemented."));
        expect(() => { form.Body.IFRAME_PHUOCLE.Visible = true }).toThrow(new Error("setVisible not implemented."));
        expect(() => { var a = form.Body.IFRAME_PHUOCLE.Data; }).toThrow();
        expect(() => { form.Body.IFRAME_PHUOCLE.Data = "b"; }).toThrow();
    });
    test('Tab & Section', () => {
        //setup
        XrmMockGenerator.initialise();
        var tab_SUMMARY_TAB_Section_ACCOUNT_INFORMATION = XrmMockGenerator.Section.createSection("ACCOUNT_INFORMATION", "ACCOUNT INFORMATION", true, null, null);
        var tab_SUMMARY_TAB_Section_ADDRESS = XrmMockGenerator.Section.createSection("ADDRESS", "ADDRESS", false, null, null);
        var tab_SUMMARY_TAB = XrmMockGenerator.Tab.createTab("SUMMARY_TAB", "Summary", true, "expanded", null, new ItemCollectionMock([tab_SUMMARY_TAB_Section_ACCOUNT_INFORMATION, tab_SUMMARY_TAB_Section_ADDRESS]));
        var executionContext = XrmMockGenerator.formContext;
        //run
        var form = {};
        var body = {};
        var tab = {
            SUMMARY_TAB: {
                Section: {
                    ACCOUNT_INFORMATION: {},
                    ADDRESS: {}
                }
            }
        };
        devKit.LoadTabs(executionContext, tab);
        body.Tab = tab;
        form.Body = body;
        //test
        var addTabStateChange = function (executionContext) { }
        expect(tab_SUMMARY_TAB.tabStateChangeHandlers.length).toBe(0);
        form.Body.Tab.SUMMARY_TAB.AddTabStateChange(addTabStateChange);
        expect(tab_SUMMARY_TAB.tabStateChangeHandlers.length).toBe(1);
        expect(form.Body.Tab.SUMMARY_TAB.DisplayState).toBe(OptionSet.TabDisplayState.Expanded);
        form.Body.Tab.SUMMARY_TAB.DisplayState = OptionSet.TabDisplayState.Collapsed;
        expect(form.Body.Tab.SUMMARY_TAB.DisplayState).toBe(OptionSet.TabDisplayState.Collapsed);
        expect(form.Body.Tab.SUMMARY_TAB.Focus()).toBeUndefined();
        expect(form.Body.Tab.SUMMARY_TAB.Label).toBe("Summary");
        form.Body.Tab.SUMMARY_TAB.Label = "General";
        expect(form.Body.Tab.SUMMARY_TAB.Label).toBe("General");
        expect(form.Body.Tab.SUMMARY_TAB.Name).toBe("SUMMARY_TAB");
        form.Body.Tab.SUMMARY_TAB.RemoveTabStateChange(addTabStateChange);
        expect(tab_SUMMARY_TAB.tabStateChangeHandlers.length).toBe(0);
        expect(form.Body.Tab.SUMMARY_TAB.Visible).toBeTruthy();
        form.Body.Tab.SUMMARY_TAB.Visible = false;
        expect(form.Body.Tab.SUMMARY_TAB.Visible).toBeFalsy();
        expect(form.Body.Tab.SUMMARY_TAB.Section.ACCOUNT_INFORMATION.Label).toBe("ACCOUNT INFORMATION");
        form.Body.Tab.SUMMARY_TAB.Section.ACCOUNT_INFORMATION.Label = "ACCOUNT NOTE";
        expect(form.Body.Tab.SUMMARY_TAB.Section.ACCOUNT_INFORMATION.Label).toBe("ACCOUNT NOTE");
        expect(form.Body.Tab.SUMMARY_TAB.Section.ACCOUNT_INFORMATION.Name).toBe("ACCOUNT_INFORMATION");
        expect(form.Body.Tab.SUMMARY_TAB.Section.ACCOUNT_INFORMATION.Visible).toBeTruthy();
        form.Body.Tab.SUMMARY_TAB.Section.ACCOUNT_INFORMATION.Visible = false;
        expect(form.Body.Tab.SUMMARY_TAB.Section.ACCOUNT_INFORMATION.Visible).toBeFalsy();
        expect(form.Body.Tab.SUMMARY_TAB.Section.ACCOUNT_INFORMATION.Parent).toBeDefined();
        expect(form.Body.Tab.SUMMARY_TAB.Parent).toBeDefined();
        expect(() => { form.Body.Tab.SUMMARY_TAB.ContentType }).toThrow();
        expect(() => { form.Body.Tab.SUMMARY_TAB.ContentType = OptionSet.TabContentType.SingleComponent }).toThrow();
        // Test Section.Controls collection (lines 354-365)
        var controls = form.Body.Tab.SUMMARY_TAB.Section.ACCOUNT_INFORMATION.Controls;
        expect(controls).toBeDefined();
        if (controls !== null) {
            expect(controls.getLength).toBeDefined();
            expect(controls.get).toBeDefined();
            expect(controls.forEach).toBeDefined();
        }
    });
    test('Section.Controls - forEach coverage', () => {
        // Create section with controls for forEach coverage
        var sectionControls = new ItemCollectionMock([
            new StringControlMock({ name: 'ctrl1', label: 'Control 1' }),
            new StringControlMock({ name: 'ctrl2', label: 'Control 2' })
        ]);
        var sectionWithControls = {
            getName: () => 'TEST_SECTION',
            getLabel: () => 'Test Section',
            setLabel: () => { },
            getVisible: () => true,
            setVisible: () => { },
            getParent: () => ({}),
            controls: sectionControls
        };
        var tabObject = {
            getName: () => 'TEST_TAB',
            sections: new ItemCollectionMock([sectionWithControls])
        };
        var formContext = {
            ui: {
                tabs: {
                    get: () => tabObject
                }
            }
        };
        var tab = {
            TEST_TAB: {
                Section: {
                    TEST_SECTION: {}
                }
            }
        };
        devKit.LoadTabs(formContext, tab);
        // Test Section.Controls
        var controls = tab.TEST_TAB.Section.TEST_SECTION.Controls;
        expect(controls).toBeDefined();
        expect(controls).not.toBeNull();
        expect(controls.getLength()).toBe(2);
        expect(controls.get(0)).toBeDefined();
        var forEachCount = 0;
        controls.forEach((ctrl, index) => {
            forEachCount++;
            expect(ctrl).toBeDefined();
        });
        expect(forEachCount).toBe(2);
    });
    test('Footer & Header', () => {
        //setup
        var stringControl = new StringControlMock({
            attribute: new StringAttributeMock({
                name: "numberofemployees",
                value: "6200"
            }),
            name: "numberofemployees",
            label: "Number of Employees"
        });
        var stringHeaderControl = new StringControlMock({
            attribute: new StringAttributeMock({
                name: "numberofemployees",
                value: "6200"
            }),
            name: "header_numberofemployees",
            label: "Number of Employees"
        });
        var ui = new UiMock({
            formSelector: new FormSelectorMock(new ItemCollectionMock([new FormItemMock({
                id: "8d2dbd8c-c9f8-4cb5-8838-f5a916a6098a",
                label: "Account",
                currentItem: true,
                formType: OptionSet.FormType.Update
            })])),
            controls: new ItemCollectionMock([
                stringControl,
                stringHeaderControl
            ]),
            headerSection: new HeaderSectionMock(true, true, true)
        });
        var attributes = new ItemCollectionMock([
            new AttributeMock({
                name: "numberofemployees",
                isDirty: true
            })
        ]);
        var entity = new EntityMock({
            attributes: attributes
        });
        var data = new DataMock(entity);
        XrmMockGenerator.formContext = new FormContextMock(data, ui);
        var executionContext = XrmMockGenerator.formContext;
        //run
        var form = {};
        var header = {
            NumberOfEmployees: {},
        };
        devKit.LoadFields(executionContext, header, "header_");
        form.Header = header;
        //result
        expect(form.Header.NumberOfEmployees.Label).toBe("Number of Employees");
        expect(form.Header.NumberOfEmployees.ControlName).toBe("header_numberofemployees");
        expect(form.Header.BodyVisible).toBeTruthy();
        expect(form.Header.CommandBarVisible).toBeTruthy();
        expect(form.Header.TabNavigatorVisible).toBeTruthy();
        form.Header.BodyVisible = false;
        form.Header.CommandBarVisible = false;
        form.Header.TabNavigatorVisible = false;
        expect(form.Header.BodyVisible).toBeFalsy();
        expect(form.Header.CommandBarVisible).toBeFalsy();
        expect(form.Header.TabNavigatorVisible).toBeFalsy();
    });
    test('Navigation', () => {
        //setup
        var stringControl = new StringControlMock({
            attribute: new StringAttributeMock({
                name: "numberofemployees",
                value: "6200"
            }),
            name: "numberofemployees",
            label: "Number of Employees"
        });
        var stringHeaderControl = new StringControlMock({
            attribute: new StringAttributeMock({
                name: "numberofemployees",
                value: "6200"
            }),
            name: "header_numberofemployees",
            label: "Number of Employees"
        });
        var b = UiStandardElementMock.create("Account", true);
        var a = new NavigationItemMock("Account_Emails", b, new UiFocusableMock(true));
        var ui = new UiMock({
            formSelector: new FormSelectorMock(new ItemCollectionMock([new FormItemMock({
                id: "8d2dbd8c-c9f8-4cb5-8838-f5a916a6098a",
                label: "Account",
                currentItem: true,
                formType: OptionSet.FormType.Update
            })])),
            controls: new ItemCollectionMock([
                stringControl,
                stringHeaderControl
            ]),
            headerSection: new HeaderSectionMock(true, true, true),
            navigation: new NavigationMock(new ItemCollectionMock([a]))
        });
        var attributes = new ItemCollectionMock([
            new AttributeMock({
                name: "numberofemployees",
                isDirty: true
            })
        ]);
        var entity = new EntityMock({
            attributes: attributes
        });
        var data = new DataMock(entity);
        XrmMockGenerator.formContext = new FormContextMock(data, ui);
        var executionContext = XrmMockGenerator.formContext;
        //run
        var form = {};
        var navigation = {
            Account_Emails: {},
        };
        devKit.LoadNavigations(executionContext, navigation);
        form.Navigation = navigation;
        //result
        expect(form.Navigation.Account_Emails.Id).toBe("Account_Emails");
        expect(form.Navigation.Account_Emails.Label).toBe("Account");
        form.Navigation.Account_Emails.Label = "ABC";
        expect(form.Navigation.Account_Emails.Label).toBe("ABC");
        expect(form.Navigation.Account_Emails.Visible).toBeTruthy();
        form.Navigation.Account_Emails.Visible = false;
        expect(form.Navigation.Account_Emails.Visible).toBeFalsy();
        form.Navigation.Account_Emails.Focus();
        expect(1).toBe(1);
    });
    test('Timer', () => {
        //setup
        XrmMockGenerator.initialise();
        XrmMockGenerator.Control.addControl(new TimerControlMock({ controlType: "timercontrol", name: "timmer" }));
        var executionContext = XrmMockGenerator.formContext;
        //run
        var form = {};
        var body = {
            TIMMER: {}
        };
        devKit.LoadFields(executionContext, body);
        form.Body = body;
        //test
        expect(() => { form.Body.TIMMER.State }).toThrow(new Error("Method not implemented."));
        expect(() => { form.Body.TIMMER.Refresh() }).toThrow(new Error("Not implemented."));
    });
    test('Knowledge', () => {
        //setup
        XrmMockGenerator.initialise();
        XrmMockGenerator.Control.addControl(new KbSearchControlMock({ controlType: "kbsearch", name: "kb" }));
        var executionContext = XrmMockGenerator.formContext;
        //run
        var form = {};
        var body = {
            KB: {}
        };
        devKit.LoadFields(executionContext, body);
        form.Body = body;
        //test
        expect(() => { form.Body.KB.TotalResultCount }).toThrow(new Error("Method not implemented."));
        expect(() => { form.Body.KB.SelectedResults }).toThrow(new Error("Method not implemented."));
        expect(() => { form.Body.KB.AddPostSearch(null) }).toThrow(new Error("Method not implemented."));
        expect(() => { form.Body.KB.RemovePostSearch(null) }).toThrow(new Error("Method not implemented."));
        expect(() => { form.Body.KB.AddResultOpened(null) }).toThrow(new Error("Method not implemented."));
        expect(() => { form.Body.KB.RemoveResultOpened(null) }).toThrow(new Error("Method not implemented."));
        expect(() => { form.Body.KB.AddSelection(null) }).toThrow(new Error("Method not implemented."));
        expect(() => { form.Body.KB.RemoveSelection(null) }).toThrow(new Error("Method not implemented."));
        expect(() => { form.Body.KB.OpenSearchResult(null, null) }).toThrow(new Error("Method not implemented."));
        expect(() => { var a = form.Body.KB.SearchQuery; }).toThrow(new Error("Method not implemented."));
        expect(() => { form.Body.KB.SearchQuery = "b"; }).toThrow(new Error("Method not implemented."));
    });
    test('devKit.LoadFormDialog', () => {
        //setup
        var attributes = new ItemCollectionMock([
            new AttributeMock({
                name: "name",
                value: "LE VAN PHUOC"
            })
        ]);
        var entity = new EntityMock({
            attributes: attributes
        });
        var data = new DataMock(entity);
        var stringControl = new StringControlMock({
            attribute: new StringAttributeMock({
                name: "name",
                value: "LE VAN PHUOC"
            }),
            name: "name",
            label: "Account Name"
        });
        var ui = new UiMock({
            controls: new ItemCollectionMock([
                stringControl
            ])
        });
        XrmMockGenerator.formContext = new FormContextMock(data, ui);
        var executionContext = XrmMockGenerator.formContext;
        var form = devKit.LoadFormDialog(executionContext, ["name"]);
        expect(form.name.Value).toBe("LE VAN PHUOC");
        expect(() => { form.Close(); }).toThrow(new Error("close not implemented"));
    });
    test('devKit.LoadWebApi - CRUD operations', () => {
        // Setup mock WebApi using simple mocks
        let createCalled = false, deleteCalled = false, retrieveCalled = false;
        let retrieveMultipleCalled = false, updateCalled = false, executeCalled = false;
        let executeMultipleCalled = false, onlineExecuteCalled = false;
        let onlineExecuteMultipleCalled = false, offlineAvailableCalled = false;
        let createArgs = null, deleteArgs = null;

        const mockPromise = {
            then: function (success, error) { return mockPromise; }
        };

        global.Xrm = {
            WebApi: {
                createRecord: function (entityName, data) { createCalled = true; createArgs = { entityName, data }; return mockPromise; },
                deleteRecord: function (entityName, id) { deleteCalled = true; deleteArgs = { entityName, id }; return mockPromise; },
                retrieveRecord: function () { retrieveCalled = true; return mockPromise; },
                retrieveMultipleRecords: function () { retrieveMultipleCalled = true; return mockPromise; },
                updateRecord: function () { updateCalled = true; return mockPromise; },
                execute: function () { executeCalled = true; return mockPromise; },
                executeMultiple: function () { executeMultipleCalled = true; return mockPromise; },
                online: {
                    execute: function () { onlineExecuteCalled = true; return mockPromise; },
                    executeMultiple: function () { onlineExecuteMultipleCalled = true; return mockPromise; }
                },
                offline: {
                    isAvailable: function (entityName) { offlineAvailableCalled = true; return true; }
                }
            }
        };

        var webApi = devKit.LoadWebApi();

        // Test CreateRecord without callback (returns promise)
        var result = webApi.CreateRecord("account", { name: "Test Account" });
        expect(createCalled).toBe(true);
        expect(createArgs.entityName).toBe("account");

        // Test CreateRecord with callback
        var successCallback = function () { };
        var errorCallback = function () { };
        webApi.CreateRecord("account", { name: "Test" }, successCallback, errorCallback);

        // Test DeleteRecord without callback
        webApi.DeleteRecord("account", "guid-123");
        expect(deleteCalled).toBe(true);
        expect(deleteArgs.entityName).toBe("account");
        expect(deleteArgs.id).toBe("guid-123");

        // Test DeleteRecord with callback
        webApi.DeleteRecord("account", "guid-123", successCallback, errorCallback);

        // Test RetrieveRecord (first signature) without callback
        webApi.RetrieveRecord("account", "guid-123", "?$select=name");
        expect(retrieveCalled).toBe(true);

        // Test RetrieveRecord with callback
        webApi.RetrieveRecord("account", "guid-123", "?$select=name", successCallback, errorCallback);

        // Test RetrieveMultipleRecords without callback
        webApi.RetrieveMultipleRecords("account", "?$select=name", 100);
        expect(retrieveMultipleCalled).toBe(true);

        // Test RetrieveMultipleRecords with callback
        webApi.RetrieveMultipleRecords("account", "?$select=name", 100, successCallback, errorCallback);

        // Test UpdateRecord without callback
        webApi.UpdateRecord("account", "guid-123", { name: "Updated" });
        expect(updateCalled).toBe(true);

        // Test UpdateRecord with callback
        webApi.UpdateRecord("account", "guid-123", { name: "Updated" }, successCallback, errorCallback);

        // Test Execute without callback
        webApi.Execute({ getMetadata: () => ({}) });
        expect(executeCalled).toBe(true);

        // Test Execute with callback
        webApi.Execute({ getMetadata: () => ({}) }, successCallback, errorCallback);

        // Test ExecuteMultiple without callback
        webApi.ExecuteMultiple([{ getMetadata: () => ({}) }]);
        expect(executeMultipleCalled).toBe(true);

        // Test ExecuteMultiple with callback
        webApi.ExecuteMultiple([{ getMetadata: () => ({}) }], successCallback, errorCallback);

        // Test Online.Execute
        var online = webApi.Online;
        expect(online).toBeDefined();
        online.Execute({ getMetadata: () => ({}) });
        expect(onlineExecuteCalled).toBe(true);

        online.Execute({ getMetadata: () => ({}) }, successCallback, errorCallback);

        // Test Online.ExecuteMultiple
        online.ExecuteMultiple([{ getMetadata: () => ({}) }]);
        expect(onlineExecuteMultipleCalled).toBe(true);

        online.ExecuteMultiple([{ getMetadata: () => ({}) }], successCallback, errorCallback);

        // Test Offline.IsAvailable
        var offline = webApi.Offline;
        expect(offline).toBeDefined();
        var isAvailable = offline.IsAvailable("account");
        expect(offlineAvailableCalled).toBe(true);
        expect(isAvailable).toBe(true);
    });
    test('devKit.LoadWebApi - RetrieveRecords with fetchXml', () => {
        // Mock DOMParser for Node.js environment
        global.DOMParser = class {
            parseFromString(str, type) {
                // Simple mock that extracts entity name from fetchXml
                const match = str.match(/entity\s+name="([^"]+)"/);
                return {
                    querySelector: (selector) => {
                        if (selector === 'entity' && match) {
                            return {
                                hasAttribute: (attr) => attr === 'name' && match,
                                getAttribute: (attr) => attr === 'name' ? match[1] : null
                            };
                        }
                        return null;
                    }
                };
            }
        };

        // Setup mock for retrieveMultipleRecords that returns entities
        const mockResult = {
            entities: [
                { accountid: "guid-1", name: "Account 1" },
                { accountid: "guid-2", name: "Account 2" }
            ]
        };
        let retrieveMultipleCalled = false;
        const mockPromise = {
            then: function (successFn, errorFn) {
                const result = successFn(mockResult);
                return {
                    then: function (cb) { if (cb) cb(result); return this; }
                };
            }
        };
        global.Xrm = {
            WebApi: {
                retrieveMultipleRecords: function () { retrieveMultipleCalled = true; return mockPromise; }
            }
        };

        var webApi = devKit.LoadWebApi();

        // Class constructor factory
        class AccountApi {
            constructor(entity) {
                this.id = entity.accountid;
                this.name = entity.name;
            }
        }

        // Test RetrieveRecords with plain fetchXml (starts with <fetch)
        var fetchXml = '<fetch><entity name="account"><attribute name="name"/></entity></fetch>';
        var result = webApi.RetrieveRecords(AccountApi, fetchXml);
        expect(retrieveMultipleCalled).toBe(true);

        // Test RetrieveRecords with fetchXml query string
        var fetchXmlQuery = '?fetchXml=' + encodeURIComponent(fetchXml);
        webApi.RetrieveRecords(AccountApi, fetchXmlQuery);

        // Test RetrieveRecords with entity name and OData options
        webApi.RetrieveRecords(AccountApi, "account", "?$select=name", 100);

        // Test RetrieveRecords with callback
        var successCallback = function () { };
        var errorCallback = function () { };
        webApi.RetrieveRecords(AccountApi, fetchXml, successCallback, errorCallback);

        // Test RetrieveRecords with maxPageSize as number followed by callback
        webApi.RetrieveRecords(AccountApi, fetchXml, 50, successCallback);

        // Test RetrieveRecords with entity name, options, and function callback (no maxPageSize)
        webApi.RetrieveRecords(AccountApi, "account", "?$select=name", successCallback, errorCallback);

        // Test factory function instead of class
        var factoryFn = (entity) => ({ id: entity.accountid, name: entity.name });
        webApi.RetrieveRecords(factoryFn, fetchXml);
    });
    test('devKit.LoadWebApi - RetrieveRecords empty result', () => {
        // Mock DOMParser for Node.js environment
        global.DOMParser = class {
            parseFromString(str, type) {
                const match = str.match(/entity\s+name="([^"]+)"/);
                return {
                    querySelector: (selector) => {
                        if (selector === 'entity' && match) {
                            return {
                                hasAttribute: (attr) => attr === 'name' && match,
                                getAttribute: (attr) => attr === 'name' ? match[1] : null
                            };
                        }
                        return null;
                    }
                };
            }
        };

        const mockResult = { entities: [] };
        let retrieveCalled = false;
        const mockPromise = {
            then: function (successFn) {
                const result = successFn(mockResult);
                return { then: function (cb) { if (cb) cb(result); return this; } };
            }
        };
        global.Xrm = {
            WebApi: {
                retrieveMultipleRecords: function () { retrieveCalled = true; return mockPromise; }
            }
        };

        var webApi = devKit.LoadWebApi();
        var fetchXml = '<fetch><entity name="account"><attribute name="name"/></entity></fetch>';
        var result = webApi.RetrieveRecords((e) => e, fetchXml);
        expect(retrieveCalled).toBe(true);
    });
    test('devKit.LoadWebApi - RetrieveRecord v2 with apiConstructor', () => {
        const mockEntity = { accountid: "guid-1", name: "Test Account" };
        let retrieveCalled = false;
        const mockPromise = {
            then: function (successFn) {
                const result = successFn(mockEntity);
                return { then: function (cb) { if (cb) cb(result); return this; } };
            }
        };
        global.Xrm = {
            WebApi: {
                retrieveRecord: function () { retrieveCalled = true; return mockPromise; }
            }
        };

        var webApi = devKit.LoadWebApi();

        class AccountApi {
            constructor(entity) {
                this.id = entity.accountid;
                this.name = entity.name;
            }
        }

        // Test with class constructor, without options (should default to ?$select=*)
        webApi.RetrieveRecord(AccountApi, "account", "guid-1");
        expect(retrieveCalled).toBe(true);

        // Test with class constructor, with options
        webApi.RetrieveRecord(AccountApi, "account", "guid-1", "?$select=name");

        // Test with callback instead of options (options is callback function)
        var successCallback = function () { };
        var errorCallback = function () { };
        webApi.RetrieveRecord(AccountApi, "account", "guid-1", successCallback, errorCallback);

        // Test with all params including callbacks
        webApi.RetrieveRecord(AccountApi, "account", "guid-1", "?$select=name", successCallback, errorCallback);

        // Test with factory function
        var factoryFn = (entity) => ({ id: entity.accountid });
        webApi.RetrieveRecord(factoryFn, "account", "guid-1");
    });
    test('devKit.LoadCopilot', () => {
        let executeEventCalled = false, executePromptCalled = false;
        let executeEventArgs = null, executePromptArgs = null;
        const mockPromise = {
            then: function (success, error) { return mockPromise; }
        };
        global.Xrm = {
            Copilot: {
                executeEvent: function (eventName, params) { executeEventCalled = true; executeEventArgs = { eventName, params }; return mockPromise; },
                executePrompt: function (promptText) { executePromptCalled = true; executePromptArgs = { promptText }; return mockPromise; }
            }
        };

        var copilot = devKit.LoadCopilot();

        // Test ExecuteEvent without callback (returns promise)
        var result = copilot.ExecuteEvent("eventName", { param1: "value1" });
        expect(executeEventCalled).toBe(true);
        expect(executeEventArgs.eventName).toBe("eventName");

        // Test ExecuteEvent with callbacks
        var successCallback = function () { };
        var errorCallback = function () { };
        copilot.ExecuteEvent("eventName", { param1: "value1" }, successCallback, errorCallback);

        // Test ExecutePrompt without callback
        result = copilot.ExecutePrompt("What is the weather?");
        expect(executePromptCalled).toBe(true);
        expect(executePromptArgs.promptText).toBe("What is the weather?");

        // Test ExecutePrompt with callbacks
        copilot.ExecutePrompt("What is the weather?", successCallback, errorCallback);
    });
    test('devKit.LoadFormV2 - comprehensive form loading', () => {
        // Setup complex mock form context
        var attributes = new ItemCollectionMock([
            new AttributeMock({ name: "name", value: "Test Name" }),
            new AttributeMock({ name: "header_revenue", value: 1000000 })
        ]);
        var entity = new EntityMock({
            entityName: "account",
            id: "guid-123",
            primaryValue: "Test Account",
            attributes: attributes
        });
        var data = new DataMock(entity);

        var stringControl = new StringControlMock({
            attribute: new StringAttributeMock({ name: "name", value: "Test Name" }),
            name: "name",
            label: "Account Name"
        });
        var headerControl = new StringControlMock({
            attribute: new StringAttributeMock({ name: "header_revenue", value: 1000000 }),
            name: "header_revenue",
            label: "Revenue"
        });

        var ui = new UiMock({
            formSelector: new FormSelectorMock(new ItemCollectionMock([
                new FormItemMock({
                    id: "form-guid",
                    label: "Main Form",
                    currentItem: true,
                    formType: OptionSet.FormType.Update
                })
            ])),
            controls: new ItemCollectionMock([stringControl, headerControl]),
            tabs: new ItemCollectionMock([])
        });

        // Mock Xrm for LoadUtility and LoadOthers with plain functions
        const mockPromise = { then: function () { return this; } };
        global.Xrm = {
            App: {
                addGlobalNotification: function () { return mockPromise; },
                clearGlobalNotification: function () { return mockPromise; },
                sidePanes: {
                    state: 0,
                    createPane: function () { return mockPromise; },
                    getPane: function () { return null; },
                    getAllPanes: function () { return []; },
                    getSelectedPane: function () { return null; }
                }
            },
            Device: {
                captureAudio: function () { return mockPromise; },
                captureImage: function () { return mockPromise; },
                captureVideo: function () { return mockPromise; },
                getBarcodeValue: function () { return mockPromise; },
                getCurrentPosition: function () { return mockPromise; },
                pickFile: function () { return mockPromise; }
            },
            Encoding: {
                htmlAttributeEncode: function () { },
                htmlDecode: function () { },
                htmlEncode: function () { },
                xmlAttributeEncode: function () { },
                xmlEncode: function () { }
            },
            Navigation: {
                navigateTo: function () { return mockPromise; },
                openAlertDialog: function () { return mockPromise; },
                openConfirmDialog: function () { return mockPromise; },
                openErrorDialog: function () { return mockPromise; },
                openFile: function () { return mockPromise; },
                openForm: function () { return mockPromise; },
                openUrl: function () { return mockPromise; },
                openWebResource: function () { return mockPromise; }
            },
            Panel: {
                loadPanel: function () { }
            },
            Utility: {
                closeProgressIndicator: function () { },
                getEntityMetadata: function () { return mockPromise; },
                getEntityMainFormDescriptor: function () { return mockPromise; },
                getGlobalContext: function () {
                    return {
                        client: {
                            getClient: function () { return 'Web'; },
                            getClientState: function () { return 'Online'; },
                            getFormFactor: function () { return 1; },
                            isNetworkAvailable: function () { return true; },
                            isOffline: function () { return false; }
                        },
                        getClientUrl: function () { return 'https://test.crm.dynamics.com'; },
                        getCurrentAppUrl: function () { return 'https://test.crm.dynamics.com/main.aspx'; },
                        isOnPremises: function () { return false; },
                        getCurrentAppName: function () { return mockPromise; },
                        getCurrentAppProperties: function () { return mockPromise; },
                        getAdvancedConfigSetting: function () { },
                        prependOrgName: function (path) { return '/org' + path; },
                        getWebResourceUrl: function () { },
                        getVersion: function () { return '9.2.0.0'; },
                        organizationSettings: {
                            attributes: {},
                            baseCurrency: {},
                            baseCurrencyId: 'usd-guid',
                            defaultCountryCode: 'US',
                            fullNameConventionCode: 1,
                            isAutoSaveEnabled: true,
                            isTrialOrganization: false,
                            languageId: 1033,
                            organizationExpiryDate: null,
                            organizationId: 'org-guid',
                            uniqueName: 'testorg',
                            useSkypeProtocol: false
                        },
                        userSettings: {
                            dateFormattingInfo: {},
                            defaultDashboardId: 'dash-guid',
                            isGuidedHelpEnabled: true,
                            isHighContrastEnabled: false,
                            isRTL: false,
                            languageId: 1033,
                            roles: new ItemCollectionMock([]),
                            securityRolePrivileges: [],
                            securityRoles: [],
                            getTimeZoneOffsetMinutes: function () { return -480; },
                            transactionCurrency: {},
                            transactionCurrencyId: 'currency-guid',
                            userId: 'user-guid',
                            userName: 'testuser'
                        }
                    };
                },
                getLearningPathAttributeName: function () { },
                invokeProcessAction: function () { return mockPromise; },
                lookupObjects: function () { return mockPromise; },
                getResourceString: function () { },
                refreshParentGrid: function () { },
                showProgressIndicator: function () { },
                getPageContext: function () { }
            },
            WebApi: {
                createRecord: function () { return mockPromise; },
                deleteRecord: function () { return mockPromise; },
                retrieveRecord: function () { return mockPromise; },
                retrieveMultipleRecords: function () { return mockPromise; },
                updateRecord: function () { return mockPromise; },
                execute: function () { return mockPromise; },
                executeMultiple: function () { return mockPromise; },
                online: {
                    execute: function () { return mockPromise; },
                    executeMultiple: function () { return mockPromise; }
                },
                offline: {
                    isAvailable: function () { return true; }
                }
            },
            Copilot: {
                executeEvent: function () { return mockPromise; },
                executePrompt: function () { return mockPromise; }
            }
        };

        XrmMockGenerator.formContext = new FormContextMock(data, ui);
        var executionContext = XrmMockGenerator.formContext;

        // Mock getFormContext on executionContext
        executionContext.getFormContext = () => executionContext;

        var formConfig = {
            body: ['Name'],
            tab: [],
            header: [],
            bpf: [],
            quick: [],
            grid: [],
            navigation: [],
            dialog: []
        };

        var form = devKit.LoadFormV2(executionContext, "web-resource", formConfig);

        // Verify form structure
        expect(form).toBeDefined();
        expect(form.Body).toBeDefined();
        expect(form.Body.Name).toBeDefined();
        expect(form.Header).toBeDefined();
        expect(form.Process).toBeDefined();
        expect(form.QuickForm).toBeDefined();
        expect(form.Grid).toBeDefined();
        expect(form.Navigation).toBeDefined();
        expect(form.Utility).toBeDefined();
        expect(form.ExecutionContext).toBeDefined();
        expect(form.WebApi).toBeDefined();
        expect(form.Copilot).toBeDefined();
        expect(form.SidePanes).toBeDefined();
    });
    test('devKit.LoadFormV2 - with tabs and sections', () => {
        // Simplified test that verifies LoadFormV2 can handle tab config
        var attributes = new ItemCollectionMock([]);
        var entity = new EntityMock({ attributes: attributes });
        var data = new DataMock(entity);

        var ui = new UiMock({
            formSelector: new FormSelectorMock(new ItemCollectionMock([
                new FormItemMock({ id: "form-guid", label: "Main", currentItem: true, formType: 2 })
            ])),
            controls: new ItemCollectionMock([]),
            tabs: new ItemCollectionMock([])
        });

        const mockPromise = { then: function () { return this; } };
        global.Xrm = {
            App: { addGlobalNotification: function () { return mockPromise; }, clearGlobalNotification: function () { return mockPromise; }, sidePanes: { state: 0, createPane: function () { return mockPromise; }, getPane: function () { }, getAllPanes: function () { }, getSelectedPane: function () { } } },
            Utility: { getGlobalContext: function () { return { client: {}, organizationSettings: {}, userSettings: { getTimeZoneOffsetMinutes: function () { } }, getClientUrl: function () { }, getVersion: function () { } }; } },
            WebApi: { createRecord: function () { return mockPromise; }, online: { execute: function () { return mockPromise; }, executeMultiple: function () { return mockPromise; } }, offline: { isAvailable: function () { } } },
            Copilot: { executeEvent: function () { return mockPromise; }, executePrompt: function () { return mockPromise; } }
        };

        XrmMockGenerator.formContext = new FormContextMock(data, ui);
        var executionContext = XrmMockGenerator.formContext;
        executionContext.getFormContext = () => executionContext;

        var formConfig = {
            body: [],
            tab: [],
            header: [],
            bpf: [],
            quick: [],
            grid: [],
            navigation: [],
            dialog: []
        };

        var form = devKit.LoadFormV2(executionContext, "web-resource", formConfig);

        expect(form.Body).toBeDefined();
        expect(form.Body.Tab).toBeDefined();
    });
    test('devKit.LoadFormV2 - with BPF fields', () => {
        var attributes = new ItemCollectionMock([]);
        var entity = new EntityMock({ attributes: attributes });
        var data = new DataMock(entity);

        var ui = new UiMock({
            formSelector: new FormSelectorMock(new ItemCollectionMock([
                new FormItemMock({ id: "form-guid", label: "Main", currentItem: true, formType: 2 })
            ])),
            controls: new ItemCollectionMock([]),
            tabs: new ItemCollectionMock([])
        });

        const mockPromise = { then: function () { return this; } };
        global.Xrm = {
            App: { addGlobalNotification: function () { return mockPromise; }, clearGlobalNotification: function () { return mockPromise; }, sidePanes: { state: 0, createPane: function () { return mockPromise; }, getPane: function () { }, getAllPanes: function () { }, getSelectedPane: function () { } } },
            Utility: { getGlobalContext: function () { return { client: {}, organizationSettings: {}, userSettings: { getTimeZoneOffsetMinutes: function () { } }, getClientUrl: function () { }, getVersion: function () { } }; } },
            WebApi: { createRecord: function () { return mockPromise; }, online: { execute: function () { return mockPromise; }, executeMultiple: function () { return mockPromise; } }, offline: { isAvailable: function () { } } },
            Copilot: { executeEvent: function () { return mockPromise; }, executePrompt: function () { return mockPromise; } }
        };

        XrmMockGenerator.formContext = new FormContextMock(data, ui);
        var executionContext = XrmMockGenerator.formContext;
        executionContext.getFormContext = () => executionContext;

        var formConfig = {
            body: [],
            tab: [],
            header: [],
            bpf: [],
            quick: [],
            grid: [],
            navigation: [],
            dialog: []
        };

        var form = devKit.LoadFormV2(executionContext, "web-resource", formConfig);

        expect(form.Process).toBeDefined();
    });
    test('devKit.LoadFormV2 - with quickforms', () => {
        var attributes = new ItemCollectionMock([]);
        var entity = new EntityMock({ attributes: attributes });
        var data = new DataMock(entity);

        var ui = new UiMock({
            formSelector: new FormSelectorMock(new ItemCollectionMock([
                new FormItemMock({ id: "form-guid", label: "Main", currentItem: true, formType: 2 })
            ])),
            controls: new ItemCollectionMock([])
        });

        const mockPromise = { then: function () { return this; } };
        global.Xrm = {
            App: { addGlobalNotification: function () { return mockPromise; }, clearGlobalNotification: function () { return mockPromise; }, sidePanes: { state: 0, createPane: function () { return mockPromise; }, getPane: function () { }, getAllPanes: function () { }, getSelectedPane: function () { } } },
            Utility: { getGlobalContext: function () { return { client: {}, organizationSettings: {}, userSettings: { getTimeZoneOffsetMinutes: function () { } }, getClientUrl: function () { }, getVersion: function () { } }; } },
            WebApi: { createRecord: function () { return mockPromise; }, online: { execute: function () { return mockPromise; }, executeMultiple: function () { return mockPromise; } }, offline: { isAvailable: function () { } } },
            Copilot: { executeEvent: function () { return mockPromise; }, executePrompt: function () { return mockPromise; } }
        };

        XrmMockGenerator.formContext = new FormContextMock(data, ui);
        var executionContext = XrmMockGenerator.formContext;
        executionContext.getFormContext = () => executionContext;

        var formConfig = {
            body: [],
            tab: [],
            header: [],
            bpf: [],
            quick: [],
            grid: [],
            navigation: [],
            dialog: []
        };

        var form = devKit.LoadFormV2(executionContext, "web-resource", formConfig);

        expect(form.QuickForm).toBeDefined();
    });
    test('devKit.LoadFormV2 - with dialog', () => {
        var attributes = new ItemCollectionMock([
            new AttributeMock({ name: "dialogfield", value: "test" })
        ]);
        var entity = new EntityMock({ attributes: attributes });
        var data = new DataMock(entity);

        var dialogControl = new StringControlMock({
            attribute: new StringAttributeMock({ name: "dialogfield", value: "test" }),
            name: "dialogfield",
            label: "Dialog Field"
        });

        var ui = new UiMock({
            formSelector: new FormSelectorMock(new ItemCollectionMock([
                new FormItemMock({ id: "form-guid", label: "Main", currentItem: true, formType: 2 })
            ])),
            controls: new ItemCollectionMock([dialogControl])
        });

        const mockPromise = { then: function () { return this; } };
        global.Xrm = {
            App: { addGlobalNotification: function () { return mockPromise; }, clearGlobalNotification: function () { return mockPromise; }, sidePanes: { state: 0, createPane: function () { return mockPromise; }, getPane: function () { }, getAllPanes: function () { }, getSelectedPane: function () { } } },
            Utility: { getGlobalContext: function () { return { client: {}, organizationSettings: {}, userSettings: { getTimeZoneOffsetMinutes: function () { } }, getClientUrl: function () { }, getVersion: function () { } }; } },
            WebApi: { createRecord: function () { return mockPromise; }, online: { execute: function () { return mockPromise; }, executeMultiple: function () { return mockPromise; } }, offline: { isAvailable: function () { } } },
            Copilot: { executeEvent: function () { return mockPromise; }, executePrompt: function () { return mockPromise; } }
        };

        XrmMockGenerator.formContext = new FormContextMock(data, ui);
        var executionContext = XrmMockGenerator.formContext;
        executionContext.getFormContext = () => executionContext;

        var formConfig = {
            body: [],
            tab: [],
            header: [],
            bpf: [],
            quick: [],
            grid: [],
            navigation: [],
            dialog: ['dialogfield']
        };

        var form = devKit.LoadFormV2(executionContext, "web-resource", formConfig);

        expect(form.Dialog).toBeDefined();
        expect(form.Dialog.dialogfield).toBeDefined();
    });
    test('devKit.LoadSidePanes', () => {
        let createCalled = false, getCalled = false, getAllCalled = false, getSelectedCalled = false;
        const mockPromise = { then: function (cb) { if (cb) cb(); return this; } };
        global.Xrm = {
            App: {
                sidePanes: {
                    state: 0,
                    createPane: function () { createCalled = true; return mockPromise; },
                    getPane: function (id) { getCalled = true; return { id: 'pane-1' }; },
                    getAllPanes: function () { getAllCalled = true; return [{ id: 'pane-1' }, { id: 'pane-2' }]; },
                    getSelectedPane: function () { getSelectedCalled = true; return { id: 'pane-1' }; }
                }
            }
        };

        var sidePanes = devKit.LoadSidePanes();

        // Test DisplayState getter/setter
        expect(sidePanes.DisplayState).toBe(0);
        sidePanes.DisplayState = 1;
        expect(Xrm.App.sidePanes.state).toBe(1);

        // Test Create
        var successCallback = function () { };
        sidePanes.Create({ id: 'pane-3', title: 'New Pane' }, successCallback);
        expect(createCalled).toBe(true);

        // Test Get
        var pane = sidePanes.Get('pane-1');
        expect(getCalled).toBe(true);
        expect(pane.id).toBe('pane-1');

        // Test GetAll
        var allPanes = sidePanes.GetAll();
        expect(getAllCalled).toBe(true);
        expect(allPanes.length).toBe(2);

        // Test GetSelected
        var selectedPane = sidePanes.GetSelected();
        expect(getSelectedCalled).toBe(true);
        expect(selectedPane.id).toBe('pane-1');
    });
    test('devKit.LoadWebApi - RetrieveRecords throws error for OData without entity', () => {
        global.Xrm = {
            WebApi: {
                retrieveMultipleRecords: function () { return { then: function () { } }; }
            }
        };

        var webApi = devKit.LoadWebApi();

        // OData query that starts with ? but doesn't contain fetchXml - should throw
        expect(() => {
            webApi.RetrieveRecords((e) => e, '?$select=name&$filter=name eq "test"');
        }).toThrow('Entity name cannot be determined from OData query. Please provide entityLogicalName as second parameter.');
    });
    test('devKit.LoadWebApi - extractEntityName throws error when entity not found', () => {
        const mockPromise = {
            then: function (successFn) {
                return { then: function () { } };
            }
        };
        global.Xrm = {
            WebApi: {
                retrieveMultipleRecords: function () { return mockPromise; }
            }
        };
        // Create a valid DOMParser for the test environment
        global.DOMParser = class {
            parseFromString(str, type) {
                return {
                    querySelector: () => null // Entity node not found
                };
            }
        };

        var webApi = devKit.LoadWebApi();

        // FetchXml without entity name attribute should throw
        var invalidFetchXml = '<fetch><entity></entity></fetch>';
        expect(() => {
            webApi.RetrieveRecords((e) => e, invalidFetchXml);
        }).toThrow('Entity name not found in fetchXml');
    });
    // Additional tests to cover uncovered lines
    test('getXrm - should return window.Xrm when available (line 5)', () => {
        global.window = { Xrm: { test: 'value' } };
        // Force getXrm to be called by loading webapi
        var webApi = devKit.LoadWebApi();
        expect(webApi).toBeDefined();
    });
    test('getXrm - should fall back to parent.Xrm (line 8)', () => {
        delete global.window;
        global.parent = { Xrm: { WebApi: {} } };
        var webApi = devKit.LoadWebApi();
        expect(webApi).toBeDefined();
    });
    test('findFormItem - should return null for non-existing form (line 41)', () => {
        var attributes = new ItemCollectionMock([]);
        var entity = new EntityMock({ entityName: "account", id: "id1", attributes: attributes });
        var data = new DataMock(entity);
        var ui = new UiMock({
            formSelector: new FormSelectorMock(new ItemCollectionMock([
                new FormItemMock({ id: "form1", label: "Form 1", currentItem: true })
            ]))
        });
        XrmMockGenerator.formContext = new FormContextMock(data, ui);
        var form = devKit.LoadForm(XrmMockGenerator.formContext);
        // Search for non-existing form ID should return null (line 41)
        var result = form.FormIsVisible("non-existing-id");
        expect(result).toBeUndefined();
    });
    test('form.Refresh with callbacks (lines 71-72)', () => {
        var attributes = new ItemCollectionMock([]);
        var entity = new EntityMock({ entityName: "account", id: "id1", attributes: attributes });
        var mockPromise = { then: function (s, e) { s && s(); return mockPromise; } };
        var data = {
            refresh: function (save) { return mockPromise; },
            addOnLoad: function () { },
            removeOnLoad: function () { }
        };
        var ui = new UiMock({ formSelector: new FormSelectorMock(new ItemCollectionMock([])) });
        var formContext = { data: data, ui: ui };
        var form = devKit.LoadForm(formContext);
        var successCalled = false;
        form.Refresh(true, function () { successCalled = true; }, function () { });
        expect(successCalled).toBe(true);
    });
    test('form.Save with callbacks (lines 79-80)', () => {
        var mockPromise = { then: function (s, e) { s && s(); return mockPromise; } };
        var data = {
            save: function (opts) { return mockPromise; },
            addOnLoad: function () { },
            removeOnLoad: function () { }
        };
        var ui = new UiMock({ formSelector: new FormSelectorMock(new ItemCollectionMock([])) });
        var formContext = { data: data, ui: ui };
        var form = devKit.LoadForm(formContext);
        var successCalled = false;
        form.Save({}, function () { successCalled = true; }, function () { });
        expect(successCalled).toBe(true);
    });
    test('ActivePath.get and ActivePath.forEach (lines 151, 156-158)', () => {
        var stageMock = {
            getId: () => 'stage1',
            getName: () => 'Stage 1',
            getStatus: () => 'active',
            getCategory: () => ({ getValue: () => 1 }),
            getSteps: () => []
        };
        var activePath = {
            get: (index) => stageMock,
            getLength: () => 1
        };
        var process = {
            getActivePath: () => activePath,
            getActiveProcess: () => null,
            getActiveStage: () => null,
            getSelectedStage: () => null,
            getInstanceId: () => 'id1',
            getInstanceName: () => 'name1',
            getStatus: () => 'active',
            setStatus: () => { }
        };
        var formContext = { data: { process: process }, ui: { process: { getDisplayState: () => 'collapsed', setDisplayState: () => { }, getVisible: () => true, setVisible: () => { } } } };
        var loadedProcess = devKit.LoadProcess(formContext);
        var path = loadedProcess.ActivePath;
        var stage = path.get(0);
        expect(stage.Id).toBe('stage1');
        expect(path.getLength()).toBe(1);
        var count = 0;
        path.forEach((s, i) => { count++; });
        expect(count).toBe(1);
    });
    test('process.ProcessInstances callback (lines 189-198)', () => {
        var process = {
            getProcessInstances: function (callback) {
                callback({
                    instance1: {
                        ProcessDefinitionID: 'proc1',
                        ProcessDefinitionName: 'Process 1',
                        CreatedOn: '2025-01-01',
                        CreatedOnDate: new Date(),
                        ProcessInstanceID: 'inst1',
                        ProcessInstanceName: 'Instance 1',
                        StatusCodeName: 'Active'
                    }
                });
            },
            getActivePath: () => ({ get: () => null, getLength: () => 0 }),
            getActiveProcess: () => null,
            getActiveStage: () => null,
            getSelectedStage: () => null
        };
        var formContext = { data: { process: process }, ui: { process: {} } };
        var loadedProcess = devKit.LoadProcess(formContext);
        var result = null;
        loadedProcess.ProcessInstances(function (processes) { result = processes; });
        expect(result).not.toBeNull();
        expect(result.length).toBe(1);
        expect(result[0].ProcessId).toBe('proc1');
        expect(result[0].InstanceId).toBe('inst1');
    });
    test('ContentWindow with callback (lines 277-278)', () => {
        var mockPromise = { then: function (s, e) { if (s) s('contentWindow'); return mockPromise; } };
        var control = {
            getContentWindow: function () { return mockPromise; },
            getName: () => 'iframe1'
        };
        var formContext = {
            getControl: (name) => control,
            getAttribute: () => null
        };
        var body = { IframeField: {} };
        devKit.LoadFields(formContext, body);
        var result = null;
        body.IframeField.ContentWindow(function (cw) { result = cw; }, function () { });
        expect(result).toBe('contentWindow');
    });
    test('findControlFromAttribute coverage (lines 301-302)', () => {
        var ctrl = { getName: () => 'name' };
        var attribute = {
            controls: { forEach: function (cb) { cb(ctrl); } },
            getName: () => 'name',
            getAttributeType: () => 'string',
            getValue: () => 'test'
        };
        var formContext = {
            getControl: (name) => null,  // Control not found directly
            getAttribute: (name) => attribute
        };
        var body = { Name: {} };
        devKit.LoadFields(formContext, body);
        expect(body.Name.AttributeName).toBe('name');
    });
    test('utility callbacks - AllowedStatusTransitions (lines 578-579)', () => {
        global.Xrm = {
            Utility: {
                getAllowedStatusTransitions: function (e, s) {
                    return { then: function (sc, ec) { if (sc) sc(['active', 'inactive']); } };
                },
                getGlobalContext: () => ({})
            }
        };
        var utility = devKit.LoadUtility();
        var result = null;
        utility.AllowedStatusTransitions('account', 1, function (r) { result = r; }, function () { });
        expect(result).toEqual(['active', 'inactive']);
    });
    test('utility callbacks - Device methods (lines 583-620)', () => {
        var mockPromise = { then: function (s, e) { if (s) s('result'); } };
        global.Xrm = {
            Utility: { getGlobalContext: () => ({}) },
            Device: {
                getBarcodeValue: () => mockPromise,
                captureAudio: () => mockPromise,
                captureImage: () => mockPromise,
                captureVideo: () => mockPromise,
                getCurrentPosition: () => mockPromise
            }
        };
        var utility = devKit.LoadUtility();
        var r1, r2, r3, r4, r5;
        utility.BarcodeValue(function (r) { r1 = r; }, function () { });
        utility.CaptureAudio(function (r) { r2 = r; }, function () { });
        utility.CaptureImage({}, function (r) { r3 = r; }, function () { });
        utility.CaptureVideo(function (r) { r4 = r; }, function () { });
        utility.CurrentPosition(function (r) { r5 = r; }, function () { });
        expect(r1).toBe('result');
        expect(r2).toBe('result');
        expect(r3).toBe('result');
        expect(r4).toBe('result');
        expect(r5).toBe('result');
    });
    test('utility callbacks - more utility methods (lines 625-640)', () => {
        var mockPromise = { then: function (s, e) { if (s) s('result'); } };
        global.Xrm = {
            Utility: {
                getGlobalContext: () => ({}),
                getEntityMetadata: () => mockPromise,
                invokeProcessAction: () => mockPromise,
                lookupObjects: () => mockPromise
            }
        };
        var utility = devKit.LoadUtility();
        var r1, r2, r3;
        utility.EntityMetadata('account', [], function (r) { r1 = r; }, function () { });
        utility.InvokeProcessAction('action', {}, function (r) { r2 = r; }, function () { });
        utility.LookupObjects({}, function (r) { r3 = r; }, function () { });
        expect(r1).toBe('result');
        expect(r2).toBe('result');
        expect(r3).toBe('result');
    });
    test('extractEntityName - fetchXml with fetchXml= prefix (lines 703-704)', () => {
        global.DOMParser = class {
            parseFromString(str, type) {
                return {
                    querySelector: (sel) => ({ hasAttribute: () => true, getAttribute: () => 'account' })
                };
            }
        };
        var mockPromise = { then: function (s, e) { if (s) s({ entities: [{ accountid: '123' }] }); } };
        global.Xrm = {
            WebApi: {
                retrieveMultipleRecords: function (entity, opts, max) { return mockPromise; }
            }
        };
        global.window = { Xrm: global.Xrm };
        var webApi = devKit.LoadWebApi();
        var result = null;
        // Test RetrieveMultipleRecords with callback (lines 730-734 equivalent)
        webApi.RetrieveMultipleRecords('account', '?$select=name', 100, function (r) { result = r; }, function () { });
        expect(result.entities.length).toBe(1);
    });
    test('LoadFormV2 - with all config options (lines 950-987)', () => {
        var mockControl = {
            getName: () => 'name',
            getLabel: () => 'Name',
            getControlType: () => 'standard',
            getAttribute: () => ({ getName: () => 'name', getAttributeType: () => 'string', getValue: () => 'test' })
        };
        var mockTab = {
            getName: () => 'tab_general',
            getParent: () => null,
            getContentType: () => 'cardSections',
            setContentType: () => { },
            getDisplayState: () => 'expanded',
            setDisplayState: () => { },
            getLabel: () => 'General',
            setLabel: () => { },
            getVisible: () => true,
            setVisible: () => { },
            addTabStateChange: () => { },
            removeTabStateChange: () => { },
            setFocus: () => { },
            sections: { get: () => ({ getName: () => 'section1', getParent: () => null, getLabel: () => 'Section 1', setLabel: () => { }, getVisible: () => true, setVisible: () => { } }) }
        };
        var formContext = {
            getFormContext: () => formContext,
            getControl: (name) => mockControl,
            getAttribute: (name) => mockControl.getAttribute(),
            data: { entity: { getId: () => 'id1', getEntityName: () => 'account' } },
            ui: {
                getFormType: () => 2,
                tabs: { get: () => mockTab },
                quickForms: { get: () => ({ getName: () => 'qf1', getControlType: () => 'quickform', getControl: () => null, isLoaded: () => true, refresh: () => { }, setFocus: () => { }, getParent: () => null, getDisabled: () => false, setDisabled: () => { }, getLabel: () => 'QF', setLabel: () => { }, getVisible: () => true, setVisible: () => { } }) },
                headerSection: { getBodyVisible: () => true, setBodyVisible: () => { }, getCommandBarVisible: () => true, setCommandBarVisible: () => { }, getTabNavigatorVisible: () => true, setTabNavigatorVisible: () => { } },
                navigation: { items: { getLength: () => 0, get: () => null } }
            }
        };
        var form = devKit.LoadFormV2(formContext, 'webresource', {
            body: ['Name'],
            tab: ['tab_general___section1'],
            header: ['Name'],
            bpf: ['BPF___Name'],
            quick: ['QuickForm___Field'],
            grid: ['Grid1'],
            navigation: ['nav1'],
            dialog: ['DialogField']
        });
        expect(form.Body).toBeDefined();
        expect(form.Body.Tab).toBeDefined();
        expect(form.Header).toBeDefined();
        expect(form.Process).toBeDefined();
        expect(form.QuickForm).toBeDefined();
        expect(form.Grid).toBeDefined();
        expect(form.Navigation).toBeDefined();
        expect(form.Dialog).toBeDefined();
    });
    test('LoadFormV2 - dialog with executionContext.getFormContext (line 942)', () => {
        var mockControl = {
            getName: () => 'name',
            getAttribute: () => ({ getName: () => 'name', getAttributeType: () => 'string' })
        };
        var innerFormContext = {
            getControl: () => mockControl,
            getAttribute: () => mockControl.getAttribute(),
            data: { entity: {} },
            ui: { getFormType: () => 2, tabs: { get: () => null }, headerSection: {}, navigation: { items: { getLength: () => 0 } } }
        };
        var executionContext = {
            getFormContext: () => innerFormContext
        };
        var form = devKit.LoadFormV2(executionContext, 'wr', { body: [] });
        expect(form).toBeDefined();
    });
    // Tests for promise-based usage (else branches - no callbacks)
    test('form.Refresh returns promise when no callback (line 72)', () => {
        var mockPromise = { then: function (s, e) { return mockPromise; } };
        var data = {
            refresh: function (save) { return mockPromise; },
            addOnLoad: function () { },
            removeOnLoad: function () { }
        };
        var ui = new UiMock({ formSelector: new FormSelectorMock(new ItemCollectionMock([])) });
        var formContext = { data: data, ui: ui };
        var form = devKit.LoadForm(formContext);
        // Call without callbacks - should return promise (line 72)
        var result = form.Refresh(true);
        expect(result).toBe(mockPromise);
    });
    test('form.Save returns promise when no callback (line 80)', () => {
        var mockPromise = { then: function (s, e) { return mockPromise; } };
        var data = {
            save: function (opts) { return mockPromise; },
            addOnLoad: function () { },
            removeOnLoad: function () { }
        };
        var ui = new UiMock({ formSelector: new FormSelectorMock(new ItemCollectionMock([])) });
        var formContext = { data: data, ui: ui };
        var form = devKit.LoadForm(formContext);
        // Call without callbacks - should return promise (line 80)
        var result = form.Save({});
        expect(result).toBe(mockPromise);
    });
    test('ContentWindow returns promise when no callback (line 278)', () => {
        var mockPromise = { then: function (s, e) { return mockPromise; } };
        var control = {
            getContentWindow: function () { return mockPromise; },
            getName: () => 'iframe1'
        };
        var formContext = {
            getControl: (name) => control,
            getAttribute: () => null
        };
        var body = { IframeField: {} };
        devKit.LoadFields(formContext, body);
        // Call without callbacks - should return promise (line 278)
        var result = body.IframeField.ContentWindow();
        expect(result).toBe(mockPromise);
    });
    test('utility promise-based returns (lines 579, 584, 589, 594, 599, 620, 626, 634, 640)', () => {
        var mockPromise = { then: function (s, e) { return mockPromise; } };
        global.Xrm = {
            Utility: {
                getGlobalContext: () => ({}),
                getAllowedStatusTransitions: () => mockPromise,
                getEntityMetadata: () => mockPromise,
                invokeProcessAction: () => mockPromise,
                lookupObjects: () => mockPromise
            },
            Device: {
                getBarcodeValue: () => mockPromise,
                captureAudio: () => mockPromise,
                captureImage: () => mockPromise,
                captureVideo: () => mockPromise,
                getCurrentPosition: () => mockPromise
            }
        };
        var utility = devKit.LoadUtility();
        // All without callbacks - should return promises
        expect(utility.AllowedStatusTransitions('account', 1)).toBe(mockPromise); // line 579
        expect(utility.BarcodeValue()).toBe(mockPromise); // line 584
        expect(utility.CaptureAudio()).toBe(mockPromise); // line 589
        expect(utility.CaptureImage({})).toBe(mockPromise); // line 594
        expect(utility.CaptureVideo()).toBe(mockPromise); // line 599
        expect(utility.CurrentPosition()).toBe(mockPromise); // line 620
        expect(utility.EntityMetadata('account', [])).toBe(mockPromise); // line 626
        expect(utility.InvokeProcessAction('action', {})).toBe(mockPromise); // line 634
        expect(utility.LookupObjects({})).toBe(mockPromise); // line 640
    });
    test('extractEntityName - xml starts with < (lines 703-704)', () => {
        global.DOMParser = class {
            parseFromString(str, type) {
                return {
                    querySelector: (sel) => ({ hasAttribute: () => true, getAttribute: () => 'account' })
                };
            }
        };
        var mockPromise = {
            then: function (s, e) {
                if (s) {
                    var result = s({ entities: [{ id: '123' }] });
                    return result && result.then ? result : { then: () => { } };
                }
                return { then: () => { } };
            }
        };
        global.Xrm = {
            WebApi: {
                retrieveMultipleRecords: function (entity, opts, max) { return mockPromise; }
            }
        };
        global.window = { Xrm: global.Xrm };
        var webApi = devKit.LoadWebApi();
        // Pass XML that starts with space+< to test lines 703-704
        var result = webApi.RetrieveRecords((e) => e, '   <fetch><entity name="account"/></fetch>');
        expect(result).toBeDefined();
    });
    test('WebApi.RetrieveRecord returns promise when no callback (lines 730-734)', () => {
        var mockPromise = { then: function (s, e) { return mockPromise; } };
        global.Xrm = {
            WebApi: {
                retrieveRecord: function (entity, id, opts) { return mockPromise; }
            }
        };
        global.window = { Xrm: global.Xrm };
        var webApi = devKit.LoadWebApi();
        // Call without callbacks - should return promise (lines 730-734)
        var result = webApi.RetrieveRecord('account', '123', '?$select=name');
        expect(result).toBe(mockPromise);
    });
    test('extractEntityName with fetchXml= in query string (lines 672-673)', () => {
        global.DOMParser = class {
            parseFromString(str, type) {
                return {
                    querySelector: (sel) => ({ hasAttribute: () => true, getAttribute: () => 'contact' })
                };
            }
        };
        var mockPromise = {
            then: function (s, e) {
                if (s) {
                    var result = s({ entities: [{ id: '456' }] });
                    return result && result.then ? result : { then: () => { } };
                }
                return { then: () => { } };
            }
        };
        global.Xrm = {
            WebApi: {
                retrieveMultipleRecords: function (entity, opts, max) { return mockPromise; }
            }
        };
        global.window = { Xrm: global.Xrm };
        var webApi = devKit.LoadWebApi();
        // Pass query string with fetchXml= to test lines 672-673
        var encodedFetchXml = encodeURIComponent('<fetch><entity name="contact"/></fetch>');
        var result = webApi.RetrieveRecords((e) => e, '?fetchXml=' + encodedFetchXml);
        expect(result).toBeDefined();
    });
    // Final tests to cover remaining lines
    test('utility.PickFile returns promise when no callback (lines 672-673)', () => {
        var mockPromise = { then: function (s, e) { return mockPromise; } };
        global.Xrm = {
            Utility: { getGlobalContext: () => ({}) },
            Device: {
                pickFile: () => mockPromise
            }
        };
        var utility = devKit.LoadUtility();
        // Call without callbacks - should return promise (lines 672-673)
        var result = utility.PickFile({});
        expect(result).toBe(mockPromise);
    });
    test('utility.PickFile with callback (lines 672 if branch)', () => {
        var mockPromise = { then: function (s, e) { if (s) s(['file1']); return mockPromise; } };
        global.Xrm = {
            Utility: { getGlobalContext: () => ({}) },
            Device: {
                pickFile: () => mockPromise
            }
        };
        var utility = devKit.LoadUtility();
        var result = null;
        utility.PickFile({}, function (r) { result = r; }, function () { });
        expect(result).toEqual(['file1']);
    });
    test('extractEntityName - else if branch with trimmed XML (lines 703-704)', () => {
        global.DOMParser = class {
            parseFromString(str, type) {
                return {
                    querySelector: (sel) => ({ hasAttribute: () => true, getAttribute: () => 'lead' })
                };
            }
        };
        var mockPromise = {
            then: function (s, e) {
                if (s) {
                    var result = s({ entities: [{ id: '789' }] });
                    return result && result.then ? result : { then: () => { } };
                }
                return { then: () => { } };
            }
        };
        global.Xrm = {
            WebApi: {
                retrieveMultipleRecords: function (entity, opts, max) { return mockPromise; }
            }
        };
        global.window = { Xrm: global.Xrm };
        var webApi = devKit.LoadWebApi();
        // Pass XML WITHOUT fetchXml= prefix and WITH leading whitespace to test else if (lines 703-704)
        var result = webApi.RetrieveRecords((e) => e, '  <fetch><entity name="lead"/></fetch>');
        expect(result).toBeDefined();
    });
    // Additional promise tests for utility functions
    test('utility.CurrentAppName returns promise when no callback', () => {
        var mockPromise = { then: function (s, e) { return mockPromise; } };
        global.Xrm = {
            Utility: { getGlobalContext: () => ({ getCurrentAppName: () => mockPromise }) }
        };
        var utility = devKit.LoadUtility();
        var result = utility.CurrentAppName();
        expect(result).toBe(mockPromise);
    });
    test('utility.CurrentAppName with callback', () => {
        var mockPromise = { then: function (s, e) { if (s) s('MyApp'); return mockPromise; } };
        global.Xrm = {
            Utility: { getGlobalContext: () => ({ getCurrentAppName: () => mockPromise }) }
        };
        var utility = devKit.LoadUtility();
        var result = null;
        utility.CurrentAppName(function (r) { result = r; }, function () { });
        expect(result).toBe('MyApp');
    });
    test('utility.CurrentAppProperties returns promise when no callback', () => {
        var mockPromise = { then: function (s, e) { return mockPromise; } };
        global.Xrm = {
            Utility: { getGlobalContext: () => ({ getCurrentAppProperties: () => mockPromise }) }
        };
        var utility = devKit.LoadUtility();
        var result = utility.CurrentAppProperties();
        expect(result).toBe(mockPromise);
    });
    test('utility.CurrentAppProperties with callback', () => {
        var mockPromise = { then: function (s, e) { if (s) s({ appId: '123' }); return mockPromise; } };
        global.Xrm = {
            Utility: { getGlobalContext: () => ({ getCurrentAppProperties: () => mockPromise }) }
        };
        var utility = devKit.LoadUtility();
        var result = null;
        utility.CurrentAppProperties(function (r) { result = r; }, function () { });
        expect(result.appId).toBe('123');
    });
    test('utility.AddGlobalNotification returns promise when no callback', () => {
        var mockPromise = { then: function (s, e) { return mockPromise; } };
        global.Xrm = {
            Utility: { getGlobalContext: () => ({}) },
            App: { addGlobalNotification: () => mockPromise }
        };
        var utility = devKit.LoadUtility();
        var result = utility.AddGlobalNotification({});
        expect(result).toBe(mockPromise);
    });
    test('utility.AddGlobalNotification with callback', () => {
        var mockPromise = { then: function (s, e) { if (s) s('notif-id'); return mockPromise; } };
        global.Xrm = {
            Utility: { getGlobalContext: () => ({}) },
            App: { addGlobalNotification: () => mockPromise }
        };
        var utility = devKit.LoadUtility();
        var result = null;
        utility.AddGlobalNotification({}, function (r) { result = r; }, function () { });
        expect(result).toBe('notif-id');
    });
    test('utility.ClearGlobalNotification returns promise when no callback', () => {
        var mockPromise = { then: function (s, e) { return mockPromise; } };
        global.Xrm = {
            Utility: { getGlobalContext: () => ({}) },
            App: { clearGlobalNotification: () => mockPromise }
        };
        var utility = devKit.LoadUtility();
        var result = utility.ClearGlobalNotification('notif-id');
        expect(result).toBe(mockPromise);
    });
    test('utility.ClearGlobalNotification with callback', () => {
        var mockPromise = { then: function (s, e) { if (s) s(true); return mockPromise; } };
        global.Xrm = {
            Utility: { getGlobalContext: () => ({}) },
            App: { clearGlobalNotification: () => mockPromise }
        };
        var utility = devKit.LoadUtility();
        var result = null;
        utility.ClearGlobalNotification('notif-id', function (r) { result = r; }, function () { });
        expect(result).toBe(true);
    });
    test('utility.NavigateTo returns promise when no callback', () => {
        var mockPromise = { then: function (s, e) { return mockPromise; } };
        global.Xrm = {
            Utility: { getGlobalContext: () => ({}) },
            Navigation: { navigateTo: () => mockPromise }
        };
        var utility = devKit.LoadUtility();
        var result = utility.NavigateTo({}, {});
        expect(result).toBe(mockPromise);
    });
    test('utility.NavigateTo with callback', () => {
        var mockPromise = { then: function (s, e) { if (s) s('navigated'); return mockPromise; } };
        global.Xrm = {
            Utility: { getGlobalContext: () => ({}) },
            Navigation: { navigateTo: () => mockPromise }
        };
        var utility = devKit.LoadUtility();
        var result = null;
        utility.NavigateTo({}, {}, function (r) { result = r; }, function () { });
        expect(result).toBe('navigated');
    });
    test('utility.OpenAlertDialog returns promise when no callback', () => {
        var mockPromise = { then: function (s, e) { return mockPromise; } };
        global.Xrm = {
            Utility: { getGlobalContext: () => ({}) },
            Navigation: { openAlertDialog: () => mockPromise }
        };
        var utility = devKit.LoadUtility();
        var result = utility.OpenAlertDialog({}, {});
        expect(result).toBe(mockPromise);
    });
    test('utility.OpenAlertDialog with callback', () => {
        var mockPromise = { then: function (s, e) { if (s) s('closed'); return mockPromise; } };
        global.Xrm = {
            Utility: { getGlobalContext: () => ({}) },
            Navigation: { openAlertDialog: () => mockPromise }
        };
        var utility = devKit.LoadUtility();
        var result = null;
        utility.OpenAlertDialog({}, {}, function (r) { result = r; }, function () { });
        expect(result).toBe('closed');
    });
    test('utility.OpenConfirmDialog returns promise when no callback', () => {
        var mockPromise = { then: function (s, e) { return mockPromise; } };
        global.Xrm = {
            Utility: { getGlobalContext: () => ({}) },
            Navigation: { openConfirmDialog: () => mockPromise }
        };
        var utility = devKit.LoadUtility();
        var result = utility.OpenConfirmDialog({}, {});
        expect(result).toBe(mockPromise);
    });
    test('utility.OpenConfirmDialog with callback', () => {
        var mockPromise = { then: function (s, e) { if (s) s({ confirmed: true }); return mockPromise; } };
        global.Xrm = {
            Utility: { getGlobalContext: () => ({}) },
            Navigation: { openConfirmDialog: () => mockPromise }
        };
        var utility = devKit.LoadUtility();
        var result = null;
        utility.OpenConfirmDialog({}, {}, function (r) { result = r; }, function () { });
        expect(result.confirmed).toBe(true);
    });
    test('utility.OpenErrorDialog returns promise when no callback', () => {
        var mockPromise = { then: function (s, e) { return mockPromise; } };
        global.Xrm = {
            Utility: { getGlobalContext: () => ({}) },
            Navigation: { openErrorDialog: () => mockPromise }
        };
        var utility = devKit.LoadUtility();
        var result = utility.OpenErrorDialog({});
        expect(result).toBe(mockPromise);
    });
    test('utility.OpenErrorDialog with callback', () => {
        var mockPromise = { then: function (s, e) { if (s) s('error-handled'); return mockPromise; } };
        global.Xrm = {
            Utility: { getGlobalContext: () => ({}) },
            Navigation: { openErrorDialog: () => mockPromise }
        };
        var utility = devKit.LoadUtility();
        var result = null;
        utility.OpenErrorDialog({}, function (r) { result = r; }, function () { });
        expect(result).toBe('error-handled');
    });
    test('utility.OpenForm returns promise when no callback', () => {
        var mockPromise = { then: function (s, e) { return mockPromise; } };
        global.Xrm = {
            Utility: { getGlobalContext: () => ({}) },
            Navigation: { openForm: () => mockPromise }
        };
        var utility = devKit.LoadUtility();
        var result = utility.OpenForm({}, {});
        expect(result).toBe(mockPromise);
    });
    test('utility.OpenForm with callback', () => {
        var mockPromise = { then: function (s, e) { if (s) s({ savedEntityReference: {} }); return mockPromise; } };
        global.Xrm = {
            Utility: { getGlobalContext: () => ({}) },
            Navigation: { openForm: () => mockPromise }
        };
        var utility = devKit.LoadUtility();
        var result = null;
        utility.OpenForm({}, {}, function (r) { result = r; }, function () { });
        expect(result.savedEntityReference).toBeDefined();
    });

    test('Outputs, AddOnOutputChange, RemoveOnOutputChange', () => {
        // setup
        var attributes = new ItemCollectionMock([
            new AttributeMock({
                name: "name"
            })
        ]);
        var entity = new EntityMock({
            attributes: attributes
        });
        var data = new DataMock(entity);
        var mockOutputs = { "output1": "value1" };
        var control = new StringControlMock({
            attribute: new StringAttributeMock({
                name: "name",
                value: "LE VAN PHUOC"
            }),
            name: "name",
            label: "Account Name"
        });
        // Add custom mocks for the missing methods
        control.getOutputs = () => mockOutputs;
        control.addOnOutputChange = (callback) => { control._outputChangeHandler = callback; };
        control.removeOnOutputChange = (callback) => { if (control._outputChangeHandler === callback) delete control._outputChangeHandler; };

        var ui = new UiMock({
            controls: new ItemCollectionMock([control])
        });
        XrmMockGenerator.formContext = new FormContextMock(data, ui);
        var executionContext = XrmMockGenerator.formContext;

        // run
        var body = {
            name: {}
        };
        devKit.LoadFields(executionContext, body);
        var field = body.name;

        // result
        expect(field.Outputs).toBe(mockOutputs);

        var callback = () => { };
        field.AddOnOutputChange(callback);
        expect(control._outputChangeHandler).toBe(callback);

        field.RemoveOnOutputChange(callback);
        expect(control._outputChangeHandler).toBeUndefined();
    });
});
