//@ts-check
///<reference path="msdyn_projecttask.d.ts" />
"use strict";
var formmsdyn_projecttask_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_projecttask_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_projecttask_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formmsdyn_projecttask_New_Form = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_projecttask_New_Form */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_projecttask_New_Form(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();