//@ts-check
///<reference path="Account.d.ts" />
"use strict";
var formAccount = (function () {
	"use strict";
	async function onLoad(executionContext) {
		checkIsFormUpdate(executionContext);
	}
	async function onSave(executionContext) {
	}
	function checkIsFormUpdate(executionContext) {
		var form = new DevKit.FormAccount(executionContext);
		if (form.FormType === OptionSet.FormType.Update) {
			form.Body.Name.Disabled = true;
			form.Body.ModifiedOn.ShowTime = false;
        }
    }
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();