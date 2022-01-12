//@ts-check
///<reference path="msdyn_authenticationsettings.d.ts" />
"use strict";
var formmsdyn_authenticationsettings_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_authenticationsettings_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_authenticationsettings_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();