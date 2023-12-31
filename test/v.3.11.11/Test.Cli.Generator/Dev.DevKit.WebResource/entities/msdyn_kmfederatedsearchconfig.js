//@ts-check
///<reference path="msdyn_kmfederatedsearchconfig.d.ts" />
"use strict";
var formSearch_provider_Main_form = (function () {
	"use strict";
	/** @type DevKit.FormSearch_provider_Main_form */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormSearch_provider_Main_form(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();