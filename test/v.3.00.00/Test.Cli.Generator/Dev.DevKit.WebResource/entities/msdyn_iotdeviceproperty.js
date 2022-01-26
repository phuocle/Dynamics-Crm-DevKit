//@ts-check
///<reference path="msdyn_iotdeviceproperty.d.ts" />
"use strict";
var formmsdyn_iotdeviceproperty_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_iotdeviceproperty_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_iotdeviceproperty_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();