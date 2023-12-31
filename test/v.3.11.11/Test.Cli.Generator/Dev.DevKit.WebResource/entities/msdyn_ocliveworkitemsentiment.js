//@ts-check
///<reference path="msdyn_ocliveworkitemsentiment.d.ts" />
"use strict";
var formmsdyn_ocliveworkitemsentiment_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_ocliveworkitemsentiment_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_ocliveworkitemsentiment_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();