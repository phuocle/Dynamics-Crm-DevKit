//@ts-check
///<reference path="msdyn_iotpropertydefinition.d.ts" />
"use strict";
var formmsdyn_iotpropertydefinition_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_iotpropertydefinition_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_iotpropertydefinition_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();