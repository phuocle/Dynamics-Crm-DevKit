//@ts-check
///<reference path="msdyn_expense.d.ts" />
"use strict";
var formCreate_Expense = (function () {
	"use strict";
	/** @type DevKit.FormCreate_Expense */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormCreate_Expense(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formmsdyn_expense_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_expense_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_expense_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();