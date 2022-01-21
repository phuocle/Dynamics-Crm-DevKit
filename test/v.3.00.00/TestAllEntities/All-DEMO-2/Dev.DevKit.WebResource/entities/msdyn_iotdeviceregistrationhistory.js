//@ts-check
///<reference path="msdyn_iotdeviceregistrationhistory.d.ts" />
"use strict";
var formmsdyn_iotdeviceregistrationhistory_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_iotdeviceregistrationhistory_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_iotdeviceregistrationhistory_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();