//@ts-check
///<reference path="msdyn_customerassetcategory.d.ts" />
"use strict";
var formmsdyn_customerassetcategory_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_customerassetcategory_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_customerassetcategory_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();