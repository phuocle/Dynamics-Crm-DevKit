//@ts-check
///<reference path="msdyn_consoleapplicationnotificationfield.d.ts" />
"use strict";
var formmsdyn_consoleapplicationnotificationfield_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_consoleapplicationnotificationfield_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_consoleapplicationnotificationfield_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();