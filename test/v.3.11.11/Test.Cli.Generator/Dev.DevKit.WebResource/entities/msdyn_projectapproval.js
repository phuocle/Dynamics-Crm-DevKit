//@ts-check
///<reference path="msdyn_projectapproval.d.ts" />
"use strict";
var formmsdyn_projectapproval_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_projectapproval_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_projectapproval_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();