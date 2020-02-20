//@ts-check
///<reference path="Account.d.ts" />
var formAccount = (function () {
    function onLoad(executionContext) {
        var form = new LuckyStar.FormAccount(executionContext);
        if (form.FormType === OptionSet.FormType.Create) {
            form.Body.Tab._64BC19B9_1311_4B93_BE4C_6407B98D2AB3.Section._64BC19B9_1311_4B93_BE4C_6407B98D2AB4.Visible = false;
        }
        var account = new LuckyStar.AccountApi();
        account.AccountCategoryCode.Value = OptionSet.Account.AccountCategoryCode.Preferred_Customer;

        var accounApi = new LuckyStar.AccountApi();
        accounApi.IndustryCode.Value = OptionSet.Account.StateCode.Active;
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