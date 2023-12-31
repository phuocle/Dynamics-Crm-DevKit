//@ts-check
///<reference path="Workflow.d.ts" />
"use strict";
var formWorkflow_Information = (function () {
	"use strict";
	/** @type DevKit.FormWorkflow_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormWorkflow_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();