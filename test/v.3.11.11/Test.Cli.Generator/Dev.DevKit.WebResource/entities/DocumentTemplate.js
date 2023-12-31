//@ts-check
///<reference path="DocumentTemplate.d.ts" />
"use strict";
var formDocumentTemplate_Information = (function () {
	"use strict";
	/** @type DevKit.FormDocumentTemplate_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormDocumentTemplate_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();