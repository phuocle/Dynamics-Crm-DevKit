//@ts-check
///<reference path="msdyn_consoleapplicationnotificationtemplate.d.ts" />
"use strict";
var formmsdyn_consoleapplicationnotificationtemplate_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_consoleapplicationnotificationtemplate_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_consoleapplicationnotificationtemplate_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();