//@ts-check
///<reference path="msdyn_smartassistconfig.d.ts" />
"use strict";
var formmsdyn_smartassistconfig_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_smartassistconfig_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_smartassistconfig_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();