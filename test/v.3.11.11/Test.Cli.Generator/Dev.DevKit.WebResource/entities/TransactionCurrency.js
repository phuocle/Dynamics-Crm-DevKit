//@ts-check
///<reference path="TransactionCurrency.d.ts" />
"use strict";
var formTransactionCurrency_Information = (function () {
	"use strict";
	/** @type DevKit.FormTransactionCurrency_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormTransactionCurrency_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();