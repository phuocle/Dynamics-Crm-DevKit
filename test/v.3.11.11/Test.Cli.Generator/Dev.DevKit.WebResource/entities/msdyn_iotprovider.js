//@ts-check
///<reference path="msdyn_iotprovider.d.ts" />
"use strict";
var formmsdyn_iotprovider_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_iotprovider_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_iotprovider_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();