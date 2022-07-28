//@ts-check
///<reference path="msdyn_iotdevicecategory.d.ts" />
"use strict";
var formmsdyn_iotdevicecategory_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_iotdevicecategory_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_iotdevicecategory_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();