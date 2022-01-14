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
		form.Body.Name1.Label = "ABC";
		form.Body.Name2.Disabled = true;

		form.Header.Name.Disabled = true;
		form.Header.Name1.Label = "ABC";
		form.Header.Name2.Disabled = true;

		form.Process.BPF_Account.Name.Disabled = true;
		form.Process.BPF_Account.Name_1.Label = "ABC";
		form.Process.BPF_Account.Name_2.Disabled = true;
	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();