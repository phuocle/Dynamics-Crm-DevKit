//@ts-check
///<reference path="msdyn_inboxconfiguration.d.ts" />
"use strict";
var formmsdyn_inboxconfiguration_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_inboxconfiguration_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_inboxconfiguration_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();