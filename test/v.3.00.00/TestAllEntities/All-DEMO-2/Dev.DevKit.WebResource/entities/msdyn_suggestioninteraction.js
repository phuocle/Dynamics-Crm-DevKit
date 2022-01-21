//@ts-check
///<reference path="msdyn_suggestioninteraction.d.ts" />
"use strict";
var formmsdyn_suggestioninteraction_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_suggestioninteraction_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_suggestioninteraction_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();