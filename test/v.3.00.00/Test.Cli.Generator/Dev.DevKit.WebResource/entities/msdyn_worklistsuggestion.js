//@ts-check
///<reference path="msdyn_worklistsuggestion.d.ts" />
"use strict";
var formmsdyn_worklistsuggestion_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_worklistsuggestion_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_worklistsuggestion_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();