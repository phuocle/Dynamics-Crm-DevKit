//@ts-check
///<reference path="msdyn_salessuggestion.d.ts" />
"use strict";
var formSuggestion = (function () {
	"use strict";
	/** @type DevKit.FormSuggestion */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormSuggestion(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();