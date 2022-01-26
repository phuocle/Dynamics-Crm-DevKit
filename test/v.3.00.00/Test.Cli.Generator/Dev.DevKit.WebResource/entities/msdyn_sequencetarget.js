//@ts-check
///<reference path="msdyn_sequencetarget.d.ts" />
"use strict";
var formmsdyn_sequencetarget_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_sequencetarget_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_sequencetarget_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();