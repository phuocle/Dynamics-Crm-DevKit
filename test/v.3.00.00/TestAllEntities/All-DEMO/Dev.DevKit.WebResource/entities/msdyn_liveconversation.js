//@ts-check
///<reference path="msdyn_liveconversation.d.ts" />
"use strict";
var formmsdyn_liveconversation_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_liveconversation_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_liveconversation_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formOngoing_Conversation_Main_Form = (function () {
	"use strict";
	/** @type DevKit.FormOngoing_Conversation_Main_Form */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormOngoing_Conversation_Main_Form(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();