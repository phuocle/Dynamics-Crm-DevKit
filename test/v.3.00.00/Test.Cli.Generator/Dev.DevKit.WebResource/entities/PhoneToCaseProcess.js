//@ts-check
///<reference path="PhoneToCaseProcess.d.ts" />
"use strict";
var formPhoneToCaseProcess = (function () {
	"use strict";
	/** @type DevKit.FormPhoneToCaseProcess */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormPhoneToCaseProcess(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();