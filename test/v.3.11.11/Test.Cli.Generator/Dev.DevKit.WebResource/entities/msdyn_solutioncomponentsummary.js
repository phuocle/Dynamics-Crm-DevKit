//@ts-check
///<reference path="msdyn_solutioncomponentsummary.d.ts" />
"use strict";
var formmsdyn_solutioncomponentsummary_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_solutioncomponentsummary_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_solutioncomponentsummary_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();