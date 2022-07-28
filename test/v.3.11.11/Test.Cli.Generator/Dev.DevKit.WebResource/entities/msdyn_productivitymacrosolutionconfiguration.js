//@ts-check
///<reference path="msdyn_productivitymacrosolutionconfiguration.d.ts" />
"use strict";
var formmsdyn_productivitymacrosolutionconfiguration_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_productivitymacrosolutionconfiguration_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_productivitymacrosolutionconfiguration_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();