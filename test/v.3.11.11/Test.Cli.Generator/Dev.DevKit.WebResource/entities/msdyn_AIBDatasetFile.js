//@ts-check
///<reference path="msdyn_AIBDatasetFile.d.ts" />
"use strict";
var formmsdyn_AIBDatasetFile_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_AIBDatasetFile_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_AIBDatasetFile_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();