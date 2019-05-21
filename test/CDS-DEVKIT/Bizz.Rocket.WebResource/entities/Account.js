//@ts-check
///<reference path='Account.d.ts' />
var formWebApi = (function () {
    function onLoad(executionContext) {
        TestApi();
        TestForm();
        //var api = new Rocket.AccountApi();
        //api.AccountCategoryCode.Value = api.OptionSet.AccountCategoryCode.Preferred_Customer;
        //api.AccountCategoryCode.Value = OptionSet.AccountOptionSet.AccountCategoryCode.Preferred_Customer
        //OptionSet.FieldControlType.
        //api.AccountCategoryCode.Value = api.OptionSet.

        //AccountOptionSet.AAAA.C;

        //var form = new Rocket.FormAccount(executionContext, "");
        //form.Utility.AdvancedConfigSetting = OptionSet.AdvancedConfigSetting.MaxChildIncidentNumber;
        //form.Utility.AllowedStatusTransitions("", 0, function (statusCodes) { }, function (error) { });
        //form.Utility.BarcodeValue(function (result) { }, function (error) { });
        //form.Utility.CaptureAudio(function (result) { }, function (error) { });
        //form.Utility.CaptureImage({ allowEdit = true, height = 0, preferFrontCamera = true, quality = 0, width = 0 }, function (result) { }, function (error) { });
        //form.Utility.CaptureVideo(function (result) { }, function (error) { });
        //form.Utility.Client.ClientName = OptionSet.ClientName.Mobile;
        //form.Utility.Client.ClientState = OptionSet.ClientState.Offline;
        //form.Utility.Client.FormFactor = OptionSet.FormFactor.Desktop;
        //form.Utility.Client.IsOffline();
        //form.Utility.ClientUrl = "";
        //form.Utility.CloseProgressIndicator();
        //form.Utility.CurrentAppName(function (result) { }, function (error) { });
        //form.Utility.CurrentAppProperties(function (result) { }, function (error) { });
        //form.Utility.CurrentAppUrl = "";
        //form.Utility.CurrentPosition(function (result) { }, function (error) { });
        //form.Utility.EntityMetadata("", null, function (result) { }, function (error) { });
        //form.Utility.HtmlAttributeEncode("");
        //form.Utility.HtmlDecode("");
        //form.Utility.HtmlEncode("");
        //form.Utility.InvokeProcessAction("", null, function (result) { }, function (error) { });
        //form.Utility.IsOnPremise();
        //form.Utility.LearningPathAttributeName = "";
        //form.Utility.LoadPanel("", "");
        //form.Utility.LookupObjects({ allowMultiSelect = false }, function (results) { }, function (error) { });
        //form.Utility.OpenAlertDialog({ text = "AAAA" }, { height = 0, width = 0 }, function (result) { }, function (error) { });
        //form.Utility.OpenConfirmDialog({ text="" }, { height=0 }, function (result) { }, function (error) { });
        //form.Utility.OpenErrorDialog({ message = "" }, function (result) { }, function (error) { });
        //form.Utility.OpenFile({ fileName="" }, { openMode = OptionSet.FileOption.Open });
        //form.Utility.OpenForm({ cmdbar: true }, {}, function (result) { }, function (error) { });
        //form.Utility.OpenUrl("", { height = 0 });
        //form.Utility.OpenWebResource("", { height = 0 }, "");
        //form.Utility.OrganizationSettings.Attributes;
        //form.Utility.OrganizationSettings.BaseCurrencyId;
        //form.Utility.OrganizationSettings.DefaultCountryCode;
        //form.Utility.OrganizationSettings.IsAutoSaveEnabled;
        //form.Utility.OrganizationSettings.LanguageId;
        //form.Utility.OrganizationSettings.OrganizationId;
        //form.Utility.OrganizationSettings.UniqueName;
        //form.Utility.OrganizationSettings.UseSkypeProtocol;
        //form.Utility.PickFile({ accept = OptionSet.FileAccept.Audio }, function (results) { }, function (error) { });
        //form.Utility.PrependOrgName;
        //form.Utility.RefreshParentGrid({ id = "" });
        //form.Utility.Resource("");
        //form.Utility.ResourceString("", "");
        //form.Utility.ShowProgressIndicator("");
        //form.Utility.UserSettings.DateFormattingInfo.AbbreviatedDayNames;
        //form.Utility.UserSettings.DateFormattingInfo.AbbreviatedMonthGenitiveNames;
        //form.Utility.UserSettings.DateFormattingInfo.AbbreviatedMonthNames;
        //form.Utility.UserSettings.DateFormattingInfo.AMDesignator;
        //form.Utility.UserSettings.DateFormattingInfo.Calendar;
        //form.Utility.UserSettings.DateFormattingInfo.CalendarWeekRule;
        //form.Utility.UserSettings.DateFormattingInfo.DateSeparator;
        //form.Utility.UserSettings.DateFormattingInfo.DayNames;
        //form.Utility.UserSettings.DateFormattingInfo.FirstDayOfWeek;
        //form.Utility.UserSettings.DateFormattingInfo.FullDateTimePattern;
        //form.Utility.UserSettings.DateFormattingInfo.LongDatePattern;
        //form.Utility.UserSettings.DateFormattingInfo.LongTimePattern;
        //form.Utility.UserSettings.DateFormattingInfo.MonthGenitiveNames;
        //form.Utility.UserSettings.DateFormattingInfo.MonthNames;
        //form.Utility.UserSettings.DateFormattingInfo.PMDesignator;
        //form.Utility.UserSettings.DateFormattingInfo.ShortDatePattern;
        //form.Utility.UserSettings.DateFormattingInfo.SortableDateTimePattern;
        //form.Utility.UserSettings.DateFormattingInfo.TimeSeparator;
        //form.Utility.UserSettings.DateFormattingInfo.UniversalSortableDateTimePattern;
        //form.Utility.UserSettings.DateFormattingInfo.YearMonthPattern;
        //form.Utility.UserSettings.DefaultDashboardId;
        //form.Utility.UserSettings.IsGuidedHelpEnabled;
        //form.Utility.UserSettings.IsHighContrastEnabled;
        //form.Utility.UserSettings.IsRTL;
        //form.Utility.UserSettings.LanguageId;
        //form.Utility.UserSettings.SecurityRolePrivileges;
        //form.Utility.UserSettings.SecurityRoles;
        //form.Utility.UserSettings.TimeZoneOffsetMinutes;
        //form.Utility.UserSettings.TransactionCurrencyId;
        //form.Utility.UserSettings.UserId;
        //form.Utility.UserSettings.UserName;
        //form.Utility.Version;
        //form.Utility.XmlAttributeEncode("");
        //form.Utility.XmlEncode("");

        //form.WebApi.CreateRecord("", null, function (result) { }, function (error) { });
        //form.WebApi.DeleteRecord("", "", function (result) { }, function (error) { });
        //form.WebApi.Execute({ boundParameter="entity" }, function (result) { }, function (error) { });
        //form.WebApi.ExecuteMultiple([{ boundParameter="entity" }], function (result) { }, function (error) { });
        //form.WebApi.IsAvailableOffline("");
        //form.WebApi.RetrieveMultipleRecords("", null, null, function (result) { }, function (error) { });
        //form.WebApi.RetrieveRecord("", "", null, function (result) { }, function (error) { });
        //form.WebApi.UpdateRecord("", "", null, function (result) { }, function (error) { });

        //form.OptionSet.AccountCategoryCode.Preferred_Customer;

        //form.AddOnSave(function (executionContext) { });

        //form.Attributes.forEach(function (item, index) { });
        //form.Attributes.get()
        //OptionSet.
        //form.Body.abiz_AgreementId.AddOnChange();


    }
    function onSave(executionContext) {
    }
    function TestApi() {
        var account = new Rocket.AccountApi();
        account.getAliasedValue("", true);
        account.getAliasedFormattedValue("", true);
        account.Entity;
        account.EntityName = "";
        account.EntityCollectionName = "";




        var key = new Rocket.WebApi.AlternateKey("", "");

        var associateRequest = new Rocket.WebApi.AssociateRequest();
        associateRequest.asBatch = false;
        associateRequest.async = false;
        associateRequest.headers = [{ key: "", value:"" }];
        associateRequest.relationShip = "";
        associateRequest.source = { entityType: "account", id: "guid" };
        associateRequest.target = { entityType: "contact", id: "guid" };

        var createRequest = new Rocket.WebApi.CreateRequest();
        createRequest.asBatch = false;
        createRequest.async = false;
        createRequest.entity = {};
        createRequest.entityName = "account";
        createRequest.headers = [{ key: "", value: "" }];
        createRequest.overriddenSetName = "acccountes";

        var customRequest = new Rocket.WebApi.CustomRequest();
        customRequest.asBatch = false;
        customRequest.async = false;
        customRequest.bound = true;
        customRequest.entityId = "guid";
        customRequest.entityName = "account";
        customRequest.headers = [{ key: "", value: "" }];
        customRequest.method = "GET";
        customRequest.name = "abc";
        customRequest.payload = {};
        customRequest.urlParams = "";

        var deleteRequest = new Rocket.WebApi.DeleteRequest();
        deleteRequest.alternateKey = [new Rocket.WebApi.AlternateKey("", "")];
        deleteRequest.asBatch = false;
        deleteRequest.async = false;
        deleteRequest.entityId = "guid";
        deleteRequest.entityName = "account";
        deleteRequest.headers = [{ key: "", value: "" }];
        deleteRequest.overriddenSetName = "accountes";

        var disassociateRequest = new Rocket.WebApi.DisassociateRequest();
        disassociateRequest.asBatch = false;
        disassociateRequest.async = false;
        disassociateRequest.headers = [{ key: "", value: "" }];
        disassociateRequest.relationShip = "";
        disassociateRequest.source = { entityType: "account", id: "guid" };
        disassociateRequest.target = { entityType: "contact", id: "guid" };

        var retrieveRequest = new Rocket.WebApi.RetrieveRequest();
        retrieveRequest.alternateKey = [new Rocket.WebApi.AlternateKey("", "")];
        retrieveRequest.asBatch = false;
        retrieveRequest.async = false;
        retrieveRequest.entityId = "guid";
        retrieveRequest.entityName = "account";
        retrieveRequest.fetchXml = "fetchxml";
        retrieveRequest.headers = [{ key: "", value: "" }];
        retrieveRequest.overriddenSetName = "accountes";
        retrieveRequest.queryParams = "";
        retrieveRequest.returnAllPages = true;

        var updateRequest = new Rocket.WebApi.UpdateRequest();
        updateRequest.alternateKey = [new Rocket.WebApi.AlternateKey("", "")];
        updateRequest.asBatch = false;
        updateRequest.async = false;
        updateRequest.entity = {};
        updateRequest.entityId = "guid";
        updateRequest.entityName = "account";
        updateRequest.headers = [{ key: "", value: "" }];
        updateRequest.overriddenSetName = "accountes";
    };
    function TestForm() {
        var form = new Rocket.FormAccount("", "");
        form.AddOnSave(function (executionContext) { });
        form.Attributes.forEach(function (item, index) { });
        form.Attributes.get();
        form.Attributes.get("");
        form.Attributes.get(0);
        form.Attributes.get(function (item, index) { });
        form.Body = "";
        form.ClearFormNotification("");
        form.Close();
        form.Controls.forEach(function (item, index) { });
        form.Controls.get();
        form.Controls.get("");
        form.Controls.get(0);
        form.Controls.get(function (item, index) { });
        form.DataXml = "";
        form.EntityId = "";
        form.EntityIsDirty = false;
        form.EntityIsValid = false;
        form.EntityName = "";
        form.EntityReference.entityType = "";
        form.EntityReference.id = "";
        form.EntityReference.name = "";
        form.EntitySave(OptionSet.SaveOption.SaveAndClose);
        form.Footer = "";
        form.FormId = "";
        form.FormLabel = "";
        form.FormNavigate("");
        form.FormType = OptionSet.FormType.Create;

        //BEGIN LOOKUP
        form.Header.OwnerId.AddCustomFilter("", "");
        form.Header.OwnerId.AddCustomView("", "", "", "", "", false);
        form.Header.OwnerId.AddNotification({ uniqueId: "" });//CHANGE !!!!
        form.Header.OwnerId.AddOnChange(function (a) { });
        form.Header.OwnerId.AddPreSearch(function (a) { });
        //form.Header.OwnerId.AttributeParent
        form.Header.OwnerId.AttributeType = OptionSet.FieldAttributeType.Boolean;
        form.Header.OwnerId.ClearNotification("");
        //form.Header.OwnerId.ControlParent
        form.Header.OwnerId.ControlParent = OptionSet.FieldControlType.Iframe;
        form.Header.OwnerId.DefaultView = "";
        form.Header.OwnerId.Disabled = false;
        //form.Header.OwnerId.EntityTypes
        form.Header.OwnerId.FireOnChange();
        form.Header.OwnerId.Focus();
        form.Header.OwnerId.Format = OptionSet.FieldFormat.Date;
        form.Header.OwnerId.IsDirty = false;
        form.Header.OwnerId.IsPartyList = false;
        form.Header.OwnerId.Label = "";
        form.Header.OwnerId.Name = "";
        form.Header.OwnerId.RemoveOnChange(function (a) { });
        form.Header.OwnerId.RemovePreSearch(function (a) { });
        form.Header.OwnerId.RequiredLevel = OptionSet.FieldRequiredLevel.None;
        form.Header.OwnerId.SetNotification("", "");
        form.Header.OwnerId.SubmitMode = OptionSet.FieldSubmitMode.Always;
        //form.Header.OwnerId.UserPrivilege
        form.Header.OwnerId.Valid = false;
        //form.Header.OwnerId.Value[0].id
        form.Header.OwnerId.Visible = false;
        //END LOOKUP

        //BEGIN STRING
        form.Header.abiz_Revision.AddNotification(null)//CHANGE !!!!
        form.Header.abiz_Revision.AddOnChange(function (a) { });
        //form.Header.abiz_Revision.AttributeParent
        form.Header.abiz_Revision.AttributeType = OptionSet.FieldAttributeType.Boolean;
        form.Header.abiz_Revision.ClearNotification("");
        //form.Header.abiz_Revision.ControlParent
        form.Header.abiz_Revision.ControlType = OptionSet.FieldControlType.Iframe;
        form.Header.abiz_Revision.Disabled = false;
        form.Header.abiz_Revision.FireOnChange();
        form.Header.abiz_Revision.Focus();
        form.Header.abiz_Revision.Format = OptionSet.FieldFormat.Date;
        form.Header.abiz_Revision.IsDirty = false;
        form.Header.abiz_Revision.Label = "";
        form.Header.abiz_Revision.MaxLength = 0;
        form.Header.abiz_Revision.Name = "";
        form.Header.abiz_Revision.RemoveOnChange(function (a) { });
        form.Header.abiz_Revision.Value2 = "";//CHANGE !!!

        form.Header.abiz_Revision.ControlType = "";

        //END STRING
    }
    return {
        OnLoad: onLoad,
        OnSave: onSave
    };
})();