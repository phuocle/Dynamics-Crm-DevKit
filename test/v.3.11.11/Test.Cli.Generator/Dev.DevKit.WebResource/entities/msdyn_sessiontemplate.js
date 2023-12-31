//@ts-check
///<reference path="msdyn_sessiontemplate.d.ts" />
"use strict";
var formmsdyn_sessiontemplate_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_sessiontemplate_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_sessiontemplate_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();