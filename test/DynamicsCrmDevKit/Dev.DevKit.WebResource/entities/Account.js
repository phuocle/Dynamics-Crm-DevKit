//@ts-check
///<reference path="Account.d.ts" />
"use strict";
var formAccount = (function () {
	"use strict";
	async function onLoad(executionContext) {
		var form = new DevKit.FormAccount(executionContext);
		debugger;
		//var label = form.QuickForm.contactquickform.Body.EMailAddress1.Label;
		var a = "";

	}
	async function onSave(executionContext) {
		var form = new DevKit.FormAccount(executionContext);

		var lable = form.QuickForm.contactquickform.Body.EMailAddress1.Label;
		debugger;
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();