//@ts-check
///<reference path="StageSolutionUpload.d.ts" />
"use strict";
var formStageSolutionUpload_Information = (function () {
	"use strict";
	/** @type DevKit.FormStageSolutionUpload_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormStageSolutionUpload_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();