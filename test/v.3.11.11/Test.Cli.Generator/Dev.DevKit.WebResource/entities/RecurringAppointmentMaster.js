//@ts-check
///<reference path="RecurringAppointmentMaster.d.ts" />
"use strict";
var formRecurring_Appointment = (function () {
	"use strict";
	/** @type DevKit.FormRecurring_Appointment */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormRecurring_Appointment(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();