//@ts-check
///<reference path="msdyn_notesanalysisconfig.d.ts" />
"use strict";
var formmsdyn_notesanalysisconfig_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_notesanalysisconfig_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_notesanalysisconfig_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();