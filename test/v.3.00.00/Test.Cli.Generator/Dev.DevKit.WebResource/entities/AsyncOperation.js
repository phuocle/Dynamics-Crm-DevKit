//@ts-check
///<reference path="AsyncOperation.d.ts" />
"use strict";
var formAsyncOperation_Information = (function () {
	"use strict";
	/** @type DevKit.FormAsyncOperation_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormAsyncOperation_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();