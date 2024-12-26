//@ts-check
///<reference path="msdyn_solutioncomponentcountdatasource.d.ts" />
"use strict";
var formmsdyn_solutioncomponentcountdatasource_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_solutioncomponentcountdatasource_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_solutioncomponentcountdatasource_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();