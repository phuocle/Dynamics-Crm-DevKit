//@ts-check
///<reference path="LanguageLocale.d.ts" />
"use strict";
var formLanguageLocale = (function () {
	"use strict";
	/** @type DevKit.FormLanguageLocale */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormLanguageLocale(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();