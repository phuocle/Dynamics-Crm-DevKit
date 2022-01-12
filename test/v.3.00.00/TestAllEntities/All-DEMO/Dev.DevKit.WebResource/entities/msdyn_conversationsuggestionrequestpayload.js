//@ts-check
///<reference path="msdyn_conversationsuggestionrequestpayload.d.ts" />
"use strict";
var formmsdyn_conversationsuggestionrequestpayload_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_conversationsuggestionrequestpayload_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_conversationsuggestionrequestpayload_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();