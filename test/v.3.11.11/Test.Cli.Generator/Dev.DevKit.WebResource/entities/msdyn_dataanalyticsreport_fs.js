//@ts-check
///<reference path="msdyn_dataanalyticsreport_fs.d.ts" />
"use strict";
var formmsdyn_dataanalyticsreport_fs_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_dataanalyticsreport_fs_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_dataanalyticsreport_fs_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();