//@ts-check
///<reference path="msdyn_wallsavedqueryusersettings.d.ts" />
"use strict";
var formmsdyn_wallsavedqueryusersettings_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_wallsavedqueryusersettings_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_wallsavedqueryusersettings_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();