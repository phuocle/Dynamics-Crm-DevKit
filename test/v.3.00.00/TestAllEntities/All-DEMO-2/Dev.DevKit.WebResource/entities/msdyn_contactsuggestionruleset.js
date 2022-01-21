//@ts-check
///<reference path="msdyn_contactsuggestionruleset.d.ts" />
"use strict";
var formContact_suggestion_ruleset = (function () {
	"use strict";
	/** @type DevKit.FormContact_suggestion_ruleset */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormContact_suggestion_ruleset(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();