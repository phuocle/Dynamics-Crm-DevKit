//@ts-check
///<reference path="msdyn_solutioncomponentcountsummary.d.ts" />
"use strict";
var formmsdyn_solutioncomponentcountsummary_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_solutioncomponentcountsummary_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_solutioncomponentcountsummary_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();