//@ts-check
///<reference path="msdyn_AIBFileAttachedData.d.ts" />
"use strict";
var formmsdyn_AIBFileAttachedData_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_AIBFileAttachedData_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_AIBFileAttachedData_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();