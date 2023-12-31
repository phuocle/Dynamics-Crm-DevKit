//@ts-check
///<reference path="msdyn_octwitterhandle.d.ts" />
"use strict";
var formmsdyn_octwitterhandle_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_octwitterhandle_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_octwitterhandle_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();