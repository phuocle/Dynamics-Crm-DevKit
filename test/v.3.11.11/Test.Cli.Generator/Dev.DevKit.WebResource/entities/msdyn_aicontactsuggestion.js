//@ts-check
///<reference path="msdyn_aicontactsuggestion.d.ts" />
"use strict";
var formAi_contact_suggestion = (function () {
	"use strict";
	/** @type DevKit.FormAi_contact_suggestion */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormAi_contact_suggestion(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();