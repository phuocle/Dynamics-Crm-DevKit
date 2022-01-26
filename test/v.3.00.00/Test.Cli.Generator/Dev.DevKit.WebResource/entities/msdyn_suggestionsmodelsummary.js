//@ts-check
///<reference path="msdyn_suggestionsmodelsummary.d.ts" />
"use strict";
var formmsdyn_suggestionsmodelsummary_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_suggestionsmodelsummary_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_suggestionsmodelsummary_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();