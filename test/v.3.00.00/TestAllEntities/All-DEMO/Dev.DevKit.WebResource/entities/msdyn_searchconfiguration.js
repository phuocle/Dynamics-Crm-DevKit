//@ts-check
///<reference path="msdyn_searchconfiguration.d.ts" />
"use strict";
var formmsdyn_searchconfiguration_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_searchconfiguration_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_searchconfiguration_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();