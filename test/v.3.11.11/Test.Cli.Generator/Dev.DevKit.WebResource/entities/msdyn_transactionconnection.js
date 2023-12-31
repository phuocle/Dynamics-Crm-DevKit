//@ts-check
///<reference path="msdyn_transactionconnection.d.ts" />
"use strict";
var formmsdyn_transactionconnection_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_transactionconnection_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_transactionconnection_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();