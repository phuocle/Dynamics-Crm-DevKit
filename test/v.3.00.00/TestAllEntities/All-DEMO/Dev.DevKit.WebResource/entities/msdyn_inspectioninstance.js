//@ts-check
///<reference path="msdyn_inspectioninstance.d.ts" />
"use strict";
var formmsdyn_inspectioninstance_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_inspectioninstance_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_inspectioninstance_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();