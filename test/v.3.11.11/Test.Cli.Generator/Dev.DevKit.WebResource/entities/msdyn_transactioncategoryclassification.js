//@ts-check
///<reference path="msdyn_transactioncategoryclassification.d.ts" />
"use strict";
var formmsdyn_transactioncategoryclassification_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_transactioncategoryclassification_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_transactioncategoryclassification_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();