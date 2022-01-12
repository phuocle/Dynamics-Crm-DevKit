//@ts-check
///<reference path="ServiceAppointment.d.ts" />
"use strict";
var formServiceAppointment_Information = (function () {
	"use strict";
	/** @type DevKit.FormServiceAppointment_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormServiceAppointment_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();