//@ts-check
///<reference path="msdyn_unifiedroutingsetuptracker.d.ts" />
"use strict";
var formmsdyn_unifiedroutingsetuptracker_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_unifiedroutingsetuptracker_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_unifiedroutingsetuptracker_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();