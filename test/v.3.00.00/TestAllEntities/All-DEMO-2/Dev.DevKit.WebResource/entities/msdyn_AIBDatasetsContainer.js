//@ts-check
///<reference path="msdyn_AIBDatasetsContainer.d.ts" />
"use strict";
var formmsdyn_AIBDatasetsContainer_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_AIBDatasetsContainer_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_AIBDatasetsContainer_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();