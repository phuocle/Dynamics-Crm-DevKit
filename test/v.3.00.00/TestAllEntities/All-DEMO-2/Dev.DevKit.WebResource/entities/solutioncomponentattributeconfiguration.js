//@ts-check
///<reference path="solutioncomponentattributeconfiguration.d.ts" />
"use strict";
var formsolutioncomponentattributeconfiguration_Information = (function () {
	"use strict";
	/** @type DevKit.Formsolutioncomponentattributeconfiguration_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formsolutioncomponentattributeconfiguration_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();