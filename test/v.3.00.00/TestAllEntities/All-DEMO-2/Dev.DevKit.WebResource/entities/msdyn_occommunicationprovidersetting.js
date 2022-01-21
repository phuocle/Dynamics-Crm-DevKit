//@ts-check
///<reference path="msdyn_occommunicationprovidersetting.d.ts" />
"use strict";
var formmsdyn_occommunicationprovidersetting_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_occommunicationprovidersetting_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_occommunicationprovidersetting_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();