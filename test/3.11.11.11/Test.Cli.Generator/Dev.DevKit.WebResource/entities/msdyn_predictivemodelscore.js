//@ts-check
///<reference path="msdyn_predictivemodelscore.d.ts" />
"use strict";
var formmsdyn_predictivemodelscore_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_predictivemodelscore_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_predictivemodelscore_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();