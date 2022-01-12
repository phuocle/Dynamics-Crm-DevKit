//@ts-check
///<reference path="msdyn_consoleapplicationtype.d.ts" />
"use strict";
var formmsdyn_consoleapplicationtype_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_consoleapplicationtype_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_consoleapplicationtype_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();