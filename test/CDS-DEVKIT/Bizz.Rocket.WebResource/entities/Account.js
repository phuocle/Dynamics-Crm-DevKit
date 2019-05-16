///<reference path='Account.d.ts' />
var formWebApi = (function () {
    function onLoad(executionContext) {
        var api = new Rocket.AccountApi();
        var form = new Rocket.FormAccount(executionContext, "");
        form.Utility.AdvancedConfigSetting = OptionSet.AdvancedConfigSetting.MaxChildIncidentNumber;
        form.Utility.AllowedStatusTransitions("", 0, function (statusCodes) { }, function (error) { });
        form.Utility.BarcodeValue(function (result) { }, function (error) { });
        form.Utility.CaptureAudio(function (result) { }, function (error) { });
        form.Utility.CaptureImage({ allowEdit = true, height = 0, preferFrontCamera = true, quality = 0, width = 0 }, function (result) { }, function (error) { });
        form.Utility.CaptureVideo(function (result) { }, function (error) { });
        form.Utility.Client.ClientName = OptionSet.ClientName.Mobile;
        form.Utility.Client.ClientState = OptionSet.ClientState.Offline;
        form.Utility.Client.FormFactor = OptionSet.FormFactor.Desktop;
        form.Utility.Client.IsOffline();
        form.Utility.ClientUrl = "";
        form.Utility.CloseProgressIndicator();
        form.Utility.CurrentAppName(function (result) { }, function (error) { });
        form.Utility.CurrentAppProperties(function (result) { }, function (error) { });
        form.Utility.CurrentAppUrl = "";
        form.Utility.CurrentPosition(function (result) { }, function (error) { });
        form.Utility.EntityMetadata("", null, function (result) { }, function (error) { });
        form.Utility.HtmlAttributeEncode("");
        form.Utility.HtmlDecode("");
        form.Utility.HtmlEncode("");
        form.Utility.InvokeProcessAction("", null, function (result) { }, function (error) { });
        form.Utility.IsOnPremise();
        form.Utility.LearningPathAttributeName = "";
        form.Utility.LoadPanel("", "");
        form.Utility.LookupObjects({ allowMultiSelect = false }, function (results) { }, function (error) { });
        form.Utility.OpenAlertDialog({ text = "AAAA" }, { height = 0, width = 0 }, function (result) { }, function (error) { });
        form.Utility.OpenConfirmDialog({ text="" }, { height=0 }, function (result) { }, function (error) { });
        form.Utility.OpenErrorDialog({ message = "" }, function (result) { }, function (error) { });
        form.Utility.OpenFile({ fileName="" }, { openMode = OptionSet.FileOption.Open });
        form.Utility.OpenForm({ cmdbar: true }, {}, function (result) { }, function (error) { });
        form.Utility.OpenUrl("", { height = 0 });
        form.Utility.OpenWebResource("", { height = 0 }, "");
        form.Utility.OrganizationSettings.Attributes;
        form.Utility.OrganizationSettings.BaseCurrencyId;
        form.Utility.OrganizationSettings.DefaultCountryCode;
        form.Utility.OrganizationSettings.IsAutoSaveEnabled;
        form.Utility.OrganizationSettings.LanguageId;
        form.Utility.OrganizationSettings.OrganizationId;
        form.Utility.OrganizationSettings.UniqueName;
        form.Utility.OrganizationSettings.UseSkypeProtocol;
        form.Utility.PickFile({ accept = OptionSet.FileAccept.Audio }, function (results) { }, function (error) { });
        form.Utility.PrependOrgName;
        form.Utility.RefreshParentGrid({ id = "" });
        form.Utility.Resource("");
        form.Utility.ResourceString("", "");
        form.Utility.ShowProgressIndicator("");
        form.Utility.UserSettings.DateFormattingInfo.AbbreviatedDayNames;
        form.Utility.UserSettings.DateFormattingInfo.AbbreviatedMonthGenitiveNames;
        form.Utility.UserSettings.DateFormattingInfo.AbbreviatedMonthNames;
        form.Utility.UserSettings.DateFormattingInfo.AMDesignator;
        form.Utility.UserSettings.DateFormattingInfo.Calendar;
        form.Utility.UserSettings.DateFormattingInfo.CalendarWeekRule;
        form.Utility.UserSettings.DateFormattingInfo.DateSeparator;
        form.Utility.UserSettings.DateFormattingInfo.DayNames;
        form.Utility.UserSettings.DateFormattingInfo.FirstDayOfWeek;
        form.Utility.UserSettings.DateFormattingInfo.FullDateTimePattern;
        form.Utility.UserSettings.DateFormattingInfo.LongDatePattern;
        form.Utility.UserSettings.DateFormattingInfo.LongTimePattern;
        form.Utility.UserSettings.DateFormattingInfo.MonthGenitiveNames;
        form.Utility.UserSettings.DateFormattingInfo.MonthNames;
        form.Utility.UserSettings.DateFormattingInfo.PMDesignator;
        form.Utility.UserSettings.DateFormattingInfo.ShortDatePattern;
        form.Utility.UserSettings.DateFormattingInfo.SortableDateTimePattern;
        form.Utility.UserSettings.DateFormattingInfo.TimeSeparator;
        form.Utility.UserSettings.DateFormattingInfo.UniversalSortableDateTimePattern;
        form.Utility.UserSettings.DateFormattingInfo.YearMonthPattern;
        form.Utility.UserSettings.DefaultDashboardId;
        form.Utility.UserSettings.IsGuidedHelpEnabled;
        form.Utility.UserSettings.IsHighContrastEnabled;
        form.Utility.UserSettings.IsRTL;
        form.Utility.UserSettings.LanguageId;
        form.Utility.UserSettings.SecurityRolePrivileges;
        form.Utility.UserSettings.SecurityRoles;
        form.Utility.UserSettings.TimeZoneOffsetMinutes;
        form.Utility.UserSettings.TransactionCurrencyId;
        form.Utility.UserSettings.UserId;
        form.Utility.UserSettings.UserName;
        form.Utility.Version;
        form.Utility.XmlAttributeEncode("");
        form.Utility.XmlEncode("");

    }
    function onSave(executionContext) {
    }
    return {
        OnLoad: onLoad,
        OnSave: onSave
    };
})();