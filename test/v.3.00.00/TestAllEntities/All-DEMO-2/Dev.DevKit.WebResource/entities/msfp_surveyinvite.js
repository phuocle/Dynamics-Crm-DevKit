//@ts-check
///<reference path="msfp_surveyinvite.d.ts" />
"use strict";
var formmsfp_surveyinvite_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsfp_surveyinvite_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsfp_surveyinvite_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();