//@ts-check
///<reference path="msdyn_rtvsubstatus.d.ts" />
"use strict";
var formmsdyn_rtvsubstatus_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_rtvsubstatus_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_rtvsubstatus_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();