//@ts-check
///<reference path="msdyn_solutioncomponentdatasource.d.ts" />
"use strict";
var formmsdyn_solutioncomponentdatasource_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_solutioncomponentdatasource_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_solutioncomponentdatasource_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();