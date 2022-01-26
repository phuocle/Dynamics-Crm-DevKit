//@ts-check
///<reference path="PDFSetting.d.ts" />
"use strict";
var formPDFSetting_Information = (function () {
	"use strict";
	/** @type DevKit.FormPDFSetting_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormPDFSetting_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();