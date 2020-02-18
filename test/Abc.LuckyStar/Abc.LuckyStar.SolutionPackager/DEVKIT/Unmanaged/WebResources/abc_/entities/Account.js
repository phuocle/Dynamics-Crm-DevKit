//@ts-check
///<reference path="Account.d.ts" />
var formAccount = (function () {
    function onLoad(executionContext) {
        var form = new LuckyStar.FormAccount(executionContext);
        if (form.FormType === OptionSet.FormType.Create) {

        }
        var account = new LuckyStar.AccountApi();
        account.AccountCategoryCode.Value = OptionSet.Account.AccountCategoryCode.Preferred_Customer;
	}
	function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formAccount_Quick_Create = (function () {
	function onLoad(executionContext) {
	}
	function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();