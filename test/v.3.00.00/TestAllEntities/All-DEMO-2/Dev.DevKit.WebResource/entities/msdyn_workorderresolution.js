//@ts-check
///<reference path="msdyn_workorderresolution.d.ts" />
"use strict";
var formmsdyn_workorderresolution_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_workorderresolution_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_workorderresolution_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();