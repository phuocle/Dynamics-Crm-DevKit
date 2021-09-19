//@ts-check
///<reference path="Account.d.ts" />
"use strict";
var formAccount = (function () {
	"use strict";
	/** @type DevKit.FormAccount */
	var form = null;
	async function onLoad(executionContext) {
		debugger;
		form = new DevKit.FormAccount(executionContext);

		if (form.FormType !== OptionSet.FormType.Create) {
			form.Body.Name.Disabled = true;
		}

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();