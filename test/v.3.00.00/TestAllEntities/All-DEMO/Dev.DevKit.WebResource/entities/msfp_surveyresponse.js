//@ts-check
///<reference path="msfp_surveyresponse.d.ts" />
"use strict";
var formmsfp_surveyresponse_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsfp_surveyresponse_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsfp_surveyresponse_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();