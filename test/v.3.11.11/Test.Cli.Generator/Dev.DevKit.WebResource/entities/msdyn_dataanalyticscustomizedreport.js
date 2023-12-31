//@ts-check
///<reference path="msdyn_dataanalyticscustomizedreport.d.ts" />
"use strict";
var formmsdyn_dataanalyticscustomizedreport_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_dataanalyticscustomizedreport_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_dataanalyticscustomizedreport_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();