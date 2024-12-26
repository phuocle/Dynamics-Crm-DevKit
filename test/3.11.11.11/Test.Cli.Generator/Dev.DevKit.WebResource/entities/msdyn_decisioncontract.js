//@ts-check
///<reference path="msdyn_decisioncontract.d.ts" />
"use strict";
var formmsdyn_decisioncontract_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_decisioncontract_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_decisioncontract_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();