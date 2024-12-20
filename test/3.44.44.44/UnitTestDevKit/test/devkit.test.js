import { OptionSet, devKit } from '../lib/devkit.mjs';
import {
    XrmMockGenerator, ContextMock, UserSettingsMock, ClientContextMock, LookupValueMock, DataMock, EntityMock, ItemCollectionMock, AttributeMock, StringControlMock,
    StringAttributeMock, UiMock, FormSelectorMock, FormItemMock, FormContextMock, OrganizationSettingsMock, EventContextMock
} from 'xrm-mock';
beforeAll(() => {
    XrmMockGenerator.initialise();
});
// describe('OptionSet', () => {
//     test('should have correct FormType values', () => {
//         expect(OptionSet.FormType.Undefined).toBe(0);
//         expect(OptionSet.FormType.Create).toBe(1);
//         expect(OptionSet.FormType.Update).toBe(2);
//         expect(OptionSet.FormType.ReadOnly).toBe(3);
//         expect(OptionSet.FormType.Disabled).toBe(4);
//         expect(OptionSet.FormType.BulkEdit).toBe(5);
//     });

//     test('should have correct SaveOption values', () => {
//         expect(OptionSet.SaveOption.SaveAndClose).toBe('saveandclose');
//         expect(OptionSet.SaveOption.SaveAndNew).toBe('saveandnew');
//     });

//     test('should have correct SaveMode values', () => {
//         expect(OptionSet.SaveMode.Save).toBe(1);
//         expect(OptionSet.SaveMode.SaveAndClose).toBe(2);
//         expect(OptionSet.SaveMode.Deactivate).toBe(5);
//         expect(OptionSet.SaveMode.Reactivate).toBe(6);
//         expect(OptionSet.SaveMode.Email).toBe(7);
//         expect(OptionSet.SaveMode.Disqualify).toBe(15);
//         expect(OptionSet.SaveMode.Qualify).toBe(16);
//         expect(OptionSet.SaveMode.Assign).toBe(47);
//         expect(OptionSet.SaveMode.SaveAsCompleted).toBe(58);
//         expect(OptionSet.SaveMode.SaveAndNew).toBe(59);
//         expect(OptionSet.SaveMode.AutoSave).toBe(70);
//     });

//     test('should have correct FormNotificationLevel values', () => {
//         expect(OptionSet.FormNotificationLevel.Error).toBe('ERROR');
//         expect(OptionSet.FormNotificationLevel.Warning).toBe('WARNING');
//         expect(OptionSet.FormNotificationLevel.Info).toBe('INFO');
//     });

//     test('should have correct TabDisplayState values', () => {
//         expect(OptionSet.TabDisplayState.Expanded).toBe('expanded');
//         expect(OptionSet.TabDisplayState.Collapsed).toBe('collapsed');
//     });

//     test('should have correct TabContentType values', () => {
//         expect(OptionSet.TabContentType.CardSections).toBe('cardSections');
//         expect(OptionSet.TabContentType.SingleComponent).toBe('singleComponent');
//     });

//     test('should have correct ProcessDisplayState values', () => {
//         expect(OptionSet.ProcessDisplayState.Expanded).toBe('expanded');
//         expect(OptionSet.ProcessDisplayState.Collapsed).toBe('collapsed');
//         expect(OptionSet.ProcessDisplayState.Floating).toBe('floating');
//     });

//     test('should have correct ProcessStatus values', () => {
//         expect(OptionSet.ProcessStatus.Active).toBe('active');
//         expect(OptionSet.ProcessStatus.Aborted).toBe('aborted');
//         expect(OptionSet.ProcessStatus.Finished).toBe('finished');
//     });

//     test('should have correct FieldAttributeType values', () => {
//         expect(OptionSet.FieldAttributeType.Boolean).toBe('boolean');
//         expect(OptionSet.FieldAttributeType.DateTime).toBe('datetime');
//         expect(OptionSet.FieldAttributeType.Decimal).toBe('decimal');
//         expect(OptionSet.FieldAttributeType.Double).toBe('double');
//         expect(OptionSet.FieldAttributeType.Integer).toBe('integer');
//         expect(OptionSet.FieldAttributeType.Lookup).toBe('lookup');
//         expect(OptionSet.FieldAttributeType.Memo).toBe('memo');
//         expect(OptionSet.FieldAttributeType.Money).toBe('money');
//         expect(OptionSet.FieldAttributeType.MultiOptionSet).toBe('multioptionset');
//         expect(OptionSet.FieldAttributeType.OptionSet).toBe('optionset');
//         expect(OptionSet.FieldAttributeType.String).toBe('string');
//     });

