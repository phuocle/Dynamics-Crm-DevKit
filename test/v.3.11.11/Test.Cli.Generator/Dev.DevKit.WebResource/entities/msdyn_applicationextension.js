//@ts-check
///<reference path="msdyn_applicationextension.d.ts" />
"use strict";
var formmsdyn_applicationextension_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_applicationextension_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_applicationextension_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();