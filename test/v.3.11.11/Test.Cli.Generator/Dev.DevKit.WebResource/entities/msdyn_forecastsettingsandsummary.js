//@ts-check
///<reference path="msdyn_forecastsettingsandsummary.d.ts" />
"use strict";
var formmsdyn_forecastsettingsandsummary_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_forecastsettingsandsummary_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_forecastsettingsandsummary_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();