//     test('should have correct FieldFormat values', () => {
//         expect(OptionSet.FieldFormat.Date).toBe('date');
//         expect(OptionSet.FieldFormat.DateTime).toBe('datetime');
//         expect(OptionSet.FieldFormat.Duration).toBe('duration');
//         expect(OptionSet.FieldFormat.Email).toBe('email');
//         expect(OptionSet.FieldFormat.Language).toBe('language');
//         expect(OptionSet.FieldFormat.None).toBe('none');
//         expect(OptionSet.FieldFormat.TextArea).toBe('textarea');
//         expect(OptionSet.FieldFormat.Text).toBe('text');
//         expect(OptionSet.FieldFormat.TickerSymbol).toBe('tickersymbol');
//         expect(OptionSet.FieldFormat.Phone).toBe('phone');
//         expect(OptionSet.FieldFormat.TimeZone).toBe('timezone');
//         expect(OptionSet.FieldFormat.Url).toBe('url');
//     });

//     test('should have correct FieldRequiredLevel values', () => {
//         expect(OptionSet.FieldRequiredLevel.None).toBe('none');
//         expect(OptionSet.FieldRequiredLevel.Required).toBe('required');
//         expect(OptionSet.FieldRequiredLevel.Recommended).toBe('recommended');
//     });

//     test('should have correct FieldSubmitMode values', () => {
//         expect(OptionSet.FieldSubmitMode.Always).toBe('always');
//         expect(OptionSet.FieldSubmitMode.Never).toBe('never');
//         expect(OptionSet.FieldSubmitMode.Dirty).toBe('dirty');
//     });

//     test('should have correct FieldControlType values', () => {
//         expect(OptionSet.FieldControlType.Standard).toBe('standard');
//         expect(OptionSet.FieldControlType.Iframe).toBe('iframe');
//         expect(OptionSet.FieldControlType.KbSearch).toBe('kbsearch');
//         expect(OptionSet.FieldControlType.Lookup).toBe('lookup');
//         expect(OptionSet.FieldControlType.MultiSelectOptionset).toBe('multiselectoptionset');
//         expect(OptionSet.FieldControlType.Notes).toBe('notes');
//         expect(OptionSet.FieldControlType.OptionSet).toBe('optionset');
//         expect(OptionSet.FieldControlType.QuickForm).toBe('quickform');
//         expect(OptionSet.FieldControlType.SubGrid).toBe('subgrid');
//         expect(OptionSet.FieldControlType.TimerControl).toBe('timercontrol');
//         expect(OptionSet.FieldControlType.TimelineWall).toBe('timelinewall');
//         expect(OptionSet.FieldControlType.WebResource).toBe('webresource');
//     });

//     test('should have correct FieldNotificationLevel values', () => {
//         expect(OptionSet.FieldNotificationLevel.Error).toBe('ERROR');
//         expect(OptionSet.FieldNotificationLevel.Recommendation).toBe('RECOMMENDATION');
//     });
// });
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
        expect(() => { form.UiAddLoaded(null) }).toThrow(new Error("addLoaded not implemented"));
        expect(() => { form.UiRemoveLoaded(null) }).toThrow(new Error("removeLoaded not implemented"));
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
            fullNameConventionCode: OptionSet.FullNameConventionCode.FirstName_LastName,
        });

        XrmMockGenerator.context = context;
        XrmMockGenerator.eventContext = new EventContextMock({ formContext: XrmMockGenerator.formContext, context: XrmMockGenerator.context });
        var executionContext = XrmMockGenerator.eventContext;

        var form = {};
        form.Utility = devKit.LoadUtility("web-resource-language");
        expect(() => { form.Utility.LearningPathAttributeName }).toThrow(new Error("Method not implemented."));
        expect(() => { form.Utility.ShowProgressIndicator("Waiting") }).toThrow(new Error("Method not implemented."));
        expect(() => { form.Utility.EntityMainFormDescriptor(null, null) }).toThrow(new Error("Method not implemented."));
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
        expect(form.Utility2.Resource("ABC")).toBe("");

        expect(form.Utility.AdvancedConfigSetting(OptionSet.AdvancedConfigSetting.MaxChildIncidentNumber)).toBeUndefined();
        expect(form.Utility.CurrentAppName(null, null)).toBeUndefined();
        expect(form.Utility.CurrentAppProperties(null, null)).toBeUndefined();
        expect(form.Utility.CurrentAppUrl).toBeUndefined();
        expect(form.Utility.WebResourceUrl(null)).toBeUndefined();
        expect(() => { form.Utility.IsOnPremises; }).toThrow(new Error("getGlobalContext.isOnPremises is not a function"));
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
        expect(form.Utility.OrganizationSettings.OrganizationExpiryDate).toBeNull();
        expect(form.Utility.OrganizationSettings.FullNameConventionCode).toBe(OptionSet.FullNameConventionCode.FirstName_LastName);

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
    });
});