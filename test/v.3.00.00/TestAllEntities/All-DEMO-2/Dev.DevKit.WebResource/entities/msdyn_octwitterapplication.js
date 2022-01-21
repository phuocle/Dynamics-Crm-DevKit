//@ts-check
///<reference path="msdyn_octwitterapplication.d.ts" />
"use strict";
var formmsdyn_octwitterapplication_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_octwitterapplication_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_octwitterapplication_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();