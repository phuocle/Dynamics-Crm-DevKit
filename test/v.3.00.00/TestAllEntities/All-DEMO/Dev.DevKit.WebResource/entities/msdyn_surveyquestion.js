//@ts-check
///<reference path="msdyn_surveyquestion.d.ts" />
"use strict";
var formmsdyn_surveyquestion_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_surveyquestion_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_surveyquestion_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();