//@ts-check
///<reference path="msdyn_paneconfiguration.d.ts" />
"use strict";
var formmsdyn_paneconfiguration_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_paneconfiguration_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_paneconfiguration_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();