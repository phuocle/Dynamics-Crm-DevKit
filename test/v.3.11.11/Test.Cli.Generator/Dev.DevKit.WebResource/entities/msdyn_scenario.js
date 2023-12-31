//@ts-check
///<reference path="msdyn_scenario.d.ts" />
"use strict";
var formmsdyn_scenario_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_scenario_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_scenario_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();