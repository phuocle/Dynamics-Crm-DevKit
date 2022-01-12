//@ts-check
///<reference path="msdyn_predictworkhourdurationsetting.d.ts" />
"use strict";
var formmsdyn_predictworkhourdurationsetting_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_predictworkhourdurationsetting_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_predictworkhourdurationsetting_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();