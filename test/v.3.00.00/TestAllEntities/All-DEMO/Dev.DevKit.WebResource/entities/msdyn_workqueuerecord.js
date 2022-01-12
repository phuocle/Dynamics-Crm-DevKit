//@ts-check
///<reference path="msdyn_workqueuerecord.d.ts" />
"use strict";
var formmsdyn_workqueuerecord_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_workqueuerecord_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_workqueuerecord_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();