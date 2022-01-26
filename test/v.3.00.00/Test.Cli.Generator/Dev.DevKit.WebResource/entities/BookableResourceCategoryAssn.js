//@ts-check
///<reference path="BookableResourceCategoryAssn.d.ts" />
"use strict";
var formBookableResourceCategoryAssn_Quick_Create = (function () {
	"use strict";
	/** @type DevKit.FormBookableResourceCategoryAssn_Quick_Create */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormBookableResourceCategoryAssn_Quick_Create(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formBookableResourceCategoryAssn_Information = (function () {
	"use strict";
	/** @type DevKit.FormBookableResourceCategoryAssn_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormBookableResourceCategoryAssn_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();