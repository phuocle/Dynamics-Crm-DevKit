//@ts-check
///<reference path="msdyn_notificationfield.d.ts" />
"use strict";
var formmsdyn_notificationfield_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_notificationfield_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_notificationfield_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();