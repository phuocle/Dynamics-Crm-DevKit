//@ts-check
///<reference path="solutioncomponentrelationshipconfiguration.d.ts" />
"use strict";
var formsolutioncomponentrelationshipconfiguration_Information = (function () {
	"use strict";
	/** @type DevKit.Formsolutioncomponentrelationshipconfiguration_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formsolutioncomponentrelationshipconfiguration_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();