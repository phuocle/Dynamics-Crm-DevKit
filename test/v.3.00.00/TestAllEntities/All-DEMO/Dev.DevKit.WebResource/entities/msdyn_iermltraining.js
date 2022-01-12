//@ts-check
///<reference path="msdyn_iermltraining.d.ts" />
"use strict";
var formModel_training_details_main_form = (function () {
	"use strict";
	/** @type DevKit.FormModel_training_details_main_form */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormModel_training_details_main_form(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();