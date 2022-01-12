//@ts-check
///<reference path="msdyn_assignmentconfiguration.d.ts" />
"use strict";
var formmsdyn_assignmentconfiguration_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_assignmentconfiguration_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_assignmentconfiguration_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();