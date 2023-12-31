//@ts-check
///<reference path="msdyn_problematicassetfeedback.d.ts" />
"use strict";
var formmsdyn_problematicassetfeedback_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_problematicassetfeedback_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_problematicassetfeedback_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();