//@ts-check
///<reference path="msdyn_notificationtemplate.d.ts" />
"use strict";
var formmsdyn_notificationtemplate_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_notificationtemplate_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_notificationtemplate_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();