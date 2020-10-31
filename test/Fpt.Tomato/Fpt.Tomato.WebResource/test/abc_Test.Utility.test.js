//@ts-check
define(['xrm-mock'], () => {
    var xrmMock = require('xrm-mock');
    describe('', () => {
        beforeEach(function () {
            var XrmMockGenerator = xrmMock.XrmMockGenerator.initialise();
            XrmMockGenerator.Panel = new xrmMock.PanelMock();
            XrmMockGenerator.Encoding = new xrmMock.EncodingMock();
            XrmMockGenerator.Device = new xrmMock.DeviceMock();
            XrmMockGenerator.Navigation = new xrmMock.NavigationStaticMock();
            XrmMockGenerator.App = new xrmMock.AppMock();
        });
        it('Utility', () => {
            var context = new xrmMock.ContextMock({
                clientContext: new xrmMock.ClientContextMock("Web", "Online"),
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
            context.userSettings = new xrmMock.UserSettingsMock({
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
                //dateFormattingInfo: {
                //    AMDesignator: "AM",
                //    Calendar: {
                //        MinSupportedDateTime: "0001-01-01T00:00:00",
                //        MaxSupportedDateTime: "9999-12-31T23:59:59.9999999",
                //        AlgorithmType: 1,
                //        CalendarType: 1,
                //        Eras: [ 1 ],
                //        TwoDigitYearMax: 2029,
                //        IsReadOnly: false
                //    },
                //    DateSeparator: "/",
                //    FirstDayOfWeek: 0,
                //    CalendarWeekRule: 0,
                //    FullDateTimePattern: "dddd, MMMM d, yyyy h:mm:ss tt",
                //    LongDatePattern: "dddd, MMMM d, yyyy",
                //    LongTimePattern: "h:mm:ss tt",
                //    MonthDayPattern: "MMMM dd",
                //    PMDesignator: "PM",
                //    RFC1123Pattern: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
                //    ShortDatePattern: "M/d/yyyy",
                //    ShortTimePattern: "h:mm tt",
                //    SortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                //    TimeSeparator: ":",
                //    UniversalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                //    YearMonthPattern: "MMMM yyyy",
                //    AbbreviatedDayNames: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
                //    ShortestDayNames: [ "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                //    DayNames: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
                //    AbbreviatedMonthNames: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "" ],
                //    MonthNames: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "" ],
                //    IsReadOnly: false,
                //    NativeCalendarName: "Gregorian Calendar",
                //    AbbreviatedMonthGenitiveNames: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "" ],
                //    MonthGenitiveNames: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "" ],
                //    eras: [ 1, "A.D.", null, 0 ]
                //},
                roles: new xrmMock.ItemCollectionMock([new xrmMock.LookupValueMock("GUID1", "role", "ROLE-1"), new xrmMock.LookupValueMock("GUID2", "role", "ROLE-2")]),
                transactionCurrency: new xrmMock.LookupValueMock("VND-GUID", "transactioncurrency", "VND" )
            });

            context.organizationSettings = new xrmMock.OrganizationSettingsMock({
                baseCurrencyId: "USD-GUID",
                baseCurrency: new xrmMock.LookupValueMock("USD-GUID", "transactioncurrencty", "USD"),
                defaultCountryCode: "VN",
                languageId: 1033,
                organizationId: "OrgGuid",
                uniqueName: "OrgUniqueName",
                isAutoSaveEnabled: true,
                useSkypeProtocol: true,
                attributes: {
                    "abc": "1"
                }
            });

            xrmMock.XrmMockGenerator.context = context;
            xrmMock.XrmMockGenerator.eventContext = new xrmMock.EventContextMock({ formContext: xrmMock.XrmMockGenerator.formContext, context: xrmMock.XrmMockGenerator.context });

            var executionContext = xrmMock.XrmMockGenerator.eventContext;
            var form = new Tomato.FormTest(executionContext, "web-resource-language");

            //var getUtility = Xrm.Utility;
            expect(() => { form.Utility.LearningPathAttributeName }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Utility.ShowProgressIndicator("Waiting") }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Utility.CloseProgressIndicator() }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Utility.EntityMetadata("devkit_webapi", null, null, null) }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Utility.ResourceString("resourcename", "key") }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Utility.AllowedStatusTransitions(null, null, null, null) }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Utility.Resource(null) }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Utility.InvokeProcessAction("name", null, null, null) }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Utility.LookupObjects(null, null, null); }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Utility.RefreshParentGrid(null) }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Utility.PageContext }).toThrow(new Error("Method not implemented."));

            //getGlobalContext.client;
            expect(form.Utility.Client.ClientName).toBe(OptionSet.ClientName.Web);
            expect(form.Utility.Client.ClientState).toBe(OptionSet.ClientState.Online);
            expect(() => { form.Utility.Client.FormFactor }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Utility.Client.IsOffline }).toThrow(new Error("Method not implemented."));

            //getGlobalContext.organizationSettings;
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

            //getGlobalContext.userSettings
            //expect(form.Utility.UserSettings.DateFormattingInfo.AMDesignator).toBe("AM");
            //expect(form.Utility.UserSettings.DateFormattingInfo.Calendar).toBeDefined();
            //expect(form.Utility.UserSettings.DateFormattingInfo.Calendar.MinSupportedDateTime.toString()).toBe("0001-01-01T00:00:00");
            //expect(form.Utility.UserSettings.DateFormattingInfo.Calendar.MaxSupportedDateTime.toString()).toBe("9999-12-31T23:59:59.9999999");
            //expect(form.Utility.UserSettings.DateFormattingInfo.Calendar.AlgorithmType).toBe(1);
            //expect(form.Utility.UserSettings.DateFormattingInfo.Calendar.CalendarType).toBe(1);
            //expect(form.Utility.UserSettings.DateFormattingInfo.Calendar.Eras.length).toBeGreaterThan(0);
            //expect(form.Utility.UserSettings.DateFormattingInfo.Calendar.TwoDigitYearMax).toBe(2029);
            //expect(form.Utility.UserSettings.DateFormattingInfo.Calendar.IsReadOnly).toBeFalsy();
            //expect(form.Utility.UserSettings.DateFormattingInfo.DateSeparator).toBe("/");
            //expect(form.Utility.UserSettings.DateFormattingInfo.FirstDayOfWeek).toBe(0);
            //expect(form.Utility.UserSettings.DateFormattingInfo.CalendarWeekRule).toBe(0);
            //expect(form.Utility.UserSettings.DateFormattingInfo.FullDateTimePattern).toBe("dddd, MMMM d, yyyy h:mm:ss tt");
            //expect(form.Utility.UserSettings.DateFormattingInfo.LongDatePattern).toBe("dddd, MMMM d, yyyy");
            //expect(form.Utility.UserSettings.DateFormattingInfo.LongTimePattern).toBe("h:mm:ss tt");
            //expect(form.Utility.UserSettings.DateFormattingInfo.MonthDayPattern).toBe("MMMM dd");
            //expect(form.Utility.UserSettings.DateFormattingInfo.PMDesignator).toBe("PM");
            //expect(form.Utility.UserSettings.DateFormattingInfo.RFC1123Pattern).toBe("ddd, dd MMM yyyy HH':'mm':'ss 'GMT'");
            //expect(form.Utility.UserSettings.DateFormattingInfo.ShortDatePattern).toBe("M/d/yyyy");
            //expect(form.Utility.UserSettings.DateFormattingInfo.ShortTimePattern).toBe("h:mm tt");
            //expect(form.Utility.UserSettings.DateFormattingInfo.SortableDateTimePattern).toBe("yyyy'-'MM'-'dd'T'HH':'mm':'ss");
            //expect(form.Utility.UserSettings.DateFormattingInfo.TimeSeparator).toBe(":");
            //expect(form.Utility.UserSettings.DateFormattingInfo.UniversalSortableDateTimePattern).toBe("yyyy'-'MM'-'dd HH':'mm':'ss'Z'");
            //expect(form.Utility.UserSettings.DateFormattingInfo.YearMonthPattern).toBe("MMMM yyyy");
            //expect(form.Utility.UserSettings.DateFormattingInfo.AbbreviatedDayNames.length).toBeGreaterThan(0);
            //expect(form.Utility.UserSettings.DateFormattingInfo.ShortestDayNames.length).toBeGreaterThan(0);
            //expect(form.Utility.UserSettings.DateFormattingInfo.DayNames.length).toBeGreaterThan(0);
            //expect(form.Utility.UserSettings.DateFormattingInfo.AbbreviatedMonthNames.length).toBeGreaterThan(0);
            //expect(form.Utility.UserSettings.DateFormattingInfo.MonthNames.length).toBeGreaterThan(0);
            //expect(form.Utility.UserSettings.DateFormattingInfo.AbbreviatedMonthGenitiveNames.length).toBeGreaterThan(0);
            //expect(form.Utility.UserSettings.DateFormattingInfo.MonthGenitiveNames.length).toBeGreaterThan(0);
            //expect(form.Utility.UserSettings.DateFormattingInfo.DayNames.length).toBeGreaterThan(0);
            //expect(form.Utility.UserSettings.DateFormattingInfo.eras.length).toBeGreaterThan(0);
            //expect(form.Utility.UserSettings.DateFormattingInfo.IsReadOnly).toBeFalsy();
            //expect(form.Utility.UserSettings.DateFormattingInfo.NativeCalendarName).toBe("Gregorian Calendar");
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

            expect(() => { form.Utility.AdvancedConfigSetting(OptionSet.AdvancedConfigSetting.MaxChildIncidentNumber); }).toThrow(new Error("Method not implemented."));
            expect(form.Utility.ClientUrl).toBe("https://clienturl.fake");
            expect(() => { form.Utility.CurrentAppName(null, null); }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Utility.CurrentAppProperties(null, null) }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Utility.CurrentAppUrl; }).toThrow(new Error("Method not implemented."));
            expect(form.Utility.Version).toBe("10.0.0.0");
            expect(() => { form.Utility.WebResourceUrl(null) }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Utility.IsOnPremises; }).toThrow(new Error("Method not implemented."));
            expect(form.Utility.PrependOrgName("abc-")).toBe("abc-OrgUniqueName");

            //var getPanel = Xrm.Panel;
            expect(() => { form.Utility.LoadPanel("url", "title"); }).toThrow(new Error("Not implemented."));

            //var getEncoding = Xrm.Encoding;
            expect(() => { form.Utility.XmlAttributeEncode("code"); }).toThrow(new Error("Not implemented"));
            expect(() => { form.Utility.XmlEncode("code"); }).toThrow(new Error("Not implemented"));
            expect(() => { form.Utility.HtmlAttributeEncode("code"); }).toThrow(new Error("Not implemented"));
            expect(() => { form.Utility.HtmlDecode("code"); }).toThrow(new Error("Not implemented"));
            expect(() => { form.Utility.HtmlEncode("code"); }).toThrow(new Error("Not implemented"));

            //var getDevice = Xrm.Device;
            expect(() => { form.Utility.CaptureAudio(null, null) }).toThrow(new Error("Not implemented."));
            expect(() => { form.Utility.CaptureImage(null, null, null) }).toThrow(new Error("Not implemented."));
            expect(() => { form.Utility.CaptureVideo(null, null) }).toThrow(new Error("Not implemented."));
            expect(() => { form.Utility.BarcodeValue(null, null) }).toThrow(new Error("Not implemented."));
            expect(() => { form.Utility.CurrentPosition(null, null) }).toThrow(new Error("Not implemented."));
            expect(() => { form.Utility.PickFile(null, null, null) }).toThrow(new Error("Not implemented."));

            //var getNavigation = Xrm.Navigation;
            expect(() => { form.Utility.OpenAlertDialog(null, null, null, null); }).toThrow(new Error("Navigation methods not implemented. Consider stubbing calls using a tool such as Sinon.JS"));
            expect(() => { form.Utility.OpenConfirmDialog(null, null, null, null); }).toThrow(new Error("Navigation methods not implemented. Consider stubbing calls using a tool such as Sinon.JS"));
            expect(() => { form.Utility.OpenErrorDialog(null, null, null); }).toThrow(new Error("Navigation methods not implemented. Consider stubbing calls using a tool such as Sinon.JS"));
            expect(() => { form.Utility.OpenFile(null, null); }).toThrow(new Error("Navigation methods not implemented. Consider stubbing calls using a tool such as Sinon.JS"));
            expect(() => { form.Utility.OpenForm(null, null, null, null); }).toThrow(new Error("Navigation methods not implemented. Consider stubbing calls using a tool such as Sinon.JS"));
            expect(() => { form.Utility.OpenUrl(null, null); }).toThrow(new Error("Navigation methods not implemented. Consider stubbing calls using a tool such as Sinon.JS"));
            expect(() => { form.Utility.OpenWebResource(null, null, null); }).toThrow(new Error("Navigation methods not implemented. Consider stubbing calls using a tool such as Sinon.JS"));
            expect(() => { form.Utility.NavigateTo(null, null, null, null) }).toThrow(new Error("Navigation methods not implemented. Consider stubbing calls using a tool such as Sinon.JS"));

            //var getApp = Xrm.App;
            expect(() => { form.Utility.AddGlobalNotification(null, null, null) }).toThrow(new Error("Method not implemented."));
            expect(() => { form.Utility.ClearGlobalNotification(null, null, null) }).toThrow(new Error("Method not implemented."));

            //Execution Context
            expect(() => { form.ExecutionContext.Depth }).toThrow(new Error("not implemented"));
            expect(() => { form.ExecutionContext.EventArgs }).toThrow(new Error("not implemented"));
            expect(() => { form.ExecutionContext.EventSource }).toThrow(new Error("not implemented"));
            expect(form.ExecutionContext.FormContext).toBeDefined();
            expect(() => { form.ExecutionContext.GetSharedVariable("A") }).toThrow(new Error("not implemented"));
            expect(() => { form.ExecutionContext.SetSharedVariable("A", "B") }).toThrow(new Error("not implemented"));
            expect(() => { form.ExecutionContext.SaveMode }).toThrow(new Error("not implemented"));
            expect(() => { form.ExecutionContext.IsDefaultPrevented() }).toThrow(new Error("not implemented"));
            expect(() => { form.ExecutionContext.SetPreventDefault()}).toThrow(new Error("not implemented"));
        });
    });
});