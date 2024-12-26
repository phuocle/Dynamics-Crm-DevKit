//@ts-check
///<reference path="msdyn_KPIEventDefinition.d.ts" />
"use strict";
var formmsdyn_KPIEventDefinition_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_KPIEventDefinition_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_KPIEventDefinition_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();