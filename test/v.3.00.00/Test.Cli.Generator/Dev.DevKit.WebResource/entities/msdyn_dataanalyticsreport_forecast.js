//@ts-check
///<reference path="msdyn_dataanalyticsreport_forecast.d.ts" />
"use strict";
var formmsdyn_dataanalyticsreport_forecast_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_dataanalyticsreport_forecast_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_dataanalyticsreport_forecast_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();