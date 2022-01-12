//@ts-check
///<reference path="msdyn_productivityactionoutputparameter.d.ts" />
"use strict";
var formmsdyn_productivityactionoutputparameter_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_productivityactionoutputparameter_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_productivityactionoutputparameter_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();