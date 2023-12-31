//@ts-check
///<reference path="DocumentIndex.d.ts" />
"use strict";
var formDocumentIndex_Information = (function () {
	"use strict";
	/** @type DevKit.FormDocumentIndex_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormDocumentIndex_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();