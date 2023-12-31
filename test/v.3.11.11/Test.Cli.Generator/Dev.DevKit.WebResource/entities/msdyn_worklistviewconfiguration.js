//@ts-check
///<reference path="msdyn_worklistviewconfiguration.d.ts" />
"use strict";
var formmsdyn_worklistviewconfiguration_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_worklistviewconfiguration_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_worklistviewconfiguration_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();