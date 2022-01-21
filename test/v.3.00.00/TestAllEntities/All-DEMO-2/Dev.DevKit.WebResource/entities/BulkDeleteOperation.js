//@ts-check
///<reference path="BulkDeleteOperation.d.ts" />
"use strict";
var formBulkDeleteOperation_Information = (function () {
	"use strict";
	/** @type DevKit.FormBulkDeleteOperation_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormBulkDeleteOperation_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();