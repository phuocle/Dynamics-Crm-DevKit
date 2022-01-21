//@ts-check
///<reference path="msdyn_solutionhealthrule.d.ts" />
"use strict";
var formmsdyn_solutionhealthrule_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_solutionhealthrule_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_solutionhealthrule_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();