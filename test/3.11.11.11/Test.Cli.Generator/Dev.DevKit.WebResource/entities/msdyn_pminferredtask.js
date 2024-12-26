//@ts-check
///<reference path="msdyn_pminferredtask.d.ts" />
"use strict";
var formmsdyn_pminferredtask_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_pminferredtask_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_pminferredtask_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();