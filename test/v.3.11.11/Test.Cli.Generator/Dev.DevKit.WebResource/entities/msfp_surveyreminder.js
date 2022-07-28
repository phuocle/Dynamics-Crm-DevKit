//@ts-check
///<reference path="msfp_surveyreminder.d.ts" />
"use strict";
var formmsfp_surveyreminder_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsfp_surveyreminder_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsfp_surveyreminder_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();