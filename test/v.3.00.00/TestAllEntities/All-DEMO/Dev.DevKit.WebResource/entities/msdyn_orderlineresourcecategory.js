//@ts-check
///<reference path="msdyn_orderlineresourcecategory.d.ts" />
"use strict";
var formmsdyn_orderlineresourcecategory_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_orderlineresourcecategory_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_orderlineresourcecategory_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();