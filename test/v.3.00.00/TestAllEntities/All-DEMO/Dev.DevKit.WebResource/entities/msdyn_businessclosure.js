//@ts-check
///<reference path="msdyn_businessclosure.d.ts" />
"use strict";
var formmsdyn_businessclosure_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_businessclosure_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_businessclosure_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();