//@ts-check
///<reference path="msdyn_approval.d.ts" />
"use strict";
var formmsdyn_approval_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_approval_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_approval_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();