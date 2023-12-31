//@ts-check
///<reference path="msdyn_dataanalyticsreport.d.ts" />
"use strict";
var formAnalytics_Report_Record = (function () {
	"use strict";
	/** @type DevKit.FormAnalytics_Report_Record */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormAnalytics_Report_Record(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();