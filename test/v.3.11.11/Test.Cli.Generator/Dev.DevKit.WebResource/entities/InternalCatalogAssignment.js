//@ts-check
///<reference path="InternalCatalogAssignment.d.ts" />
"use strict";
var formInternalCatalogAssignment_Information = (function () {
	"use strict";
	/** @type DevKit.FormInternalCatalogAssignment_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormInternalCatalogAssignment_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();