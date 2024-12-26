//@ts-check
///<reference path="msdyn_consoleapplicationsessiontemplate.d.ts" />
"use strict";
var formmsdyn_consoleapplicationsessiontemplate_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_consoleapplicationsessiontemplate_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_consoleapplicationsessiontemplate_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();