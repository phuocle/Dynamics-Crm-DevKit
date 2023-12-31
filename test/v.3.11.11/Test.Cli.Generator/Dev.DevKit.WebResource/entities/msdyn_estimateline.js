//@ts-check
///<reference path="msdyn_estimateline.d.ts" />
"use strict";
var formmsdyn_estimateline_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_estimateline_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_estimateline_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();