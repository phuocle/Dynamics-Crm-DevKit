//@ts-check
///<reference path="msdyn_consoleapplicationtemplateparameter.d.ts" />
"use strict";
var formmsdyn_consoleapplicationtemplateparameter_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_consoleapplicationtemplateparameter_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_consoleapplicationtemplateparameter_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();