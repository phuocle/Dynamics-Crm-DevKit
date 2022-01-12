//@ts-check
///<reference path="Account.d.ts" />
"use strict";
var formAccount = (function () {
	"use strict";
	/** @type DevKit.FormAccount */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormAccount(executionContext);
		debugger;
		form.Body.Name.Disabled = true;
		form.Body.Name_1.Disabled = true;
	}
	async function ParentAccountIdAddOnChange(executionContext) {
		//do the code add on change ...
	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();