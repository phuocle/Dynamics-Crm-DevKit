//@ts-check
///<reference path="msdyn_AIBDatasetRecord.d.ts" />
"use strict";
var formmsdyn_AIBDatasetRecord_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_AIBDatasetRecord_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_AIBDatasetRecord_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();