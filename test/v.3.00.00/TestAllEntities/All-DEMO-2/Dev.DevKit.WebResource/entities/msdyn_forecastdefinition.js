//@ts-check
///<reference path="msdyn_forecastdefinition.d.ts" />
"use strict";
var formmsdyn_forecastdefinition_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_forecastdefinition_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_forecastdefinition_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();