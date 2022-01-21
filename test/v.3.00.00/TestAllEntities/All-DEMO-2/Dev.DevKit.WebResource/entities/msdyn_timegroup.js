//@ts-check
///<reference path="msdyn_timegroup.d.ts" />
"use strict";
var formFulfillment_Preference_Quick_Create_Form = (function () {
	"use strict";
	/** @type DevKit.FormFulfillment_Preference_Quick_Create_Form */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormFulfillment_Preference_Quick_Create_Form(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formmsdyn_timegroup_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_timegroup_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_timegroup_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();