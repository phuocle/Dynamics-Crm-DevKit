//@ts-check
///<reference path="msdyn_iotdevicevisualizationconfiguration.d.ts" />
"use strict";
var formmsdyn_iotdevicevisualizationconfiguration_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_iotdevicevisualizationconfiguration_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_iotdevicevisualizationconfiguration_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();