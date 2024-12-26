//@ts-check
///<reference path="msfp_questionresponse.d.ts" />
"use strict";
var formmsfp_questionresponse_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsfp_questionresponse_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsfp_questionresponse_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();