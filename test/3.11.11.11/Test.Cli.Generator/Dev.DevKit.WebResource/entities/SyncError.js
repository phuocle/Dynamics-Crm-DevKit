//@ts-check
///<reference path="SyncError.d.ts" />
"use strict";
var formSync_Error = (function () {
	"use strict";
	/** @type DevKit.FormSync_Error */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormSync_Error(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();