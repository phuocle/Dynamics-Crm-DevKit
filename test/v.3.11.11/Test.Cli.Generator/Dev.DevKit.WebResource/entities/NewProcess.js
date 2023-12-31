//@ts-check
///<reference path="NewProcess.d.ts" />
"use strict";
var formNewProcesses = (function () {
	"use strict";
	/** @type DevKit.FormNewProcesses */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormNewProcesses(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();