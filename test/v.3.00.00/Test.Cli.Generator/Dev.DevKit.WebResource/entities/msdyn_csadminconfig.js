//@ts-check
///<reference path="msdyn_csadminconfig.d.ts" />
"use strict";
var formmsdyn_csadminconfig_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_csadminconfig_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_csadminconfig_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formInformation_Main_FallbackForm = (function () {
	"use strict";
	/** @type DevKit.FormInformation_Main_FallbackForm */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormInformation_Main_FallbackForm(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();