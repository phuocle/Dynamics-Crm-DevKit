//@ts-check
///<reference path="msdyn_upgradestep.d.ts" />
"use strict";
var formmsdyn_upgradestep_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_upgradestep_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_upgradestep_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();