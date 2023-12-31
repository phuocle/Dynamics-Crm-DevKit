//@ts-check
///<reference path="msdyn_inspectionattachment.d.ts" />
"use strict";
var formmsdyn_inspectionattachment_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_inspectionattachment_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_inspectionattachment_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();