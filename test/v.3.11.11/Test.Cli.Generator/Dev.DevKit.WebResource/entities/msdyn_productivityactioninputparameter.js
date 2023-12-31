//@ts-check
///<reference path="msdyn_productivityactioninputparameter.d.ts" />
"use strict";
var formmsdyn_productivityactioninputparameter_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_productivityactioninputparameter_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_productivityactioninputparameter_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();