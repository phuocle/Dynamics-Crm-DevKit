//@ts-check
///<reference path="msdyn_expensecategory.d.ts" />
"use strict";
var formmsdyn_expensecategory_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_expensecategory_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_expensecategory_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();