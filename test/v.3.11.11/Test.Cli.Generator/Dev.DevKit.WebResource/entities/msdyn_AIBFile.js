//@ts-check
///<reference path="msdyn_AIBFile.d.ts" />
"use strict";
var formmsdyn_AIBFile_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_AIBFile_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_AIBFile_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();