//@ts-check
///<reference path="msdyn_casesuggestionrequestpayload.d.ts" />
"use strict";
var formmsdyn_casesuggestionrequestpayload_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_casesuggestionrequestpayload_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_casesuggestionrequestpayload_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();