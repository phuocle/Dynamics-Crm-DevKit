//@ts-check
///<reference path="msdyn_iotdevicecommand.d.ts" />
"use strict";
var formmsdyn_iotdevicecommand_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_iotdevicecommand_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_iotdevicecommand_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();