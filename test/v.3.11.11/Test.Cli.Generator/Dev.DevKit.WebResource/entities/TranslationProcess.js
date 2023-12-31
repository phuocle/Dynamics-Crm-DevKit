//@ts-check
///<reference path="TranslationProcess.d.ts" />
"use strict";
var formTranslationProcess = (function () {
	"use strict";
	/** @type DevKit.FormTranslationProcess */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormTranslationProcess(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();