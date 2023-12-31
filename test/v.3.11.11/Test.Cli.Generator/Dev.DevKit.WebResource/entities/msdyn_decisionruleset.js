//@ts-check
///<reference path="msdyn_decisionruleset.d.ts" />
"use strict";
var formmsdyn_decisionruleset_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_decisionruleset_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_decisionruleset_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();