//@ts-check
///<reference path="msdyn_resourceassignmentdetail.d.ts" />
"use strict";
var formmsdyn_resourceassignmentdetail_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_resourceassignmentdetail_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_resourceassignmentdetail_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();