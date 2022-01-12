//@ts-check
///<reference path="SharePointDocumentLocation.d.ts" />
"use strict";
var formSharePointDocumentLocation_Information = (function () {
	"use strict";
	/** @type DevKit.FormSharePointDocumentLocation_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormSharePointDocumentLocation_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();