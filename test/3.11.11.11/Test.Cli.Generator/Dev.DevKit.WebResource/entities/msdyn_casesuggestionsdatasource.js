//@ts-check
///<reference path="msdyn_casesuggestionsdatasource.d.ts" />
"use strict";
var formmsdyn_casesuggestionsdatasource_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_casesuggestionsdatasource_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_casesuggestionsdatasource_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();