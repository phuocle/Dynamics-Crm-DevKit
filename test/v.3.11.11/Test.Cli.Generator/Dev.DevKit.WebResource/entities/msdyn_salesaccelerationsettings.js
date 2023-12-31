//@ts-check
///<reference path="msdyn_salesaccelerationsettings.d.ts" />
"use strict";
var formmsdyn_salesaccelerationsettings_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_salesaccelerationsettings_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_salesaccelerationsettings_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();