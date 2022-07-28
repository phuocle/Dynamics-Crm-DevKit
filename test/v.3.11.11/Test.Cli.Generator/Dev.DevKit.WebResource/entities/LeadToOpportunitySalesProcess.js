//@ts-check
///<reference path="LeadToOpportunitySalesProcess.d.ts" />
"use strict";
var formLeadToOpportunitySalesProcesses = (function () {
	"use strict";
	/** @type DevKit.FormLeadToOpportunitySalesProcesses */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormLeadToOpportunitySalesProcesses(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();