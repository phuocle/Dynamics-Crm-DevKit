//@ts-check
///<reference path="msdyn_analyticsadminsettings.d.ts" />
"use strict";
var formmsdyn_analyticsadminsettings_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_analyticsadminsettings_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_analyticsadminsettings_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();