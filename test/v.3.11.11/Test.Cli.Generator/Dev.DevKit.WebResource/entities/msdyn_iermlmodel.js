//@ts-check
///<reference path="msdyn_iermlmodel.d.ts" />
"use strict";
var formmsdyn_iermlmodel_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_iermlmodel_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_iermlmodel_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();