//@ts-check
///<reference path="msdyn_solutionhealthruleset.d.ts" />
"use strict";
var formmsdyn_solutionhealthruleset_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_solutionhealthruleset_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_solutionhealthruleset_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();