//@ts-check
///<reference path="msdyn_rulesetdependencymapping.d.ts" />
"use strict";
var formmsdyn_rulesetdependencymapping_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_rulesetdependencymapping_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_rulesetdependencymapping_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();