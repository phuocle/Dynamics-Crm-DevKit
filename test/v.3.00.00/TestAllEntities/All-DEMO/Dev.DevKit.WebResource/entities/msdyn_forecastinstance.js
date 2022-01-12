//@ts-check
///<reference path="msdyn_forecastinstance.d.ts" />
"use strict";
var formmsdyn_forecastinstance_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_forecastinstance_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_forecastinstance_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();