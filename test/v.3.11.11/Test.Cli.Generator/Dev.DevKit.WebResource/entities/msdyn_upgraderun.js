//@ts-check
///<reference path="msdyn_upgraderun.d.ts" />
"use strict";
var formmsdyn_upgraderun_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_upgraderun_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_upgraderun_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();