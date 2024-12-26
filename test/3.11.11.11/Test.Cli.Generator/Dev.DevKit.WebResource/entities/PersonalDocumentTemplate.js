//@ts-check
///<reference path="PersonalDocumentTemplate.d.ts" />
"use strict";
var formPersonalDocumentTemplate_Information = (function () {
	"use strict";
	/** @type DevKit.FormPersonalDocumentTemplate_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormPersonalDocumentTemplate_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();