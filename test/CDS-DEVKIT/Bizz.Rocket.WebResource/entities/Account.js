///<reference path='Account.d.ts' />
var formWebApi = (function () {
    function onLoad(executionContext) {
        var form = new Rocket.FormAccount(executionContext, "");
        form.Utility.CloseProgressIndicator();
        form.Utility.AllowedStatusTransitions("a", 1, function (statusCodes) {
            var length = statusCodes.length;

        }, function (error) { });
        form.Utility.EntityMetadata("", [""], function (meta) {
            var description = meta.Description;
        }, function (error) { });
        form.Utility.Client.ClientName = OptionSet.ClientName.Mobile;
        form.Utility.Client.ClientState = OptionSet.ClientState.Offline;
        form.Utility.Client.FormFactor = OptionSet.FormFactor;
        var a = form.Utility.Client.IsOffline();
        form.Utility.OrganizationSettings.Attributes = [];
        form.Utility.OrganizationSettings.BaseCurrencyId = "";
        form.Utility.OrganizationSettings.DefaultCountryCode = "";
        form.Utility.OrganizationSettings.IsAutoSaveEnabled = false;
        form.Utility.OrganizationSettings.LanguageId = 123;
        form.Utility.OrganizationSettings.OrganizationId = "";
        form.Utility.OrganizationSettings.UniqueName = "";
        form.Utility.OrganizationSettings.UseSkypeProtocol = false;
        form.Utility.CurrentAppProperties(function (data) {
            var a = data.
        }, function (error) { })


    }
    function onSave(executionContext) {
    }
    return {
        OnLoad: onLoad,
        OnSave: onSave
    };
})();