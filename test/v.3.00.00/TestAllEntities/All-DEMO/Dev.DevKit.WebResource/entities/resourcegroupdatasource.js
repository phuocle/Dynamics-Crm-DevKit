//@ts-check
///<reference path="resourcegroupdatasource.d.ts" />
"use strict";
var formresourcegroupdatasource_Information = (function () {
	"use strict";
	/** @type DevKit.Formresourcegroupdatasource_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formresourcegroupdatasource_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();