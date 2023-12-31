//@ts-check
///<reference path="UII_workflow_workflowstep_mapping.d.ts" />
"use strict";
var formUII_workflow_workflowstep_mapping_Information = (function () {
	"use strict";
	/** @type DevKit.FormUII_workflow_workflowstep_mapping_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormUII_workflow_workflowstep_mapping_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();