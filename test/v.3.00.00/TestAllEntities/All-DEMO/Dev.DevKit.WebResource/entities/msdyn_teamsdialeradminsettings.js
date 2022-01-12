//@ts-check
///<reference path="msdyn_teamsdialeradminsettings.d.ts" />
"use strict";
var formmsdyn_teamsdialeradminsettings_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_teamsdialeradminsettings_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_teamsdialeradminsettings_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();