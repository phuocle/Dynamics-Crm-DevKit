//@ts-check
///<reference path="msdyn_project.d.ts" />
"use strict";
var formCreate_Project = (function () {
	"use strict";
	/** @type DevKit.FormCreate_Project */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormCreate_Project(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formmsdyn_project_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_project_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_project_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();