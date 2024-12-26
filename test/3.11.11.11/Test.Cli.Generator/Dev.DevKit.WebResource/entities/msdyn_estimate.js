//@ts-check
///<reference path="msdyn_estimate.d.ts" />
"use strict";
var formmsdyn_estimate_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_estimate_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_estimate_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();