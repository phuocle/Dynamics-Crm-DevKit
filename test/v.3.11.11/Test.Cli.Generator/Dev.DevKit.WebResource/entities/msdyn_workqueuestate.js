//@ts-check
///<reference path="msdyn_workqueuestate.d.ts" />
"use strict";
var formmsdyn_workqueuestate_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_workqueuestate_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_workqueuestate_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();