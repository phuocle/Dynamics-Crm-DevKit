//@ts-check
///<reference path="msdyn_iotdevice.d.ts" />
"use strict";
var formmsdyn_iotdevice_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_iotdevice_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_iotdevice_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formIoT_Device_MFD = (function () {
	"use strict";
	/** @type DevKit.FormIoT_Device_MFD */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormIoT_Device_MFD(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();