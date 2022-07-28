//@ts-check
///<reference path="AzureServiceConnection.d.ts" />
"use strict";
var formAzureServiceConnection_Information = (function () {
	"use strict";
	/** @type DevKit.FormAzureServiceConnection_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormAzureServiceConnection_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();