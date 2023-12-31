//@ts-check
///<reference path="msfp_project.d.ts" />
"use strict";
var formmsfp_project_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsfp_project_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsfp_project_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();