//@ts-check
///<reference path="msdyn_conversationtopic_conversation.d.ts" />
"use strict";
var formmsdyn_conversationtopic_conversation_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_conversationtopic_conversation_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_conversationtopic_conversation_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();