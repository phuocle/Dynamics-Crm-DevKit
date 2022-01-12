//@ts-check
///<reference path="msdyn_iotdevicedatahistory.d.ts" />
"use strict";
var formmsdyn_iotdevicedatahistory_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_iotdevicedatahistory_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_iotdevicedatahistory_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();