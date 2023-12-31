//@ts-check
///<reference path="msdyn_adaptivecardconfiguration.d.ts" />
"use strict";
var formmsdyn_adaptivecardconfiguration_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_adaptivecardconfiguration_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_adaptivecardconfiguration_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();