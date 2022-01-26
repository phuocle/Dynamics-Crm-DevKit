//@ts-check
///<reference path="ImportMap.d.ts" />
"use strict";
var formImportMap_Information = (function () {
	"use strict";
	/** @type DevKit.FormImportMap_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormImportMap_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();