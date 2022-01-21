//@ts-check
///<reference path="msdyn_transactiontype.d.ts" />
"use strict";
var formmsdyn_transactiontype_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_transactiontype_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_transactiontype_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();