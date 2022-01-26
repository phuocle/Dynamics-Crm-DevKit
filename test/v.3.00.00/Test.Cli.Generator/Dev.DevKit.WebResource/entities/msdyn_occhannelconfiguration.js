//@ts-check
///<reference path="msdyn_occhannelconfiguration.d.ts" />
"use strict";
var formmsdyn_occhannelconfiguration_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_occhannelconfiguration_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_occhannelconfiguration_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();