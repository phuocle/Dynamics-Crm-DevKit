//@ts-check
///<reference path="Catalog.d.ts" />
"use strict";
var formCatalog_Information = (function () {
	"use strict";
	/** @type DevKit.FormCatalog_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormCatalog_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();