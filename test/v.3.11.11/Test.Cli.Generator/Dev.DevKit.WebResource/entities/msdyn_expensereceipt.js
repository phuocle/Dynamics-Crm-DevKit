//@ts-check
///<reference path="msdyn_expensereceipt.d.ts" />
"use strict";
var formmsdyn_expensereceipt_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_expensereceipt_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_expensereceipt_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();