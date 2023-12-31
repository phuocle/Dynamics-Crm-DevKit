//@ts-check
///<reference path="msdyn_timeentrysetting.d.ts" />
"use strict";
var formmsdyn_timeentrysetting_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_timeentrysetting_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_timeentrysetting_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();