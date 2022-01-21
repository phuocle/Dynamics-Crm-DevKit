//@ts-check
///<reference path="msdyn_integrationjobdetail.d.ts" />
"use strict";
var formmsdyn_integrationjobdetail_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_integrationjobdetail_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_integrationjobdetail_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();