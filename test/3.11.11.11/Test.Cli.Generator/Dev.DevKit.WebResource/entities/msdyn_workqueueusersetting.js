//@ts-check
///<reference path="msdyn_workqueueusersetting.d.ts" />
"use strict";
var formmsdyn_workqueueusersetting_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_workqueueusersetting_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_workqueueusersetting_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();