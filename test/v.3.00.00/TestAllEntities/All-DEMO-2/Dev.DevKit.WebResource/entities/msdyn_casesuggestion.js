//@ts-check
///<reference path="msdyn_casesuggestion.d.ts" />
"use strict";
var formmsdyn_casesuggestion_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_casesuggestion_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_casesuggestion_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();