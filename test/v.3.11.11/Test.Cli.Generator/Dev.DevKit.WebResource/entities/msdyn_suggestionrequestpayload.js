//@ts-check
///<reference path="msdyn_suggestionrequestpayload.d.ts" />
"use strict";
var formmsdyn_suggestionrequestpayload_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_suggestionrequestpayload_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_suggestionrequestpayload_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();