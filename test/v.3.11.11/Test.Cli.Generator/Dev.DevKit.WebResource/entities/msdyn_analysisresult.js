//@ts-check
///<reference path="msdyn_analysisresult.d.ts" />
"use strict";
var formmsdyn_analysisresult_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_analysisresult_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_analysisresult_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();