//@ts-check
///<reference path="msdyn_caseenrichment.d.ts" />
"use strict";
var formmsdyn_caseenrichment_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_caseenrichment_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_caseenrichment_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();