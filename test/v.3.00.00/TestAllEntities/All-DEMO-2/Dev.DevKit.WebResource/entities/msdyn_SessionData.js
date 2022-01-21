//@ts-check
///<reference path="msdyn_SessionData.d.ts" />
"use strict";
var formmsdyn_SessionData_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_SessionData_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_SessionData_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();