//@ts-check
///<reference path="OpportunitySalesProcess.d.ts" />
"use strict";
var formOpportunitySalesProcesses = (function () {
	"use strict";
	/** @type DevKit.FormOpportunitySalesProcesses */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormOpportunitySalesProcesses(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();