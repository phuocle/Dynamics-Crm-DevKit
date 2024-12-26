//@ts-check
///<reference path="msdyn_swarmskill.d.ts" />
"use strict";
var formmsdyn_swarmskill_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_swarmskill_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_swarmskill_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();