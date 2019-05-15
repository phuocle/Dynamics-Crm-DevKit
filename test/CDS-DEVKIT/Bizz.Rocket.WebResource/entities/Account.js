///<reference path='Account.d.ts' />
var formWebApi = (function () {
    function onLoad(executionContext) {
        var form = new Rocket.FormAccount(executionContext, "");
        form.Utility.
    }
    function onSave(executionContext) {
    }
    return {
        OnLoad: onLoad,
        OnSave: onSave
    };
})();