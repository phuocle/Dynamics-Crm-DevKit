//@ts-check
///<reference path="ImportJob.d.ts" />
"use strict";
var formImportJob_Information = (function () {
	"use strict";
	/** @type DevKit.FormImportJob_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormImportJob_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();