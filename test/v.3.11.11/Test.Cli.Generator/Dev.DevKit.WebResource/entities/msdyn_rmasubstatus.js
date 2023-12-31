//@ts-check
///<reference path="msdyn_rmasubstatus.d.ts" />
"use strict";
var formmsdyn_rmasubstatus_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_rmasubstatus_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_rmasubstatus_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();