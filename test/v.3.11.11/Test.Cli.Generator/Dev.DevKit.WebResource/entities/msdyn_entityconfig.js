//@ts-check
///<reference path="msdyn_entityconfig.d.ts" />
"use strict";
var formmsdyn_entityconfig_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_entityconfig_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_entityconfig_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();