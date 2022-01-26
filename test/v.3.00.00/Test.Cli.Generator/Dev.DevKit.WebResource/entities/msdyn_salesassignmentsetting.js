//@ts-check
///<reference path="msdyn_salesassignmentsetting.d.ts" />
"use strict";
var formmsdyn_salesassignmentsetting_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_salesassignmentsetting_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_salesassignmentsetting_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();