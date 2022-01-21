//@ts-check
///<reference path="msdyn_consoleapplicationtemplate.d.ts" />
"use strict";
var formmsdyn_consoleapplicationtemplate_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_consoleapplicationtemplate_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_consoleapplicationtemplate_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();