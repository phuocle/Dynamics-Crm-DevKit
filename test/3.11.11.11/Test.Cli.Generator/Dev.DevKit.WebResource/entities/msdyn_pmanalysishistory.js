//@ts-check
///<reference path="msdyn_pmanalysishistory.d.ts" />
"use strict";
var formmsdyn_pmanalysishistory_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_pmanalysishistory_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_pmanalysishistory_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();