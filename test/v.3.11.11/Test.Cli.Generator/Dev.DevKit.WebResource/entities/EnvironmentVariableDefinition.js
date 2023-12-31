//@ts-check
///<reference path="EnvironmentVariableDefinition.d.ts" />
"use strict";
var formEnvironmentVariableDefinition_Information = (function () {
	"use strict";
	/** @type DevKit.FormEnvironmentVariableDefinition_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormEnvironmentVariableDefinition_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();