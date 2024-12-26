//@ts-check
///<reference path="msdyn_inspectionresponse.d.ts" />
"use strict";
var formmsdyn_inspectionresponse_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_inspectionresponse_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_inspectionresponse_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();