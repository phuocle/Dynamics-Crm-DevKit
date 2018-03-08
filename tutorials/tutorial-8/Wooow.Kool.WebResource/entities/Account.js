///<reference path="Account.form.intellisense.js" />
///<reference path="Account.webapi.intellisense.js" />
function onLoad(executionContext) {
    ImportJsFiles(["WebApiClient", "entities/Account.form", "entities/Account.webapi"], function (WebApiClient) {
        var account = new Kool.Form.Account(executionContext);
        if (account.FormType == OptionSet.FormType.Create) {
            account.Body.Name.Disabled = false;
        }
        else if (account.FormType == OptionSet.FormType.BulkEdit ||
            account.FormType == OptionSet.FormType.Update) {
            account.Body.Name.Disabled = true;
        }
    });
}

function onSave(executionContext) {
    ImportJsFiles(["WebApiClient", "entities/Account.form", "entities/Account.webapi"], function (WebApiClient) {

    });
}