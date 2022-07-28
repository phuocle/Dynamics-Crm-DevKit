//@ts-check
///<reference path="msdyn_ciprovider.d.ts" />
"use strict";
var formmsdyn_ciprovider_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_ciprovider_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_ciprovider_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();