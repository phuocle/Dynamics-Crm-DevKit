//@ts-check
///<reference path="msdyn_quotelineanalyticsbreakdown.d.ts" />
"use strict";
var formmsdyn_quotelineanalyticsbreakdown_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_quotelineanalyticsbreakdown_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_quotelineanalyticsbreakdown_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();