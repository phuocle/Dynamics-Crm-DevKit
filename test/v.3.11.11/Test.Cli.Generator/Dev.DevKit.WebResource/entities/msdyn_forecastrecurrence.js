//@ts-check
///<reference path="msdyn_forecastrecurrence.d.ts" />
"use strict";
var formmsdyn_forecastrecurrence_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_forecastrecurrence_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_forecastrecurrence_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();