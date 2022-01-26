//@ts-check
///<reference path="msdyn_contactsuggestionrule.d.ts" />
"use strict";
var formContact_suggestion_rule = (function () {
	"use strict";
	/** @type DevKit.FormContact_suggestion_rule */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormContact_suggestion_rule(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();