//@ts-check
///<reference path="msdyn_chatquestionnaireresponse.d.ts" />
"use strict";
var formmsdyn_chatquestionnaireresponse_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_chatquestionnaireresponse_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_chatquestionnaireresponse_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();