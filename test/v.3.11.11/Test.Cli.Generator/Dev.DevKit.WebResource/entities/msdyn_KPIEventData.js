//@ts-check
///<reference path="msdyn_KPIEventData.d.ts" />
"use strict";
var formmsdyn_KPIEventData_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_KPIEventData_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_KPIEventData_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();