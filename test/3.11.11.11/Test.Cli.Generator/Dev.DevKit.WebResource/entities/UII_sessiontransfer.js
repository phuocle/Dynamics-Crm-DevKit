//@ts-check
///<reference path="UII_sessiontransfer.d.ts" />
"use strict";
var formUII_sessiontransfer_Information = (function () {
	"use strict";
	/** @type DevKit.FormUII_sessiontransfer_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormUII_sessiontransfer_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();