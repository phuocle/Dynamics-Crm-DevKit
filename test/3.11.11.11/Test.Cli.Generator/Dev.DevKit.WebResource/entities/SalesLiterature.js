//@ts-check
///<reference path="SalesLiterature.d.ts" />
"use strict";
var formSalesLiterature_Information = (function () {
	"use strict";
	/** @type DevKit.FormSalesLiterature_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormSalesLiterature_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formSales_Literature = (function () {
	"use strict";
	/** @type DevKit.FormSales_Literature */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormSales_Literature(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();