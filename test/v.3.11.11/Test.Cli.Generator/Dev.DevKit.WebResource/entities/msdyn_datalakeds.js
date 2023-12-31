//@ts-check
///<reference path="msdyn_datalakeds.d.ts" />
"use strict";
var formmsdyn_datalakeds_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_datalakeds_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_datalakeds_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();