//@ts-check
///<reference path="msdyn_analysiscomponent.d.ts" />
"use strict";
var formmsdyn_analysiscomponent_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_analysiscomponent_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_analysiscomponent_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();