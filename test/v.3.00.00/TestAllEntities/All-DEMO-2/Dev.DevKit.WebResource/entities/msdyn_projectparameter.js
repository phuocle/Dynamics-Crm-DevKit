//@ts-check
///<reference path="msdyn_projectparameter.d.ts" />
"use strict";
var formmsdyn_projectparameter_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_projectparameter_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_projectparameter_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();