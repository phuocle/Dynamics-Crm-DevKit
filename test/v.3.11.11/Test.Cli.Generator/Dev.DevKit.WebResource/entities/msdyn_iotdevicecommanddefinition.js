//@ts-check
///<reference path="msdyn_iotdevicecommanddefinition.d.ts" />
"use strict";
var formmsdyn_iotdevicecommanddefinition_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_iotdevicecommanddefinition_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_iotdevicecommanddefinition_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();