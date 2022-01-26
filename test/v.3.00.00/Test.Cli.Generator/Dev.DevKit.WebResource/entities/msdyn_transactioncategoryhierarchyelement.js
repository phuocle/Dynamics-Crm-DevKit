//@ts-check
///<reference path="msdyn_transactioncategoryhierarchyelement.d.ts" />
"use strict";
var formmsdyn_transactioncategoryhierarchyelement_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_transactioncategoryhierarchyelement_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_transactioncategoryhierarchyelement_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();