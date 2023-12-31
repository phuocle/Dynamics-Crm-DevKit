//@ts-check
///<reference path="msdyn_actual.d.ts" />
"use strict";
var formmsdyn_actual_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_actual_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_actual_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();