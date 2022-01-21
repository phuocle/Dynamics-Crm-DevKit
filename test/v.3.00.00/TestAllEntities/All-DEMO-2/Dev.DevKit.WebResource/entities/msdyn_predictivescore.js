//@ts-check
///<reference path="msdyn_predictivescore.d.ts" />
"use strict";
var formmsdyn_predictivescore_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_predictivescore_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_predictivescore_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();