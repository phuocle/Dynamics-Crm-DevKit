//@ts-check
///<reference path="msdyn_solutionhealthruleargument.d.ts" />
"use strict";
var formmsdyn_solutionhealthruleargument_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_solutionhealthruleargument_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_solutionhealthruleargument_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();