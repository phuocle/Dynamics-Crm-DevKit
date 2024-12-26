//@ts-check
///<reference path="msdyn_soundnotificationsetting.d.ts" />
"use strict";
var formmsdyn_soundnotificationsetting_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_soundnotificationsetting_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_soundnotificationsetting_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();