//@ts-check
///<reference path="ExportSolutionUpload.d.ts" />
"use strict";
var formExportSolutionUpload_Information = (function () {
	"use strict";
	/** @type DevKit.FormExportSolutionUpload_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormExportSolutionUpload_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();