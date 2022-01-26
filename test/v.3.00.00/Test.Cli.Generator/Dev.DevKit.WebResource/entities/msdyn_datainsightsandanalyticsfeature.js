//@ts-check
///<reference path="msdyn_datainsightsandanalyticsfeature.d.ts" />
"use strict";
var formmsdyn_datainsightsandanalyticsfeature_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_datainsightsandanalyticsfeature_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_datainsightsandanalyticsfeature_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();