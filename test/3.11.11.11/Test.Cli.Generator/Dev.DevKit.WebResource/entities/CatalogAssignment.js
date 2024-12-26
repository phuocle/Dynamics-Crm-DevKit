//@ts-check
///<reference path="CatalogAssignment.d.ts" />
"use strict";
var formCatalogAssignment_Information = (function () {
	"use strict";
	/** @type DevKit.FormCatalogAssignment_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormCatalogAssignment_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();