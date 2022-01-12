//@ts-check
///<reference path="msdyn_workordersubstatus.d.ts" />
"use strict";
var formmsdyn_workordersubstatus_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_workordersubstatus_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_workordersubstatus_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();