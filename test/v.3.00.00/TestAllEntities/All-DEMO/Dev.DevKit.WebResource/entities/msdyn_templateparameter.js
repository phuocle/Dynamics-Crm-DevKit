//@ts-check
///<reference path="msdyn_templateparameter.d.ts" />
"use strict";
var formmsdyn_templateparameter_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_templateparameter_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_templateparameter_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();