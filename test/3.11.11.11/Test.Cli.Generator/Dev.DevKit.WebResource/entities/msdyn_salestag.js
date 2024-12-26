//@ts-check
///<reference path="msdyn_salestag.d.ts" />
"use strict";
var formmsdyn_salestag_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_salestag_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_salestag_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();