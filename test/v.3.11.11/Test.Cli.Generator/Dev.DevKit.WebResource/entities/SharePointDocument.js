//@ts-check
///<reference path="SharePointDocument.d.ts" />
"use strict";
var formSharePointDocument_Information = (function () {
	"use strict";
	/** @type DevKit.FormSharePointDocument_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormSharePointDocument_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();