//@ts-check
///<reference path="UII_workflowstep.d.ts" />
"use strict";
var formUII_workflowstep_Information = (function () {
	"use strict";
	/** @type DevKit.FormUII_workflowstep_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormUII_workflowstep_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();