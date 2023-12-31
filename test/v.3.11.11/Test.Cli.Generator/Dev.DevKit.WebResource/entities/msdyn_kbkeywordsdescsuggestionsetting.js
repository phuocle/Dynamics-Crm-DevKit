//@ts-check
///<reference path="msdyn_kbkeywordsdescsuggestionsetting.d.ts" />
"use strict";
var formmsdyn_kbkeywordsdescsuggestionsetting_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_kbkeywordsdescsuggestionsetting_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_kbkeywordsdescsuggestionsetting_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();