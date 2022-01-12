//@ts-check
///<reference path="BulkOperationLog.d.ts" />
"use strict";
var formBulkOperationLog_Information = (function () {
	"use strict";
	/** @type DevKit.FormBulkOperationLog_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormBulkOperationLog_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();