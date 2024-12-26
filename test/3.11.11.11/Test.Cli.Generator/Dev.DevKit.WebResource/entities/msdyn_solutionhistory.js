//@ts-check
///<reference path="msdyn_solutionhistory.d.ts" />
"use strict";
var formmsdyn_solutionhistory_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_solutionhistory_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_solutionhistory_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();