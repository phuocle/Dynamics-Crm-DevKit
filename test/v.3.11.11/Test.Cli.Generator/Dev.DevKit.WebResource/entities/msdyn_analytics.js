//@ts-check
///<reference path="msdyn_analytics.d.ts" />
"use strict";
var formmsdyn_analytics_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_analytics_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_analytics_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();