//@ts-check
///<reference path="UII_workflow.d.ts" />
"use strict";
var formUII_workflow_Information = (function () {
	"use strict";
	/** @type DevKit.FormUII_workflow_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormUII_workflow_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();