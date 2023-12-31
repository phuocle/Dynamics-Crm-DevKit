//@ts-check
///<reference path="msdyn_sessionparticipant.d.ts" />
"use strict";
var formSession_participant_Form = (function () {
	"use strict";
	/** @type DevKit.FormSession_participant_Form */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormSession_participant_Form(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();