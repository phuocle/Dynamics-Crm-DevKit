//@ts-check
///<reference path="msdyn_iotsettings.d.ts" />
"use strict";
var formmsdyn_iotsettings_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_iotsettings_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_iotsettings_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();