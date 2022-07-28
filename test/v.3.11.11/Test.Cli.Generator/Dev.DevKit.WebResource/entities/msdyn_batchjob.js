//@ts-check
///<reference path="msdyn_batchjob.d.ts" />
"use strict";
var formmsdyn_batchjob_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_batchjob_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_batchjob_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();