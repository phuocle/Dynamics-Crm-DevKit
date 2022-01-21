//@ts-check
///<reference path="msdyn_projecttaskstatususer.d.ts" />
"use strict";
var formmsdyn_projecttaskstatususer_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_projecttaskstatususer_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_projecttaskstatususer_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();