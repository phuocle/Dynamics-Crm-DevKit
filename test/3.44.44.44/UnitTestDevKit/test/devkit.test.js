import { OptionSet, devKit } from '../lib/devkit.mjs';
import {
    XrmMockGenerator, ContextMock, UserSettingsMock, ClientContextMock, LookupValueMock, DataMock, EntityMock, ItemCollectionMock, AttributeMock, StringControlMock,
    StringAttributeMock, UiMock, FormSelectorMock, FormItemMock, FormContextMock, OrganizationSettingsMock, EventContextMock, StageMock, StepMock, ProcessControlMock,
    UiCanGetVisibleElementMock, UiCanSetVisibleElementMock, ProcessMock, ProcessManagerMock, LookupAttributeMock, LookupControlMock, OptionSetAttributeMock,
    QuickFormControlMock, GridControlMock, GridRowDataMock, GridRowMock, GridMock, RelationshipMock, ViewSelectorMock, IframeControlMock, HeaderSectionMock, NavigationMock, NavigationItemMock, UiStandardElementMock,
    UiFocusableMock, TimerControlMock, KbSearchControlMock
} from 'xrm-mock';
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
        expect(OptionSet.FieldAttributeType.MultiOptionSet).toBe('multioptionset');
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
        expect(() => { form.Utility2.Resource("ABC") }).toThrow(new Error("Method not implemented."));
        expect(form.Utility.AdvancedConfigSetting(OptionSet.AdvancedConfigSetting.MaxChildIncidentNumber)).toBeUndefined();
        expect(form.Utility.CurrentAppName(null, null)).toBeUndefined();
        expect(form.Utility.CurrentAppProperties(null, null)).toBeUndefined();
        expect(form.Utility.CurrentAppUrl).toBeUndefined();
        expect(form.Utility.WebResourceUrl(null)).toBeUndefined();
        //expect(() => { form.Utility.IsOnPremises; }).toThrow(new Error("getGlobalContext.isOnPremises is not a function"));
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

        expect(form.Utility.ClientUrl).toBe("https://clienturl.fake");
        expect(form.Utility.Version).toBe("10.0.0.0");

        expect(form.Utility.OpenAlertDialog(null, null, null, null)).toBeUndefined();
        expect(form.Utility.OpenConfirmDialog(null, null, null, null)).toBeUndefined();
        expect(form.Utility.OpenErrorDialog(null, null, null)).toBeUndefined();
        expect(form.Utility.OpenFile(null, null)).toBeUndefined();
        expect(form.Utility.OpenForm(null, null, null, null)).toBeUndefined();
        expect(form.Utility.OpenUrl(null, null)).toBeUndefined();
        expect(form.Utility.OpenWebResource(null, null, null)).toBeUndefined();
        expect(form.Utility.NavigateTo(null, null, null, null)).toBeUndefined();

        expect(() => { form.Utility.LoadPanel("url", "title"); }).toThrow(new Error("Not implemented."));
        expect(() => { form.Utility.XmlAttributeEncode("code"); }).toThrow(new Error("Not implemented"));
        expect(() => { form.Utility.XmlEncode("code"); }).toThrow(new Error("Not implemented"));
        expect(() => { form.Utility.HtmlAttributeEncode("code"); }).toThrow(new Error("Not implemented"));
        expect(() => { form.Utility.HtmlDecode("code"); }).toThrow(new Error("Not implemented"));
        expect(() => { form.Utility.HtmlEncode("code"); }).toThrow(new Error("Not implemented"));

        expect(() => { form.Utility.CaptureAudio(null, null) }).toThrow(new Error("Not implemented."));
        expect(() => { form.Utility.CaptureImage(null, null, null) }).toThrow(new Error("Not implemented."));
        expect(() => { form.Utility.CaptureVideo(null, null) }).toThrow(new Error("Not implemented."));
        expect(() => { form.Utility.BarcodeValue(null, null) }).toThrow(new Error("Not implemented."));
        expect(() => { form.Utility.CurrentPosition(null, null) }).toThrow(new Error("Not implemented."));
        expect(() => { form.Utility.PickFile(null, null, null) }).toThrow(new Error("Not implemented."));

        expect(form.Utility.AddGlobalNotification(null, null, null)).toBeUndefined()
        expect(form.Utility.ClearGlobalNotification(null, null, null)).toBeUndefined();

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
        var executionContext = XrmMockGenerator.eventContext;
        var form = {};
        form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
        expect(form.ExecutionContext.Depth).toBe(1);
        //expect(() => { form.ExecutionContext.EventArgs }).toThrow(new Error("executionContext.getEventArgs is not a function"));
        expect(() => { form.ExecutionContext.EventSource }).toThrow(new Error("no event source given"));
        expect(form.ExecutionContext.FormContext).toBeDefined();
        expect(form.ExecutionContext.GetSharedVariable("A")).toBeUndefined();
        expect(form.ExecutionContext.SetSharedVariable("A", "B")).toBeUndefined();
        // expect(() => { form.ExecutionContext.SaveMode }).toThrow(new Error("executionContext.getEventArgs is not a function"));
        // expect(() => { form.ExecutionContext.IsDefaultPrevented() }).toThrow(new Error("executionContext.getEventArgs is not a function"));
        // expect(() => { form.ExecutionContext.SetPreventDefault() }).toThrow(new Error("executionContext.getEventArgs is not a function"));
        // expect(() => { form.ExecutionContext.EntityReference }).toThrow(new Error("executionContext.getEventArgs is not a function"));
        // expect(() => { form.ExecutionContext.IsSaveSuccess }).toThrow(new Error("executionContext.getEventArgs is not a function"));
        // expect(() => { form.ExecutionContext.SaveErrorInfo }).toThrow(new Error("executionContext.getEventArgs is not a function"));
        // expect(() => { form.ExecutionContext.SetPreventDefaultOnError() }).toThrow(new Error("executionContext.getEventArgs is not a function"));
        // expect(() => { form.ExecutionContext.DisableAsyncTimeout() }).toThrow(new Error("executionContext.getEventArgs is not a function"));
        // expect(() => { form.ExecutionContext.IsInitialLoad() }).toThrow(new Error("executionContext.getEventArgs is not a function"));
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
        expect(() => { form.Process.Visible = false; }).toThrow(new Error("Method not implemented."));
        expect(form.Process.ActivePath).toBeDefined();
        expect(() => { form.Process.ActivePath.getLength() }).toThrow(new Error("get active path not implemented"));
        expect(() => { form.Process.ActivePath.get(0) }).toThrow(new Error("get active path not implemented"));
        expect(() => { form.Process.ActivePath.forEach(function (stage, index) {});}).toThrow(new Error("get active path not implemented"));
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

        form.Body.Name.AddNotification({  messages: ["ABC"], notificationLevel: OptionSet.FieldNotificationLevel.Error, uniqueId: "123", actions: [] });
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
        expect(form.QuickForm.contactquickform.ControlType).toBe(OptionSet.FieldControlType.QuickForm);
        expect(() => { form.QuickForm.contactquickform.Disabled }).toThrow(new Error("Method not implemented."));
        expect(form.QuickForm.contactquickform.Label).toBe("Contact Quick Form");
        expect(form.QuickForm.contactquickform.ControlName).toBe("contactquickform");
        expect(form.QuickForm.contactquickform.ControlParent).toBeUndefined();
        expect(form.QuickForm.contactquickform.Visible).toBeTruthy();
        expect(form.QuickForm.contactquickform.IsLoaded()).toBeTruthy();
        expect(() => { form.QuickForm.contactquickform.Refresh() }).toThrow(new Error("Method not implemented."));
        expect(() => { form.QuickForm.contactquickform.Disabled = true }).toThrow(new Error("Method not implemented."));
        expect(() => { form.QuickForm.contactquickform.Focus() }).toThrow(new Error("Method not implemented."));
        form.QuickForm.contactquickform.Label = "Contact Quick Form New";
        expect(form.QuickForm.contactquickform.Label).toBe("Contact Quick Form New");
        expect(() => { form.QuickForm.contactquickform.Visible = false }).toThrow(new Error("Method not implemented."));
        expect(() => { form.QuickForm.contactquickform.Body.EMailAddress1 }).toThrow(new Error("Method not implemented."));
        expect(() => { form.QuickForm.contactquickform.Body.Telephone1 }).toThrow(new Error("Method not implemented."));
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

        var grid = new GridControlMock({
            name: "Contacts",
            controlType: "subgrid",
            label: "CONTACTS",
            visible: true,
            entityName: "contact",
            contextType: 4 //XrmEnum.GridControlContext.FormContextRelated,
        });

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
        expect(() => { var a = form.Body.IFRAME_PHUOCLE.Data; }).toThrow(new Error("getData not implemented."));
        expect(() => { form.Body.IFRAME_PHUOCLE.Data = "b"; }).toThrow(new Error("setData not implemented."));
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
        expect(() => { form.Body.Tab.SUMMARY_TAB.ContentType }).toThrow(new Error("Method not implemented."));
        expect(() => { form.Body.Tab.SUMMARY_TAB.ContentType = OptionSet.TabContentType.SingleComponent }).toThrow(new Error("Method not implemented."));
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
            navigation: new NavigationMock(new ItemCollectionMock([ a ]))
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
        //expect(form.name.Value).toBe("LE VAN PHUOC");
    });
});