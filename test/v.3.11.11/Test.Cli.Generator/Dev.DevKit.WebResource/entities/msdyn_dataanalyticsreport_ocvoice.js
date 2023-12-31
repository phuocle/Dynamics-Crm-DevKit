//@ts-check
///<reference path="msdyn_dataanalyticsreport_ocvoice.d.ts" />
"use strict";
var formmsdyn_dataanalyticsreport_ocvoice_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_dataanalyticsreport_ocvoice_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_dataanalyticsreport_ocvoice_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();