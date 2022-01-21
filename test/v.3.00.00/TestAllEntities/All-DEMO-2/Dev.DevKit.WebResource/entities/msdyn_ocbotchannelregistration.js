//@ts-check
///<reference path="msdyn_ocbotchannelregistration.d.ts" />
"use strict";
var formmsdyn_ocbotchannelregistration_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_ocbotchannelregistration_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_ocbotchannelregistration_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();