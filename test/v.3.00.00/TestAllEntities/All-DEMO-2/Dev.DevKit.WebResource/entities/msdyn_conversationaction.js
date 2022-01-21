//@ts-check
///<reference path="msdyn_conversationaction.d.ts" />
"use strict";
var formmsdyn_conversationaction_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_conversationaction_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_conversationaction_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();