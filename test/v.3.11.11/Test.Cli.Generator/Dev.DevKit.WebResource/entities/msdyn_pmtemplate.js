//@ts-check
///<reference path="msdyn_pmtemplate.d.ts" />
"use strict";
var formmsdyn_pmtemplate_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_pmtemplate_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_pmtemplate_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();