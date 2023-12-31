//@ts-check
///<reference path="msdyn_priority.d.ts" />
"use strict";
var formmsdyn_priority_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_priority_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_priority_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();