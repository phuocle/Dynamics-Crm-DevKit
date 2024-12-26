//@ts-check
///<reference path="solutioncomponentconfiguration.d.ts" />
"use strict";
var formsolutioncomponentconfiguration_Information = (function () {
	"use strict";
	/** @type DevKit.Formsolutioncomponentconfiguration_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formsolutioncomponentconfiguration_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();