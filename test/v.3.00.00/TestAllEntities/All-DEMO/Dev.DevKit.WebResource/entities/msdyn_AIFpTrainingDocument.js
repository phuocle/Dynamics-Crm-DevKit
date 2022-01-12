//@ts-check
///<reference path="msdyn_AIFpTrainingDocument.d.ts" />
"use strict";
var formmsdyn_AIFpTrainingDocument_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_AIFpTrainingDocument_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_AIFpTrainingDocument_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();