//@ts-check
///<reference path="EnvironmentVariableValue.d.ts" />
"use strict";
var formEnvironmentVariableValue_Information = (function () {
	"use strict";
	/** @type DevKit.FormEnvironmentVariableValue_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormEnvironmentVariableValue_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();