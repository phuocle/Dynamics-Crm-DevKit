//@ts-check
///<reference path="msdyn_panetabconfiguration.d.ts" />
"use strict";
var formmsdyn_panetabconfiguration_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_panetabconfiguration_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_panetabconfiguration_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();