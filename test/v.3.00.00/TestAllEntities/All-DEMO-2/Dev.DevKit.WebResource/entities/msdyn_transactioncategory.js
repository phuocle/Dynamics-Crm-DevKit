//@ts-check
///<reference path="msdyn_transactioncategory.d.ts" />
"use strict";
var formmsdyn_transactioncategory_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_transactioncategory_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_transactioncategory_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();