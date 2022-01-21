//@ts-check
///<reference path="msdyn_applicationtabtemplate.d.ts" />
"use strict";
var formmsdyn_applicationtabtemplate_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_applicationtabtemplate_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_applicationtabtemplate_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();