//@ts-check
///<reference path="msdyn_inspectiondefinition.d.ts" />
"use strict";
var formmsdyn_inspectiondefinition_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_inspectiondefinition_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_inspectiondefinition_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();