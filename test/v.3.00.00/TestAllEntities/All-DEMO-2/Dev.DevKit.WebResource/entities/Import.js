//@ts-check
///<reference path="Import.d.ts" />
"use strict";
var formImport_Information = (function () {
	"use strict";
	/** @type DevKit.FormImport_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormImport_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();