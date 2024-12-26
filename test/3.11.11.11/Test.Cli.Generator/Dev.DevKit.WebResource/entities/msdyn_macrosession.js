//@ts-check
///<reference path="msdyn_macrosession.d.ts" />
"use strict";
var formmsdyn_macrosession_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_macrosession_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_macrosession_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();