//@ts-check
///<reference path="msdyn_integrationjob.d.ts" />
"use strict";
var formmsdyn_integrationjob_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_integrationjob_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_integrationjob_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();