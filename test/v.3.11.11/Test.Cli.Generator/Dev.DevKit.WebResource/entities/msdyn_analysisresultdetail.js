//@ts-check
///<reference path="msdyn_analysisresultdetail.d.ts" />
"use strict";
var formmsdyn_analysisresultdetail_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_analysisresultdetail_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_analysisresultdetail_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();