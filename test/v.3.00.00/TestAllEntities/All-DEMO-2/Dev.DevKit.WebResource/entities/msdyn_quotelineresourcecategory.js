//@ts-check
///<reference path="msdyn_quotelineresourcecategory.d.ts" />
"use strict";
var formmsdyn_quotelineresourcecategory_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_quotelineresourcecategory_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_quotelineresourcecategory_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();