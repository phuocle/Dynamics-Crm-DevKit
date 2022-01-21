//@ts-check
///<reference path="msdyn_provider.d.ts" />
"use strict";
var formmsdyn_provider_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_provider_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_provider_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();