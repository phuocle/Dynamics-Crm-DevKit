//@ts-check
///<reference path="ImportFile.d.ts" />
"use strict";
var formImportfile = (function () {
	"use strict";
	/** @type DevKit.FormImportfile */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormImportfile(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();