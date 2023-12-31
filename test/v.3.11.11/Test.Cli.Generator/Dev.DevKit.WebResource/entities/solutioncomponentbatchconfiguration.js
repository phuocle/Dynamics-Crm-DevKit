//@ts-check
///<reference path="solutioncomponentbatchconfiguration.d.ts" />
"use strict";
var formsolutioncomponentbatchconfiguration_Information = (function () {
	"use strict";
	/** @type DevKit.Formsolutioncomponentbatchconfiguration_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formsolutioncomponentbatchconfiguration_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();