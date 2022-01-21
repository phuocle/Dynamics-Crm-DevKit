//@ts-check
///<reference path="msdyn_analyticsforcs.d.ts" />
"use strict";
var formmsdyn_analyticsforcs_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_analyticsforcs_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_analyticsforcs_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();