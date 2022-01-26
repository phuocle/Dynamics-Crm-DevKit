//@ts-check
///<reference path="msdyn_unifiedroutingdiagnostic.d.ts" />
"use strict";
var formmsdyn_unifiedroutingdiagnostic_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_unifiedroutingdiagnostic_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_unifiedroutingdiagnostic_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();