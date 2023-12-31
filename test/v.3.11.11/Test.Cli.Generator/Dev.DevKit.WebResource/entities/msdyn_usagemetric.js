//@ts-check
///<reference path="msdyn_usagemetric.d.ts" />
"use strict";
var formmsdyn_usagemetric_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_usagemetric_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_usagemetric_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();