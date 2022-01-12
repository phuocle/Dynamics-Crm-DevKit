//@ts-check
///<reference path="ExpiredProcess.d.ts" />
"use strict";
var formExpiredProcess = (function () {
	"use strict";
	/** @type DevKit.FormExpiredProcess */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormExpiredProcess(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();