//@ts-check
///<reference path="BookableResourceCategory.d.ts" />
"use strict";
var formBookableResourceCategory_Information = (function () {
	"use strict";
	/** @type DevKit.FormBookableResourceCategory_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormBookableResourceCategory_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();